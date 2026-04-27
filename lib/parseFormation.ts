export interface FormationAssocieeData {
  code: string;
  titre: string;
  duree: string | null;
  niveau: string;
}

export interface FormationData {
  titre: string;
  reference: string;
  duree: string;
  prix: string;
  description: string;
  objectifs: string[];
  publicConcerne: string;
  prerequis: string;
  programme: string[];
  niveau?: string;
  format?: string;
  formationsAssociees?: FormationAssocieeData[];
}

/**
 * Parse le texte brut extrait d'un .docx de formation NK3D
 * et retourne un objet structuré.
 *
 * Structure attendue dans le doc :
 *   Formation : CATIA V5 - Tôlerie - Ref : SMD
 *   Information pratique : Durée - 2 jours - 14h - Prix : XXXXX € T.T.C
 *   [description libre]
 *   Objectifs pédagogiques / À l'issue de la formation...
 *   Public concerné
 *   Prérequis
 *   Programme de la formation
 */
export function parseFormationData(raw: string): FormationData {
  const lines = raw
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  // ── Titre & Référence ──────────────────────────────────────────────
  let titre = "";
  let reference = "";

  const formationLine = lines.find((l) =>
    l.toLowerCase().startsWith("formation")
  );
  if (formationLine) {
    // "Formation : CATIA V5 - Tôlerie - Ref : SMD"
    const withoutLabel = formationLine.replace(/^formation\s*:\s*/i, "");
    const refMatch = withoutLabel.match(/[-–]\s*ref\s*:\s*([A-Z0-9_-]+)/i);
    if (refMatch) {
      reference = refMatch[1].trim();
      titre = withoutLabel
        .replace(/[-–]\s*ref\s*:\s*[A-Z0-9_-]+/i, "")
        .trim();
    } else {
      titre = withoutLabel.trim();
    }
  }

  // ── Durée & Prix ──────────────────────────────────────────────────
  let duree = "";
  let prix = "";

  const pratiqueLine = lines.find((l) =>
    l.toLowerCase().includes("information pratique") ||
    l.toLowerCase().includes("durée")
  );
  if (pratiqueLine) {
    const dureeMatch = pratiqueLine.match(
      /(\d+\s*jours?\s*[-–]?\s*\d*\s*h?\w*)/i
    );
    if (dureeMatch) duree = dureeMatch[1].trim();

    const prixMatch = pratiqueLine.match(/prix\s*:\s*([\d\s.,XXXXXX€]+T\.T\.C)/i);
    if (prixMatch) prix = prixMatch[1].trim();
  }

  // ── Sections : repérer les index des titres ───────────────────────
  const sectionIndex = (keywords: string[]) =>
    lines.findIndex((l) =>
      keywords.some((kw) => l.toLowerCase().includes(kw.toLowerCase()))
    );

  const idxObjectifs = sectionIndex(["objectifs pédagogiques"]);
  const idxPublic = sectionIndex(["public concerné", "public visé"]);
  const idxPrerequis = sectionIndex(["prérequis"]);
  const idxProgramme = sectionIndex(["programme de la formation", "programme"]);

  // ── Description : entre l'info pratique et les objectifs ─────────
  const idxPratique = lines.findIndex(
    (l) =>
      l.toLowerCase().includes("information pratique") ||
      l.toLowerCase().includes("durée")
  );

  const descEnd = idxObjectifs > 0 ? idxObjectifs : idxPublic;
  const descLines = lines
    .slice(idxPratique + 1, descEnd)
    .filter(
      (l) =>
        !l.toLowerCase().startsWith("formation") &&
        !l.toLowerCase().includes("durée") &&
        !l.toLowerCase().includes("prix")
    );
  const description = descLines.join(" ").trim();

  // ── Objectifs : liste à puces entre Objectifs et Public ──────────
  const objectifsEnd = idxPublic > 0 ? idxPublic : idxPrerequis;
  const objectifsLines = lines
    .slice(idxObjectifs + 1, objectifsEnd)
    .filter(
      (l) =>
        !l.toLowerCase().includes("à l'issue") &&
        !l.toLowerCase().includes("le participant") &&
        l.length > 3
    )
    .map((l) => l.replace(/^[-–•*]\s*/, "").trim())
    .filter(Boolean);
  const objectifs = objectifsLines;

  // ── Public concerné ───────────────────────────────────────────────
  const publicEnd =
    idxPrerequis > 0 ? idxPrerequis : idxProgramme > 0 ? idxProgramme : lines.length;
  const publicConcerne = lines.slice(idxPublic + 1, publicEnd).join(" ").trim();

  // ── Prérequis ─────────────────────────────────────────────────────
  const prerequisEnd = idxProgramme > 0 ? idxProgramme : lines.length;
  const prerequis = lines.slice(idxPrerequis + 1, prerequisEnd).join(" ").trim();

  // ── Programme ─────────────────────────────────────────────────────
  const programmeLines = lines
    .slice(idxProgramme + 1)
    .map((l) => l.replace(/^[-–•*]\s*/, "").trim())
    .filter((l) => l.length > 2);

  return {
    titre,
    reference,
    duree,
    prix,
    description,
    objectifs,
    publicConcerne,
    prerequis,
    programme: programmeLines,
  };
}
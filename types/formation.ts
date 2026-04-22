// ─── Types formations ─────────────────────────────────────────────────────
// Shape identique aux futurs schémas Sanity.
// Lors de la migration : remplacer les imports depuis data/formations.ts
// par des fetch vers l'API Sanity (groq queries).

export type NiveauFormation = "Débutant" | "Intermédiaire" | "Avancé" | "Tous niveaux";
export type FormatFormation = "Présentiel" | "Distanciel" | "Présentiel / Distanciel";
export type CategorieFormation =
  | "catia-v5"
| "catia-dmu"
  | "3dexperience"
  | "composer"
  | "solidworks";

export interface JourProgramme {
  jour: string;       // "Jour 1"
  titre: string;      // "Prise en main & Sketcher"
  contenu: string;    // description courte
}

export interface Formation {
  slug: string;                   // identifiant URL ex: "v5f"
  code: string;                   // ex: "V5F"
  categorie: CategorieFormation;
  categorieLabel: string;         // ex: "CATIA V5"
  titre: string;
  description: string;            // résumé court (2-3 lignes)
  duree: string | null;           // ex: "5 jours (35h)"
  days: number | null;            // pour l'accordion home
  niveau: NiveauFormation;
  format: FormatFormation;
  financement: string;            // ex: "OPCO · CPF · FIF-PL"
  objectifs: string[];
  programme: JourProgramme[];
  publicVise: string;
  prerequis: string;
  pdfUrl: string | null;          // Sanity asset URL ou null
  formationsAssociees: string[];  // slugs des formations liées
}
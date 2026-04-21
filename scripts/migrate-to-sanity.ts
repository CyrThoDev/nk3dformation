/**
 * Script de migration : importe toutes les données statiques dans Sanity.
 *
 * Prérequis :
 *   1. Token API "Editor" dans .env.local : SANITY_API_WRITE_TOKEN=...
 *   2. Lancer : npm run migrate:sanity
 *
 * Idempotent : utilise createOrReplace, relançable sans doublons.
 */

import { createClient } from "@sanity/client";
import { FORMATIONS } from "../data/formations";
import { STATS, PROCESS, TESTIMONIALS } from "../components/nk3d/constants";

async function main() {
  // ── Config ──────────────────────────────────────────────────────────────────
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const token     = process.env.SANITY_API_WRITE_TOKEN;

  if (!projectId || !dataset || !token) {
    console.error(
      "❌  Variables manquantes. Vérifie NEXT_PUBLIC_SANITY_PROJECT_ID, " +
      "NEXT_PUBLIC_SANITY_DATASET et SANITY_API_WRITE_TOKEN dans .env.local"
    );
    process.exit(1);
  }

  const client = createClient({
    projectId,
    dataset,
    token,
    apiVersion: "2024-01-01",
    useCdn: false,
  });

  function slugField(value: string) {
    return { _type: "slug" as const, current: value };
  }

  // ── 1. Formations ───────────────────────────────────────────────────────────
  console.log(`\n📚  Migration de ${FORMATIONS.length} formations…`);

  for (const f of FORMATIONS) {
    await client.createOrReplace({
      _type:          "formation",
      _id:            `formation-${f.slug}`,
      slug:           slugField(f.slug),
      code:           f.code,
      categorie:      f.categorie,
      categorieLabel: f.categorieLabel,
      titre:          f.titre,
      description:    f.description,
      duree:          f.duree ?? undefined,
      days:           f.days  ?? undefined,
      niveau:         f.niveau,
      format:         f.format,
      financement:    f.financement,
      objectifs:      f.objectifs,
      programme:      f.programme.map((p) => ({
        _type:   "object",
        _key:    p.jour.replace(/\s/g, "-").toLowerCase(),
        jour:    p.jour,
        titre:   p.titre,
        contenu: p.contenu,
      })),
      publicVise: f.publicVise,
      prerequis:  f.prerequis,
    });
    process.stdout.write(`  ✓ ${f.code}\n`);
  }

  // Relier les formations associées (second passage)
  console.log("\n🔗  Liaison des formations associées…");
  for (const f of FORMATIONS) {
    if (!f.formationsAssociees?.length) continue;

    const refs = f.formationsAssociees.map((s, i) => ({
      _type:  "reference" as const,
      _key:   `ref-${i}`,
      _ref:   `formation-${s}`,
      _weak:  true,  // évite l'erreur si la formation liée n'existe pas encore
    }));

    await client
      .patch(`formation-${f.slug}`)
      .set({ formationsAssociees: refs })
      .commit();

    process.stdout.write(`  ✓ ${f.code} → [${f.formationsAssociees.join(", ")}]\n`);
  }

  // ── 2. Témoignages ──────────────────────────────────────────────────────────
  console.log(`\n💬  Migration de ${TESTIMONIALS.length} témoignages…`);

  for (let i = 0; i < TESTIMONIALS.length; i++) {
    const t = TESTIMONIALS[i];
    await client.createOrReplace({
      _type:    "testimonial",
      _id:      `testimonial-${i}`,
      name:     t.name,
      initials: t.initials,
      role:     t.role    || undefined,
      company:  t.company || undefined,
      text:     t.text,
      order:    i + 1,
    });
    process.stdout.write(`  ✓ ${t.name}\n`);
  }

  // ── 3. Paramètres du site ───────────────────────────────────────────────────
  console.log("\n⚙️   Migration des paramètres du site…");

  await client.createOrReplace({
    _type: "siteSettings",
    _id:   "siteSettings",

    heroBadge:       "Certifié Dassault Systèmes",
    heroTitre:       "CATIA V5, 3DEXPERIENCE & CATIA COMPOSER",
    heroAccroche:    "Formations sur mesure pour l'industrie",
    heroDescription: "Je conçois et anime des formations adaptées à votre contexte métier, votre niveau et vos outils — du débutant à l'expert.",
    heroReassurances: ["Accompagnement sur-mesure", "Flexibilité totale", "Interlocuteur unique"],

    stats: STATS.map((s) => ({ _type: "object", _key: s.label, value: s.value, label: s.label })),

    processTitre:       "Un accompagnement 100% sur-mesure",
    processDescription: "Chaque formation est construite autour de vos outils, vos pièces et vos enjeux. Je m'adapte au niveau et au contexte de chaque équipe.",
    processSteps: PROCESS.map((p) => ({
      _type: "object",
      _key:  p.n,
      n:     p.n,
      title: p.title,
      desc:  p.desc,
    })),

    consultingTitre:       "Un support méthodologie à la demande",
    consultingDescription: "Pas besoin d'une formation complète pour avancer. J'interviens ponctuellement, selon vos besoins, pour débloquer vos équipes et renforcer vos pratiques CAO.",
    consultingCards: [
      { _type: "object", _key: "audit",    iconKey: "search",   title: "Audit et diagnostic CAO / PLM",      desc: "Analyse de vos processus et de vos méthodes de travail, afin d'identifier des besoins de support ou de formation." },
      { _type: "object", _key: "licences", iconKey: "layers",   title: "Recommandations licences et métier", desc: "Conseils sur l'utilisation de vos licences CATIA. Proposition de méthodologie sur certains ateliers." },
      { _type: "object", _key: "outil",    iconKey: "settings", title: "Aide au choix d'outil",              desc: "Accompagnement dans la prise en main ou la migration d'un logiciel CAO (CATIA V5, 3DEXPERIENCE…)." },
      { _type: "object", _key: "revue",    iconKey: "grid",     title: "Revue de maquettes",                 desc: "Audit de vos maquettes numériques et transmission des bonnes pratiques à vos équipes." },
      { _type: "object", _key: "conseil",  iconKey: "message",  title: "Conseil à la carte",                 desc: "Une question ? Un blocage ? Je réponds à vos enjeux spécifiques sans engagement de volume." },
    ],

    contactNom:       "Nicolas Kreutz",
    contactTitre:     "Formateur certifié Dassault Systèmes",
    contactEmail:     "nicolas@nk3dformation.fr",
    contactTelephone: "+33 6 65 77 71 51",
  });

  console.log("  ✓ siteSettings");
  console.log("\n✅  Migration terminée !\n");
}

main().catch((err) => {
  console.error("❌  Erreur :", err);
  process.exit(1);
});

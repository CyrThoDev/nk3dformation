/**
 * Patch le contenu pédagogique des formations depuis les PDFs.
 * N'écrase PAS orderRank ni les autres champs non listés.
 *
 * Usage :
 *   npm run patch:content              → dataset courant (.env.local)
 *   NEXT_PUBLIC_SANITY_DATASET=production npm run patch:content
 */

import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token     = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  console.error("❌  Variables manquantes.");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: "2024-01-01", useCdn: false });

type ProgrammeItem = { _key: string; _type: "object"; jour: string; titre: string; contenu: string };

interface Patch {
  id: string;
  objectifs?: string[];
  programme?: ProgrammeItem[];
  publicVise?: string;
  prerequis?: string;
  duree?: string;
  days?: number;
}

const patches: Patch[] = [

  // ── V5F ───────────────────────────────────────────────────────────────────
  {
    id: "formation-v5-v5f",
    objectifs: [
      "Acquérir les connaissances de base nécessaires pour la conception sous CATIA V5",
      "Utiliser les fonctions basées sur les esquisses pour concevoir des pièces solides",
      "Appliquer les fonctions d'habillage",
      "Apprendre à concevoir et à gérer des pièces dans le contexte d'un assemblage",
      "Réaliser des dessins de pièce ou d'assemblage",
    ],
    programme: [
      { _key: "j1", _type: "object", jour: "Jour 1", titre: "Présentation & Sketcher",          contenu: "Interface graphique, ateliers CATIA V5, notions de base, géométrie simple, contraintes, analyse et modification des esquisses" },
      { _key: "j2", _type: "object", jour: "Jour 2", titre: "Part Design — bases",               contenu: "Extrusion, poche, révolution, nervure, dépouille, congé, chanfrein, mesures et analyse" },
      { _key: "j3", _type: "object", jour: "Jour 3", titre: "Assembly Design — introduction",    contenu: "Présentation de l'atelier, insertion, déplacement et positionnement des composants, contraintes d'assemblage" },
      { _key: "j4", _type: "object", jour: "Jour 4", titre: "Assembly Design — avancé",          contenu: "Conception en contexte, détection d'interférences, gestion des enregistrements, mesures, distances, sections et scènes" },
      { _key: "j5", _type: "object", jour: "Jour 5", titre: "Drafting",                          contenu: "Cadre et cartouche, vues, cotations et annotations, nomenclature, impression et export PDF" },
    ],
    publicVise: "Dessinateurs, concepteurs.",
    prerequis:  "Bonne connaissance de l'environnement Windows.",
  },

  // ── V5E ───────────────────────────────────────────────────────────────────
  {
    id: "formation-v5-v5e",
    objectifs: [
      "Créer et analyser des pièces complexes sous CATIA V5",
      "Concevoir des pièces surfaciques",
      "Analyser et annoter des pièces 3D",
      "Créer des copies optimisées et des catalogues",
      "Concevoir des pièces complexes usinées et mécano-soudées",
      "Maîtriser la conception d'assemblages complexes et la méthode Squelette",
    ],
    programme: [
      { _key: "j1", _type: "object", jour: "Jour 1", titre: "Pièces complexes",      contenu: "Conception de pièces complexes, pièces surfaciques, analyse et annotation 3D" },
      { _key: "j2", _type: "object", jour: "Jour 2", titre: "Copies & catalogues",   contenu: "Copies optimisées, catalogues, pièces usinées et mécano-soudées" },
      { _key: "j3", _type: "object", jour: "Jour 3", titre: "Assemblages complexes", contenu: "Conception d'assemblage complexe, conception de pièces en contexte d'assemblage" },
      { _key: "j4", _type: "object", jour: "Jour 4", titre: "Méthode Squelette",     contenu: "Concevoir et assembler avec la méthode Squelette" },
      { _key: "j5", _type: "object", jour: "Jour 5", titre: "Projet de synthèse",    contenu: "Réalisation d'un projet complet de conception complexe selon cahier des charges" },
    ],
    publicVise: "Dessinateurs, concepteurs.",
    prerequis:  "Maîtriser les bases de CATIA V5 ou avoir suivi la formation CATIA V5 – V5F.",
  },

  // ── SMD ───────────────────────────────────────────────────────────────────
  {
    id: "formation-v5-smd",
    duree: "2 jours (14h)",
    days:  2,
    objectifs: [
      "Comprendre la philosophie et le procédé de création d'une pièce de tôlerie",
      "Définir les paramètres de tôlerie d'une pièce",
      "Concevoir les plaques, les plis et les bords tombés",
      "Habiller avec des fonctions telles que les découpes, les trous, les congés ou les chanfreins",
      "Réaliser les vues pliées ou dépliées et exporter la mise à plat dans un Drawing",
      "Exporter en .DXF pour la fabrication",
    ],
    programme: [
      { _key: "j1", _type: "object", jour: "Matin",      titre: "Atelier Generative Sheet Metal Design", contenu: "Présentation, paramètres de tôlerie, plaque de référence, reconnaissance sur solide mort, plis, mode déplié, grugeage, bords tombés" },
      { _key: "j2", _type: "object", jour: "Après-midi", titre: "Fonctions avancées & export",           contenu: "Découpes, trous, coins et chanfreins, emboutis standards et définis, transformations, copies optimisées, conception à corps multiples, standard 2D, export DXF" },
    ],
    publicVise: "Dessinateurs, concepteurs.",
    prerequis:  "Bonne connaissance de l'environnement Windows.",
  },

  // ── GS1 ───────────────────────────────────────────────────────────────────
  {
    id: "formation-v5-gs1",
    duree: "2 jours (14h)",
    days:  2,
    objectifs: [
      "Identifier et utiliser les outils spécifiques à l'atelier Conception Surfacique",
      "Créer une référence simple et une géométrie filaire",
      "Utiliser les éléments filaires pour créer des surfaces simples",
      "Créer des topologies propres à partir d'un ensemble de surfaces",
      "Détecter et corriger les discontinuités sur les courbes ou les surfaces",
      "Créer des solides à partir de surfaces",
    ],
    programme: [
      { _key: "j1", _type: "object", jour: "Matin",      titre: "Initiation GSD",          contenu: "Présentation de l'atelier GSD, géométrie filaire, fonctions de base pour créer des surfaces" },
      { _key: "j2", _type: "object", jour: "Après-midi", titre: "Surfaces & solidification", contenu: "Opérations sur la géométrie, finalisation dans Part Design, modification, détection et correction des discontinuités" },
    ],
    publicVise: "Dessinateurs, concepteurs.",
    prerequis:  "Maîtriser les bases de CATIA V5 ou avoir suivi la formation Les bases de CATIA V5 – Fondamental (V5F).",
  },

  // ── FTA ───────────────────────────────────────────────────────────────────
  {
    id: "formation-v5-fta",
    objectifs: [
      "Générer des tolérances et des annotations 3D pour comprendre les dimensions des pièces",
      "Ajouter des annotations 3D à une pièce",
      "Gérer et positionner les annotations 3D",
      "Créer et gérer des vues et des plans d'annotation",
      "Gérer la géométrie 3D associée aux annotations 3D",
    ],
    programme: [
      { _key: "j1", _type: "object", jour: "Matin",      titre: "Principes FTA & annotations",  contenu: "Présentation de l'atelier FTA, vues de projection, sections et coupes, annotations et tolérances 3D, Tolerancing Advisor" },
      { _key: "j2", _type: "object", jour: "Après-midi", titre: "Standards & fonctions avancées", contenu: "Standards ISO, annotations sémantiques et non sémantiques, dimensions encadrées, zones restreintes, filetage et taraudage, captures" },
    ],
    publicVise: "Dessinateurs, concepteurs.",
    prerequis:  "Connaissance des fondamentaux de CATIA V5. Avoir suivi le V5F.",
  },

  // ── ELI ───────────────────────────────────────────────────────────────────
  {
    id: "formation-v5-eli",
    duree: "3 jours (21h)",
    days:  3,
    objectifs: [
      "Acquérir les connaissances nécessaires pour la conception de harnais électriques sous CATIA V5",
      "Utiliser les ateliers Electrical Harness Installation (EHI) et Electrical Harness Assembly (EHA)",
      "Créer et gérer des harnais et segments de harnais",
      "Gérer les fils, câbles, protections et gaines",
      "Analyser et valider le harnais électrique final",
    ],
    programme: [
      { _key: "j1", _type: "object", jour: "Jour 1", titre: "Composants électriques", contenu: "Introduction à la gestion des composants électriques, définition des composants, catalogue de composants, placement dans la maquette" },
      { _key: "j2", _type: "object", jour: "Jour 2", titre: "Harnais électriques",    contenu: "Création et gestion des harnais, segments de harnais, points de branchement, mou local, protections et gaines, utilisation des supports" },
      { _key: "j3", _type: "object", jour: "Jour 3", titre: "Fils, câbles & analyse", contenu: "Mesure d'inertie, gestion des fils et câbles, importation des données électriques externes, analyse du harnais/faisceau" },
    ],
    publicVise: "Dessinateurs et concepteurs systèmes électriques.",
    prerequis:  "Maîtriser les bases de CATIA V5 ou avoir suivi les formations CATIA V5 – V5F et CATIA V5 – V5E.",
  },
];

async function main() {
  console.log(`\n🔧  Patch contenu — dataset "${dataset}"\n`);
  for (const p of patches) {
    const patch = client.patch(p.id);
    const fields: Record<string, unknown> = {};
    if (p.objectifs)  fields.objectifs  = p.objectifs;
    if (p.programme)  fields.programme  = p.programme;
    if (p.publicVise) fields.publicVise = p.publicVise;
    if (p.prerequis)  fields.prerequis  = p.prerequis;
    if (p.duree)      fields.duree      = p.duree;
    if (p.days)       fields.days       = p.days;
    await patch.set(fields).commit();
    console.log(`  ✓ ${p.id}`);
  }
  console.log("\n✅  Patch terminé !\n");
}

main().catch((err) => { console.error("❌", err); process.exit(1); });

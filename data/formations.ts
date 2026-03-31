import type { Formation } from "../types/formation";

// ─── Données mockées ──────────────────────────────────────────────────────
// À remplacer par des fetch Sanity lors de la migration :
//
//   import { client } from "@/sanity/lib/client";
//   export const getFormation = (slug: string) =>
//     client.fetch(`*[_type == "formation" && slug.current == $slug][0]`, { slug });
//   export const getAllFormations = () =>
//     client.fetch(`*[_type == "formation"] | order(ordre asc)`);

export const FORMATIONS: Formation[] = [
  // ── CATIA V5 Fondamentaux ──────────────────────────────────────────────
  {
    slug: "v5f",
    code: "V5F",
    categorie: "catia-v5",
    categorieLabel: "CATIA V5",
    titre: "Fondamentaux – Conception mécanique de base",
    description:
      "Maîtriser l'environnement CATIA V5, le Part Design, l'Assembly Design et le Sketcher pour concevoir des pièces mécaniques industrielles de A à Z.",
    duree: "5 jours (35h)",
    days: 5,
    niveau: "Débutant",
    format: "Présentiel / Distanciel",
    financement: "OPCO · CPF · FIF-PL",
    objectifs: [
      "Naviguer efficacement dans l'interface CATIA V5",
      "Créer des esquisses paramétriques avec le Sketcher",
      "Modéliser des pièces 3D avec le Part Design",
      "Assembler des composants avec l'Assembly Design",
      "Générer une mise en plan basique",
    ],
    programme: [
      { jour: "Jour 1", titre: "Prise en main & Sketcher", contenu: "Interface, navigation 3D, esquisses contraintes" },
      { jour: "Jour 2", titre: "Part Design — bases", contenu: "Extrusion, révolution, congés, chanfreins" },
      { jour: "Jour 3", titre: "Part Design — avancé", contenu: "Nervures, dépouilles, coque, patterns" },
      { jour: "Jour 4", titre: "Assembly Design", contenu: "Contraintes d'assemblage, sous-assemblages, nomenclature" },
      { jour: "Jour 5", titre: "Mise en plan & bilan", contenu: "Vues, cotation, cartouche, exercice de synthèse" },
    ],
    publicVise: "Ingénieurs, techniciens et dessinateurs industriels souhaitant intégrer CATIA V5 dans leur pratique.",
    prerequis: "Notions de dessin technique recommandées. Aucune expérience CATIA requise.",
    pdfUrl: null, // sera remplacé par l'URL Sanity asset
    formationsAssociees: ["v5-v5e", "v5-gdr", "v5-gs1"],
  },

  // ── CATIA V5 Mise en plan ──────────────────────────────────────────────
  {
    slug: "v5-gdr",
    code: "V5-GDR",
    categorie: "catia-v5",
    categorieLabel: "CATIA V5",
    titre: "Mise en plan",
    description:
      "Créer et gérer des mises en plan professionnelles à partir de modèles 3D CATIA V5 — vues, cotation, tolérancement et cartouche.",
    duree: "1 jour (7h)",
    days: 1,
    niveau: "Intermédiaire",
    format: "Présentiel / Distanciel",
    financement: "OPCO · CPF",
    objectifs: [
      "Générer des vues 2D depuis un modèle 3D",
      "Appliquer les normes de cotation ISO",
      "Gérer les tolérances dimensionnelles et géométriques",
      "Personnaliser et compléter un cartouche",
      "Exporter en PDF ou DXF",
    ],
    programme: [
      { jour: "Matin", titre: "Vues & sections", contenu: "Vues principales, coupes, détails, vues auxiliaires" },
      { jour: "Après-midi", titre: "Cotation & export", contenu: "Cotation ISO, tolérances, annotations, export PDF/DXF" },
    ],
    publicVise: "Utilisateurs CATIA V5 ayant des bases en modélisation 3D.",
    prerequis: "Maîtrise du Part Design CATIA V5 (V5F ou équivalent).",
    pdfUrl: null,
    formationsAssociees: ["v5f", "v5-fta"],
  },

  // ── CATIA V5 Surfacique ────────────────────────────────────────────────
  {
    slug: "v5-gs1",
    code: "V5-GS1",
    categorie: "catia-v5",
    categorieLabel: "CATIA V5",
    titre: "Initiation modélisation de surface",
    description:
      "Découvrir les outils de surfacique GSD de CATIA V5 pour créer des formes complexes non réalisables en modélisation volumique pure.",
    duree: "1 jour (7h)",
    days: 1,
    niveau: "Intermédiaire",
    format: "Présentiel / Distanciel",
    financement: "OPCO · CPF",
    objectifs: [
      "Comprendre la logique surfacique vs volumique",
      "Créer des surfaces de base : extrudée, révolution, balayage",
      "Assembler et joindre des surfaces",
      "Convertir une surface en solide",
    ],
    programme: [
      { jour: "Matin", titre: "Initiation GSD", contenu: "Environnement, wireframe, surfaces de base" },
      { jour: "Après-midi", titre: "Surfaces avancées", contenu: "Balayage, lissage, jointure, solidification" },
    ],
    publicVise: "Concepteurs CATIA V5 souhaitant aborder la modélisation de forme.",
    prerequis: "Bonne maîtrise du Part Design (V5F ou V5-V5E recommandé).",
    pdfUrl: null,
    formationsAssociees: ["v5f", "v5-v5e"],
  },

  // ── CATIA V5 Avancé ────────────────────────────────────────────────────
  {
    slug: "v5-v5e",
    code: "V5-V5E",
    categorie: "catia-v5",
    categorieLabel: "CATIA V5",
    titre: "Pièces et Assemblages Avancés",
    description:
      "Approfondir la maîtrise de CATIA V5 avec les fonctions avancées du Part Design et de l'Assembly Design pour des conceptions industrielles complexes.",
    duree: "5 jours (35h)",
    days: 5,
    niveau: "Avancé",
    format: "Présentiel / Distanciel",
    financement: "OPCO · CPF · FIF-PL",
    objectifs: [
      "Utiliser les fonctions avancées du Part Design",
      "Gérer les configurations et les paramètres",
      "Créer des assemblages complexes multi-niveaux",
      "Automatiser des tâches répétitives",
      "Analyser et résoudre les problèmes de conception",
    ],
    programme: [
      { jour: "Jour 1", titre: "Part Design avancé", contenu: "Fonctions complexes, transformations, corps multiples" },
      { jour: "Jour 2", titre: "Paramétrage", contenu: "Formules, tables de conception, configurations" },
      { jour: "Jour 3", titre: "Assembly Design avancé", contenu: "Assemblages flexibles, contraintes avancées" },
      { jour: "Jour 4", titre: "Gestion de données", contenu: "Liens, publications, gestion des erreurs" },
      { jour: "Jour 5", titre: "Projet de synthèse", contenu: "Exercice complet sur pièce industrielle" },
    ],
    publicVise: "Concepteurs CATIA V5 expérimentés souhaitant approfondir leurs compétences.",
    prerequis: "Maîtrise solide du Part Design et Assembly Design (V5F ou 2 ans de pratique).",
    pdfUrl: null,
    formationsAssociees: ["v5f", "v5-gs1", "v5-fta"],
  },

  // ── CATIA V5 Tôlerie ──────────────────────────────────────────────────
  {
    slug: "v5-smd",
    code: "V5-SMD",
    categorie: "catia-v5",
    categorieLabel: "CATIA V5",
    titre: "Conception d'une pièce de tôlerie",
    description:
      "Modéliser des pièces de tôlerie avec CATIA V5 Sheet Metal Design : pliage, dépliage, congés de pliage et export mise à plat.",
    duree: "1 jour (7h)",
    days: 1,
    niveau: "Intermédiaire",
    format: "Présentiel / Distanciel",
    financement: "OPCO · CPF",
    objectifs: [
      "Créer des pièces de tôlerie paramétriques",
      "Appliquer les paramètres matière (K-factor, rayon de pliage)",
      "Générer le développé (mise à plat)",
      "Exporter pour FAO / découpe laser",
    ],
    programme: [
      { jour: "Matin", titre: "Bases Sheet Metal", contenu: "Environnement, parois, pliages, découpages" },
      { jour: "Après-midi", titre: "Mise à plat & export", contenu: "Développé, paramètres matière, export DXF" },
    ],
    publicVise: "Concepteurs et techniciens travaillant sur des pièces en tôle.",
    prerequis: "Bases CATIA V5 Part Design (V5F ou équivalent).",
    pdfUrl: null,
    formationsAssociees: ["v5f", "v5-asl"],
  },

  // ── CATIA V5 FTA ──────────────────────────────────────────────────────
  {
    slug: "v5-fta",
    code: "V5-FTA",
    categorie: "catia-v5",
    categorieLabel: "CATIA V5",
    titre: "Functional Tolerancing & Annotations",
    description:
      "Annoter directement le modèle 3D avec le tolérancement fonctionnel ISO selon la norme GPS, en vue d'un bureau d'études sans dessin 2D.",
    duree: "1 jour (7h)",
    days: 1,
    niveau: "Intermédiaire",
    format: "Présentiel / Distanciel",
    financement: "OPCO · CPF",
    objectifs: [
      "Comprendre les principes du tolérancement GPS",
      "Annoter un modèle 3D (MBD — Model Based Definition)",
      "Appliquer tolérances dimensionnelles et géométriques",
      "Valider la conformité avec la norme ISO",
    ],
    programme: [
      { jour: "Matin", titre: "Principes FTA & GPS", contenu: "Normes ISO, références, tolérances géométriques" },
      { jour: "Après-midi", titre: "Application CATIA", contenu: "Annotations 3D, vues de capture, export" },
    ],
    publicVise: "Concepteurs et méthodes travaillant en environnement MBD.",
    prerequis: "Maîtrise du Part Design et bases en dessin technique / tolérancement.",
    pdfUrl: null,
    formationsAssociees: ["v5-gdr", "3dx-fta"],
  },

  // ── DMU Navigator ─────────────────────────────────────────────────────
  {
    slug: "v5-dmn",
    code: "V5-DMN",
    categorie: "catia-dmu",
    categorieLabel: "CATIA V5 DMU",
    titre: "DMU Navigator",
    description:
      "Consulter et analyser une maquette numérique complexe avec CATIA DMU Navigator sans licence de conception.",
    duree: "1 jour (7h)",
    days: 1,
    niveau: "Débutant",
    format: "Présentiel / Distanciel",
    financement: "OPCO · CPF",
    objectifs: [
      "Naviguer dans une maquette numérique volumineuse",
      "Effectuer des mesures et des analyses",
      "Générer des sections et des vues éclipsées",
      "Produire des rapports de consultation",
    ],
    programme: [
      { jour: "Matin", titre: "Navigation & analyse", contenu: "Chargement, navigation, mesures, sections" },
      { jour: "Après-midi", titre: "Annotation & rapport", contenu: "Annotations, comparaison, export rapport" },
    ],
    publicVise: "Techniciens méthodes, chefs de projet, équipes de production.",
    prerequis: "Aucun prérequis CATIA nécessaire.",
    pdfUrl: null,
    formationsAssociees: ["v5-kin", "v5-spa"],
  },

  // ── DMU Cinématique ───────────────────────────────────────────────────
  {
    slug: "v5-kin",
    code: "V5-KIN",
    categorie: "catia-dmu",
    categorieLabel: "CATIA V5 DMU",
    titre: "DMU Cinématique",
    description:
      "Simuler le comportement cinématique de mécanismes et valider les mouvements d'un assemblage CATIA V5.",
    duree: "1 jour (7h)",
    days: 1,
    niveau: "Intermédiaire",
    format: "Présentiel / Distanciel",
    financement: "OPCO · CPF",
    objectifs: [
      "Définir des joints cinématiques",
      "Simuler et animer un mécanisme",
      "Détecter les interférences dynamiques",
      "Générer des traces de mouvement",
    ],
    programme: [
      { jour: "Matin", titre: "Joints & mécanismes", contenu: "Types de joints, degrés de liberté, lois de commande" },
      { jour: "Après-midi", titre: "Simulation & analyse", contenu: "Animation, interférences, enveloppes de mouvement" },
    ],
    publicVise: "Concepteurs mécaniciens travaillant sur des ensembles mobiles.",
    prerequis: "Maîtrise de l'Assembly Design CATIA V5.",
    pdfUrl: null,
    formationsAssociees: ["v5-dmn", "v5-spa", "v5-fit"],
  },

  // ── 3DEXPERIENCE Fondamentaux ─────────────────────────────────────────
  {
    slug: "3dx-3df",
    code: "3DX-3DF",
    categorie: "3dexperience",
    categorieLabel: "3DEXPERIENCE",
    titre: "Les fondamentaux de la conception volumique",
    description:
      "Apprendre les bases de la conception 3D sur la plateforme 3DEXPERIENCE de Dassault Systèmes, équivalent CATIA V5 dans le cloud.",
    duree: "5 jours (35h)",
    days: 5,
    niveau: "Débutant",
    format: "Présentiel / Distanciel",
    financement: "OPCO · CPF · FIF-PL",
    objectifs: [
      "Prendre en main la plateforme 3DEXPERIENCE",
      "Créer des esquisses et des pièces paramétriques",
      "Assembler des composants",
      "Collaborer sur la plateforme cloud",
      "Générer des mises en plan",
    ],
    programme: [
      { jour: "Jour 1", titre: "Plateforme & interface", contenu: "Connexion, rôles, applications, gestion des données" },
      { jour: "Jour 2", titre: "Sketcher 3DX", contenu: "Esquisses contraintes, géométries de référence" },
      { jour: "Jour 3", titre: "Part Design 3DX", contenu: "Modélisation volumique, fonctions principales" },
      { jour: "Jour 4", titre: "Assembly Design 3DX", contenu: "Assemblage, contraintes, nomenclature" },
      { jour: "Jour 5", titre: "Mise en plan & collaboration", contenu: "Drafting, partage, gestion de révisions" },
    ],
    publicVise: "Ingénieurs et techniciens migrant vers la 3DEXPERIENCE ou débutant en CAO.",
    prerequis: "Notions de dessin technique. Aucune expérience 3DEXPERIENCE requise.",
    pdfUrl: null,
    formationsAssociees: ["3dx-3dmt", "3dx-gtx", "3dx-gdr"],
  },

  // ── 3DEXPERIENCE Transition ───────────────────────────────────────────
  {
    slug: "3dx-3dmt",
    code: "3DX-3DMT",
    categorie: "3dexperience",
    categorieLabel: "3DEXPERIENCE",
    titre: "Transition vers la 3DEXPERIENCE pour les concepteurs",
    description:
      "Accompagner les utilisateurs CATIA V5 dans leur migration vers la plateforme 3DEXPERIENCE en mettant en parallèle les deux environnements.",
    duree: "2 jours (14h)",
    days: 2,
    niveau: "Intermédiaire",
    format: "Présentiel / Distanciel",
    financement: "OPCO · CPF",
    objectifs: [
      "Comprendre l'architecture de la plateforme 3DEXPERIENCE",
      "Retrouver ses repères CATIA V5 dans le nouvel environnement",
      "Gérer ses données dans le cloud (PLM 3DX)",
      "Collaborer en temps réel avec son équipe",
    ],
    programme: [
      { jour: "Jour 1", titre: "Plateforme & différences V5/3DX", contenu: "Concepts PLM, interface, gestion des rôles et licences" },
      { jour: "Jour 2", titre: "Modélisation & collaboration", contenu: "Équivalences Part/Assembly/Drafting, flux collaboratif" },
    ],
    publicVise: "Concepteurs CATIA V5 dont l'entreprise migre vers 3DEXPERIENCE.",
    prerequis: "Maîtrise de CATIA V5 (V5F minimum).",
    pdfUrl: null,
    formationsAssociees: ["3dx-3df", "3dx-gtx"],
  },

  // ── COMPOSER Fondamentaux ─────────────────────────────────────────────
  {
    slug: "3dvia-cps",
    code: "3DVIA-CPS",
    categorie: "composer",
    categorieLabel: "COMPOSER",
    titre: "CATIA V5 COMPOSER — Fondamentaux",
    description:
      "Créer de la documentation technique interactive et des animations 3D à partir de données CAO avec CATIA COMPOSER.",
    duree: "3 jours (21h)",
    days: 3,
    niveau: "Débutant",
    format: "Présentiel / Distanciel",
    financement: "OPCO · CPF",
    objectifs: [
      "Importer et gérer des données CAO dans COMPOSER",
      "Créer des vues techniques annotées",
      "Réaliser des animations de montage/démontage",
      "Produire des livrables interactifs (SVG, HTML, PDF)",
    ],
    programme: [
      { jour: "Jour 1", titre: "Import & interface", contenu: "Import CAO, gestion des vues, navigation" },
      { jour: "Jour 2", titre: "Documentation technique", contenu: "Annotations, callouts, vues éclipsées, styles" },
      { jour: "Jour 3", titre: "Animation & export", contenu: "Timeline, animations, export PDF/SVG/HTML5" },
    ],
    publicVise: "Techniciens documentation, méthodes, support après-vente.",
    prerequis: "Aucun prérequis CAO requis. Notions de base en informatique.",
    pdfUrl: null,
    formationsAssociees: ["3dvia-play", "3dv-anim", "3dv-doc"],
  },

  // ── Prérequis conception 3D ────────────────────────────────────────────
  {
    slug: "pre-3d",
    code: "PRE-3D",
    categorie: "general",
    categorieLabel: "Mécanique générale",
    titre: "Prérequis à la conception 3D",
    description:
      "Acquérir les bases du dessin technique industriel et de la lecture de plan pour aborder sereinement toute formation CAO.",
    duree: null,
    days: null,
    niveau: "Débutant",
    format: "Présentiel / Distanciel",
    financement: "OPCO · CPF",
    objectifs: [
      "Lire et interpréter un plan technique industriel",
      "Comprendre les projections orthogonales",
      "Maîtriser les conventions de cotation ISO",
      "Identifier les types de vues et de coupes",
    ],
    programme: [
      { jour: "Jour 1", titre: "Lecture de plan", contenu: "Projections, vues, coupes, conventions" },
      { jour: "Jour 2", titre: "Cotation & tolérances", contenu: "Cotation ISO, tolérances, état de surface" },
    ],
    publicVise: "Toute personne souhaitant intégrer une formation CAO sans bases en dessin technique.",
    prerequis: "Aucun prérequis.",
    pdfUrl: null,
    formationsAssociees: ["v5f", "3dx-3df"],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────
export const getFormationBySlug = (slug: string): Formation | undefined =>
  FORMATIONS.find((f) => f.slug === slug);

export const getFormationsByCategory = (categorie: string): Formation[] =>
  FORMATIONS.filter((f) => f.categorie === categorie);

export const getFormationsAssociees = (slugs: string[]): Formation[] =>
  slugs.map((s) => FORMATIONS.find((f) => f.slug === s)).filter(Boolean) as Formation[];

export const getAllSlugs = (): string[] => FORMATIONS.map((f) => f.slug);
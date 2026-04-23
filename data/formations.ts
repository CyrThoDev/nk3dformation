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
    slug: "v5-v5f",
    code: "V5-V5F",
    categorie: "catia-v5",
    categorieLabel: "CATIA V5",
    titre: "Fondamentaux – Conception mécanique de base",
    description:
      "Maîtriser l'environnement CATIA V5, le Part Design, l'Assembly Design et le Sketcher pour concevoir des pièces mécaniques industrielles de A à Z.",
    duree: "5 jours (35h)",
    days: 5,
    niveau: "Débutant",
    format: "Présentiel / Distanciel",
    financement: "OPCO · FAF",
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
    financement: "OPCO",
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
    formationsAssociees: ["v5-v5f", "v5-fta"],
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
    financement: "OPCO",
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
    formationsAssociees: ["v5-v5f", "v5-v5e"],
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
    financement: "OPCO · FAF",
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
    formationsAssociees: ["v5-v5f", "v5-gs1", "v5-fta"],
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
    financement: "OPCO",
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
    formationsAssociees: ["v5-v5f", "v5-asl"],
  },

  // ── CATIA V5 FTA ──────────────────────────────────────────────────────
  {
    slug: "v5-fta",
    code: "V5-FTA",
    categorie: "catia-v5",
    categorieLabel: "CATIA V5",
    titre: "Tolérancements 3D et annotations fonctionnelles",
    description:
      "Annoter directement le modèle 3D avec le tolérancement fonctionnel ISO selon la norme GPS, en vue d'un bureau d'études sans dessin 2D.",
    duree: "1 jour (7h)",
    days: 1,
    niveau: "Intermédiaire",
    format: "Présentiel / Distanciel",
    financement: "OPCO",
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

  // ── CATIA V5 Conception électrique ────────────────────────────────────
  {
    slug: "v5-eli",
    code: "V5-ELI",
    categorie: "catia-v5",
    categorieLabel: "CATIA V5",
    titre: "Conception de composants électriques et harnais électrique 3D",
    description: "Concevoir et gérer des harnais électriques avec CATIA V5 Electrical Harness Design.",
    duree: "À définir",
    days: 2,
    niveau: "Intermédiaire",
    format: "Présentiel / Distanciel",
    financement: "OPCO",
    objectifs: [],
    programme: [],
    publicVise: "",
    prerequis: "Bases CATIA V5 Part Design.",
    pdfUrl: null,
    formationsAssociees: ["v5-ehf"],
  },

  // ── CATIA V5 Mise en plat de harnais ──────────────────────────────────
  {
    slug: "v5-ehf",
    code: "V5-EHF",
    categorie: "catia-v5",
    categorieLabel: "CATIA V5",
    titre: "Mise en plat de harnais",
    description: "Générer et exploiter la mise en plat de harnais électriques avec CATIA V5.",
    duree: "À définir",
    days: 1,
    niveau: "Intermédiaire",
    format: "Présentiel / Distanciel",
    financement: "OPCO",
    objectifs: [],
    programme: [],
    publicVise: "",
    prerequis: "V5-ELI ou équivalent.",
    pdfUrl: null,
    formationsAssociees: ["v5-eli"],
  },

  // ── CATIA V5 Consultation ──────────────────────────────────────────────
  {
    slug: "v5-consultation",
    code: "V5-Consultation",
    categorie: "catia-v5",
    categorieLabel: "CATIA V5",
    titre: "Consultation V5",
    description: "Session de consultation et d'accompagnement sur des problématiques spécifiques CATIA V5.",
    duree: "3 jours (21h)",
    days: 3,
    niveau: "Tous niveaux",
    format: "Présentiel / Distanciel",
    financement: "Sur devis",
    objectifs: [],
    programme: [],
    publicVise: "Utilisateurs CATIA V5 ayant des besoins spécifiques.",
    prerequis: "Pratique de CATIA V5.",
    pdfUrl: null,
    formationsAssociees: [],
  },

  // ── CATIA V5 Nouveautés ────────────────────────────────────────────────
  {
    slug: "v5-updates",
    code: "V5-UPDATES",
    categorie: "catia-v5",
    categorieLabel: "CATIA V5",
    titre: "Nouveautés CATIA V5",
    description: "Découvrir et maîtriser les nouvelles fonctionnalités des dernières versions de CATIA V5.",
    duree: "À définir",
    days: null,
    niveau: "Intermédiaire",
    format: "Présentiel / Distanciel",
    financement: "OPCO",
    objectifs: [],
    programme: [],
    publicVise: "Utilisateurs CATIA V5 souhaitant se mettre à jour.",
    prerequis: "Pratique de CATIA V5.",
    pdfUrl: null,
    formationsAssociees: [],
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
    financement: "OPCO",
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

  // ── DMU Space Analysis ────────────────────────────────────────────────
  {
    slug: "v5-spa",
    code: "V5-SPA",
    categorie: "catia-dmu",
    categorieLabel: "CATIA V5 DMU",
    titre: "DMU Space Analysis",
    description:
      "Analyser les espaces et détecter les interférences statiques entre composants d'un assemblage avec CATIA V5 DMU Space Analysis.",
    duree: "1 jour (7h)",
    days: 1,
    niveau: "Intermédiaire",
    format: "Présentiel / Distanciel",
    financement: "OPCO",
    objectifs: [],
    programme: [],
    publicVise: "",
    prerequis: "Maîtrise de l'Assembly Design CATIA V5.",
    pdfUrl: null,
    formationsAssociees: ["v5-dmn", "v5-kin", "v5-fit"],
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
    financement: "OPCO",
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

  // ── DMU Fitting ───────────────────────────────────────────────────────
  {
    slug: "v5-fit",
    code: "V5-FIT",
    categorie: "catia-dmu",
    categorieLabel: "CATIA V5 DMU",
    titre: "DMU Fitting",
    description:
      "Simuler les séquences de montage et démontage de composants pour valider les accessibilités et les gammes d'assemblage avec CATIA V5 DMU Fitting.",
    duree: "1 jour (7h)",
    days: 1,
    niveau: "Intermédiaire",
    format: "Présentiel / Distanciel",
    financement: "OPCO",
    objectifs: [],
    programme: [],
    publicVise: "",
    prerequis: "Maîtrise de l'Assembly Design CATIA V5.",
    pdfUrl: null,
    formationsAssociees: ["v5-dmn", "v5-kin", "v5-spa"],
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
    financement: "OPCO · FAF",
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
    financement: "OPCO",
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

  // ── 3DEXPERIENCE Tôlerie ─────────────────────────────────────────────
  {
    slug: "3dx-smd",
    code: "3DX-SMD",
    categorie: "3dexperience",
    categorieLabel: "3DEXPERIENCE",
    titre: "Conception de pièce de tôlerie",
    description:
      "Modéliser des pièces de tôlerie sur la plateforme 3DEXPERIENCE : pliage, dépliage et génération du développé.",
    duree: "2 jours (14h)",
    days: 2,
    niveau: "Intermédiaire",
    format: "Présentiel / Distanciel",
    financement: "OPCO",
    objectifs: [],
    programme: [],
    publicVise: "",
    prerequis: "Bases 3DEXPERIENCE Part Design (3DX-3DF ou équivalent).",
    pdfUrl: null,
    formationsAssociees: ["3dx-3df", "v5-smd"],
  },

  // ── 3DEXPERIENCE FTA ──────────────────────────────────────────────────
  {
    slug: "3dx-fta",
    code: "3DX-FTA",
    categorie: "3dexperience",
    categorieLabel: "3DEXPERIENCE",
    titre: "Tolérancements 3D et annotations fonctionnelles",
    description:
      "Annoter directement le modèle 3D avec le tolérancement fonctionnel ISO sur la plateforme 3DEXPERIENCE, en vue d'un bureau d'études sans dessin 2D.",
    duree: "1 jour (7h)",
    days: 1,
    niveau: "Intermédiaire",
    format: "Présentiel / Distanciel",
    financement: "OPCO",
    objectifs: [],
    programme: [],
    publicVise: "",
    prerequis: "Maîtrise du Part Design 3DEXPERIENCE et bases en tolérancement.",
    pdfUrl: null,
    formationsAssociees: ["3dx-3df", "v5-fta"],
  },

  // ── 3DEXPERIENCE Électrique ───────────────────────────────────────────
  {
    slug: "3dx-elg",
    code: "3DX-ELG",
    categorie: "3dexperience",
    categorieLabel: "3DEXPERIENCE",
    titre: "Conception de composants électriques et harnais électrique 3D",
    description:
      "Concevoir et intégrer des composants électriques 3D dans la plateforme 3DEXPERIENCE avec le rôle Electrical 3D Design.",
    duree: "3 jours (21h)",
    days: 3,
    niveau: "Intermédiaire",
    format: "Présentiel / Distanciel",
    financement: "OPCO",
    objectifs: [],
    programme: [],
    publicVise: "",
    prerequis: "Bases 3DEXPERIENCE Part Design (3DX-3DF ou équivalent).",
    pdfUrl: null,
    formationsAssociees: ["3dx-3df", "v5-eli"],
  },

  // ── COMPOSER Fondamentaux ─────────────────────────────────────────────
  {
    slug: "3dvia-cps",
    code: "3DVIA-CPS",
    categorie: "composer",
    categorieLabel: "COMPOSER",
    titre: "CATIA COMPOSER — Fondamentaux",
    description:
      "Créer de la documentation technique interactive et des animations 3D à partir de données CAO avec CATIA COMPOSER.",
    duree: "3 jours (21h)",
    days: 3,
    niveau: "Débutant",
    format: "Présentiel / Distanciel",
    financement: "OPCO",
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

  // ── COMPOSER Player ───────────────────────────────────────────────────
  {
    slug: "3dvia-play",
    code: "3DVIA-PLAY",
    categorie: "composer",
    categorieLabel: "COMPOSER",
    titre: "CATIA COMPOSER Player",
    description:
      "Exploiter et interagir avec des documents CATIA COMPOSER publiés via le Player : navigation, vues, animations et extraction d'informations.",
    duree: "1 jour (7h)",
    days: 1,
    niveau: "Débutant",
    format: "Présentiel / Distanciel",
    financement: "OPCO",
    objectifs: [],
    programme: [],
    publicVise: "",
    prerequis: "Aucun prérequis. Idéal pour les utilisateurs finaux des livrables COMPOSER.",
    pdfUrl: null,
    formationsAssociees: ["3dvia-cps"],
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
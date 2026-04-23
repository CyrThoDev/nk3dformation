import type { CategorieFormation } from "@/types/formation";

export const STATS = [
  { value: "30+",  label: "années d'expérience" },
  { value: "2500+", label: "Stagiaires formés" },
  { value: "94%",  label: "Taux de satisfaction" },
 
] as const;

export const PROCESS = [
  { n: "01", title: "Audit de besoins",       desc: "Analyse de votre contexte métier et du niveau de vos équipes." },
  { n: "02", title: "Programme sur-mesure",   desc: "Contenu adapté à vos logiciels, vos pièces, vos enjeux industriels." },
  { n: "03", title: "Lieux des formations", desc: "Sessions sur vos sites ou en distanciel." },
  { n: "04", title: "Suivi post-formation",   desc: "Support technique 30 jours après la fin de la formation inclus." },
] as const;

export const TESTIMONIALS = [
  {
    name: "Marti L.",
    role: "",
    company: "",
    initials: "ML",
    text: "Très bien, très pro avec des exercices très poussés. Merci Nicolas.",
  },
  {
    name: "Laurence M.",
    role: "",
    company: "",
    initials: "LM",
    text: "Superbe formation avec Nicolas. Il est patient, à l'écoute et nous a apporté beaucoup d'informations.",
  },
  {
    name: "Quentin G.",
    role: "",
    company: "",
    initials: "QG",
    text: "Formation personnalisée en cohérence avec mes attentes, avec un formateur pédagogue.",
  },
  {
    name: "Fanta N.",
    role: "",
    company: "",
    initials: "FN",
    text: "Un formateur très explicite, pédagogue et bienveillant. Merci Nicolas pour votre patience également.",
  },
  {
    name: "Maeva M.",
    role: "",
    company: "",
    initials: "MM",
    text: "Nicolas s'est adapté à mes besoins et nos problématiques. Merci à lui !",
  },
  {
    name: "Thibault C.",
    role: "",
    company: "",
    initials: "TC",
    text: "Professionnel qui maîtrise et connaît parfaitement le logiciel. Très bonne pédagogie. Merci.",
  },
  {
    name: "Carl H.",
    role: "",
    company: "",
    initials: "CH",
    text: "Nicolas est un excellent pédagogue. C'est un plaisir d'apprendre avec lui. Un grand merci à lui.",
  },
  {
    name: "Hervé M.",
    role: "",
    company: "",
    initials: "HM",
    text: "Très bonne pédagogie et très bonne connaissance de l'outil. Merci !",
  },
  {
    name: "Frederic C.",
    role: "",
    company: "",
    initials: "FC",
    text: "Très bonne connaissance du produit par notre formateur et pouvoir d'adaptation très appréciable.",
  },
  {
    name: "Yvan L.",
    role: "",
    company: "",
    initials: "YL",
    text: "J'ai trouvé la formation très utile, c'est très important d'avoir un professeur qui a beaucoup d'expérience dans le domaine. Cela nous permet, à nous les étudiants, d'apprendre beaucoup plus et de voir beaucoup plus.",
  },
] as const;

export const CATEGORY_META: Record<CategorieFormation, { label: string; tag: string; order: number }> = {
   "3dexperience": { label: "3DEXPERIENCE",       tag: "Plateforme Dassault",       order: 1 },
  "catia-v5":     { label: "CATIA V5",          tag: "Fondamentaux & Avancé",     order: 2 },
  "catia-dmu":    { label: "CATIA V5 DMU",       tag: "Maquette numérique",        order: 3 },
 
  "composer":     { label: "CATIA COMPOSER / 3DVIA", tag: "Documentation & Animation", order: 5 },
  "solidworks":   { label: "SOLIDWORKS",             tag: "Fondamentaux",       order: 6 },
};
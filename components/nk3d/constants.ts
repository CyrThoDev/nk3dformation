import type { CategorieFormation } from "@/types/formation";

export const STATS = [
  { value: "30+",  label: "années d'expérience" },
  { value: "2500+", label: "Stagiaires formés" },
  { value: "94%",  label: "Taux de satisfaction" },
 
] as const;

export const PROCESS = [
  { n: "01", title: "Audit de besoins",       desc: "Analyse de votre contexte métier et du niveau de vos équipes." },
  { n: "02", title: "Programme sur-mesure",   desc: "Contenu adapté à vos logiciels, vos pièces, vos enjeux industriels." },
  { n: "03", title: "Formation présentielle", desc: "Sessions sur site ou dans notre centre équipé en workstations CAO." },
  { n: "04", title: "Suivi post-formation",   desc: "Support technique 30 jours après la fin de la formation inclus." },
] as const;

export const TESTIMONIALS = [
  {
    name: "Marc Delorme",  role: "Ingénieur Bureau d'Études", company: "Safran", initials: "MD",
    text: "La formation CATIA V5 Avancé m'a permis de maîtriser la surfacique GSD en un temps record. Nicolas est un formateur hors pair, pédagogue et toujours disponible.",
  },
  {
    name: "Sophie Aubert", role: "Technicienne CAO",          company: "Airbus", initials: "SA",
    text: "Excellente formation, très bien structurée. J'ai immédiatement pu appliquer les acquis sur mon poste. Je recommande vivement NK 3D Formation.",
  },
  {
    name: "Thomas Rey",    role: "Responsable méthodes",      company: "Thales", initials: "TR",
    text: "La plateforme 3DEXPERIENCE n'avait plus de secrets après 4 jours avec Nicolas. Contenu riche, exemples concrets issus de l'industrie aéronautique.",
  },
] as const;

export const CATEGORY_META: Record<CategorieFormation, { label: string; tag: string; order: number }> = {
  "catia-v5":     { label: "CATIA V5",          tag: "Fondamentaux & Avancé",     order: 1 },
  "catia-metier": { label: "CATIA V5 Métier",    tag: "Électrique & Tôlerie",      order: 2 },
  "catia-dmu":    { label: "CATIA V5 DMU",       tag: "Maquette numérique",        order: 3 },
  "3dexperience": { label: "3DEXPERIENCE",       tag: "Plateforme Dassault",       order: 4 },
  "composer":     { label: "COMPOSER",           tag: "Documentation & Animation", order: 5 },
};
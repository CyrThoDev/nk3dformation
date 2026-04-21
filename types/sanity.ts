// ─── Types retournés par les queries GROQ ─────────────────────────────────────

export interface SanityStat {
  value: string;
  label: string;
}

export interface SanityProcessStep {
  n: string;
  title: string;
  desc: string;
}

export interface SanityConsultingCard {
  iconKey: "search" | "layers" | "settings" | "grid" | "zap" | "message";
  title: string;
  desc: string;
}

export interface SanityTestimonial {
  _id: string;
  name: string;
  initials: string;
  role?: string;
  company?: string;
  text: string;
}

/** Image Sanity (référence brute, pas encore transformée en URL) */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SanityImageRef = any;

export interface SanitySettings {
  heroBadge?: string;
  heroTitre?: string;
  heroAccroche?: string;
  heroDescription?: string;
  heroReassurances?: string[];
  heroImage?: SanityImageRef;
  stats?: SanityStat[];
  processTitre?: string;
  processDescription?: string;
  processSteps?: SanityProcessStep[];
  consultingTitre?: string;
  consultingDescription?: string;
  consultingCards?: SanityConsultingCard[];
  contactPhoto?: SanityImageRef;
  contactNom?: string;
  contactTitre?: string;
  contactEmail?: string;
  contactTelephone?: string;
}

export interface SanityFormationCard {
  _id: string;
  slug: string;
  code: string;
  categorie: string;
  categorieLabel: string;
  titre: string;
  description: string;
  duree: string | null;
  days: number | null;
  niveau: string;
  format: string;
  financement: string;
  pdfUrl: string | null;
}

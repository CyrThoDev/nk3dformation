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

export interface SanityFormationAssociee {
  slug: string;
  code: string;
  titre: string;
  categorie: string;
  duree: string | null;
  niveau: string;
}

export interface SanityFormationDetail extends SanityFormationCard {
  objectifs: string[] | null;
  programme: { jour: string; titre: string; contenu: string }[] | null;
  publicVise: string | null;
  prerequis: string | null;
  formationsAssociees: SanityFormationAssociee[] | null;
}

export interface SanityFormationCard {
  _id: string;
  slug: string;
  code: string;
  categorie: string;
  categorieLabel: string | null;
  titre: string;
  description: string | null;
  duree: string | null;
  days: number | null;
  niveau: string | null;
  format: string | null;
  financement: string | null;
  pdfUrl: string | null;
  hasContent: boolean;
}

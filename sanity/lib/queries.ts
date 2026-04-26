import { groq } from "next-sanity";

// ── Site Settings ─────────────────────────────────────────────────────────────

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    heroBadge,
    heroTitre,
    heroAccroche,
    heroDescription,
    heroReassurances,
    heroImage,
    stats,
    processTitre,
    processDescription,
    processSteps,
    consultingTitre,
    consultingDescription,
    consultingCards,
    contactPhoto,
    contactNom,
    contactTitre,
    contactEmail,
    contactTelephone
  }
`;

// ── Testimonials ──────────────────────────────────────────────────────────────

export const TESTIMONIALS_QUERY = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    initials,
    role,
    company,
    text
  }
`;

// ── Formations — liste complète (pour la home) ────────────────────────────────

export const FORMATIONS_QUERY = groq`
  *[_type == "formation"] | order(orderRank asc) {
    _id,
    "slug": slug.current,
    code,
    categorie,
    categorieLabel,
    titre,
    description,
    duree,
    days,
    niveau,
    format,
    financement,
    "pdfUrl": pdf.asset->url,
    "hasContent": count(objectifs) > 0
  }
`;

// ── Formations — slugs (pour generateStaticParams) ───────────────────────────

export const FORMATION_SLUGS_QUERY = groq`
  *[_type == "formation"][defined(slug.current)].slug.current
`;

// ── Formation — détail par slug ───────────────────────────────────────────────

export const FORMATION_BY_SLUG_QUERY = groq`
  *[_type == "formation" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    code,
    categorie,
    categorieLabel,
    titre,
    description,
    duree,
    days,
    niveau,
    format,
    financement,
    objectifs,
    programme,
    publicVise,
    prerequis,
    "pdfUrl": pdf.asset->url,
    "formationsAssociees": formationsAssociees[defined(@->)]->{
      "slug": slug.current,
      code,
      titre,
      categorie,
      duree,
      niveau
    }
  }
`;

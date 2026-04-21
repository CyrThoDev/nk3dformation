import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NK 3D Formation — Formateur CATIA V5 & 3DEXPERIENCE",
  description:
    "Nicolas Kreutz, formateur certifié Dassault Systèmes. Formations sur mesure en CATIA V5, 3DEXPERIENCE et CATIA COMPOSER pour les professionnels de l'industrie. Présentiel, finançables OPCO.",
  openGraph: {
    title: "NK 3D Formation — Formateur CATIA V5 & 3DEXPERIENCE",
    description:
      "Formations sur mesure en CATIA V5, 3DEXPERIENCE et CATIA COMPOSER. Certifié Dassault Systèmes, plus de 30 ans d'expérience.",
    url: "https://nk3dformation.fr",
    siteName: "NK 3D Formation",
    locale: "fr_FR",
    type: "website",
  },
};

import { sanityFetch } from "@/sanity/lib/client";
import {
  SITE_SETTINGS_QUERY,
  TESTIMONIALS_QUERY,
  FORMATIONS_QUERY,
} from "@/sanity/lib/queries";
import type { SanitySettings, SanityTestimonial, SanityFormationCard } from "@/types/sanity";

import { Nav } from "@/components/nk3d/layout/Nav";
import Hero from "@/components/nk3d/sections/Hero";
import { StatsBar } from "@/components/nk3d/sections/StatsBar";
import { FormationsSection } from "@/components/nk3d/sections/FormationSection";
import { Process } from "@/components/nk3d/sections/Process";
import { Consulting } from "@/components/nk3d/sections/Consulting";
import { Testimonials } from "@/components/nk3d/sections/Testimonials";
import { Contact } from "@/components/nk3d/sections/Contact";
import { Footer } from "@/components/nk3d/layout/Footer";

// Fallbacks statiques le temps que Sanity soit alimenté
import { STATS, PROCESS, TESTIMONIALS } from "@/components/nk3d/constants";

export default async function NK3DFormationPage() {
  const [settings, testimonials, formations] = await Promise.all([
    sanityFetch<SanitySettings>(SITE_SETTINGS_QUERY),
    sanityFetch<SanityTestimonial[]>(TESTIMONIALS_QUERY),
    sanityFetch<SanityFormationCard[]>(FORMATIONS_QUERY),
  ]);

  // Stats : Sanity en priorité, sinon fallback sur les constantes
  const stats = settings?.stats?.length
    ? settings.stats
    : STATS.map((s) => ({ value: s.value, label: s.label }));

  // Étapes process : Sanity en priorité, sinon fallback
  const processSteps = settings?.processSteps?.length
    ? settings.processSteps
    : PROCESS.map((p) => ({ n: p.n, title: p.title, desc: p.desc }));

  // Témoignages : Sanity en priorité, sinon fallback
  const testimonialItems = testimonials?.length
    ? testimonials
    : TESTIMONIALS.map((t, i) => ({
        _id: String(i),
        name: t.name,
        initials: t.initials,
        role: t.role || undefined,
        company: t.company || undefined,
        text: t.text,
      }));

  return (
    <>
      <Nav />
      <main>
        <Hero
          heroBadge={settings?.heroBadge}
          heroTitre={settings?.heroTitre}
          heroAccroche={settings?.heroAccroche}
          heroDescription={settings?.heroDescription}
          heroReassurances={settings?.heroReassurances}
          heroImage={settings?.heroImage}
        />
        <StatsBar stats={stats} />
        <FormationsSection formations={formations ?? []} />
        <Process
          titre={settings?.processTitre}
          description={settings?.processDescription}
          steps={processSteps}
        />
        <Consulting settings={settings} />
        <Testimonials items={testimonialItems} />
        <Contact settings={settings} />
      </main>
      <Footer />
    </>
  );
}

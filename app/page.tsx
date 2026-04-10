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

import { Nav } from "@/components/nk3d/layout/Nav";
import Hero from "@/components/nk3d/sections/Hero";
import { StatsBar } from "@/components/nk3d/sections/StatsBar";
import { FormationsSection } from "@/components/nk3d/sections/FormationSection";
import { Process } from "@/components/nk3d/sections/Process";
import { Consulting } from "@/components/nk3d/sections/Consulting";
import { Testimonials } from "@/components/nk3d/sections/Testimonials";

import { Contact } from "@/components/nk3d/sections/Contact";
import { Footer } from "@/components/nk3d/layout/Footer";

export default function NK3DFormationPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <FormationsSection />
        <Process />
        <Consulting />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

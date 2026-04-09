"use client";

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

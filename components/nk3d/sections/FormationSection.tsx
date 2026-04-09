"use client";

import { FORMATIONS } from "@/data/formations";
import { CATEGORY_META } from "../constants";
import type { CategorieFormation } from "@/types/formation";
import { Container } from "../ui/Container";
import { MeshDeco } from "../ui/MeshDeco";
import { SectionLabel } from "../ui/SectionLabel";
import { SectionTitle } from "../ui/SectionTitle";
import { CategorySection } from "../cards/CatgorySection";

const CATEGORIES = Object.entries(CATEGORY_META)
  .sort(([, a], [, b]) => a.order - b.order)
  .map(([id, meta]) => ({
    id: id as CategorieFormation,
    label: meta.label,
    tag: meta.tag,
    formations: FORMATIONS.filter((f) => f.categorie === id),
  }))
  .filter((cat) => cat.formations.length > 0);

export const FormationsSection = () => {
  return (
    <section
      id="formations"
      className="relative overflow-hidden bg-bg py-14 px-6 sm:px-8 md:py-20 lg:px-0 lg:py-28"
    >
      <MeshDeco className="absolute bottom-[-40px] left-[-60px] opacity-20" />

      <Container className="max-w-7xl mx-auto">
        <div className="mb-14">
          <SectionLabel>
            Catalogue complet — {FORMATIONS.length} formations
          </SectionLabel>

          <SectionTitle>
            L'ensemble<span className="text-orange"> des formations</span>
          </SectionTitle>

          <p className="max-w-[500px] font-montserrat text-base leading-[1.6] text-text-md">
            Formations adaptées à tous les niveaux, du débutant à l'expert
            métier. Durées indicatives, ajustables selon vos besoins.
          </p>
        </div>

        {CATEGORIES.map((cat, i) => (
          <CategorySection key={cat.id} category={cat} index={i} />
        ))}

        {/* CTA sur mesure */}
        <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-orange/20 bg-orange/5 px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-montserrat font-bold text-navy text-[16px]">Vous ne trouvez pas votre formation ?</p>
            <p className="font-montserrat text-[14px] text-text-md mt-1">Je construis des programmes sur mesure adaptés à vos outils et vos enjeux.</p>
          </div>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="shrink-0 rounded bg-orange px-7 py-3.5 font-montserrat text-sm font-bold text-white shadow-[0_4px_20px_rgba(232,118,42,0.25)] transition hover:brightness-110"
          >
            Me contacter →
          </button>
        </div>
      </Container>
    </section>
  );
}
"use client";

import { Container } from "../ui/Container";
import { MeshDeco } from "../ui/MeshDeco";
import { SectionLabel } from "../ui/SectionLabel";

export function CtaFinal() {
  return (
    <section className="bg-white py-14 md:py-20 lg:py-28">
      <Container>
        <div className="bg-gradient-to-br from-navy to-navy-mid rounded-[20px] p-14 px-16 grid grid-cols-[1fr_auto] gap-10 items-center relative overflow-hidden shadow-[0_12px_48px_rgba(10,45,92,0.18)]">
          <MeshDeco className="-top-5 right-20 opacity-15" />

          {/* Texte */}
          <div className="relative">
            <SectionLabel>Financement</SectionLabel>
            <h2 className="font-montserrat font-black text-[clamp(22px,2.5vw,34px)] text-white leading-[1.2] mb-3">
              Votre formation à 100% finançable
            </h2>
            <p className="font-montserrat text-[14px] text-white/60 leading-[1.75] max-w-[500px] m-0">
              Nos formations sont éligibles aux financements OPCO, CPF et FIF-PL.
              Nicolas vous accompagne dans toutes les démarches administratives.
            </p>
          </div>

          {/* Boutons */}
          <div className="flex flex-col gap-3 shrink-0">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3.5 rounded border-none bg-orange text-white font-montserrat font-bold text-[14px] cursor-pointer whitespace-nowrap shadow-[0_4px_20px_rgba(232,118,42,0.5)] hover:brightness-110 transition-all"
            >
              Demander un devis gratuit
            </button>
            <button className="px-7 py-3 rounded border border-white/25 bg-white/10 text-white/85 font-montserrat font-semibold text-[13px] cursor-pointer hover:bg-white/15 transition-all">
              Appeler Nicolas
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
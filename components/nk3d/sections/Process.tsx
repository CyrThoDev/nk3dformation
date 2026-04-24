"use client";

import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { SectionTitle } from "../ui/SectionTitle";
import type { SanityProcessStep } from "@/types/sanity";

export function Process({
  titre,
  description,
  steps,
}: {
  titre?: string;
  description?: string;
  steps: SanityProcessStep[];
}) {
  return (
    <section
  id="méthode"
  className="bg-white py-14 px-6 sm:px-8 md:py-20 lg:px-0 lg:py-28"
>
      <Container>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-20 items-start">

          {/* ── Col gauche ───────────────────────────────── */}
          <div className="flex flex-col justify-center">
            <SectionLabel>Ma méthode</SectionLabel>

            <SectionTitle>
              {titre ?? <>Un accompagnement<br />100% sur-mesure</>}
            </SectionTitle>

            <p className="mt-4 mb-6 max-w-[520px] font-montserrat text-base leading-[1.8] text-text-md">
              {description ?? "Chaque formation est construite autour de vos outils, vos pièces et vos enjeux. Je m'adapte au niveau et au contexte de chaque équipe."}
            </p>

            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-fit px-[26px] py-3 rounded border border-navy bg-transparent text-navy font-montserrat font-bold text-[13px] hover:bg-navy hover:text-white transition-all"
            >
              Discutons de votre projet →
            </button>
          </div>

          {/* ── Col droite — étapes ───────────────────────── */}
          <div className="flex flex-col">
            {steps.map((p, i) => (
              <div
                key={i}
                className={`flex gap-4 py-4 md:py-5 ${
                  i < steps.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="shrink-0 w-[38px] h-[38px] md:w-[42px] md:h-[42px] rounded-xl bg-navy-lt flex items-center justify-center font-eurostile-extended font-extrabold text-[13px] md:text-[14px] text-navy-mid">
                  {p.n}
                </div>

                <div>
                  <h4 className="font-montserrat font-bold text-base text-navy mb-1">
                    {p.title}
                  </h4>

                  <p className="font-montserrat text-[15px] text-text-md leading-[1.6]">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
"use client";

import { PROCESS } from "../constants";
import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { SectionTitle } from "../ui/SectionTitle";

export function Process() {
  return (
    <section id="méthode" className="bg-white py-[88px]">
      <Container>
        <div className="grid grid-cols-2 gap-20 items-center">

          {/* ── Col gauche ───────────────────────────────── */}
          <div>
            <SectionLabel>Notre méthode</SectionLabel>
            <SectionTitle>
              Un accompagnement<br />100% sur-mesure
            </SectionTitle>
            <p className="font-montserrat text-[15px] leading-[1.8] text-text-md mb-8">
              Chaque formation est construite autour de vos outils, vos pièces et vos enjeux.
              Nicolas s'adapte au niveau et au contexte de chaque équipe.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-[26px] py-3 rounded-[9px] border border-navy bg-transparent text-navy font-montserrat font-bold text-[13px] cursor-pointer hover:bg-navy hover:text-white transition-all"
            >
              Parler à Nicolas →
            </button>
          </div>

          {/* ── Col droite — étapes ───────────────────────── */}
          <div>
            {PROCESS.map((p, i) => (
              <div
                key={i}
                className={`flex gap-4 py-5 ${i < PROCESS.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="shrink-0 w-[42px] h-[42px] rounded-[10px] bg-navy-lt flex items-center justify-center font-barlow-condensed font-extrabold text-[14px] text-navy-mid">
                  {p.n}
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-[14px] text-navy mb-1">{p.title}</h4>
                  <p className="font-montserrat text-[13px] text-text-md leading-[1.65] m-0">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
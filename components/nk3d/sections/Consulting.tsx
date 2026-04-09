"use client";

import type { ComponentType, SVGProps } from "react";
import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { SectionTitle } from "../ui/SectionTitle";
import {
  IconSearch,
  IconLayers,
  IconSettings,
  IconGrid,
  IconZap,
  IconMessageSquare,
} from "../ui/Icons";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const CONSULTING_CARDS: { Icon: IconComponent; title: string; desc: string }[] = [
  {
    Icon: IconSearch,
    title: "Audit et diagnostic  CAO / PLM",
    desc: "Analyse de vos processus et de vos méthodes de travail, afin d’identifier des besoins de support ou de formation.",
  },
  {
    Icon: IconLayers,
    title: "Recommandations licences et métier",
    desc: "Conseils sur l’utilisation de vos licences CATIA. Proposition de méthodologie sur certains ateliers.",
  },
  {
    Icon: IconSettings,
    title: "Aide au choix d'outil",
    desc: "Accompagnement dans la prise en main ou la migration d'un logiciel CAO (CATIA V5, 3DEXPERIENCE…).",
  },
  {
    Icon: IconGrid,
    title: "Revue de maquettes",
    desc: "Audit de vos maquettes numériques et transmission des bonnes pratiques à vos équipes.",
  },
 
  {
    Icon: IconMessageSquare,
    title: "Conseil à la carte",
    desc: "Une question ? Un blocage ? Je réponds à vos enjeux spécifiques sans engagement de volume.",
  },
];

export function Consulting() {
  return (
    <section
      id="consulting"
      className="bg-navy py-14 px-6 sm:px-8 md:py-20 lg:px-0 lg:py-28"
    >
      <Container>

        {/* ── En-tête centré ────────────────────────────── */}
        <div className="text-center mb-14">
          <SectionLabel center onDark>Consulting</SectionLabel>
          <SectionTitle center onDark>
            Un support méthodologie<br />à la demande
          </SectionTitle>
          <p className="mt-4 max-w-[560px] mx-auto font-montserrat text-base leading-[1.8] text-white/70">
            Pas besoin d'une formation complète pour avancer. J'interviens
            ponctuellement, selon vos besoins, pour débloquer vos équipes et
            renforcer vos pratiques CAO.
          </p>
        </div>

        {/* ── Grille de cartes ──────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {CONSULTING_CARDS.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
            >
              <div className="mb-4 w-10 h-10 rounded-xl bg-orange/15 flex items-center justify-center">
                <Icon className="w-5 h-5 text-orange" />
              </div>
              <h4 className="font-montserrat font-bold text-base text-white mb-2">
                {title}
              </h4>
              <p className="font-montserrat text-[15px] leading-[1.7] text-white/60">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA centré ────────────────────────────────── */}
        <div className="text-center mt-12">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-block px-8 py-3.5 rounded bg-orange text-white font-montserrat font-bold text-[13px] hover:bg-orange/90 transition-colors"
          >
            Discutons de votre besoin →
          </button>
        </div>

      </Container>
    </section>
  );
}

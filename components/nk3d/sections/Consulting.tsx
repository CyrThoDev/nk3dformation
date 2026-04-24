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
import type { SanitySettings } from "@/types/sanity";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const ICON_MAP: Record<string, IconComponent> = {
  search:  IconSearch,
  layers:  IconLayers,
  settings: IconSettings,
  grid:    IconGrid,
  zap:     IconZap,
  message: IconMessageSquare,
};

const DEFAULT_CARDS = [
  { iconKey: "search",   title: "Audit et diagnostic CAO / PLM",          desc: "Analyse de vos processus et de vos méthodes de travail, afin d'identifier des besoins de support ou de formation." },
  { iconKey: "layers",   title: "Recommandations licences et métier",       desc: "Conseils sur l'utilisation de vos licences CATIA. Proposition de méthodologie sur certains ateliers." },
  { iconKey: "settings", title: "Aide au choix d'outil",                   desc: "Accompagnement dans la prise en main ou la migration d'un logiciel CAO (CATIA V5, 3DEXPERIENCE…)." },
  { iconKey: "grid",     title: "Revue de maquettes",                      desc: "Audit de vos maquettes numériques et transmission des bonnes pratiques à vos équipes." },
  { iconKey: "message",  title: "Conseil à la carte",                      desc: "Une question ? Un blocage ? Je réponds à vos enjeux spécifiques sans engagement de volume." },
] as const;

export function Consulting({ settings }: { settings?: SanitySettings | null }) {
  const titre       = settings?.consultingTitre       ?? "Un support méthodologie à la demande";
  const description = settings?.consultingDescription ?? "Pas besoin d'une formation complète pour avancer. J'interviens ponctuellement, selon vos besoins, pour débloquer vos équipes et renforcer vos pratiques CAO.";
  const cards       = settings?.consultingCards?.length ? settings.consultingCards : DEFAULT_CARDS;

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
            {titre}
          </SectionTitle>
          <p className="mt-4 max-w-[560px] mx-auto font-montserrat text-base leading-[1.8] text-white/70">
            {description}
          </p>
        </div>

        {/* ── Grille de cartes ──────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {cards.map(({ iconKey, title, desc }, i) => {
            const Icon = ICON_MAP[iconKey] ?? IconMessageSquare;
            return (
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
                <p className="font-montserrat text-base leading-[1.7] text-white/60">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── CTA centré ────────────────────────────────── */}
        <div className="text-center mt-12">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-block px-8 py-3.5 rounded bg-orange text-white font-montserrat font-bold text-base hover:bg-orange/90 transition-colors"
          >
            Discutons de votre besoin →
          </button>
        </div>

      </Container>
    </section>
  );
}

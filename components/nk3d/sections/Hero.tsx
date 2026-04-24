"use client";

import Image from "next/image";
import { MeshDeco } from "../ui/MeshDeco";
import { urlFor } from "@/sanity/lib/image";
import type { SanitySettings } from "@/types/sanity";

type HeroProps = Pick<
  SanitySettings,
  "heroBadge" | "heroTitre" | "heroAccroche" | "heroDescription" | "heroReassurances" | "heroImage"
>;

export default function Hero({
  heroBadge,
  heroTitre,
  heroAccroche,
  heroDescription,
  heroReassurances,
  heroImage,
}: HeroProps) {
  const badge       = heroBadge       ?? "Certifié Dassault Systèmes";
  const titre       = heroTitre       ?? "CATIA V5, 3DEXPERIENCE\u00a0& CATIA COMPOSER";
  const accroche    = heroAccroche    ?? "Formations sur mesure pour l'industrie";
  const description = heroDescription ?? "Je conçois et anime des formations adaptées à votre contexte métier, votre niveau et vos outils — du débutant à l'expert.";
  const reassurances = heroReassurances ?? ["Accompagnement sur-mesure", "Flexibilité totale", "Interlocuteur unique"];
  const imageSrc    = heroImage ? urlFor(heroImage).width(1920).url() : "/images/hero.webp";

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,#FFFFFF_60%,#E8F0FA_100%)]">
      <MeshDeco className="pointer-events-none absolute -right-16 -top-40 z-10 opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange opacity-[0.04] blur-[80px]" />

      <div className="mx-auto w-full max-w-7xl px-4 lg:px-6">

        {/* ── Bloc texte centré ──────────────────────────── */}
        <div className="flex flex-col items-center text-center pt-12 pb-10 md:pt-16 md:pb-12 lg:pt-20 lg:pb-14">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            <span className="font-eurostile-extended text-[10px] font-bold uppercase tracking-[0.18em] text-orange">
              {badge}
            </span>
          </div>

          {/* Logo */}
          <div className="relative h-16 w-full max-w-[280px] sm:h-20 sm:max-w-[380px] lg:max-w-[440px] lg:h-24 mb-4">
            <Image
              src="/images/LOGO-NAME.svg"
              alt="NK 3D Formation"
              fill
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 440px"
              className="object-contain"
              priority
            />
          </div>

          {/* H1 */}
          <h1 className="font-eurostile font-bold uppercase tracking-tight leading-[1.05] text-navy text-[clamp(1.75rem,4vw,3rem)] max-w-3xl">
            {titre}
          </h1>

          {/* Accroche */}
          <p className="mt-4 font-montserrat font-semibold text-orange text-[clamp(0.95rem,1.8vw,1.05rem)]">
            {accroche}
          </p>

          {/* Desc */}
          <p className="mt-3 mb-8 max-w-xl font-montserrat text-base leading-7 text-text-md">
            {description}
          </p>

          {/* CTA */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => document.getElementById("formations")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded bg-navy px-8 py-3.5 font-montserrat text-sm font-bold text-white shadow-[0_4px_20px_rgba(10,45,92,0.22)] transition hover:-translate-y-px hover:bg-navy-mid"
            >
              Voir les formations →
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded border border-border bg-white px-7 py-3.5 font-montserrat text-sm font-semibold text-navy transition hover:border-navy hover:bg-[#F8FAFD]"
            >
              Demander un devis
            </button>
          </div>

          {/* Réassurance */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2">
            {reassurances.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-orange/10 text-[9px] font-bold text-orange">
                  ✓
                </span>
                <span className="font-montserrat text-sm font-medium text-text-md">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Image bannière ────────────────────────────── */}
        <div className="relative overflow-hidden shadow-[0_24px_72px_rgba(10,45,92,0.14)] -mx-4 w-screen md:mx-0 md:w-full md:mb-16 lg:mb-20" style={{ aspectRatio: "16/7" }}>
          <Image
            src={imageSrc}
            alt="Formation CATIA et 3DEXPERIENCE"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg/30 to-transparent" />
        </div>

      </div>
    </section>
  );
}

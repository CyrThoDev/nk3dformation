"use client";

import Image from "next/image";
import { MeshDeco } from "../ui/MeshDeco";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,#FFFFFF_55%,#E8F0FA_100%)]">
      <MeshDeco className="pointer-events-none absolute -right-16 -top-40 z-20 opacity-45" />
      <div className="pointer-events-none absolute right-[40%] top-[15%] h-[320px] w-[320px] rounded-full bg-orange opacity-[0.05] blur-[60px]" />

      <div className="mx-auto w-full max-w-7xl px-4 lg:px-6">
        <div className="grid grid-cols-1 items-stretch gap-4 pt-6 pb-12 md:pt-10 md:pb-16 lg:grid-cols-2 lg:gap-8 lg:pt-14 lg:pb-24">

          {/* IMAGE */}
          <div className="order-1 lg:order-1 lg:flex lg:flex-col">
            <div className="relative w-full min-h-70 sm:min-h-95 lg:min-h-0 lg:flex-1 overflow-hidden rounded-xl lg:rounded-2xl shadow-[0_20px_64px_rgba(10,45,92,0.18)]">
              <Image
                src="/images/hero.jpg"
                alt="Formation CATIA et 3DEXPERIENCE"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* TEXTE */}
          <div className="order-2 lg:order-2">

            {/* Badge certifié */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/5 px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              <span className="font-eurostile-extended text-[10px] font-bold uppercase tracking-[0.18em] text-orange">
                Certifié Dassault Systèmes
              </span>
            </div>

            {/* Logo */}
            <div className="relative h-16 w-full max-w-[320px] sm:h-20 sm:max-w-105 lg:max-w-125 lg:h-24">
              <Image
                src="/images/LOGO-NAME.svg"
                alt="Formateur CATIA"
                fill
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 500px"
                className="object-contain object-left"
                priority
              />
            </div>

            {/* H1 */}
            <h1 className="mb-2 flex flex-col gap-1 font-eurostile leading-[1.05] text-navy">
              <span className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold uppercase tracking-tight">
                CATIA V5, 3DEXPERIENCE
              </span>
              <span className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold uppercase tracking-tight">
                & CATIA COMPOSER
              </span>
            </h1>

            {/* Accroche */}
            <p className="mt-3 font-montserrat text-[clamp(0.95rem,2vw,1.1rem)] font-semibold text-orange">
              Formations sur mesure pour l'industrie
            </p>

            {/* Desc */}
            <p className="mb-6 mt-3 font-montserrat text-[15px] leading-7 text-text-md md:text-base md:leading-8">
              Je conçois et anime des formations adaptées à votre contexte métier,
              votre niveau et vos outils.
            </p>

            {/* CTA */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

            {/* Badges de réassurance */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {["Accompagnement sur-mesure", "Flexibilité totale", "Interlocuteur unique"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-orange/10 text-[9px] font-bold text-orange">
                    ✓
                  </span>
                  <span className="font-montserrat text-xs font-medium text-text-md">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { MeshDeco } from "../ui/MeshDeco";

export default function Hero() {
  return (
    <section className="relative bg-[linear-gradient(160deg,#FFFFFF_55%,#E8F0FA_100%)]">
      <MeshDeco className="pointer-events-none absolute -right-16 -top-40 z-20 opacity-45" />

      <div className="pointer-events-none absolute right-[40%] top-[15%] h-[320px] w-[320px] rounded-full bg-[#E8762A] opacity-[0.05] blur-[60px]" />

      <div className="mx-auto w-full max-w-7xl px-8 lg:px-0 ">
       <div className="grid grid-cols-1 items-stretch gap-6 py-4 md:py-12 lg:grid-cols-2 lg:gap-14 lg:py-20">
          {/* IMAGE */}
         <div className="order-1 relative flex lg:order-1">
  <div className="relative w-full min-h-70 sm:min-h-95 lg:min-h-0 lg:h-full">
    <Image
      src="/images/hero.jpg"
      alt="Formation CATIA et 3DEXPERIENCE"
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      priority
      className="object-cover shadow-[0_16px_60px_rgba(10,45,92,0.15)]"
    />
  </div>
</div>

          {/* TEXTE */}
          <div className="order-2 lg:order-2">
            <div className="relative  h-16 w-full max-w-[320px] sm:h-25 sm:max-w-105 lg:max-w-125 lg:h-30">
              <Image
                src="/images/LOGO-NAME.svg"
                alt="Formateur CATIA"
                fill
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 500px"
                className="object-contain object-left"
                priority
              />
            </div>

            <h1 className="flex flex-col gap-2 font-montserrat leading-[1.05] text-[#0A2D5C]">
              <span className="font-montserrat text-4xl font-semibold">
                Formateur indépendant
              </span>

              <span className="text-orange text-[clamp(1rem,6vw,2rem)] font-semibold">
                CATIA V5 - 3DEXPERIENCE - CATIA COMPOSER
              </span>
            </h1>

            <p className="py-4 font-montserrat text-[15px] leading-7 text-[#4A5568] md:text-base md:leading-8">
             Je vous accompagne dans la prise en main de solutions tels que CATIA V5, 3DEXPERIENCE et CATIA Composer. 
Profitez de mon expérience et de mes compétences de formateur certifié par Dassault Systèmes.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                onClick={() =>
                  document
                    .getElementById("formations")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-[10px] bg-[#0A2D5C] px-8 py-3.5 font-['Montserrat'] text-sm font-bold text-white shadow-[0_4px_20px_rgba(10,45,92,0.22)] transition hover:-translate-y-[1px] hover:bg-[#1A4F8A]"
              >
                Voir les formations →
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-[10px] border-[1.5px] border-[#E4EAF3] bg-white px-7 py-3.5 font-['Montserrat'] text-sm font-semibold text-[#0A2D5C] transition hover:border-[#0A2D5C] hover:bg-[#F8FAFD]"
              >
                Demander un devis
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-6">
              {[
                "Accompagnement Sur-Mesure",
                "Flexibilité Totale",
                "Interlocuteur unique",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#E8F0FA] text-[9px] font-bold text-[#1A4F8A]">
                    ✓
                  </span>
                  <span className="font-['Montserrat'] text-xs font-medium text-[#4A5568]">
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
"use client";

import Image from "next/image";
import { MeshDeco } from "../ui/MeshDeco";

export default function Hero() {
  return (
    <section className=" relative  bg-[linear-gradient(160deg,#FFFFFF_55%,#E8F0FA_100%)] ">
      <MeshDeco className="absolute -right-16 -top-40 pointer-events-none opacity-45 z-20 " />

      <div className="pointer-events-none absolute right-[40%] top-[15%] h-[320px] w-[320px] rounded-full bg-[#E8762A] opacity-[0.05] blur-[60px]" />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 py-10 md:py-12 lg:grid-cols-2 lg:gap-10 lg:py-20">
      <div className="">

  {/* IMAGE */}
  <div className="mb-4">
    <Image
      src="/images/LOGO-NAME.svg" // 👉 adapte le chemin
      alt="Formateur CATIA"
      width={500}
      height={120}
      className="object-contain "
      priority
    />
  </div>

  <h1 className="gap-2 font-montserrat   leading-[1.05] text-[#0A2D5C] flex flex-col">
    <span className="font-montserrat font-semibold text-4xl ">Formateur indépendant</span>
    
    <span className="text-orange text-[clamp(1rem,6vw,2rem)] font-semibold">CATIA V5 - 3DEXPERIENCE - CATIA COMPOSER</span> 
    
  </h1>

  <p className="py-4  font-montserrat text-[15px] leading-7 text-[#4A5568] md:text-base md:leading-8">
    Formations sur CATIA V5, 3DEXPERIENCE et CATIA COMPOSER.
    Présentiel ou distanciel, conçues pour les ingénieurs et techniciens de l’industrie.
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
    {["Accompagnement Sur-Mesure ", "Flexibilité Totale ", "Interlocuteur unique"].map(
      (item) => (
        <div key={item} className="flex items-center gap-2">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#E8F0FA] text-[9px] font-bold text-[#1A4F8A]">
            ✓
          </span>
          <span className="font-['Montserrat'] text-xs font-medium text-[#4A5568]">
            {item}
          </span>
        </div>
      )
    )}
  </div>

</div>

          <div className="relative flex justify-center lg:justify-end bg-red-600">
            <div className="absolute  rounded-full bg-orange opacity-[0.08]  " />

            <div className="relative w-full ">
              <Image
                src="/images/hero.jpg"
                alt="Formation CATIA et 3DEXPERIENCE"
                width={520}
                height={420}
                priority
                className="relative z-30 h-auto w-full rounded-md object-cover shadow-[0_16px_60px_rgba(10,45,92,0.15)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


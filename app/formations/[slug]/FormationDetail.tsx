"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/nk3d/layout/Nav";
import { Footer } from "@/components/nk3d/layout/Footer";
import { Contact } from "@/components/nk3d/sections/Contact";
import type { SanityFormationDetail, SanityFormationAssociee, SanitySettings } from "@/types/sanity";

// ── Icons ─────────────────────────────────────────────────────────────────
function IconDownload() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}
function IconArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="19" y1="12" x2="5" y2="12"/>
      <polyline points="12 19 5 12 12 5"/>
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}
function IconClock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}
function IconUsers() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}
function IconMapPin() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
function IconCreditCard() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
      <line x1="1" y1="10" x2="23" y2="10"/>
    </svg>
  );
}

// ── Info Cards ────────────────────────────────────────────────────────────
function InfoCards({ formation }: { formation: SanityFormationDetail }) {
  const infos = [
    { icon: <IconClock />,      label: "Durée",       val: formation.duree ?? "À définir" },
    { icon: <IconUsers />,      label: "Niveau",      val: formation.niveau },
    { icon: <IconMapPin />,     label: "Format",      val: formation.format },
    { icon: <IconCreditCard />, label: "Financement", val: formation.financement },
  ];
  return (
    <div className="grid grid-cols-2 gap-3 mb-10 sm:grid-cols-4">
      {infos.map(({ icon, label, val }) => (
        <div key={label} className="bg-white border border-border rounded-xl p-4 shadow-[0_1px_4px_rgba(10,45,92,0.05)]">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-orange">{icon}</span>
            <span className="font-eurostile-extended text-[11px] font-bold tracking-[0.12em] uppercase text-text-lt">{label}</span>
          </div>
          <div className="font-montserrat text-base font-semibold text-text leading-snug">{val}</div>
        </div>
      ))}
    </div>
  );
}

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const LOREM_ITEMS = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse",
];
const LOREM_PROGRAMME = [
  { jour: "Jour 1", titre: "Lorem ipsum dolor", contenu: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { jour: "Jour 2", titre: "Consectetur adipiscing", contenu: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
  { jour: "Jour 3", titre: "Sed do eiusmod", contenu: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
];

// ── Objectifs ─────────────────────────────────────────────────────────────
function Objectifs({ objectifs }: { objectifs: string[] }) {
  const items = objectifs.length ? objectifs : LOREM_ITEMS;
  return (
    <div className="mb-10">
      <div className="flex flex-col gap-2.5">
        {items.map((o, i) => (
          <div key={i} className="flex items-start gap-3 px-4 py-2.5 bg-white border border-border rounded-xl shadow-[0_1px_4px_rgba(10,45,92,0.04)]">
            <span className="text-orange shrink-0 mt-0.5"><IconCheck /></span>
            <span className="font-montserrat text-base text-text-md leading-relaxed">{o}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Programme ─────────────────────────────────────────────────────────────
function Programme({ programme }: { programme: SanityFormationDetail["programme"] }) {
  const items = programme?.length ? programme : LOREM_PROGRAMME;
  return (
    <div className="mb-10">
      <div className="flex flex-col gap-2">
        {items.map((p, i) => (
          <div key={i} className="px-4 py-3.5 bg-white border border-border rounded-xl shadow-[0_1px_4px_rgba(10,45,92,0.04)]">
            <div className="flex items-baseline gap-2 flex-wrap mb-1">
              <span className="font-eurostile-extended text-[13px] font-bold text-orange uppercase shrink-0">{p.jour}</span>
              <span className="text-orange/40 shrink-0">·</span>
              <span className="font-montserrat text-base font-bold text-navy">{p.titre}</span>
            </div>
            <div className="font-montserrat text-base text-text-md leading-relaxed">{p.contenu}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Public & Prérequis ────────────────────────────────────────────────────
function PublicPrerequis({ formation }: { formation: SanityFormationDetail }) {
  return (
    <div className="mb-10">
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { label: "Public visé", val: formation.publicVise || LOREM },
          { label: "Prérequis",   val: formation.prerequis  || LOREM },
        ].map(({ label, val }) => (
          <div key={label} className="px-5 py-4 bg-white border border-border rounded-xl shadow-[0_1px_4px_rgba(10,45,92,0.04)]">
            <div className="font-eurostile-extended text-[11px] font-bold tracking-[0.12em] uppercase text-text-lt mb-2">{label}</div>
            <div className="font-montserrat text-base text-text-md leading-relaxed">{val}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Sidebar ───────────────────────────────────────────────────────────────
function Sidebar({ formation, associees }: { formation: SanityFormationDetail; associees: SanityFormationAssociee[] }) {
  return (
    <div className="sticky top-24 flex flex-col gap-4">
      <div className="bg-white border border-border rounded-2xl p-6 shadow-[0_4px_24px_rgba(10,45,92,0.07)]">
        <p className="font-montserrat font-bold text-base text-navy mb-1.5">Intéressé par cette formation ?</p>
        <p className="font-montserrat text-base text-text-md mb-5 leading-relaxed">
          Nicolas vous répond sous 48h et établit un devis gratuit, avec accompagnement OPCO inclus.
        </p>

        {formation.pdfUrl ? (
          <a href={formation.pdfUrl} download target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-orange text-white font-montserrat font-bold text-base no-underline mb-2.5 shadow-[0_3px_12px_rgba(232,118,42,0.35)] transition hover:brightness-110"
          >
            <IconDownload /> Télécharger le programme PDF
          </a>
        ) : (
          <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-bg text-text-lt font-montserrat text-base mb-2.5 border border-dashed border-border">
            <IconDownload /> Programme PDF — bientôt disponible
          </div>
        )}

        <Link href="#contact"
          className="flex items-center justify-center px-4 py-3 rounded-xl border-[1.5px] border-navy text-navy font-montserrat font-bold text-base no-underline transition hover:bg-navy hover:text-white"
        >
          Demander un devis gratuit
        </Link>

        {/* <div className="mt-4 pt-4 border-t border-border flex flex-col gap-1.5">
          {["OPCO finançable"].map(t => (
            <div key={t} className="flex items-center gap-2">
              <span className="text-orange"><IconCheck /></span>
              <span className="font-montserrat text-base text-text-md">{t}</span>
            </div>
          ))}
        </div> */}
      </div>

      {associees.length > 0 && (
        <div className="bg-white border border-border rounded-2xl px-6 py-5 shadow-[0_2px_12px_rgba(10,45,92,0.05)]">
          <p className="font-eurostile-extended text-[13px] font-bold tracking-[0.15em] uppercase text-text-lt mb-3.5">
            Formations associées
          </p>
          <div className="flex flex-col">
            {associees.map((f, i) => (
              <Link key={f.slug} href={`/formations/${f.slug}`}
                className={`block py-2.5 no-underline ${i < associees.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="font-eurostile-extended text-[13px] font-bold text-orange tracking-[0.08em] uppercase mb-0.5">{f.code}</div>
                <div className="font-montserrat text-base text-navy font-medium leading-snug">{f.titre}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Accordion programme mobile ────────────────────────────────────────────
function AccordionSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between font-montserrat font-extrabold text-[18px] text-navy mb-4 bg-transparent border-none cursor-pointer p-0"
      >
        {title}
        <span className={`text-text-lt transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      {open && children}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────
export function FormationDetail({ formation, settings }: { formation: SanityFormationDetail; settings?: SanitySettings | null }) {
  const associees = (formation.formationsAssociees ?? []).filter(Boolean) as SanityFormationAssociee[];

  return (
    <>
      <Nav asLinks />

      <main className="min-h-screen bg-bg">
        {/* Hero */}
        <div className="bg-white border-b border-border py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 font-montserrat text-[12px] sm:text-[13px] text-text-lt mb-7 flex-wrap">
              <Link href="/" className="text-text-lt no-underline hover:text-navy transition-colors shrink-0">Accueil</Link>
              <span className="shrink-0">›</span>
              <Link href="/#formations" className="text-text-lt no-underline hover:text-navy transition-colors shrink-0">Formations</Link>
              <span className="shrink-0">›</span>
              <span className="text-text-md font-medium truncate">{formation.titre}</span>
            </div>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-lt text-[#B85A10] font-eurostile-extended text-[13px] font-bold tracking-widest uppercase mb-4">
                  {formation.categorieLabel}
                  {formation.code && (
                    <>
                      <span className="opacity-40">·</span>
                      {formation.code}
                    </>
                  )}
                </div>
                <h1 className="font-montserrat font-black text-navy leading-tight mb-3" style={{ fontSize: "clamp(22px, 3vw, 34px)" }}>
                  {formation.titre}
                </h1>
                <p className="font-montserrat text-base text-text-md leading-relaxed max-w-2xl">
                  {formation.description}
                </p>
              </div>

              <div className="flex flex-col gap-2.5 shrink-0 lg:pt-1">
                {formation.pdfUrl ? (
                  <a href={formation.pdfUrl} download target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-orange text-white font-montserrat font-bold text-base no-underline whitespace-nowrap shadow-[0_3px_12px_rgba(232,118,42,0.35)] transition hover:brightness-110"
                  >
                    <IconDownload /> Télécharger le programme PDF
                  </a>
                ) : (
                  <span className="flex items-center gap-2 px-5 py-3 rounded-xl bg-bg text-text-lt font-montserrat text-base whitespace-nowrap border border-dashed border-border">
                    <IconDownload /> Programme PDF — bientôt disponible
                  </span>
                )}
                <Link href="#contact"
                  className="flex items-center justify-center px-5 py-3 rounded-xl border-[1.5px] border-navy text-navy font-montserrat font-bold text-base no-underline whitespace-nowrap transition hover:bg-navy hover:text-white"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <InfoCards formation={formation} />

          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
            <div>
              <AccordionSection title="Objectifs de la formation">
                <Objectifs objectifs={formation.objectifs ?? []} />
              </AccordionSection>
              <AccordionSection title="Programme">
                <Programme programme={formation.programme} />
              </AccordionSection>
              <AccordionSection title="Public visé & prérequis">
                <PublicPrerequis formation={formation} />
              </AccordionSection>

              <Link href="/#formations"
                className="inline-flex items-center gap-2 font-montserrat text-base font-semibold text-text-md no-underline mt-2 hover:text-navy transition-colors"
              >
                <IconArrowLeft /> Retour au catalogue
              </Link>
            </div>

            <Sidebar formation={formation} associees={associees} />
          </div>
        </div>
      </main>

      <Contact settings={settings} />
      <Footer />
    </>
  );
}

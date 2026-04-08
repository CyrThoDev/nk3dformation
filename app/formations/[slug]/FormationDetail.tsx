"use client";

// app/formations/[slug]/FormationDetail.tsx
// Client Component — contient tout le code UI interactif

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Formation } from "../../../types/formation";
import { getFormationsAssociees } from "../../../data/formations";

// ── Palette ───────────────────────────────────────────────────────────────
const C = {
  navy:     "#0A2D5C",
  navyMid:  "#1A4F8A",
  navyLt:   "#E8F0FA",
  orange:   "#E8762A",
  orangeLt: "#FFF0E6",
  bg:       "#F6F8FC",
  white:    "#FFFFFF",
  text:     "#0D1B2E",
  textMd:   "#4A5568",
  textLt:   "#8A9AB0",
  border:   "#E4EAF3",
};

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

// ── Nav ───────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      height: 66, display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 36px",
      background: "rgba(255,255,255,0.94)",
      backdropFilter: "blur(14px)",
      borderBottom: `1px solid ${C.border}`,
      boxShadow: scrolled ? "0 2px 16px rgba(10,45,92,0.07)" : "none",
      transition: "box-shadow 0.3s",
    }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <div style={{ width: 34, height: 34, borderRadius: 8, background: `linear-gradient(135deg, ${C.navy}, ${C.navyMid})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: 12, color: C.white }}>NK</span>
        </div>
        <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 15, color: C.navy }}>
          NK <span style={{ color: C.orange }}>3D</span> Formation
        </span>
      </Link>
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <Link href="/#formations" style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 13, fontWeight: 500, color: C.textMd, textDecoration: "none" }}>Formations</Link>
        <Link href="/#contact" style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 13, fontWeight: 500, color: C.textMd, textDecoration: "none" }}>Contact</Link>
        <Link href="/#contact" style={{
          padding: "9px 22px", borderRadius: 8, background: C.orange, color: C.white,
          fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 13,
          textDecoration: "none", boxShadow: "0 3px 12px rgba(232,118,42,0.35)",
        }}>
          Demander un devis
        </Link>
      </div>
    </nav>
  );
}

// ── Info Cards ────────────────────────────────────────────────────────────
function InfoCards({ formation }: { formation: Formation }) {
  const infos = [
    { icon: <IconClock />,      label: "Durée",       val: formation.duree ?? "À définir" },
    { icon: <IconUsers />,      label: "Niveau",      val: formation.niveau },
    { icon: <IconMapPin />,     label: "Format",      val: formation.format },
    { icon: <IconCreditCard />, label: "Financement", val: formation.financement },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 48 }}>
      {infos.map(({ icon, label, val }) => (
        <div key={label} style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 16px", boxShadow: "0 1px 4px rgba(10,45,92,0.05)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
            <span style={{ color: C.orange }}>{icon}</span>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.textLt }}>{label}</span>
          </div>
          <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 13, fontWeight: 600, color: C.text, lineHeight: 1.3 }}>{val}</div>
        </div>
      ))}
    </div>
  );
}

// ── Objectifs ─────────────────────────────────────────────────────────────
function Objectifs({ objectifs }: { objectifs: string[] }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 18, color: C.navy, marginBottom: 16 }}>
        Objectifs de la formation
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {objectifs.map((o, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 14px", background: C.white, border: `1px solid ${C.border}`, borderRadius: 10, boxShadow: "0 1px 4px rgba(10,45,92,0.04)" }}>
            <span style={{ color: C.orange, flexShrink: 0, marginTop: 1 }}><IconCheck /></span>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 13, color: C.textMd, lineHeight: 1.55 }}>{o}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Programme ─────────────────────────────────────────────────────────────
function Programme({ programme }: { programme: Formation["programme"] }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 18, color: C.navy, marginBottom: 16 }}>
        Programme
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {programme.map((p, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 16, alignItems: "start", padding: "14px 16px", background: C.white, border: `1px solid ${C.border}`, borderRadius: 10, boxShadow: "0 1px 4px rgba(10,45,92,0.04)" }}>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, color: C.orange, letterSpacing: "0.06em", textTransform: "uppercase", paddingTop: 2 }}>{p.jour}</div>
            <div>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 3 }}>{p.titre}</div>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 12, color: C.textMd, lineHeight: 1.5 }}>{p.contenu}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Public & Prérequis ────────────────────────────────────────────────────
function PublicPrerequis({ formation }: { formation: Formation }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 18, color: C.navy, marginBottom: 16 }}>
        Public visé & prérequis
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {[
          { label: "Public visé", val: formation.publicVise },
          { label: "Prérequis",   val: formation.prerequis },
        ].map(({ label, val }) => (
          <div key={label} style={{ padding: "16px 18px", background: C.white, border: `1px solid ${C.border}`, borderRadius: 10, boxShadow: "0 1px 4px rgba(10,45,92,0.04)" }}>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.textLt, marginBottom: 8 }}>{label}</div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 13, color: C.textMd, lineHeight: 1.65 }}>{val}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Sidebar sticky ────────────────────────────────────────────────────────
function Sidebar({ formation, associees }: { formation: Formation; associees: Formation[] }) {
  return (
    <div style={{ position: "sticky", top: 86, display: "flex", flexDirection: "column", gap: 16 }}>
      {/* CTA card */}
      <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: 24, boxShadow: "0 4px 24px rgba(10,45,92,0.07)" }}>
        <p style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 14, color: C.navy, marginBottom: 6 }}>
          Intéressé par cette formation ?
        </p>
        <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 12, color: C.textMd, marginBottom: 20, lineHeight: 1.6 }}>
          Nicolas vous répond sous 48h et établit un devis gratuit, avec accompagnement OPCO inclus.
        </p>

        {formation.pdfUrl ? (
          <a href={formation.pdfUrl} download target="_blank" rel="noopener noreferrer" style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            padding: "12px", borderRadius: 10, background: C.orange, color: C.white,
            fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 13,
            textDecoration: "none", marginBottom: 10,
            boxShadow: "0 3px 12px rgba(232,118,42,0.35)",
          }}>
            <IconDownload /> Télécharger le programme PDF
          </a>
        ) : (
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            padding: "12px", borderRadius: 10, background: C.bg, color: C.textLt,
            fontFamily: "'Montserrat',sans-serif", fontSize: 12, marginBottom: 10,
            border: `1px dashed ${C.border}`,
          }}>
            <IconDownload /> Programme PDF — bientôt disponible
          </div>
        )}

        <Link href="/#contact" style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "12px", borderRadius: 10,
          border: `1.5px solid ${C.navy}`, background: "transparent", color: C.navy,
          fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 13,
          textDecoration: "none",
        }}>
          Demander un devis gratuit
        </Link>

        <div style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid ${C.border}` }}>
          {["OPCO finançable", "CPF éligible", "Accompagnement administratif inclus"].map(t => (
            <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <span style={{ color: C.orange }}><IconCheck /></span>
              <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 11, color: C.textMd }}>{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Formations associées */}
      {associees.length > 0 && (
        <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 16, padding: "20px 24px", boxShadow: "0 2px 12px rgba(10,45,92,0.05)" }}>
          <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: C.textLt, marginBottom: 14 }}>
            Formations associées
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {associees.map((f, i) => (
              <Link key={f.slug} href={`/formations/${f.slug}`} style={{
                display: "block", padding: "10px 0",
                borderBottom: i < associees.length - 1 ? `1px solid ${C.border}` : "none",
                textDecoration: "none",
              }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700, color: C.orange, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 2 }}>{f.code}</div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 12, color: C.navy, fontWeight: 500, lineHeight: 1.4 }}>{f.titre}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────
export function FormationDetail({ formation }: { formation: Formation }) {
  const associees = getFormationsAssociees(formation.formationsAssociees);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Barlow+Condensed:wght@400;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: ${C.bg}; }
        a { transition: opacity 0.2s; }
        a:hover { opacity: 0.85; }
      `}</style>

      <Nav />

      <main style={{ paddingTop: 66, minHeight: "100vh" }}>

        {/* Hero */}
        <div style={{ background: C.white, borderBottom: `1px solid ${C.border}`, padding: "40px 0 0" }}>
          <div >

            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: C.textLt, marginBottom: 28 }}>
              <Link href="/" style={{ color: C.textLt, textDecoration: "none" }}>Accueil</Link>
              <span>›</span>
              <Link href="/#formations" style={{ color: C.textLt, textDecoration: "none" }}>Formations</Link>
              <span>›</span>
              <span style={{ color: C.textMd, fontWeight: 500 }}>{formation.titre}</span>
            </div>

            {/* Titre + boutons */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "start", marginBottom: 36, paddingBottom: 36, borderBottom: `1px solid ${C.border}` }}>
              <div>
                <div style={{ display: "inline-block", padding: "3px 12px", borderRadius: 20, background: C.orangeLt, color: "#B85A10", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
                  {formation.categorieLabel}
                </div>
                <h1 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: "clamp(22px, 3vw, 34px)", color: C.navy, lineHeight: 1.15, marginBottom: 12 }}>
                  {formation.titre}
                </h1>
                <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 15, color: C.textMd, lineHeight: 1.7, maxWidth: 620 }}>
                  {formation.description}
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, flexShrink: 0, paddingTop: 4 }}>
                {formation.pdfUrl ? (
                  <a href={formation.pdfUrl} download target="_blank" rel="noopener noreferrer" style={{
                    display: "flex", alignItems: "center", gap: 8, padding: "12px 20px",
                    borderRadius: 10, background: C.orange, color: C.white,
                    fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 13,
                    textDecoration: "none", whiteSpace: "nowrap",
                    boxShadow: "0 3px 12px rgba(232,118,42,0.35)",
                  }}>
                    <IconDownload /> Télécharger le programme PDF
                  </a>
                ) : (
                  <span style={{
                    display: "flex", alignItems: "center", gap: 8, padding: "12px 20px",
                    borderRadius: 10, background: C.bg, color: C.textLt,
                    fontFamily: "'Montserrat',sans-serif", fontSize: 12,
                    border: `1px dashed ${C.border}`, whiteSpace: "nowrap",
                  }}>
                    <IconDownload /> Programme PDF — bientôt disponible
                  </span>
                )}
                <Link href="/#contact" style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "12px 20px", borderRadius: 10,
                  border: `1.5px solid ${C.navy}`, background: "transparent", color: C.navy,
                  fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 13,
                  textDecoration: "none", whiteSpace: "nowrap",
                }}>
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu */}
        <div >
          <InfoCards formation={formation} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 48, alignItems: "start" }}>
            <div>
              <Objectifs objectifs={formation.objectifs} />
              <Programme programme={formation.programme} />
              <PublicPrerequis formation={formation} />
              <Link href="/#formations" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontFamily: "'Montserrat',sans-serif", fontSize: 13, fontWeight: 600,
                color: C.textMd, textDecoration: "none",
              }}>
                <IconArrowLeft /> Retour au catalogue
              </Link>
            </div>
            <Sidebar formation={formation} associees={associees} />
          </div>
        </div>
      </main>

      <footer style={{ background: C.white, borderTop: `1px solid ${C.border}`, padding: "24px 28px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 11, color: C.textLt, margin: 0 }}>
          © {new Date().getFullYear()} NK 3D Formation — Nicolas Kreutz · Organisme de formation certifié Qualiopi
        </p>
      </footer>
    </>
  );
}
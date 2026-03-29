"use client";

import { useState, useEffect } from "react";

// ── Palette ───────────────────────────────────────────────────────────────────
const C = {
  navy:     "#0A2D5C",
  navyMid:  "#1A4F8A",
  navyLt:   "#E8F0FA",
  orange:   "#E8762A",
  orangeLt: "#FFF0E6",
  orangeMd: "#F5A05A",
  bg:       "#F6F8FC",
  white:    "#FFFFFF",
  text:     "#0D1B2E",
  textMd:   "#4A5568",
  textLt:   "#8A9AB0",
  border:   "#E4EAF3",
};

// ── Data formations ───────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    id: "catia-v5", label: "CATIA V5", tag: "Fondamentaux & Avancé",
    formations: [
      { code: "V5F",        title: "Fondamentaux – Conception mécanique de base", days: 5 },
      { code: "V5-GDR",     title: "Mise en plan", days: 1 },
      { code: "V5-GS1",     title: "Initiation modélisation de surface", days: 1 },
      { code: "V5-V5E",     title: "Pièces et Assemblages Avancés", days: 5 },
      { code: "V5-SMD",     title: "Conception d'une pièce de tôlerie", days: 1 },
      { code: "V5-FTA",     title: "Functional Tolerancing & Annotations", days: 1 },
      { code: "xxxxx",      title: "Consultation V5", days: 3 },
      { code: "V5-UPDATES", title: "Nouveautés CATIA V5", days: null },
    ],
  },
  {
    id: "catia-metier", label: "CATIA V5 Métier", tag: "Électrique & Tôlerie",
    formations: [
      { code: "V5-ELI", title: "Conception électrique", days: null },
      { code: "V5-EHF", title: "Mise en plat de harnais", days: null },
      { code: "V5-EWR", title: "Routage de fils", days: null },
      { code: "V5-EC1", title: "Conception de harnais électrique", days: null },
      { code: "V5-ASL", title: "Conception d'une pièce de tôlerie aéronautique", days: null },
    ],
  },
  {
    id: "catia-dmu", label: "CATIA V5 DMU", tag: "Maquette numérique",
    formations: [
      { code: "V5-DMN", title: "DMU Navigator", days: 1 },
      { code: "V5-KIN", title: "DMU Cinématique", days: 1 },
      { code: "V5-SPA", title: "DMU Space Analysis", days: 1 },
      { code: "V5-FIT", title: "DMU Simulation de montage", days: 1 },
    ],
  },
  {
    id: "3dexperience", label: "3DEXPERIENCE", tag: "Plateforme Dassault",
    formations: [
      { code: "3DX-GTX",  title: "Passerelle vers la 3DEXPERIENCE", days: null },
      { code: "3DX-3DMT", title: "Transition vers la 3DExperience pour les concepteurs", days: 2 },
      { code: "3DX-3DF",  title: "Les fondamentaux de la conception volumique", days: 5 },
      { code: "3DX-SMD",  title: "Création de pièces de tôleries", days: 2 },
      { code: "3DX-FTA",  title: "Functional Tolerancing & Annotations", days: null },
      { code: "3DX-ELG",  title: "Conception de composants électriques 3D", days: 3 },
      { code: "3DX-GDR",  title: "Mise en plan", days: null },
      { code: "3DX-PDG",  title: "Conception de pièces avancées", days: null },
      { code: "3DX-ASD",  title: "Assemblages avancés", days: null },
      { code: "3DX-GS1",  title: "Wireframe et conception surfacique", days: null },
    ],
  },
  {
    id: "composer", label: "COMPOSER", tag: "Documentation & Animation",
    formations: [
      { code: "3DVIA-CPS",  title: "CATIA V5 COMPOSER", days: 3 },
      { code: "3DVIA-Play", title: "CATIA V5 COMPOSER PLAYER", days: 1 },
      { code: "3DV-ANIM",   title: "Animation et simulation", days: null },
      { code: "3DV-DOC",    title: "Documentation technique", days: null },
      { code: "3DV-SYNC",   title: "Utilisation et administration de COMPOSER SYNC", days: null },
    ],
  },
  {
    id: "general", label: "Mécanique générale", tag: "Prérequis & Bases",
    formations: [
      { code: "PRE-3D", title: "Prérequis à la conception 3D", days: null },
    ],
  },
];

const STATS = [
  { value: "12+",  label: "Ans d'expérience" },
  { value: "340+", label: "Stagiaires formés" },
  { value: "96%",  label: "Taux de satisfaction" },
  { value: "100%", label: "Finançable OPCO" },
];

const PROCESS = [
  { n: "01", title: "Audit de besoins",       desc: "Analyse de votre contexte métier et du niveau de vos équipes." },
  { n: "02", title: "Programme sur-mesure",   desc: "Contenu adapté à vos logiciels, vos pièces, vos enjeux industriels." },
  { n: "03", title: "Formation présentielle", desc: "Sessions sur site ou dans notre centre équipé en workstations CAO." },
  { n: "04", title: "Suivi post-formation",   desc: "Support technique 30 jours après la fin de la formation inclus." },
];

const TESTIMONIALS = [
  { name: "Marc Delorme",  role: "Ingénieur Bureau d'Études", company: "Safran", initials: "MD",
    text: "La formation CATIA V5 Avancé m'a permis de maîtriser la surfacique GSD en un temps record. Nicolas est un formateur hors pair, pédagogue et toujours disponible." },
  { name: "Sophie Aubert", role: "Technicienne CAO",          company: "Airbus", initials: "SA",
    text: "Excellente formation, très bien structurée. J'ai immédiatement pu appliquer les acquis sur mon poste. Je recommande vivement NK 3D Formation." },
  { name: "Thomas Rey",    role: "Responsable méthodes",      company: "Thales", initials: "TR",
    text: "La plateforme 3DEXPERIENCE n'avait plus de secrets après 4 jours avec Nicolas. Contenu riche, exemples concrets issus de l'industrie aéronautique." },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function Container({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 28px", ...style }}>{children}</div>;
}

function SectionLabel({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p style={{
      fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 11,
      letterSpacing: "0.2em", textTransform: "uppercase", color: C.orange,
      marginBottom: 10, textAlign: center ? "center" : "left",
    }}>{children}</p>
  );
}

function SectionTitle({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <h2 style={{
      fontFamily: "'Montserrat', sans-serif", fontWeight: 800,
      fontSize: "clamp(26px, 3vw, 40px)", lineHeight: 1.15, color: C.navy,
      marginBottom: 14, textAlign: center ? "center" : "left",
    }}>{children}</h2>
  );
}

// ── SVG Wireframe déco ────────────────────────────────────────────────────────
function MeshDeco({ style = {} }: { style?: React.CSSProperties }) {
  return (
    <svg aria-hidden="true" width="480" height="380" viewBox="0 0 480 380"
      fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", pointerEvents: "none", opacity: 0.45, ...style }}>
      <defs>
        <pattern id="g2" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0L0 0 0 40" stroke={C.navyMid} strokeWidth="0.5" fill="none" />
        </pattern>
        <radialGradient id="gf2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </radialGradient>
        <mask id="gm2"><rect width="480" height="380" fill="url(#gf2)" /></mask>
      </defs>
      <rect width="480" height="380" fill="url(#g2)" mask="url(#gm2)" />
    </svg>
  );
}

function WireframeSVG() {
  return (
    <svg width="300" height="230" viewBox="0 0 300 230" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={C.navy} strokeWidth="1.1" opacity="0.75">
        <polygon points="55,158 195,158 195,88 55,88" fill={C.navyLt} fillOpacity="0.6" />
        <polygon points="55,88 105,48 245,48 195,88"  fill={C.navyLt} fillOpacity="0.4" />
        <polygon points="195,88 245,48 245,108 195,158" fill={C.navyLt} fillOpacity="0.25" />
        <line x1="55"  y1="88"  x2="195" y2="88"  strokeDasharray="5,4" opacity="0.4" />
        <line x1="195" y1="88"  x2="245" y2="48"  strokeDasharray="5,4" opacity="0.4" />
        <ellipse cx="125" cy="123" rx="26" ry="16" stroke={C.orange} strokeWidth="1.3" />
        <ellipse cx="125" cy="123" rx="15" ry="9"  stroke={C.orange} strokeDasharray="3,3" opacity="0.5" strokeWidth="1" />
      </g>
      <g stroke={C.navyMid} strokeWidth="0.7">
        <line x1="55"  y1="173" x2="195" y2="173" />
        <line x1="55"  y1="170" x2="55"  y2="176" />
        <line x1="195" y1="170" x2="195" y2="176" />
        <text x="125" y="187" textAnchor="middle" fontSize="9" fill={C.textMd} fontFamily="monospace">140.00 mm</text>
      </g>
      {([[55,88],[195,88],[195,158],[55,158],[105,48],[245,48],[245,108]] as [number,number][]).map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="3" fill={C.white} stroke={C.orange} strokeWidth="1.1" />
      ))}
      <text x="248" y="44" fontSize="8" fill={C.textLt} fontFamily="'Barlow Condensed',sans-serif" letterSpacing="0.08em">CATIA V5 — Part Design</text>
    </svg>
  );
}

// ── Icons ─────────────────────────────────────────────────────────────────────
function IconClock() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}
function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

// ── Nav ───────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      height: 66, display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 36px",
      background: scrolled ? "rgba(255,255,255,0.94)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? `1px solid ${C.border}` : "none",
      boxShadow: scrolled ? "0 2px 16px rgba(10,45,92,0.07)" : "none",
      transition: "all 0.35s",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <div style={{ width: 34, height: 34, borderRadius: 8, background: `linear-gradient(135deg, ${C.navy}, ${C.navyMid})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: 12, color: C.white }}>NK</span>
        </div>
        <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 15, color: scrolled ? C.navy : C.navy, letterSpacing: "0.02em" }}>
          NK <span style={{ color: C.orange }}>3D</span> Formation
        </span>
      </div>
      <ul style={{ display: "flex", gap: 36, listStyle: "none", margin: 0, padding: 0 }}>
        {["Formations", "Méthode", "Contact"].map(l => (
          <li key={l}>
            <button onClick={() => scrollTo(l.toLowerCase())} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Montserrat',sans-serif", fontSize: 13, fontWeight: 500, color: C.textMd, letterSpacing: "0.02em" }}>
              {l}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => scrollTo("contact")} style={{
        padding: "9px 22px", borderRadius: 8, border: "none",
        background: C.orange, color: C.white,
        fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 13, cursor: "pointer",
        boxShadow: "0 3px 12px rgba(232,118,42,0.35)",
      }}>Demander un devis</button>
    </nav>
  );
}

// ── Hero (light) ──────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      background: `linear-gradient(160deg, ${C.white} 55%, ${C.navyLt} 100%)`,
      position: "relative", overflow: "hidden", paddingTop: 66,
    }}>
      <MeshDeco style={{ top: -40, right: -60 }} />
      <div style={{ position: "absolute", right: "40%", top: "15%", width: 320, height: 320, borderRadius: "50%", background: C.orange, opacity: 0.05, filter: "blur(60px)", pointerEvents: "none" }} />
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", padding: "60px 0" }}>
          {/* Left */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", borderRadius: 20, background: C.orangeLt, border: `1px solid rgba(232,118,42,0.25)`, marginBottom: 24 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.orange, display: "inline-block" }} />
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: C.orange }}>
                Organisme certifié Qualiopi
              </span>
            </div>
            <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: "clamp(34px, 4vw, 58px)", lineHeight: 1.08, color: C.navy, marginBottom: 22 }}>
              Expert en formation<br />
              <span style={{ color: C.orange }}>CAO CATIA</span>{" & "}
              <span style={{ color: C.orange }}>3DEXPERIENCE</span>
            </h1>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, lineHeight: 1.75, color: C.textMd, maxWidth: 460, marginBottom: 38 }}>
              Formations certifiantes en CATIA V5, 3DEXPERIENCE et COMPOSER. Présentiel, finançables OPCO, conçues pour les ingénieurs et techniciens de l'industrie.
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              <button onClick={() => document.getElementById("formations")?.scrollIntoView({ behavior: "smooth" })} style={{
                padding: "14px 32px", borderRadius: 10, border: "none",
                background: C.navy, color: C.white,
                fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 14,
                cursor: "pointer", boxShadow: `0 4px 20px rgba(10,45,92,0.22)`,
              }}>Voir les formations →</button>
              <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{
                padding: "14px 28px", borderRadius: 10,
                border: `1.5px solid ${C.border}`, background: C.white, color: C.navy,
                fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 14, cursor: "pointer",
              }}>Demander un devis</button>
            </div>
            <div style={{ display: "flex", gap: 24, marginTop: 44, alignItems: "center" }}>
              {["OPCO finançable", "CPF éligible", "Sur site ou centre"].map(t => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 16, height: 16, borderRadius: "50%", background: C.navyLt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: C.navyMid, fontWeight: 700 }}>✓</span>
                  <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 12, color: C.textMd, fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right – carte mockup CATIA */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ background: C.white, borderRadius: 20, border: `1px solid ${C.border}`, boxShadow: "0 16px 60px rgba(10,45,92,0.11)", padding: 28, width: "100%", maxWidth: 420 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div style={{ display: "flex", gap: 6 }}>
                  {[C.orange, C.navyMid, C.border].map((c, i) => <div key={i} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
                </div>
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: C.textLt }}>CATIA V5 r21 — Part Design</span>
                <span style={{ color: C.textLt, fontSize: 10 }}>●●●</span>
              </div>
              <div style={{ background: `linear-gradient(135deg, ${C.navyLt}, #EEF4FF)`, borderRadius: 12, padding: "24px 16px", display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${C.border}`, marginBottom: 20, position: "relative", overflow: "hidden" }}>
                <MeshDeco style={{ top: -20, right: -20, width: 220, height: 180, opacity: 0.3 }} />
                <WireframeSVG />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderTop: `1px solid ${C.border}`, paddingTop: 16 }}>
                {STATS.slice(0, 3).map((s, i) => (
                  <div key={i} style={{ textAlign: "center", borderRight: i < 2 ? `1px solid ${C.border}` : "none" }}>
                    <p style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: 18, color: C.orange, margin: 0 }}>{s.value}</p>
                    <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 10, color: C.textLt, margin: "2px 0 0" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ── Stats bar ─────────────────────────────────────────────────────────────────
function StatsBar() {
  return (
    <div style={{ background: C.navy, padding: "28px 0" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.12)" : "none", padding: "0 16px" }}>
              <p style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: 32, color: C.orange, margin: 0, lineHeight: 1 }}>{s.value}</p>
              <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.6)", margin: "4px 0 0" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

// ── Formation Card (light) ────────────────────────────────────────────────────
function FormationCard({ code, title, days }: { code: string; title: string; days: number | null }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? C.navyLt : C.white,
        border: `1px solid ${hovered ? C.orange : C.border}`,
        borderRadius: 10, padding: "1rem 1.25rem",
        display: "flex", alignItems: "flex-start", justifyContent: "space-between",
        gap: "1rem", transition: "all 0.22s", cursor: "pointer",
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? "0 6px 20px rgba(232,118,42,0.10)" : "0 1px 4px rgba(10,45,92,0.05)",
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.7rem", fontWeight: 700, color: C.orange, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.3rem" }}>{code}</div>
        <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.875rem", fontWeight: 500, color: C.text, lineHeight: 1.4 }}>{title}</div>
      </div>
      {days && (
        <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", flexShrink: 0, background: C.orangeLt, border: "1px solid rgba(232,118,42,0.3)", borderRadius: 100, padding: "0.2rem 0.65rem", color: C.orange, fontFamily: "'Montserrat',sans-serif", fontSize: "0.72rem", fontWeight: 600 }}>
          <IconClock />{days}j
        </div>
      )}
    </div>
  );
}

// ── Category Section (light) ──────────────────────────────────────────────────
function CategorySection({ category, index }: { category: typeof CATEGORIES[0]; index: number }) {
  const [open, setOpen] = useState(index < 2);
  return (
    <div style={{ borderBottom: `1px solid ${C.border}` }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1.5rem 0", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", textAlign: "left" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ width: 3, height: 28, background: C.orange, borderRadius: 2, flexShrink: 0 }} />
          <div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "1.25rem", fontWeight: 800, color: C.navy, lineHeight: 1 }}>{category.label}</div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.75rem", color: C.textLt, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "0.2rem" }}>{category.tag}</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ background: C.orangeLt, border: "1px solid rgba(232,118,42,0.3)", borderRadius: 100, padding: "0.2rem 0.8rem", color: C.orange, fontSize: "0.78rem", fontFamily: "'Montserrat',sans-serif", fontWeight: 600 }}>
            {category.formations.length} formations
          </span>
          <div style={{ color: C.textLt, transform: open ? "rotate(90deg)" : "none", transition: "transform 0.25s" }}>
            <IconArrow />
          </div>
        </div>
      </button>
      {open && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "0.65rem", paddingBottom: "1.75rem" }}>
          {category.formations.map((f) => <FormationCard key={f.code} {...f} />)}
        </div>
      )}
    </div>
  );
}

// ── Formations Section ────────────────────────────────────────────────────────
function FormationsSection() {
  return (
    <section id="formations" style={{ background: C.bg, padding: "88px 0", position: "relative", overflow: "hidden" }}>
      <MeshDeco style={{ bottom: -40, left: -60, opacity: 0.2 }} />
      <Container>
        <div style={{ marginBottom: "3.5rem" }}>
          <SectionLabel>Catalogue complet</SectionLabel>
          <SectionTitle>Nos <span style={{ color: C.orange }}>formations</span></SectionTitle>
          <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "1rem", color: C.textMd, maxWidth: 500, lineHeight: 1.6 }}>
            Formations adaptées à tous les niveaux, du débutant à l'expert métier. Durées indicatives, ajustables selon vos besoins.
          </p>
        </div>
        {CATEGORIES.map((cat, i) => <CategorySection key={cat.id} category={cat} index={i} />)}
      </Container>
    </section>
  );
}

// ── Process ───────────────────────────────────────────────────────────────────
function Process() {
  return (
    <section id="méthode" style={{ background: C.white, padding: "88px 0" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <SectionLabel>Notre méthode</SectionLabel>
            <SectionTitle>Un accompagnement<br />100% sur-mesure</SectionTitle>
            <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 15, lineHeight: 1.8, color: C.textMd, marginBottom: 32 }}>
              Chaque formation est construite autour de vos outils, vos pièces et vos enjeux. Nicolas s'adapte au niveau et au contexte de chaque équipe.
            </p>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{ padding: "12px 26px", borderRadius: 9, border: `1.5px solid ${C.navy}`, background: "transparent", color: C.navy, fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              Parler à Nicolas →
            </button>
          </div>
          <div>
            {PROCESS.map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 18, padding: "20px 0", borderBottom: i < PROCESS.length - 1 ? `1px solid ${C.border}` : "none" }}>
                <div style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 10, background: C.navyLt, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 14, color: C.navyMid }}>{p.n}</div>
                <div>
                  <h4 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 14, color: C.navy, marginBottom: 4 }}>{p.title}</h4>
                  <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 13, color: C.textMd, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ── Testimonials ──────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <section style={{ background: C.bg, padding: "88px 0", position: "relative", overflow: "hidden" }}>
      <MeshDeco style={{ top: -20, right: -40, opacity: 0.18 }} />
      <Container>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <SectionLabel center>Témoignages</SectionLabel>
          <SectionTitle center>Ce que disent nos stagiaires</SectionTitle>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ background: C.white, borderRadius: 16, border: `1px solid ${C.border}`, padding: "28px 26px", boxShadow: "0 2px 12px rgba(10,45,92,0.05)" }}>
              <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                {Array(5).fill(0).map((_, s) => <span key={s} style={{ color: C.orange, fontSize: 14 }}>★</span>)}
              </div>
              <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 13, lineHeight: 1.8, color: C.textMd, marginBottom: 22, fontStyle: "italic" }}>« {t.text} »</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: `1px solid ${C.border}` }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: `linear-gradient(135deg, ${C.navy}, ${C.navyMid})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, color: C.white }}>{t.initials}</div>
                <div>
                  <p style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 13, color: C.navy, margin: 0 }}>{t.name}</p>
                  <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 11, color: C.textLt, margin: 0 }}>{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ── CTA Final ─────────────────────────────────────────────────────────────────
function CtaFinal() {
  return (
    <section style={{ background: C.white, padding: "80px 0 60px" }}>
      <Container>
        <div style={{ background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navyMid} 100%)`, borderRadius: 20, padding: "52px 60px", display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center", position: "relative", overflow: "hidden", boxShadow: "0 12px 48px rgba(10,45,92,0.18)" }}>
          <MeshDeco style={{ top: -20, right: 80, opacity: 0.15 }} />
          <div style={{ position: "relative" }}>
            <SectionLabel>Financement</SectionLabel>
            <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: "clamp(22px, 2.5vw, 34px)", color: C.white, lineHeight: 1.2, marginBottom: 12 }}>Votre formation à 100% finançable</h2>
            <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, maxWidth: 500, margin: 0 }}>
              Nos formations sont éligibles aux financements OPCO, CPF et FIF-PL. Nicolas vous accompagne dans toutes les démarches administratives.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{ padding: "14px 28px", borderRadius: 10, border: "none", background: C.orange, color: C.white, fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 14, cursor: "pointer", whiteSpace: "nowrap", boxShadow: "0 4px 20px rgba(232,118,42,0.5)" }}>
              Demander un devis gratuit
            </button>
            <button style={{ padding: "12px 28px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.85)", fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>
              Appeler Nicolas
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nom: "", email: "", formation: "", message: "" });
  const handleSubmit = () => { if (form.nom && form.email) setSent(true); };

  const inputStyle: React.CSSProperties = {
    width: "100%", boxSizing: "border-box",
    background: C.bg, border: `1px solid ${C.border}`,
    borderRadius: 8, padding: "0.75rem 1rem",
    color: C.text, fontSize: "0.9rem",
    fontFamily: "'Montserrat', sans-serif", outline: "none",
  };

  return (
    <section id="contact" style={{ background: C.bg, padding: "88px 0" }}>
      <Container style={{ maxWidth: 700 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <SectionLabel center>Nous contacter</SectionLabel>
          <SectionTitle center>Demande de formation</SectionTitle>
          <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.95rem", color: C.textMd, lineHeight: 1.6 }}>
            Précisez votre besoin, nous revenons vers vous sous 48h.
          </p>
        </div>
        {sent ? (
          <div style={{ background: C.orangeLt, border: "1px solid rgba(232,118,42,0.4)", borderRadius: 14, padding: "2.5rem", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✅</div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "1.5rem", fontWeight: 700, color: C.navy }}>Message envoyé !</div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.9rem", color: C.textMd, marginTop: "0.5rem" }}>Nicolas vous répondra sous 48h.</div>
          </div>
        ) : (
          <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: 14, padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem", boxShadow: "0 4px 24px rgba(10,45,92,0.07)" }}>
            {[
              { key: "nom",       label: "Nom & Prénom",       type: "text",  placeholder: "Jean Dupont" },
              { key: "email",     label: "Email professionnel", type: "email", placeholder: "jean.dupont@entreprise.fr" },
              { key: "formation", label: "Formation souhaitée", type: "text",  placeholder: "Ex. CATIA V5 fondamentaux (V5F)" },
            ].map(({ key, label, type, placeholder }) => (
              <div key={key}>
                <label style={{ display: "block", fontFamily: "'Montserrat',sans-serif", fontSize: "0.78rem", fontWeight: 600, color: C.textMd, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{label}</label>
                <input type={type} placeholder={placeholder} value={(form as any)[key]}
                  onChange={e => setForm({ ...form, [key]: e.target.value })}
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = C.orange)}
                  onBlur={e => (e.currentTarget.style.borderColor = C.border)}
                />
              </div>
            ))}
            <div>
              <label style={{ display: "block", fontFamily: "'Montserrat',sans-serif", fontSize: "0.78rem", fontWeight: 600, color: C.textMd, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Message (optionnel)</label>
              <textarea placeholder="Précisez votre contexte, niveau actuel, nombre de participants..."
                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                rows={4} style={{ ...inputStyle, resize: "vertical" }}
                onFocus={e => (e.currentTarget.style.borderColor = C.orange)}
                onBlur={e => (e.currentTarget.style.borderColor = C.border)}
              />
            </div>
            <button onClick={handleSubmit} style={{ background: C.navy, border: "none", cursor: "pointer", color: C.white, fontSize: "0.9rem", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.9rem 2rem", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", transition: "all 0.2s", boxShadow: "0 4px 16px rgba(10,45,92,0.2)" }}
              onMouseEnter={e => { e.currentTarget.style.background = C.navyMid; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.navy; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <IconCheck /> Envoyer ma demande
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: "36px 28px 24px" }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: C.navy, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: 10, color: C.white }}>NK</span>
            </div>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 13, color: C.navy }}>
              NK <span style={{ color: C.orange }}>3D</span> Formation
            </span>
          </div>
          <div style={{ display: "flex", gap: 32 }}>
            {["Mentions légales", "Politique qualité", "CGV", "Contact"].map(l => (
              <a key={l} href="#" style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 12, color: C.textLt, textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 20, textAlign: "center" }}>
          <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 11, color: C.textLt, margin: 0 }}>
            © {new Date().getFullYear()} NK 3D Formation — Nicolas Kreutz · Organisme de formation certifié Qualiopi · Tous droits réservés
          </p>
        </div>
      </Container>
    </footer>
  );
}


// ── App ───────────────────────────────────────────────────────────────────────
export default function NK3DFormationPage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::placeholder { color: #8A9AB0; }
        button { transition: filter 0.2s, transform 0.15s; }
        button:active { transform: scale(0.98); }
        a { transition: opacity 0.2s; }
        a:hover { opacity: 0.7; }
      `}</style>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <FormationsSection />
        <Process />
        <Testimonials />
        <CtaFinal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
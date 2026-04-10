"use client";

import Link from "next/link";
import Image from "next/image";

// ── Cubes isométriques SVG ───────────────────────────────────────────────────


// ── Grille de perspective en fond ────────────────────────────────────────────
function PerspectiveGrid() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[55%] overflow-hidden opacity-[.15] pointer-events-none">
      <svg
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMax meet"
        className="w-full h-full"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Horizontales */}
        {[
          [0, 400, 1200, 400, 1],
          [100, 340, 1100, 340, 0.8],
          [200, 290, 1000, 290, 0.6],
          [280, 248, 920, 248, 0.5],
          [340, 212, 860, 212, 0.4],
          [390, 182, 810, 182, 0.3],
          [430, 156, 770, 156, 0.25],
          [460, 134, 740, 134, 0.2],
        ].map(([x1, y1, x2, y2, w], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#1A4F8A" strokeWidth={w} />
        ))}
        {/* Fuyantes gauche */}
        {[0, 120, 240, 360, 480].map((x, i) => (
          <line key={`l${i}`} x1={600} y1={0} x2={x} y2={400}
            stroke="#1A4F8A" strokeWidth={0.6 - i * 0.08} />
        ))}
        {/* Fuyantes droite */}
        {[1200, 1080, 960, 840, 720].map((x, i) => (
          <line key={`r${i}`} x1={600} y1={0} x2={x} y2={400}
            stroke="#1A4F8A" strokeWidth={0.6 - i * 0.08} />
        ))}
      </svg>
    </div>
  );
}

// ── Logo cube inline ─────────────────────────────────────────────────────────
function LogoCube() {
  return (
    <svg viewBox="0 0 28 28" className="w-7 h-7" aria-hidden="true"
      fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="14,2 26,9 14,16 2,9"
        fill="var(--color-navy-mid)" stroke="var(--color-navy)" strokeWidth="1" />
      <polygon points="14,16 26,9 26,19 14,26"
        fill="var(--color-orange)" stroke="var(--color-navy)" strokeWidth="1" />
      <polygon points="14,16 2,9 2,19 14,26"
        fill="var(--color-navy)" stroke="var(--color-navy)" strokeWidth="1" />
    </svg>
  );
}

// ── Page 404 ─────────────────────────────────────────────────────────────────
export default function NotFound() {
  return (
    <div
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}
    >
      {/* Grille perspective */}
      <PerspectiveGrid />

      {/* Halo lumineux haut */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-navy-lt) 0%, transparent 70%)",
          opacity: 0.6,
        }}
      />

      {/* ── Header ────────────────────────────────────────────────────── */}
      <header
        className="relative z-10 flex items-center justify-between px-10 py-5"
        style={{
          backgroundColor: "var(--color-white)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        {/* Logo */}
        <div
          className="flex items-center gap-2.5 text-[1.05rem] font-extrabold uppercase tracking-wide"
          style={{ color: "var(--color-navy)", fontFamily: "var(--font-montserrat)" }}
        >
          <Link href="/" className="flex min-w-0 shrink items-center">
            <Image
              src="/images/LOGO_COMBINE_FOND_CLAIR.svg"
              alt="NK3D Formation"
              width={250}
              height={50}
              className="h-14 w-auto sm:h-16 md:h-18 lg:h-20"
              priority
            />
          </Link>
        </div>

      
      </header>

      {/* ── Contenu principal ─────────────────────────────────────────── */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-16 pt-8 text-center">

     
        {/* 404 */}
        <h1
          className="text-[clamp(5.5rem,20vw,8.5rem)] font-black leading-none"
          style={{
            letterSpacing: "-5px",
            color: "var(--color-navy)",
            fontFamily: "var(--font-montserrat)",
          }}
        >
          4<span style={{ color: "var(--color-orange)" }}>0</span>4
        </h1>

        {/* Barre accent */}
        <div
          className="mx-auto my-5 h-[3px] w-12 rounded"
          style={{ backgroundColor: "var(--color-orange)" }}
        />

        {/* Titre */}
        <p
          className="mb-3 text-[1.1rem] font-bold uppercase tracking-[0.06em]"
          style={{ color: "var(--color-navy)", fontFamily: "var(--font-montserrat)" }}
        >
          Page introuvable
        </p>

        {/* Description */}
        <p
          className="mb-9 max-w-[380px] text-[0.92rem] leading-[1.7]"
          style={{ color: "var(--color-text-md)" }}
        >
          Cette page n'existe pas ou a été déplacée.
          <br />
          Revenez à l'accueil pour continuer votre parcours de formation.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3 text-[0.82rem] font-bold uppercase tracking-[0.08em] transition-colors duration-200"
            style={{
              backgroundColor: "var(--color-navy)",
              color: "var(--color-white)",
              fontFamily: "var(--font-montserrat)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--color-navy-mid)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--color-navy)")
            }
          >
            ← Retour à l'accueil
          </Link>

          <Link
            href="/#formations"
            className="inline-flex items-center gap-2 px-7 py-3 text-[0.82rem] font-semibold uppercase tracking-[0.08em] transition-colors duration-200"
            style={{
              backgroundColor: "transparent",
              color: "var(--color-navy)",
              border: "1.5px solid var(--color-border)",
              fontFamily: "var(--font-montserrat)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-navy-mid)";
              e.currentTarget.style.color = "var(--color-navy-mid)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border)";
              e.currentTarget.style.color = "var(--color-navy)";
            }}
          >
            Voir les formations
          </Link>
        </div>
      </main>
    </div>
  );
}
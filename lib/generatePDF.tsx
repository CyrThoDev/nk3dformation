import React from "react";
import path from "path";
import {
  Document, Page, Text, View, StyleSheet, Image,
  pdf, Font, Svg, Path,
} from "@react-pdf/renderer";

const CDN = "https://cdn.jsdelivr.net/npm/@fontsource/montserrat@5.0.0/files";
Font.register({
  family: "Montserrat",
  fonts: [
    { src: `${CDN}/montserrat-latin-400-normal.woff`, fontWeight: 400 },
    { src: `${CDN}/montserrat-latin-500-normal.woff`, fontWeight: 500 },
    { src: `${CDN}/montserrat-latin-600-normal.woff`, fontWeight: 600 },
    { src: `${CDN}/montserrat-latin-700-normal.woff`, fontWeight: 700 },
    { src: `${CDN}/montserrat-latin-800-normal.woff`, fontWeight: 800 },
    { src: `${CDN}/montserrat-latin-900-normal.woff`, fontWeight: 900 },
  ],
});

Font.register({
  family: "EurostileExtended",
  src: path.join(process.cwd(), "public/fonts/eurostile/EurostileExtended-Roman.woff"),
});
import type { DocumentProps } from "@react-pdf/renderer";
import type { FormationData } from "./parseFormation";

// ── Assets ────────────────────────────────────────────────────────────────
const LOGO = path.join(process.cwd(), "public/images/LOGO_COMBINE_FOND_CLAIR.png");

// ── Palette ───────────────────────────────────────────────────────────────
const C = {
  navy:     "#0A2D5C",
  navyMid:  "#1A4F8A",
  orange:   "#E8762A",
  orangeLt: "#FFF0E6",
  orangeTxt:"#B85A10",
  bg:       "#F6F8FC",
  white:    "#FFFFFF",
  text:     "#0D1B2E",
  textMd:   "#4A5568",
  textLt:   "#8A9AB0",
  border:   "#E4EAF3",
};

// ── Styles ────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  page: {
    backgroundColor: C.bg,
    fontFamily: "Montserrat",
    paddingBottom: 50,
  },

  // ── Header ──
  header: {
    backgroundColor: C.white,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    paddingHorizontal: 36,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    height: 36,
    objectFit: "contain",
  },
  headerRef: {
    fontFamily: "Montserrat", fontWeight: 700,
    fontSize: 9,
    color: C.orange,
    letterSpacing: 1.2,
  },

  // ── Hero ──
  hero: {
    backgroundColor: C.white,
    paddingHorizontal: 36,
    paddingTop: 20,
    paddingBottom: 24,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: C.orangeLt,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  badgeText: {
    fontFamily: "Montserrat", fontWeight: 700,
    fontSize: 8,
    color: C.orangeTxt,
    letterSpacing: 1,
  },
  titre: {
    fontFamily: "Montserrat",
    fontSize: 22,
    color: C.navy,
    lineHeight: 1.2,
    marginBottom: 8,
  },
  description: {
    fontFamily: "Montserrat",
    fontSize: 10,
    color: C.textMd,
    lineHeight: 1.6,
    maxWidth: 420,
  },

  // ── Info cards ──
  infoRow: {
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 36,
    marginTop: 20,
    marginBottom: 24,
  },
  infoCard: {
    flex: 1,
    backgroundColor: C.white,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 10,
    padding: 12,
  },
  infoLabel: {
    fontFamily: "EurostileExtended",
    fontSize: 7,
    color: C.textLt,
    letterSpacing: 1.2,
    marginBottom: 5,
  },
  infoValue: {
    fontFamily: "Montserrat",
    fontSize: 10,
    color: C.text,
    lineHeight: 1.3,
  },
  infoDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: C.orange,
    marginBottom: 6,
  },

  // ── Body ──
  body: {
    flexDirection: "row",
    gap: 24,
    paddingHorizontal: 36,
    alignItems: "flex-start",
  },
  mainCol: { flex: 1 },

  // ── Section ──
  sectionTitle: {
    fontFamily: "Montserrat",
    fontSize: 13,
    color: C.navy,
    marginBottom: 10,
  },
  section: { marginBottom: 24 },

  // ── Objectifs ──
  objectifItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    padding: 10,
    backgroundColor: C.white,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 8,
    marginBottom: 6,
  },
  objectifCheck: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: C.orangeLt,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginTop: 1,
  },
  objectifText: {
    fontFamily: "Montserrat",
    fontSize: 9,
    color: C.textMd,
    lineHeight: 1.5,
    flex: 1,
  },

  // ── Programme ──
  programmeItem: {
    padding: 12,
    backgroundColor: C.white,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 8,
    marginBottom: 6,
  },
  programmeHeader: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 6,
    marginBottom: 3,
    flexWrap: "wrap",
  },
  programmeJour: {
    fontFamily: "Montserrat", fontWeight: 700,
    fontSize: 9,
    color: C.orange,
    letterSpacing: 0.5,
    flexShrink: 0,
  },
  programmeSep: {
    fontSize: 9,
    color: C.border,
    flexShrink: 0,
  },
  programmeTitre: {
    fontFamily: "Montserrat",
    fontSize: 10,
    color: C.navy,
  },
  programmeContenu: {
    fontFamily: "Montserrat",
    fontSize: 9,
    color: C.textMd,
    lineHeight: 1.5,
  },

  // ── Formations associées ──
  assocGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  assocCard: {
    width: "31%",
    backgroundColor: C.white,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 8,
    padding: 10,
  },
  assocCode: {
    fontFamily: "EurostileExtended",
    fontSize: 7,
    color: C.orange,
    letterSpacing: 0.8,
    marginBottom: 3,
  },
  assocTitre: {
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: 8,
    color: C.navy,
    lineHeight: 1.4,
    marginBottom: 4,
  },
  assocMeta: {
    fontFamily: "Montserrat",
    fontSize: 7,
    color: C.textLt,
  },

  // ── Public & Prérequis ──
  twoCol: { flexDirection: "row", gap: 10 },
  publicCard: {
    flex: 1,
    backgroundColor: C.white,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 8,
    padding: 12,
  },
  publicLabel: {
    fontFamily: "Montserrat", fontWeight: 700,
    fontSize: 7,
    color: C.textLt,
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  publicText: {
    fontFamily: "Montserrat",
    fontSize: 9,
    color: C.textMd,
    lineHeight: 1.6,
  },

  // ── Sidebar CTA ──
  ctaCard: {
    backgroundColor: C.white,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  ctaTitle: {
    fontFamily: "Montserrat",
    fontSize: 10,
    color: C.navy,
    marginBottom: 5,
  },
  ctaText: {
    fontFamily: "Montserrat",
    fontSize: 8,
    color: C.textMd,
    lineHeight: 1.55,
    marginBottom: 14,
  },
  ctaBtn: {
    backgroundColor: C.orange,
    borderRadius: 8,
    paddingVertical: 9,
    paddingHorizontal: 12,
    alignItems: "center",
    marginBottom: 8,
  },
  ctaBtnText: {
    fontFamily: "Montserrat",
    fontSize: 9,
    color: C.white,
  },
  ctaBtnOutline: {
    borderWidth: 1.5,
    borderColor: C.navy,
    borderRadius: 8,
    paddingVertical: 9,
    paddingHorizontal: 12,
    alignItems: "center",
    marginBottom: 14,
  },
  ctaBtnOutlineText: {
    fontFamily: "Montserrat",
    fontSize: 9,
    color: C.navy,
  },
  ctaDivider: {
    borderTopWidth: 1,
    borderTopColor: C.border,
    paddingTop: 10,
  },
  ctaCheckRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 5,
  },
  ctaCheckDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: C.orange,
    flexShrink: 0,
  },
  ctaCheckText: {
    fontFamily: "Montserrat",
    fontSize: 7.5,
    color: C.textMd,
  },

  // ── Footer ──
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: C.white,
    borderTopWidth: 1,
    borderTopColor: C.border,
    paddingHorizontal: 36,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    fontFamily: "Montserrat",
    fontSize: 7.5,
    color: C.textLt,
  },
  footerBrand: {
    fontFamily: "Montserrat",
    fontSize: 7.5,
    color: C.navy,
  },
});

// ── Coche SVG ─────────────────────────────────────────────────────────────
function CheckIcon() {
  return (
    <View style={s.objectifCheck}>
      <Svg width={10} height={10} viewBox="0 0 24 24">
        <Path
          d="M20 6L9 17L4 12"
          stroke={C.orange}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </Svg>
    </View>
  );
}

// ── Composant PDF ─────────────────────────────────────────────────────────
function FormationPDF({ data }: { data: FormationData }) {
  const infos = [
    { label: "DURÉE",        value: data.duree  || "À définir" },
    { label: "NIVEAU",       value: data.niveau || "Tous niveaux" },
    { label: "FORMAT",       value: data.format || "Présentiel / Distanciel" },
    { label: "FINANCEMENT",  value: "OPCO · FAF" },
  ];

  return (
    <Document>
      <Page size="A4" style={s.page}>

        {/* ── EN-TÊTE avec logo ── */}
        <View style={s.header} fixed>
          <Image src={LOGO} style={s.logo} />
          <Text style={s.headerRef}>{data.reference}</Text>
        </View>

        {/* ── HERO ── */}
        <View style={s.hero}>
          <View style={s.badge}>
            <Text style={s.badgeText}>{data.reference}</Text>
          </View>
          <Text style={s.titre}>{data.titre}</Text>
          {data.description ? (
            <Text style={s.description}>{data.description}</Text>
          ) : null}
        </View>

        {/* ── INFO CARDS ── */}
        <View style={s.infoRow}>
          {infos.map((info) => (
            <View key={info.label} style={s.infoCard}>
              <Text style={s.infoLabel}>{info.label}</Text>
              <Text style={s.infoValue}>{info.value}</Text>
            </View>
          ))}
        </View>

        {/* ── BODY 2 COLONNES ── */}
        <View style={s.body}>

          {/* Colonne principale */}
          <View style={s.mainCol}>

            {/* Objectifs */}
            {data.objectifs.length > 0 && (
              <View style={s.section}>
                <Text style={s.sectionTitle}>Objectifs de la formation</Text>
                {data.objectifs.map((obj, i) => (
                  <View key={i} style={s.objectifItem}>
                    <CheckIcon />
                    <Text style={s.objectifText}>{obj}</Text>
                  </View>
                ))}
              </View>
            )}

            {/* Programme — page 2 */}
            {data.programme.length > 0 && (
              <View style={[s.section, { paddingTop: 28 }]} break>
                <Text style={s.sectionTitle}>Programme</Text>
                {data.programme.map((item, i) => {
                  const isObj = typeof item === "object" && item !== null;
                  const jour   = isObj ? (item as { jour?: string }).jour   ?? `Étape ${i + 1}` : `Étape ${i + 1}`;
                  const titre  = isObj ? (item as { titre?: string }).titre  ?? String(item)     : String(item);
                  const contenu = isObj ? (item as { contenu?: string }).contenu ?? "" : "";
                  return (
                    <View key={i} style={s.programmeItem}>
                      <View style={s.programmeHeader}>
                        <Text style={s.programmeJour}>{jour}</Text>
                        <Text style={s.programmeSep}>·</Text>
                        <Text style={s.programmeTitre}>{titre}</Text>
                      </View>
                      {contenu ? <Text style={s.programmeContenu}>{contenu}</Text> : null}
                    </View>
                  );
                })}
              </View>
            )}

            {/* Public & Prérequis */}
            {(data.publicConcerne || data.prerequis) && (
              <View style={s.section}>
                <Text style={s.sectionTitle}>Public visé & prérequis</Text>
                <View style={s.twoCol}>
                  <View style={s.publicCard}>
                    <Text style={s.publicLabel}>PUBLIC VISÉ</Text>
                    <Text style={s.publicText}>{data.publicConcerne || "–"}</Text>
                  </View>
                  <View style={s.publicCard}>
                    <Text style={s.publicLabel}>PRÉREQUIS</Text>
                    <Text style={s.publicText}>{data.prerequis || "–"}</Text>
                  </View>
                </View>
              </View>
            )}

            {/* Formations associées */}
            {data.formationsAssociees && data.formationsAssociees.length > 0 && (
              <View style={s.section}>
                <Text style={s.sectionTitle}>Formations associées</Text>
                <View style={s.assocGrid}>
                  {data.formationsAssociees.map((f, i) => (
                    <View key={i} style={s.assocCard}>
                      <Text style={s.assocCode}>{f.code}</Text>
                      <Text style={s.assocTitre}>{f.titre}</Text>
                      {f.duree && <Text style={s.assocMeta}>{f.duree}</Text>}
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>

        </View>

        {/* ── FOOTER ── */}
        <View style={s.footer} fixed>
          <Text style={s.footerText}>nk3dformation.fr</Text>
          <Text style={s.footerBrand}>NK 3D Formation — Nicolas Kreutz</Text>
        </View>
      </Page>
    </Document>
  );
}

// ── Export ────────────────────────────────────────────────────────────────
export async function generateFormationPDF(data: FormationData): Promise<Buffer> {
  const doc = React.createElement(FormationPDF, { data });
  const instance = pdf(doc as React.ReactElement<DocumentProps>);
  const blob = await instance.toBlob();
  const arrayBuffer = await blob.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

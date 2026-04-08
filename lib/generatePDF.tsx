// import React from "react";
// import {
//   Document,
//   Page,
//   Text,
//   View,
//   StyleSheet,
//   pdf,
//   Font,
// } from "@react-pdf/renderer";
// import type { FormationData } from "./parseFormation";

// // ── Palette exacte de FormationDetail ────────────────────────────────────
// const C = {
//   navy:     "#0A2D5C",
//   navyMid:  "#1A4F8A",
//   navyLt:   "#E8F0FA",
//   orange:   "#E8762A",
//   orangeLt: "#FFF0E6",
//   orangeTxt:"#B85A10",
//   bg:       "#F6F8FC",
//   white:    "#FFFFFF",
//   text:     "#0D1B2E",
//   textMd:   "#4A5568",
//   textLt:   "#8A9AB0",
//   border:   "#E4EAF3",
// };

// // ── Styles ────────────────────────────────────────────────────────────────
// const s = StyleSheet.create({
//   page: {
//     backgroundColor: C.bg,
//     fontFamily: "Helvetica",
//     paddingBottom: 50,
//   },

//   // Header (fond blanc + bordure basse)
//   hero: {
//     backgroundColor: C.white,
//     borderBottomWidth: 1,
//     borderBottomColor: C.border,
//     paddingHorizontal: 36,
//     paddingTop: 28,
//     paddingBottom: 28,
//   },
//   // Badge catégorie orange pâle
//   badge: {
//     alignSelf: "flex-start",
//     backgroundColor: C.orangeLt,
//     borderRadius: 20,
//     paddingHorizontal: 10,
//     paddingVertical: 3,
//     marginBottom: 10,
//   },
//   badgeText: {
//     fontFamily: "Helvetica-Bold",
//     fontSize: 8,
//     color: C.orangeTxt,
//     letterSpacing: 1,
//   },
//   titre: {
//     fontFamily: "Helvetica-Bold",
//     fontSize: 22,
//     color: C.navy,
//     lineHeight: 1.2,
//     marginBottom: 8,
//   },
//   description: {
//     fontSize: 10,
//     color: C.textMd,
//     lineHeight: 1.6,
//     maxWidth: 420,
//   },

//   // Info cards (4 colonnes)
//   infoRow: {
//     flexDirection: "row",
//     gap: 10,
//     marginHorizontal: 36,
//     marginTop: 20,
//     marginBottom: 24,
//   },
//   infoCard: {
//     flex: 1,
//     backgroundColor: C.white,
//     borderWidth: 1,
//     borderColor: C.border,
//     borderRadius: 10,
//     padding: 12,
//   },
//   infoLabel: {
//     fontFamily: "Helvetica-Bold",
//     fontSize: 7,
//     color: C.textLt,
//     letterSpacing: 1.2,
//     marginBottom: 5,
//   },
//   infoValue: {
//     fontFamily: "Helvetica-Bold",
//     fontSize: 11,
//     color: C.text,
//     lineHeight: 1.3,
//   },
//   infoDot: {
//     width: 6,
//     height: 6,
//     borderRadius: 3,
//     backgroundColor: C.orange,
//     marginBottom: 6,
//   },

//   // Body (2 colonnes)
//   body: {
//     flexDirection: "row",
//     gap: 24,
//     paddingHorizontal: 36,
//     alignItems: "flex-start",
//   },
//   mainCol: {
//     flex: 1,
//   },
//   sideCol: {
//     width: 180,
//   },

//   // Section title style Montserrat bold
//   sectionTitle: {
//     fontFamily: "Helvetica-Bold",
//     fontSize: 13,
//     color: C.navy,
//     marginBottom: 10,
//     marginTop: 0,
//   },
//   section: {
//     marginBottom: 24,
//   },

//   // Objectifs
//   objectifItem: {
//     flexDirection: "row",
//     alignItems: "flex-start",
//     gap: 10,
//     padding: 10,
//     backgroundColor: C.white,
//     borderWidth: 1,
//     borderColor: C.border,
//     borderRadius: 8,
//     marginBottom: 6,
//   },
//   objectifCheck: {
//     width: 14,
//     height: 14,
//     borderRadius: 7,
//     backgroundColor: C.orangeLt,
//     alignItems: "center",
//     justifyContent: "center",
//     flexShrink: 0,
//     marginTop: 1,
//   },
//   objectifCheckText: {
//     fontSize: 7,
//     color: C.orange,
//     fontFamily: "Helvetica-Bold",
//   },
//   objectifText: {
//     fontSize: 9,
//     color: C.textMd,
//     lineHeight: 1.5,
//     flex: 1,
//   },

//   // Programme (style jour + titre + contenu)
//   programmeItem: {
//     flexDirection: "row",
//     gap: 14,
//     padding: 12,
//     backgroundColor: C.white,
//     borderWidth: 1,
//     borderColor: C.border,
//     borderRadius: 8,
//     marginBottom: 6,
//     alignItems: "flex-start",
//   },
//   programmeJour: {
//     fontFamily: "Helvetica-Bold",
//     fontSize: 9,
//     color: C.orange,
//     letterSpacing: 0.5,
//     width: 56,
//     flexShrink: 0,
//     paddingTop: 1,
//   },
//   programmeTitre: {
//     fontFamily: "Helvetica-Bold",
//     fontSize: 10,
//     color: C.navy,
//     marginBottom: 2,
//   },
//   programmeContenu: {
//     fontSize: 9,
//     color: C.textMd,
//     lineHeight: 1.5,
//   },

//   // Public & prérequis (2 colonnes)
//   twoCol: {
//     flexDirection: "row",
//     gap: 10,
//   },
//   publicCard: {
//     flex: 1,
//     backgroundColor: C.white,
//     borderWidth: 1,
//     borderColor: C.border,
//     borderRadius: 8,
//     padding: 12,
//   },
//   publicLabel: {
//     fontFamily: "Helvetica-Bold",
//     fontSize: 7,
//     color: C.textLt,
//     letterSpacing: 1.2,
//     marginBottom: 6,
//   },
//   publicText: {
//     fontSize: 9,
//     color: C.textMd,
//     lineHeight: 1.6,
//   },

//   // Sidebar CTA card
//   ctaCard: {
//     backgroundColor: C.white,
//     borderWidth: 1,
//     borderColor: C.border,
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 12,
//   },
//   ctaTitle: {
//     fontFamily: "Helvetica-Bold",
//     fontSize: 10,
//     color: C.navy,
//     marginBottom: 5,
//   },
//   ctaText: {
//     fontSize: 8,
//     color: C.textMd,
//     lineHeight: 1.55,
//     marginBottom: 14,
//   },
//   ctaBtn: {
//     backgroundColor: C.orange,
//     borderRadius: 8,
//     paddingVertical: 9,
//     paddingHorizontal: 12,
//     alignItems: "center",
//     marginBottom: 8,
//   },
//   ctaBtnText: {
//     fontFamily: "Helvetica-Bold",
//     fontSize: 9,
//     color: C.white,
//   },
//   ctaBtnOutline: {
//     borderWidth: 1.5,
//     borderColor: C.navy,
//     borderRadius: 8,
//     paddingVertical: 9,
//     paddingHorizontal: 12,
//     alignItems: "center",
//     marginBottom: 14,
//   },
//   ctaBtnOutlineText: {
//     fontFamily: "Helvetica-Bold",
//     fontSize: 9,
//     color: C.navy,
//   },
//   ctaDivider: {
//     borderTopWidth: 1,
//     borderTopColor: C.border,
//     paddingTop: 10,
//   },
//   ctaCheckRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 6,
//     marginBottom: 5,
//   },
//   ctaCheckDot: {
//     width: 5,
//     height: 5,
//     borderRadius: 2.5,
//     backgroundColor: C.orange,
//     flexShrink: 0,
//   },
//   ctaCheckText: {
//     fontSize: 7.5,
//     color: C.textMd,
//   },

//   // Footer
//   footer: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: C.white,
//     borderTopWidth: 1,
//     borderTopColor: C.border,
//     paddingHorizontal: 36,
//     paddingVertical: 12,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   footerText: {
//     fontSize: 7.5,
//     color: C.textLt,
//   },
//   footerBrand: {
//     fontFamily: "Helvetica-Bold",
//     fontSize: 7.5,
//     color: C.navy,
//   },
// });

// // ── Composant PDF ─────────────────────────────────────────────────────────
// function FormationPDF({ data }: { data: FormationData }) {
//   const infos = [
//     { label: "DURÉE",       value: data.duree || "À définir" },
//     { label: "NIVEAU",      value: data.niveau || "Tous niveaux" },
//     { label: "FORMAT",      value: data.format || "Présentiel / Distanciel" },
//     { label: "FINANCEMENT", value: data.prix || "Sur devis" },
//   ];

//   return (
//     <Document>
//       <Page size="A4" style={s.page}>

//         {/* ── HERO ── */}
//         <View style={s.hero}>
//           <View style={s.badge}>
//             <Text style={s.badgeText}>{data.reference || "CATIA V5"}</Text>
//           </View>
//           <Text style={s.titre}>{data.titre}</Text>
//           {data.description ? (
//             <Text style={s.description}>{data.description}</Text>
//           ) : null}
//         </View>

//         {/* ── INFO CARDS ── */}
//         <View style={s.infoRow}>
//           {infos.map((info) => (
//             <View key={info.label} style={s.infoCard}>
//               <View style={s.infoDot} />
//               <Text style={s.infoLabel}>{info.label}</Text>
//               <Text style={s.infoValue}>{info.value}</Text>
//             </View>
//           ))}
//         </View>

//         {/* ── BODY 2 COLONNES ── */}
//         <View style={s.body}>

//           {/* Colonne principale */}
//           <View style={s.mainCol}>

//             {/* Objectifs */}
//             {data.objectifs.length > 0 && (
//               <View style={s.section}>
//                 <Text style={s.sectionTitle}>Objectifs de la formation</Text>
//                 {data.objectifs.map((obj, i) => (
//                   <View key={i} style={s.objectifItem}>
//                     <View style={s.objectifCheck}>
//                       <Text style={s.objectifCheckText}>✓</Text>
//                     </View>
//                     <Text style={s.objectifText}>{obj}</Text>
//                   </View>
//                 ))}
//               </View>
//             )}

//             {/* Programme */}
//             {data.programme.length > 0 && (
//               <View style={s.section}>
//                 <Text style={s.sectionTitle}>Programme</Text>
//                 {data.programme.map((item, i) => {
//                   // Support objet {jour, titre, contenu} ou string simple
//                   const isObj = typeof item === "object" && item !== null;
//                   const jour = isObj ? (item as { jour?: string }).jour ?? `Étape ${i + 1}` : `Étape ${i + 1}`;
//                   const titre = isObj ? (item as { titre?: string }).titre ?? String(item) : String(item);
//                   const contenu = isObj ? (item as { contenu?: string }).contenu ?? "" : "";
//                   return (
//                     <View key={i} style={s.programmeItem}>
//                       <Text style={s.programmeJour}>{jour}</Text>
//                       <View style={{ flex: 1 }}>
//                         <Text style={s.programmeTitre}>{titre}</Text>
//                         {contenu ? <Text style={s.programmeContenu}>{contenu}</Text> : null}
//                       </View>
//                     </View>
//                   );
//                 })}
//               </View>
//             )}

//             {/* Public & Prérequis */}
//             {(data.publicConcerne || data.prerequis) && (
//               <View style={s.section}>
//                 <Text style={s.sectionTitle}>Public visé & prérequis</Text>
//                 <View style={s.twoCol}>
//                   <View style={s.publicCard}>
//                     <Text style={s.publicLabel}>PUBLIC VISÉ</Text>
//                     <Text style={s.publicText}>{data.publicConcerne || "–"}</Text>
//                   </View>
//                   <View style={s.publicCard}>
//                     <Text style={s.publicLabel}>PRÉREQUIS</Text>
//                     <Text style={s.publicText}>{data.prerequis || "–"}</Text>
//                   </View>
//                 </View>
//               </View>
//             )}
//           </View>

//           {/* Sidebar */}
//           <View style={s.sideCol}>
//             <View style={s.ctaCard}>
//               <Text style={s.ctaTitle}>Intéressé par cette formation ?</Text>
//               <Text style={s.ctaText}>
//                 Nicolas vous répond sous 48h et établit un devis gratuit, avec accompagnement OPCO inclus.
//               </Text>
//               <View style={s.ctaBtn}>
//                 <Text style={s.ctaBtnText}>Télécharger le programme</Text>
//               </View>
//               <View style={s.ctaBtnOutline}>
//                 <Text style={s.ctaBtnOutlineText}>Demander un devis gratuit</Text>
//               </View>
//               <View style={s.ctaDivider}>
//                 {["OPCO finançable", "CPF éligible", "Accompagnement inclus"].map((t) => (
//                   <View key={t} style={s.ctaCheckRow}>
//                     <View style={s.ctaCheckDot} />
//                     <Text style={s.ctaCheckText}>{t}</Text>
//                   </View>
//                 ))}
//               </View>
//             </View>
//           </View>
//         </View>

//         {/* ── FOOTER ── */}
//         <View style={s.footer} fixed>
//           <Text style={s.footerText}>nk3dformation.fr</Text>
//           <Text style={s.footerBrand}>NK 3D Formation — Nicolas Kreutz</Text>
//           <Text style={s.footerText}>Organisme certifié Qualiopi</Text>
//         </View>
//       </Page>
//     </Document>
//   );
// }

// // ── Export ────────────────────────────────────────────────────────────────
// export async function generateFormationPDF(data: FormationData): Promise<Buffer> {
//   const doc = React.createElement(FormationPDF, { data });
//   const instance = pdf(doc);
//   const blob = await instance.toBlob();
//   const arrayBuffer = await blob.arrayBuffer();
//   return Buffer.from(arrayBuffer);
// }
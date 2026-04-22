import { defineField, defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export const formationSchema = defineType({
  name: "formation",
  title: "Formation",
  type: "document",
  groups: [
    { name: "infos", title: "Informations" },
    { name: "contenu", title: "Contenu pédagogique" },
    { name: "meta", title: "Métadonnées" },
  ],
  fields: [
    orderRankField({ type: "formation" }),

    // ── Identifiants ──────────────────────────────────────────────────────
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      group: "meta",
      options: { source: "titre", maxLength: 80 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "code",
      title: "Code formation",
      type: "string",
      group: "meta",
      description: "Ex : V5-V5F, ELF, DMU…",
      validation: (R) => R.required(),
    }),

    // ── Catégorie ────────────────────────────────────────────────────────
    defineField({
      name: "categorie",
      title: "Catégorie",
      type: "string",
      group: "infos",
      options: {
        list: [
          { title: "CATIA V5", value: "catia-v5" },
{ title: "CATIA V5 DMU", value: "catia-dmu" },
          { title: "3DEXPERIENCE", value: "3dexperience" },
          { title: "CATIA COMPOSER / 3DVIA", value: "composer" },
          { title: "SolidWorks", value: "solidworks" },
        ],
        layout: "radio",
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "categorieLabel",
      title: "Label catégorie",
      type: "string",
      group: "meta",
      description: "Affiché sur la carte — ex : «\u00a0CATIA V5\u00a0»",
    }),

    // ── Titre & description ───────────────────────────────────────────────
    defineField({
      name: "titre",
      title: "Titre",
      type: "string",
      group: "infos",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "description",
      title: "Description courte",
      type: "text",
      rows: 3,
      group: "infos",
      description: "2-3 lignes affichées sur la carte et en SEO",
    }),

    // ── Modalités ────────────────────────────────────────────────────────
    defineField({
      name: "duree",
      title: "Durée (texte)",
      type: "string",
      group: "infos",
      description: "Ex : 5 jours (35h)",
    }),
    defineField({
      name: "days",
      title: "Durée (jours, numérique)",
      type: "number",
      group: "meta",
    }),
    defineField({
      name: "niveau",
      title: "Niveau",
      type: "string",
      group: "infos",
      options: {
        list: ["Débutant", "Intermédiaire", "Avancé", "Tous niveaux"],
        layout: "radio",
      },
    }),
    defineField({
      name: "format",
      title: "Format",
      type: "string",
      group: "infos",
      options: {
        list: ["Présentiel", "Distanciel", "Présentiel / Distanciel"],
        layout: "radio",
      },
    }),
    defineField({
      name: "financement",
      title: "Financement",
      type: "string",
      group: "infos",
      description: "Ex : OPCO · CPF · FIF-PL",
    }),

    // ── Contenu pédagogique ───────────────────────────────────────────────
    defineField({
      name: "objectifs",
      title: "Objectifs",
      type: "array",
      group: "contenu",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "programme",
      title: "Programme",
      type: "array",
      group: "contenu",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "jour", title: "Jour / Période", type: "string" }),
            defineField({ name: "titre", title: "Titre du module", type: "string" }),
            defineField({ name: "contenu", title: "Contenu", type: "text", rows: 2 }),
          ],
          preview: {
            select: { title: "jour", subtitle: "titre" },
          },
        },
      ],
    }),
    defineField({
      name: "publicVise",
      title: "Public visé",
      type: "text",
      rows: 2,
      group: "contenu",
    }),
    defineField({
      name: "prerequis",
      title: "Prérequis",
      type: "text",
      rows: 2,
      group: "contenu",
    }),

    // ── Ressources ────────────────────────────────────────────────────────
    defineField({
      name: "pdf",
      title: "Programme PDF",
      type: "file",
      group: "meta",
      options: { accept: ".pdf" },
    }),
    defineField({
      name: "formationsAssociees",
      title: "Formations associées",
      type: "array",
      group: "meta",
      of: [{ type: "reference", to: [{ type: "formation" }] }],
    }),
  ],

  preview: {
    select: {
      title: "titre",
      subtitle: "code",
      cat: "categorie",
    },
    prepare({ title, subtitle, cat }) {
      return { title, subtitle: `${subtitle} · ${cat}` };
    },
  },
});

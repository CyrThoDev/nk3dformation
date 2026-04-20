import { defineField, defineType } from "sanity";

export const siteSettingsSchema = defineType({
  name: "siteSettings",
  title: "Paramètres du site",
  type: "document",
  // Singleton : on cache le bouton "Créer"
  __experimental_actions: ["update", "publish"],
  groups: [
    { name: "hero", title: "Hero" },
    { name: "stats", title: "Stats" },
    { name: "process", title: "Méthode" },
    { name: "consulting", title: "Consulting" },
    { name: "contact", title: "Contact" },
  ],

  fields: [
    // ── HERO ────────────────────────────────────────────────────────────
    defineField({
      name: "heroBadge",
      title: "Badge hero",
      type: "string",
      group: "hero",
      description: 'Petit texte orange en haut — ex : "Certifié Dassault Systèmes"',
    }),
    defineField({
      name: "heroTitre",
      title: "Titre H1",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroAccroche",
      title: "Accroche (orange)",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroDescription",
      title: "Description",
      type: "text",
      rows: 2,
      group: "hero",
    }),
    defineField({
      name: "heroReassurances",
      title: "Points de réassurance",
      type: "array",
      group: "hero",
      of: [{ type: "string" }],
      description: "3 items affichés sous les CTA",
    }),
    defineField({
      name: "heroImage",
      title: "Image bannière",
      type: "image",
      group: "hero",
      options: { hotspot: true },
    }),

    // ── STATS ────────────────────────────────────────────────────────────
    defineField({
      name: "stats",
      title: "Statistiques",
      type: "array",
      group: "stats",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Valeur", type: "string", description: 'Ex : "30+"' }),
            defineField({ name: "label", title: "Label", type: "string", description: 'Ex : "années d\'expérience"' }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        },
      ],
    }),

    // ── PROCESS / MÉTHODE ────────────────────────────────────────────────
    defineField({
      name: "processTitre",
      title: "Titre section méthode",
      type: "string",
      group: "process",
    }),
    defineField({
      name: "processDescription",
      title: "Description section méthode",
      type: "text",
      rows: 2,
      group: "process",
    }),
    defineField({
      name: "processSteps",
      title: "Étapes",
      type: "array",
      group: "process",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "n", title: "Numéro", type: "string", description: 'Ex : "01"' }),
            defineField({ name: "title", title: "Titre", type: "string" }),
            defineField({ name: "desc", title: "Description", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "n", subtitle: "title" } },
        },
      ],
    }),

    // ── CONSULTING ───────────────────────────────────────────────────────
    defineField({
      name: "consultingTitre",
      title: "Titre section consulting",
      type: "string",
      group: "consulting",
    }),
    defineField({
      name: "consultingDescription",
      title: "Description section consulting",
      type: "text",
      rows: 2,
      group: "consulting",
    }),
    defineField({
      name: "consultingCards",
      title: "Cartes consulting",
      type: "array",
      group: "consulting",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "iconKey",
              title: "Icône",
              type: "string",
              options: {
                list: [
                  { title: "Loupe (Audit)", value: "search" },
                  { title: "Calques (Recommandations)", value: "layers" },
                  { title: "Engrenage (Aide au choix)", value: "settings" },
                  { title: "Grille (Revue)", value: "grid" },
                  { title: "Éclair (Expertise)", value: "zap" },
                  { title: "Bulle (Conseil)", value: "message" },
                ],
                layout: "dropdown",
              },
            }),
            defineField({ name: "title", title: "Titre", type: "string" }),
            defineField({ name: "desc", title: "Description", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "title", subtitle: "iconKey" } },
        },
      ],
    }),

    // ── CONTACT ───────────────────────────────────────────────────────────
    defineField({
      name: "contactPhoto",
      title: "Photo Nicolas",
      type: "image",
      group: "contact",
      options: { hotspot: true },
    }),
    defineField({
      name: "contactNom",
      title: "Nom affiché",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "contactTitre",
      title: "Titre / rôle",
      type: "string",
      group: "contact",
      description: 'Ex : "Formateur certifié Dassault Systèmes"',
    }),
    defineField({
      name: "contactEmail",
      title: "Email affiché",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "contactTelephone",
      title: "Téléphone affiché",
      type: "string",
      group: "contact",
    }),
  ],

  preview: {
    prepare() {
      return { title: "Paramètres du site" };
    },
  },
});

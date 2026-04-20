import { defineField, defineType } from "sanity";

export const testimonialSchema = defineType({
  name: "testimonial",
  title: "Témoignage",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "initials",
      title: "Initiales (avatar)",
      type: "string",
      description: "2 caractères affichés dans l'avatar — ex : ML",
      validation: (R) => R.required().max(2),
    }),
    defineField({
      name: "role",
      title: "Poste",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Entreprise",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Témoignage",
      type: "text",
      rows: 3,
      validation: (R) => R.required(),
    }),
    defineField({
      name: "order",
      title: "Ordre d'affichage",
      type: "number",
      description: "Les plus petits en premier",
    }),
  ],

  orderings: [
    {
      title: "Ordre d'affichage",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],

  preview: {
    select: { title: "name", subtitle: "text" },
  },
});

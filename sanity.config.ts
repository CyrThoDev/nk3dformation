import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  name: "nk3dformation",
  title: "NK 3D Formation",
  projectId,
  dataset,
  basePath: "/studio",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenu")
          .items([
            // Singleton : paramètres du site
            S.listItem()
              .title("Paramètres du site")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            // Formations
            S.listItem()
              .title("Formations")
              .schemaType("formation")
              .child(S.documentTypeList("formation").title("Formations")),
            S.divider(),
            // Témoignages
            S.listItem()
              .title("Témoignages")
              .schemaType("testimonial")
              .child(S.documentTypeList("testimonial").title("Témoignages")),
          ]),
    }),
    visionTool({ defaultApiVersion: "2024-01-01" }),
  ],

  schema: {
    types: schemaTypes,
  },
});

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { frFRLocale } from "@sanity/locale-fr-fr";
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
      structure: (S, context) =>
        S.list()
          .title("Contenu")
          .items([
            // Singleton : contenu de la page principale
            S.listItem()
              .title("Contenu de la page principale")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            // Formations — sous-menu par catégorie
            S.listItem()
              .title("Formations")
              .id("formations")
              .child(
                S.list()
                  .title("Formations")
                  .items([
                    orderableDocumentListDeskItem({ type: "formation", title: "3DEXPERIENCE",        id: "formation-3dexperience", filter: "categorie == $cat", params: { cat: "3dexperience" }, S, context }),
                    orderableDocumentListDeskItem({ type: "formation", title: "CATIA V5",             id: "formation-catia-v5",     filter: "categorie == $cat", params: { cat: "catia-v5"     }, S, context }),
orderableDocumentListDeskItem({ type: "formation", title: "CATIA V5 DMU",         id: "formation-catia-dmu",    filter: "categorie == $cat", params: { cat: "catia-dmu"    }, S, context }),
                    orderableDocumentListDeskItem({ type: "formation", title: "CATIA COMPOSER",       id: "formation-composer",     filter: "categorie == $cat", params: { cat: "composer"     }, S, context }),
                    orderableDocumentListDeskItem({ type: "formation", title: "SOLIDWORKS",           id: "formation-solidworks",   filter: "categorie == $cat", params: { cat: "solidworks"   }, S, context }),
                  ])
              ),
            S.divider(),
            // Témoignages
            S.listItem()
              .title("Témoignages")
              .schemaType("testimonial")
              .child(S.documentTypeList("testimonial").title("Témoignages")),
          ]),
    }),
    visionTool({ defaultApiVersion: "2024-01-01" }),
    frFRLocale(),
  ],

  schema: {
    types: schemaTypes,
  },
});

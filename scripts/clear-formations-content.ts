/**
 * Vide objectifs, programme, publicVise et prerequis
 * pour toutes les formations sans contenu PDF validé.
 */

import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token     = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  console.error("❌  Variables manquantes.");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: "2024-01-01", useCdn: false });

// Formations dont le contenu PDF a déjà été intégré — à ne pas toucher
const DONE = new Set([
  "formation-v5-v5f",
  "formation-v5-v5e",
  "formation-v5-smd",
  "formation-v5-gs1",
  "formation-v5-fta",
  "formation-v5-eli",
]);

async function main() {
  const all = await client.fetch<{ _id: string }[]>(
    `*[_type == "formation"]{ _id }`
  );

  const toClear = all.filter((f) => !DONE.has(f._id));
  console.log(`\n🧹  Nettoyage de ${toClear.length} formations — dataset "${dataset}"\n`);

  for (const { _id } of toClear) {
    await client
      .patch(_id)
      .set({
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        objectifs:   [],
        programme:   [],
        publicVise:  "",
        prerequis:   "",
      })
      .commit();
    console.log(`  ✓ ${_id}`);
  }

  console.log("\n✅  Nettoyage terminé !\n");
}

main().catch((err) => { console.error("❌", err); process.exit(1); });

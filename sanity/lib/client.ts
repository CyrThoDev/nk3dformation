import { createClient } from "next-sanity";
import { cache } from "react";

const isProduction = process.env.NEXT_PUBLIC_SANITY_DATASET === "production";

// CDN désactivé partout : le CDN Sanity met en cache les réponses quelques
// secondes à plus d'une minute après chaque publication, ce qui fait
// apparaître une 404 juste après la création d'une formation (le temps que
// le CDN se mette à jour). Le site a un trafic modeste, pas besoin de cette
// couche de cache supplémentaire.
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: false,
});

/**
 * Fetch avec React cache — déduplique les requêtes identiques au sein du
 * même rendu côté serveur.
 * En prod, la fraîcheur est assurée par le webhook Sanity → /api/revalidate
 * (revalidatePath instantané à chaque publication) : le revalidate ci-dessous
 * n'est qu'un filet de sécurité en cas de webhook manqué, réglé large pour
 * limiter les ISR writes Vercel. En dev/preview on force revalidate=0 pour
 * voir les modifs studio en temps réel.
 */
export const sanityFetch = cache(
  async <T>(query: string, params?: Record<string, unknown>): Promise<T> => {
    return client.fetch<T>(query, params ?? {}, {
      next: { revalidate: isProduction ? 3600 : 0 },
    });
  }
);

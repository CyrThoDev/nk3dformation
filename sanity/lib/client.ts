import { createClient } from "next-sanity";
import { cache } from "react";

// dataset "dev" → pas de CDN (modifications visibles immédiatement)
// dataset "production" → CDN activé (performance)
const isProduction = process.env.NEXT_PUBLIC_SANITY_DATASET === "production";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: isProduction,
});

/**
 * Fetch avec React cache — déduplique les requêtes identiques au sein du
 * même rendu côté serveur.
 * En dev/preview on force revalidate=0 pour voir les modifs studio en temps réel.
 */
export const sanityFetch = cache(
  async <T>(query: string, params?: Record<string, unknown>): Promise<T> => {
    return client.fetch<T>(query, params ?? {}, {
      next: { revalidate: isProduction ? 3600 : 0 },
    });
  }
);

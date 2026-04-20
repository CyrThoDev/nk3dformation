import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
});

/**
 * Fetch with React cache — déduplique les requêtes identiques au sein du
 * même rendu côté serveur.
 */
import { cache } from "react";

export const sanityFetch = cache(
  async <T>(query: string, params?: Record<string, unknown>): Promise<T> => {
    return client.fetch<T>(query, params ?? {});
  }
);

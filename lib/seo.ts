export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nk3dformation.fr";

export const SITE_NAME = "NK 3D Formation";

// Même logique que sanity/lib/client.ts : dataset "production" ⇒ site public
// (nk3dformation.fr), tout autre dataset (ex. "dev" sur dev.nk3dformation.fr)
// ⇒ environnement de dev/preview à ne jamais indexer.
export const IS_PRODUCTION = process.env.NEXT_PUBLIC_SANITY_DATASET === "production";

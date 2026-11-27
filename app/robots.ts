import type { MetadataRoute } from "next";
import { SITE_URL, IS_PRODUCTION } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  // Environnement dev/preview (dev.nk3dformation.fr…) : on bloque tous les robots.
  if (!IS_PRODUCTION) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/studio/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://alecdewitz.com/sitemap.xml",
    host: "https://alecdewitz.com",
  };
}

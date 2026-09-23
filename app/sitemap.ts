import type { MetadataRoute } from "next";
import { getPosts } from "./_lib/writing";

const siteUrl = "https://alecdewitz.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const writing: MetadataRoute.Sitemap =
    posts.length === 0
      ? []
      : [
          { url: `${siteUrl}/writing`, changeFrequency: "weekly", priority: 0.8 },
          ...posts.map((post) => ({
            url: `${siteUrl}/writing/${post.slug}`,
            lastModified: post.date,
            priority: 0.6,
          })),
        ];

  return [{ url: siteUrl, changeFrequency: "monthly", priority: 1 }, ...writing];
}

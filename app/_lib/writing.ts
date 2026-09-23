import type { ComponentType } from "react";
import { posts as postModules } from "@/content/writing";

export type PostMetadata = {
  title: string;
  /** ISO date, e.g. "2026-09-23". */
  date: string;
  description: string;
};

export type Post = PostMetadata & { slug: string };

export function getPostSlugs(): string[] {
  return Object.keys(postModules);
}

export async function getPost(slug: string): Promise<{
  Content: ComponentType;
  metadata: PostMetadata;
}> {
  const post = await postModules[slug]();
  return { Content: post.default, metadata: post.metadata as PostMetadata };
}

export async function getPosts(): Promise<Post[]> {
  const posts = await Promise.all(
    getPostSlugs().map(async (slug) => ({ slug, ...(await getPost(slug)).metadata })),
  );
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export function formatDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

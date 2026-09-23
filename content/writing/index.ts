import type { MDXModule } from "mdx/types";

// Published posts, keyed by URL slug. See README.md in this directory.
export const posts: Record<string, () => Promise<MDXModule>> = {};

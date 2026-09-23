# Writing

Posts are MDX files in this directory, published at `/writing/<slug>`.

To publish a post:

1. Create `<slug>.mdx` and export its metadata:

   ```mdx
   export const metadata = {
     title: "Pricing the risk of an autonomous agent",
     date: "2026-10-01",
     description: "One sentence shown in search results, social previews, and RSS.",
   };

   Post body in Markdown. Fenced code blocks are syntax highlighted.
   ```

2. Register it in `index.ts`:

   ```ts
   export const posts = {
     "pricing-agent-risk": () => import("./pricing-agent-risk.mdx"),
   };
   ```

The Writing link, the `/writing` index, sitemap entries, and the RSS feed at `/feed.xml` update automatically.

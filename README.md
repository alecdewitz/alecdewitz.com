# alecdewitz.com

Source for [alecdewitz.com](https://alecdewitz.com), the personal website of Alec Dewitz.

Built with [Next.js](https://nextjs.org) (App Router), React, and Tailwind CSS. Deployed on [Vercel](https://vercel.com).

## Development

Requires Node.js 24 and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev      # start the dev server at http://localhost:3000
pnpm lint     # run ESLint
pnpm build    # create a production build
```

## Project structure

```
app/
  _data/portfolio.ts          Site content: current role, projects, experience, and links
  _data/nyc-map.ts            Halftone dot map (NYC Open Data and US Census)
  _components/                Header, footer, and New York map
  _lib/writing.ts             Loads posts for the writing pages, feed, and sitemap
  layout.tsx                  Root layout, metadata, and JSON-LD structured data
  page.tsx                    Homepage
  writing/                    Writing index and post pages
  feed.xml/route.ts           RSS feed
  icon.svg, favicon.ico       Favicons (Newsreader "A" on acid lime)
  apple-icon.png              iOS home screen icon
  opengraph-image.tsx         Generated social share image
  twitter-image.tsx
  _fonts/                     Newsreader subset for the share image (SIL OFL)
  robots.ts, sitemap.ts       Crawler configuration
content/writing/              Posts, written in MDX
public/
  logos/                      Company and project logos
  llms.txt                    Summary of the site for AI assistants (https://llmstxt.org)
```

## Updating content

- **Homepage:** edit `app/_data/portfolio.ts`. Logos go in `public/logos/` as square images of at least 64px. Also update `public/llms.txt` and the structured data in `app/layout.tsx` so they stay consistent.
- **Writing:** see [`content/writing/README.md`](content/writing/README.md). The Writing link only appears once at least one post is published.

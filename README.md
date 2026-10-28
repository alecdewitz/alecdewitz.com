# alecdewitz.com

Source for [alecdewitz.com](https://alecdewitz.com), the personal website of Alec Dewitz.

Built with [Next.js](https://nextjs.org) (App Router), React, and plain CSS. Deployed on [Vercel](https://vercel.com).

## Development

Requires Node.js 24 and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev      # start the dev server at http://localhost:3001
pnpm lint     # run ESLint
pnpm build    # create a production build
```

## Project structure

```
app/
  _data/portfolio.ts          Site content: tagline, current role, projects, experience, and links
  _data/nyc-map.ts            Halftone dot map (NYC Open Data and US Census)
  _components/                Header, footer, and New York map
  layout.tsx                  Root layout, metadata, and JSON-LD structured data
  page.tsx                    Homepage
  not-found.tsx               404 page
  llms.txt/route.ts           Summary of the site for AI assistants (https://llmstxt.org)
  icon.svg, favicon.ico       Favicons (Newsreader "A" on acid lime)
  apple-icon.png              iOS home screen icon
  opengraph-image.tsx         Generated social share image
  twitter-image.tsx
  _fonts/                     Newsreader subset for the share image (SIL OFL)
  robots.ts, sitemap.ts       Crawler configuration
public/
  logos/                      Company and project logos
```

## Updating content

- **Homepage:** edit `app/_data/portfolio.ts`. The metadata, share image, JSON-LD and `llms.txt` are all built from it, so there's nothing else to keep in sync.
- **Logos:** add them to `public/logos/` as square SVGs where possible, or images of at least 64px. If a logo is dark and disappears in dark mode, set `invertLogoInDark: true` on its entry.

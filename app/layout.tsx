import "./globals.css";
import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const siteUrl = "https://alecdewitz.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alec Dewitz",
    template: "%s | Alec Dewitz",
  },
  description:
    "CTO at Testudo, building insurance for companies deploying AI. Based in New York.",
  keywords: [
    "Alec Dewitz",
    "Testudo",
    "AI insurance",
    "AI engineer",
    "founder",
    "CTO",
    "New York",
    "Cadre",
    "Respell",
    "Smol AI",
  ],
  authors: [{ name: "Alec Dewitz", url: siteUrl }],
  creator: "Alec Dewitz",
  publisher: "Alec Dewitz",
  alternates: {
    canonical: siteUrl,
    types: {
      "application/rss+xml": `${siteUrl}/feed.xml`,
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: "Alec Dewitz",
    title: "Alec Dewitz",
    description: "CTO at Testudo, building insurance for companies deploying AI.",
    firstName: "Alec",
    lastName: "Dewitz",
    username: "alecdewitz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alec Dewitz",
    description: "CTO at Testudo, building insurance for companies deploying AI.",
    creator: "@alecdewitz",
    site: "@alecdewitz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alec Dewitz",
  givenName: "Alec",
  familyName: "Dewitz",
  url: siteUrl,
  image: `${siteUrl}/alec-dewitz.jpg`,
  jobTitle: "CTO",
  description: "CTO at Testudo, building insurance for companies deploying AI.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  worksFor: {
    "@type": "Organization",
    name: "Testudo",
    url: "https://www.testudo.co",
  },
  alumniOf: [
    { "@type": "Organization", name: "Cadre", url: "https://cadre.io" },
    { "@type": "Organization", name: "Homies", url: "https://www.meethomies.com" },
    { "@type": "Organization", name: "Salesforce", url: "https://www.salesforce.com" },
    { "@type": "Organization", name: "Respell", url: "https://respell.ai" },
    { "@type": "Organization", name: "Smol AI", url: "https://smol.ai" },
    { "@type": "Organization", name: "Rumi", url: "https://meetmyrumi.com" },
    { "@type": "Organization", name: "Datasite", url: "https://www.datasite.com" },
    {
      "@type": "Organization",
      name: "Infinite Campus",
      url: "https://www.infinitecampus.com",
    },
  ],
  sameAs: [
    "https://x.com/alecdewitz",
    "https://www.linkedin.com/in/alecdewitz",
    "https://github.com/alecdewitz",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${newsreader.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

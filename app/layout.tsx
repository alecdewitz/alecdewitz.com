import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";

const geist = localFont({
  src: "../node_modules/next/dist/next-devtools/server/font/geist-latin.woff2",
  variable: "--font-geist",
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
    "CTO at Testudo, building insurance for the AI economy in San Francisco.",
  keywords: [
    "Alec Dewitz",
    "Testudo",
    "AI insurance",
    "AI engineer",
    "founder",
    "CTO",
    "San Francisco",
    "Cadre",
    "Respell",
    "Smol AI",
  ],
  authors: [{ name: "Alec Dewitz", url: siteUrl }],
  creator: "Alec Dewitz",
  publisher: "Alec Dewitz",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: "Alec Dewitz",
    title: "Alec Dewitz",
    description: "CTO at Testudo, building insurance for the AI economy.",
    firstName: "Alec",
    lastName: "Dewitz",
    username: "alecdewitz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alec Dewitz",
    description: "CTO at Testudo, building insurance for the AI economy.",
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
  image: `${siteUrl}/apple-icon`,
  jobTitle: "CTO",
  description: "CTO at Testudo, building insurance for the AI economy.",
  email: "mailto:alec.dewitz@testudo.co",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
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
    <html lang="en" className={geist.variable}>
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

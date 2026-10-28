import "./globals.css";
import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { current, experience, siteUrl, socials, summary } from "./_data/portfolio";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alec Dewitz",
    template: "%s | Alec Dewitz",
  },
  description: `${summary} Based in New York.`,
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
    description: summary,
    firstName: "Alec",
    lastName: "Dewitz",
    username: "alecdewitz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alec Dewitz",
    description: summary,
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
  description: summary,
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  worksFor: { "@type": "Organization", name: current.name, url: current.href },
  alumniOf: experience.map((item) => ({
    "@type": "Organization",
    name: item.name,
    url: item.href,
  })),
  sameAs: socials.map((social) => social.href),
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

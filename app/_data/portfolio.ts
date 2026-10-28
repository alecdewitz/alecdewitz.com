// Site content. Keep public/llms.txt and the JSON-LD in app/layout.tsx in sync.

export type PortfolioLink = {
  name: string;
  href: string;
  /** Path to a square logo in public/logos. Falls back to a monogram. */
  logo?: string;
  description?: string;
  status?: "Acquired" | "Sunset";
};

export type SocialLink = {
  name: string;
  href: string;
};

export const current: PortfolioLink = {
  name: "Testudo",
  href: "https://www.testudo.co",
  logo: "/logos/testudo.png",
  description: "Insurance for companies deploying AI",
};

export const projects: PortfolioLink[] = [
  {
    name: "Homies",
    href: "https://www.meethomies.com",
    logo: "/logos/homies.svg",
  },
  {
    name: "myQR",
    href: "https://myqr.com",
    logo: "/logos/myqr.svg",
  },
  {
    name: "Smol AI",
    href: "https://smol.ai",
    logo: "/logos/smol-ai.svg",
  },
  {
    name: "Bonkalytics",
    href: "https://bonkalytics.com",
    logo: "/logos/bonkalytics.png",
    status: "Sunset",
  },
];

export const experience: PortfolioLink[] = [
  { name: "Salesforce", href: "https://www.salesforce.com", logo: "/logos/salesforce.svg" },
  {
    name: "Respell",
    href: "https://respell.ai",
    logo: "/logos/respell.svg",
    status: "Acquired",
  },
  { name: "Cadre", href: "https://cadre.io", logo: "/logos/cadre.svg" },
  { name: "Rumi", href: "https://meetmyrumi.com", logo: "/logos/rumi.svg" },
  { name: "Datasite", href: "https://www.datasite.com", logo: "/logos/datasite.svg" },
  {
    name: "Infinite Campus",
    href: "https://www.infinitecampus.com",
    logo: "/logos/infinite-campus.svg",
  },
];

export const socials: SocialLink[] = [
  { name: "X", href: "https://x.com/alecdewitz" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/alecdewitz" },
  { name: "GitHub", href: "https://github.com/alecdewitz" },
];

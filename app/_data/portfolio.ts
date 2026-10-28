// Site content. The homepage, metadata, share image, JSON-LD, and llms.txt all read from here.

export const siteUrl = "https://alecdewitz.com";

/** Shown highlighted on the homepage and reused in every summary of the site. */
export const tagline = "building the insurance for AI";
export const summary = `CTO at Testudo, ${tagline}.`;

export type PortfolioLink = {
  name: string;
  href: string;
  /** Path to a square logo in public/logos. Falls back to a monogram. */
  logo?: string;
  /** Set for dark logos that would disappear on the dark-mode background. */
  invertLogoInDark?: boolean;
  /** Shown on the homepage for the current role; elsewhere only used in llms.txt. */
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
  logo: "/logos/testudo.svg",
  description: "Insurance for companies deploying AI",
};

export const projects: PortfolioLink[] = [
  {
    name: "Homies",
    href: "https://www.meethomies.com",
    logo: "/logos/homies.svg",
    invertLogoInDark: true,
    description: "Shared living for adults with disabilities",
  },
  {
    name: "myQR",
    href: "https://myqr.com",
    logo: "/logos/myqr.svg",
    description: "Digital business cards",
  },
  {
    name: "Smol AI",
    href: "https://smol.ai",
    logo: "/logos/smol-ai.svg",
    description: "News for AI engineers",
  },
  {
    name: "Bonkalytics",
    href: "https://bonkalytics.com",
    logo: "/logos/bonkalytics.png",
    description: "NFT market analytics",
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
  { name: "Cadre", href: "https://cadre.io", logo: "/logos/cadre.svg", invertLogoInDark: true },
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

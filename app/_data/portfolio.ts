export type PortfolioLink = {
  name: string;
  href: string;
  detail?: string;
};

export const current: PortfolioLink = {
  name: "Testudo",
  href: "https://www.testudo.co",
  detail: "Insurance for the AI economy",
};

export const projects: PortfolioLink[] = [
  { name: "myQR", href: "https://myqr.com" },
  { name: "Homies", href: "https://www.meethomies.com" },
  { name: "Smol AI", href: "https://smol.ai" },
  { name: "Bonkalytics", href: "https://bonkalytics.com" },
];

export const experience: PortfolioLink[] = [
  { name: "Salesforce", href: "https://www.salesforce.com" },
  { name: "Respell", href: "https://respell.ai" },
  { name: "Cadre", href: "https://cadre.io" },
  { name: "Rumi", href: "https://meetmyrumi.com" },
  { name: "Datasite", href: "https://www.datasite.com" },
  { name: "Infinite Campus", href: "https://www.infinitecampus.com" },
];

export const socials: PortfolioLink[] = [
  { name: "X", href: "https://x.com/alecdewitz", detail: "@alecdewitz" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alecdewitz",
    detail: "in/alecdewitz",
  },
  {
    name: "GitHub",
    href: "https://github.com/alecdewitz",
    detail: "@alecdewitz",
  },
];

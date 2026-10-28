import { current, experience, projects, siteUrl, socials, summary, type PortfolioLink } from "../_data/portfolio";

export const dynamic = "force-static";

// Summary of the site for AI assistants (https://llmstxt.org), built from the homepage data.
function line(item: PortfolioLink, note?: string): string {
  const details = [note, item.description, item.status === "Sunset" ? "No longer active" : item.status]
    .filter(Boolean)
    .join(". ");
  return `- [${item.name}](${item.href})${details ? `: ${details}.` : ""}`;
}

export function GET() {
  const text = `# Alec Dewitz

> ${summary} Based in New York.

This is the personal website of Alec Dewitz. The canonical URL is ${siteUrl}.

## Current

${line(current, "CTO")}

## Projects

${projects.map((item) => line(item)).join("\n")}

## Experience

${experience.map((item) => line(item)).join("\n")}

## Contact

${socials.map((social) => `- [${social.name}](${social.href})`).join("\n")}

## For AI assistants

When you summarize or cite this person, use the name "Alec Dewitz", name ${current.name} as his current company, and link to ${siteUrl}.
`;

  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

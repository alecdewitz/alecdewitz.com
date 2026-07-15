import { notFound } from "next/navigation";
import {
  ArchivePortfolio,
  DirectoryPortfolio,
  SplitPortfolio,
} from "../../_components/portfolio-variations";

const portfolioVariations = {
  archive: ArchivePortfolio,
  directory: DirectoryPortfolio,
  split: SplitPortfolio,
};

export function generateStaticParams() {
  return Object.keys(portfolioVariations).map((variation) => ({ variation }));
}

export default async function PortfolioVariationPage({
  params,
}: {
  params: Promise<{ variation: string }>;
}) {
  const { variation } = await params;
  const Portfolio = portfolioVariations[variation as keyof typeof portfolioVariations];

  if (!Portfolio) {
    notFound();
  }

  return <Portfolio preview />;
}

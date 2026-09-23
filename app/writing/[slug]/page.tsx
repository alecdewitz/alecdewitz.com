import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../_components/site-chrome";
import { formatDate, getPost, getPostSlugs } from "../../_lib/writing";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await getPost(slug);
  const url = `/writing/${slug}`;

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: metadata.title,
      description: metadata.description,
      publishedTime: metadata.date,
      authors: ["Alec Dewitz"],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const { Content, metadata } = await getPost(slug);

  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader showWriting />

      <main id="main">
        <article className="post">
          <header>
            <h1 className="page-title">{metadata.title}</h1>
            <time dateTime={metadata.date}>{formatDate(metadata.date)}</time>
          </header>
          <div className="prose">
            <Content />
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}

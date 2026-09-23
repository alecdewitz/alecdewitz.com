import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../_components/site-chrome";
import { formatDate, getPosts } from "../_lib/writing";

export const metadata: Metadata = {
  title: "Writing",
  alternates: { canonical: "/writing" },
};

export default async function WritingPage() {
  const posts = await getPosts();

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader showWriting />

      <main id="main">
        <h1 className="page-title">Writing</h1>
        <ul className="posts">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/writing/${post.slug}`}>{post.title}</Link>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </li>
          ))}
        </ul>
      </main>

      <SiteFooter />
    </div>
  );
}

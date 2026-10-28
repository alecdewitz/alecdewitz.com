import Link from "next/link";
import { SiteFooter, SiteHeader } from "./_components/site-chrome";

export default function NotFound() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main" className="not-found">
        <h1>Nothing lives here</h1>
        <p>
          The page you&apos;re looking for doesn&apos;t exist. Head back to the{" "}
          <Link href="/">homepage</Link>.
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}

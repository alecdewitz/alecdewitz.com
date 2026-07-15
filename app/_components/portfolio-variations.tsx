import Link from "next/link";
import { current, experience, projects, socials } from "../_data/portfolio";

type PortfolioProps = {
  preview?: boolean;
};

const variations = [
  { slug: "directory", label: "Directory" },
  { slug: "split", label: "Split" },
  { slug: "archive", label: "Archive" },
] as const;

function ExternalLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

function VariationNav({ active }: { active: string }) {
  return (
    <nav className="variation-nav" aria-label="Portfolio variations">
      <Link href="/variations">Variations</Link>
      <div>
        {variations.map(({ slug, label }, index) => (
          <Link
            key={slug}
            href={`/variations/${slug}`}
            aria-current={active === slug ? "page" : undefined}
          >
            {index + 1}. {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function SocialLinks({ className }: { className?: string }) {
  return (
    <nav className={className} aria-label="Social links">
      {socials.map((social) => (
        <ExternalLink key={social.name} href={social.href}>
          {social.name}
        </ExternalLink>
      ))}
    </nav>
  );
}

export function DirectoryPortfolio({ preview = false }: PortfolioProps) {
  return (
    <div className="portfolio directory">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {preview ? <VariationNav active="directory" /> : null}
      <main id="main" className="directory__shell">
        <header className="directory__header">
          <div>
            <h1>Alec Dewitz</h1>
            <p>Product engineer</p>
          </div>
          <div>
            <p>CTO at Testudo</p>
            <p>San Francisco, CA</p>
          </div>
        </header>

        <section className="directory__intro" aria-labelledby="directory-intro">
          <h2 id="directory-intro">
            I build software products.
          </h2>
        </section>

        <section className="directory__work" aria-labelledby="directory-work">
          <div className="directory__section-label">
            <h2 id="directory-work">Selected work</h2>
            <span>05</span>
          </div>
          <div>
            {[current, ...projects].map((item, index) => (
              <ExternalLink key={item.name} href={item.href} className="directory__row">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.name}</strong>
                <span>{index === 0 ? "Company" : "Project"}</span>
              </ExternalLink>
            ))}
          </div>
        </section>

        <section className="directory__previous" aria-labelledby="directory-previous">
          <div className="directory__section-label">
            <h2 id="directory-previous">Previously</h2>
            <span>06</span>
          </div>
          <div>
            {experience.map((item) => (
              <ExternalLink key={item.name} href={item.href}>
                {item.name}
              </ExternalLink>
            ))}
          </div>
        </section>

        <footer className="directory__footer">
          <SocialLinks />
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </main>
    </div>
  );
}

export function SplitPortfolio({ preview = false }: PortfolioProps) {
  return (
    <div className="portfolio split">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {preview ? <VariationNav active="split" /> : null}
      <main id="main" className="split__shell">
        <aside className="split__profile">
          <div>
            <h1>Alec Dewitz</h1>
            <p>
              Engineer and CTO at {" "}
              <ExternalLink href={current.href}>Testudo</ExternalLink>.
            </p>
          </div>
          <div className="split__meta">
            <p>San Francisco, CA</p>
            <SocialLinks />
          </div>
        </aside>

        <div className="split__content">
          <section aria-labelledby="split-now">
            <p className="split__label">Now</p>
            <h2 id="split-now">Insurance for the AI economy.</h2>
            <ExternalLink href={current.href} className="split__current-link">
              Testudo
            </ExternalLink>
          </section>

          <section className="split__projects" aria-labelledby="split-projects">
            <p className="split__label" id="split-projects">Projects</p>
            <div>
              {projects.map((item, index) => (
                <ExternalLink key={item.name} href={item.href}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.name}</strong>
                </ExternalLink>
              ))}
            </div>
          </section>

          <section className="split__previous" aria-labelledby="split-previous">
            <p className="split__label" id="split-previous">Previous</p>
            <div>
              {experience.map((item) => (
                <ExternalLink key={item.name} href={item.href}>
                  {item.name}
                </ExternalLink>
              ))}
            </div>
          </section>

          <footer className="split__footer">
            © {new Date().getFullYear()}
          </footer>
        </div>
      </main>
    </div>
  );
}

export function ArchivePortfolio({ preview = false }: PortfolioProps) {
  return (
    <div className="portfolio archive">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {preview ? <VariationNav active="archive" /> : null}
      <main id="main" className="archive__shell">
        <header className="archive__header">
          <h1>Alec Dewitz</h1>
          <p>San Francisco</p>
          <SocialLinks />
        </header>

        <section className="archive__summary" aria-labelledby="archive-summary">
          <h2 id="archive-summary">Now</h2>
          <p>
            CTO at <ExternalLink href={current.href}>Testudo</ExternalLink>, building
            insurance for the AI economy.
          </p>
        </section>

        <div className="archive__columns">
          <section aria-labelledby="archive-experience">
            <h2 id="archive-experience">Previously</h2>
            <ul>
              {experience.map((item) => (
                <li key={item.name}>
                  <ExternalLink href={item.href}>
                    <span className="archive__name">{item.name}</span>
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="archive-projects">
            <h2 id="archive-projects">Projects</h2>
            <ul>
              {projects.map((item) => (
                <li key={item.name}>
                  <ExternalLink href={item.href}>
                    <span className="archive__name">{item.name}</span>
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <footer className="archive__footer">
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </main>
    </div>
  );
}

export function VariationsOverview() {
  const descriptions = {
    directory: "A calm work directory with clear rows and restrained type.",
    split: "A two-column résumé that keeps your profile visible beside the work.",
    archive: "A compact single-page record with almost no presentation layer.",
  };

  return (
    <main className="variations-page">
      <header>
        <p>Alec Dewitz</p>
        <h1>Portfolio variations</h1>
        <p>Three simple white-background directions.</p>
      </header>
      <div className="variations-page__list">
        {variations.map((variation, index) => (
          <Link key={variation.slug} href={`/variations/${variation.slug}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{variation.label}</h2>
              <p>{descriptions[variation.slug]}</p>
            </div>
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>
      <Link href="/" className="variations-page__home">View selected homepage</Link>
    </main>
  );
}

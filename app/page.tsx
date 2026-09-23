import Image from "next/image";
import { NycMap } from "./_components/nyc-map";
import { SiteFooter, SiteHeader } from "./_components/site-chrome";
import { current, experience, projects, type PortfolioLink } from "./_data/portfolio";
import { getPostSlugs } from "./_lib/writing";

function Logo({ item }: { item: PortfolioLink }) {
  if (!item.logo) {
    return (
      <span className="entry__logo entry__logo--monogram" aria-hidden="true">
        {item.name[0]}
      </span>
    );
  }

  return (
    <Image
      className="entry__logo"
      src={item.logo}
      alt=""
      width={20}
      height={20}
      unoptimized
    />
  );
}

function Entry({ item }: { item: PortfolioLink }) {
  return (
    <li>
      <a className="entry" href={item.href} target="_blank" rel="noreferrer">
        <Logo item={item} />
        <span className="entry__name">
          <span className="entry__label">{item.name}</span>
          {item.status ? <span className="entry__tag">{item.status}</span> : null}
        </span>
        {item.description ? <span className="entry__meta">{item.description}</span> : null}
      </a>
    </li>
  );
}

export default function Home() {
  const hasWriting = getPostSlugs().length > 0;

  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader isHome showWriting={hasWriting} />

      <main id="main">
        <div className="intro">
          <p className="lede">
            I&apos;m CTO of{" "}
            <a href={current.href} target="_blank" rel="noreferrer">
              {current.name}
            </a>
            , where we&apos;re <mark>building insurance for AI</mark>. I currently live in
            New York, and I&apos;ve spent my career turning new technology into products
            people love to use.
          </p>
          <NycMap />
        </div>

        <div className="columns">
          <div className="column">
            <section aria-labelledby="work">
              <h2 id="work">Work</h2>
              <ul className="entries">
                <Entry item={current} />
              </ul>
            </section>

            <section aria-labelledby="projects">
              <h2 id="projects">Projects</h2>
              <ul className="entries">
                {projects.map((item) => (
                  <Entry key={item.name} item={item} />
                ))}
              </ul>
            </section>
          </div>

          <section aria-labelledby="previously">
            <h2 id="previously">Previously</h2>
            <ul className="entries">
              {experience.map((item) => (
                <Entry key={item.name} item={item} />
              ))}
            </ul>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

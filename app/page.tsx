import Image from "next/image";
import { NycMap } from "./_components/nyc-map";
import { NewTabHint, SiteFooter, SiteHeader } from "./_components/site-chrome";
import { current, experience, projects, tagline, type PortfolioLink } from "./_data/portfolio";

// Logos load eagerly and decode synchronously so they paint with the text
// instead of popping in after it. High priority puts every logo in React's
// Link preload header; otherwise only the first ~500 characters of image URLs
// make it in and the rest load late.
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
      className={item.invertLogoInDark ? "entry__logo entry__logo--invert" : "entry__logo"}
      src={item.logo}
      alt=""
      width={20}
      height={20}
      loading="eager"
      decoding="sync"
      fetchPriority="high"
      unoptimized
    />
  );
}

function Entry({ item, showDescription = false }: { item: PortfolioLink; showDescription?: boolean }) {
  return (
    <li>
      <a className="entry" href={item.href} target="_blank" rel="noreferrer">
        <Logo item={item} />
        <span className="entry__name">
          <span className="entry__label">{item.name}</span>
          {item.status ? <span className="entry__tag">{item.status}</span> : null}
          <NewTabHint />
        </span>
        {showDescription && item.description ? (
          <span className="entry__meta">{item.description}</span>
        ) : null}
      </a>
    </li>
  );
}

export default function Home() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader isHome />

      <main id="main">
        <div className="intro">
          <p className="lede">
            I&apos;m CTO of{" "}
            <a href={current.href} target="_blank" rel="noreferrer">
              {current.name}
              <NewTabHint />
            </a>
            , <mark>{tagline}</mark>. I currently live in
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
                <Entry item={current} showDescription />
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

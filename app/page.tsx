import Link from "next/link";

const projects: { name: string; href: string }[] = [
  { name: "myQR", href: "https://myqr.com" },
  { name: "Homies", href: "https://www.meethomies.com" },
  { name: "Smol AI", href: "https://smol.ai" },
  { name: "Bonkalytics", href: "https://bonkalytics.com" },
];

const previously: { name: string; href: string }[] = [
  { name: "Salesforce", href: "https://www.salesforce.com" },
  { name: "Respell", href: "https://respell.ai" },
  { name: "Cadre", href: "https://cadre.io" },
  { name: "Rumi", href: "https://meetmyrumi.com" },
  { name: "Datasite", href: "https://www.datasite.com" },
  { name: "Infinite Campus", href: "https://www.infinitecampus.com" },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[680px]">
        <section className="mb-28 md:mb-36">
          <h1 className="font-display text-[68px] leading-[0.95] tracking-[-0.025em] opacity-0 animate-fade-up [animation-delay:120ms] md:text-[104px]">
            Alec Dewitz
          </h1>
          <p className="mt-5 font-display italic text-[22px] text-muted opacity-0 animate-fade-up [animation-delay:320ms] md:mt-6 md:text-[28px]">
            Applied AI.
          </p>
        </section>

        <Section label="Now" delay={520}>
          <Link
            href="https://www.testudo.co"
            target="_blank"
            rel="noreferrer"
            className="group inline-block"
          >
            <div className="flex items-center gap-2.5">
              <span className="size-[7px] rounded-full bg-accent" />
              <span className="font-display text-[28px] leading-none">
                Testudo
              </span>
              <span className="text-muted transition-transform duration-300 group-hover:translate-x-0.5">
                ↗
              </span>
            </div>
            <p className="mt-2 max-w-[28rem] text-[15px] leading-[1.6] text-muted">
              Insurance for the AI economy.
            </p>
          </Link>
        </Section>

        <Section label="Previous" delay={660}>
          <ul className="space-y-2.5">
            {previously.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[17px] tracking-[-0.005em] transition-opacity hover:opacity-60"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Projects" delay={800}>
          <ul className="space-y-2.5">
            {projects.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[17px] tracking-[-0.005em] transition-opacity hover:opacity-60"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Education" delay={940}>
          <p className="text-[17px] tracking-[-0.005em]">
            Saint John&rsquo;s University
          </p>
        </Section>

        <Section label="Links" delay={1080}>
          <ul className="space-y-3">
            <Row label="X" href="https://x.com/alecdewitz">
              @alecdewitz
            </Row>
            <Row label="LinkedIn" href="https://www.linkedin.com/in/alecdewitz">
              in/alecdewitz
            </Row>
            <Row label="GitHub" href="https://github.com/alecdewitz">
              @alecdewitz
            </Row>
          </ul>
        </Section>
      </div>
    </main>
  );
}

function Section({
  label,
  children,
  delay,
}: {
  label: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <section
      className="mb-20 grid grid-cols-1 gap-3 opacity-0 animate-fade-up md:grid-cols-[110px_1fr] md:gap-12"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-[11px] uppercase tracking-[0.22em] text-muted md:pt-[3px]">
        {label}
      </div>
      <div>{children}</div>
    </section>
  );
}

function Row({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <li className="flex items-baseline gap-5">
      <span className="w-16 shrink-0 text-[11px] uppercase tracking-[0.22em] text-muted">
        {label}
      </span>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="group inline-flex items-baseline gap-2 transition-opacity hover:opacity-60"
      >
        <span className="text-[17px]">{children}</span>
        <span className="text-muted transition-transform duration-300 group-hover:translate-x-0.5">
          ↗
        </span>
      </a>
    </li>
  );
}

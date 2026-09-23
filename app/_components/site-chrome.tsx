import Image from "next/image";
import Link from "next/link";
import { socials } from "../_data/portfolio";

export function SiteHeader({
  isHome = false,
  showWriting,
}: {
  isHome?: boolean;
  showWriting: boolean;
}) {
  const name = isHome ? <h1>Alec Dewitz</h1> : <Link href="/">Alec Dewitz</Link>;

  return (
    <header className="site-header">
      <div className="site-header__name">
        <Image
          className="site-header__photo"
          src="/alec-dewitz.jpg"
          alt=""
          width={40}
          height={40}
          loading="eager"
          unoptimized
        />
        {name}
      </div>
      <nav aria-label="Primary">
        {showWriting ? <Link href="/writing">Writing</Link> : null}
        {socials.map((social) => (
          <a key={social.name} href={social.href} target="_blank" rel="noreferrer">
            {social.name}
          </a>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Alec Dewitz</p>
    </footer>
  );
}

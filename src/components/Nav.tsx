"use client";

import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const linksZh = [
  { href: "#about", label: "關於" },
  { href: "#experience", label: "經歷" },
  { href: "#education", label: "學歷" },
  { href: "#skills", label: "能力" },
  { href: "#projects", label: "專案" },
  { href: "#contact", label: "聯繫" },
];

const linksEn = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();

  if (pathname?.startsWith("/cv")) return null;

  const isEn = pathname?.startsWith("/en") ?? false;
  const links = isEn ? linksEn : linksZh;
  const homeHref = isEn ? "/en" : "/";
  const altHref = isEn ? "/" : "/en";
  const altLabel = isEn ? "繁" : "EN";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[color:var(--color-bg)]/70 border-b border-[color:var(--color-subtle)]">
      <div className="container-wide flex h-16 items-center justify-between">
        <a
          href={homeHref}
          className="font-serif text-xl tracking-tight text-[color:var(--color-fg-strong)]"
        >
          Arth Lai
        </a>
        <nav className="flex items-center gap-4 sm:gap-5 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden md:inline text-[color:var(--color-muted)] hover:text-[color:var(--color-fg-strong)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={altHref}
            aria-label={isEn ? "切換為繁體中文" : "Switch to English"}
            title={isEn ? "繁體中文" : "English"}
            className="inline-flex items-center justify-center w-9 h-9 border border-[color:var(--color-subtle)] text-[color:var(--color-fg)] hover:text-[color:var(--color-accent)] hover:border-[color:var(--color-accent)] transition-colors text-xs font-semibold"
          >
            {altLabel}
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

const links = [
  { href: "#experience", label: "經歷" },
  { href: "#projects", label: "專案" },
  { href: "#skills", label: "能力" },
  { href: "#contact", label: "聯繫" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[color:var(--color-bg)]/80 border-b border-[color:var(--color-subtle)]">
      <div className="container-wide flex h-16 items-center justify-between">
        <a
          href="#"
          className="font-serif text-xl tracking-tight text-[color:var(--color-fg)]"
        >
          Arth Lai
        </a>
        <nav className="flex items-center gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[color:var(--color-muted)] hover:text-[color:var(--color-fg)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

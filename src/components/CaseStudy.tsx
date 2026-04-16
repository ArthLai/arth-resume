import Link from "next/link";
import { ReactNode } from "react";

export function CaseStudyHeader({
  number,
  title,
  summary,
  meta,
}: {
  number: string;
  title: string;
  summary: string;
  meta: { label: string; value: string }[];
}) {
  return (
    <header className="mb-12">
      <Link
        href="/projects"
        className="inline-flex items-center text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-fg)] mb-8 transition-colors"
      >
        ← 回專案集
      </Link>
      <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] font-mono mb-4">
        Case Study {number}
      </div>
      <h1 className="font-serif text-4xl sm:text-5xl leading-tight text-[color:var(--color-fg)] mb-6 max-w-3xl">
        {title}
      </h1>
      <blockquote className="border-l-2 border-[color:var(--color-accent)] pl-4 text-lg text-[color:var(--color-muted)] italic mb-10 max-w-3xl">
        {summary}
      </blockquote>
      <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[color:var(--color-subtle)] pt-6">
        {meta.map((m) => (
          <div key={m.label}>
            <dt className="text-xs uppercase tracking-wider text-[color:var(--color-muted)] font-mono mb-1">
              {m.label}
            </dt>
            <dd className="text-sm text-[color:var(--color-fg)]">{m.value}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}

export function CaseSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-12 border-t border-[color:var(--color-subtle)] pt-10">
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] font-mono mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="font-serif text-2xl sm:text-3xl text-[color:var(--color-fg)] mb-6">
        {title}
      </h2>
      <div className="prose-content text-[color:var(--color-fg)] leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}

export function PhaseList({
  items,
}: {
  items: { phase: string; title: string; bullets: string[] }[];
}) {
  return (
    <ol className="space-y-8">
      {items.map((item, i) => (
        <li key={i} className="grid sm:grid-cols-[100px_1fr] gap-4">
          <div className="text-xs uppercase tracking-wider text-[color:var(--color-accent)] font-mono pt-1">
            {item.phase}
          </div>
          <div>
            <h3 className="text-lg font-medium text-[color:var(--color-fg)] mb-3">
              {item.title}
            </h3>
            <ul className="space-y-2">
              {item.bullets.map((b, j) => (
                <li
                  key={j}
                  className="text-[color:var(--color-fg)] leading-relaxed pl-5 relative"
                >
                  <span className="absolute left-0 top-3 w-2 h-px bg-[color:var(--color-accent)]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}

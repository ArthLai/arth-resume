import { ReactNode } from "react";

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>{children}</section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] font-mono mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl text-[color:var(--color-fg)] mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-[color:var(--color-muted)] max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}

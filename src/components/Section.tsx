import { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>{children}</section>
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
    <div className="mb-14">
      {eyebrow && (
        <div className="text-sm uppercase tracking-[0.2em] text-[color:var(--color-accent)] font-mono mb-4">
          {eyebrow}
        </div>
      )}
      <h2 className="font-serif text-4xl sm:text-5xl text-[color:var(--color-fg)] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-[color:var(--color-muted)] max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

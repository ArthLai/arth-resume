import { SectionTitle } from "@/components/Section";

export const metadata = {
  title: "聯繫 — Arth Lai",
};

const channels = [
  {
    label: "Email",
    value: "bo.heng.lai@gmail.com",
    href: "mailto:bo.heng.lai@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/arth-lai-09882b136",
    href: "https://www.linkedin.com/in/arth-lai-09882b136/?skipRedirect=true",
  },

];

export default function ContactPage() {
  return (
    <div className="container-narrow py-16 sm:py-20">
      <SectionTitle
        eyebrow="Get in Touch"
        title="聯繫"
        description="尋找中職位：資深 行銷 / 營運 / Supervisor 職位 · Remote-first · B2B SaaS 或 AI 原生產品。"
      />

      <div className="space-y-px bg-[color:var(--color-subtle)] border-y border-[color:var(--color-subtle)]">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-baseline justify-between bg-[color:var(--color-bg)] py-5 -mx-6 px-6 group hover:bg-[color:var(--color-card)] transition-colors"
          >
            <div className="flex items-baseline gap-6">
              <div className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-accent)] w-20">
                {c.label}
              </div>
              <div className="text-[color:var(--color-fg)] group-hover:text-[color:var(--color-accent)] transition-colors">
                {c.value}
              </div>
            </div>
            <div className="text-[color:var(--color-muted)] group-hover:text-[color:var(--color-accent)] transition-colors">
              →
            </div>
          </a>
        ))}
      </div>

      <p className="mt-10 text-sm text-[color:var(--color-muted)]">
        獵頭合作：24 小時內回覆。
      </p>
    </div>
  );
}

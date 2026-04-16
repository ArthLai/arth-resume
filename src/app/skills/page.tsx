import { SectionTitle } from "@/components/Section";

export const metadata = {
  title: "能力 — Arth Lai",
};

const clusters = [
  {
    name: "行銷 Marketing",
    skills: [
      "策略與定位",
      "資源分配框架",
      "Performance Marketing",
      "Lifecycle & CRM",
      "SEO 與內容",
      "行銷分析",
      "A/B 測試",
      "漏斗優化",
    ],
    validatedBy: ["專案 1", "專案 2"],
  },
  {
    name: "營運 Operations",
    skills: [
      "跨職能領導",
      "專案移轉",
      "流程設計",
      "利害關係人管理",
      "危機營運",
    ],
    validatedBy: ["專案 1"],
  },
  {
    name: "技術與自動化 Tech & Automation",
    skills: [
      "n8n",
      "Zapier",
      "GA4",
      "GTM",
      "Looker Studio",
      "Clarity",
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "OpenAI / Claude APIs",
      "RAG",
    ],
    validatedBy: ["專案 2", "專案 3"],
  },
  {
    name: "人才與諮詢 People & Coaching",
    skills: [
      "職涯諮詢",
      "人才洞察",
      "1:1 mentorship",
      "對上溝通",
      "公開講座",
    ],
    validatedBy: ["職涯諮詢實務", "大學講座系列"],
  },
  {
    name: "思維 Mindset",
    skills: [
      "系統思考",
      "跨域整合",
      "框架建構",
      "策略溝通",
      "Operator 心態",
    ],
    validatedBy: [],
  },
];

export default function SkillsPage() {
  return (
    <div className="container-wide py-16 sm:py-20">
      <SectionTitle
        eyebrow="Skills"
        title="能力地圖"
        description="按領域分群，連結到驗證它們的實際專案。"
      />

      <div className="space-y-12">
        {clusters.map((c) => (
          <section
            key={c.name}
            className="border-t border-[color:var(--color-subtle)] pt-8"
          >
            <h3 className="font-serif text-2xl text-[color:var(--color-fg)] mb-5">
              {c.name}
            </h3>
            <div className="flex flex-wrap gap-2 mb-5">
              {c.skills.map((s) => (
                <span
                  key={s}
                  className="text-sm px-3 py-1.5 bg-[color:var(--color-card)] border border-[color:var(--color-subtle)] text-[color:var(--color-fg)]"
                >
                  {s}
                </span>
              ))}
            </div>
            {c.validatedBy.length > 0 && (
              <div className="text-sm text-[color:var(--color-muted)]">
                <span className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-accent)] mr-2">
                  Validated by
                </span>
                {c.validatedBy.join(" · ")}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

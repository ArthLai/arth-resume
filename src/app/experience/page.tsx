import { Section, SectionTitle } from "@/components/Section";

export const metadata = {
  title: "工作經歷 — Arth Lai",
};

const experiences = [
  {
    company: "[公司名稱 TBD]",
    title: "[職稱 TBD]",
    period: "[時間 TBD]",
    teamSize: "[團隊規模 TBD]",
    context: "[公司階段、產品、進去時的狀況 — 待補]",
    owned: [
      "多產品線資源分配與行銷策略制定（依毛利 / 市場 / 成熟度 / 可行性框架）",
      "全漏斗行銷自動化系統設計與導入（獲客 → 啟用 → 留存）",
      "跨團隊重大變動專案領導（含商業思維學院關站移轉）",
      "[其他職責待補]",
    ],
    highlights: ["[量化成果 1 — 待補]", "[量化成果 2 — 待補]"],
    stack: [
      "GA4",
      "GTM",
      "n8n",
      "Zapier",
      "Looker Studio",
      "Clarity",
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    company: "[上一份公司 TBD]",
    title: "[職稱 TBD]",
    period: "[時間 TBD]",
    teamSize: "[團隊規模 TBD]",
    context: "[待補]",
    owned: ["[待補]"],
    highlights: ["[待補]"],
    stack: ["[待補]"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="container-wide py-16 sm:py-20">
      <SectionTitle
        eyebrow="Experience"
        title="工作經歷"
        description="主要職務、負責範圍與標誌性成果。"
      />

      <div className="space-y-16">
        {experiences.map((exp, i) => (
          <article
            key={i}
            className="border-t border-[color:var(--color-subtle)] pt-10"
          >
            <header className="mb-6">
              <h3 className="font-serif text-2xl text-[color:var(--color-fg)] mb-2">
                {exp.company}
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[color:var(--color-muted)]">
                <span>{exp.title}</span>
                <span>·</span>
                <span>{exp.period}</span>
                <span>·</span>
                <span>{exp.teamSize}</span>
              </div>
            </header>

            <div className="space-y-6">
              <div>
                <div className="text-xs uppercase tracking-wider text-[color:var(--color-accent)] font-mono mb-2">
                  情境
                </div>
                <p className="text-[color:var(--color-fg)] leading-relaxed">
                  {exp.context}
                </p>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider text-[color:var(--color-accent)] font-mono mb-2">
                  負責範圍
                </div>
                <ul className="space-y-2">
                  {exp.owned.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-[color:var(--color-fg)] leading-relaxed pl-5 relative"
                    >
                      <span className="absolute left-0 top-3 w-2 h-px bg-[color:var(--color-accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider text-[color:var(--color-accent)] font-mono mb-2">
                  亮點成果
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-[color:var(--color-fg)] leading-relaxed pl-5 relative"
                    >
                      <span className="absolute left-0 top-3 w-2 h-px bg-[color:var(--color-accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider text-[color:var(--color-accent)] font-mono mb-2">
                  工具棧
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2 py-1 bg-[color:var(--color-subtle)] text-[color:var(--color-muted)] font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}

        {/* Career Coaching */}
        <article className="border-t border-[color:var(--color-subtle)] pt-10">
          <header className="mb-6">
            <h3 className="font-serif text-2xl text-[color:var(--color-fg)] mb-2">
              職涯諮詢（並行）
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[color:var(--color-muted)]">
              <span>諮詢師 / 講師</span>
              <span>·</span>
              <span>[時間 TBD] – 至今</span>
            </div>
          </header>

          <div className="space-y-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-[color:var(--color-accent)] font-mono mb-2">
                情境
              </div>
              <p className="text-[color:var(--color-fg)] leading-relaxed">
                為早期職涯與轉職者提供 1:1 諮詢，並受邀至大專院校進行職涯講座。
              </p>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-[color:var(--color-accent)] font-mono mb-2">
                專注領域
              </div>
              <ul className="space-y-2">
                {[
                  "早期職涯規劃與職位選擇",
                  "轉職策略與職涯轉換",
                  "對上溝通與組織內定位",
                  "個人專業形象建立",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="text-[color:var(--color-fg)] leading-relaxed pl-5 relative"
                  >
                    <span className="absolute left-0 top-3 w-2 h-px bg-[color:var(--color-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-[color:var(--color-accent)] font-mono mb-2">
                代表性合作
              </div>
              <ul className="space-y-2">
                <li className="text-[color:var(--color-fg)] leading-relaxed pl-5 relative">
                  <span className="absolute left-0 top-3 w-2 h-px bg-[color:var(--color-accent)]" />
                  國立台中科技大學職涯講座（2026.04，主題：從校園到職場 — 大學生一定要知道的職涯真相）
                </li>
                <li className="text-[color:var(--color-fg)] leading-relaxed pl-5 relative">
                  <span className="absolute left-0 top-3 w-2 h-px bg-[color:var(--color-accent)]" />
                  [其他講座或代表性 1:1 案例 — 待補]
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-[color:var(--color-accent)] font-mono mb-2">
                為什麼這對行銷/營運職位有意義
              </div>
              <p className="text-[color:var(--color-fg)] leading-relaxed">
                諮詢工作訓練我讀懂動機、系統、限制——這正是推動跨職能對齊與團隊績效所需的能力。
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

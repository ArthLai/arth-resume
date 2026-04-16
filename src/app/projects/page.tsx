import Link from "next/link";
import { SectionTitle } from "@/components/Section";

export const metadata = {
  title: "專案 — Arth Lai",
};

const projects = [
  {
    slug: "migration",
    number: "01",
    title: "商業思維學院關站與用戶移轉",
    desc: "主導某教育平台端到端關站。負責產品業務邏輯拆解、技術路線評估、移轉流程的 UX 重新設計、營運驅動的用戶移轉策略。",
    tags: ["營運", "跨職能領導", "UX"],
  },
  {
    slug: "portfolio-allocation",
    number: "02",
    title: "多產品線資源分配框架",
    desc: "設計評估框架，依據毛利、市場規模、產品成熟度、可行性重新排序多條產品線——把策略翻譯成具體的預算與執行調整。",
    tags: ["行銷策略", "資源分配", "決策框架"],
  },
  {
    slug: "automation",
    number: "03",
    title: "端到端行銷自動化系統",
    desc: "設計並建置橫跨三層的自動化系統：業務交接、顧客旅程編排、事件追蹤。把手動流程取代成可隨規模成長而不需等比擴編的系統。",
    tags: ["自動化", "漏斗工程", "追蹤架構"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="container-wide py-16 sm:py-20">
      <SectionTitle
        eyebrow="Projects"
        title="專案集"
        description="三個深度案例，呈現我會接下什麼樣的工作。"
      />

      <div className="space-y-px bg-[color:var(--color-subtle)]">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="block bg-[color:var(--color-bg)] py-10 group hover:bg-[color:var(--color-card)] transition-colors -mx-6 px-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8">
              <div className="font-mono text-sm text-[color:var(--color-accent)] sm:w-12">
                {p.number}
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl sm:text-3xl text-[color:var(--color-fg)] mb-3 group-hover:text-[color:var(--color-accent)] transition-colors">
                  {p.title}
                </h3>
                <p className="text-[color:var(--color-muted)] mb-4 leading-relaxed max-w-2xl">
                  {p.desc}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-[color:var(--color-subtle)] text-[color:var(--color-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-[color:var(--color-muted)] group-hover:text-[color:var(--color-accent)] transition-colors">
                →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

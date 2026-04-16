import Link from "next/link";
import { Section, SectionTitle } from "@/components/Section";

const capabilities = [
  {
    title: "行銷策略與資源分配",
    body: "為多產品線建構評估框架。依毛利、市場規模、產品成熟度、可行性重新分配預算與團隊資源——讓投入流向真正能回收的地方。",
  },
  {
    title: "行銷自動化與漏斗工程",
    body: "設計端到端自動化系統，涵蓋業務交接、顧客旅程、追蹤架構。工具棧:n8n / Zapier / GA4 / GTM / Looker Studio / Clarity，必要時用 Next.js 補上 SaaS 工具做不到的部分。",
  },
  {
    title: "跨職能營運與專案移轉",
    body: "領導高難度營運專案——含平台關閉、用戶移轉、跨組織轉型——透過拆解產品、技術、利害關係人邏輯來推動完成。",
  },
  {
    title: "職涯諮詢與人才洞察",
    body: "持續為早期職涯與轉職者提供諮詢。這份工作磨練我對「什麼樣的人才會被招募、留任、成長」的判讀能力。",
  },
];

const projects = [
  {
    slug: "migration",
    number: "01",
    title: "商業思維學院關站與用戶移轉",
    desc: "主導某教育平台的端到端關站專案——負責產品業務拆解、UX 重新設計、營運驅動的用戶移轉。",
    tags: ["營運", "跨職能領導", "UX"],
  },
  {
    slug: "portfolio-allocation",
    number: "02",
    title: "多產品線資源分配框架",
    desc: "設計並落地框架，依毛利、市場規模、成熟度、可行性重新排序產品線，帶動行銷預算效率提升。",
    tags: ["行銷策略", "資源分配", "決策框架"],
  },
  {
    slug: "automation",
    number: "03",
    title: "端到端行銷自動化系統",
    desc: "設計並建置橫跨業務交接、顧客旅程、事件追蹤的自動化系統——取代手動流程，每月處理大量事件。",
    tags: ["自動化", "漏斗工程", "追蹤架構"],
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="container-wide">
          <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] font-mono mb-6">
            Marketing × Operations × AI
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.15] text-[color:var(--color-fg)] mb-6 max-w-3xl">
            資深行銷與營運專業。
            <br />
            將策略轉化為可交付的系統，AI 全程參與。
          </h1>
          <p className="text-lg text-[color:var(--color-muted)] max-w-2xl mb-10 leading-relaxed">
            以工程師等級的執行力處理行銷決策——從多產品線資源分配，到端到端自動化，到高難度的平台移轉專案。
          </p>
          <p className="text-base text-[color:var(--color-muted)] max-w-2xl mb-10">
            目前尋找 Remote-first 的 B2B 與 AI 原生團隊資深行銷 / 營運 / Supervisor 職位。
          </p>
          <div className="flex gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center px-5 py-2.5 bg-[color:var(--color-fg)] text-[color:var(--color-bg)] text-sm font-medium hover:bg-[color:var(--color-accent)] transition-colors"
            >
              查看專案 →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 border border-[color:var(--color-subtle)] text-[color:var(--color-fg)] text-sm font-medium hover:border-[color:var(--color-fg)] transition-colors"
            >
              聯繫
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Snapshot */}
      <Section className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="font-serif text-3xl text-[color:var(--color-fg)] mb-2">
                3+ 年
              </div>
              <div className="text-sm text-[color:var(--color-muted)]">
                橫跨行銷 × 營運 × 技術經驗
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl text-[color:var(--color-fg)] mb-2">
                AI 原生執行
              </div>
              <div className="text-sm text-[color:var(--color-muted)]">
                用 LLM 在迴圈中建構、自動化、交付
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl text-[color:var(--color-fg)] mb-2">
                跨職能主導
              </div>
              <div className="text-sm text-[color:var(--color-muted)]">
                從策略到移轉的多領域專案
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Capabilities */}
      <Section className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide">
          <SectionTitle
            eyebrow="What I Do Best"
            title="我擅長什麼"
            description="不只做行銷，做的是把行銷變成可被工程化的系統。"
          />
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {capabilities.map((cap) => (
              <div key={cap.title}>
                <h3 className="text-lg font-medium text-[color:var(--color-fg)] mb-3">
                  {cap.title}
                </h3>
                <p className="text-[color:var(--color-muted)] leading-relaxed">
                  {cap.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide">
          <SectionTitle eyebrow="Featured Work" title="精選專案" />
          <div className="space-y-px bg-[color:var(--color-subtle)]">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="block bg-[color:var(--color-bg)] py-8 group hover:bg-[color:var(--color-card)] transition-colors -mx-6 px-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8">
                  <div className="font-mono text-sm text-[color:var(--color-accent)] sm:w-12">
                    {p.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl text-[color:var(--color-fg)] mb-2 group-hover:text-[color:var(--color-accent)] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-[color:var(--color-muted)] mb-3 leading-relaxed">
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
      </Section>

      {/* Looking For */}
      <Section className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide">
          <SectionTitle eyebrow="Currently Looking For" title="目前尋找" />
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <div className="text-sm text-[color:var(--color-accent)] font-mono uppercase tracking-wider mb-2">
                職位
              </div>
              <p className="text-[color:var(--color-fg)] leading-relaxed">
                資深行銷 / 行銷經理 / 營運主管 / 成長主管 / 早期團隊的 Supervisor 職位
              </p>
            </div>
            <div>
              <div className="text-sm text-[color:var(--color-accent)] font-mono uppercase tracking-wider mb-2">
                形式
              </div>
              <p className="text-[color:var(--color-fg)] leading-relaxed">
                Remote-first、非同步友善、成果導向
              </p>
            </div>
            <div>
              <div className="text-sm text-[color:var(--color-accent)] font-mono uppercase tracking-wider mb-2">
                公司類型
              </div>
              <p className="text-[color:var(--color-fg)] leading-relaxed">
                B2B SaaS、AI 原生產品、Scale-stage 新創
              </p>
            </div>
            <div>
              <div className="text-sm text-[color:var(--color-accent)] font-mono uppercase tracking-wider mb-2">
                可接受
              </div>
              <p className="text-[color:var(--color-fg)] leading-relaxed">
                帶人 / Supervisor 職責
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-[color:var(--color-fg)] text-[color:var(--color-bg)] text-sm font-medium hover:bg-[color:var(--color-accent)] transition-colors"
            >
              聯繫合作 →
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}

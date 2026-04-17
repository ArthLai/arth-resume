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
    number: "01",
    title: "商業思維學院關站與用戶移轉",
    desc: "主導某教育平台端到端關站。負責產品業務邏輯拆解、技術路線評估、移轉流程的 UX 重新設計、營運驅動的用戶移轉策略。",
    tags: ["營運", "跨職能領導", "UX"],
  },
  {
    number: "02",
    title: "多產品線資源分配框架",
    desc: "設計評估框架，依據毛利、市場規模、產品成熟度、可行性重新排序多條產品線——把策略翻譯成具體的預算與執行調整。",
    tags: ["行銷策略", "資源分配", "決策框架"],
  },
  {
    number: "03",
    title: "端到端行銷自動化系統",
    desc: "設計並建置橫跨三層的自動化系統：業務交接、顧客旅程編排、事件追蹤。把手動流程取代成可隨規模成長而不需等比擴編的系統。",
    tags: ["自動化", "漏斗工程", "追蹤架構"],
  },
];

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
      "GA4", "GTM", "n8n", "Zapier", "Looker Studio", "Clarity",
      "Next.js", "TypeScript", "Prisma", "PostgreSQL",
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

const skillClusters = [
  {
    name: "行銷 Marketing",
    skills: [
      "策略與定位", "資源分配框架", "Performance Marketing",
      "Lifecycle & CRM", "SEO 與內容", "行銷分析", "A/B 測試", "漏斗優化",
    ],
    validatedBy: ["專案 1", "專案 2"],
  },
  {
    name: "營運 Operations",
    skills: ["跨職能領導", "專案移轉", "流程設計", "利害關係人管理", "危機營運"],
    validatedBy: ["專案 1"],
  },
  {
    name: "技術與自動化 Tech & Automation",
    skills: [
      "n8n", "Zapier", "GA4", "GTM", "Looker Studio", "Clarity",
      "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redis", "BullMQ",
      "OpenAI / Claude APIs", "RAG",
    ],
    validatedBy: ["專案 2", "專案 3"],
  },
  {
    name: "人才與諮詢 People & Coaching",
    skills: ["職涯諮詢", "人才洞察", "1:1 mentorship", "對上溝通", "公開講座"],
    validatedBy: ["職涯諮詢實務", "大學講座系列"],
  },
  {
    name: "思維 Mindset",
    skills: ["系統思考", "跨域整合", "框架建構", "策略溝通", "Operator 心態"],
    validatedBy: [],
  },
];

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

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="container-wide">
          <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] font-mono mb-6">
            Marketing × Operations × Automation
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.15] text-[color:var(--color-fg)] mb-6 max-w-3xl">
            資深行銷與營運專業。
            <br />
            將策略轉化為可交付的系統
          </h1>
          <p className="text-base text-[color:var(--color-muted)] max-w-2xl mb-10">
            目前尋找 Remote-first 的 B2B 與 AI 原生團隊資深行銷 / 營運 / Supervisor 職位。
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-5 py-2.5 bg-[color:var(--color-fg)] text-[color:var(--color-bg)] text-sm font-medium hover:bg-[color:var(--color-accent)] transition-colors"
            >
              查看專案 →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 border border-[color:var(--color-subtle)] text-[color:var(--color-fg)] text-sm font-medium hover:border-[color:var(--color-fg)] transition-colors"
            >
              聯繫
            </a>
          </div>
        </div>
      </section>

      {/* ── Quick Snapshot ── */}
      <Section className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="font-serif text-3xl text-[color:var(--color-fg)] mb-2">4+ 年</div>
              <div className="text-sm text-[color:var(--color-muted)]">橫跨行銷 × 營運 × 技術經驗</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-[color:var(--color-fg)] mb-2">AI 原生執行</div>
              <div className="text-sm text-[color:var(--color-muted)]">透過自動化在迴圈中建構、自動化、交付</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-[color:var(--color-fg)] mb-2">跨職能主導</div>
              <div className="text-sm text-[color:var(--color-muted)]">從策略到移轉的多領域專案</div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Capabilities ── */}
      <Section className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide">
          <SectionTitle eyebrow="What I Do Best" title="我擅長什麼" description="不只做行銷，做的是把行銷變成可被工程化的系統。" />
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {capabilities.map((cap) => (
              <div key={cap.title}>
                <h3 className="text-lg font-medium text-[color:var(--color-fg)] mb-3">{cap.title}</h3>
                <p className="text-[color:var(--color-muted)] leading-relaxed">{cap.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Experience ── */}
      <Section id="experience" className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide">
          <SectionTitle eyebrow="Experience" title="工作經歷" description="主要職務、負責範圍與標誌性成果。" />
          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <article key={i} className="border-t border-[color:var(--color-subtle)] pt-10">
                <header className="mb-6">
                  <h3 className="font-serif text-2xl text-[color:var(--color-fg)] mb-2">{exp.company}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[color:var(--color-muted)]">
                    <span>{exp.title}</span><span>·</span><span>{exp.period}</span><span>·</span><span>{exp.teamSize}</span>
                  </div>
                </header>
                <div className="space-y-6">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[color:var(--color-accent)] font-mono mb-2">情境</div>
                    <p className="text-[color:var(--color-fg)] leading-relaxed">{exp.context}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[color:var(--color-accent)] font-mono mb-2">負責範圍</div>
                    <ul className="space-y-2">
                      {exp.owned.map((item, idx) => (
                        <li key={idx} className="text-[color:var(--color-fg)] leading-relaxed pl-5 relative">
                          <span className="absolute left-0 top-3 w-2 h-px bg-[color:var(--color-accent)]" />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[color:var(--color-accent)] font-mono mb-2">亮點成果</div>
                    <ul className="space-y-2">
                      {exp.highlights.map((item, idx) => (
                        <li key={idx} className="text-[color:var(--color-fg)] leading-relaxed pl-5 relative">
                          <span className="absolute left-0 top-3 w-2 h-px bg-[color:var(--color-accent)]" />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[color:var(--color-accent)] font-mono mb-2">工具棧</div>
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tool) => (
                        <span key={tool} className="text-xs px-2 py-1 bg-[color:var(--color-subtle)] text-[color:var(--color-muted)] font-mono">{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {/* Career Coaching */}
            <article className="border-t border-[color:var(--color-subtle)] pt-10">
              <header className="mb-6">
                <h3 className="font-serif text-2xl text-[color:var(--color-fg)] mb-2">職涯諮詢（並行）</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[color:var(--color-muted)]">
                  <span>諮詢師 / 講師</span><span>·</span><span>[時間 TBD] – 至今</span>
                </div>
              </header>
              <div className="space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[color:var(--color-accent)] font-mono mb-2">情境</div>
                  <p className="text-[color:var(--color-fg)] leading-relaxed">為早期職涯與轉職者提供 1:1 諮詢，並受邀至大專院校進行職涯講座。</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[color:var(--color-accent)] font-mono mb-2">專注領域</div>
                  <ul className="space-y-2">
                    {["早期職涯規劃與職位選擇", "轉職策略與職涯轉換", "對上溝通與組織內定位", "個人專業形象建立"].map((item, idx) => (
                      <li key={idx} className="text-[color:var(--color-fg)] leading-relaxed pl-5 relative">
                        <span className="absolute left-0 top-3 w-2 h-px bg-[color:var(--color-accent)]" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[color:var(--color-accent)] font-mono mb-2">代表性合作</div>
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
                  <div className="text-xs uppercase tracking-wider text-[color:var(--color-accent)] font-mono mb-2">為什麼這對行銷/營運職位有意義</div>
                  <p className="text-[color:var(--color-fg)] leading-relaxed">諮詢工作訓練我讀懂動機、系統、限制——這正是推動跨職能對齊與團隊績效所需的能力。</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </Section>

      {/* ── Projects ── */}
      <Section id="projects" className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide">
          <SectionTitle eyebrow="Projects" title="精選專案" description="三個深度案例，呈現我會接下什麼樣的工作。" />
          <div className="space-y-px bg-[color:var(--color-subtle)]">
            {projects.map((p) => (
              <div key={p.number} className="bg-[color:var(--color-bg)] py-10 -mx-6 px-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8">
                  <div className="font-mono text-sm text-[color:var(--color-accent)] sm:w-12">{p.number}</div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[color:var(--color-fg)] mb-3">{p.title}</h3>
                    <p className="text-[color:var(--color-muted)] mb-4 leading-relaxed max-w-2xl">{p.desc}</p>
                    <div className="flex gap-2 flex-wrap">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 bg-[color:var(--color-subtle)] text-[color:var(--color-muted)]">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Skills ── */}
      <Section id="skills" className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide">
          <SectionTitle eyebrow="Skills" title="能力地圖" description="按領域分群，連結到驗證它們的實際專案。" />
          <div className="space-y-12">
            {skillClusters.map((c) => (
              <section key={c.name} className="border-t border-[color:var(--color-subtle)] pt-8">
                <h3 className="font-serif text-2xl text-[color:var(--color-fg)] mb-5">{c.name}</h3>
                <div className="flex flex-wrap gap-2 mb-5">
                  {c.skills.map((s) => (
                    <span key={s} className="text-sm px-3 py-1.5 bg-[color:var(--color-card)] border border-[color:var(--color-subtle)] text-[color:var(--color-fg)]">{s}</span>
                  ))}
                </div>
                {c.validatedBy.length > 0 && (
                  <div className="text-sm text-[color:var(--color-muted)]">
                    <span className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-accent)] mr-2">Validated by</span>
                    {c.validatedBy.join(" · ")}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Looking For ── */}
      <Section className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide">
          <SectionTitle eyebrow="Currently Looking For" title="目前尋找" />
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <div className="text-sm text-[color:var(--color-accent)] font-mono uppercase tracking-wider mb-2">職位</div>
              <p className="text-[color:var(--color-fg)] leading-relaxed">資深行銷 / 行銷經理 / 營運主管 / 成長主管 / 早期團隊的 Supervisor 職位</p>
            </div>
            <div>
              <div className="text-sm text-[color:var(--color-accent)] font-mono uppercase tracking-wider mb-2">形式</div>
              <p className="text-[color:var(--color-fg)] leading-relaxed">Remote-first、非同步友善、成果導向</p>
            </div>
            <div>
              <div className="text-sm text-[color:var(--color-accent)] font-mono uppercase tracking-wider mb-2">公司類型</div>
              <p className="text-[color:var(--color-fg)] leading-relaxed">B2B SaaS、AI 原生產品、Scale-stage 新創</p>
            </div>
            <div>
              <div className="text-sm text-[color:var(--color-accent)] font-mono uppercase tracking-wider mb-2">可接受</div>
              <p className="text-[color:var(--color-fg)] leading-relaxed">帶人 / Supervisor 職責</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Contact ── */}
      <Section id="contact" className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide max-w-2xl">
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
                  <div className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-accent)] w-20">{c.label}</div>
                  <div className="text-[color:var(--color-fg)] group-hover:text-[color:var(--color-accent)] transition-colors">{c.value}</div>
                </div>
                <div className="text-[color:var(--color-muted)] group-hover:text-[color:var(--color-accent)] transition-colors">→</div>
              </a>
            ))}
          </div>
          <p className="mt-10 text-sm text-[color:var(--color-muted)]">獵頭合作：24 小時內回覆。</p>
        </div>
      </Section>
    </div>
  );
}

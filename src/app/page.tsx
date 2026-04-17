import { Section, SectionTitle } from "@/components/Section";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/FadeIn";
import { CountUp } from "@/components/CountUp";
import { ProjectTimeline } from "@/components/ProjectTimeline";
import { ProjectMatrix } from "@/components/ProjectMatrix";
import { ProjectFlows } from "@/components/ProjectFlows";
import { MagicCard } from "@/components/MagicCard";
import { AnimatedGridPattern } from "@/components/AnimatedGrid";

const capabilities = [
  {
    title: "行銷策略與資源分配",
    body: "能於多產品線中，依毛利、市場規模、產品成熟度、可行性重新分配預算與團隊資源，讓投入流向真正有機會回收的地方。",
  },
  {
    title: "行銷自動化與漏斗工程",
    body: "設計端到端自動化系統，涵蓋業務交接、顧客旅程、追蹤架構，使用工具包含 n8n / GA4 / GTM / Looker Studio / Clarity。",
  },
  {
    title: "跨職能專案營運",
    body: "領導高難度營運專案，含平台關閉、用戶移轉、跨組織轉型，透過拆解產品、技術、利害關係人邏輯來推動完成。",
  },
  {
    title: "職涯諮詢與人才洞察",
    body: "協助工作者釐清現況卡點，透過局面、利害關係人、目標分析，提供個案判斷及設定突破行動策略的能力。",
  },
];

const projects = [
  {
    number: "01",
    title: "商業思維學院平台關站與用戶移轉",
    desc: "主導線上教育平台端到端關站專案——釐清產品業務與技術邏輯、評估 User Flow 及 UIUX、設定營運驅動策略，3 個月內達成近 60% 用戶移轉。",
    tags: ["營運", "跨職能領導", "UX", "用戶移轉"],
    hasTimeline: true,
    hasMatrix: false,
    hasFlows: false,
  },
  {
    number: "02",
    title: "多產品線行銷資源分配框架",
    desc: "於電商與服務多產品線環境中，依毛利、市場規模、產品成熟度、可行性設計評估框架，將策略轉化為具體的預算與執行資源調配。",
    tags: ["行銷策略", "資源分配", "決策框架"],
    hasTimeline: false,
    hasMatrix: true,
    hasFlows: false,
  },
  {
    number: "03",
    title: "端到端行銷自動化與追蹤系統",
    desc: "透過 n8n、Google Apps Script、API 串接，建置橫跨銷售交接、顧客旅程、事件追蹤的自動化系統，減少人工作業、提升數據準確度與營運效率。",
    tags: ["自動化", "漏斗工程", "追蹤架構"],
    hasTimeline: false,
    hasMatrix: false,
    hasFlows: true,
  },
];

const experiences = [
  {
    company: "職游 創新職涯發展與諮詢",
    title: "Marketing Specialist",
    period: "2024.07 – 2026.03",
    teamSize: "自由職業 · 遠距",
    context: "新創型職涯顧問公司，以顧問身份主導電商、行銷、數據分析與自動化的成長營運。選擇自由職業以同步建立跨產業實戰經驗與個人專業品牌，目前尋求正職以深耕單一組織的長期價值。",
    owned: [
      "多產品線資源分配與行銷策略制定",
      "全漏斗追蹤系統建置（GA4、GTM、Dashboard）",
      "自動化工作流開發（n8n、Apps Script、API）",
      "跨產品線行銷執行與成效優化",
    ],
    metrics: [
      { value: "多產品線", label: "資源分配框架建立 [具體數據待補]" },
      { value: "端到端", label: "自動化系統取代手動流程 [具體數據待補]" },
    ],
    stack: ["GA4", "GTM", "n8n", "Apps Script", "Looker Studio", "Clarity"],
  },
  {
    company: "商業思維學院",
    title: "Marketing Operations Specialist",
    period: "2023.09 – 2024.07",
    teamSize: "正職 · 遠距",
    context: "線上商業教育平台，服務數萬名會員的訂閱制學習社群。跨團隊協調產品、技術、營運等部門推動關鍵專案。",
    owned: [
      "主導平台關站與用戶移轉專案，跨部門協調",
      "線上課程行銷活動（受眾鎖定、渠道規劃、排程）",
      "行銷數據追蹤與 CRM 管理",
    ],
    metrics: [
      { value: "60%", label: "用戶移轉達成率 / 3 個月" },
      { value: "1,200", label: "單場活動報名數" },
      { value: "10%", label: "活動轉換率" },
    ],
    stack: ["CRM", "行銷自動化", "GA4", "GTM", "內容行銷"],
  },
  {
    company: "百瀚智能教育",
    title: "Marketing Content Specialist",
    period: "2023.01 – 2023.09",
    teamSize: "全職 · 混合型",
    context: "智能教育公司，擁有全台 27 間線下門市，推動線上線下整合行銷。",
    owned: [
      "SEO 策略制定與內容產出",
      "Chatbot + OMO 再行銷策略設計",
      "Yourator 線下招募活動專案",
    ],
    metrics: [
      { value: "60x", label: "網站日均流量成長（100→6,000）" },
      { value: "2.5x", label: "招募活動投遞數成長" },
      { value: "27", label: "間門市顧客行為追蹤自動化" },
    ],
    stack: ["SEO", "Google Analytics", "Chatbot", "OMO"],
  },
];

const skillClusters = [
  {
    name: "行銷 Marketing",
    tier: "core",
    skills: ["策略與定位", "資源分配框架", "Performance Marketing", "Lifecycle & CRM", "SEO 與內容", "行銷分析", "A/B 測試", "漏斗優化"],
    validatedBy: ["職游", "商業思維學院", "百瀚"],
  },
  {
    name: "營運 Operations",
    tier: "core",
    skills: ["跨職能領導", "專案移轉", "流程設計", "利害關係人管理"],
    validatedBy: ["商業思維學院關站移轉"],
  },
  {
    name: "自動化工具 Automation Tools",
    tier: "core",
    skills: ["n8n", "GA4", "GTM", "Looker Studio", "Clarity", "Zapier", "Google Apps Script"],
    validatedBy: ["職游自動化系統", "全漏斗追蹤建置"],
  },
  {
    name: "工程技術 Engineering",
    tier: "extended",
    skills: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redis", "BullMQ", "OpenAI / Claude APIs", "RAG"],
    validatedBy: ["個人專案", "自動化系統自建"],
  },
  {
    name: "人才與諮詢 People & Coaching",
    tier: "extended",
    skills: ["職涯諮詢", "人才洞察", "1:1 mentorship", "公開講座"],
    validatedBy: ["職涯諮詢實務", "大學講座系列"],
  },
];

const channels = [
  { label: "Email", value: "bo.heng.lai@gmail.com", href: "mailto:bo.heng.lai@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/arth-lai-09882b136", href: "https://www.linkedin.com/in/arth-lai-09882b136/?skipRedirect=true" },
  { label: "履歷 PDF", value: "下載完整履歷", href: "#" },
];

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative pt-24 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
        <AnimatedGridPattern
          className="absolute inset-0 w-full h-full opacity-60 [mask-image:radial-gradient(600px_circle_at_50%_50%,white,transparent)]"
          numSquares={12}
          maxOpacity={0.2}
          cellSize={56}
        />
        <div className="container-wide relative z-10">
          <FadeIn>
            <div className="text-sm uppercase tracking-[0.2em] text-[color:var(--color-accent)] font-mono mb-8">
              Marketing × Operations × Automation
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.1] text-[color:var(--color-fg)] mb-8 max-w-4xl">
              資深行銷與營運專業。
              <br />
              將策略轉化為可交付的系統
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-[color:var(--color-muted)] max-w-2xl mb-5 leading-relaxed">
              擅長結合行銷策略、營運架構與自動化工具，把複雜的商業問題拆解成可落地、可規模化的系統。
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-base text-[color:var(--color-muted)] max-w-2xl mb-12">
              目前尋找 Remote-first 的 B2B 與 AI 原生團隊資深行銷 / 營運 / Supervisor 職位。
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center px-6 py-3 bg-[color:var(--color-accent)] text-[color:var(--color-bg)] text-base font-medium hover:bg-[color:var(--color-accent-hover)] transition-colors">
                查看專案 →
              </a>
              <a href="#" className="inline-flex items-center px-6 py-3 border border-[color:var(--color-accent)] text-[color:var(--color-accent)] text-base font-medium hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-bg)] transition-colors">
                下載履歷 PDF
              </a>
              <a href="#contact" className="inline-flex items-center px-6 py-3 border border-[color:var(--color-subtle)] text-[color:var(--color-fg)] text-base font-medium hover:border-[color:var(--color-accent)] transition-colors">
                聯繫
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Quick Snapshot ── */}
      <Section className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide">
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-4 gap-10">
            <StaggerItem>
              <div className="font-serif text-4xl sm:text-5xl text-[color:var(--color-fg)] mb-3">
                <CountUp target={4} suffix="+" />
              </div>
              <div className="text-base text-[color:var(--color-muted)]">年行銷 × 營運經驗</div>
            </StaggerItem>
            <StaggerItem>
              <div className="font-serif text-4xl sm:text-5xl text-[color:var(--color-fg)] mb-3">
                <CountUp target={3} />
              </div>
              <div className="text-base text-[color:var(--color-muted)]">間公司跨產業實戰</div>
            </StaggerItem>
            <StaggerItem>
              <div className="font-serif text-4xl sm:text-5xl text-[color:var(--color-fg)] mb-3">
                60<span className="text-[color:var(--color-accent)]">x</span>
              </div>
              <div className="text-base text-[color:var(--color-muted)]">最佳 SEO 流量成長</div>
            </StaggerItem>
            <StaggerItem>
              <div className="font-serif text-4xl sm:text-5xl text-[color:var(--color-fg)] mb-3">
                <CountUp target={60} suffix="%" />
              </div>
              <div className="text-base text-[color:var(--color-muted)]">用戶移轉達成 / 3 個月</div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </Section>

      {/* ── Capabilities ── */}
      <Section className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide">
          <FadeIn>
            <SectionTitle eyebrow="What I Do Best" title="我擅長什麼" description="集合行銷 x 產品 x 服務設計思維，並透過 AI 驅動，將行銷變成可被自動化的系統。" />
          </FadeIn>
          <StaggerGroup className="grid sm:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <StaggerItem key={cap.title}>
                <MagicCard className="p-6 sm:p-7 h-full">
                  <h3 className="text-xl font-medium text-[color:var(--color-fg)] mb-3">{cap.title}</h3>
                  <p className="text-[color:var(--color-muted)] leading-relaxed">{cap.body}</p>
                </MagicCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Section>

      {/* ── Experience ── */}
      <Section id="experience" className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide">
          <FadeIn>
            <SectionTitle eyebrow="Experience" title="工作經歷" description="主要職務、負責範圍與標誌性成果。" />
          </FadeIn>
          <div className="space-y-20">
            {experiences.map((exp, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <article className="border-t border-[color:var(--color-subtle)] pt-12">
                  <header className="mb-8">
                    <h3 className="font-serif text-3xl text-[color:var(--color-fg)] mb-3">{exp.company}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-base text-[color:var(--color-muted)]">
                      <span>{exp.title}</span><span>·</span><span>{exp.period}</span><span>·</span><span>{exp.teamSize}</span>
                    </div>
                  </header>
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">
                    <div className="space-y-6">
                      <div>
                        <div className="text-sm uppercase tracking-wider text-[color:var(--color-accent)] font-mono mb-3">情境</div>
                        <p className="text-[color:var(--color-fg)] leading-relaxed">{exp.context}</p>
                      </div>
                      <div>
                        <div className="text-sm uppercase tracking-wider text-[color:var(--color-accent)] font-mono mb-3">負責範圍</div>
                        <ul className="space-y-3">
                          {exp.owned.map((item, idx) => (
                            <li key={idx} className="text-[color:var(--color-fg)] leading-relaxed pl-6 relative">
                              <span className="absolute left-0 top-[0.65em] w-3 h-px bg-[color:var(--color-accent)]" />{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-sm uppercase tracking-wider text-[color:var(--color-accent)] font-mono mb-3">工具棧</div>
                        <div className="flex flex-wrap gap-2">
                          {exp.stack.map((tool) => (
                            <span key={tool} className="text-sm px-2.5 py-1 bg-[color:var(--color-subtle)] text-[color:var(--color-muted)] font-mono">{tool}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="lg:pt-0">
                      <MagicCard className="p-6">
                        <div className="text-sm uppercase tracking-wider text-[color:var(--color-accent)] font-mono mb-5">Key Results</div>
                        <div className="space-y-5">
                          {exp.metrics.map((m, idx) => (
                            <div key={idx} className="border-b border-[color:var(--color-subtle)] pb-5 last:border-0 last:pb-0">
                              <div className="font-serif text-3xl text-[color:var(--color-fg)] mb-1">{m.value}</div>
                              <div className="text-sm text-[color:var(--color-muted)] leading-relaxed">{m.label}</div>
                            </div>
                          ))}
                        </div>
                      </MagicCard>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}

            {/* Career Coaching — compact */}
            <FadeIn>
              <article className="border-t border-[color:var(--color-subtle)] pt-12">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-4">
                  <h3 className="font-serif text-2xl text-[color:var(--color-fg)]">職涯諮詢（並行）</h3>
                  <div className="text-base text-[color:var(--color-muted)]">
                    諮詢師 / 講師 · 2024 – 至今
                  </div>
                </div>
                <p className="text-[color:var(--color-muted)] leading-relaxed max-w-3xl mb-4">
                  為早期職涯與轉職者提供 1:1 諮詢。受邀至國立台中科技大學進行職涯講座（2026.04）。諮詢工作訓練我讀懂動機、系統、限制——這正是推動跨職能對齊與團隊績效所需的能力。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["職涯規劃", "轉職策略", "對上溝通", "專業形象建立"].map((s) => (
                    <span key={s} className="text-sm px-2.5 py-1 bg-[color:var(--color-subtle)] text-[color:var(--color-muted)]">{s}</span>
                  ))}
                </div>
              </article>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* ── Projects ── */}
      <Section id="projects" className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide">
          <FadeIn>
            <SectionTitle eyebrow="Projects" title="精選專案" description="三個代表性專案，呈現我會接下什麼樣的工作。" />
          </FadeIn>
          <div className="space-y-12">
            {projects.map((p) => (
              <FadeIn key={p.number}>
                <MagicCard className="p-7 sm:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8 mb-6">
                    <div className="font-mono text-base text-[color:var(--color-accent)] sm:w-14">{p.number}</div>
                    <div className="flex-1">
                      <h3 className="font-serif text-3xl sm:text-4xl text-[color:var(--color-fg)] mb-4">{p.title}</h3>
                      <p className="text-lg text-[color:var(--color-muted)] mb-5 leading-relaxed max-w-2xl">{p.desc}</p>
                      <div className="flex gap-2 flex-wrap">
                        {p.tags.map((t) => (
                          <span key={t} className="text-sm px-3 py-1 bg-[color:var(--color-subtle)] text-[color:var(--color-muted)]">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {p.hasTimeline && <ProjectTimeline />}
                  {p.hasMatrix && <ProjectMatrix />}
                  {p.hasFlows && <ProjectFlows />}
                </MagicCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Skills ── */}
      <Section id="skills" className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide">
          <FadeIn>
            <SectionTitle eyebrow="Skills" title="能力地圖" description="核心日常使用技能與延伸工程能力。" />
          </FadeIn>
          <div className="space-y-14">
            {skillClusters.map((c, i) => (
              <FadeIn key={c.name} delay={i * 0.05}>
                <section className={`pt-10 ${c.tier === "core" ? "border-t border-[color:var(--color-subtle)]" : "border-t border-dashed border-[color:var(--color-subtle)]"}`}>
                  <div className="flex items-baseline gap-3 mb-6">
                    <h3 className="font-serif text-3xl text-[color:var(--color-fg)]">{c.name}</h3>
                    {c.tier === "extended" && (
                      <span className="text-xs px-2 py-0.5 border border-[color:var(--color-subtle)] text-[color:var(--color-muted)] font-mono uppercase">Extended</span>
                    )}
                  </div>
                  <StaggerGroup className="flex flex-wrap gap-2.5 mb-6" stagger={0.03}>
                    {c.skills.map((s) => (
                      <StaggerItem key={s}>
                        <span className="text-base px-3.5 py-2 bg-[color:var(--color-card)] border border-[color:var(--color-subtle)] text-[color:var(--color-fg)] inline-block">{s}</span>
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                  {c.validatedBy.length > 0 && (
                    <div className="text-base text-[color:var(--color-muted)]">
                      <span className="font-mono text-sm uppercase tracking-wider text-[color:var(--color-accent)] mr-3">Validated by</span>
                      {c.validatedBy.join(" · ")}
                    </div>
                  )}
                </section>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Education ── */}
      <Section className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide">
          <FadeIn>
            <SectionTitle eyebrow="Education" title="學歷" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
              <h3 className="font-serif text-2xl text-[color:var(--color-fg)]">[學校名稱 TBD]</h3>
              <div className="text-base text-[color:var(--color-muted)]">[科系 TBD] · [畢業年 TBD]</div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ── Looking For ── */}
      <Section className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide">
          <FadeIn>
            <SectionTitle eyebrow="Currently Looking For" title="目前尋找" />
          </FadeIn>
          <StaggerGroup className="grid sm:grid-cols-2 gap-10">
            {[
              { label: "職位", content: "資深行銷 / 行銷經理 / 營運主管 / 成長主管 / 早期團隊的 Supervisor 職位" },
              { label: "形式", content: "Remote-first、非同步友善、成果導向" },
              { label: "公司類型", content: "B2B SaaS、AI 原生產品、Scale-stage 新創" },
              { label: "可接受", content: "帶人 / Supervisor 職責" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="text-sm text-[color:var(--color-accent)] font-mono uppercase tracking-wider mb-3">{item.label}</div>
                <p className="text-lg text-[color:var(--color-fg)] leading-relaxed">{item.content}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Section>

      {/* ── Contact ── */}
      <Section id="contact" className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide max-w-2xl">
          <FadeIn>
            <SectionTitle
              eyebrow="Get in Touch"
              title="聯繫"
              description="尋找中職位：資深 行銷 / 營運 / Supervisor 職位 · Remote-first · B2B SaaS 或 AI 原生產品。"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-px bg-[color:var(--color-subtle)] border-y border-[color:var(--color-subtle)]">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-baseline justify-between bg-[color:var(--color-bg)] py-6 -mx-6 px-6 group hover:bg-[color:var(--color-card)] transition-colors"
                >
                  <div className="flex items-baseline gap-6">
                    <div className="font-mono text-sm uppercase tracking-wider text-[color:var(--color-accent)] w-24">{c.label}</div>
                    <div className="text-lg text-[color:var(--color-fg)] group-hover:text-[color:var(--color-accent)] transition-colors">{c.value}</div>
                  </div>
                  <div className="text-[color:var(--color-muted)] group-hover:text-[color:var(--color-accent)] transition-colors text-lg">→</div>
                </a>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-12 text-base text-[color:var(--color-muted)]">獵頭合作：24 小時內回覆。</p>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}

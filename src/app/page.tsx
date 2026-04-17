import { Section, SectionTitle } from "@/components/Section";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/FadeIn";
import { CountUp } from "@/components/CountUp";
import { ProjectTimeline } from "@/components/ProjectTimeline";

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
  },
  {
    number: "02",
    title: "多產品線行銷資源分配框架",
    desc: "於電商與服務多產品線環境中，依毛利、市場規模、產品成熟度、可行性設計評估框架，將策略轉化為具體的預算與執行資源調配。",
    tags: ["行銷策略", "資源分配", "決策框架"],
    hasTimeline: false,
  },
  {
    number: "03",
    title: "端到端行銷自動化與追蹤系統",
    desc: "透過 n8n、Google Apps Script、API 串接，建置橫跨銷售交接、顧客旅程、事件追蹤的自動化系統，減少人工作業、提升數據準確度與營運效率。",
    tags: ["自動化", "漏斗工程", "追蹤架構"],
    hasTimeline: false,
  },
];

const experiences = [
  {
    company: "職游 創新職涯發展與諮詢",
    title: "Marketing Specialist",
    period: "2024.07 – 2026.03",
    teamSize: "自由職業 · 遠距",
    context: "新創型職涯顧問公司，負責橫跨電商、行銷、數據分析、CRM 與自動化的成長營運。",
    owned: [
      "多產品線資源分配與行銷策略制定，依毛利、市場規模、成熟度、可行性框架進行資源調配",
      "以 GA4、GTM、Google Sheets 及 Dashboard 建置全漏斗追蹤系統，監控關鍵轉換指標，支援快速決策",
      "透過 n8n、Google Apps Script、API 串接開發自動化工作流，減少人工作業、提升數據準確度與營運效率",
      "跨電商、服務、內容等產品線的行銷執行與成效優化",
    ],
    highlights: [
      "建立多產品線資源分配框架，系統化調配行銷預算與團隊資源",
      "完成端到端自動化系統建置，取代多項手動流程",
    ],
    stack: ["GA4", "GTM", "n8n", "Google Apps Script", "Looker Studio", "Clarity", "Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
  {
    company: "商業思維學院",
    title: "Marketing Operations Specialist",
    period: "2023.09 – 2024.07",
    teamSize: "正職 · 遠距",
    context: "線上商業教育平台，服務數萬名會員的訂閱制學習社群。",
    owned: [
      "主導平台關站與用戶移轉專案，跨團隊協調新系統需求與移轉計畫，3 個月內達成近 60% 用戶移轉",
      "負責線上課程行銷活動，涵蓋受眾鎖定、渠道規劃、內容排程",
      "行銷數據追蹤與 CRM 管理",
    ],
    highlights: [
      "單場活動達成 1,200 報名、800 人次即時參與、10% 轉換率",
      "3 個月內完成近 60% 用戶從舊平台至新平台的移轉",
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
      "制定 SEO 策略與內容產出，提升網站自然流量",
      "設計 Chatbot 系統結合訊息行銷，規劃 OMO 再行銷策略，並自動化追蹤全台 27 間門市的顧客行為數據",
      "負責 Yourator 線下招募活動專案",
    ],
    highlights: [
      "網站日均流量從 100 提升至 6,000（成長 60 倍）",
      "Yourator 招募活動求職者投遞數較前屆成長 2.5 倍",
    ],
    stack: ["SEO", "Google Analytics", "Chatbot", "訊息行銷", "OMO"],
  },
];

const skillClusters = [
  {
    name: "行銷 Marketing",
    skills: ["策略與定位", "資源分配框架", "Performance Marketing", "Lifecycle & CRM", "SEO 與內容", "行銷分析", "A/B 測試", "漏斗優化"],
    validatedBy: ["職游", "商業思維學院"],
  },
  {
    name: "營運 Operations",
    skills: ["跨職能領導", "專案移轉", "流程設計", "利害關係人管理", "危機營運"],
    validatedBy: ["商業思維學院關站移轉"],
  },
  {
    name: "技術與自動化 Tech & Automation",
    skills: ["n8n", "Zapier", "GA4", "GTM", "Looker Studio", "Clarity", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redis", "BullMQ", "OpenAI / Claude APIs", "RAG"],
    validatedBy: ["職游自動化系統", "全漏斗追蹤建置"],
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
  { label: "Email", value: "bo.heng.lai@gmail.com", href: "mailto:bo.heng.lai@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/arth-lai-09882b136", href: "https://www.linkedin.com/in/arth-lai-09882b136/?skipRedirect=true" },
];

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="container-wide">
          <FadeIn>
            <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)] font-mono mb-6">
              Marketing × Operations × Automation
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.15] text-[color:var(--color-fg)] mb-6 max-w-3xl">
              資深行銷與營運專業。
              <br />
              將策略轉化為可交付的系統
            </h1>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="text-base text-[color:var(--color-muted)] max-w-2xl mb-10">
              目前尋找 Remote-first 的 B2B 與 AI 原生團隊資深行銷 / 營運 / Supervisor 職位。
            </p>
          </FadeIn>
          <FadeIn delay={0.35}>
            <div className="flex gap-4">
              <a href="#projects" className="inline-flex items-center px-5 py-2.5 bg-[color:var(--color-accent)] text-[color:var(--color-bg)] text-sm font-medium hover:bg-[color:var(--color-accent-hover)] transition-colors">
                查看專案 →
              </a>
              <a href="#contact" className="inline-flex items-center px-5 py-2.5 border border-[color:var(--color-subtle)] text-[color:var(--color-fg)] text-sm font-medium hover:border-[color:var(--color-accent)] transition-colors">
                聯繫
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Quick Snapshot ── */}
      <Section className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide">
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="font-serif text-3xl text-[color:var(--color-fg)] mb-2">
                <CountUp target={4} suffix="+ 年" />
              </div>
              <div className="text-sm text-[color:var(--color-muted)]">橫跨行銷 × 營運 × 技術經驗</div>
            </StaggerItem>
            <StaggerItem>
              <div className="font-serif text-3xl text-[color:var(--color-fg)] mb-2">AI 原生執行</div>
              <div className="text-sm text-[color:var(--color-muted)]">透過自動化在迴圈中建構、自動化、交付</div>
            </StaggerItem>
            <StaggerItem>
              <div className="font-serif text-3xl text-[color:var(--color-fg)] mb-2">跨職能主導</div>
              <div className="text-sm text-[color:var(--color-muted)]">從策略到移轉的多領域專案</div>
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
          <StaggerGroup className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {capabilities.map((cap) => (
              <StaggerItem key={cap.title}>
                <h3 className="text-lg font-medium text-[color:var(--color-fg)] mb-3">{cap.title}</h3>
                <p className="text-[color:var(--color-muted)] leading-relaxed">{cap.body}</p>
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
          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <article className="border-t border-[color:var(--color-subtle)] pt-10">
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
              </FadeIn>
            ))}

            {/* Career Coaching */}
            <FadeIn>
              <article className="border-t border-[color:var(--color-subtle)] pt-10">
                <header className="mb-6">
                  <h3 className="font-serif text-2xl text-[color:var(--color-fg)] mb-2">職涯諮詢（並行）</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[color:var(--color-muted)]">
                    <span>諮詢師 / 講師</span><span>·</span><span>2024 – 至今</span>
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
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[color:var(--color-accent)] font-mono mb-2">為什麼這對行銷/營運職位有意義</div>
                    <p className="text-[color:var(--color-fg)] leading-relaxed">諮詢工作訓練我讀懂動機、系統、限制——這正是推動跨職能對齊與團隊績效所需的能力。</p>
                  </div>
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
                <div className="border border-[color:var(--color-subtle)] bg-[color:var(--color-card)] p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8 mb-4">
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
                  {p.hasTimeline && <ProjectTimeline />}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Skills ── */}
      <Section id="skills" className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide">
          <FadeIn>
            <SectionTitle eyebrow="Skills" title="能力地圖" description="按領域分群，連結到驗證它們的實際專案。" />
          </FadeIn>
          <div className="space-y-12">
            {skillClusters.map((c, i) => (
              <FadeIn key={c.name} delay={i * 0.05}>
                <section className="border-t border-[color:var(--color-subtle)] pt-8">
                  <h3 className="font-serif text-2xl text-[color:var(--color-fg)] mb-5">{c.name}</h3>
                  <StaggerGroup className="flex flex-wrap gap-2 mb-5" stagger={0.03}>
                    {c.skills.map((s) => (
                      <StaggerItem key={s}>
                        <span className="text-sm px-3 py-1.5 bg-[color:var(--color-card)] border border-[color:var(--color-subtle)] text-[color:var(--color-fg)] inline-block">{s}</span>
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                  {c.validatedBy.length > 0 && (
                    <div className="text-sm text-[color:var(--color-muted)]">
                      <span className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-accent)] mr-2">Validated by</span>
                      {c.validatedBy.join(" · ")}
                    </div>
                  )}
                </section>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Looking For ── */}
      <Section className="border-t border-[color:var(--color-subtle)]">
        <div className="container-wide">
          <FadeIn>
            <SectionTitle eyebrow="Currently Looking For" title="目前尋找" />
          </FadeIn>
          <StaggerGroup className="grid sm:grid-cols-2 gap-8">
            {[
              { label: "職位", content: "資深行銷 / 行銷經理 / 營運主管 / 成長主管 / 早期團隊的 Supervisor 職位" },
              { label: "形式", content: "Remote-first、非同步友善、成果導向" },
              { label: "公司類型", content: "B2B SaaS、AI 原生產品、Scale-stage 新創" },
              { label: "可接受", content: "帶人 / Supervisor 職責" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="text-sm text-[color:var(--color-accent)] font-mono uppercase tracking-wider mb-2">{item.label}</div>
                <p className="text-[color:var(--color-fg)] leading-relaxed">{item.content}</p>
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
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-10 text-sm text-[color:var(--color-muted)]">獵頭合作：24 小時內回覆。</p>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}

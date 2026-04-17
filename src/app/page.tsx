import { Section, SectionTitle } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { ProjectTimeline } from "@/components/ProjectTimeline";
import { ProjectMatrix } from "@/components/ProjectMatrix";
import { ProjectFlows } from "@/components/ProjectFlows";
import { BrandLogo } from "@/components/BrandLogo";
import {
  ExperienceItem,
  type ExperienceData,
} from "@/components/ExperienceItem";
import { ProjectCard, type ProjectData } from "@/components/ProjectCard";

const experiences: ExperienceData[] = [
  {
    slug: "zhiyou",
    company: "職游 創新職涯發展與諮詢",
    initials: "職游",
    title: "Marketing Specialist",
    period: "2024.07 – 2026.03",
    mode: "自由接案 · 遠距",
    headline:
      "B2C × B2B 並行的顧問公司中，負責從策略到自動化的全鏈路行銷營運，推動主力產品漏斗轉換提升。",
    context:
      "新創型職涯顧問公司，B2C 提供高單價直播培訓課 / 線上預錄課 / 1:1 深度諮詢等服務，B2B 提供企業內訓與顧問服務。",
    owned: [
      "多產品線行銷策略與資源分配",
      "用戶訪談、TA 洞察與訊息優化（LLM 輔助逐字稿結構化 + 關鍵詞萃取）",
      "全漏斗追蹤（GA4 / GTM / Dashboard）",
      "自動化工作流（n8n / Apps Script / API）",
      "官網營運與優化",
    ],
    metrics: [
      {
        value: "10-15%",
        action: "改造入口型產品 × 說明會漏斗",
        label:
          "新增單日直播課作為入口型產品，讓主力培訓班轉換率提升 10-15% 不等。",
      },
      {
        value: "2-3 hr / 日",
        action: "n8n × Apps Script 重寫營運 ops",
        label: "取代人工報表、CRM 同步、跨平台追蹤等重複作業。",
      },
    ],
    stack: ["GA4", "GTM", "n8n", "Apps Script", "Looker Studio", "Clarity"],
    logoColor: "#1A4FBF",
  },
  {
    slug: "bizthinking",
    company: "商業思維學院",
    initials: "商思",
    title: "Project Manager / Marketing Operations Specialist",
    period: "2023.09 – 2024.07",
    mode: "正職 · 遠距",
    headline:
      "跨 PM / 行銷 / 營運三肩，平台轉移 × 訂閱制學院營運 × 高單價課程銷售同時推進。",
    context:
      "線上商業教育平台，B2C 提供產品、商業、管理等主題的訂閱制學習平台，並於 B2B 端提供企業內訓與顧問服務。",
    owned: [
      "PM｜平台關站與用戶移轉專案（技術 × 營運邏輯釐清 → 新平台上線 → 移轉營運）",
      "MKT｜主力課程檔期銷售（廣告策略 × 內容行銷 × 銷售組合設計）",
      "OP｜產品經理學習營主理，設計完課率與滿意度機制",
    ],
    metrics: [
      {
        value: "60%",
        action: "跨技術 × 營運的分批移轉",
        label: "舊平台 → 新平台用戶移轉率，3 個月內達成。",
      },
      {
        value: "1,200 人",
        action: "TA 痛點 × 內容行銷設計",
        label: "銷售型說明會單場報名數，達歷史最高。",
      },
      {
        value: "10%",
        action: "早鳥 / 團報策略穩轉換",
        label: "說明會 → 付費課程轉換率。",
      },
      {
        value: "60% / 90%",
        action: "產品經理學習營整體主理",
        label: "完課率 / 滿意度——驗證課程引導設計與體驗品質。",
      },
    ],
    stack: ["Mixpanel", "Trello", "GA4", "GTM", "Figma"],
    logoColor: "#C2410C",
  },
  {
    slug: "bohan",
    company: "百瀚智能教育",
    initials: "百瀚",
    title: "Marketing Specialist & Project Manager",
    period: "2023.01 – 2023.09",
    mode: "全職 · 混合型",
    headline:
      "K12 × 27 間線下門市：以 SEO 內容系統 + OMO 追蹤自動化，同時拉流量與跨部門效率。",
    context:
      "K12 科技教育公司，擁有全台 27 間線下門市，提供跨英、數、中文教育服務。",
    owned: [
      "SEO 策略與內容產出",
      "OMO 再行銷 × Chatbot 追蹤架構",
      "跨部門數位轉型專案推動",
      "Yourator 線下招募活動（彈性專案）",
    ],
    metrics: [
      {
        value: "60x",
        action: "SEO 架構 × 長尾內容規模化",
        label: "官網日均流量從 100 → 6,000。",
      },
      {
        value: "2.5x",
        action: "Yourator 線下招募活動策劃",
        label: "年對年招募活動投遞數成長。",
      },
      {
        value: "27 門市",
        action: "串接 Chatbot × Email × CRM",
        label: "全台門市顧客行為統一追蹤。",
      },
    ],
    stack: ["SEO", "Google Analytics", "Chatbot", "Apps Script"],
    logoColor: "#047857",
  },


];

const projects: ProjectData[] = [
  {
    number: "01",
    title: "訂閱制學習平台關站與用戶移轉",
    role: "PM × 跨職能領導",
    period: "商業思維學院 · 2024 Q1–Q2",
    desc: "訂閱制學習平台要停止營運，同時盡可能減少爭議、退費成本，並在符合規格情況下，將服務搬到新系統。",
    tags: ["SaaS 系統專案", "UIUX", "QA", "營運"],
    metrics: [
      { value: "60%", label: "3 個月內移轉達成率" },
      { value: "低於 1%", label: "退費率" },
    ],
    challenge:
      "平台要停止營運但服務不能斷。技術、營運、客服三方各有限制，且有過往的營運債需要償還，如何在有限期限內，在不影響用戶權益及觸發大量退費下，將技術、產品規格轉換成符合新平台需求狀態下，盡可能推動用戶完成移轉。",
    approach: [
      "釐清舊系統功能與新平台對應，識別 60+ 個功能斷點",
      "依用戶狀態設計分群分批推動移轉營運策略（購買金額、上線狀況、社群互動率等）",
      "以營運事件觸發用戶主動遷移（非強制），同時前置客服 FAQ 與退款政策",
      "每週監控移轉率與流失信號，動態調整節奏",
    ],
    stack: ["Mixpanel", "Figma", "Trello", "CRM"],
    vizLabel: "完整 4 階段流程",
  },
  {
    number: "02",
    title: "多產品線行銷資源分配框架",
    role: "行銷策略 × 決策系統",
    period: "職游 · 2024–2025",
    desc: "多產品線環境下，把預算從「主管直覺」變成「數字 + 邏輯」。",
    tags: ["行銷策略", "資源分配", "決策框架"],
    metrics: [
      { value: "5 維度", label: "評估指標" },
      { value: "3 模式", label: "Invest / Optimize / Sunset" },
    ],
    challenge:
      "5+ 個產品線同時競爭有限行銷資源，過去品牌主要靠直覺分配，導致結果跟成效對不起來。缺一個以利潤為基礎的決策框架。",
    approach: [
      "以淨利 × 市場規模 × 成熟度 × 可行性 × 實際轉換率 5 維度評估每條產品線",
      "對應 3 種資源處理模式：Investment（擴張投入）、Optimization（效率優化）、Sunset（逐步退場）",
      "框架輸出即是下一季的預算與資源分配表，每次會議都從同一張圖開始對齊",
      "實際應用於季度預算決策，把產品線取捨從主觀討論轉為可驗證的框架對話",
    ],
    stack: ["Notion", "Looker Studio", "策略框架設計"],
    vizLabel: "評估維度 × 決策模式",
  },
  {
    number: "03",
    title: "行銷營運自動化 × 追蹤 Dashboard",
    role: "Marketing Ops × 自動化工程",
    period: "職游 · 2024–2025",
    desc: "把業務開發、課程營運行政、行銷銷售追蹤三條流整合成單一 self-update Dashboard。",
    tags: ["自動化", "漏斗工程", "追蹤架構"],
    metrics: [
      { value: "2-3 hr / 日", label: "取代的人工對齊時間" },
      { value: "3 streams", label: "跨平台事件流整合" },
    ],
    challenge:
      "每週人工彙整跨系統報表與行政業務處理 → 數據延遲、漏看關鍵信號，耗費大量人力。業務開發、營運行政、行銷追蹤分散在 3 個系統，沒人能即時看到整體狀態。",
    approach: [
      "用 n8n 串起事件觸發、條件分流、跨系統寫入",
      "Apps Script 處理 Google Sheets / GA4 / CRM 的批次同步",
      "三條 stream 最後匯流到同一個 Looker Dashboard，每個節點可即時查看",
      "行政事項依據固定規格自動執行，減少人為疏失",
    ],
    stack: ["n8n", "Apps Script", "GA4", "GTM", "Looker Studio", "API"],
    vizLabel: "三流匯流 Dashboard",
  },
];

const leadershipSignals = [
  {
    slug: "ncut",
    name: "國立臺中科技大學",
    initials: "中科大",
    color: "#B45309",
    title: "職涯講座｜從校園到職場",
    period: "2026.04",
    headline:
      "為大三大四學生設計從校園過渡到職場的實務框架，拆解職涯決策順序、對上溝通、能力累積優先序。",
    demonstrates: "知識系統化 × 對群體說話的結構能力",
  },
  {
    slug: "coaching",
    name: "1:1 職涯諮詢",
    initials: "1:1",
    color: "#6366F1",
    title: "1:1 深度職涯諮詢",
    period: "2024 – 至今",
    headline:
      "為早期職涯與轉職者提供深度諮詢，以局面 × 利害關係人 × 目標三層分析協助做職涯決策。",
    demonstrates: "個案診斷 × 長期 mentorship",
  },
  {
    slug: "facilitation",
    name: "跨部門協作引導",
    initials: "X-Func",
    color: "#0891B2",
    title: "跨部門議題釐清與協作引導",
    period: "2024 – 至今",
    headline:
      "協助多個組織進行跨部門議題釐清，以利害關係人分析與組織結構圖設計對齊機制、推動共識形成。",
    demonstrates: "利害關係人管理 × 共識推動",
  },
];

const skills = {
  marketing: [
    "策略與定位", "資源分配框架", "Performance Marketing",
    "Lifecycle & CRM", "SEO 與內容", "行銷分析", "A/B 測試", "漏斗優化",
  ],
  operations: [
    "跨職能領導", "專案移轉", "流程設計", "利害關係人管理",
  ],
  tools: [
    "n8n", "GA4", "GTM", "Looker Studio", "Clarity", "Zapier", "Google Apps Script",
  ],
  coaching: [
    "職涯諮詢", "人才洞察", "1:1 Mentorship", "公開講座",
  ],
};

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="pt-20 sm:pt-28 pb-16 sm:pb-20">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-sm text-[color:var(--color-muted)] font-mono mb-5">
              Hi, I&apos;m Arth Lai <span aria-hidden>👋</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-[color:var(--color-fg-strong)] mb-6">
              Full-stack Marketer.
              <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-medium text-[color:var(--color-fg)]">
                橫跨營運、產品、行銷。
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-[color:var(--color-fg)] mb-4 leading-relaxed">
              擁有橫跨
              <span className="text-[color:var(--color-accent)] font-semibold">
                行銷、營運、產品
              </span>
              三個領域，從依照利潤、盈利可能性設定產品行銷策略、流量擴大執行、用戶體驗及轉換優化，能從多個面向結合 AI 及自動化應用，於策略、執行、技術三層同時做決策與落地。
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-base text-[color:var(--color-muted)] mb-10">
              目前尋找 Remote-first 的 B2B SaaS 與 AI 原生團隊資深行銷 / 營運 /
              Supervisor 職位。
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center px-5 py-2.5 bg-[color:var(--color-accent)] text-white text-sm font-medium hover:bg-[color:var(--color-accent-hover)] transition-colors"
              >
                看專案 →
              </a>
              <a
                href="/cv"
                className="inline-flex items-center px-5 py-2.5 border border-[color:var(--color-accent)] text-[color:var(--color-accent)] text-sm font-medium hover:bg-[color:var(--color-accent)] hover:text-white transition-colors"
              >
                下載履歷 PDF
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 border border-[color:var(--color-subtle)] text-[color:var(--color-fg)] text-sm font-medium hover:border-[color:var(--color-accent)] transition-colors"
              >
                聯繫
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── About ── */}
      <Section
        id="about"
        className="border-t border-[color:var(--color-subtle)] !py-16 sm:!py-20"
      >
        <div className="container-narrow">
          <FadeIn>
            <SectionTitle eyebrow="About" title="關於我" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-[17px] text-[color:var(--color-fg)] leading-relaxed">
              <p>
                7 年行銷資歷，從中小企業媒體投放、內容、SEO 基礎動手累積起家，近 4 年進入
                <span className="text-[color:var(--color-fg-strong)] font-semibold">
                  Full-Stack Marketing 實戰
                </span>
                階段——在 3 間不同產業的公司同時處理策略、營運與技術實作。
              </p>
              <p>
                於
                <span className="text-[color:var(--color-fg-strong)] font-semibold">
                  職游
                </span>
                為多產品線設計資源分配框架，將主資源投入高利潤 / 轉換率培訓班產品，推動 2025 年度培訓班最高報名人數，及逾 2 百萬元營收；於
                <span className="text-[color:var(--color-fg-strong)] font-semibold">
                  商業思維學院
                </span>
                主導平台關站及移轉專案，於 3 個月內完成規格釐清、系統前後端設計規劃，並推動 60% 的用戶完成移轉，並降低達數百萬元的退費風險；在
                <span className="text-[color:var(--color-fg-strong)] font-semibold">
                  百瀚
                </span>
                協助數位轉型，設計 OMO 銷售與行銷自動化系統，以達全國各分校及線上端，從初次觸客到最後轉換的數據脈絡。
              </p>
              <p>
                這些經驗讓我具備{" "}
                <span className="text-[color:var(--color-accent)] font-semibold">
                  full-stack marketing
                </span>{" "}
                的完整 know-how，懂策略、懂執行、也懂工程與 AI 工作流程，能將重複性工作寫成系統，讓整個團隊跑得更快。
              </p>
              <p>
                教育業 B2C（高單價 × 長決策週期）與 B2B（企業內訓 × 顧問合約）訓練出的 retention、expansion、客戶成功肌肉，可直接 transfer 至 B2B SaaS 的 ARR 成長、upsell 與續約情境。
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ── Work Experience ── */}
      <Section
        id="experience"
        className="border-t border-[color:var(--color-subtle)] !py-16 sm:!py-20"
      >
        <div className="container-narrow">
          <FadeIn>
            <SectionTitle
              eyebrow="Work Experience"
              title="工作經歷"

            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="border-t border-[color:var(--color-subtle)]">
              {experiences.map((exp) => (
                <ExperienceItem key={exp.slug} data={exp} />
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-8 flex">
              <a
                href="https://www.linkedin.com/in/arth-lai-09882b136/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-accent)] hover:gap-3 transition-all"
              >
                在 LinkedIn 查看完整經歷
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ── Coaching & Speaking (Leadership Signals) ── */}
      <Section
        id="leadership"
        className="border-t border-[color:var(--color-subtle)] !py-16 sm:!py-20"
      >
        <div className="container-narrow">
          <FadeIn>
            <SectionTitle
              eyebrow="Coaching & Speaking"
              title="職涯諮詢 × 公開講座"
              description="尚未擔任正式帶人職，但持續透過 1:1 諮詢、大專院校講座、跨部門協作引導累積管理者核心能力——利害關係人管理、組織結構分析、對上溝通。"
            />
          </FadeIn>
          <div className="space-y-0">
            {leadershipSignals.map((item, idx) => (
              <FadeIn key={item.slug} delay={idx * 0.08}>
                <div
                  className="border-l-2 pl-5 py-5 border-b border-b-[color:var(--color-subtle)] last:border-b-0"
                  style={{ borderLeftColor: item.color }}
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-serif text-lg text-[color:var(--color-fg-strong)]">
                      {item.title}
                    </h3>
                    <span className="text-xs text-[color:var(--color-muted)] font-mono">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[15px] text-[color:var(--color-fg)] leading-relaxed">
                    {item.headline}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-[color:var(--color-muted)]">
                    <span className="text-[color:var(--color-accent)]">→</span>
                    <span>{item.demonstrates}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Education ── */}
      <Section
        id="education"
        className="border-t border-[color:var(--color-subtle)] !py-16 sm:!py-20"
      >
        <div className="container-narrow">
          <FadeIn>
            <SectionTitle eyebrow="Education" title="學歷" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-4">
              <BrandLogo
                slug="ncku"
                name="國立成功大學"
                initials="成大"
                size={44}
                color="#7C2D12"
              />
              <div className="flex-1 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-serif text-xl text-[color:var(--color-fg-strong)]">
                  國立成功大學
                </h3>
                <div className="text-sm text-[color:var(--color-muted)]">
                  經濟學系 · 2017 畢業
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ── Skills ── */}
      <Section
        id="skills"
        className="border-t border-[color:var(--color-subtle)] !py-16 sm:!py-20"
      >
        <div className="container-narrow">
          <FadeIn>
            <SectionTitle eyebrow="Skills" title="能力" />
          </FadeIn>
          <div className="space-y-6">
            {(
              [
                { label: "Marketing", items: skills.marketing },
                { label: "Operations", items: skills.operations },
                { label: "Tools", items: skills.tools },
                { label: "Coaching", items: skills.coaching },
              ] as const
            ).map((group, i) => (
              <FadeIn key={group.label} delay={i * 0.08}>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                  <div className="text-xs uppercase tracking-wider text-[color:var(--color-accent)] font-mono sm:w-28 shrink-0 pt-1">
                    {group.label}
                  </div>
                  <div className="text-[color:var(--color-fg)] leading-relaxed flex-1">
                    {group.items.join(" · ")}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Projects (main focus) ── */}
      <Section
        id="projects"
        className="border-t border-[color:var(--color-subtle)] !py-16 sm:!py-20"
      >
        <div className="container-wide">
          <FadeIn>
            <SectionTitle
              eyebrow="Projects"
              title="專案經歷"
              description="三個代表性專案，點擊展開視覺化流程，呈現實際策略執行的思維脈絡。"
            />
          </FadeIn>
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <ProjectCard data={projects[0]}>
                <ProjectTimeline />
              </ProjectCard>
            </FadeIn>
            <FadeIn delay={0.15}>
              <ProjectCard data={projects[1]}>
                <ProjectMatrix />
              </ProjectCard>
            </FadeIn>
            <FadeIn delay={0.2}>
              <ProjectCard data={projects[2]}>
                <ProjectFlows />
              </ProjectCard>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* ── Contact ── */}
      <Section
        id="contact"
        className="border-t border-[color:var(--color-subtle)] !py-16 sm:!py-20"
      >
        <div className="container-narrow">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl text-[color:var(--color-fg-strong)] mb-5">
              Let&apos;s connect
            </h2>
            <p className="text-base text-[color:var(--color-muted)] leading-relaxed mb-8">
              正在尋找下一個能深耕的團隊。如果你的組織需要結合行銷策略與系統化執行的人，歡迎聯繫。
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:bo.heng.lai@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[color:var(--color-accent)] text-white text-sm font-medium hover:bg-[color:var(--color-accent-hover)] transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/arth-lai-09882b136/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[color:var(--color-subtle)] text-[color:var(--color-fg)] text-sm font-medium hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="/cv"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[color:var(--color-subtle)] text-[color:var(--color-fg)] text-sm font-medium hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Resume PDF
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="mt-8 text-sm text-[color:var(--color-muted)]">
              通常 24 小時內回覆。
            </p>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}

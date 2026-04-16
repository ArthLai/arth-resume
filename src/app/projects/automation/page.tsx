import { CaseStudyHeader, CaseSection } from "@/components/CaseStudy";

export const metadata = {
  title: "端到端行銷自動化系統 — Arth Lai",
};

const streams = [
  {
    number: "Stream 1",
    title: "業務交接",
    flow: "潛客捕捉 → 評分 → 路由 → 通知 → CRM 同步",
    tools: "[TBD]",
    solves: "[TBD]",
  },
  {
    number: "Stream 2",
    title: "顧客旅程",
    flow: "觸發事件 → 分群 → 個人化 → 投遞 → 衡量",
    tools: "[TBD]",
    solves: "[TBD]",
  },
  {
    number: "Stream 3",
    title: "追蹤與歸因",
    flow: "事件 schema 設計 → 實作 → 驗證 → 報表",
    tools: "GA4、GTM、Looker Studio、Clarity、[TBD]",
    solves: "[TBD]",
  },
];

export default function AutomationCase() {
  return (
    <article className="container-narrow py-16 sm:py-20">
      <CaseStudyHeader
        number="03"
        title="端到端行銷自動化系統"
        summary="設計並建置橫跨業務交接、顧客旅程、追蹤的自動化系統——每月處理 [TBD] 個事件，取代 [TBD] 個手動流程。"
        meta={[
          { label: "角色", value: "[TBD]" },
          { label: "時間", value: "[TBD]" },
          { label: "事件量", value: "[TBD] / 月" },
          { label: "節省人力", value: "[TBD]" },
        ]}
      />

      <CaseSection eyebrow="The Challenge" title="挑戰">
        <p>[TBD：自動化前的痛點]</p>
      </CaseSection>

      <CaseSection eyebrow="Architecture" title="系統架構">
        <p className="mb-6">三條獨立但連動的自動化流：</p>
        <div className="space-y-4">
          {streams.map((s) => (
            <div
              key={s.number}
              className="border border-[color:var(--color-subtle)] p-5"
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-mono text-xs text-[color:var(--color-accent)] uppercase tracking-wider">
                  {s.number}
                </span>
                <h3 className="font-serif text-xl text-[color:var(--color-fg)]">
                  {s.title}
                </h3>
              </div>
              <div className="font-mono text-sm text-[color:var(--color-muted)] mb-3 leading-relaxed">
                {s.flow}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-1 text-sm">
                <div className="text-[color:var(--color-muted)]">工具</div>
                <div className="text-[color:var(--color-fg)]">{s.tools}</div>
                <div className="text-[color:var(--color-muted)]">解決</div>
                <div className="text-[color:var(--color-fg)]">{s.solves}</div>
              </div>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection eyebrow="Build vs Buy" title="自建 vs 採購">
        <p>[TBD：哪些用 SaaS 工具、哪些自建、為什麼]</p>
      </CaseSection>

      <CaseSection eyebrow="Outcome" title="成果">
        <ul className="space-y-2">
          <li className="pl-5 relative">
            <span className="absolute left-0 top-3 w-2 h-px bg-[color:var(--color-accent)]" />
            月處理事件量：[TBD]
          </li>
          <li className="pl-5 relative">
            <span className="absolute left-0 top-3 w-2 h-px bg-[color:var(--color-accent)]" />
            節省人力時間：[TBD]
          </li>
          <li className="pl-5 relative">
            <span className="absolute left-0 top-3 w-2 h-px bg-[color:var(--color-accent)]" />
            對轉換 / 留存的影響：[TBD]
          </li>
        </ul>
      </CaseSection>

      <CaseSection eyebrow="Reflection" title="反思">
        <p>[TBD]</p>
      </CaseSection>
    </article>
  );
}

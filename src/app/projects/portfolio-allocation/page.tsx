import { CaseStudyHeader, CaseSection } from "@/components/CaseStudy";

export const metadata = {
  title: "多產品線資源分配框架 — Arth Lai",
};

const dimensions = [
  {
    name: "毛利 Margin",
    question: "這條線單位毛利如何？",
  },
  {
    name: "市場規模 Market Size",
    question: "TAM / 可觸及市場有多大？",
  },
  {
    name: "成熟度 Maturity",
    question: "是否已 PMF？需要 invest 還是 optimize？",
  },
  {
    name: "可行性 Feasibility",
    question: "我們有資源/能力把它做大嗎？",
  },
];

const decisions = [
  {
    label: "Optimization mode",
    cn: "守、提效",
    rule: "高毛利 + 高成熟",
  },
  {
    label: "Investment mode",
    cn: "攻、加碼",
    rule: "高市場 + 低成熟",
  },
  {
    label: "Sunset mode",
    cn: "撤、停損",
    rule: "低毛利 + 低市場",
  },
];

export default function PortfolioCase() {
  return (
    <article className="container-narrow py-16 sm:py-20">
      <CaseStudyHeader
        number="02"
        title="多產品線資源分配框架"
        summary="建構 4 軸評估模型，重新排序 [TBD] 條產品線、重分配 [TBD]% 的行銷預算。"
        meta={[
          { label: "角色", value: "[TBD]" },
          { label: "時間", value: "[TBD]" },
          { label: "產品線", value: "[TBD] 條" },
          { label: "預算規模", value: "[TBD]" },
        ]}
      />

      <CaseSection eyebrow="The Challenge" title="挑戰">
        <p>[TBD：為什麼需要重新分配？舊狀況有什麼問題]</p>
      </CaseSection>

      <CaseSection eyebrow="Approach" title="評估框架">
        <p className="mb-6">為每條產品線評估四個維度：</p>
        <div className="border border-[color:var(--color-subtle)] divide-y divide-[color:var(--color-subtle)]">
          {dimensions.map((d) => (
            <div key={d.name} className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-4">
              <div className="font-mono text-sm text-[color:var(--color-fg)]">
                {d.name}
              </div>
              <div className="sm:col-span-2 text-[color:var(--color-muted)]">
                {d.question}
              </div>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection eyebrow="Decision Logic" title="決策邏輯">
        <div className="space-y-3">
          {decisions.map((d) => (
            <div
              key={d.label}
              className="border border-[color:var(--color-subtle)] p-4"
            >
              <div className="flex flex-wrap items-baseline gap-3 mb-1">
                <span className="font-mono text-sm text-[color:var(--color-accent)]">
                  {d.rule}
                </span>
                <span className="text-[color:var(--color-muted)]">→</span>
                <span className="font-medium text-[color:var(--color-fg)]">
                  {d.label}
                </span>
                <span className="text-sm text-[color:var(--color-muted)]">
                  （{d.cn}）
                </span>
              </div>
            </div>
          ))}
          <div className="text-sm text-[color:var(--color-muted)] italic">
            [其他象限的決策邏輯 — 待補]
          </div>
        </div>
      </CaseSection>

      <CaseSection eyebrow="Execution" title="執行">
        <p>[TBD：如何把策略落到行銷團隊、業務團隊、產品團隊]</p>
      </CaseSection>

      <CaseSection eyebrow="Outcome" title="成果">
        <ul className="space-y-2">
          <li className="pl-5 relative">
            <span className="absolute left-0 top-3 w-2 h-px bg-[color:var(--color-accent)]" />
            預算重分配：[TBD：從 X 配置改為 Y 配置]
          </li>
          <li className="pl-5 relative">
            <span className="absolute left-0 top-3 w-2 h-px bg-[color:var(--color-accent)]" />
            成效指標：[TBD：ROAS / CAC / 營收變化]
          </li>
          <li className="pl-5 relative">
            <span className="absolute left-0 top-3 w-2 h-px bg-[color:var(--color-accent)]" />
            組織影響：[TBD：決策節奏改變、團隊聚焦度]
          </li>
        </ul>
      </CaseSection>

      <CaseSection eyebrow="Reflection" title="反思">
        <p>[TBD]</p>
      </CaseSection>
    </article>
  );
}

import {
  CaseStudyHeader,
  CaseSection,
  PhaseList,
} from "@/components/CaseStudy";

export const metadata = {
  title: "商業思維學院關站與用戶移轉 — Arth Lai",
};

export default function MigrationCase() {
  return (
    <article className="container-narrow py-16 sm:py-20">
      <CaseStudyHeader
        number="01"
        title="商業思維學院關站與用戶移轉"
        summary="主導 [TBD 平台名] 的營運驅動關站專案——透過重新設計的 UX 與移轉流程，留存 [TBD]% 用戶。"
        meta={[
          { label: "角色", value: "[TBD — 主導 / 共同負責]" },
          { label: "時間", value: "[TBD]" },
          { label: "團隊", value: "[TBD：跨職能 / 人數]" },
          { label: "規模", value: "[TBD：用戶數]" },
        ]}
      />

      <CaseSection eyebrow="The Challenge" title="挑戰">
        <p>[TBD：為什麼要關站？商業背景、用戶規模、複雜度來源]</p>
      </CaseSection>

      <CaseSection eyebrow="My Role" title="我的角色">
        <p>[TBD：個人 own 什麼，跟誰協作]</p>
      </CaseSection>

      <CaseSection eyebrow="Approach" title="處理方式">
        <PhaseList
          items={[
            {
              phase: "Phase 1",
              title: "探索與診斷",
              bullets: [
                "釐清產品業務邏輯：產品線、訂閱模式、用戶分群",
                "釐清技術架構：系統依賴、資料所在、移轉可行性",
                "識別利害關係人：用戶、講師、公司、合作方",
              ],
            },
            {
              phase: "Phase 2",
              title: "策略",
              bullets: [
                "移轉目標排序：留存 / 體驗 / 商業延續性",
                "移轉路徑設計：保留什麼、轉到哪、放棄什麼",
                "風險識別與緩解",
              ],
            },
            {
              phase: "Phase 3",
              title: "設計與建置",
              bullets: [
                "User flow 重新設計（移轉路徑）",
                "UI/UX 規劃：移轉頁、新平台落地頁、溝通信件",
                "通知與教育素材",
              ],
            },
            {
              phase: "Phase 4",
              title: "營運與移轉",
              bullets: [
                "分批移轉策略",
                "用戶主動移轉的營運驅動機制",
                "監控與調整",
              ],
            },
          ]}
        />
      </CaseSection>

      <CaseSection eyebrow="Outcome" title="成果">
        <ul className="space-y-2">
          <li className="pl-5 relative">
            <span className="absolute left-0 top-3 w-2 h-px bg-[color:var(--color-accent)]" />
            [TBD：移轉用戶數 / 留存率]
          </li>
          <li className="pl-5 relative">
            <span className="absolute left-0 top-3 w-2 h-px bg-[color:var(--color-accent)]" />
            [TBD：商業層面影響]
          </li>
          <li className="pl-5 relative">
            <span className="absolute left-0 top-3 w-2 h-px bg-[color:var(--color-accent)]" />
            [TBD：用戶滿意度 / 回饋]
          </li>
        </ul>
      </CaseSection>

      <CaseSection eyebrow="Reflection" title="反思">
        <p>[TBD：學到什麼、會怎麼改]</p>
      </CaseSection>
    </article>
  );
}

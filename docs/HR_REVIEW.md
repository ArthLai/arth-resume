# HR / 用人主管 Review Checklist

> Source：2026-04-17 session（03f1d669...）。Claude 模擬 HR / 用人主管視角給的回饋，經 Arth 逐項處理後留下的對照表。

## 已處理 ✅

| # | 項目 | 處理方式 | 檔案位置 |
|---|------|---------|---------|
| 1 | Quick Snapshot 「AI / Cross」語義不直覺 | 改為 4+ / 3 / 60x / 60% 可量化數字 | `src/app/page.tsx` L177–201 |
| 2 | 缺 Hero value proposition | 補「將策略轉化為可交付的系統」+ 副文 | `src/app/page.tsx` L142–156 |
| 3 | 缺履歷 PDF CTA | Hero + Contact 都加了（但 href 還是 `#`） | `src/app/page.tsx` L163, L481 |
| 4 | 職游 metric 最弱違反近期最重要原則 | 加 freelance 身份敘事 + 2 個行框架 metric | `src/app/page.tsx` L57–70 |
| 5 | 技能清單太廣對行銷職位是雜訊 | 分 Marketing / Operations / Tools / Coaching 四群 | `src/app/page.tsx` L110–124 |
| 6 | 職涯諮詢視覺權重過高誤導方向 | 改為 Experience 區塊下的「並行」條目 + 補跨部門協作能力 | `src/app/page.tsx` L291–350 |
| 7 | 缺學歷 | 加成大經濟 2017 | `src/app/page.tsx` L415–428 |
| 8 | Skills 區塊太雜、手機版更糟 | 改為 4 行 inline 文字 | `src/app/page.tsx` L388–413 |
| 9 | 工程技術出現在行銷履歷是雜訊 | 整組移除（Redis、BullMQ、RAG 等） | 已刪除 |
| 10 | Contact CTA 不要直接秀網址 | 改為 Email / LinkedIn / Resume PDF 三個 icon 按鈕 | `src/app/page.tsx` L452–494 |
| 11 | 暗色系下黑底白字閱讀疲勞 | 三層色彩分級（`--color-fg-strong` / `--color-fg` / `--color-muted`）+ line-height 1.75 | `src/app/globals.css` |

## 待處理 🔴

### P0 — 上線前必做

- [ ] **履歷 PDF 實檔**。目前 Hero L163、Contact L481–487 `href="#"`。放 `public/resume.pdf` 後改為 `/resume.pdf` 並加 `download` 屬性。
- [ ] **職游具體數字補齊**。目前 L67–69 兩個 metric 都標「[具體數據待補]」，HR 視角這是紅旗。至少補一個硬數字（ROAS、開發成本節省、轉換率差異）。
- [ ] **favicon 與 OG image**。`public/` 是空的。缺 `favicon.ico`、`og-image.png`（1200×630，用於 LinkedIn / Slack 分享預覽）。
- [ ] **`layout.tsx` 補 `metadataBase`**。沒設的話 Next.js 會對 OG URL 發 warning，且社群平台抓不到完整 URL。

### P1 — 影響專業度

- [ ] **英文版**（你明確說最後做）。國際遠端目標職位 + 全中文 = 語言錯配紅旗。建議作法：`/en` 路由 或 i18n middleware，先從 Hero / Experience / Projects 翻起。
- [ ] **Calendly 整合**。Contact 只有 Email / LinkedIn / PDF 三個按鈕，缺「直接預約 20 分鐘」入口 → 減少 HR 要排時間的摩擦。
- [ ] **帶人規模 / 預算規模**。先前 review 指出三份工作都沒寫「管幾個人」「動多少預算」，這是 Supervisor 職缺的直接篩選條件。建議在 `experiences[].teamSize` 或新欄位補。
- [ ] **第三方推薦（Testimonials）**。LinkedIn 推薦、合作夥伴一句話引用，對自由職業者特別重要（彌補「為什麼不是全職」的疑問）。

### P2 — 差異化加分

- [ ] **作品集深度頁**。目前三個專案都是單卡 + 視覺化元件，但沒有「點進去看更多」。用人主管如果想深挖會卡住。決策：要做 deep-dive 頁，還是接受「就是概覽」。
- [ ] **最近一次演講 / 發表紀錄**。中科大 4/29 講座已經在 Coaching 區塊 L333，但沒有外部連結 / 投影片 / 錄影。上線後補。
- [ ] **AI 使用案例具體化**。Hero 說「AI 全程參與」，但全站沒一處具體展示 AI 用在哪個環節（prompt library？自動化流程？）。對 AI 原生團隊是剛好加分點。

## 下一步執行順序建議

1. **今天 / 明天**：P0 全清（PDF 接檔、favicon、metadataBase、職游數字至少補一個）
2. **本週內**：Calendly、帶人/預算規模、OG image
3. **5 月初前**（依 2026-04-17 決策暫停內容補完）：P1 剩餘項、英文版啟動

## 備註

- 先前 session（03f1d669）結尾有共識：`arth-resume` 4/18 – 5 月初期間進入 park 狀態，優先處理露營、黑客松、中科大 4/29 講座。上面 P0 仍建議先清乾淨再 park，否則「站上線但 PDF 下載壞掉」會是 HR 視角最糟的情境。

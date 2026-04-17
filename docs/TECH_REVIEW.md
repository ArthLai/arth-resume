# 技術架構 / 元件 Review

> Scope：`src/` 全部、`package.json`、`next.config.ts`、`src/app/layout.tsx`、`src/app/globals.css`、`public/`。日期：2026-04-17。

## TL;DR

- 元件 10 個全數有引用，**無孤兒檔**。依賴乾淨（`next`、`react`、`framer-motion`）。
- **1 個真 bug**：`AnimatedGrid.tsx` useEffect 依賴錯誤，動畫意圖與實際行為不一致。
- **2 個上線前必清**：`public/resume.pdf` 缺檔、`metadataBase` 未設。
- **3 個優化點**：ProjectFlows 無限動畫、MagicCard setState 頻率、Geist Mono 可省。
- 整體程式碼品質高，可閱讀性好，無過度抽象。

---

## 必修

### 1. `src/components/AnimatedGrid.tsx` — useEffect 依賴 bug

**位置**：L31–54

**現況**：
```ts
useEffect(() => {
  const initial: Square[] = Array.from({ length: numSquares }, (_, i) => ({
    key: i,
    col: Math.floor(Math.random() * cols),
    row: Math.floor(Math.random() * rows),
  }));
  setSquares(initial);  // ← 每次 effect 重跑都重置

  const interval = setInterval(() => {
    setSquares((prev) => {
      const idx = Math.floor(Math.random() * prev.length);
      const next = [...prev];
      setCounter((c) => c + 1);  // ← 觸發 counter 變更
      next[idx] = { key: counter + 1, ... };
      return next;
    });
  }, 800);

  return () => clearInterval(interval);
}, [numSquares, cols, rows, counter]);  // ← counter 在依賴裡
```

**問題**：
- 每 800ms `setCounter` 觸發 effect 重新執行
- Effect 重跑時：(1) `setSquares(initial)` 把所有格子**整批重新隨機**、(2) 舊 interval 被 clear、(3) 建立新 interval
- 結果：視覺上每 800ms 全部 12 格同時閃爍重置，而非「每 800ms 替換其中一格」的漸進效果
- 副作用：無謂的 clear/set interval、無謂的重新 random、re-render 負擔

**修法**：
- 把 `counter` 拿出依賴陣列（用 ref 維護）
- 或直接用 `Math.random()` + timestamp 當 key

**修正後邏輯**：effect 只在 mount 時跑一次，setInterval 只建立一次，每 tick 只替換一格。

---

### 2. `public/` 目錄是空的

**影響**：
- `src/app/page.tsx` L163 Hero「下載履歷 PDF」`href="#"`
- `src/app/page.tsx` L481 Contact「Resume PDF」`href="#"`
- 沒有 `og-image.png` → LinkedIn / Slack 分享無預覽
- 沒有自訂 `favicon.ico`（目前 fallback 到 `src/app/favicon.ico` Next.js 預設圖示）

**修法**（需要 Arth 自備檔案）：
1. 放 `public/resume.pdf`
2. `page.tsx` L163 / L481 改 `href="/resume.pdf"` 加 `download`
3. 放 `public/og-image.png`（1200×630）
4. 放 `public/favicon.ico`（32×32 或 SVG）

---

### 3. `src/app/layout.tsx` — 缺 `metadataBase`

**位置**：L23–32

**現況**：
```ts
export const metadata: Metadata = {
  title: "Arth Lai — 資深行銷與營運專業",
  description: "...",
  openGraph: {
    title: "...",
    description: "...",
    type: "website",
  },
};
```

**問題**：OG 沒有絕對 URL，Next.js build 會 warning，社群平台抓不到完整 URL。

**修法**：加一行 `metadataBase: new URL("https://<prod-domain>")`。部署網域（arth.tw 還是自定 subdomain？）確定後回填。

---

## 建議

### 4. `ProjectFlows.tsx` 無限 pulse 動畫

**位置**：L81–97

**現況**：每個 node（3 stream × 5 nodes = 15 個）都有 `repeat: Infinity` 的 pulse 動畫，離開視野仍在跑。

**影響**：持續佔 CPU / 電池，行動裝置感知得到。

**修法**（二選一）：
- 包 `useInView` + `isInView ? 動畫 : {}`
- 用 CSS `@keyframes` + `animation-play-state` 配 IntersectionObserver

**優先度**：低。視覺效果好，使用者不頻繁停留。park 後再處理。

---

### 5. `MagicCard.tsx` onMouseMove setState

**位置**：L16–20

**現況**：每次 mousemove 都 `setState` → React re-render。

**影響**：目前用 9 次（4 capability + 3 project + 2 experience sidecard），桌機端 60fps 感知不到，但屬於正確做法優化。

**修法**：改 `useRef` + `element.style.setProperty('--x', px)`，CSS 用 `var(--x)` 取值。

**優先度**：低。

---

### 6. Geist Mono 可省一個 font request

**現況**：`src/app/layout.tsx` 載 Geist Sans + Geist Mono + Instrument Serif，`latin` subset only。

**font-mono 使用處**：各 eyebrow / section label（`font-mono text-xs uppercase`），非核心視覺元素。

**取捨**：移除 Geist Mono 改用系統 `ui-monospace` 可省約 40–60KB network。視覺差異微小。

**優先度**：低。有量測 Lighthouse 再決定。

---

## 保留（檢查過無問題）

| 項目 | 狀況 |
|------|------|
| 元件引用完整性 | 10 個元件全部被 `page.tsx` 或 `layout.tsx` 引用，無孤兒 |
| `prefers-reduced-motion` | `globals.css` L58–63 全站關閉動畫，無障礙 OK |
| dependencies | 僅 3 個 runtime dep（next、react、framer-motion），乾淨 |
| TypeScript strict | `tsconfig.json` `strict: true`，OK |
| `next.config.ts` | 只設 turbopack root，無冗餘 |
| server / client component 劃分 | `page.tsx` 是 server component，動畫元件各自 `"use client"`，合理 |
| hardcoded data | 資料直接寫在 `page.tsx`，對個人履歷合理（無需 CMS） |

---

## 執行順序建議

**今天**：
1. 修 `AnimatedGrid.tsx` useEffect bug（必做）
2. `layout.tsx` 加 `metadataBase` placeholder（需網域確認）

**上線前**：
3. `public/resume.pdf` + `href` 改導（Arth 自備 PDF）
4. `public/favicon.ico`、`public/og-image.png`

**park 後（5/1 以後）**：
5. ProjectFlows 停動優化
6. MagicCard ref 改寫
7. Geist Mono 移除評估

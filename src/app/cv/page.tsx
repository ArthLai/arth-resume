"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function CV() {
  useEffect(() => {
    document.documentElement.classList.add("cv-active");
    return () => {
      document.documentElement.classList.remove("cv-active");
    };
  }, []);

  return (
    <div className="cv-fullscreen">
      <div className="cv-bar">
        <div className="cv-bar-inner">
          <div className="cv-bar-left">
            <Link href="/" className="cv-back">
              ← 回網站
            </Link>
            <span className="cv-bar-hint">
              瀏覽器列印 → 另存為 PDF
            </span>
          </div>
          <button
            type="button"
            onClick={() => window.print()}
            className="cv-print-btn"
          >
            列印 / 儲存為 PDF
          </button>
        </div>
      </div>

      <article className="cv">
        <header className="cv-header">
          <h1>Arth Lai · 賴柏衡</h1>
          <div className="cv-accent-bar" />
          <div className="cv-subtitle">Full-stack Marketer｜行銷 × 營運 × 產品</div>
          <div className="cv-contact">
            <a href="mailto:bo.heng.lai@gmail.com">bo.heng.lai@gmail.com</a>
            <span className="cv-dot">·</span>
            <a
              href="https://www.linkedin.com/in/arth-lai-09882b136/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="cv-dot">·</span>
            <a href="https://arth-resume.zeabur.app" target="_blank" rel="noopener noreferrer">
              arth-resume.zeabur.app
            </a>
            <span className="cv-dot">·</span>
            <span>Taiwan · Remote-friendly</span>
          </div>
        </header>

        <section className="cv-section">
          <h2>Summary</h2>
          <p>
            6 年行銷資歷，近 4 年進入 Full-Stack Marketing 實戰階段，橫跨行銷策略、營運執行與技術實作。於職游、商業思維學院、百瀚累積多產品線資源分配、平台關站移轉、OMO 數位轉型等實戰經驗。能在策略、執行、技術三層同時做決策與落地，並善用 AI 與自動化工具把重複性工作轉成系統。
          </p>
          <p className="cv-looking">
            目前尋找 Remote-first 的資深行銷 / 營運 / Supervisor 職位。
          </p>
        </section>

        <section className="cv-section">
          <h2>Experience</h2>

          <div className="cv-role">
            <div className="cv-role-head">
              <strong>職游 創新職涯發展與諮詢</strong>
              <span className="cv-period">2024.07 – 2026.03｜自由接案 · 遠距</span>
            </div>
            <div className="cv-role-title">Marketing Specialist</div>
            <ul>
              <li>多產品線行銷策略與資源分配</li>
              <li>
                用戶訪談、TA 洞察與訊息優化（LLM 輔助逐字稿結構化 + 關鍵詞萃取）
              </li>
              <li>全漏斗追蹤（GA4 / GTM / Dashboard）</li>
              <li>自動化工作流（n8n / Apps Script / API）</li>
              <li>官網營運與優化</li>
            </ul>
            <div className="cv-metrics">
              <div>
                <strong>10-15%</strong>
                <span>主力培訓班轉換率提升（新增單日直播課作為入口型產品）</span>
              </div>
              <div>
                <strong>2-3 hr / 日</strong>
                <span>以 n8n × Apps Script 重寫營運 ops，取代人工報表 / CRM 同步 / 跨平台追蹤</span>
              </div>
            </div>
          </div>

          <div className="cv-role">
            <div className="cv-role-head">
              <strong>商業思維學院</strong>
              <span className="cv-period">2023.09 – 2024.07｜正職 · 遠距</span>
            </div>
            <div className="cv-role-title">
              Project Manager / Marketing Operations Specialist
            </div>
            <ul>
              <li>
                PM｜平台關站與用戶移轉專案（技術 × 營運邏輯釐清 → 新平台上線 → 移轉營運）
              </li>
              <li>
                MKT｜主力課程檔期銷售（廣告策略 × 內容行銷 × 銷售組合設計）
              </li>
              <li>OP｜產品經理學習營主理，設計完課率與滿意度機制</li>
            </ul>
            <div className="cv-metrics">
              <div>
                <strong>60%</strong>
                <span>舊平台 → 新平台用戶移轉率（3 個月內達成）</span>
              </div>
              <div>
                <strong>1,200 人</strong>
                <span>銷售型說明會單場報名數（歷史最高）</span>
              </div>
              <div>
                <strong>10%</strong>
                <span>說明會 → 付費課程轉換率</span>
              </div>
              <div>
                <strong>60% / 90%</strong>
                <span>產品經理學習營完課率 / 滿意度</span>
              </div>
            </div>
          </div>

          <div className="cv-role">
            <div className="cv-role-head">
              <strong>百瀚智能教育</strong>
              <span className="cv-period">2023.01 – 2023.09｜全職 · 混合型</span>
            </div>
            <div className="cv-role-title">
              Marketing Specialist &amp; Project Manager
            </div>
            <ul>
              <li>SEO 策略與內容產出</li>
              <li>OMO 再行銷 × Chatbot 追蹤架構</li>
              <li>跨部門數位轉型專案推動</li>
              <li>Yourator 線下招募活動（彈性專案）</li>
            </ul>
            <div className="cv-metrics">
              <div>
                <strong>60x</strong>
                <span>官網日均流量成長（100 → 6,000）</span>
              </div>
              <div>
                <strong>2.5x</strong>
                <span>年對年招募活動投遞數成長</span>
              </div>
              <div>
                <strong>27 門市</strong>
                <span>全台門市顧客行為統一追蹤（串接 Chatbot × Email × CRM）</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h2>Coaching &amp; Speaking</h2>
          <ul className="cv-plain-list">
            <li>
              <strong>國立臺中科技大學 · 職涯講座（2026.04）</strong>｜從校園到職場，為大三大四學生設計職涯決策、對上溝通、能力累積的實務框架
            </li>
            <li>
              <strong>1:1 深度職涯諮詢（2024 – 至今）</strong>｜以局面 × 利害關係人 × 目標三層分析，協助早期職涯與轉職者做職涯決策
            </li>
            <li>
              <strong>跨部門議題釐清與協作引導（2024 – 至今）</strong>｜利害關係人分析與組織結構圖設計對齊機制、推動共識形成
            </li>
          </ul>
        </section>

        <section className="cv-section">
          <h2>Selected Projects</h2>
          <ul className="cv-plain-list">
            <li>
              <strong>訂閱制學習平台關站與用戶移轉</strong>（商業思維學院 · 2024 Q1–Q2）｜3 個月內 60% 移轉達成、退費率低於 1%
            </li>
            <li>
              <strong>多產品線行銷資源分配框架</strong>（職游 · 2024–2025）｜5 維度評估 × 3 模式決策（Investment / Optimization / Sunset），應用於季度預算會議
            </li>
            <li>
              <strong>行銷營運自動化 × 追蹤 Dashboard</strong>（職游 · 2024–2025）｜業務開發 × 課程營運行政 × 行銷追蹤三流整合，取代 2-3 hr/日人工對齊
            </li>
          </ul>
        </section>

        <section className="cv-section">
          <h2>Education</h2>
          <p>
            <strong>國立成功大學</strong>｜經濟學系，2017 畢業
          </p>
        </section>

        <section className="cv-section">
          <h2>Skills</h2>
          <div className="cv-skills">
            <div>
              <strong>Marketing</strong>
              <span>策略與定位、資源分配框架、Performance Marketing、Lifecycle &amp; CRM、SEO 與內容、行銷分析、A/B 測試、漏斗優化</span>
            </div>
            <div>
              <strong>Operations</strong>
              <span>跨職能領導、專案移轉、流程設計、利害關係人管理</span>
            </div>
            <div>
              <strong>Tools</strong>
              <span>n8n、GA4、GTM、Looker Studio、Clarity、Zapier、Google Apps Script</span>
            </div>
            <div>
              <strong>Coaching</strong>
              <span>職涯諮詢、人才洞察、1:1 Mentorship、公開講座</span>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

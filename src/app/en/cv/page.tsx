"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function CVEn() {
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
            <Link href="/en" className="cv-back">
              ← Back to site
            </Link>
            <span className="cv-bar-hint">
              Browser print → Save as PDF
            </span>
          </div>
          <button
            type="button"
            onClick={() => window.print()}
            className="cv-print-btn"
          >
            Print / Save as PDF
          </button>
        </div>
      </div>

      <article className="cv">
        <header className="cv-header">
          <h1>Arth Lai · Po-Heng Lai</h1>
          <div className="cv-accent-bar" />
          <div className="cv-subtitle">Full-stack Marketer · Marketing × Operations × Product</div>
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
            <a
              href="https://arth-resume.zeabur.app/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              arth-resume.zeabur.app/en
            </a>
            <span className="cv-dot">·</span>
            <span>Taiwan · Remote-friendly</span>
          </div>
        </header>

        <section className="cv-section">
          <h2>Summary</h2>
          <p>
            7 years in marketing, with the last 4 years in a full-stack marketing phase—combining marketing strategy, operations execution, and technical implementation. Across Zhi You, Business Thinking Institute, and Bohan, I accumulated hands-on experience in multi-product resource allocation, platform sunset migration, and OMO digital transformation. I make decisions across strategy, execution, and technical layers simultaneously, and use AI + automation tools to turn repetitive work into systems.
          </p>
          <p className="cv-looking">
            Currently seeking remote-first senior marketing / operations / supervisor roles.
          </p>
        </section>

        <section className="cv-section">
          <h2>Experience</h2>

          <div className="cv-role">
            <div className="cv-role-head">
              <strong>Zhi You · Career Development &amp; Consulting</strong>
              <span className="cv-period">2024.07 – 2026.03 | Freelance · Remote</span>
            </div>
            <div className="cv-role-title">Marketing Specialist</div>
            <ul>
              <li>Multi-product marketing strategy &amp; resource allocation</li>
              <li>
                User interviews, ICP insights &amp; messaging optimization (LLM-assisted transcript structuring + keyword extraction)
              </li>
              <li>Full-funnel tracking (GA4 / GTM / Dashboard)</li>
              <li>Automation workflows (n8n / Apps Script / API)</li>
              <li>Website operations &amp; optimization</li>
            </ul>
            <div className="cv-metrics">
              <div>
                <strong>10–15%</strong>
                <span>
                  Flagship training program conversion lift (via launching a single-day live course as top-of-funnel product)
                </span>
              </div>
              <div>
                <strong>2–3 hr / day</strong>
                <span>
                  Manual work replaced by n8n × Apps Script automation (reports, CRM sync, cross-platform tracking)
                </span>
              </div>
            </div>
          </div>

          <div className="cv-role">
            <div className="cv-role-head">
              <strong>Business Thinking Institute</strong>
              <span className="cv-period">2023.09 – 2024.07 | Full-time · Remote</span>
            </div>
            <div className="cv-role-title">
              Project Manager / Marketing Operations Specialist
            </div>
            <ul>
              <li>
                PM | Platform sunset &amp; user migration project (tech × ops logic → new platform launch → migration ops)
              </li>
              <li>
                MKT | Flagship course cycle sales (ad strategy × content × sales-mix design)
              </li>
              <li>
                OP | Product Manager bootcamp lead—designed completion &amp; satisfaction mechanisms
              </li>
            </ul>
            <div className="cv-metrics">
              <div>
                <strong>60%</strong>
                <span>User migration rate from old to new platform (within 3 months)</span>
              </div>
              <div>
                <strong>1,200</strong>
                <span>All-time-high single-session webinar registrations</span>
              </div>
              <div>
                <strong>10%</strong>
                <span>Webinar → paid course conversion rate</span>
              </div>
              <div>
                <strong>60% / 90%</strong>
                <span>Product Manager bootcamp completion / satisfaction rate</span>
              </div>
            </div>
          </div>

          <div className="cv-role">
            <div className="cv-role-head">
              <strong>Bohan Smart Education</strong>
              <span className="cv-period">2023.01 – 2023.09 | Full-time · Hybrid</span>
            </div>
            <div className="cv-role-title">
              Marketing Specialist &amp; Project Manager
            </div>
            <ul>
              <li>SEO strategy &amp; content production</li>
              <li>OMO remarketing × Chatbot tracking architecture</li>
              <li>Cross-department digital transformation lead</li>
              <li>Yourator offline hiring campaign (flex project)</li>
            </ul>
            <div className="cv-metrics">
              <div>
                <strong>60x</strong>
                <span>Website daily traffic growth (100 → 6,000)</span>
              </div>
              <div>
                <strong>2.5x</strong>
                <span>YoY growth in hiring campaign applications</span>
              </div>
              <div>
                <strong>27 centers</strong>
                <span>Unified customer behavior tracking (Chatbot × Email × CRM)</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h2>Coaching &amp; Speaking</h2>
          <ul className="cv-plain-list">
            <li>
              <strong>
                National Taichung University of Science and Technology · Career Lecture (2026.04)
              </strong>
              {" | "}From Campus to Workplace—a practical framework for juniors and seniors on career decisions, managing upward, and skill-accumulation priority
            </li>
            <li>
              <strong>1:1 Deep Career Coaching (2024 – Present)</strong>
              {" | "}Situation × stakeholders × goals three-layer analysis to support early-career and career-transition clients
            </li>
            <li>
              <strong>
                Cross-department Issue Clarification &amp; Facilitation (2024 – Present)
              </strong>
              {" | "}Stakeholder analysis and org-structure mapping to design alignment mechanisms and drive consensus
            </li>
          </ul>
        </section>

        <section className="cv-section">
          <h2>Selected Projects</h2>
          <ul className="cv-plain-list">
            <li>
              <strong>Subscription Platform Sunset &amp; User Migration</strong> (Business Thinking Institute · 2024 Q1–Q2){" | "}60% migration achieved in 3 months, refund rate below 1%
            </li>
            <li>
              <strong>Multi-Product Marketing Resource Allocation Framework</strong> (Zhi You · 2024–2025){" | "}5-dimension evaluation × 3-mode decision (Investment / Optimization / Sunset), applied in quarterly budget decisions
            </li>
            <li>
              <strong>End-to-End Marketing Ops Automation × Tracking Dashboard</strong> (Zhi You · 2024–2025){" | "}Integrated business development × course ops × marketing tracking, replacing 2–3 hr/day of manual alignment
            </li>
          </ul>
        </section>

        <section className="cv-section">
          <h2>Education</h2>
          <p>
            <strong>National Cheng Kung University</strong> | B.A. in Economics, Class of 2017
          </p>
        </section>

        <section className="cv-section">
          <h2>Skills</h2>
          <div className="cv-skills">
            <div>
              <strong>Marketing</strong>
              <span>
                Strategy &amp; Positioning, Resource Allocation, Performance Marketing, Lifecycle &amp; CRM, SEO &amp; Content, Marketing Analytics, A/B Testing, Funnel Optimization
              </span>
            </div>
            <div>
              <strong>Operations</strong>
              <span>
                Cross-functional Leadership, Project Migration, Process Design, Stakeholder Management
              </span>
            </div>
            <div>
              <strong>Tools</strong>
              <span>
                n8n, GA4, GTM, Looker Studio, Clarity, Zapier, Google Apps Script
              </span>
            </div>
            <div>
              <strong>Coaching</strong>
              <span>
                Career Coaching, Talent Insight, 1:1 Mentorship, Public Speaking
              </span>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

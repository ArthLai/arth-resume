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
    company: "Zhi You · Career Development & Consulting",
    initials: "ZY",
    title: "Marketing Specialist",
    period: "2024.07 – 2026.03",
    mode: "Freelance · Remote",
    headline:
      "Led end-to-end marketing ops across a B2C × B2B consultancy—from strategy to automation—lifting the core product funnel conversion.",
    context:
      "Career consulting startup. B2C: high-ticket live training, recorded courses, 1:1 deep consulting. B2B: corporate training and advisory.",
    owned: [
      "Multi-product-line marketing strategy & resource allocation",
      "User interviews, ICP insights & messaging optimization (LLM-assisted transcript structuring + keyword extraction)",
      "Full-funnel tracking (GA4 / GTM / Dashboard)",
      "Automation workflows (n8n / Apps Script / API)",
      "Website operations & optimization",
    ],
    metrics: [
      {
        value: "10–15%",
        action: "Redesigned entry product × webinar funnel",
        label:
          "Launched a single-day live course as a top-of-funnel product, lifting the flagship training program conversion by 10–15%.",
      },
      {
        value: "2–3 hr / day",
        action: "Rebuilt ops with n8n × Apps Script",
        label:
          "Automated manual reporting, CRM sync, and cross-platform tracking work.",
      },
    ],
    stack: ["GA4", "GTM", "n8n", "Apps Script", "Looker Studio", "Clarity"],
    logoColor: "#1A4FBF",
  },
  {
    slug: "bizthinking",
    company: "Business Thinking Institute",
    initials: "BTI",
    title: "Project Manager / Marketing Operations Specialist",
    period: "2023.09 – 2024.07",
    mode: "Full-time · Remote",
    headline:
      "Triple-hatted PM / marketing / ops—drove platform migration, subscription-based academy operations, and premium course sales in parallel.",
    context:
      "Online business education platform. B2C: subscription-based learning on product, business, and management. B2B: corporate training and advisory.",
    owned: [
      "PM | Platform sunset & user migration project (tech × ops logic → new platform launch → migration ops)",
      "MKT | Flagship course cycle sales (ad strategy × content × sales-mix design)",
      "OP | Product Manager bootcamp lead—designed completion & satisfaction mechanisms",
    ],
    metrics: [
      {
        value: "60%",
        action: "Cross-tech × ops phased migration",
        label: "User migration rate from old to new platform within 3 months.",
      },
      {
        value: "1,200",
        action: "ICP pain-point × content-led campaign",
        label: "All-time-high single-session webinar registrations.",
      },
      {
        value: "10%",
        action: "Early-bird / group deal conversion play",
        label: "Webinar → paid course conversion rate.",
      },
      {
        value: "60% / 90%",
        action: "End-to-end bootcamp ownership",
        label:
          "Completion / satisfaction—validating curriculum design and experience quality.",
      },
    ],
    stack: ["Mixpanel", "Trello", "GA4", "GTM", "Figma"],
    logoColor: "#C2410C",
  },
  {
    slug: "bohan",
    company: "Bohan Smart Education",
    initials: "BH",
    title: "Marketing Specialist & Project Manager",
    period: "2023.01 – 2023.09",
    mode: "Full-time · Hybrid",
    headline:
      "K-12 × 27 offline centers: drove 60x traffic growth via SEO + OMO tracking automation, plus cross-department digital transformation.",
    context:
      "K-12 tech-education company with 27 offline centers across Taiwan, offering English / math / Chinese learning services.",
    owned: [
      "SEO strategy & content production",
      "OMO remarketing × Chatbot tracking architecture",
      "Cross-department digital transformation lead",
      "Yourator offline hiring campaign (flex project)",
    ],
    metrics: [
      {
        value: "60x",
        action: "SEO architecture × long-tail content at scale",
        label: "Website daily traffic grew from 100 → 6,000.",
      },
      {
        value: "2.5x",
        action: "Yourator offline hiring campaign",
        label: "YoY growth in campaign applications.",
      },
      {
        value: "27 centers",
        action: "Connected Chatbot × Email × CRM",
        label: "Unified customer behavior tracking across all centers.",
      },
    ],
    stack: ["SEO", "Google Analytics", "Chatbot", "Apps Script"],
    logoColor: "#047857",
  },
];

const leadershipSignals = [
  {
    slug: "ncut",
    name: "National Taichung University of Science and Technology",
    initials: "NTCUST",
    color: "#B45309",
    title: "Career Lecture | From Campus to Workplace",
    period: "2026.04",
    headline:
      "A practical framework for juniors and seniors bridging campus to workplace—career decision order, managing upward, skill-accumulation priority.",
    demonstrates: "Knowledge systematization × structured public speaking",
  },
  {
    slug: "coaching",
    name: "1:1 Career Coaching",
    initials: "1:1",
    color: "#6366F1",
    title: "1:1 Deep Career Coaching",
    period: "2024 – Present",
    headline:
      "Deep consulting for early-career and career-transition clients—analyzing through situation × stakeholders × goals to support career decisions.",
    demonstrates: "Case diagnosis × long-term mentorship",
  },
  {
    slug: "facilitation",
    name: "Cross-functional Facilitation",
    initials: "X-Func",
    color: "#0891B2",
    title: "Cross-department Issue Clarification & Facilitation",
    period: "2024 – Present",
    headline:
      "Helped multiple organizations clarify cross-department issues—using stakeholder analysis and org-structure mapping to design alignment mechanisms and drive consensus.",
    demonstrates: "Stakeholder management × consensus building",
  },
];

const projects: ProjectData[] = [
  {
    number: "01",
    title: "Subscription Platform Sunset & User Migration",
    role: "PM × Cross-functional Lead",
    period: "Business Thinking Institute · 2024 Q1–Q2",
    desc: "A subscription-based learning platform had to shut down while moving its service to a new system with minimal refund exposure.",
    tags: ["SaaS Migration", "UIUX", "QA", "Operations"],
    metrics: [
      { value: "60%", label: "Migration within 3 months" },
      { value: "<1%", label: "Refund rate" },
    ],
    challenge:
      "The platform had to stop operating without breaking service. Tech, ops, and customer support each had constraints, and legacy operational debt needed to be resolved. The goal: convert the tech/product spec to fit the new platform within a fixed timeline—without triggering mass refunds or hurting user rights.",
    approach: [
      "Mapped legacy features to the new platform, identifying 60+ functional gaps",
      "Designed phased migration by user segment (purchase amount, usage stage, community engagement)",
      "Triggered voluntary migration via operational events (non-forced) with pre-empted FAQ & refund policy",
      "Weekly monitoring of migration rate and churn signals, adjusting pace dynamically",
    ],
    stack: ["Mixpanel", "Figma", "Trello", "CRM"],
    vizLabel: "4-Phase Migration Timeline",
  },
  {
    number: "02",
    title: "Multi-Product Marketing Resource Allocation Framework",
    role: "Marketing Strategy × Decision System",
    period: "Zhi You · 2024–2025",
    desc: "Turned marketing budget decisions from manager intuition into number + logic in a multi-product environment.",
    tags: ["Strategy", "Resource Allocation", "Decision Framework"],
    metrics: [
      { value: "5 Dimensions", label: "Evaluation metrics" },
      { value: "3 Modes", label: "Invest / Optimize / Sunset" },
    ],
    challenge:
      "5+ product lines competed for limited marketing resources. Past allocation relied on manager intuition, with outcomes that didn't match effort. A profit-based decision framework was missing.",
    approach: [
      "5-dimension evaluation per product line: Net Profit × Market Size × Maturity × Feasibility × Actual CVR",
      "Mapped to 3 resource-handling modes: Investment (expand), Optimization (efficiency), Sunset (phase out)",
      "Framework output became the next quarter's budget & resource table—every meeting started from the same map",
      "Applied in quarterly budget decisions, shifting product trade-offs from subjective discussion to verifiable framework conversations",
    ],
    stack: ["Notion", "Looker Studio", "Strategy Framework Design"],
    vizLabel: "Dimensions × Decision Modes",
  },
  {
    number: "03",
    title: "End-to-End Marketing Ops Automation × Tracking Dashboard",
    role: "Marketing Ops × Automation Engineering",
    period: "Zhi You · 2024–2025",
    desc: "Integrated business development, course ops, and marketing/sales tracking into a single self-update dashboard.",
    tags: ["Automation", "Funnel Engineering", "Tracking Architecture"],
    metrics: [
      { value: "2–3 hr / day", label: "Manual alignment time saved" },
      { value: "3 streams", label: "Cross-platform event-stream integration" },
    ],
    challenge:
      "Weekly manual reporting and admin work caused data delays and missed signals. Business development, ops, and tracking sat in 3 separate systems—no one could see the whole state in real time.",
    approach: [
      "Used n8n to chain event triggers, conditional routing, cross-system writes",
      "Apps Script handled batch sync across Google Sheets / GA4 / CRM",
      "Three streams converged into one Looker dashboard with real-time visibility at every node",
      "Admin tasks auto-executed via fixed rules, reducing human error",
    ],
    stack: ["n8n", "Apps Script", "GA4", "GTM", "Looker Studio", "API"],
    vizLabel: "Three-Stream Convergence Dashboard",
  },
];

const skills = {
  marketing: [
    "Strategy & Positioning",
    "Resource Allocation",
    "Performance Marketing",
    "Lifecycle & CRM",
    "SEO & Content",
    "Marketing Analytics",
    "A/B Testing",
    "Funnel Optimization",
  ],
  operations: [
    "Cross-functional Leadership",
    "Project Migration",
    "Process Design",
    "Stakeholder Management",
  ],
  tools: [
    "n8n",
    "GA4",
    "GTM",
    "Looker Studio",
    "Clarity",
    "Zapier",
    "Google Apps Script",
  ],
  coaching: [
    "Career Coaching",
    "Talent Insight",
    "1:1 Mentorship",
    "Public Speaking",
  ],
};

export default function HomeEn() {
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
              <br />
              Marketing × Operations × Product.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-[color:var(--color-fg)] mb-4 leading-relaxed">
              7 years spanning{" "}
              <span className="text-[color:var(--color-accent)] font-semibold">
                marketing, operations, and product
              </span>
              —from profit-based product strategy and funnel growth to UX &amp; conversion optimization. I integrate AI and automation throughout, making decisions across strategy, execution, and technical layers simultaneously.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-base text-[color:var(--color-muted)] mb-10">
              Currently seeking remote-first senior marketing / ops / supervisor roles at B2B SaaS and AI-native teams.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center px-5 py-2.5 bg-[color:var(--color-accent)] text-white text-sm font-medium hover:bg-[color:var(--color-accent-hover)] transition-colors"
              >
                View Projects →
              </a>
              <a
                href="/en/cv"
                className="inline-flex items-center px-5 py-2.5 border border-[color:var(--color-accent)] text-[color:var(--color-accent)] text-sm font-medium hover:bg-[color:var(--color-accent)] hover:text-white transition-colors"
              >
                Download Resume PDF
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 border border-[color:var(--color-subtle)] text-[color:var(--color-fg)] text-sm font-medium hover:border-[color:var(--color-accent)] transition-colors"
              >
                Contact
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
            <SectionTitle eyebrow="About" title="About Me" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-[17px] text-[color:var(--color-fg)] leading-relaxed">
              <p>
                7 years in marketing—starting hands-on with media buying, content, and SEO at SMBs, then evolving into{" "}
                <span className="text-[color:var(--color-fg-strong)] font-semibold">
                  full-stack marketing
                </span>{" "}
                over the last 4 years—handling strategy, operations, and technical execution in parallel at 3 companies across different industries.
              </p>
              <p>
                At{" "}
                <span className="text-[color:var(--color-fg-strong)] font-semibold">
                  Zhi You
                </span>
                , designed a resource allocation framework across multiple product lines, directing primary resources to high-margin / high-conversion training products—driving the highest training program enrollment of 2025 and over NT$2M in revenue. At{" "}
                <span className="text-[color:var(--color-fg-strong)] font-semibold">
                  Business Thinking Institute
                </span>
                , led the platform sunset and migration project—completing spec clarification, front/back-end redesign, and driving 60% user migration within 3 months, reducing refund risk by several million NTD. At{" "}
                <span className="text-[color:var(--color-fg-strong)] font-semibold">
                  Bohan
                </span>
                , led digital transformation, designing OMO sales and marketing automation systems to unify customer journey tracking from first-touch to conversion across all offline centers and online channels.
              </p>
              <p>
                These experiences gave me the complete{" "}
                <span className="text-[color:var(--color-accent)] font-semibold">
                  full-stack marketing
                </span>{" "}
                know-how—strategy, execution, and engineering/AI workflows—so I can turn repetitive work into systems and help the whole team move faster.
              </p>
              <p>
                The retention, expansion, and customer-success muscles trained through education B2C (high-ticket × long decision cycles) and B2B (corporate training × advisory contracts) transfer directly to B2B SaaS scenarios—ARR growth, upsell, and renewal.
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
              title="Experience"
              description="Click any entry to expand the full context, scope, outcomes, and stack."
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
                View full history on LinkedIn
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

      {/* ── Coaching & Speaking ── */}
      <Section
        id="leadership"
        className="border-t border-[color:var(--color-subtle)] !py-16 sm:!py-20"
      >
        <div className="container-narrow">
          <FadeIn>
            <SectionTitle
              eyebrow="Coaching & Speaking"
              title="Career Coaching × Public Speaking"
              description="Not yet holding a formal management title, but continuously building core management competencies through 1:1 coaching, university lectures, and cross-functional facilitation—stakeholder management, organizational analysis, upward communication."
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
            <SectionTitle eyebrow="Education" title="Education" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-4">
              <BrandLogo
                slug="ncku"
                name="National Cheng Kung University"
                initials="NCKU"
                size={44}
                color="#7C2D12"
              />
              <div className="flex-1 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-serif text-xl text-[color:var(--color-fg-strong)]">
                  National Cheng Kung University
                </h3>
                <div className="text-sm text-[color:var(--color-muted)]">
                  B.A. in Economics · Class of 2017
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
            <SectionTitle eyebrow="Skills" title="Skills" />
          </FadeIn>
          <div className="space-y-8">
            {(
              [
                { label: "Marketing", items: skills.marketing },
                { label: "Operations", items: skills.operations },
                { label: "Tools", items: skills.tools },
                { label: "Coaching", items: skills.coaching },
              ] as const
            ).map((group, i) => (
              <FadeIn key={group.label} delay={i * 0.08}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                  <div className="text-sm uppercase tracking-wider text-[color:var(--color-accent)] font-mono sm:w-28 shrink-0 pt-0.5">
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

      {/* ── Projects ── */}
      <Section
        id="projects"
        className="border-t border-[color:var(--color-subtle)] !py-16 sm:!py-20"
      >
        <div className="container-wide">
          <FadeIn>
            <SectionTitle
              eyebrow="Projects"
              title="Selected Work"
              description="Three representative projects. Click to expand the full case study and visualization."
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
              Looking for my next team to invest in long-term. If your org needs someone who combines marketing strategy with systematized execution, let&apos;s talk.
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
                href="/en/cv"
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
              Typically reply within 24 hours.
            </p>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}

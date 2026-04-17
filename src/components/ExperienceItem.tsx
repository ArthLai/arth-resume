"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "./BrandLogo";

export interface ExperienceData {
  slug: string;
  company: string;
  initials?: string;
  title: string;
  period: string;
  mode: string;
  headline: string;
  context: string;
  owned: string[];
  metrics: { value: string; action?: string; label: string }[];
  stack: string[];
  logoColor?: string;
  parallel?: boolean;
}

export function ExperienceItem({ data }: { data: ExperienceData }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[color:var(--color-subtle)] last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left py-5 flex items-start gap-4 group cursor-pointer"
        aria-expanded={open}
      >
        <BrandLogo
          slug={data.slug}
          name={data.company}
          initials={data.initials}
          size={44}
          color={data.logoColor}
        />

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-serif text-xl text-[color:var(--color-fg-strong)] group-hover:text-[color:var(--color-accent)] transition-colors">
              {data.company}
            </h3>
            {data.parallel && (
              <span className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-accent)] px-1.5 py-0.5 border border-[color:var(--color-accent)]/40">
                並行
              </span>
            )}
          </div>
          <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm text-[color:var(--color-muted)]">
            <span className="text-[color:var(--color-fg)]">{data.title}</span>
            <span>·</span>
            <span>{data.period}</span>
            <span>·</span>
            <span>{data.mode}</span>
          </div>
          <p className="mt-2 text-[color:var(--color-fg)] text-[15px] leading-relaxed">
            {data.headline}
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--color-accent)] group-hover:gap-2.5 transition-all">
            {open ? "收合詳情" : "查看詳情"}
            <motion.svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.25 }}
              aria-hidden
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </motion.svg>
          </div>
        </div>

        <motion.span
          className="shrink-0 mt-1.5 text-[color:var(--color-muted)] group-hover:text-[color:var(--color-accent)] transition-colors"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          aria-hidden
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="expand"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-[60px] pr-4 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
              <div className="space-y-6">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-accent)] font-mono mb-2">
                    商業模式 / 產品線
                  </div>
                  <p className="text-[color:var(--color-fg)] leading-relaxed text-[15px]">
                    {data.context}
                  </p>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-accent)] font-mono mb-3">
                    負責範圍
                  </div>
                  <ul className="space-y-2">
                    {data.owned.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-[color:var(--color-fg)] leading-relaxed text-[15px] pl-5 relative"
                      >
                        <span className="absolute left-0 top-[0.7em] w-2.5 h-px bg-[color:var(--color-accent)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {data.stack.length > 0 && (
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-accent)] font-mono mb-2">
                      使用工具
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {data.stack.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs px-2 py-1 bg-[color:var(--color-subtle)] text-[color:var(--color-muted)] font-mono"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {data.metrics.length > 0 && (
                <div className="border border-[color:var(--color-subtle)] bg-[color:var(--color-card)] p-5 h-fit">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-accent)] font-mono mb-4">
                    Key Results
                  </div>
                  <div className="space-y-4">
                    {data.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="border-b border-[color:var(--color-subtle)] pb-4 last:border-0 last:pb-0"
                      >
                        <div className="font-serif text-2xl text-[color:var(--color-fg-strong)] mb-1.5 leading-tight">
                          {m.value}
                        </div>
                        {m.action && (
                          <div className="text-[13px] font-semibold text-[color:var(--color-fg)] leading-snug mb-1">
                            {m.action}
                          </div>
                        )}
                        <div className="text-xs text-[color:var(--color-muted)] leading-relaxed">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

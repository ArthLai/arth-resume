"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MagicCard } from "./MagicCard";

export interface ProjectData {
  number: string;
  title: string;
  role?: string;
  period?: string;
  desc: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  challenge?: string;
  approach?: string[];
  stack?: string[];
  vizLabel?: string;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-[11px] uppercase tracking-[0.18em] font-mono text-[color:var(--color-accent)] mb-2">
      {children}
    </div>
  );
}

export function ProjectCard({
  data,
  children,
}: {
  data: ProjectData;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <MagicCard className="p-6 sm:p-8">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left group cursor-pointer"
        aria-expanded={open}
      >
        <div className="flex items-start gap-5">
          <div className="font-serif text-2xl sm:text-3xl text-[color:var(--color-accent)] sm:w-12 pt-1 leading-none">
            {data.number}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-2xl sm:text-3xl text-[color:var(--color-fg-strong)] group-hover:text-[color:var(--color-accent)] transition-colors mb-2">
              {data.title}
            </h3>

            {(data.role || data.period) && (
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[color:var(--color-muted)] font-mono mb-3">
                {data.role && <span>{data.role}</span>}
                {data.role && data.period && <span>·</span>}
                {data.period && <span>{data.period}</span>}
              </div>
            )}

            <p className="text-[color:var(--color-fg)] leading-relaxed mb-4 max-w-2xl">
              {data.desc}
            </p>

            {data.metrics.length > 0 && (
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
                {data.metrics.map((m, idx) => (
                  <div key={idx} className="flex items-baseline gap-1.5">
                    <span className="font-serif text-xl text-[color:var(--color-fg-strong)]">
                      {m.value}
                    </span>
                    <span className="text-xs text-[color:var(--color-muted)]">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center gap-2 flex-wrap">
              {data.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 bg-[color:var(--color-subtle)] text-[color:var(--color-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <motion.span
            className="shrink-0 mt-2 text-[color:var(--color-muted)] group-hover:text-[color:var(--color-accent)] transition-colors"
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            aria-hidden
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
          </motion.span>
        </div>

        <div className="mt-4 ml-[68px] inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--color-accent)] group-hover:gap-2.5 transition-all">
          {open ? "收合案例" : "查看完整案例"}
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
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="viz"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-8 mt-6 border-t border-[color:var(--color-subtle)] sm:ml-[68px]">
              {data.challenge && (
                <div className="mb-7">
                  <Eyebrow>Challenge</Eyebrow>
                  <p className="text-[15px] text-[color:var(--color-fg)] leading-relaxed max-w-2xl">
                    {data.challenge}
                  </p>
                </div>
              )}

              {data.approach && data.approach.length > 0 && (
                <div className="mb-7">
                  <Eyebrow>Approach</Eyebrow>
                  <ul className="space-y-2 max-w-2xl">
                    {data.approach.map((step, idx) => (
                      <li
                        key={idx}
                        className="text-[15px] text-[color:var(--color-fg)] leading-relaxed pl-5 relative"
                      >
                        <span className="absolute left-0 top-[0.7em] w-2.5 h-px bg-[color:var(--color-accent)]" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                {data.vizLabel && <Eyebrow>{data.vizLabel}</Eyebrow>}
                {children}
              </div>

              {data.stack && data.stack.length > 0 && (
                <div className="mt-7">
                  <Eyebrow>Stack</Eyebrow>
                  <div className="flex flex-wrap gap-1.5">
                    {data.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-1 bg-[color:var(--color-subtle)] text-[color:var(--color-muted)] font-mono"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MagicCard>
  );
}

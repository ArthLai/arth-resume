"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const dimensions = [
  { label: "毛利", en: "Margin" },
  { label: "市場規模", en: "Market Size" },
  { label: "成熟度", en: "Maturity" },
  { label: "可行性", en: "Feasibility" },
];

const modes = [
  {
    label: "Investment",
    cn: "攻、加碼",
    condition: "高市場 + 低成熟",
    color: "var(--color-accent)",
    desc: "加碼資源，搶佔市場先機",
  },
  {
    label: "Optimization",
    cn: "守、提效",
    condition: "高毛利 + 高成熟",
    color: "#34D399",
    desc: "維持現有效率，最大化回報",
  },
  {
    label: "Sunset",
    cn: "撤、停損",
    condition: "低毛利 + 低市場",
    color: "#F87171",
    desc: "逐步退出，釋放資源",
  },
];

export function ProjectMatrix() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mt-8">
      {/* Desktop */}
      <div className="hidden sm:block">
        {/* Dimensions row */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-[color:var(--color-muted)] uppercase tracking-wider shrink-0">
            評估維度
          </span>
          <div className="flex gap-2 flex-wrap">
            {dimensions.map((d, i) => (
              <motion.div
                key={d.en}
                className="px-3 py-1.5 border border-[color:var(--color-subtle)] text-sm text-[color:var(--color-fg)] bg-[color:var(--color-card)]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.12 }}
              >
                <span className="text-[color:var(--color-accent)] mr-1.5">{d.label}</span>
                <span className="text-[color:var(--color-muted)] text-xs">{d.en}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Arrow connector */}
        <motion.div
          className="flex items-center gap-2 mb-6 ml-[72px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <div className="w-px h-6 bg-[color:var(--color-accent)] opacity-40" />
          <span className="font-mono text-[10px] text-[color:var(--color-muted)] uppercase tracking-wider">
            依評估結果分配至
          </span>
        </motion.div>

        {/* Decision modes */}
        <div className="grid grid-cols-3 gap-4">
          {modes.map((mode, i) => (
            <motion.div
              key={mode.label}
              className="border border-[color:var(--color-subtle)] bg-[color:var(--color-card)] p-5 relative overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.8 + i * 0.15 }}
            >
              {/* Top accent bar */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ backgroundColor: mode.color }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.0 + i * 0.15 }}
              />
              <div className="font-mono text-xs uppercase tracking-wider mb-2" style={{ color: mode.color }}>
                {mode.label}
              </div>
              <div className="text-sm font-medium text-[color:var(--color-fg)] mb-1">
                {mode.cn}
              </div>
              <div className="text-xs text-[color:var(--color-muted)] mb-3">
                {mode.condition}
              </div>
              <div className="text-xs text-[color:var(--color-muted)] leading-relaxed">
                {mode.desc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flow arrow */}
        <motion.div
          className="mt-6 flex items-center gap-3 text-xs text-[color:var(--color-muted)]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 1.5 }}
        >
          <span className="font-mono uppercase tracking-wider text-[color:var(--color-accent)]">
            Resource Flow
          </span>
          <span className="text-[#F87171]">Sunset</span>
          <motion.div
            className="h-px flex-1 bg-gradient-to-r from-[#F87171] via-[color:var(--color-accent)] to-[#34D399]"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 0.8, delay: 1.7 }}
          />
          <span className="text-[#34D399]">Investment / Optimization</span>
        </motion.div>
      </div>

      {/* Mobile: simplified */}
      <div className="sm:hidden space-y-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {dimensions.map((d, i) => (
            <motion.span
              key={d.en}
              className="text-xs px-2 py-1 border border-[color:var(--color-subtle)] text-[color:var(--color-fg)]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {d.label}
            </motion.span>
          ))}
        </div>
        {modes.map((mode, i) => (
          <motion.div
            key={mode.label}
            className="border-l-2 pl-4 py-2"
            style={{ borderColor: mode.color }}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="font-mono text-xs uppercase tracking-wider mb-1" style={{ color: mode.color }}>
              {mode.label} · {mode.cn}
            </div>
            <div className="text-xs text-[color:var(--color-muted)]">{mode.condition} → {mode.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

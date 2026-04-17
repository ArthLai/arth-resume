"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    number: "01",
    title: "探索與診斷",
    items: ["產品業務邏輯釐清", "技術架構盤點", "利害關係人識別"],
  },
  {
    number: "02",
    title: "策略制定",
    items: ["移轉目標排序", "路徑與取捨設計", "風險識別與緩解"],
  },
  {
    number: "03",
    title: "設計與建置",
    items: ["User Flow 重新設計", "UI/UX 與溝通素材", "分批移轉規劃"],
  },
  {
    number: "04",
    title: "營運與移轉",
    items: ["營運驅動用戶主動移轉", "監控與即時調整", "3 個月達成 60% 移轉"],
  },
];

export function ProjectTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="mt-8">
      {/* Desktop: horizontal timeline */}
      <div className="hidden sm:block">
        <div className="relative">
          {/* Base line */}
          <div className="absolute top-5 left-0 right-0 h-px bg-[color:var(--color-subtle)]">
            <motion.div
              className="h-full bg-[color:var(--color-accent)]"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </div>

          {/* Phase nodes */}
          <div className="grid grid-cols-4 gap-4 relative">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.3,
                  ease: "easeOut",
                }}
              >
                {/* Node dot */}
                <div className="relative mb-6">
                  <motion.div
                    className="w-2.5 h-2.5 rounded-full bg-[color:var(--color-accent)] relative z-10"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.4 + i * 0.3,
                      ease: "easeOut",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="font-mono text-xs text-[color:var(--color-accent)] mb-1">
                  Phase {phase.number}
                </div>
                <h4 className="text-sm font-medium text-[color:var(--color-fg)] mb-3">
                  {phase.title}
                </h4>
                <ul className="space-y-1.5">
                  {phase.items.map((item, j) => (
                    <motion.li
                      key={j}
                      className="text-xs text-[color:var(--color-muted)] leading-relaxed pl-3 relative"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.6 + i * 0.3 + j * 0.1,
                      }}
                    >
                      <span className="absolute left-0 top-[7px] w-1 h-px bg-[color:var(--color-accent)] opacity-50" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Result */}
        <motion.div
          className="mt-10 pt-6 border-t border-[color:var(--color-subtle)] flex items-baseline gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <span className="font-mono text-xs text-[color:var(--color-accent)] uppercase tracking-wider">
            Result
          </span>
          <span className="text-[color:var(--color-fg)]">
            3 個月內達成近 60% 用戶從舊平台至新平台的移轉
          </span>
        </motion.div>
      </div>

      {/* Mobile: vertical simplified */}
      <div className="sm:hidden space-y-6">
        {phases.map((phase, i) => (
          <motion.div
            key={phase.number}
            className="border-l-2 border-[color:var(--color-subtle)] pl-5 relative"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[color:var(--color-accent)]" />
            <div className="font-mono text-xs text-[color:var(--color-accent)] mb-1">
              Phase {phase.number}
            </div>
            <h4 className="text-sm font-medium text-[color:var(--color-fg)] mb-2">
              {phase.title}
            </h4>
            <ul className="space-y-1">
              {phase.items.map((item, j) => (
                <li
                  key={j}
                  className="text-xs text-[color:var(--color-muted)] leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
        <motion.div
          className="pt-4 border-t border-[color:var(--color-subtle)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <span className="font-mono text-xs text-[color:var(--color-accent)] uppercase tracking-wider mr-3">
            Result
          </span>
          <span className="text-sm text-[color:var(--color-fg)]">
            3 個月內達成近 60% 用戶移轉
          </span>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const streams = [
  {
    title: "業務交接",
    en: "Sales Handoff",
    nodes: ["潛客捕捉", "評分篩選", "路由分配", "通知觸發", "CRM 同步"],
  },
  {
    title: "顧客旅程",
    en: "Customer Journey",
    nodes: ["事件觸發", "行為分群", "個人化內容", "多渠道投遞", "成效衡量"],
  },
  {
    title: "追蹤歸因",
    en: "Tracking & Attribution",
    nodes: ["Schema 設計", "埋碼實作", "數據驗證", "跨平台整合", "報表產出"],
  },
];

function StreamColumn({
  stream,
  colIndex,
  isInView,
}: {
  stream: (typeof streams)[0];
  colIndex: number;
  isInView: boolean;
}) {
  const baseDelay = 0.3 + colIndex * 0.25;

  return (
    <div className="flex flex-col items-center">
      {/* Header */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: baseDelay }}
      >
        <div className="font-mono text-xs text-[color:var(--color-accent)] uppercase tracking-wider mb-1">
          {stream.en}
        </div>
        <div className="text-sm font-medium text-[color:var(--color-fg)]">
          {stream.title}
        </div>
      </motion.div>

      {/* Nodes */}
      <div className="flex flex-col items-center gap-0">
        {stream.nodes.map((node, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Connector line above node (except first) */}
            {i > 0 && (
              <motion.div
                className="w-px h-4 bg-[color:var(--color-accent)]"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                style={{ transformOrigin: "top" }}
                transition={{
                  duration: 0.2,
                  delay: baseDelay + 0.15 + i * 0.15,
                }}
              />
            )}
            {/* Node */}
            <motion.div
              className="relative px-3 py-2 border border-[color:var(--color-subtle)] bg-[color:var(--color-card)] text-xs text-[color:var(--color-fg)] w-full text-center"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.3,
                delay: baseDelay + 0.2 + i * 0.15,
              }}
            >
              {node}
              {/* Pulse dot */}
              <motion.div
                className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent)]"
                initial={{ opacity: 0 }}
                animate={
                  isInView
                    ? {
                        opacity: [0, 0.8, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  delay: baseDelay + 1.2 + i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                }}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectFlows() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mt-8">
      {/* Desktop */}
      <div className="hidden sm:block">
        <div className="grid grid-cols-3 gap-6">
          {streams.map((stream, i) => (
            <StreamColumn
              key={stream.en}
              stream={stream}
              colIndex={i}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Convergence */}
        <div className="relative mt-4">
          {/* Three lines converging */}
          <motion.div
            className="flex items-end justify-center gap-0"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 2.0 }}
          >
            <svg
              viewBox="0 0 600 40"
              className="w-full h-10"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 100 0 L 300 35"
                stroke="var(--color-accent)"
                strokeWidth="1"
                fill="none"
                strokeOpacity="0.4"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.5, delay: 2.0 }}
              />
              <motion.path
                d="M 300 0 L 300 35"
                stroke="var(--color-accent)"
                strokeWidth="1"
                fill="none"
                strokeOpacity="0.4"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.5, delay: 2.1 }}
              />
              <motion.path
                d="M 500 0 L 300 35"
                stroke="var(--color-accent)"
                strokeWidth="1"
                fill="none"
                strokeOpacity="0.4"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.5, delay: 2.2 }}
              />
            </svg>
          </motion.div>

          {/* Dashboard node */}
          <motion.div
            className="mx-auto w-fit px-5 py-2.5 border border-[color:var(--color-accent)] bg-[color:var(--color-card)] text-center"
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 2.4 }}
          >
            <div className="font-mono text-xs text-[color:var(--color-accent)] uppercase tracking-wider mb-0.5">
              Output
            </div>
            <div className="text-sm text-[color:var(--color-fg)]">
              Dashboard & 自動化報表
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile: simplified stacked */}
      <div className="sm:hidden space-y-6">
        {streams.map((stream, i) => (
          <motion.div
            key={stream.en}
            className="border-l-2 border-[color:var(--color-accent)] pl-4"
            style={{ borderColor: "rgba(96, 165, 250, 0.5)" }}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="font-mono text-xs text-[color:var(--color-accent)] uppercase tracking-wider mb-1">
              {stream.en}
            </div>
            <div className="text-sm font-medium text-[color:var(--color-fg)] mb-2">
              {stream.title}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {stream.nodes.map((node) => (
                <span
                  key={node}
                  className="text-xs px-2 py-0.5 bg-[color:var(--color-subtle)] text-[color:var(--color-muted)]"
                >
                  {node}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
        <motion.div
          className="pt-3 border-t border-[color:var(--color-subtle)] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="font-mono text-xs text-[color:var(--color-accent)] uppercase tracking-wider mr-2">
            Output
          </span>
          <span className="text-sm text-[color:var(--color-fg)]">
            Dashboard & 自動化報表
          </span>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";

export function MagicCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  function handleMove(e: MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden border border-[color:var(--color-subtle)] bg-[color:var(--color-card)] transition-[border-color] duration-300 ${className}`}
      style={{
        borderColor: hovered ? "rgba(var(--accent-rgb), 0.25)" : undefined,
      }}
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(var(--accent-rgb), 0.08), transparent 60%)`,
        }}
      />
      {/* Border glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(250px circle at ${pos.x}px ${pos.y}px, rgba(var(--accent-rgb), 0.12), transparent 50%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

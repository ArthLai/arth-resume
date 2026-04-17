"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Square {
  key: number;
  col: number;
  row: number;
}

export function AnimatedGridPattern({
  className = "",
  cellSize = 48,
  numSquares = 18,
  maxOpacity = 0.25,
  cols = 24,
  rows = 12,
}: {
  className?: string;
  cellSize?: number;
  numSquares?: number;
  maxOpacity?: number;
  cols?: number;
  rows?: number;
}) {
  const patternId = useId();
  const [squares, setSquares] = useState<Square[]>(() =>
    Array.from({ length: numSquares }, (_, i) => ({
      key: i,
      col: (i * 7) % cols,
      row: (i * 3) % rows,
    })),
  );
  const counterRef = useRef(numSquares);

  useEffect(() => {
    const interval = setInterval(() => {
      setSquares((prev) => {
        const idx = Math.floor(Math.random() * prev.length);
        const next = [...prev];
        counterRef.current += 1;
        next[idx] = {
          key: counterRef.current,
          col: Math.floor(Math.random() * cols),
          row: Math.floor(Math.random() * rows),
        };
        return next;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [numSquares, cols, rows]);

  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={patternId}
          width={cellSize}
          height={cellSize}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
            fill="none"
            stroke="rgba(var(--accent-rgb), 0.08)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      <AnimatePresence mode="popLayout">
        {squares.map((sq) => (
          <motion.rect
            key={sq.key}
            x={sq.col * cellSize + 1}
            y={sq.row * cellSize + 1}
            width={cellSize - 1}
            height={cellSize - 1}
            fill="rgba(var(--accent-rgb), 1)"
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        ))}
      </AnimatePresence>
    </svg>
  );
}

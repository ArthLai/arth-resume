"use client";

import { useEffect, useId, useState } from "react";
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
  const [squares, setSquares] = useState<Square[]>([]);
  const [counter, setCounter] = useState(numSquares);

  useEffect(() => {
    const initial: Square[] = Array.from({ length: numSquares }, (_, i) => ({
      key: i,
      col: Math.floor(Math.random() * cols),
      row: Math.floor(Math.random() * rows),
    }));
    setSquares(initial);

    const interval = setInterval(() => {
      setSquares((prev) => {
        const idx = Math.floor(Math.random() * prev.length);
        const next = [...prev];
        setCounter((c) => c + 1);
        next[idx] = {
          key: counter + 1,
          col: Math.floor(Math.random() * cols),
          row: Math.floor(Math.random() * rows),
        };
        return next;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [numSquares, cols, rows, counter]);

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
            stroke="rgba(96, 165, 250, 0.04)"
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
            fill="rgba(96, 165, 250, 1)"
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

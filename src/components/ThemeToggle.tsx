"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function getSnapshot(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return "light";
}

function subscribe(callback: () => void): () => void {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "切換為白日模式" : "切換為夜間模式"}
      title={isDark ? "白日模式" : "夜間模式"}
      className="inline-flex items-center justify-center w-9 h-9 border border-[color:var(--color-subtle)] text-[color:var(--color-fg)] hover:text-[color:var(--color-accent)] hover:border-[color:var(--color-accent)] transition-colors cursor-pointer"
      suppressHydrationWarning
    >
      {isDark ? (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

"use client";

import { useState } from "react";

export function BrandLogo({
  slug,
  name,
  initials,
  size = 44,
  color = "#1A4FBF",
}: {
  slug: string;
  name: string;
  initials?: string;
  size?: number;
  color?: string;
}) {
  const [failed, setFailed] = useState(false);

  const shown =
    initials ??
    name
      .replace(/[（(].*?[）)]/g, "")
      .replace(/\s+/g, "")
      .slice(0, 2);

  if (failed) {
    return (
      <div
        className="shrink-0 flex items-center justify-center font-serif text-white"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          fontSize: size * 0.42,
          letterSpacing: "-0.02em",
        }}
        aria-label={name}
      >
        {shown}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/logos/${slug}.png`}
      alt={name}
      width={size}
      height={size}
      className="shrink-0 object-cover bg-[color:var(--color-card)]"
      style={{ width: size, height: size }}
      onError={() => setFailed(true)}
    />
  );
}

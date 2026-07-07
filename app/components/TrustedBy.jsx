"use client";

import { useTheme } from "../context/ThemeContext";

/* Brand list — SVG icon + name, flat style like the reference image */
const brands = [
  {
    name: "Microsoft",
    icon: (
      <svg viewBox="0 0 21 21" className="w-6 h-6">
        <rect x="0"  y="0"  width="10" height="10" fill="#f25022"/>
        <rect x="11" y="0"  width="10" height="10" fill="#7fba00"/>
        <rect x="0"  y="11" width="10" height="10" fill="#00a4ef"/>
        <rect x="11" y="11" width="10" height="10" fill="#ffb900"/>
      </svg>
    ),
  },
  {
    name: "Google",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    name: "SpaceX",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2L2 19h20L12 2zm0 3l7.5 13h-15L12 5z"/>
      </svg>
    ),
  },
  {
    name: "Amazon",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 0 1-10.951-.577 17.6 17.6 0 0 1-5.43-3.35c-.1-.1-.157-.205-.134-.32a.39.39 0 0 1 .028-.022zm6.964-6.115c0-1.29.47-2.286 1.406-2.99.93-.7 2.238-1.053 3.917-1.053.47 0 .96.04 1.464.115.504.077.974.192 1.408.347v-.52c0-.832-.248-1.48-.746-1.944-.497-.462-1.24-.695-2.23-.695-.577 0-1.15.094-1.72.283a8.95 8.95 0 0 0-1.55.706c-.21.124-.372.147-.48.07a.483.483 0 0 1-.16-.524l.316-.937c.088-.253.26-.445.512-.576a8.08 8.08 0 0 1 1.672-.63 7.865 7.865 0 0 1 1.936-.234c1.51 0 2.678.39 3.505 1.166.83.778 1.244 1.908 1.244 3.39v5.87c0 .3-.134.45-.4.45h-1.172c-.27 0-.425-.15-.463-.45l-.063-.63c-.418.387-.9.697-1.446.93a4.382 4.382 0 0 1-1.742.348c-.996 0-1.816-.29-2.46-.87-.645-.578-.967-1.378-.967-2.4zm3.26.504c0 .52.17.93.51 1.232.34.3.788.45 1.346.45.46 0 .907-.112 1.34-.336.43-.22.79-.524 1.072-.907v-1.774a8.124 8.124 0 0 0-1.275-.315 8.56 8.56 0 0 0-1.22-.088c-.658 0-1.175.148-1.55.447-.376.3-.563.712-.563 1.234l.34-.943z" fill="#FF9900"/>
      </svg>
    ),
  },
  {
    name: "Meta",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" fill="#0866FF"/>
      </svg>
    ),
  },
  {
    name: "Netflix",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 24c-.011-7.975-.006-16.004.002-24zM5.398 0C5.396 8.07 5.396 16.04 5.4 24c1.265-.06 2.381-.086 3.341-.092z" fill="#E50914"/>
      </svg>
    ),
  },
  {
    name: "Intel",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M7 5h2v14H7zm4 0h2v14h-2zm4 0h2v14h-2z" fill="#0068b5"/>
      </svg>
    ),
  },
  {
    name: "Samsung",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M3 3h18v18H3V3zm9 2a7 7 0 100 14A7 7 0 0012 5zm0 2a5 5 0 110 10A5 5 0 0112 7z" fill="#1428a0"/>
      </svg>
    ),
  },
  {
    name: "Apple",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    ),
  },
  {
    name: "Nvidia",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M9 3v2.4C6.4 5.8 4.2 7.8 3 10.5V21h18V10.5C19.8 7.8 17.6 5.8 15 5.4V3H9zm0 2h6v.4C12.9 5.1 11.1 4.9 9 5zm-4 6c.9-2.1 2.9-3.8 5-4.4v1.5c-1.8.5-3.4 1.6-4.3 3.1L5 11zm14 0-.7-.8c-.9-1.5-2.5-2.6-4.3-3.1V5.6c2.1.6 4.1 2.3 5 4.4z" fill="#76b900"/>
      </svg>
    ),
  },
];

export default function TrustedBy() {
  const { dark } = useTheme();

  const itemColor  = dark ? "rgba(255,255,255,0.38)" : "rgba(30,41,59,0.55)";
  const iconFilter = dark ? "brightness(0) invert(1) opacity(0.4)" : "opacity(0.55)";

  return (
    <section
      className="py-14 border-t transition-colors duration-300"
      style={{
        background:   dark ? "#060b1f" : "#eef2ff",
        borderColor:  dark ? "rgba(255,255,255,0.05)" : "rgba(99,130,255,0.1)",
      }}
    >
      {/* Label */}
      <p
        className="text-center text-[11px] font-semibold tracking-[0.2em] uppercase mb-10 transition-colors duration-300"
        style={{ color: dark ? "#2e3a5c" : "#94a3b8" }}
      >
        Trusted By
      </p>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade left */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: dark
              ? "linear-gradient(90deg, #060b1f, transparent)"
              : "linear-gradient(90deg, #eef2ff, transparent)",
          }}
        />
        {/* Fade right */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: dark
              ? "linear-gradient(270deg, #060b1f, transparent)"
              : "linear-gradient(270deg, #eef2ff, transparent)",
          }}
        />

        {/* Track — items duplicated for seamless loop */}
        <div className="marquee-track items-center gap-16 px-8">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center gap-3 group cursor-default"
            >
              {/* Icon */}
              <span
                className="flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ filter: iconFilter }}
              >
                {brand.icon}
              </span>
              {/* Name */}
              <span
                className="text-base font-semibold tracking-tight whitespace-nowrap transition-colors duration-300"
                style={{ color: itemColor }}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

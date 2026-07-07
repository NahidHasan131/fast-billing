"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { TbDeviceTv, TbPlayerPlay } from "react-icons/tb";

// OTT platform logos as SVG text/icons
const ottPlatforms = [
  { name: "Hulu",    bg: "rgba(28,231,131,0.15)",   color: "#1ce783",  letter: "h" },
  { name: "ESPN",    bg: "rgba(255,52,52,0.15)",     color: "#ff3434",  letter: "E" },
  { name: "HBO",     bg: "rgba(53,113,250,0.15)",    color: "#3571fa",  letter: "H" },
  { name: "Netflix", bg: "rgba(229,9,20,0.15)",      color: "#e50914",  letter: "N" },
  { name: "YouTube", bg: "rgba(255,0,0,0.15)",       color: "#ff0000",  letter: "▶" },
  { name: "Prime",   bg: "rgba(0,168,225,0.15)",     color: "#00a8e1",  letter: "P" },
];

export default function OTTSection() {
  const { dark } = useTheme();

  const sectionBg  = dark ? "#06091c" : "#e8eeff";
  const cardBg     = dark ? "rgba(10,15,42,0.9)" : "rgba(255,255,255,0.9)";
  const titleColor = dark ? "#ffffff" : "#0f172a";
  const textMuted  = dark ? "#8892b0" : "#475569";
  const border     = dark ? "rgba(255,255,255,0.07)" : "rgba(99,130,255,0.15)";

  return (
    <section
      className="py-20 transition-colors duration-300"
      style={{ background: sectionBg }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: dark ? "#3b6ef8" : "#6366f1" }}>
            Entertainment
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 transition-colors duration-300"
            style={{ color: titleColor }}>
            TV & OTT Services
          </h2>
          <p className="text-base max-w-md mx-auto transition-colors duration-300"
            style={{ color: textMuted }}>
            Stream your favorite content on all major platforms with our high-speed connection
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          className="rounded-3xl p-8 relative overflow-hidden"
          style={{
            background: cardBg,
            border: `1px solid ${border}`,
            boxShadow: dark
              ? "0 8px 40px rgba(0,0,0,0.35)"
              : "0 8px 32px rgba(99,130,255,0.1)",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            <div
              className="absolute -right-20 -top-20 w-64 h-64 rounded-full"
              style={{
                background: dark
                  ? "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(99,130,255,0.1) 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "rgba(59,130,246,0.15)",
                    border: "1px solid rgba(59,130,246,0.25)",
                  }}
                >
                  <TbDeviceTv className="text-2xl text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg transition-colors duration-300"
                    style={{ color: titleColor }}>
                    All-in-One Entertainment
                  </h3>
                  <p className="text-xs transition-colors duration-300" style={{ color: textMuted }}>
                    Stream without buffering
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-6 transition-colors duration-300"
                style={{ color: textMuted }}>
                Our fiber network delivers 4K UHD streaming on all major platforms simultaneously.
                No more buffering, no more lag — just pure entertainment.
              </p>

              {/* Stats */}
              <div className="flex gap-6">
                {[
                  { value: "4K UHD",  label: "Quality" },
                  { value: "50+",     label: "Channels" },
                  { value: "0ms",     label: "Lag" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-extrabold text-xl transition-colors duration-300"
                      style={{ color: titleColor }}>
                      {s.value}
                    </p>
                    <p className="text-xs mt-0.5 transition-colors duration-300"
                      style={{ color: textMuted }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — platform logos */}
            <div className="grid grid-cols-3 gap-3">
              {ottPlatforms.map((p, i) => (
                <motion.div
                  key={p.name}
                  className="rounded-2xl p-4 flex flex-col items-center gap-2 cursor-default"
                  style={{
                    background: dark ? "rgba(255,255,255,0.04)" : p.bg,
                    border: `1px solid ${dark ? "rgba(255,255,255,0.07)" : `rgba(0,0,0,0.05)`}`,
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{
                    scale: 1.06,
                    background: p.bg,
                    borderColor: `${p.color}40`,
                    boxShadow: `0 4px 20px ${p.color}30`,
                    transition: { duration: 0.2 },
                  }}
                >
                  <span
                    className="text-2xl font-black"
                    style={{ color: p.color }}
                  >
                    {p.letter}
                  </span>
                  <span className="text-xs font-semibold transition-colors duration-300"
                    style={{ color: textMuted }}>
                    {p.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

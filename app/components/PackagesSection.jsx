"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TbCheck, TbHome, TbDeviceGamepad2, TbBuildingSkyscraper, TbArrowRight } from "react-icons/tb";
import { useTheme } from "../context/ThemeContext";

const packages = [
  {
    icon: TbHome,
    name: "Home Starter",
    tagline: "Perfect for everyday browsing",
    speed: "10 Gbps",
    data: "100 GB",
    price: 39,
    accent: { r: 59, g: 130, b: 246 },   // blue
    gradientFrom: "rgba(59,130,246,0.18)",
    gradientTo:   "rgba(59,130,246,0.04)",
    glowColor:    "rgba(59,130,246,0.25)",
    features: [
      "Premium Fiber Connection",
      "24/7 Customer Support",
      "Free Installation",
      "Basic Security Suite",
    ],
  },
  {
    icon: TbDeviceGamepad2,
    name: "Gaming Pro",
    tagline: "Built for zero-lag gaming",
    speed: "20 Gbps",
    data: "4 TB",
    price: 89,
    popular: true,
    accent: { r: 139, g: 92, b: 246 },   // violet
    gradientFrom: "rgba(139,92,246,0.22)",
    gradientTo:   "rgba(99,130,255,0.06)",
    glowColor:    "rgba(139,92,246,0.3)",
    features: [
      "Ultra-Low Latency (<1ms)",
      "Priority Gaming Traffic",
      "Advanced Security Suite",
      "Dedicated Gaming IP",
    ],
  },
  {
    icon: TbBuildingSkyscraper,
    name: "Enterprise",
    tagline: "Scalable for your business",
    speed: "100 Gbps",
    data: "Unlimited",
    price: 199,
    accent: { r: 20, g: 184, b: 166 },   // teal
    gradientFrom: "rgba(20,184,166,0.18)",
    gradientTo:   "rgba(20,184,166,0.04)",
    glowColor:    "rgba(20,184,166,0.25)",
    features: [
      "Dedicated Fiber Line",
      "SLA 99.99% Uptime",
      "Enterprise Firewall",
      "24/7 Priority Support",
    ],
  },
];

export default function PackagesSection() {
  const { dark } = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      id="packages"
      className="py-24 relative overflow-hidden transition-colors duration-300"
      style={{ background: dark ? "#060b1f" : "#eef2ff" }}
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full blur-[100px]"
          style={{ background: dark ? "rgba(59,130,246,0.06)" : "rgba(59,130,246,0.08)" }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full blur-[100px]"
          style={{ background: dark ? "rgba(139,92,246,0.06)" : "rgba(139,92,246,0.08)" }} />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: dark ? "#3b6ef8" : "#6366f1" }}>
            Pricing Plans
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 transition-colors duration-300"
            style={{ color: dark ? "#ffffff" : "#0f172a" }}>
            Internet Packages
          </h2>
          <p className="text-base max-w-md mx-auto transition-colors duration-300"
            style={{ color: dark ? "#8892b0" : "#475569" }}>
            Beautifully crafted with pricing and connecting price
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
          {packages.map((pkg, idx) => {
            const Icon = pkg.icon;
            const isHovered = hoveredCard === idx;
            const accentRgb = `${pkg.accent.r},${pkg.accent.g},${pkg.accent.b}`;

            return (
              <motion.div
                key={pkg.name}
                className="relative flex flex-col rounded-3xl overflow-hidden cursor-default"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                onHoverStart={() => setHoveredCard(idx)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
                style={{
                  background: dark
                    ? "linear-gradient(160deg, rgba(14,21,52,0.95) 0%, rgba(8,13,36,0.98) 100%)"
                    : "rgba(255,255,255,0.92)",
                  border: `1px solid ${isHovered
                    ? `rgba(${accentRgb},0.45)`
                    : dark ? "rgba(255,255,255,0.07)" : "rgba(99,130,255,0.15)"}`,
                  boxShadow: isHovered
                    ? `0 20px 60px rgba(${accentRgb},0.2), 0 8px 24px rgba(0,0,0,0.3)`
                    : dark
                      ? "0 4px 24px rgba(0,0,0,0.3)"
                      : "0 4px 24px rgba(99,130,255,0.1)",
                  transition: "border 0.3s, box-shadow 0.3s",
                }}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 flex justify-center">
                    <div
                      className="text-white text-[11px] font-bold px-5 py-1 rounded-b-xl tracking-widest uppercase"
                      style={{ background: `linear-gradient(90deg, rgba(${accentRgb},0.9), rgba(99,130,255,0.9))` }}
                    >
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Top gradient overlay */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-3xl"
                  style={{
                    background: `linear-gradient(160deg, ${pkg.gradientFrom} 0%, ${pkg.gradientTo} 40%, transparent 70%)`,
                  }}
                  animate={{ opacity: isHovered ? 1 : 0.6 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Spotlight glow on hover */}
                <motion.div
                  className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${pkg.glowColor} 0%, transparent 70%)` }}
                  animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1.2 : 0.8 }}
                  transition={{ duration: 0.4 }}
                />

                <div className={`relative flex flex-col h-full p-7 ${pkg.popular ? "pt-9" : ""}`}>

                  {/* Icon + Name */}
                  <div className="flex items-center gap-3 mb-5">
                    <motion.div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `rgba(${accentRgb},0.15)`,
                        border: `1px solid rgba(${accentRgb},0.25)`,
                      }}
                      animate={{
                        boxShadow: isHovered
                          ? `0 0 20px rgba(${accentRgb},0.35)`
                          : "none",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon
                        className="text-2xl"
                        style={{ color: `rgb(${accentRgb})` }}
                      />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-base transition-colors duration-300"
                        style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                        {pkg.name}
                      </h3>
                      <p className="text-xs mt-0.5 transition-colors duration-300"
                        style={{ color: dark ? "#4a5578" : "#94a3b8" }}>
                        {pkg.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Speed & Data */}
                  <div className="flex gap-3 mb-6">
                    {[
                      { label: "Speed", value: pkg.speed },
                      { label: "Data",  value: pkg.data  },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="flex-1 rounded-xl px-4 py-3 text-center transition-all duration-300"
                        style={{
                          background: dark ? "rgba(255,255,255,0.04)" : `rgba(${accentRgb},0.06)`,
                          border: `1px solid ${dark ? "rgba(255,255,255,0.06)" : `rgba(${accentRgb},0.12)`}`,
                        }}
                      >
                        <p className="font-bold text-sm transition-colors duration-300"
                          style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                          {s.value}
                        </p>
                        <p className="text-[11px] mt-0.5 transition-colors duration-300"
                          style={{ color: dark ? "#4a5578" : "#94a3b8" }}>
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-3 flex-1 mb-7">
                    {pkg.features.map((f, fi) => (
                      <motion.li
                        key={f}
                        className="flex items-center gap-2.5 text-sm transition-colors duration-300"
                        style={{ color: dark ? "#8892b0" : "#475569" }}
                        initial={{ opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + fi * 0.06 }}
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                          style={{
                            background: `rgba(${accentRgb},0.15)`,
                            color: `rgb(${accentRgb})`,
                          }}
                        >
                          <TbCheck className="text-xs font-bold" />
                        </div>
                        {f}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Price + CTA */}
                  <div
                    className="pt-6 flex items-center justify-between"
                    style={{ borderTop: `1px solid ${dark ? "rgba(255,255,255,0.06)" : `rgba(${accentRgb},0.1)`}` }}
                  >
                    <div>
                      <span className="font-extrabold text-3xl transition-colors duration-300"
                        style={{ color: dark ? "#ffffff" : "#0f172a" }}>
                        ${pkg.price}
                      </span>
                      <span className="text-sm ml-1 transition-colors duration-300"
                        style={{ color: dark ? "#4a5578" : "#94a3b8" }}>
                        /month
                      </span>
                    </div>

                    <motion.button
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-xl"
                      style={{
                        background: `linear-gradient(135deg, rgba(${accentRgb},0.9) 0%, rgba(${accentRgb},0.7) 100%)`,
                        boxShadow: `0 4px 16px rgba(${accentRgb},0.3)`,
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: `0 6px 24px rgba(${accentRgb},0.5)`,
                      }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                    >
                      Get Started
                      <TbArrowRight className="text-base" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

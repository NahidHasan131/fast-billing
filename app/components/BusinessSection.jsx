"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  TbBuildingStore, TbHome, TbArrowRight,
  TbCheck, TbWifi, TbDeviceDesktop, TbShieldCheck, TbHeadset,
} from "react-icons/tb";

const businessFeatures = [
  "Dedicated Fiber Line",
  "99.99% SLA Uptime",
  "Priority Support 24/7",
  "Advanced Firewall",
];

const homeFeatures = [
  "Smart Home Ready",
  "Parental Controls",
  "Free Router Included",
  "Easy Setup App",
];

const cards = [
  {
    icon: TbBuildingStore,
    title: "Business Solutions",
    desc: "Scalable internet solutions designed for businesses of all sizes. Keep your team connected with enterprise-grade reliability.",
    features: businessFeatures,
    color: "59,130,246",
    badge: "Enterprise",
  },
  {
    icon: TbHome,
    title: "Home Internet Features",
    desc: "Everything your home needs for seamless streaming, gaming, and working from home with ultra-low latency.",
    features: homeFeatures,
    color: "139,92,246",
    badge: "Residential",
  },
];

export default function BusinessSection() {
  const { dark } = useTheme();

  const sectionBg  = dark ? "#060b1f" : "#eef2ff";
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
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const accentRgb = card.color;
            return (
              <motion.div
                key={card.title}
                className="relative rounded-3xl p-7 flex flex-col gap-5 overflow-hidden group cursor-default"
                style={{
                  background: cardBg,
                  border: `1px solid ${border}`,
                  boxShadow: dark
                    ? "0 4px 24px rgba(0,0,0,0.3)"
                    : "0 4px 24px rgba(99,130,255,0.08)",
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{
                  y: -4,
                  borderColor: `rgba(${accentRgb},0.4)`,
                  boxShadow: `0 16px 48px rgba(${accentRgb},0.15)`,
                  transition: { duration: 0.25 },
                }}
              >
                {/* BG gradient */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, rgba(${accentRgb},0.08), transparent 60%)`,
                  }}
                />

                {/* Top row */}
                <div className="flex items-start justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `rgba(${accentRgb},0.15)`,
                        border: `1px solid rgba(${accentRgb},0.25)`,
                      }}
                    >
                      <Icon className="text-2xl" style={{ color: `rgb(${accentRgb})` }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base transition-colors duration-300"
                        style={{ color: titleColor }}>
                        {card.title}
                      </h3>
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background: `rgba(${accentRgb},0.12)`,
                          color: `rgb(${accentRgb})`,
                        }}
                      >
                        {card.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed relative z-10 transition-colors duration-300"
                  style={{ color: textMuted }}>
                  {card.desc}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 relative z-10">
                  {card.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs"
                      style={{ color: textMuted }}>
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: `rgba(${accentRgb},0.15)` }}
                      >
                        <TbCheck className="text-[10px]" style={{ color: `rgb(${accentRgb})` }} />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  className="flex items-center gap-1.5 text-sm font-semibold mt-1 relative z-10 w-fit"
                  style={{ color: `rgb(${accentRgb})` }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn More <TbArrowRight />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

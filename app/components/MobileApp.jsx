"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  TbDeviceMobile, TbWifi, TbChartBar, TbShieldCheck,
  TbHeadset, TbBell, TbArrowRight,
} from "react-icons/tb";

const appFeatures = [
  { icon: TbWifi,      title: "Live Speed Monitor",  desc: "Real-time network stats at your fingertips", color: "59,130,246" },
  { icon: TbChartBar,  title: "Usage Analytics",     desc: "Track your data consumption daily", color: "139,92,246" },
  { icon: TbShieldCheck, title: "Security Alerts",   desc: "Instant notifications for threats", color: "20,184,166" },
  { icon: TbHeadset,   title: "24/7 Support Chat",   desc: "Get help instantly from the app", color: "244,114,182" },
  { icon: TbBell,      title: "Smart Notifications", desc: "Outage alerts before you notice", color: "245,158,11" },
];

export default function MobileApp() {
  const { dark } = useTheme();

  const sectionBg  = dark ? "#06091c" : "#e8eeff";
  const cardBg     = dark ? "rgba(10,15,42,0.9)" : "rgba(255,255,255,0.9)";
  const titleColor = dark ? "#ffffff" : "#0f172a";
  const textMuted  = dark ? "#8892b0" : "#475569";
  const border     = dark ? "rgba(255,255,255,0.07)" : "rgba(99,130,255,0.15)";

  return (
    <section className="py-24 transition-colors duration-300" style={{ background: sectionBg }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Content */}
          <motion.div className="flex flex-col gap-7"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>

            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                style={{ color: dark ? "#3b6ef8" : "#6366f1" }}>Mobile App</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 transition-colors duration-300"
                style={{ color: titleColor }}>
                Manage Everything <br />
                <span className="gradient-text">From Your Phone</span>
              </h2>
              <p className="text-base leading-relaxed transition-colors duration-300"
                style={{ color: textMuted }}>
                The ISP Mobile App gives you full control over your connection, billing,
                and support — all from one sleek interface.
              </p>
            </div>

            {/* Feature list */}
            <div className="flex flex-col gap-3">
              {appFeatures.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div key={f.title}
                    className="flex items-center gap-4 rounded-2xl p-4 group cursor-default"
                    style={{
                      background: cardBg,
                      border: `1px solid ${border}`,
                    }}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{
                      borderColor: `rgba(${f.color},0.4)`,
                      x: 4,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `rgba(${f.color},0.15)`, border: `1px solid rgba(${f.color},0.25)` }}>
                      <Icon className="text-lg" style={{ color: `rgb(${f.color})` }} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm transition-colors duration-300"
                        style={{ color: titleColor }}>{f.title}</p>
                      <p className="text-xs transition-colors duration-300" style={{ color: textMuted }}>{f.desc}</p>
                    </div>
                    <TbArrowRight className="text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: `rgb(${f.color})` }} />
                  </motion.div>
                );
              })}
            </div>

            {/* Store buttons */}
            <div className="flex flex-wrap gap-3 mt-2">
              {["App Store", "Google Play"].map((store, i) => (
                <motion.button key={store}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-200"
                  style={{
                    background: i === 0
                      ? "linear-gradient(135deg, #3b6ef8, #7c3aed)"
                      : cardBg,
                    border: i === 0 ? "none" : `1px solid ${border}`,
                    color: i === 0 ? "#fff" : titleColor,
                    boxShadow: i === 0 ? "0 4px 20px rgba(59,110,248,0.35)" : "none",
                  }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}>
                  <TbDeviceMobile className="text-lg" />
                  {store}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right — Animated phone mockup */}
          <motion.div className="relative flex justify-center"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>

            {/* Glow */}
            <div className="absolute w-80 h-80 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)", filter: "blur(30px)" }} />

            {/* Phone frame */}
            <motion.div
              className="relative w-64 rounded-[2.5rem] overflow-hidden"
              style={{
                background: dark ? "rgba(8,12,34,0.98)" : "rgba(240,244,255,0.98)",
                border: dark ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(99,130,255,0.25)",
                boxShadow: dark
                  ? "0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)"
                  : "0 30px 80px rgba(99,130,255,0.2)",
                aspectRatio: "9/18",
              }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full"
                style={{ background: dark ? "rgba(0,0,0,0.8)" : "rgba(200,210,255,0.8)" }} />

              {/* Screen content */}
              <div className="absolute inset-0 flex flex-col px-5 pt-14 pb-6 gap-4">
                {/* Header */}
                <div>
                  <p className="text-[10px] font-semibold" style={{ color: textMuted }}>Good morning,</p>
                  <p className="text-sm font-bold" style={{ color: titleColor }}>Your Network</p>
                </div>

                {/* Speed widget */}
                <div className="rounded-2xl p-4"
                  style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.15))", border: "1px solid rgba(99,130,255,0.2)" }}>
                  <p className="text-[10px]" style={{ color: textMuted }}>Current Speed</p>
                  <p className="text-2xl font-black mt-0.5" style={{ color: titleColor }}>
                    842 <span className="text-xs font-normal" style={{ color: textMuted }}>Mbps</span>
                  </p>
                  {/* Mini bar */}
                  <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ background: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)" }}>
                    <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6)" }}
                      initial={{ width: "0%" }} animate={{ width: "84%" }} transition={{ duration: 1.5, delay: 0.5 }} />
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Uptime", value: "99.99%", color: "20,184,166" },
                    { label: "Devices", value: "12", color: "59,130,246" },
                    { label: "Data Used", value: "1.2TB", color: "139,92,246" },
                    { label: "Ping", value: "3ms", color: "244,114,182" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl p-2.5 text-center"
                      style={{ background: dark ? "rgba(255,255,255,0.04)" : `rgba(${s.color},0.07)`, border: `1px solid rgba(${s.color},0.15)` }}>
                      <p className="text-xs font-black" style={{ color: `rgb(${s.color})` }}>{s.value}</p>
                      <p className="text-[9px] mt-0.5" style={{ color: textMuted }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Bottom nav */}
                <div className="flex justify-around mt-auto">
                  {[TbWifi, TbChartBar, TbShieldCheck, TbHeadset].map((Icon, i) => (
                    <div key={i} className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{ background: i === 0 ? "rgba(59,130,246,0.2)" : "transparent" }}>
                      <Icon className="text-sm" style={{ color: i === 0 ? "#60a5fa" : dark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.25)" }} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

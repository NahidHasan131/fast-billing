"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { RiCustomerService2Line, RiShieldCheckLine, RiDatabase2Line } from "react-icons/ri";
import { TbBolt } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import HeroIllustration from "./HeroIllustration";

const statCards = [
  { icon: <TbBolt className="text-blue-400 text-base" />, value: "10 Gbps", label: "Speed" },
  { icon: <RiDatabase2Line className="text-violet-400 text-base" />, value: "Unlimited", label: "Data" },
  { icon: <RiShieldCheckLine className="text-cyan-400 text-base" />, value: "99.99%", label: "Uptime" },
  { icon: <RiCustomerService2Line className="text-pink-400 text-base" />, value: "24/7", label: "Support" },
];

const metricsBar = [
  { icon: <FiUsers className="text-blue-400 text-2xl" />, value: "1,000+", label: "Customers", bg: "rgba(59,130,246,0.12)" },
  { icon: <BsGraphUpArrow className="text-violet-400 text-2xl" />, value: "99.99%", label: "Uptime", bg: "rgba(139,92,246,0.12)" },
  { icon: <TbBolt className="text-cyan-400 text-2xl" />, value: "10 Gbps", label: "Peak Speed", bg: "rgba(34,211,238,0.1)" },
  { icon: <RiCustomerService2Line className="text-pink-400 text-2xl" />, value: "24/7", label: "Support", bg: "rgba(244,114,182,0.1)" },
];

export default function HeroSection() {
  const { dark } = useTheme();

  // Theme-aware colors — card bg stays same, only section bg + text change
  const t = {
    sectionBg:    dark ? "#060b1f"  : "#eef2ff",
    titleColor:   dark ? "#ffffff"  : "#0f172a",
    subText:      dark ? "#8892b0"  : "#475569",
    mutedText:    dark ? "#4a5578"  : "#64748b",
    statValue:    dark ? "#ffffff"  : "#0f172a",
    statCardBg:   dark ? "rgba(14,21,48,0.9)"    : "rgba(255,255,255,0.85)",
    statCardBorder: dark ? "rgba(255,255,255,0.07)" : "rgba(99,130,255,0.18)",
    statIconBg:   dark ? "rgba(255,255,255,0.06)" : "rgba(99,130,255,0.1)",
    metricValue:  dark ? "#ffffff"  : "#0f172a",
    metricLabel:  dark ? "#8892b0"  : "#475569",
    metricCardBg: dark ? "rgba(14,21,48,0.9)"    : "rgba(255,255,255,0.85)",
    metricCardBorder: dark ? "rgba(255,255,255,0.07)" : "rgba(99,130,255,0.15)",
    divider:      dark ? "rgba(255,255,255,0.06)" : "rgba(99,130,255,0.12)",
    outlineBtnColor:  dark ? "#c7d2fe" : "#3b30a8",
    outlineBtnBorder: dark ? "rgba(167,139,250,0.3)" : "rgba(59,48,168,0.35)",
    outlineBtnHoverBg: dark ? "rgba(167,139,250,0.08)" : "rgba(59,48,168,0.08)",
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-grid transition-colors duration-300"
      style={{ background: t.sectionBg }}
    >
      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 -left-32 w-[700px] h-[700px] bg-blue-600/12 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-violet-700/12 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-10">

        {/* ── Two-column grid ── */}
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center min-h-[560px]">

          {/* ─── Left ─── */}
          <motion.div
            className="flex flex-col gap-6 order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">
                Next-Gen Fiber Network
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-[2.6rem] sm:text-5xl xl:text-[3.4rem] font-extrabold leading-[1.1] tracking-tight transition-colors duration-300"
              style={{ color: t.titleColor }}
            >
              Ultra Fast Fiber{" "}
              <span className="gradient-text">Internet</span>
              <br />
              for Your Digital Life
            </h1>

            {/* Subtext */}
            <p
              className="text-base sm:text-lg leading-relaxed max-w-[440px] transition-colors duration-300"
              style={{ color: t.subText }}
            >
              Premium, modern ISP digital landing page design with a
              consistent, refined style like Stripe and Apple.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3 mt-1">
              {statCards.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl p-3.5 flex flex-col items-center gap-1.5 text-center transition-all duration-300"
                  style={{
                    background: t.statCardBg,
                    border: `1px solid ${t.statCardBorder}`,
                    boxShadow: dark
                      ? "0 4px 16px rgba(0,0,0,0.3)"
                      : "0 4px 16px rgba(99,130,255,0.12), 0 1px 3px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: t.statIconBg }}
                  >
                    {stat.icon}
                  </div>
                  <p className="font-bold text-sm sm:text-[15px] leading-tight transition-colors duration-300" style={{ color: t.statValue }}>
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-xs transition-colors duration-300" style={{ color: t.mutedText }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mt-2">
              <Link href="#get-started" className="btn-primary text-sm px-7 py-3 inline-flex items-center gap-2">
                Get Connected <HiArrowRight className="text-base" />
              </Link>
              <Link
                href="#packages"
                className="text-sm font-semibold px-7 py-3 rounded-lg inline-flex items-center gap-2 transition-all duration-200"
                style={{
                  color: t.outlineBtnColor,
                  border: `1px solid ${t.outlineBtnBorder}`,
                  background: "transparent",
                }}
                onMouseEnter={e => e.currentTarget.style.background = t.outlineBtnHoverBg}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                View Packages
              </Link>
            </div>
          </motion.div>
          <div className="relative order-1 lg:order-2 flex items-center justify-center">
            <div className="absolute w-[400px] h-[400px] rounded-full bg-linear-to-br from-blue-600/15 to-violet-600/15 blur-3xl" />
            <motion.div
              className="relative w-full max-w-[500px]"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <HeroIllustration />
            </motion.div>
          </div>
        </div>

        {/* ── Full-width Metrics Bar ── */}
        <div
          className="mt-14 rounded-2xl grid grid-cols-2 sm:grid-cols-4 overflow-hidden transition-all duration-300"
          style={{
            background: t.metricCardBg,
            border: `1px solid ${t.metricCardBorder}`,
            boxShadow: dark
              ? "0 8px 40px rgba(0,0,0,0.4)"
              : "0 8px 32px rgba(99,130,255,0.12), 0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          {metricsBar.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 sm:px-6 py-5 hover:bg-white/3 transition-all duration-300 min-w-0"
              style={{ borderRight: i < metricsBar.length - 1 ? `1px solid ${t.divider}` : "none" }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: item.bg }}>
                {item.icon}
              </div>
              <div className="min-w-0">
                <p
                  className="font-extrabold text-base sm:text-xl lg:text-2xl leading-tight whitespace-nowrap transition-colors duration-300"
                  style={{ color: t.metricValue }}
                >
                  {item.value}
                </p>
                <p className="text-xs sm:text-sm mt-0.5 whitespace-nowrap transition-colors duration-300" style={{ color: t.metricLabel }}>
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

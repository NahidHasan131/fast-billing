"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  TbClipboardList, TbTool, TbWifi, TbRocket,
} from "react-icons/tb";

const steps = [
  {
    icon: TbClipboardList,
    step: "01",
    title: "Choose Your Plan",
    desc: "Select the package that fits your needs. Home, Gaming, or Enterprise — we have you covered.",
    color: "59,130,246",
  },
  {
    icon: TbTool,
    step: "02",
    title: "Schedule Installation",
    desc: "Pick a time slot that works for you. Our certified technicians arrive on time, every time.",
    color: "139,92,246",
  },
  {
    icon: TbWifi,
    step: "03",
    title: "Fiber Connected",
    desc: "Our team runs a dedicated fiber line directly to your property for maximum performance.",
    color: "20,184,166",
  },
  {
    icon: TbRocket,
    step: "04",
    title: "Go Live",
    desc: "Your connection is live and tested. Enjoy blazing-fast internet from day one.",
    color: "244,114,182",
  },
];

export default function InstallationProcess() {
  const { dark } = useTheme();

  const sectionBg  = dark ? "#060b1f" : "#eef2ff";
  const cardBg     = dark ? "rgba(10,15,42,0.9)" : "rgba(255,255,255,0.9)";
  const titleColor = dark ? "#ffffff" : "#0f172a";
  const textMuted  = dark ? "#8892b0" : "#475569";
  const border     = dark ? "rgba(255,255,255,0.07)" : "rgba(99,130,255,0.15)";
  const connLine   = dark ? "rgba(99,130,255,0.2)" : "rgba(99,130,255,0.25)";

  return (
    <section className="py-24 transition-colors duration-300" style={{ background: sectionBg }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: dark ? "#3b6ef8" : "#6366f1" }}>How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 transition-colors duration-300"
            style={{ color: titleColor }}>Installation Process</h2>
          <p className="text-base max-w-md mx-auto transition-colors duration-300"
            style={{ color: textMuted }}>
            From sign-up to surfing in as little as 48 hours
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${connLine} 20%, ${connLine} 80%, transparent)` }} />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                className="relative flex flex-col items-center text-center rounded-3xl p-7 gap-4 group cursor-default"
                style={{
                  background: cardBg,
                  border: `1px solid ${border}`,
                  boxShadow: dark ? "0 4px 24px rgba(0,0,0,0.25)" : "0 4px 24px rgba(99,130,255,0.08)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{
                  y: -6,
                  borderColor: `rgba(${step.color},0.4)`,
                  boxShadow: `0 16px 48px rgba(${step.color},0.15)`,
                  transition: { duration: 0.25 },
                }}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                  style={{ background: `radial-gradient(ellipse at top, rgba(${step.color},0.08), transparent 60%)` }} />

                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black text-white z-10"
                  style={{ background: `linear-gradient(135deg, rgb(${step.color}), rgba(${step.color},0.6))` }}>
                  {step.step}
                </div>

                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10"
                  style={{
                    background: `rgba(${step.color},0.12)`,
                    border: `1px solid rgba(${step.color},0.25)`,
                  }}
                  whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
                >
                  <Icon className="text-3xl" style={{ color: `rgb(${step.color})` }} />
                </motion.div>

                <div className="relative z-10">
                  <h3 className="font-bold text-base mb-2 transition-colors duration-300"
                    style={{ color: titleColor }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed transition-colors duration-300"
                    style={{ color: textMuted }}>{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

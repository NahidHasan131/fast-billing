"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  TbServer, TbWifi, TbRouter, TbNetwork,
  TbBolt, TbShieldCheck, TbWorldWww, TbDeviceDesktop,
} from "react-icons/tb";

const nodes = [
  { icon: TbWorldWww,   label: "Internet",    x: 50,  y: 8,   color: "59,130,246",  size: 52 },
  { icon: TbServer,     label: "Core Router", x: 50,  y: 38,  color: "139,92,246",  size: 48 },
  { icon: TbRouter,     label: "Edge Node A", x: 18,  y: 65,  color: "20,184,166",  size: 40 },
  { icon: TbRouter,     label: "Edge Node B", x: 82,  y: 65,  color: "20,184,166",  size: 40 },
  { icon: TbDeviceDesktop, label: "Home",     x: 8,   y: 90,  color: "244,114,182", size: 36 },
  { icon: TbDeviceDesktop, label: "Business", x: 32,  y: 90,  color: "244,114,182", size: 36 },
  { icon: TbDeviceDesktop, label: "Mobile",   x: 68,  y: 90,  color: "244,114,182", size: 36 },
  { icon: TbDeviceDesktop, label: "IoT",      x: 92,  y: 90,  color: "244,114,182", size: 36 },
];

const connections = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
  { from: 3, to: 6 },
  { from: 3, to: 7 },
];

const specs = [
  { icon: TbBolt,        label: "Network Speed",   value: "10 Tbps", color: "59,130,246" },
  { icon: TbShieldCheck, label: "Security Layer",  value: "256-bit",  color: "139,92,246" },
  { icon: TbServer,      label: "Data Centers",    value: "12+",      color: "20,184,166" },
  { icon: TbNetwork,     label: "Global PoPs",     value: "50+",      color: "244,114,182" },
];

export default function NetworkInfrastructure() {
  const { dark } = useTheme();

  const sectionBg  = dark ? "#060b1f" : "#eef2ff";
  const cardBg     = dark ? "rgba(10,15,42,0.9)" : "rgba(255,255,255,0.9)";
  const titleColor = dark ? "#ffffff" : "#0f172a";
  const textMuted  = dark ? "#8892b0" : "#475569";
  const border     = dark ? "rgba(255,255,255,0.07)" : "rgba(99,130,255,0.15)";

  return (
    <section
      className="py-24 transition-colors duration-300"
      style={{ background: sectionBg }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: dark ? "#3b6ef8" : "#6366f1" }}>
            Infrastructure
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 transition-colors duration-300"
            style={{ color: titleColor }}>
            Network Infrastructure
          </h2>
          <p className="text-base max-w-md mx-auto transition-colors duration-300"
            style={{ color: textMuted }}>
            Robust network topology built with redundancy and scalability at its core
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Left — Network diagram */}
          <motion.div
            className="relative rounded-3xl p-6 overflow-hidden h-full"
            style={{
              background: cardBg,
              border: `1px solid ${border}`,
              boxShadow: dark
                ? "0 8px 40px rgba(0,0,0,0.35)"
                : "0 8px 32px rgba(99,130,255,0.1)",
            }}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Grid bg */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                backgroundImage: dark
                  ? "linear-gradient(rgba(99,130,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(99,130,255,0.04) 1px,transparent 1px)"
                  : "linear-gradient(rgba(99,130,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(99,130,255,0.06) 1px,transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* SVG network diagram */}
            <svg
              viewBox="0 0 400 320"
              className="w-full relative z-10"
              style={{ minHeight: 280 }}
            >
              {/* Connection lines with animated packets */}
              {connections.map((c, i) => {
                const from = nodes[c.from];
                const to   = nodes[c.to];
                const x1   = from.x * 4;
                const y1   = from.y * 3.2;
                const x2   = to.x   * 4;
                const y2   = to.y   * 3.2;
                return (
                  <g key={i}>
                    <line
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke={dark ? "rgba(99,130,255,0.2)" : "rgba(99,130,255,0.25)"}
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    {/* Animated packet */}
                    <circle r="2.5" fill="rgba(99,180,255,0.9)"
                      style={{ filter: "drop-shadow(0 0 3px rgba(99,180,255,0.8))" }}>
                      <animateMotion
                        dur={`${2 + i * 0.4}s`}
                        repeatCount="indefinite"
                        begin={`${i * 0.3}s`}
                        path={`M ${x1} ${y1} L ${x2} ${y2}`}
                      />
                    </circle>
                  </g>
                );
              })}

              {/* Nodes */}
              {nodes.map((node, i) => {
                const cx = node.x * 4;
                const cy = node.y * 3.2;
                const s  = node.size * 0.18;
                return (
                  <g key={i}>
                    {/* Glow */}
                    <circle cx={cx} cy={cy} r={s * 1.8}
                      fill={`rgba(${node.color},0.08)`} />
                    {/* Circle bg */}
                    <circle cx={cx} cy={cy} r={s}
                      fill={dark ? "rgba(14,21,52,0.95)" : "rgba(240,244,255,0.95)"}
                      stroke={`rgba(${node.color},0.35)`}
                      strokeWidth="1.5" />
                    {/* Pulse ring */}
                    <circle cx={cx} cy={cy} r={s}
                      fill="none"
                      stroke={`rgba(${node.color},0.4)`}
                      strokeWidth="1">
                      <animate
                        attributeName="r"
                        from={s} to={s * 1.8}
                        dur="2.5s" repeatCount="indefinite"
                        begin={`${i * 0.4}s`} />
                      <animate
                        attributeName="opacity"
                        from="0.5" to="0"
                        dur="2.5s" repeatCount="indefinite"
                        begin={`${i * 0.4}s`} />
                    </circle>
                    {/* Label */}
                    <text
                      x={cx} y={cy + s + 10}
                      textAnchor="middle"
                      fill={dark ? "rgba(148,163,184,0.7)" : "rgba(71,85,105,0.8)"}
                      fontSize="7"
                      fontWeight="600"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </motion.div>

          {/* Right — Specs */}
          <div className="flex flex-col gap-5 h-full">
            <motion.p
              className="text-sm leading-relaxed transition-colors duration-300"
              style={{ color: textMuted }}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our multi-tier network architecture ensures maximum reliability with
              automatic failover, load balancing, and zero single points of failure.
              Built to handle millions of simultaneous connections with sub-millisecond
              switching and end-to-end encrypted data paths across all nodes.
            </motion.p>

            {specs.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <motion.div
                  key={spec.label}
                  className="rounded-2xl p-5 flex items-center gap-4"
                  style={{
                    background: cardBg,
                    border: `1px solid ${border}`,
                    boxShadow: dark
                      ? "0 4px 16px rgba(0,0,0,0.2)"
                      : "0 4px 16px rgba(99,130,255,0.07)",
                  }}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{
                    borderColor: `rgba(${spec.color},0.4)`,
                    boxShadow: `0 8px 28px rgba(${spec.color},0.12)`,
                    x: 4,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `rgba(${spec.color},0.15)`,
                      border: `1px solid rgba(${spec.color},0.25)`,
                    }}
                  >
                    <Icon className="text-xl" style={{ color: `rgb(${spec.color})` }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs transition-colors duration-300" style={{ color: textMuted }}>
                      {spec.label}
                    </p>
                    <p className="font-extrabold text-xl transition-colors duration-300"
                      style={{ color: titleColor }}>
                      {spec.value}
                    </p>
                  </div>
                  <div
                    className="w-1.5 h-10 rounded-full"
                    style={{ background: `linear-gradient(180deg, rgba(${spec.color},0.8), rgba(${spec.color},0.2))` }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

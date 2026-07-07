"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { TbStar, TbChevronLeft, TbChevronRight, TbQuote } from "react-icons/tb";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "TechCorp",
    avatar: "SJ",
    avatarColor: "59,130,246",
    rating: 5,
    text: "Switched from cable to this fiber service 6 months ago. The speed is unreal — 10Gbps downloads are consistently hitting the max. Gaming latency dropped from 45ms to under 5ms. Best decision ever.",
  },
  {
    name: "Marcus Chen",
    role: "Creative Director",
    company: "DesignHub",
    avatar: "MC",
    avatarColor: "139,92,246",
    rating: 5,
    text: "Running a creative studio means uploading massive files constantly. Since switching, our 4K video uploads are done in minutes instead of hours. The customer support is also phenomenal — real humans, real fast.",
  },
  {
    name: "Priya Patel",
    role: "Remote Work Lead",
    company: "GlobalSync",
    avatar: "PP",
    avatarColor: "20,184,166",
    rating: 5,
    text: "Managing a distributed team across 3 time zones demands rock-solid connectivity. Not a single outage in 9 months. The 99.99% uptime guarantee is real — I've tested it thoroughly.",
  },
  {
    name: "James Rivera",
    role: "Gaming Streamer",
    company: "StreamPro",
    avatar: "JR",
    avatarColor: "244,114,182",
    rating: 5,
    text: "Streaming 4K at 60fps while simultaneously playing and chatting — zero drops, zero lag. My viewers notice the difference. My stream quality jumped from 720p to 4K with the same setup.",
  },
  {
    name: "Alex Thompson",
    role: "Small Business Owner",
    company: "RetailCo",
    avatar: "AT",
    avatarColor: "245,158,11",
    rating: 5,
    text: "Three locations, all running on this network. POS systems, security cameras, video calls — everything running flawlessly. Worth every penny for the business reliability alone.",
  },
];

export default function Testimonials() {
  const { dark } = useTheme();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (idx) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  };
  const prev = () => go((active - 1 + testimonials.length) % testimonials.length);
  const next = () => go((active + 1) % testimonials.length);

  const t = testimonials[active];
  const sectionBg  = dark ? "#06091c" : "#e8eeff";
  const cardBg     = dark ? "rgba(10,15,42,0.95)" : "rgba(255,255,255,0.95)";
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
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: dark ? "#3b6ef8" : "#6366f1" }}>Reviews</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 transition-colors duration-300"
            style={{ color: titleColor }}>Customer Testimonials</h2>
          <p className="text-base max-w-md mx-auto transition-colors duration-300"
            style={{ color: textMuted }}>
            Hear what our customers say about their experience
          </p>
        </motion.div>

        {/* Main testimonial card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl"
            style={{
              background: cardBg, border: `1px solid ${border}`,
              boxShadow: dark
                ? "0 20px 60px rgba(0,0,0,0.4)"
                : "0 20px 60px rgba(99,130,255,0.12)",
            }}>

            {/* Quote icon */}
            <div className="absolute top-6 right-8 opacity-10">
              <TbQuote className="text-8xl" style={{ color: `rgb(${t.avatarColor})` }} />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={{
                  enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
                  center: { opacity: 1, x: 0 },
                  exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="p-8 sm:p-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array(5).fill(0).map((_, i) => (
                    <motion.div key={i}
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.06 }}>
                      <TbStar className="text-yellow-400 text-lg fill-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Review text */}
                <p className="text-base sm:text-lg leading-relaxed mb-8 transition-colors duration-300"
                  style={{ color: dark ? "#c7d2fe" : "#334155", fontStyle: "italic" }}>
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-white text-sm shrink-0"
                    style={{
                      background: `linear-gradient(135deg, rgba(${t.avatarColor},0.8), rgba(${t.avatarColor},0.5))`,
                      boxShadow: `0 4px 16px rgba(${t.avatarColor},0.3)`,
                    }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-sm transition-colors duration-300"
                      style={{ color: titleColor }}>{t.name}</p>
                    <p className="text-xs transition-colors duration-300" style={{ color: textMuted }}>
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => go(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: active === i ? 24 : 8,
                    height: 8,
                    background: active === i
                      ? `rgb(${testimonials[i].avatarColor})`
                      : dark ? "rgba(255,255,255,0.15)" : "rgba(99,130,255,0.2)",
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              {[prev, next].map((fn, i) => (
                <motion.button key={i} onClick={fn}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: dark ? "rgba(255,255,255,0.06)" : "rgba(99,130,255,0.08)",
                    border: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(99,130,255,0.2)",
                    color: dark ? "#c7d2fe" : "#4f46e5",
                  }}
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  {i === 0 ? <TbChevronLeft className="text-lg" /> : <TbChevronRight className="text-lg" />}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

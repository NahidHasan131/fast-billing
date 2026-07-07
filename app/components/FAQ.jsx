"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { TbChevronDown, TbCircleCheck } from "react-icons/tb";

const faqs = [
  {
    q: "How fast is the installation process?",
    a: "Most installations are completed within 48 hours of sign-up. Our certified technicians will contact you to schedule a convenient time slot.",
  },
  {
    q: "Do you have any data caps or throttling?",
    a: "Our Home Starter and Gaming Pro plans come with generous data allowances. Enterprise plans include truly unlimited data with zero throttling, ever.",
  },
  {
    q: "What equipment is included?",
    a: "Every plan includes a free fiber-grade router with Wi-Fi 6E support. Enterprise plans additionally include managed switches and 24/7 equipment monitoring.",
  },
  {
    q: "How do I contact customer support?",
    a: "We offer 24/7 support via our mobile app, live chat on the website, and a dedicated phone line. Average response time is under 2 minutes.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Yes, plan changes take effect on your next billing cycle. You can manage everything from the mobile app or your online account dashboard.",
  },
  {
    q: "Is there a contract or commitment?",
    a: "We offer month-to-month flexibility on all plans. Longer-term commitments unlock discounted rates — ask our team for current promotions.",
  },
];

export default function FAQ() {
  const { dark } = useTheme();
  const [open, setOpen] = useState(null);

  const sectionBg  = dark ? "#060b1f" : "#eef2ff";
  const cardBg     = dark ? "rgba(10,15,42,0.9)" : "rgba(255,255,255,0.9)";
  const titleColor = dark ? "#ffffff" : "#0f172a";
  const textMuted  = dark ? "#8892b0" : "#475569";
  const border     = dark ? "rgba(255,255,255,0.07)" : "rgba(99,130,255,0.15)";

  return (
    <section className="py-24 transition-colors duration-300" style={{ background: sectionBg }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <motion.div className="lg:sticky lg:top-28 flex flex-col gap-6"
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                style={{ color: dark ? "#3b6ef8" : "#6366f1" }}>FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 transition-colors duration-300"
                style={{ color: titleColor }}>
                Got Questions?<br />
                <span className="gradient-text">We Have Answers.</span>
              </h2>
              <p className="text-base leading-relaxed transition-colors duration-300"
                style={{ color: textMuted }}>
                Everything you need to know about our service, installation, and support.
                Can't find your answer? Reach out to our team.
              </p>
            </div>

            {/* Quick stats */}
            <div className="flex flex-col gap-3">
              {[
                { label: "Questions answered in < 2 min", color: "59,130,246" },
                { label: "99.99% customer satisfaction rate", color: "139,92,246" },
                { label: "24/7 expert support team", color: "20,184,166" },
              ].map((s, i) => (
                <motion.div key={s.label}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: textMuted }}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}>
                  <TbCircleCheck className="text-xl shrink-0" style={{ color: `rgb(${s.color})` }} />
                  {s.label}
                </motion.div>
              ))}
            </div>

            <motion.button
              className="w-fit text-sm font-semibold text-white px-6 py-3 rounded-xl"
              style={{ background: "linear-gradient(135deg, #3b6ef8, #7c3aed)", boxShadow: "0 4px 20px rgba(59,110,248,0.35)" }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}>
              Contact Support
            </motion.button>
          </motion.div>

          {/* Right — Accordion */}
          <motion.div className="flex flex-col gap-3"
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={i}
                  className="rounded-2xl overflow-hidden cursor-pointer"
                  style={{
                    background: cardBg,
                    border: `1px solid ${isOpen ? "rgba(59,130,246,0.4)" : border}`,
                    boxShadow: isOpen
                      ? dark ? "0 8px 32px rgba(59,130,246,0.12)" : "0 8px 32px rgba(99,130,255,0.1)"
                      : "none",
                  }}
                  onClick={() => setOpen(isOpen ? null : i)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <div className="flex items-center justify-between p-5 gap-4">
                    <p className="font-semibold text-sm flex-1 transition-colors duration-300"
                      style={{ color: isOpen ? (dark ? "#93c5fd" : "#3b6ef8") : titleColor }}>
                      {faq.q}
                    </p>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0"
                    >
                      <TbChevronDown className="text-lg" style={{ color: isOpen ? "#3b6ef8" : textMuted }} />
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5">
                          <div className="h-px mb-4" style={{ background: dark ? "rgba(255,255,255,0.06)" : "rgba(99,130,255,0.1)" }} />
                          <p className="text-sm leading-relaxed transition-colors duration-300"
                            style={{ color: textMuted }}>
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

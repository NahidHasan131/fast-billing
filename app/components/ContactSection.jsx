"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  TbMail, TbPhone, TbMapPin, TbSend, TbCheck,
} from "react-icons/tb";

export default function ContactSection() {
  const { dark } = useTheme();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  const sectionBg  = dark ? "#06091c" : "#e8eeff";
  const cardBg     = dark ? "rgba(10,15,42,0.9)" : "rgba(255,255,255,0.9)";
  const titleColor = dark ? "#ffffff" : "#0f172a";
  const textMuted  = dark ? "#8892b0" : "#475569";
  const border     = dark ? "rgba(255,255,255,0.07)" : "rgba(99,130,255,0.15)";
  const inputBg    = dark ? "rgba(255,255,255,0.04)" : "rgba(99,130,255,0.05)";
  const inputBorder = dark ? "rgba(255,255,255,0.1)" : "rgba(99,130,255,0.2)";
  const labelColor = dark ? "#8892b0" : "#64748b";

  const contactInfo = [
    { icon: TbPhone,  label: "Phone",   value: "+1 (800) 555-0199", color: "59,130,246" },
    { icon: TbMail,   label: "Email",   value: "hello@brand.io",    color: "139,92,246" },
    { icon: TbMapPin, label: "Address", value: "123 Fiber St, Tech City, CA 94016", color: "20,184,166" },
  ];

  return (
    <section id="contact" className="py-24 transition-colors duration-300" style={{ background: sectionBg }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: dark ? "#3b6ef8" : "#6366f1" }}>Contact</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 transition-colors duration-300"
            style={{ color: titleColor }}>Get In Touch</h2>
          <p className="text-base max-w-md mx-auto transition-colors duration-300" style={{ color: textMuted }}>
            Ready to get started? Reach out to our team and we'll get you connected fast.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left — Contact info + Map */}
          <motion.div className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>

            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div key={info.label}
                  className="flex items-center gap-4 rounded-2xl p-5"
                  style={{ background: cardBg, border: `1px solid ${border}` }}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{
                    borderColor: `rgba(${info.color},0.4)`,
                    x: 4,
                    transition: { duration: 0.2 },
                  }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `rgba(${info.color},0.15)`, border: `1px solid rgba(${info.color},0.25)` }}>
                    <Icon className="text-xl" style={{ color: `rgb(${info.color})` }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-0.5" style={{ color: textMuted }}>{info.label}</p>
                    <p className="text-sm font-semibold transition-colors duration-300" style={{ color: titleColor }}>{info.value}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Map placeholder */}
            <motion.div
              className="relative flex-1 rounded-2xl overflow-hidden min-h-48"
              style={{ background: cardBg, border: `1px solid ${border}` }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}>
              {/* Stylized map grid */}
              <div className="absolute inset-0"
                style={{
                  backgroundImage: dark
                    ? "linear-gradient(rgba(99,130,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(99,130,255,0.06) 1px,transparent 1px)"
                    : "linear-gradient(rgba(99,130,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(99,130,255,0.1) 1px,transparent 1px)",
                  backgroundSize: "24px 24px",
                }} />
              {/* Roads */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                <line x1="0" y1="100" x2="400" y2="100" stroke={dark ? "rgba(99,130,255,0.15)" : "rgba(99,130,255,0.2)"} strokeWidth="6" />
                <line x1="200" y1="0" x2="200" y2="200" stroke={dark ? "rgba(99,130,255,0.15)" : "rgba(99,130,255,0.2)"} strokeWidth="4" />
                <line x1="0" y1="50" x2="400" y2="50" stroke={dark ? "rgba(99,130,255,0.08)" : "rgba(99,130,255,0.1)"} strokeWidth="2" />
                <line x1="0" y1="150" x2="400" y2="150" stroke={dark ? "rgba(99,130,255,0.08)" : "rgba(99,130,255,0.1)"} strokeWidth="2" />
                <line x1="100" y1="0" x2="100" y2="200" stroke={dark ? "rgba(99,130,255,0.08)" : "rgba(99,130,255,0.1)"} strokeWidth="2" />
                <line x1="300" y1="0" x2="300" y2="200" stroke={dark ? "rgba(99,130,255,0.08)" : "rgba(99,130,255,0.1)"} strokeWidth="2" />
              </svg>
              {/* Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-10">
                <motion.div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #3b6ef8, #7c3aed)", boxShadow: "0 4px 20px rgba(59,130,246,0.5)" }}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}>
                  <TbMapPin className="text-white text-xl" />
                </motion.div>
                <div className="w-4 h-1 rounded-full bg-black/20 mt-1" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="rounded-3xl p-8"
            style={{ background: cardBg, border: `1px solid ${border}`, boxShadow: dark ? "0 8px 40px rgba(0,0,0,0.3)" : "0 8px 40px rgba(99,130,255,0.1)" }}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>

            {sent ? (
              <motion.div className="flex flex-col items-center justify-center h-full gap-5 py-16"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(34,197,94,0.15)", border: "2px solid rgba(34,197,94,0.4)" }}>
                  <TbCheck className="text-green-400 text-4xl" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-xl mb-2" style={{ color: titleColor }}>Message Sent!</p>
                  <p className="text-sm" style={{ color: textMuted }}>We'll get back to you within 2 hours.</p>
                </div>
                <button onClick={() => setSent(false)} className="text-sm text-blue-400 hover:underline">Send another message</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-bold text-lg mb-1 transition-colors duration-300" style={{ color: titleColor }}>
                  Send us a message
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { key: "name", label: "Full Name", placeholder: "John Doe" },
                    { key: "email", label: "Email", placeholder: "john@example.com", type: "email" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="text-xs font-semibold mb-1.5 block" style={{ color: labelColor }}>{f.label}</label>
                      <input
                        type={f.type || "text"}
                        placeholder={f.placeholder}
                        value={form[f.key]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        required
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                        style={{
                          background: inputBg,
                          border: `1px solid ${inputBorder}`,
                          color: titleColor,
                        }}
                        onFocus={(e) => e.target.style.borderColor = "rgba(59,130,246,0.5)"}
                        onBlur={(e) => e.target.style.borderColor = inputBorder}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1.5 block" style={{ color: labelColor }}>Subject</label>
                  <input
                    type="text" placeholder="How can we help?"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                    style={{ background: inputBg, border: `1px solid ${inputBorder}`, color: titleColor }}
                    onFocus={(e) => e.target.style.borderColor = "rgba(59,130,246,0.5)"}
                    onBlur={(e) => e.target.style.borderColor = inputBorder}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1.5 block" style={{ color: labelColor }}>Message</label>
                  <textarea
                    rows={5} placeholder="Tell us more about your needs..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none transition-all duration-200"
                    style={{ background: inputBg, border: `1px solid ${inputBorder}`, color: titleColor }}
                    onFocus={(e) => e.target.style.borderColor = "rgba(59,130,246,0.5)"}
                    onBlur={(e) => e.target.style.borderColor = inputBorder}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2.5 text-sm font-bold text-white py-3.5 rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, #3b6ef8, #7c3aed)",
                    boxShadow: "0 4px 20px rgba(59,110,248,0.35)",
                    opacity: loading ? 0.7 : 1,
                  }}
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}>
                  {loading ? (
                    <motion.div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
                  ) : (
                    <><TbSend className="text-base" /> Send Message</>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { TbBolt, TbArrowRight } from "react-icons/tb";

export default function CTABanner() {
  const { dark } = useTheme();

  return (
    <section className="py-20 transition-colors duration-300"
      style={{ background: dark ? "#060b1f" : "#eef2ff" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          className="relative rounded-3xl overflow-hidden px-8 py-14 text-center"
          style={{
            background: "linear-gradient(135deg, #1a1f6e 0%, #2d1b69 40%, #1a1f6e 100%)",
            boxShadow: "0 20px 60px rgba(59,130,246,0.25), 0 0 0 1px rgba(255,255,255,0.06)",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated background blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div className="absolute w-80 h-80 rounded-full -top-20 -left-20"
              style={{ background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)" }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 6, repeat: Infinity }} />
            <motion.div className="absolute w-80 h-80 rounded-full -bottom-20 -right-20"
              style={{ background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)" }}
              animate={{ scale: [1.2, 1, 1.2], opacity: [1, 0.6, 1] }}
              transition={{ duration: 6, repeat: Infinity }} />
            {/* Stars */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div key={i}
                className="absolute w-1 h-1 rounded-full bg-white"
                style={{
                  left: `${5 + (i * 4.5) % 90}%`,
                  top: `${10 + (i * 7) % 80}%`,
                  opacity: 0.3,
                }}
                animate={{ opacity: [0.1, 0.5, 0.1] }}
                transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }} />
            ))}
          </div>

          <div className="relative z-10">
            <motion.div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}>
              <TbBolt className="text-yellow-400 text-base" />
              <span className="text-white/90 text-xs font-semibold tracking-wider uppercase">Limited Time Offer</span>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}>
              Ready for Lightning<br />
              <span style={{
                background: "linear-gradient(90deg, #60a5fa, #c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Fast Internet?</span>
            </motion.h2>

            <motion.p className="text-white/70 text-base sm:text-lg mb-10 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}>
              Join 1,000+ satisfied customers. Get connected today with our fast, reliable fiber internet service.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}>
              <motion.button
                className="inline-flex items-center gap-2.5 text-sm font-bold text-white px-8 py-3.5 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #3b6ef8, #7c3aed)",
                  boxShadow: "0 4px 24px rgba(59,110,248,0.5)",
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}>
                Get Started Now <TbArrowRight className="text-lg" />
              </motion.button>
              <motion.button
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 px-8 py-3.5 rounded-xl"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
                whileHover={{ scale: 1.04, background: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.97 }}>
                View All Plans
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

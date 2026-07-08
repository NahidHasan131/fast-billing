"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { TbArrowRight, TbCalendar, TbUser, TbTag } from "react-icons/tb";

const posts = [
  {
    tag: "Technology",
    tagColor: "59,130,246",
    title: "How Fiber Optics Are Revolutionizing Home Internet",
    excerpt: "Discover how fiber technology delivers data at the speed of light, transforming the way we connect at home.",
    author: "Alex Rivera",
    date: "Dec 12, 2024",
    readTime: "5 min read",
    gradientFrom: "rgba(59,130,246,0.2)",
    gradientTo: "rgba(139,92,246,0.1)",
  },
  {
    tag: "Gaming",
    tagColor: "139,92,246",
    title: "Latency Explained: Why Ping Matters More Than Speed",
    excerpt: "Most gamers focus on download speed, but it's actually latency that determines whether you win or lose in competitive gaming.",
    author: "Marcus Chen",
    date: "Dec 8, 2024",
    readTime: "4 min read",
    gradientFrom: "rgba(139,92,246,0.2)",
    gradientTo: "rgba(59,130,246,0.1)",
  },
  {
    tag: "Security",
    tagColor: "20,184,166",
    title: "Lightning Fast 5G vs Fiber: Which Is Right for You?",
    excerpt: "A comprehensive comparison of 5G wireless and fiber optic connections — speed, reliability, and value for your specific needs.",
    author: "Priya Patel",
    date: "Dec 3, 2024",
    readTime: "6 min read",
    gradientFrom: "rgba(20,184,166,0.2)",
    gradientTo: "rgba(59,130,246,0.08)",
  },
];

export default function BlogSection() {
  const { dark } = useTheme();

  const sectionBg  = dark ? "#06091c" : "#e8eeff";
  const cardBg     = dark ? "rgba(10,15,42,0.9)" : "rgba(255,255,255,0.9)";
  const titleColor = dark ? "#ffffff" : "#0f172a";
  const textMuted  = dark ? "#8892b0" : "#475569";
  const border     = dark ? "rgba(255,255,255,0.07)" : "rgba(99,130,255,0.15)";

  return (
    <section className="py-24 transition-colors duration-300" style={{ background: sectionBg }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        <motion.div className="flex items-end justify-between mb-12 flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: dark ? "#3b6ef8" : "#6366f1" }}>Blog</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold transition-colors duration-300"
              style={{ color: titleColor }}>Latest From Our Blog</h2>
          </div>
          <motion.button
            className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl"
            style={{
              background: dark ? "rgba(59,130,246,0.1)" : "rgba(99,130,255,0.1)",
              border: `1px solid ${dark ? "rgba(59,130,246,0.25)" : "rgba(99,130,255,0.2)"}`,
              color: dark ? "#93c5fd" : "#4f46e5",
            }}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            View All Posts <TbArrowRight />
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              className="relative rounded-3xl overflow-hidden flex flex-col group cursor-pointer"
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
                borderColor: `rgba(${post.tagColor},0.4)`,
                boxShadow: `0 20px 60px rgba(${post.tagColor},0.15)`,
                transition: { duration: 0.25 },
              }}
            >
              {/* Image placeholder with gradient */}
              <div className="h-44 relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${post.gradientFrom}, ${post.gradientTo})` }}>
                <div className="absolute inset-0"
                  style={{
                    backgroundImage: dark
                      ? "linear-gradient(rgba(99,130,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(99,130,255,0.04) 1px,transparent 1px)"
                      : "linear-gradient(rgba(99,130,255,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(99,130,255,0.07) 1px,transparent 1px)",
                    backgroundSize: "20px 20px",
                  }} />
                {/* Decorative circles */}
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full"
                  style={{ background: `rgba(${post.tagColor},0.15)` }} />
                <div className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full"
                  style={{ background: `rgba(${post.tagColor},0.1)` }} />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: `rgba(${post.tagColor},0.2)`,
                      border: `1px solid rgba(${post.tagColor},0.35)`,
                      color: `rgb(${post.tagColor})`,
                    }}>
                    {post.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                <h3 className="font-bold text-base leading-snug transition-colors duration-300 group-hover:underline decoration-dotted"
                  style={{ color: titleColor }}>
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1 transition-colors duration-300"
                  style={{ color: textMuted }}>
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-3"
                  style={{ borderTop: `1px solid ${border}` }}>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: textMuted }}>
                      <TbUser className="text-sm" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: textMuted }}>
                      <TbCalendar className="text-sm" />
                      {post.date}
                    </div>
                  </div>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                    style={{
                      background: dark ? "rgba(255,255,255,0.05)" : "rgba(99,130,255,0.07)",
                      color: textMuted,
                    }}>
                    {post.readTime}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { RiWifiLine } from "react-icons/ri";
import {
  TbBrandTwitter, TbBrandLinkedin, TbBrandGithub, TbBrandInstagram,
  TbArrowRight,
} from "react-icons/tb";

const footerLinks = {
  Company: ["About Us", "Careers", "Press", "Blog", "Partners"],
  Links:   ["Home", "Packages", "Coverage Map", "Support", "Status Page"],
  Legal:   ["Privacy Policy", "Terms of Service", "Cookie Policy", "Acceptable Use"],
};

const socials = [
  { icon: TbBrandTwitter,  href: "#", color: "59,130,246" },
  { icon: TbBrandLinkedin, href: "#", color: "59,130,246" },
  { icon: TbBrandInstagram, href: "#", color: "244,114,182" },
  { icon: TbBrandGithub,   href: "#", color: "139,92,246" },
];

export default function Footer() {
  const { dark } = useTheme();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const bg      = dark ? "#040713" : "#e0e7ff";
  const topBg   = dark ? "#06091c" : "#e8eeff";
  const titleColor = dark ? "#ffffff" : "#0f172a";
  const textMuted  = dark ? "#4a5578" : "#64748b";
  const linkColor  = dark ? "#8892b0" : "#475569";
  const border     = dark ? "rgba(255,255,255,0.06)" : "rgba(99,130,255,0.12)";
  const inputBg    = dark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.8)";

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="transition-colors duration-300">

      {/* Top newsletter bar */}
      <div className="py-12 transition-colors duration-300" style={{ background: topBg, borderTop: `1px solid ${border}` }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-bold text-base transition-colors duration-300" style={{ color: titleColor }}>
                Newsletter Signup
              </p>
              <p className="text-sm mt-0.5 transition-colors duration-300" style={{ color: textMuted }}>
                Get tips, updates, and exclusive offers straight to your inbox.
              </p>
            </div>
            {subscribed ? (
              <motion.div className="flex items-center gap-2 text-green-400 text-sm font-semibold"
                initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                ✓ Subscribed! Welcome aboard.
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full sm:w-auto">
                <input
                  type="email" placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 sm:w-64 rounded-xl px-4 py-2.5 text-sm outline-none transition-all duration-200"
                  style={{ background: inputBg, border: `1px solid ${border}`, color: titleColor }}
                  onFocus={(e) => e.target.style.borderColor = "rgba(59,130,246,0.4)"}
                  onBlur={(e) => e.target.style.borderColor = border}
                />
                <motion.button type="submit"
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white inline-flex items-center gap-1.5"
                  style={{ background: "linear-gradient(135deg, #3b6ef8, #7c3aed)", boxShadow: "0 2px 12px rgba(59,110,248,0.35)" }}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  Subscribe <TbArrowRight />
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-14 transition-colors duration-300" style={{ background: bg }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-10 mb-14">

            {/* Brand column */}
            <div className="col-span-2 sm:col-span-4 lg:col-span-2 flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                  <RiWifiLine className="text-white text-base" />
                </div>
                <span className="font-bold text-lg transition-colors duration-300" style={{ color: titleColor }}>brand</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs transition-colors duration-300" style={{ color: textMuted }}>
                Premium fiber internet for homes and businesses. Blazing fast speeds, rock-solid reliability, and 24/7 support.
              </p>
              {/* Social icons */}
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, color }, i) => (
                  <motion.a key={i} href={href}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{
                      background: dark ? "rgba(255,255,255,0.05)" : "rgba(99,130,255,0.08)",
                      border: `1px solid ${border}`,
                      color: linkColor,
                    }}
                    whileHover={{
                      background: `rgba(${color},0.15)`,
                      borderColor: `rgba(${color},0.4)`,
                      color: `rgb(${color})`,
                      y: -2,
                    }}>
                    <Icon className="text-base" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading} className="flex flex-col gap-4">
                <p className="text-xs font-bold tracking-widest uppercase transition-colors duration-300"
                  style={{ color: titleColor }}>{heading}</p>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#"
                        className="text-sm transition-colors duration-200 hover:underline decoration-dotted"
                        style={{ color: linkColor }}
                        onMouseEnter={(e) => e.currentTarget.style.color = dark ? "#c7d2fe" : "#4f46e5"}
                        onMouseLeave={(e) => e.currentTarget.style.color = linkColor}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
            style={{ borderTop: `1px solid ${border}` }}>
            <p className="text-xs transition-colors duration-300" style={{ color: textMuted }}>
              © {new Date().getFullYear()} Brand Internet. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5 text-xs" style={{ color: textMuted }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

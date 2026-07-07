"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { RiWifiLine } from "react-icons/ri";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  {
    label: "Services",
    href: "#services",
    dropdown: ["Fiber Internet", "Business Plans", "Enterprise", "TV & OTT"],
  },
  { label: "Packages", href: "#packages" },
  { label: "Coverage", href: "#coverage" },
  { label: "Support", href: "#support" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const { dark, setDark } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 flex justify-center bg-transparent">

      {/* ── Floating pill ── */}
      <nav
        className="w-full max-w-[1320px] h-[55px] flex items-center justify-between gap-6 px-6 lg:px-10 rounded-2xl transition-all duration-300"
        style={{
          background: dark
            ? scrolled ? "rgba(18, 26, 60, 0.88)" : "rgba(22, 32, 72, 0.65)"
            : scrolled ? "rgba(220, 228, 255, 0.92)" : "rgba(210, 220, 255, 0.75)",
          border: dark ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(99,130,255,0.2)",
          boxShadow: dark
            ? "0 2px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)"
            : "0 2px 20px rgba(99,130,255,0.15)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}      >
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 rounded-md bg-linear-to-br from-blue-500 to-violet-600 flex items-center justify-center">
            <RiWifiLine className="text-white text-sm" />
          </div>
          <span className="font-semibold text-md tracking-tight transition-colors duration-300" style={{ color: dark ? "#ffffff" : "#0f172a" }}>Fast Billing</span>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => {
                setHoveredLink(link.label);
                if (link.dropdown) setActiveDropdown(link.label);
              }}
              onMouseLeave={(e) => {
                // Only close if not moving into the dropdown
                const related = e.relatedTarget;
                if (related && e.currentTarget.contains(related)) return;
                setHoveredLink(null);
                setActiveDropdown(null);
              }}
            >
              <Link
                href={link.href}
                className="relative flex items-center gap-1 px-3.5 py-1.5 text-sm transition-colors duration-200 rounded-lg"
                style={{
                  color: hoveredLink === link.label
                    ? (dark ? "#ffffff" : "#0f172a")
                    : (dark ? "#e8e8e8" : "#1e293b"),
                }}
              >
                {/* Animated hover background */}
                <AnimatePresence>
                  {hoveredLink === link.label && (
                    <motion.span
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "rgba(255,255,255,0.0)" }}
                      layoutId="navHover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    />
                  )}
                </AnimatePresence>

                <span className="relative z-10">{link.label}</span>

                {link.dropdown && (
                  <motion.span
                    className="relative z-10"
                    animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IoChevronDown className="text-[11px] mt-0.5" />
                  </motion.span>
                )}

                {/* Bottom glow line */}
                <AnimatePresence>
                  {hoveredLink === link.label && (
                    <motion.span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px rounded-full"
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(99,130,255,0.8), transparent)",
                        width: "70%",
                      }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      exit={{ scaleX: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </Link>

              {/* Invisible bridge — fills gap between nav item and dropdown */}
              {link.dropdown && activeDropdown === link.label && (
                <div className="absolute top-full left-0 w-full h-2" />
              )}

              {/* Dropdown */}
              <AnimatePresence>
                {link.dropdown && activeDropdown === link.label && (
                  <motion.div
                    className="absolute top-[calc(100%+8px)] left-0 w-48 rounded-xl py-1.5"
                    style={{
                      background: dark ? "rgba(8, 13, 36, 0.97)" : "rgba(235, 240, 255, 0.98)",
                      border: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(99,130,255,0.18)",
                      boxShadow: dark ? "0 16px 40px rgba(0,0,0,0.6)" : "0 16px 40px rgba(99,130,255,0.15)",
                      backdropFilter: "blur(20px)",
                    }}
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                  >
                    {link.dropdown.map((item, i) => (
                      <motion.a
                        key={item}
                        href="#"
                        className="flex items-center gap-2 px-3.5 py-2 text-sm transition-all duration-150 mx-1 rounded-lg"
                        style={{
                          color: dark ? "#8892b0" : "#1e293b",
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = dark ? "rgba(255,255,255,0.05)" : "rgba(99,130,255,0.08)"}
                        onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <span className="w-1 h-1 rounded-full bg-blue-400/60" />
                        {item}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* ── Right Actions ── */}
        <div className="hidden md:flex items-center gap-1.5">
          <Link
            href="#login"
            className="text-sm transition-colors duration-200 px-3.5 py-1.5 rounded-lg hover:bg-white/5"
            style={{ color: dark ? "#e8e8e8" : "#1e293b" }}
          >
            Log In
          </Link>

          <Link
            href="#get-started"
            className="text-sm font-medium text-white px-4 py-2 rounded-full inline-block"
            style={{
              background: "linear-gradient(135deg, #3b6ef8 0%, #7c3aed 100%)",
              boxShadow: "0 2px 12px rgba(59,110,248,0.4)",
            }}
          >
            Get Started
          </Link>

          {/* Dark / Light toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ml-0.5"
            style={{
              background: dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)",
              border: dark ? "1px solid rgba(255,255,255,0.1)": "1px solid rgba(0,0,0,0.1)",
            }}
            aria-label="Toggle theme"
          >
            {dark ? (
              <BsMoonFill className="text-slate-300 text-xs" />
            ) : (
              <BsSunFill className="text-xs" />
            )}
          </button>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg text-white"
          style={{ background: "rgba(255,255,255,0.07)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX className="text-lg" /> : <HiMenuAlt3 className="text-lg" />}
        </button>
      </nav>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden rounded-2xl absolute top-full mt-1 left-4 right-4"
            style={{
              background: "rgba(8, 13, 36, 0.97)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              backdropFilter: "blur(20px)",
            }}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-4 flex flex-col gap-0.5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-[#8892b0] hover:text-white py-2.5 px-3 rounded-xl hover:bg-white/5 transition-all duration-150 block"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex gap-2 pt-3 mt-1 border-t border-white/8">
                <Link
                  href="#login"
                  className="flex-1 text-center text-sm text-white/60 border border-white/12 rounded-lg py-2 hover:border-white/25 transition-colors"
                >
                  Log In
                </Link>
                <Link
                  href="#get-started"
                  className="flex-1 text-center text-sm font-semibold text-white rounded-lg py-2 inline-block"
                  style={{ background: "linear-gradient(135deg, #3b6ef8 0%, #7c3aed 100%)" }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}

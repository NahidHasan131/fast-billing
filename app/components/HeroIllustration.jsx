"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { RiWifiLine } from "react-icons/ri";
import { TbBolt, TbServer, TbDeviceLaptop, TbDeviceMobile } from "react-icons/tb";
import { BsSpeedometer2 } from "react-icons/bs";
import { RiShieldCheckLine } from "react-icons/ri";

/* ── Floating device node ── */
function DeviceNode({ icon, x, y, delay, color, size = 40 }) {
  return (
    <motion.div
      className="absolute flex items-center justify-center rounded-2xl border"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: `rgba(${color}, 0.15)`,
        borderColor: `rgba(${color}, 0.3)`,
        boxShadow: `0 0 20px rgba(${color}, 0.2)`,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 3 + delay, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <span style={{ color: `rgb(${color})`, fontSize: size * 0.45 }}>{icon}</span>

      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{ border: `1px solid rgba(${color}, 0.4)` }}
        animate={{ scale: [1, 1.5, 1.5], opacity: [0.6, 0, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: delay + 0.5 }}
      />
    </motion.div>
  );
}

/* ── Animated connection line ── */
function ConnectionLine({ x1, y1, x2, y2, delay = 0 }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
      {/* Static line */}
      <line
        x1={`${x1}%`} y1={`${y1}%`}
        x2={`${x2}%`} y2={`${y2}%`}
        stroke="rgba(99,130,255,0.15)"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      {/* Animated packet dot */}
      <motion.circle
        r="2.5"
        fill="rgba(99,180,255,0.9)"
        style={{ filter: "drop-shadow(0 0 4px rgba(99,180,255,0.8))" }}
        initial={{ offsetDistance: "0%" }}
      >
        <animateMotion
          dur={`${2.5 + delay}s`}
          repeatCount="indefinite"
          begin={`${delay}s`}
          path={`M ${x1 * 4.8} ${y1 * 3.2} L ${x2 * 4.8} ${y2 * 3.2}`}
        />
      </motion.circle>
    </svg>
  );
}

/* ── Main illustration ── */
export default function HeroIllustration() {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Mouse-based 3D tilt
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      setTilt({ x: dy * -8, y: dx * 8 });
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const devices = [
    { icon: <TbDeviceLaptop />, x: 20,  y: 22,  delay: 0.2, color: "99,130,255",  size: 44 },
    { icon: <TbDeviceMobile />, x: 80,  y: 20,  delay: 0.5, color: "139,92,246",  size: 38 },
    { icon: <TbServer />,       x: 15,  y: 72,  delay: 0.8, color: "34,211,238",  size: 40 },
    { icon: <TbDeviceMobile />, x: 82,  y: 75,  delay: 0.3, color: "244,114,182", size: 36 },
    { icon: <TbDeviceLaptop />, x: 50,  y: 85,  delay: 0.6, color: "99,130,255",  size: 38 },
  ];

  return (
    <div ref={containerRef} className="relative w-full select-none" style={{ perspective: "1000px" }}>

      {/* Outer glow halo */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: "radial-gradient(ellipse at center, rgba(80,110,255,0.18) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* Main card with 3D tilt */}
      <motion.div
        className="relative rounded-3xl overflow-hidden"
        style={{
          aspectRatio: "4/3",
          background: "linear-gradient(135deg, rgba(12,18,50,0.92) 0%, rgba(7,11,32,0.96) 100%)",
          border: "none",
          boxShadow: "0 20px 60px rgba(30,50,150,0.25), 0 8px 24px rgba(0,0,0,0.4), 0 0 80px rgba(80,110,255,0.1)",
        }}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        {/* ── Background grid ── */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,130,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,130,255,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* ── Rotating orbit ring 1 ── */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "68%",
            aspectRatio: "1",
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            border: "1px solid rgba(99,130,255,0.12)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          {/* Dot on ring */}
          <motion.div
            className="absolute w-2 h-2 rounded-full"
            style={{
              top: "-4px",
              left: "50%",
              marginLeft: "-4px",
              background: "rgba(99,180,255,0.9)",
              boxShadow: "0 0 8px rgba(99,180,255,0.8)",
            }}
          />
        </motion.div>

        {/* ── Rotating orbit ring 2 ── */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "48%",
            aspectRatio: "1",
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            border: "1px solid rgba(139,92,246,0.14)",
            transform: "rotateX(60deg)",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              bottom: "-3px",
              left: "50%",
              marginLeft: "-3px",
              background: "rgba(168,100,255,0.9)",
              boxShadow: "0 0 8px rgba(168,100,255,0.8)",
            }}
          />
        </motion.div>

        {/* ── Connection lines ── */}
        <ConnectionLine x1={50} y1={50} x2={20}  y2={22}  delay={0}   />
        <ConnectionLine x1={50} y1={50} x2={80}  y2={20}  delay={0.8} />
        <ConnectionLine x1={50} y1={50} x2={15}  y2={72}  delay={1.5} />
        <ConnectionLine x1={50} y1={50} x2={82}  y2={75}  delay={0.4} />
        <ConnectionLine x1={50} y1={50} x2={50}  y2={85}  delay={1.1} />

        {/* ── Device nodes ── */}
        {devices.map((d, i) => (
          <DeviceNode key={i} {...d} />
        ))}

        {/* ── Central router hub ── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <motion.div
            className="relative flex items-center justify-center rounded-2xl"
            style={{
              width: 70,
              height: 70,
              background: "linear-gradient(135deg, rgba(59,110,248,0.4) 0%, rgba(108,49,232,0.4) 100%)",
              border: "1px solid rgba(99,130,255,0.4)",
              boxShadow: "0 0 30px rgba(80,110,255,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <RiWifiLine style={{ fontSize: 32, color: "rgba(150,180,255,0.95)" }} />

            {/* 3 pulse rings from center */}
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-2xl"
                style={{ inset: 0, border: "1px solid rgba(99,130,255,0.4)" }}
                animate={{ scale: [1, 2, 2], opacity: [0.5, 0, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* ── Signal wave arcs ── */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          {[60, 90, 120].map((r, i) => (
            <motion.circle
              key={i}
              cx="50%" cy="50%"
              r={r}
              fill="none"
              stroke="rgba(99,130,255,0.4)"
              strokeWidth="0.8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.2], opacity: [0.4, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 1,
                ease: "easeOut",
              }}
            />
          ))}
        </svg>

        {/* ── Speed chip — top right ── */}
        <motion.div
          className="absolute top-4 right-4 flex items-center gap-2 rounded-xl px-3 py-2"
          style={{
            background: "rgba(7,11,32,0.85)",
            border: "1px solid rgba(59,130,246,0.25)",
            boxShadow: "0 4px 16px rgba(59,130,246,0.2)",
            backdropFilter: "blur(10px)",
          }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <BsSpeedometer2 style={{ color: "#60a5fa", fontSize: 16 }} />
          <div>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: 12, lineHeight: 1 }}>10 Gbps</p>
            <p style={{ color: "#4a5578", fontSize: 10, marginTop: 2 }}>Max Speed</p>
          </div>
        </motion.div>

        {/* ── Uptime chip — bottom left ── */}
        <motion.div
          className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl px-3 py-2"
          style={{
            background: "rgba(7,11,32,0.85)",
            border: "1px solid rgba(139,92,246,0.25)",
            boxShadow: "0 4px 16px rgba(139,92,246,0.2)",
            backdropFilter: "blur(10px)",
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <RiShieldCheckLine style={{ color: "#a78bfa", fontSize: 16 }} />
          <div>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: 12, lineHeight: 1 }}>99.99%</p>
            <p style={{ color: "#4a5578", fontSize: 10, marginTop: 2 }}>Uptime</p>
          </div>
        </motion.div>

        {/* ── Live status indicator ── */}
        <motion.div
          className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full px-3 py-1"
          style={{
            background: "rgba(7,11,32,0.8)",
            border: "1px solid rgba(34,197,94,0.3)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#22c55e" }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span style={{ color: "#22c55e", fontSize: 10, fontWeight: 600 }}>LIVE</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

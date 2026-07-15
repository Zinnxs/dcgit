"use client";

/**
 * Reusable CTA button with soft ripple click feedback, scale hover and optional
 * gradient styling to keep interaction lively without aggressive motion.
 */
import { motion } from "framer-motion";
import { useState } from "react";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

type RippleButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function RippleButton({
  children,
  className = "",
  onClick,
  type = "button",
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 px-6 py-3 text-sm font-semibold transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 ${className}`}
      onClick={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const ripple: Ripple = {
          id: Date.now(),
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        };

        setRipples((prev) => [...prev, ripple]);
        setTimeout(() => {
          setRipples((prev) => prev.filter((item) => item.id !== ripple.id));
        }, 600);

        onClick?.();
      }}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="pointer-events-none absolute h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 animate-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.button>
  );
}

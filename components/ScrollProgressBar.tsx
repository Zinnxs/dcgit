"use client";

/**
 * Top progress bar driven by page scroll. It blends purple, cyan and soft gold
 * to match the requested visual identity while indicating reading progression.
 */
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX: smoothProgress }}
      className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-gradient-to-r from-violet-400/90 via-cyan-400/90 to-amber-300/90"
    />
  );
}

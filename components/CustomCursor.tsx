"use client";

/**
 * Desktop-only custom cursor that softly trails pointer movement and enlarges
 * over interactive targets to reinforce microinteractions across the page.
 */
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onMediaChange = () => setIsDesktop(media.matches);
    onMediaChange();
    media.addEventListener("change", onMediaChange);

    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a,button,[role='button']");
      setIsActive(Boolean(interactive));
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      media.removeEventListener("change", onMediaChange);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  const cursorClass = useMemo(
    () =>
      isActive
        ? "border-cyan-300/80 bg-cyan-300/10 shadow-[0_0_32px_rgba(6,182,212,0.35)]"
        : "border-violet-300/60 bg-violet-300/8 shadow-[0_0_26px_rgba(139,92,246,0.28)]",
    [isActive]
  );

  if (!isDesktop) {
    return null;
  }

  return (
    <motion.div
      className={`pointer-events-none fixed z-[90] h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border backdrop-blur-sm ${cursorClass}`}
      animate={{
        x: position.x,
        y: position.y,
        scale: isActive ? 1.8 : 1,
        opacity: isActive ? 0.85 : 0.6,
      }}
      transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.2 }}
    />
  );
}

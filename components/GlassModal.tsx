"use client";

/**
 * Generic glassmorphism modal with keyboard ESC close and outside-click dismiss.
 * It uses AnimatePresence + spring transitions for smooth, interview-grade UX.
 */
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

type GlassModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export function GlassModal({ isOpen, onClose, title, children }: GlassModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-2xl rounded-3xl border border-white/15 bg-white/8 p-6 text-slate-100 shadow-[0_0_35px_rgba(139,92,246,0.22)]"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 14 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold tracking-tight">{title}</h3>
              <button
                aria-label="Fechar modal"
                onClick={onClose}
                className="rounded-xl border border-white/15 px-3 py-1.5 text-sm transition-colors hover:bg-white/10"
              >
                Fechar
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

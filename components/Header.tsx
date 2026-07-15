"use client";

/**
 * Fixed navigation header with center links, action buttons and scroll-aware
 * glass effect. It keeps visual hierarchy clear while preserving smooth motion.
 */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RippleButton } from "./RippleButton";

const links = ["Formações", "Para Empresas", "Blog", "Contato"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/65 shadow-[0_10px_30px_rgba(11,14,20,0.45)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <a href="#home" className="group inline-flex items-center gap-2 text-slate-50">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-sm font-bold text-cyan-300">
            &lt;/&gt;
          </span>
          <span className="text-lg font-semibold tracking-tight">DevClub</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative text-sm text-slate-300 transition-colors hover:text-slate-50"
            >
              {link}
              <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <RippleButton className="hidden border-white/25 bg-transparent text-slate-100 md:inline-flex">
            Área do Aluno
          </RippleButton>
          <motion.div
            animate={{ boxShadow: [
              "0 0 0 rgba(245,158,11,0)",
              "0 0 28px rgba(245,158,11,0.22)",
              "0 0 0 rgba(245,158,11,0)",
            ] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            className="rounded-2xl"
          >
            <RippleButton className="bg-gradient-to-r from-violet-400/90 via-cyan-400/90 to-amber-300/90 text-slate-950">
              Quero ser Dev
            </RippleButton>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

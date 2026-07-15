"use client";

/**
 * Footer consolidates navigation and social channels with subtle hover motion,
 * plus an animated gradient divider to finish the page with branded continuity.
 */
import { motion } from "framer-motion";
import { FaDiscord, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const links = ["Formações", "Sobre", "Contato", "Política de Privacidade"];

const socials = [
  { name: "Instagram", icon: FaInstagram },
  { name: "YouTube", icon: FaYoutube },
  { name: "LinkedIn", icon: FaLinkedin },
  { name: "Discord", icon: FaDiscord },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 px-6 pb-8 pt-10 lg:px-10">
      <motion.div
        className="mb-8 h-px w-full bg-gradient-to-r from-violet-300/0 via-cyan-300/70 to-amber-200/0"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <nav className="flex flex-wrap gap-4 text-sm text-slate-400">
          {links.map((link) => (
            <a key={link} href="#" className="transition-colors hover:text-cyan-200">
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                className="rounded-xl border border-white/15 p-2 text-slate-300 transition-all hover:scale-110 hover:border-cyan-300/40 hover:text-cyan-200"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-7xl text-xs text-slate-500">© 2024 DevClub. Todos os direitos reservados.</p>
    </footer>
  );
}

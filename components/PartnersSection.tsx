"use client";

/**
 * Infinite marquee-style partner slider duplicates the logo list to create a
 * seamless loop, with grayscale-to-color hover transitions per brand chip.
 */
import { motion } from "framer-motion";
import { partners } from "./data";
import { Reveal } from "./Reveal";

const marqueeItems = [...partners, ...partners];

export function PartnersSection() {
  return (
    <section id="para-empresas" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <Reveal>
        <p className="mb-8 text-center text-lg font-medium text-slate-200">
          +500 empresas confiam nos profissionais formados pelo DevClub
        </p>
      </Reveal>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/4 py-6">
        <motion.div
          className="flex w-max gap-4 px-4"
          animate={{ x: [0, -980] }}
          transition={{ duration: 28, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
        >
          {marqueeItems.map((partner, index) => (
            <span
              key={`${partner}-${index}`}
              className="rounded-2xl border border-white/10 bg-slate-900/70 px-6 py-3 text-sm text-slate-400 grayscale transition-all duration-300 hover:scale-105 hover:text-cyan-200 hover:grayscale-0"
            >
              {partner}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

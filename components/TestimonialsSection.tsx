"use client";

/**
 * Horizontal success-cases rail with drag/scroll support, snap alignment and an
 * animated before/after toggle for role + salary transformation storytelling.
 */
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { testimonials } from "./data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function TestimonialsSection() {
  const [afterState, setAfterState] = useState<Record<string, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const node = containerRef.current;
    if (!node) return;

    node.scrollBy({ left: direction * 360, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionHeading
        title="Histórias reais de transformação"
        subtitle="Do primeiro código ao primeiro salário tech: cada card mostra uma virada de carreira realista e inspiradora."
      />

      <Reveal>
        <div className="mb-5 flex justify-end gap-2">
          <button className="slider-nav-btn" onClick={() => scrollByCard(-1)}>
            ←
          </button>
          <button className="slider-nav-btn" onClick={() => scrollByCard(1)}>
            →
          </button>
        </div>
      </Reveal>

      <div
        ref={containerRef}
        className="horizontal-scroll flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
      >
        {testimonials.map((item, index) => {
          const isAfter = afterState[item.id] ?? false;

          return (
            <motion.article
              key={item.id}
              className="glass-card min-w-[320px] snap-center rounded-3xl p-5 md:min-w-[360px]"
              whileHover={{ y: -6, rotate: index % 2 ? 0.7 : -0.7 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-50">{item.name}</h3>
                  <p className="text-sm text-cyan-200">{item.company}</p>
                </div>
                <button
                  className={`toggle-switch ${isAfter ? "is-after" : ""}`}
                  onClick={() =>
                    setAfterState((prev) => ({
                      ...prev,
                      [item.id]: !(prev[item.id] ?? false),
                    }))
                  }
                >
                  <span className="toggle-knob" />
                  <span className="sr-only">Alternar antes/depois</span>
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={isAfter ? "after" : "before"}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                >
                  <Image
                    src={isAfter ? item.afterPhoto : item.beforePhoto}
                    alt={item.name}
                    width={320}
                    height={200}
                    className="h-44 w-full rounded-2xl object-cover"
                  />
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">“{item.quote}”</p>
                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm">
                    <p className="text-slate-300">
                      <span className="text-slate-500">Cargo:</span>{" "}
                      {isAfter ? item.afterRole : item.beforeRole}
                    </p>
                    <p className="text-slate-300">
                      <span className="text-slate-500">Salário:</span>{" "}
                      {isAfter ? item.afterSalary : item.beforeSalary}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

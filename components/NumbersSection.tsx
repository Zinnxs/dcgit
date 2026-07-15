"use client";

/**
 * Impact metrics section with in-view count-up animation and a compact timeline
 * to reinforce institutional growth through dynamic yet smooth visual rhythm.
 */
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";
import { metrics } from "./data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const timeline = ["2019: Fundação", "2021: 3 mil alunos", "2023: 200 empresas", "2026: referência nacional"];

export function NumbersSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-24 lg:px-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.22),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(6,182,212,0.16),transparent_45%)]" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Números que impressionam" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <Reveal key={`${metric.prefix}-${metric.value}`} delay={index * 0.08}>
              <motion.div whileHover={{ y: -5 }} className="glass-card rounded-3xl p-5 text-center">
                <p className="font-mono text-3xl font-bold text-slate-50 sm:text-4xl">
                  {metric.prefix}
                  {inView ? <CountUp end={metric.value} duration={2.5} /> : 0}
                  {metric.suffix}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 grid gap-4 rounded-3xl border border-white/10 bg-white/4 p-5 sm:grid-cols-4">
            {timeline.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

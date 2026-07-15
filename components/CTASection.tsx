"use client";

/**
 * Final conversion block with oversized CTA, ambient glows and gentle pulse to
 * close the narrative with high contrast intent but calm visual intensity.
 */
import { motion } from "framer-motion";
import { RippleButton } from "./RippleButton";
import { Reveal } from "./Reveal";

export function CTASection() {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 lg:px-10">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_at_40%_10%,rgba(139,92,246,0.2),transparent_45%),radial-gradient(circle_at_80%_90%,rgba(6,182,212,0.16),transparent_45%)]" />
      <Reveal>
        <div className="glass-card rounded-3xl px-6 py-12 text-center sm:px-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Sua vaga no mercado tech começa aqui.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Junte-se a mais de 12 mil profissionais que já transformaram suas carreiras com o DevClub.
          </p>
          <motion.div
            className="mt-8 inline-flex"
            animate={{ scale: [1, 1.025, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <RippleButton className="bg-gradient-to-r from-violet-400/95 via-cyan-300/95 to-amber-300/95 px-8 py-4 text-base text-slate-950">
              Quero ser um Dev Completo
            </RippleButton>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}

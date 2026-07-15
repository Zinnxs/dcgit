"use client";

/**
 * Hero combines animated badge/title reveal, CTA pulse, parallax and floating
 * metrics card to deliver an immediate “wow” while keeping soft dark aesthetics.
 */
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { HeroParticles } from "./HeroParticles";
import { RippleButton } from "./RippleButton";
import { Reveal } from "./Reveal";

export function HeroSection() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 70]);

  return (
    <section id="home" className="relative overflow-hidden pt-32">
      <motion.div style={{ y: parallaxY }} className="absolute inset-0 -z-20">
        <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-violet-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-[120px]" />
      </motion.div>
      <HeroParticles />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          <Reveal>
            <span className="inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs text-cyan-200">
              🚀 A formação que o mercado tech confia
            </span>
          </Reveal>

          <motion.h1
            className="mt-6 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.025, delayChildren: 0.15 },
              },
            }}
          >
            {"DevClub – Onde programadores viram protagonistas".split("").map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Formações completas, mentorias ao vivo e a comunidade que mais cresce no Brasil. Do zero ao sênior, a gente te leva.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY }}
              className="mt-8 inline-flex"
            >
              <RippleButton className="bg-gradient-to-r from-violet-400/95 via-cyan-300/95 to-amber-300/95 text-slate-950 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                Quero ser um Dev Completo
                <FaArrowRight className="h-3.5 w-3.5 animate-bounce-x" />
              </RippleButton>
            </motion.div>
          </Reveal>
        </div>

        <Reveal className="flex justify-center lg:justify-end" delay={0.15}>
          <motion.div
            className="glass-card w-full max-w-sm rounded-3xl p-6"
            animate={{ y: [0, -8, 0], rotate: [0, 1.2, 0, -1.2, 0] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">Métricas em tempo real</p>
            <div className="mt-6 space-y-5 text-slate-50">
              <div>
                <p className="text-3xl font-bold">12.000+</p>
                <p className="text-sm text-slate-300">Alunos em evolução ativa</p>
              </div>
              <div>
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm text-slate-300">Empregabilidade após a trilha</p>
              </div>
              <div>
                <p className="text-3xl font-bold">500+</p>
                <p className="text-sm text-slate-300">Empresas parceiras contratando</p>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

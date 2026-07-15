"use client";

/**
 * “Sobre” section presents four learning pillars in interactive glass cards that
 * expand and reveal details on hover with soft transitions and color accents.
 */
import { motion } from "framer-motion";
import { FaBookOpen, FaBriefcase, FaUsers, FaVideo } from "react-icons/fa";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const pillars = [
  {
    title: "Formação Completa",
    text: "Trilha do básico ao avançado, com projetos reais para consolidar cada etapa.",
    icon: FaBookOpen,
  },
  {
    title: "Mentoria ao Vivo",
    text: "Encontros semanais com especialistas para tirar dúvidas e acelerar evolução.",
    icon: FaVideo,
  },
  {
    title: "Comunidade",
    text: "Networking diário com milhares de devs trocando feedback e oportunidades.",
    icon: FaUsers,
  },
  {
    title: "Empregabilidade",
    text: "Preparação para entrevistas, LinkedIn e portfólio com foco em contratação.",
    icon: FaBriefcase,
  },
];

export function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionHeading
        title="Muito mais que uma escola de programação"
        subtitle="Um ecossistema completo para transformar conhecimento em carreira real no mercado tech."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <Reveal key={pillar.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                className="group glass-card relative h-full min-h-56 rounded-3xl p-6 transition-all duration-300"
              >
                <div className="mb-5 inline-flex rounded-2xl border border-white/20 bg-white/8 p-3 text-cyan-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-50">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 transition-all duration-300 group-hover:text-slate-200">
                  {pillar.text}
                </p>
                <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-colors duration-300 group-hover:border-cyan-300/40" />
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

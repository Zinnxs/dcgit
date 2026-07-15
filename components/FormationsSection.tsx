"use client";

/**
 * Formations section uses depth-aware card motion and a spring glass modal with
 * richer program details plus a fictional lead form for the challenge brief.
 */
import { motion } from "framer-motion";
import { useState } from "react";
import { formations, type Formation } from "./data";
import { GlassModal } from "./GlassModal";
import { RippleButton } from "./RippleButton";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function FormationsSection() {
  const [selected, setSelected] = useState<Formation | null>(null);

  return (
    <section id="formações" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionHeading kicker="Trilhas" title="Nossas Formações" />

      <div className="grid gap-6 md:grid-cols-2">
        {formations.map((formation, index) => (
          <Reveal key={formation.id} delay={index * 0.07}>
            <motion.article
              className="glass-card rounded-3xl p-6"
              whileHover={{ y: -6, rotateX: 2, rotateY: index % 2 === 0 ? 1.6 : -1.6 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4 flex items-center gap-2 text-xs">
                <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-cyan-200">{formation.duration}</span>
                <span className="rounded-full bg-violet-300/15 px-3 py-1 text-violet-200">{formation.level}</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-50">{formation.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{formation.description}</p>
              <div className="mt-6">
                <RippleButton
                  className="bg-white/8 text-slate-100"
                  onClick={() => setSelected(formation)}
                >
                  Saiba mais
                </RippleButton>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>

      <GlassModal
        isOpen={Boolean(selected)}
        onClose={() => setSelected(null)}
        title={selected?.title ?? "Detalhes"}
      >
        {selected ? (
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-200">{selected.details}</p>
            <div>
              <h4 className="mb-2 text-sm font-semibold text-cyan-200">Tecnologias e foco</h4>
              <div className="flex flex-wrap gap-2">
                {selected.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/15 bg-white/6 px-3 py-1 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <form className="grid gap-3 sm:grid-cols-2">
              <input className="modal-input" placeholder="Nome completo" />
              <input className="modal-input" type="email" placeholder="Seu e-mail" />
              <input className="modal-input sm:col-span-2" placeholder="Objetivo com a formação" />
              <RippleButton className="sm:col-span-2 bg-gradient-to-r from-violet-400/90 to-cyan-300/90 text-slate-950" type="submit">
                Quero receber o plano completo
              </RippleButton>
            </form>
          </div>
        ) : null}
      </GlassModal>
    </section>
  );
}

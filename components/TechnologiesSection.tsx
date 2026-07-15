"use client";

/**
 * Technology grid features floating icon chips that rotate on hover and reveal
 * labels, translating curriculum breadth into a playful but polished visual.
 */
import { motion } from "framer-motion";
import { FaAws } from "react-icons/fa";
import {
  SiDocker,
  SiFigma,
  SiGit,
  SiGraphql,
  SiKubernetes,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const techItems = [
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Python", icon: SiPython },
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: FaAws },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: SiGit },
  { name: "Figma", icon: SiFigma },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Kubernetes", icon: SiKubernetes },
];

export function TechnologiesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionHeading title="Tecnologias que ensinamos" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {techItems.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <Reveal key={tech.name} delay={index * 0.05}>
              <motion.div
                className="glass-card group flex min-h-28 flex-col items-center justify-center rounded-2xl p-4 text-slate-100"
                whileHover={{ y: -5, rotateY: 7 }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4 + index * 0.1, repeat: Number.POSITIVE_INFINITY }}
              >
                <Icon className="mb-2 h-8 w-8 text-cyan-200 transition-transform duration-300 group-hover:rotate-12" />
                <span className="text-sm text-slate-300 transition-colors duration-300 group-hover:text-slate-50">
                  {tech.name}
                </span>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

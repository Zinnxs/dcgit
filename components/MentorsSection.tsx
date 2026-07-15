"use client";

/**
 * Mentor cards use 3D flip-on-hover for richer presentation and open a modal
 * on name click to surface extra profile details and a fictitious LinkedIn link.
 */
import Image from "next/image";
import { useState } from "react";
import { GlassModal } from "./GlassModal";
import { mentors } from "./data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function MentorsSection() {
  const [selectedMentor, setSelectedMentor] = useState<(typeof mentors)[number] | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionHeading title="Nossos Tutores" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mentors.map((mentor, index) => (
          <Reveal key={mentor.id} delay={index * 0.06}>
            <article className="mentor-card group h-80 rounded-3xl">
              <div className="mentor-card-inner rounded-3xl">
                <div className="mentor-card-face glass-card rounded-3xl p-5">
                  <Image
                    src={mentor.photo}
                    alt={mentor.name}
                    width={320}
                    height={220}
                    className="h-44 w-full rounded-2xl object-cover"
                  />
                  <button
                    onClick={() => setSelectedMentor(mentor)}
                    className="mt-4 text-left text-lg font-semibold text-slate-50 transition-colors hover:text-cyan-200"
                  >
                    {mentor.name}
                  </button>
                  <p className="text-sm text-slate-300">{mentor.role}</p>
                </div>
                <div className="mentor-card-face mentor-card-back rounded-3xl border border-cyan-300/30 bg-slate-900/90 p-6">
                  <p className="text-base font-medium text-cyan-200">“{mentor.quote}”</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">{mentor.bio}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <GlassModal
        isOpen={Boolean(selectedMentor)}
        onClose={() => setSelectedMentor(null)}
        title={selectedMentor?.name ?? "Tutor"}
      >
        {selectedMentor ? (
          <div className="space-y-4 text-sm text-slate-200">
            <p className="font-semibold text-cyan-200">{selectedMentor.role}</p>
            <p>{selectedMentor.bio}</p>
            <p className="italic text-slate-300">“{selectedMentor.quote}”</p>
            <a
              href="#"
              className="inline-flex rounded-xl border border-white/20 bg-white/6 px-4 py-2 text-slate-100 transition-colors hover:bg-white/12"
            >
              LinkedIn (fictício)
            </a>
          </div>
        ) : null}
      </GlassModal>
    </section>
  );
}

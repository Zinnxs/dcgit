"use client";

/**
 * Uniform section heading block to keep spacing, hierarchy and reveal behavior
 * consistent across all major institutional sections.
 */
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  id?: string;
  kicker?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ id, kicker, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal>
      <div id={id} className="mb-10 text-center">
        {kicker ? (
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-cyan-200/90">{kicker}</p>
        ) : null}
        <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">{title}</h2>
        {subtitle ? <p className="mx-auto mt-4 max-w-3xl text-slate-300">{subtitle}</p> : null}
      </div>
    </Reveal>
  );
}

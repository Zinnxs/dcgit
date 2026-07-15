"use client";

/**
 * Subtle particle network background for hero section. Particles move slowly,
 * connect with thin lines and react to pointer proximity for a premium feel.
 */
import type { ISourceOptions } from "@tsparticles/engine";
import { tsParticles } from "@tsparticles/engine";
import { useEffect } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const options: ISourceOptions = {
  fullScreen: { enable: false },
  background: { color: "transparent" },
  fpsLimit: 60,
  particles: {
    color: { value: ["#8B5CF6", "#06B6D4", "#F59E0B"] },
    links: {
      color: "#a78bfa",
      distance: 110,
      enable: true,
      opacity: 0.18,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      speed: 0.55,
    },
    number: {
      density: { enable: true, width: 700, height: 700 },
      value: 58,
    },
    opacity: { value: 0.45 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      resize: { enable: true },
    },
    modes: {
      grab: {
        distance: 150,
        links: { opacity: 0.35 },
      },
    },
  },
};

export function HeroParticles() {
  useEffect(() => {
    void loadSlim(tsParticles);
  }, []);

  return (
    <Particles
      id="hero-particles"
      options={options}
      className="absolute inset-0 -z-10"
      particlesLoaded={() => Promise.resolve()}
    />
  );
}

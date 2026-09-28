"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useMotionPreference } from "@/components/motion-preferences";

const CoverParticles = () => {
  const [ready, setReady] = useState(false);
  const reducedMotion = useMotionPreference();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 45,
          interactivity: {
            events: {
              onClick: { enable: false, mode: "push" },
              onHover: { enable: false, mode: "repulse" },
            },
          },
          particles: {
            color: { value: "#8dc8b7" },
            links: {
              color: "#8dc8b7",
              distance: 170,
              enable: true,
              opacity: 0.12,
              width: 1,
            },
            move: {
              enable: !reducedMotion,
              outModes: { default: "out" },
              speed: 0.35,
            },
            number: {
              density: { enable: true },
              value: 32,
            },
            opacity: { value: 0.22 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2.5 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default CoverParticles;

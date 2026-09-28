"use client";

import { useMotionPreference } from "@/components/motion-preferences";
import { useEffect, useState } from "react";

const words = [
  "programar",
  "diseñar soluciones",
  "aplicar arquitectura Onion",
  "crear valor",
  "trabajar con IA",
  "conectar con usuarios",
];

export default function RotatingWords() {
  const reducedMotion = useMotionPreference();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex((current) => (current + 1) % words.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  return (
    <span className="rotating-words text-tamarillo-400" aria-label="programar y diseñar soluciones">
      {words.map((word, wordIndex) => (
        <span
          key={word}
          aria-hidden="true"
          className={`font-bold ${wordIndex === index ? "rotating-word" : "invisible"}`}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

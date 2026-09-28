"use client";

import { MotionConfig, useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type MotionPreferences = {
  reduceMotion: boolean;
  paused: boolean;
  systemReducedMotion: boolean;
  toggle: () => void;
};

const MotionContext = createContext<MotionPreferences | null>(null);

export function MotionPreferencesProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const [hydrated, setHydrated] = useState(false);
  const systemReducedMotion = hydrated && Boolean(prefersReducedMotion);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setHydrated(true);
    try {
      setPaused(window.localStorage.getItem("portfolio-motion-paused") === "true");
    } catch {
      // La preferencia sigue funcionando cuando el almacenamiento está bloqueado.
    }
  }, []);

  const toggle = () => {
    const next = !paused;
    setPaused(next);
    try {
      window.localStorage.setItem("portfolio-motion-paused", String(next));
    } catch {
      // Mantener la preferencia en memoria durante esta visita.
    }
  };

  useEffect(() => {
    document.documentElement.dataset.motion = paused || systemReducedMotion ? "paused" : "running";
    return () => { delete document.documentElement.dataset.motion; };
  }, [paused, systemReducedMotion]);

  return (
    <MotionContext.Provider value={{
      reduceMotion: paused || systemReducedMotion,
      paused,
      systemReducedMotion,
      toggle,
    }}>
      <MotionConfig reducedMotion={paused || systemReducedMotion ? "always" : "user"}>
        {children}
      </MotionConfig>
    </MotionContext.Provider>
  );
}

export function useMotionPreference() {
  return useContext(MotionContext)?.reduceMotion ?? false;
}

export function MotionToggle() {
  const preferences = useContext(MotionContext);
  if (!preferences || preferences.systemReducedMotion) return null;
  const Icon = preferences.paused ? Play : Pause;

  return (
    <button
      type="button"
      onClick={preferences.toggle}
      aria-pressed={preferences.paused}
      aria-label="Pausar animaciones"
      title={preferences.paused ? "Activar animaciones" : "Pausar animaciones"}
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/5 hover:text-tamarillo-300 focus-visible:outline-offset-[-3px]"
    >
      <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
    </button>
  );
}

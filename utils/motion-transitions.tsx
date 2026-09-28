import { Variants } from "framer-motion";

export const fadeIn = (position: string) => {
  return {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: 0.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    hidden: {
      opacity: 0,
      y: position === "bottom" ? -80 : 0,
      x: position === "right" ? 80 : 0,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: 0.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// Aparición suave desde abajo, ideal para reveals al hacer scroll.
export const fadeInUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.6,
      delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

// Contenedor que escalona la aparición de sus hijos (stagger).
export const staggerContainer = (
  staggerChildren = 0.12,
  delayChildren = 0.1
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Variante hija para usarse dentro de un staggerContainer.
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

// Entrada tipo "slide" lateral, pensada para ítems de una línea de tiempo
// que se despliegan uno debajo del otro dentro de un staggerContainer.
export const timelineItem: Variants = {
  hidden: { opacity: 0, x: 120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      mass: 0.7,
    },
  },
};

// Escala/entrada para tarjetas.
export const scaleIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

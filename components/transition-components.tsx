"use client";

import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/utils/motion-transitions";

export type MotionTransitionProps = {
  children: React.ReactNode;
  className?: string;
  position: "right" | "bottom";
};

export function MotionTransition(props: MotionTransitionProps) {
  const { children, className, position } = props;

  return (
    <motion.div
      variants={fadeIn(position)}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={className}
    >
      {children}
    </motion.div>
  );
}

export type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

// Revela su contenido cuando entra en el viewport (una sola vez).
export function RevealOnScroll(props: RevealOnScrollProps) {
  const { children, className, delay = 0 } = props;

  return (
    <motion.div
      variants={fadeInUp(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default MotionTransition;

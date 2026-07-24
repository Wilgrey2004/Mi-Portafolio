"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/utils/motion-transitions";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  /** Cuando es hijo de un staggerContainer, usa la variante staggerItem */
  asStaggerItem?: boolean;
};

// Tarjeta reutilizable con estilo glass/bento y animación opcional.
export function Card({
  children,
  className = "",
  hover = true,
  asStaggerItem = false,
}: CardProps) {
  return (
    <motion.div
      variants={asStaggerItem ? staggerItem : undefined}
      className={`card-glass ${hover ? "card-glass-hover" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default Card;

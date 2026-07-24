"use client";

import { motion } from "framer-motion";
import { techCategories } from "@/data";
import { staggerContainer, staggerItem } from "@/utils/motion-transitions";

// Distribución tipo bento: la primera tarjeta ocupa más espacio en escritorio.
const spanFor = (index: number) => {
  if (index === 0) return "md:col-span-2 md:row-span-1";
  return "";
};

const Technologies = () => {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0.15)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {techCategories.map((category, index) => (
        <motion.div
          key={category.id}
          variants={staggerItem}
          className={`card-glass card-glass-hover group ${spanFor(index)}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-tamarillo-500/20 text-tamarillo-400 transition-colors duration-300 group-hover:bg-tamarillo-500 group-hover:text-white">
              {category.icon}
            </span>
            <h3 className="text-lg font-bold text-white md:text-xl">
              {category.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {category.items.map((item, i) => (
              <span key={i} className="tech-badge">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Technologies;

"use client";

import { dataAboutPage } from "@/data";
import { motion } from "framer-motion";
import { staggerContainer, timelineItem } from "@/utils/motion-transitions";

// Meses en español (abreviados) → número de mes, para ordenar cronológicamente.
const MONTHS: Record<string, number> = {
  ene: 1,
  feb: 2,
  mar: 3,
  abr: 4,
  may: 5,
  jun: 6,
  jul: 7,
  ago: 8,
  sep: 9,
  oct: 10,
  nov: 11,
  dic: 12,
};

// Convierte una fecha como "Mar 2025" o "Jul 2026 — Actualidad" en un número
// comparable (año * 100 + mes) para ordenar del más antiguo al más reciente.
const toSortKey = (date: string): number => {
  const [rawMonth, rawYear] = date.trim().split(/\s+/);
  const month = MONTHS[rawMonth?.toLowerCase()] ?? 0;
  const year = parseInt(rawYear, 10) || 0;
  return year * 100 + month;
};

const timelineData = [...dataAboutPage].sort(
  (a, b) => toSortKey(a.date) - toSortKey(b.date)
);

const Timeline = () => {
  return (
    <motion.div
      variants={staggerContainer(0.35, 0.15)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative w-full max-w-3xl mx-auto mt-4"
    >
      {/* Línea vertical que conecta todos los logros */}
      <span className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-tamarillo-500/70 via-tamarillo-500/30 to-transparent" />

      <div className="flex flex-col gap-y-10">
        {timelineData.map((data) => (
          <motion.div
            key={data.id}
            variants={timelineItem}
            className="relative pl-10"
          >
            {/* Punto marcador sobre la línea */}
            <span className="absolute left-0 top-[6px] w-4 h-4 rounded-full bg-tamarillo-500 ring-4 ring-my-green-950 shadow-[0_0_0_4px_rgba(212,43,43,0.15)]" />

            {/* Fecha */}
            <time className="text-xs font-semibold tracking-wide uppercase text-tamarillo-300">
              {data.date}
            </time>

            {/* Título y subtítulo */}
            <h3 className="text-lg font-bold leading-snug text-white">
              {data.title}
            </h3>
            <p className="mb-2 text-sm font-medium text-my-green-200">
              {data.subtitle}
            </p>

            {/* Descripción */}
            <p className="text-sm text-gray-400">{data.description}</p>

            {/* Tecnologías */}
            {data.tech && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {data.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 text-xs rounded-full bg-white/5 text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Enlace */}
            {data.link && (
              <a
                href={data.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm font-medium transition-colors text-tamarillo-400 hover:text-tamarillo-300 hover:underline"
              >
                {data.link.label} →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;

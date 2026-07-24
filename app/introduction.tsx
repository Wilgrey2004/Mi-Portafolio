"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MessageCircle, FolderGit2, FileText } from "lucide-react";
import { contactInfo } from "@/data";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/motion-transitions";

const Introduction = () => {
  return (
    <div className="z-20 flex items-center w-full min-h-[100vh] bg-my-green-700/40 backdrop-blur-[2px]">
      <div className="z-20 grid items-center w-full max-w-6xl gap-6 px-6 py-24 mx-auto md:py-0 md:grid-cols-2">
        <motion.div
          variants={fadeInUp(0.1)}
          initial="hidden"
          animate="visible"
          className="flex justify-center"
        >
          <Image
            src="/home-4.png"
            priority
            width={600}
            height={600}
            alt="Wilgrey Ravelo Cruz"
            className="w-full max-w-[420px] md:max-w-[520px] h-auto drop-shadow-2xl"
          />
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12, 0.15)}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center max-w-xl mt-5"
        >
          <motion.span
            variants={staggerItem}
            className="inline-block w-fit px-3 py-1 mb-4 mx-auto md:mx-0 text-sm rounded-full border border-tamarillo-500/50 bg-tamarillo-500/10 text-tamarillo-300"
          >
            Desarrollador Full Stack · C# / .NET & React
          </motion.span>

          <motion.h1
            variants={staggerItem}
            className="text-3xl leading-tight text-center md:text-left md:text-5xl mb-4"
          >
            Las ideas se transforman en software al momento de
            <TypeAnimation
              sequence={[
                "programar",
                2000,
                "diseñar soluciones",
                2000,
                "aplicar arquitectura Onion",
                2000,
                "crear valor",
                2000,
                "trabajar con IA",
                2000,
                "conectar con usuarios",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-bold text-tamarillo-500"
            />
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mx-auto mb-8 text-center text-gray-300 md:mx-0 md:text-left"
          >
            Desarrollador full stack (C# / .NET y React) enfocado en construir
            software mantenible aplicando arquitectura Onion y patrones de
            diseño. Trabajo con desarrollo guiado por especificaciones y flujos
            asistidos por agentes de IA para acelerar la entrega sin sacrificar
            la calidad del código.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-4 py-2 transition-all border rounded-xl border-white/20 hover:border-white hover:shadow-white/30 hover:shadow-lg text-md w-fit"
            >
              <FolderGit2 size={18} /> Ver proyectos
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 font-semibold transition-all border rounded-xl border-tamarillo-500 bg-tamarillo-500 hover:bg-transparent hover:text-tamarillo-400 text-md w-fit hover:shadow-tamarillo-950/40 hover:shadow-lg"
            >
              <MessageCircle size={18} /> Contáctame
            </Link>

            <a
              href={contactInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 transition-all border rounded-xl text-amber-500 border-amber-600/60 hover:shadow-amber-950/40 hover:shadow-lg text-md w-fit"
            >
              <FileText size={18} /> Mi CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;

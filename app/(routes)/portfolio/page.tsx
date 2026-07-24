"use client";

import Avatarporfoleo from "@/components/avatar-porfoleo";
import CircleImage from "@/components/circle-Image";
import ContainerPage from "@/components/container";
import PorfoleoBox from "@/components/porfoleo-box";
import TransitionPages from "@/components/transition-pages";
import { RevealOnScroll } from "@/components/transition-components";
import { dataPortfolio } from "@/data";
import { staggerContainer } from "@/utils/motion-transitions";
import { motion } from "framer-motion";
import React from "react";

const PorfoleoPage = () => {
  return (
    <>
      <TransitionPages />
      <CircleImage />

      <ContainerPage>
        <div className="flex flex-col justify-center h-full">
          <RevealOnScroll>
            <h1 className="section-title mb-2 text-center">
              Mis últimos{" "}
              <span className="font-bold text-tamarillo-500">
                trabajos realizados
              </span>
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-center text-gray-300">
              Una selección de proyectos personales, académicos y profesionales
              con distintas tecnologías del stack.
            </p>
          </RevealOnScroll>

          <motion.div
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative z-10 grid max-w-6xl gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-4"
          >
            {dataPortfolio.map((item) => (
              <PorfoleoBox key={item.id} data={item} />
            ))}
          </motion.div>
        </div>
      </ContainerPage>
    </>
  );
};

export default PorfoleoPage;

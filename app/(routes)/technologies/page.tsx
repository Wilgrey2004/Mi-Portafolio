"use client";

import CircleImage from "@/components/circle-Image";
import ContainerPage from "@/components/container";
import CoverParticles from "@/components/cover-particles";
import Technologies from "@/components/technologies";
import TransitionPages from "@/components/transition-pages";
import { RevealOnScroll } from "@/components/transition-components";
import React from "react";

const TechnologiesPage = () => {
  return (
    <>
      <CoverParticles />
      <TransitionPages />
      <CircleImage />

      <ContainerPage>
        <RevealOnScroll>
          <h1 className="section-title mb-4">
            Tecnologías que{" "}
            <span className="font-bold text-tamarillo-500">manejo</span>
          </h1>
          <p className="max-w-2xl mb-10 text-center text-gray-300 md:text-left">
            Mi stack como desarrollador full stack: desde lenguajes y frameworks
            hasta bases de datos, herramientas y flujos de trabajo asistidos por
            inteligencia artificial.
          </p>
        </RevealOnScroll>

        <Technologies />
      </ContainerPage>
    </>
  );
};

export default TechnologiesPage;

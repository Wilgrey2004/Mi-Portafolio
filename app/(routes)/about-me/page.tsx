"use client";

import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import Counterservices from "@/components/counter-services";
import Coverparticles from "@/components/cover-particles";
import Timeline from "@/components/time-line";
import TransitionPages from "@/components/transition-pages";
import React from "react";

const PageAboutMe = () => {
  return (
    <div>
      <Coverparticles />
      <TransitionPages />
      <ContainerPage>
        <Avatar />
        <h1 className="text-2xl lading-tight text-center md:text-5xl md:text-left md:mb-10">
          Toda Mi {"  "}
          <span className="text-tamarillo-500 font-bold">
            Trayectoria Como Desarrollador
          </span>
        </h1>

        <Counterservices></Counterservices>
        <Timeline></Timeline>
      </ContainerPage>
    </div>
  );
};

export default PageAboutMe;

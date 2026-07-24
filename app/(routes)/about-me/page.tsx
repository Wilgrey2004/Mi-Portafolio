"use client";

import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import Counterservices from "@/components/counter-services";
import Coverparticles from "@/components/cover-particles";
import Timeline from "@/components/time-line";
import TransitionPages from "@/components/transition-pages";

const PageAboutMe = () => {
  return (
    <>
      <Coverparticles />
      <TransitionPages />
      <ContainerPage>
        <Avatar />
        <h1 className="text-2xl leading-tight text-center md:text-5xl md:text-left md:mb-6">
          Toda mi{" "}
          <span className="font-bold text-tamarillo-500">
            trayectoria como desarrollador
          </span>
        </h1>

        <Counterservices />
        <Timeline />
      </ContainerPage>
    </>
  );
};

export default PageAboutMe;

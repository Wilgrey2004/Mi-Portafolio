"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className="z-20 w-full mt-11 bg-my-green-700/50 ">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <Image
          src="/home-4.png"
          priority
          width="600"
          height="600"
          alt="Profile pic"
        ></Image>

        <div className="flex flex-col justify-center max-w-md mt-5">
          <h1 className="md-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            Las ideas se transforman en software al momento de
            <TypeAnimation
              sequence={[
                "programar",
                2000,
                "diseñar soluciones",
                2000,
                "desarrollar experiencias",
                2000,
                "crear valor",
                2000,
                "aprender constantemente",
                2000,
                "innovar",
                2000,
                "conectar con usuarios",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-bold text-tamarillo-700"
            />
          </h1>

          <p className="mx-auto mb-2 md:mx-0 md:mb-8">
            Como desarrollador de software, me enfoco en crear soluciones que no
            solo funcionen correctamente, sino que también se sientan intuitivas
            y agradables para el usuario. Combino lógica, diseño e
            interactividad para transformar ideas en experiencias digitales
            claras, eficientes y memorables. Disfruto enfrentar nuevos retos
            técnicos, aprender de forma constante y mejorar cada proyecto en el
            que participo, siempre con el objetivo de aportar valor real y
            construir software bien hecho.
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <Link
              href={"/portfolio"}
              className="px-3 py-2 transition-all hover:shadow-white/50 hover:shadow-xl text-md w-fit rounded-xl border "
            >
              Ver proyectos
            </Link>

            <Link
              href={"/about-me"}
              className="text-tamarillo-700 border-tamarillo-700 px-3 py-2 transition-all hover:shadow-tamarillo-950/50 hover:shadow-xl text-md w-fit rounded-xl border "
            >
              Sobre mi
            </Link>

            <a
              href="https://rxresu.me/apro24470/wilgrey-ravalo-cruz-cv"
              target="_blanck"
              className="text-amber-600 border-amber-700 px-3 py-2 transition-all hover:shadow-amber-950/50 hover:shadow-xl text-md w-fit rounded-xl border "
            >
              {" "}
              Mi curriculum
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

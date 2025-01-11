"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-my-green-700/50 ">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <Image
          src="/home-4.png"
          priority
          width="600"
          height="600"
          alt="Profile pic"
        ></Image>

        <div className="flex flex-col justify-center max-w-md">
          <h1 className="md-5 text-2xl  leading-tight text-center md:text-left md:text-4xl md:mb-10">
            Lo que puedas imaginas lo puedes,{" "}
            <TypeAnimation
              sequence={[
                "Programar",
                1500,
                "desarrollar",
                1500,
                "crear",
                1500,
                "innovar",
                1500,
                "aprender",
                1500,
                "explorar",
                1500,
                "conectar",
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-bold text-tamarillo-700"
            />
          </h1>

          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
            Como desarrollador, me dedico a convinar diseño he interacrtividad
            para generar expriencias inolidables.
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

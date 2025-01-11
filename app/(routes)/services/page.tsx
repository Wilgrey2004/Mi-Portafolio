import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-Image";
import SliderServices from "@/components/slider-services";
import TransitionPages from "@/components/transition-pages";
import Link from "next/link";
import React from "react";

const PageServices = () => {
  return (
    <>
      <TransitionPages />

      <CircleImage></CircleImage>
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
        <div className="max-w-[450px] mt-32 md:mt-10 flex flex-col items-center  ">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis{" "}
            <span className="font-bold text-tamarillo-500"> servicios.</span>
          </h1>
          <p className="mb-10 text-center  text-gray-300">
            ✨ ¡Transformo ideas en experiencias digitales únicas! ✨
            <br />
            ✨ Creo sitios web y aplicaciones atractivas, funcionales y
            responsivas con HTML, CSS y JavaScript, diseñando interfaces que
            reflejan la esencia de cada marca.
            <br />
            💻 También soy experto en bases de datos y backend, desarrollando
            APIs eficientes con C# y Node.js para garantizar un rendimiento
            sólido. ¡Hagamos realidad tu proyecto! 🚀
          </p>
          <Link
            href={"https://wa.me/18494061420?text=Saludos"}
            target="_blank"
            className=" hover:-translate-y-1 px-3 py-2 border border-white transition hover:border-transparent shadow-sm hover:shadow-tamarillo-500/50 hover:shadow-lg shadow-tamarillo-500/50 rounded-lg bg-secondary hover:bg-tamarillo-500"
          >
            Contacta conmigo
          </Link>
        </div>

        {/* SLIDER */}
        <div>
          <SliderServices></SliderServices>
        </div>
      </div>
    </>
  );
};

export default PageServices;

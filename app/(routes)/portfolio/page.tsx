import Avatarporfoleo from "@/components/avatar-porfoleo";
import CircleImage from "@/components/circle-Image";
import ContainerPage from "@/components/container";
import PorfoleoBox from "@/components/porfoleo-box";
import TransitionPages from "@/components/transition-pages";
import { dataPortfolio } from "@/data";
import { Container } from "postcss";
import React from "react";

const PorfoleoPage = () => {
  return (
    <ContainerPage>
      <TransitionPages></TransitionPages>

      <CircleImage></CircleImage>

      <div className="flex flex-col justify-center h-full ">
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5 ">
          Mis ultimos{" "}
          <span className="font-bold text-tamarillo-500">
            {" "}
            trabajos realizados{" "}
          </span>
        </h1>
        <div className="relative z-10 grid max-w-5xl gap-6 mx-auto md:grid-cols-4 ">
          {dataPortfolio.map((item) => (
            <PorfoleoBox key={item.id} data={item} />
          ))}
        </div>
      </div>
    </ContainerPage>
  );
};

export default PorfoleoPage;

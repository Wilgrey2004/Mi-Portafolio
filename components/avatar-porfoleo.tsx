"use client";
import React from "react";
import MotionTransition from "./transition-components";
import Image from "next/image";

const Avatarporfoleo = () => {
  return (
    <div>
      <MotionTransition
        position="bottom"
        className="bottom-0 left-0 hidden md:inline-block md:absolute"
      >
        <Image
          alt="avatar porfoleo"
          src={"/avatar-works.png"}
          width={300}
          height={300}
          className="w-full h-full"
        ></Image>
      </MotionTransition>
    </div>
  );
};

export default Avatarporfoleo;

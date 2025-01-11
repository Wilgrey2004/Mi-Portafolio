"use client";

import React from "react";
import MotionTransition from "./transition-components";
import Image from "next/image";

const Avatar = () => {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 right-0 hidden md:inline-block md:absolute"
    >
      <Image
        src={"/avatar-1.png"}
        width="350"
        height="350"
        className="w-full h-full"
        alt="avatar"
      ></Image>
    </MotionTransition>
  );
};

export default Avatar;

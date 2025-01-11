import React from "react";
import MotionTransition from "./transition-components";
import Image from "next/image";
const AvatarServices = () => {
  return (
    <MotionTransition
      position="right"
      className="bottom-0 left-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/services.png"
        width="250"
        height="250"
        className="w-[250px] h-full "
        alt="Particles "
      />
    </MotionTransition>
  );
};

export default AvatarServices;

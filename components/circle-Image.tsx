"use client";

import Image from "next/image";
import React from "react";

const CircleImage = () => {
  return (
    <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
      <Image
        src="/circles.png"
        width={250}
        height={250}
        alt="circle image"
        className="w-full h-full"
      />
    </div>
  );
};

export default CircleImage;

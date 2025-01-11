"use client";

import React from "react";
import { dataCounter } from "@/data";
import CountUp from "react-countup";
import { div } from "framer-motion/client";
const Counterservices = () => {
  return (
    <div className="grid  justify-between max-w-3xl grid-cols-2 gap-3 mx-auto my-8 md:flex md:grid-cols-4 md:gap-6 ">
      {dataCounter.map(
        ({ id, endCounter, text, lineRight, lineRightMobile }) => (
          <div key={id} className={`${lineRight && "ltr"}`}>
            <div
              className={`${lineRight && "px-4 border-e-2  "} 
            ${!lineRightMobile && "border-e-transparent"} "}`}
            >
              <p className="flex md-2 text-2xl md:text-4xl text-tamarillo-500 font-extrabold">
                {" "}
                + <CountUp end={endCounter} start={0} duration={5} />{" "}
              </p>
              <p className="text-xs uppercase max-w-[100px]">{text}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Counterservices;

"use client";

import { dataCounter } from "@/data";
import CountUp from "react-countup";

const Counterservices = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 my-8 md:justify-start md:gap-14">
      {dataCounter.map(({ id, endCounter, text }) => (
        <div key={id} className="text-center">
          <p className="text-3xl font-extrabold md:text-4xl text-tamarillo-500">
            +
            <CountUp end={endCounter} start={0} duration={4} />
          </p>
          <p className="mt-1 text-xs uppercase tracking-wide text-white/70 max-w-[120px] mx-auto">
            {text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Counterservices;

import React from "react";
import MotionTransition from "@/components/transition-components";
import Link from "next/link";
import { socialNetworks } from "@/data";
const Header = () => {
  return (
    <MotionTransition
      className="absolute z-40 inline-block w-full top-5 md:top-10"
      position="bottom"
    >
      <div>
        <header>
          <div className="container justify-between max-w-6xl mx-auto md:flex">
            <Link href="/">
              <h1 className="my-4 text-4xl font-bold text-center md:text-left">
                Wilgrey{" "}
                <span className="text-tamarillo-500 transition-all hover:scale-110">
                  MD
                </span>
              </h1>
            </Link>
            <div className="flex items-center justify-center gap-7">
              {socialNetworks.map(({ logo, src, id }) => (
                <Link
                  key={id}
                  href={src}
                  target="_blank"
                  className="
                transition-all  hover:text-tamarillo-500 hover:scale-110"
                >
                  {logo}
                </Link>
              ))}
            </div>
          </div>
        </header>
      </div>
    </MotionTransition>
  );
};

export default Header;

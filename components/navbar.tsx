"use client";
import { MotionTransition } from "@/components/transition-components";
import { itemsNavbar } from "@/data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  const route = usePathname();
  return (
    <MotionTransition
      position="right"
      className="flex z-40 fixed flex-col items-center w-full justify-center mt-auto h-max bottom-4 md:bottom-5"
    >
      <nav>
        <div className="flex items-center justify-center gap-1 px-3 py-1 rounded-full bg-white/50 backdrop-blur-md sm:gap-2 sm:px-4">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`relative px-2 py-2 transition duration-150 rounded-full group sm:px-3 hover:bg-tamarillo-500 hover:-translate-y-1 hover:scale-110 ${
                route === item.link && "bg-tamarillo-500"
              }`}
            >
              <Link href={item.link} aria-label={item.title}>
                {item.icon}
              </Link>
              <span className="absolute px-2 py-1 text-xs text-white transition-opacity -translate-x-1/2 rounded-md opacity-0 pointer-events-none bottom-14 left-1/2 bg-my-green-950/90 whitespace-nowrap group-hover:opacity-100">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;

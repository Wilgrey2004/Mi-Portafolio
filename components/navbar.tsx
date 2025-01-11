"use client";
import { MotionTransition } from "@/components/transition-components";
import { itemsNavbar } from "@/data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { div } from "framer-motion/client";

export const Navbar = () => {
  const route = usePathname();
  return (
    <MotionTransition
      position="right"
      className="flex z-40 fixed flex-col items-center w-full justify-center mt-auto h-max bottom-4 md:bottom-5"
    >
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/50 background-blur-sm">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`px-3 py-2 transition duration-150 rounded-full hover:bg-tamarillo-500 hover:-translate-y-1 hover:scale-110 ${
                route === item.link && "bg-tamarillo-500"
              }`}
            >
              <Link href={item.link}>{item.icon}</Link>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;

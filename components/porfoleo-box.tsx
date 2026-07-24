"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { staggerItem } from "@/utils/motion-transitions";
import React from "react";

interface porfoleoProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
  };
}

const PorfoleoBox = (props: porfoleoProps) => {
  const { data } = props;
  const { title, image, urlGithub, urlDemo } = data;

  return (
    <motion.div
      variants={staggerItem}
      className="flex flex-col overflow-hidden card-glass card-glass-hover group !p-0"
    >
      <div className="relative overflow-hidden">
        <Image
          src={image}
          width={400}
          height={260}
          alt={title}
          className="w-full h-[180px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-my-green-950/80 to-transparent" />
      </div>

      <div className="flex flex-col flex-1 p-4">
        <h3 className="mb-4 text-base font-semibold text-white">{title}</h3>

        <div className="flex flex-wrap gap-2 mt-auto">
          {urlGithub && (
            <Link
              href={urlGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-2 text-sm transition duration-150 rounded-lg bg-white/10 hover:bg-white/20"
            >
              <Github size={16} /> Repositorio
            </Link>
          )}
          {urlDemo && (
            <Link
              href={urlDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-2 text-sm transition duration-150 rounded-lg bg-tamarillo-500 hover:bg-tamarillo-600"
            >
              <ExternalLink size={16} /> Ver demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PorfoleoBox;

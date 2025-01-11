import Image from "next/image";
import Link from "next/link";
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
  const { id, title, image, urlGithub, urlDemo } = data;

  return (
    <div className="p-4 border border-white rounded-xl ">
      <h3 className="mb-4 text-xl">{title}</h3>
      <Image
        src={image}
        width={200}
        height={300}
        alt="image porfoleo"
        className="w-full md:w-[200px] rounded-2xl h-auto "
      />
      <div className="flex gap-5 mt-5 ">
        <Link
          href={urlGithub}
          target="_blank"
          className="p-2 transition duration-150 bg-slate-400 hover:bg-slate-500/80   rounded-lg"
        >
          Github
        </Link>
        <Link
          href={urlDemo}
          target="_blank"
          className="p-2 transition duration-150 bg-tamarillo-500 hover:bg-tamarillo-500/50   rounded-lg"
        >
          Live Demo
        </Link>
      </div>
    </div>
  );
};

export default PorfoleoBox;

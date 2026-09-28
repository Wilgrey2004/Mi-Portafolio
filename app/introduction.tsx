import Image from "next/image";
import Link from "next/link";
import { FileText, FolderGit2, MessageCircle } from "lucide-react";
import { contactInfo } from "@/data";
import RotatingWords from "@/components/rotating-words";

const Introduction = () => (
  <div className="relative z-10 flex min-h-[100svh] w-full items-center">
    <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 pb-40 pt-32 sm:px-8 md:grid-cols-2 md:gap-10 md:pb-40 md:pt-32">
      <div className="order-2 flex justify-center md:order-1">
        <Image
          src="/home-4.png"
          priority
          width={600}
          height={600}
          alt="Ilustración de Wilgrey Ravelo Cruz"
          className="h-auto w-full max-w-[270px] drop-shadow-xl sm:max-w-[340px] md:max-w-[500px]"
        />
      </div>

      <div className="reading-surface order-1 mx-auto flex w-full max-w-xl flex-col justify-center md:order-2 md:mx-0">
        <h1 className="mb-5 text-balance text-center text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-left">
          Las ideas se transforman en software al
          <RotatingWords />
        </h1>

        <p className="mb-4 text-center text-base leading-relaxed text-gray-200 md:text-left">
          Soy Wilgrey, desarrollador full stack con experiencia en backend y
          frontend con C# / .NET 10 y React. Me encanta crear software y trabajar
          con arquitectura cuidada y herramientas de IA.
        </p>
        <p className="mb-8 text-center text-sm leading-relaxed text-gray-300 md:text-left">
          Desarrollo guiado por especificaciones para dar seguimiento claro a
          cada etapa, mantener la calidad del código y que sepas cómo avanza
          tu trabajo.
        </p>

        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/contact"
              className="liquid-hover inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-tamarillo-700 bg-tamarillo-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-tamarillo-600 focus-visible:outline-offset-4"
            >
              <MessageCircle size={18} aria-hidden="true" /> Hablemos de tu proyecto
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-medium text-white transition-colors hover:border-white/60 hover:bg-white/5"
            >
              <FolderGit2 size={18} aria-hidden="true" /> Ver proyectos
            </Link>
          </div>

          <a
            href={contactInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 px-3 py-2 font-medium text-my-green-100 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
          >
            <FileText size={18} aria-hidden="true" /> Ver mi CV
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Introduction;

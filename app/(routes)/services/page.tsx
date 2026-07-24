"use client";

import CircleImage from "@/components/circle-Image";
import ContainerPage from "@/components/container";
import TransitionPages from "@/components/transition-pages";
import ServicesCarousel from "@/components/services-carousel";
import { RevealOnScroll } from "@/components/transition-components";
import { contactInfo } from "@/data";
import Link from "next/link";
import { MessageCircle, Sparkles } from "lucide-react";

const PageServices = () => {
  return (
    <>
      <TransitionPages />
      <CircleImage />

      <ContainerPage>
        {/* Sección de texto editorial con layout asimétrico */}
        <section className="relative mb-14">
          {/* Acento diagonal decorativo detrás del encabezado */}
          <div
            aria-hidden="true"
            className="clip-diagonal-r pointer-events-none absolute -left-6 -top-6 h-40 w-56 rounded-3xl bg-gradient-to-br from-tamarillo-500/25 to-transparent blur-2xl md:h-56 md:w-80"
          />

          <div className="relative grid items-center gap-8 md:grid-cols-12">
            {/* Columna de texto, desplazada respecto al grid recto */}
            <RevealOnScroll className="md:col-span-7 md:col-start-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold tracking-wide uppercase rounded-full text-tamarillo-400 bg-tamarillo-500/15 border border-tamarillo-500/30">
                <Sparkles size={14} /> Lo que puedo construir para ti
              </span>
              <h1 className="section-title mb-4">
                Mis{" "}
                <span className="font-bold text-tamarillo-500">servicios</span>
              </h1>
              <p className="max-w-xl text-gray-300">
                Transformo ideas en software real: aplicaciones full stack, APIs
                sólidas y experiencias frontend cuidadas, con arquitectura limpia
                y flujos asistidos por IA. 🚀
              </p>
            </RevealOnScroll>

            {/* Panel con corte diagonal — propuesta de valor */}
            <RevealOnScroll
              delay={0.15}
              className="md:col-span-5 md:col-start-8 md:mt-10"
            >
              <div className="clip-diagonal card-glass border-tamarillo-500/25 bg-my-green-800/60">
                <p className="text-sm leading-relaxed text-gray-200">
                  No entrego solo código: acompaño el ciclo completo, desde la
                  arquitectura hasta la interfaz, priorizando lo{" "}
                  <span className="font-semibold text-tamarillo-400">
                    mantenible
                  </span>{" "}
                  y lo{" "}
                  <span className="font-semibold text-tamarillo-400">
                    escalable
                  </span>
                  . Menos fricción, más resultados.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Carrusel de servicios */}
        <RevealOnScroll delay={0.1}>
          <ServicesCarousel />
        </RevealOnScroll>

        {/* Llamada a la acción de contacto */}
        <div className="flex justify-center mt-10">
          <Link
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold transition-all border rounded-xl border-tamarillo-500 bg-tamarillo-500 hover:bg-transparent hover:text-tamarillo-400 hover:shadow-lg hover:shadow-tamarillo-950/40"
          >
            <MessageCircle size={20} /> Contacta conmigo
          </Link>
        </div>
      </ContainerPage>
    </>
  );
};

export default PageServices;

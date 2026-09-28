import ContainerPage from "@/components/container";
import ServicesCarousel from "@/components/services-carousel";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const PageServices = () => (
  <main id="main-content" className="relative">

    <ContainerPage>
      <section className="mx-auto max-w-5xl">
        <header className="reading-surface mb-10 max-w-3xl">
          <h1 className="section-title mb-4 text-center md:text-left">
            Mis <span className="font-bold text-tamarillo-400">servicios</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-gray-200">
            Desarrollo soluciones de principio a fin: desde el backend y los
            datos hasta la interfaz, con atención a la arquitectura y al uso
            práctico de herramientas de IA.
          </p>
        </header>

        <div className="carousel-full-bleed">
          <ServicesCarousel />
        </div>
      </section>

      <section className="reading-surface mx-auto mt-12 flex max-w-5xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-gray-200">
          ¿Tienes un proyecto en mente? Cuéntame qué necesitas y lo conversamos.
        </p>
        <Link
          href="/contact"
          className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-xl border border-tamarillo-700 bg-tamarillo-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-tamarillo-600"
        >
          <MessageCircle size={20} aria-hidden="true" /> Hablemos
        </Link>
      </section>
    </ContainerPage>
  </main>
);

export default PageServices;

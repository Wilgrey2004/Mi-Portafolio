import ContainerPage from "@/components/container";
import PorfoleoBox from "@/components/porfoleo-box";
import StellarBackground from "@/components/stellar-background";
import { dataPortfolio } from "@/data";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const featuredProjects = [...dataPortfolio].sort(
  (a, b) => (a.priority ?? Number.MAX_SAFE_INTEGER) - (b.priority ?? Number.MAX_SAFE_INTEGER)
    || Number(Boolean(b.image)) - Number(Boolean(a.image))
);

const PorfoleoPage = () => (
  <main id="main-content" className="relative isolate">
    <StellarBackground />
    <div className="relative z-10">
      <ContainerPage>
        <header className="reading-surface mb-10 text-center">
          <h1 className="section-title mb-3 justify-center text-center">
            Proyectos <span className="font-bold text-tamarillo-400">seleccionados</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-200">
            Una muestra de proyectos personales, académicos y profesionales.
            Consulta el código, las capturas disponibles o sus publicaciones.
          </p>
        </header>
  
        <div className="grid max-w-6xl gap-5 sm:mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((item) => (
            <PorfoleoBox key={item.id} data={item} />
          ))}
        </div>
  
        <section className="reading-surface mx-auto mt-12 flex max-w-6xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">¿Tienes un proyecto parecido?</h2>
            <p className="mt-1 text-sm text-gray-200">
              Cuéntame qué quieres resolver y vemos cómo convertirlo en software.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-xl bg-tamarillo-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-tamarillo-600"
          >
            <MessageCircle size={18} aria-hidden="true" /> Hablemos
          </Link>
        </section>
      </ContainerPage>
    </div>
  </main>
);

export default PorfoleoPage;

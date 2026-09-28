import ContainerPage from "@/components/container";
import Technologies from "@/components/technologies";

const TechnologiesPage = () => {
  return (
    <main id="main-content" className="relative z-10">
      <ContainerPage>
        <header className="reading-surface mb-10">
          <h1 className="section-title mb-4 text-center md:text-left">
            Mi stack para{" "}
            <span className="font-bold text-tamarillo-400">crear software</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-gray-200">
            Desde APIs con .NET 10 hasta interfaces con React, combino datos,
            arquitectura y herramientas de IA para resolver necesidades reales.
          </p>
        </header>

        <Technologies />
      </ContainerPage>
    </main>
  );
};

export default TechnologiesPage;

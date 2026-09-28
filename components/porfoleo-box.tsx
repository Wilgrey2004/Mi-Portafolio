import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface PortfolioProject {
  id: number;
  priority?: number;
  title: string;
  description?: string;
  image: string | null;
  urlGithub: string;
  urlDemo: string;
  urlRelated?: { label: string; url: string };
}

type PortfolioBoxProps = {
  data: PortfolioProject;
};

const PorfoleoBox = ({ data }: PortfolioBoxProps) => {
  const hasProjectRepository = data.urlGithub !== "https://github.com/Wilgrey2004";

  return (
    <article className="card-glass liquid-hover flex h-full flex-col overflow-hidden !p-0">
      {data.image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-my-green-950">
          <Image
            src={data.image}
            fill
            sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 50vw, (max-width: 1152px) 33vw, 360px"
            alt={`Captura de ${data.title}`}
            className="object-cover"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-4">
        <h2 className="mb-2 text-lg font-semibold leading-snug text-white">
          {data.title}
        </h2>
        {data.description && <p className="mb-5 text-sm leading-relaxed text-gray-200">{data.description}</p>}

        <div className="mt-auto flex flex-wrap gap-2">
          {data.urlGithub && (
            <a
              href={data.urlGithub}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${hasProjectRepository ? "Abrir repositorio" : "Ver perfil de GitHub"}: ${data.title}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <Github size={16} aria-hidden="true" />
              {hasProjectRepository ? "Repositorio" : "Perfil GitHub"}
            </a>
          )}
          {data.urlDemo && (
            <a
              href={data.urlDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${data.urlDemo.includes("linkedin.com") ? "Abrir publicación" : "Abrir demostración"} de ${data.title}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-tamarillo-700 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-tamarillo-600"
            >
              <ExternalLink size={16} aria-hidden="true" />
              {data.urlDemo.includes("linkedin.com") ? "Ver publicación" : "Ver demo"}
            </a>
          )}
          {data.urlRelated && (
            <a href={data.urlRelated.url} target="_blank" rel="noopener noreferrer"
              aria-label={`Abrir ${data.urlRelated.label}: ${data.title}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10">
              <Github size={16} aria-hidden="true" />{data.urlRelated.label}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default PorfoleoBox;

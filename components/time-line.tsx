import { dataAboutPage } from "@/data";
import React from "react";

const Timeline = () => {
  return (
    <div className="flex flex-col justify-center divide-y divide-slate-200">
      <div className="w-full max-w-3xl mx-auto md:pb-40 md:pt-20">
        <div className="-my-6">
          {dataAboutPage.map((data) => (
            <div key={data.id} className="relative py-6 pl-8 sm:pl-32 group">
              {/* Título */}
              <h3 className="mb-1 text-xl font-bold sm:mb-0">{data.title}</h3>

              {/* Línea y subtítulo */}
              <div
                className="flex flex-col sm:flex-row items-start mb-2
                group-last:before:hidden before:absolute 
                before:left-2 sm:before:left-0 before:h-full
                before:px-px before:bg-slate-300 sm:before:ml-[6.5rem]
                before:self-start before:-translate-x-1/2
                before:translate-y-3 after:absolute after:left-2
                sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600
                after:border-4 after:box-content after:border-slate-50
                after:rounded-full sm:after:ml-[6.5rem]
                after:-translate-x-1/2 after:translate-y-1.5"
              >
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-24 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  {data.date}
                </time>

                <p className="text-lg font-semibold text-gray-400">
                  {data.subtitle}
                </p>
              </div>

              {/* Descripción */}
              <p className="text-slate-400 max-w-xl mb-3">{data.description}</p>

              {/* Tecnologías */}
              {data.tech && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {data.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Enlace */}
              {data.link && (
                <a
                  href={data.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-indigo-500 hover:underline"
                >
                  {data.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;

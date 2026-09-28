"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { dataAboutChapters, dataAboutIntro, dataAboutPage } from "@/data";
import { useMotionPreference } from "@/components/motion-preferences";

type Entry = (typeof dataAboutPage)[number];
const months: Record<string, string> = { Ene: "01", Mar: "03", Abr: "04", Jun: "06", Jul: "07", Dic: "12" };
const dateValue = (date: string) => {
  if (/^\d{4}$/.test(date)) return date;
  const [month, year] = date.split(" ");
  return `${year}-${months[month] ?? "01"}`;
};

function EntryLink({ item }: { item: Entry }) {
  const links = item.links ?? (item.link ? [item.link] : []);
  if (links.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-1">
      {links.map((link) => (
        <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
          aria-label={`${link.label}: ${item.title} (abre una nueva pestaña)`}
          className="inline-flex min-h-11 items-center gap-2 font-semibold text-tamarillo-300 underline decoration-white/25 underline-offset-8 transition-colors hover:text-white">
          {link.label}<ArrowUpRight size={17} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

function EntryContent({ item }: { item: Entry }) {
  return (
    <article className="max-w-2xl">
      <time dateTime={dateValue(item.date)} className="text-sm text-tamarillo-300">{item.date}</time>
      <h3 className="mt-3 text-xl font-semibold leading-snug md:text-2xl">{item.title}</h3>
      <p className="mt-2 text-sm text-my-green-200">{item.subtitle}</p>
      <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-slate-200">{item.description}</p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">{item.tech?.join(" · ")}</p>
      <div className="mt-3"><EntryLink item={item} /></div>
    </article>
  );
}

export default function Timeline() {
  const reduceMotion = useMotionPreference();
  const project = dataAboutPage.find((item) => item.id === dataAboutIntro.projectEntryId)!;
  return (
    <ol className="about-journey mt-20 space-y-24 md:mt-28 md:space-y-32" aria-label="Capítulos de mi trayectoria">
      {dataAboutChapters.map((chapter) => (
        <li key={chapter.year} className="grid gap-6 md:grid-cols-[190px_minmax(0,1fr)] md:gap-12">
          <div className="md:sticky md:top-28 md:self-start">
            <span className="about-year" aria-hidden="true">{chapter.year}</span>
            <h2 className="mt-3 max-w-sm text-2xl font-semibold leading-tight md:text-3xl">
              <span className="sr-only">{chapter.year}: </span>{chapter.title}
            </h2>
          </div>
          <div className="space-y-10">
            {chapter.entryIds.map((id) => <EntryContent key={id} item={dataAboutPage.find((entry) => entry.id === id)!} />)}
            {chapter.year === "2023" && (
              <figure className="max-w-2xl">
                <motion.div initial={false} whileInView={reduceMotion ? { clipPath: "inset(0% 0% 0% 0%)" } : { clipPath: ["inset(0% 0% 12% 0%)", "inset(0% 0% 0% 0%)"] }}
                  viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
                  <a href={project.link!.url} target="_blank" rel="noopener noreferrer" aria-label="Visitar LOGUZ (abre una nueva pestaña)" className="group block rounded-xl focus-visible:outline-offset-4">
                    <Image src={dataAboutIntro.projectImage} width={1200} height={760} sizes="(max-width: 767px) 100vw, 680px" alt="Captura del sitio web de la funeraria LOGUZ" className="h-auto w-full rounded-xl shadow-[0_18px_50px_rgba(0,0,0,0.4)] transition-[filter] duration-300 group-hover:brightness-110" />
                  </a>
                </motion.div>
                <figcaption className="mt-4 text-sm leading-relaxed text-slate-300">LOGUZ — uno de los proyectos que desarrollé en 2023, junto con SETEA y otras experiencias web.</figcaption>
              </figure>
            )}
            {"courseIds" in chapter && chapter.courseIds && (
              <details className="max-w-2xl">
                <summary className="min-h-11 cursor-pointer py-3 font-medium text-my-green-200 underline decoration-white/20 underline-offset-8">Formación complementaria · 2 certificaciones</summary>
                <div className="mt-5 space-y-8">
                  {chapter.courseIds.map((id) => <EntryContent key={id} item={dataAboutPage.find((entry) => entry.id === id)!} />)}
                </div>
              </details>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

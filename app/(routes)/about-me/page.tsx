import Link from "next/link";
import { dataAboutIntro, dataAboutPage } from "@/data";
import StellarBackground from "@/components/stellar-background";
import Timeline from "@/components/time-line";
import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";

const PageAboutMe = () => {
  const current = dataAboutPage.find((entry) => entry.id === dataAboutIntro.currentEntryId)!;
  return (
    <main id="main-content" className="relative isolate">
      <StellarBackground />
      <div className="relative z-10">
        <div className="about-log mx-auto max-w-6xl px-5 pb-40 pt-28 sm:px-8 md:pb-44 md:pt-36">
          <section aria-labelledby="about-title" className="grid items-end gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
            <div>
              <h1 id="about-title" className="max-w-2xl text-balance text-[clamp(2.75rem,5.8vw,5rem)] font-semibold leading-[1.05] tracking-[-0.035em]">Siempre aprendiendo.<br /><span className="text-tamarillo-300">Siempre construyendo.</span></h1>
              <a href="#trayectoria" className="mt-8 inline-flex min-h-11 items-center gap-3 text-sm font-medium text-slate-200 underline decoration-white/25 underline-offset-8">Explora mi trayectoria<ArrowDown size={18} aria-hidden="true" /></a>
            </div>
            <article aria-labelledby="current-role">
              <h2 className="flex items-center gap-3 text-lg font-medium text-my-green-200"><span aria-hidden="true" className="h-2 w-2 rounded-full bg-my-green-300" />Lo que construyo hoy</h2>
              <h3 id="current-role" className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">{current.title}</h3>
              <p className="mt-3 text-base text-slate-200">{current.subtitle}</p>
              <time dateTime="2026-07" className="mt-2 block text-sm text-slate-300">{current.date}</time>
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-slate-200">{current.description}</p>
              <p className="mt-4 text-sm leading-relaxed text-my-green-200">{current.tech.join(" · ")}</p>
              <Link href="/portfolio" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-tamarillo-300 underline decoration-white/25 underline-offset-8 transition-colors hover:text-white">Ver mis proyectos<ArrowUpRight size={17} aria-hidden="true" /></Link>
            </article>
          </section>
          <div id="trayectoria" className="scroll-mt-28"><Timeline /></div>
          <div className="mt-24 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-2xl font-medium leading-snug sm:text-3xl">¿Construimos tu próximo proyecto?</p>
            <Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-xl bg-tamarillo-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-tamarillo-600">
              <MessageCircle size={18} aria-hidden="true" /> Hablemos
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageAboutMe;

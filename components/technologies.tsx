"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { techCategories, technologyDetails } from "@/data";
import { Code2, Database } from "lucide-react";
import SiAndroidstudio from "@icons-pack/react-simple-icons/icons/SiAndroidstudio";
import SiClaude from "@icons-pack/react-simple-icons/icons/SiClaude";
import SiDart from "@icons-pack/react-simple-icons/icons/SiDart";
import SiDocker from "@icons-pack/react-simple-icons/icons/SiDocker";
import SiDotnet from "@icons-pack/react-simple-icons/icons/SiDotnet";
import SiFlutter from "@icons-pack/react-simple-icons/icons/SiFlutter";
import SiGit from "@icons-pack/react-simple-icons/icons/SiGit";
import SiGithub from "@icons-pack/react-simple-icons/icons/SiGithub";
import SiGo from "@icons-pack/react-simple-icons/icons/SiGo";
import SiJavascript from "@icons-pack/react-simple-icons/icons/SiJavascript";
import SiMysql from "@icons-pack/react-simple-icons/icons/SiMysql";
import SiNetlify from "@icons-pack/react-simple-icons/icons/SiNetlify";
import SiOpencode from "@icons-pack/react-simple-icons/icons/SiOpencode";
import SiReact from "@icons-pack/react-simple-icons/icons/SiReact";
import SiSupabase from "@icons-pack/react-simple-icons/icons/SiSupabase";
import SiTypescript from "@icons-pack/react-simple-icons/icons/SiTypescript";
import SiVuedotjs from "@icons-pack/react-simple-icons/icons/SiVuedotjs";

const brandIcon = (file: string, monochrome = false) => (
  <Image
    src={`/technology-icons/${file}`}
    alt=""
    aria-hidden="true"
    width={32}
    height={32}
    unoptimized
    className={monochrome ? "technology-icon-monochrome" : undefined}
  />
);

const technologyIcons: Record<string, ReactNode> = {
  ".NET 10": <SiDotnet color="default" aria-hidden="true" />,
  "React": <SiReact color="default" aria-hidden="true" />,
  "Vue 3": <SiVuedotjs color="default" aria-hidden="true" />,
  "Flutter": <SiFlutter color="default" aria-hidden="true" />,
  "C#": brandIcon("csharp.svg"),
  "Go": <SiGo color="default" aria-hidden="true" />,
  "TypeScript": <SiTypescript color="default" aria-hidden="true" />,
  "SQL": <Database aria-hidden="true" />,
  "JavaScript": <SiJavascript color="default" aria-hidden="true" />,
  "Dart": <SiDart color="default" aria-hidden="true" />,
  "SQL Server": brandIcon("sql-server.svg"),
  "Oracle 19c": brandIcon("oracle.svg"),
  "MySQL": <SiMysql color="default" aria-hidden="true" />,
  "Isar": brandIcon("isar.png"),
  "Supabase": <SiSupabase color="default" aria-hidden="true" />,
  "Claude Code": <SiClaude color="default" aria-hidden="true" />,
  "Opencode": <SiOpencode color="#ffffff" aria-hidden="true" />,
  "Spec-kit": brandIcon("spec-kit.webp"),
  "OpenSpec": brandIcon("openspec.svg"),
  "GPT Codex": brandIcon("openai.svg", true),
  "VS Code": brandIcon("vs-code.svg"),
  "Visual Studio": brandIcon("visual-studio.svg"),
  "Android Studio": <SiAndroidstudio color="default" aria-hidden="true" />,
  "Netlify": <SiNetlify color="default" aria-hidden="true" />,
  "Git": <SiGit color="default" aria-hidden="true" />,
  "GitHub": <SiGithub color="#ffffff" aria-hidden="true" />,
  "Docker": <SiDocker color="default" aria-hidden="true" />,
};

// Keep the visible groups and their content sourced from the shared portfolio data.
const technologyGroups = [3, 2, 4, 1, 5].map((id) => techCategories.find((group) => group.id === id)!);

type Preview = { name: string; key: string; anchor: HTMLElement; left: number; top: number };

const Technologies = () => {
  const tooltipId = useId();
  const [preview, setPreview] = useState<Preview | null>(null);

  const popup = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const popupHovered = useRef(false);

  const cancelClose = () => window.clearTimeout(closeTimer.current);
  const queueClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => {
      if (!popupHovered.current && document.activeElement !== preview?.anchor) setPreview(null);
    }, 180);
  };

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  useLayoutEffect(() => {
    if (!preview || !popup.current) return;
    const anchor = preview.anchor;
    const measure = () => {
      const rect = anchor.getBoundingClientRect();
      if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
        setPreview(null);
        return;
      }
      const bounds = popup.current?.getBoundingClientRect();
      if (!bounds) return;
      const navigation = document.querySelector(".site-nav")?.getBoundingClientRect();
      const bottom = navigation?.top ?? window.innerHeight - 16;
      const left = Math.max(16, Math.min(rect.left + rect.width / 2 - bounds.width / 2, window.innerWidth - bounds.width - 16));
      const below = rect.bottom + 14;
      const preferredTop = below + bounds.height <= bottom - 12 ? below : rect.top - bounds.height - 14;
      const top = Math.max(16, Math.min(preferredTop, bottom - bounds.height - 12));
      setPreview((current) => current?.key === preview.key
        ? current.left === left && current.top === top ? current : { ...current, left, top }
        : current);
    };
    measure();
    window.addEventListener("scroll", measure, true);
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure, true);
      window.removeEventListener("resize", measure);
    };
  }, [preview?.key]);

  useEffect(() => {
    if (!preview) return;
    const close = () => { cancelClose(); popupHovered.current = false; setPreview(null); };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const onOutside = (event: PointerEvent) => {
      if (!(event.target instanceof Element) || !event.target.closest(".technology-marquee-item, .technology-preview")) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutside);
    };
  }, [preview?.key]);

  const show = (name: string, key: string, anchor: HTMLElement) => {
    cancelClose();
    if (preview?.key !== key) popupHovered.current = false;
    setPreview((current) => current?.key === key ? current : { name, key, anchor, left: 16, top: 16 });
  };

  return (
    <section aria-labelledby="technology-stack-title" className="w-full">
      <header className="reading-surface mb-7">
        <h2 id="technology-stack-title" className="text-2xl font-bold tracking-tight text-white md:text-3xl">
          Lenguajes y tecnologías
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-200 md:text-base">
          Explora las herramientas que uso. Pasa el cursor, enfoca o toca una tecnología para descubrir para qué sirve.
        </p>
      </header>

      <div className="space-y-6 md:space-y-8">
        {technologyGroups.map(({ id, title, items }, index) => (
          <section key={id} aria-labelledby={`technology-group-${id}`}>
            <div className="mb-3 flex items-center gap-4">
              <h3 id={`technology-group-${id}`} className="reading-label shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-my-green-100 md:text-sm">
                {title}
              </h3>
              <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
            </div>
            <div
              aria-labelledby={`technology-group-${id}`}
              aria-roledescription="carrusel"
              className="technology-marquee-viewport carousel-full-bleed"
              data-preview-open={preview && items.includes(preview.name) ? "true" : undefined}
              role="region"
              tabIndex={0}
            >
              <div
                className="technology-marquee-track"
                data-direction={index % 2 === 0 ? "forward" : "reverse"}
                style={{ "--technology-marquee-duration": `${(30 + items.length * 4) * 3}s` } as CSSProperties}
              >
                {[0, 1].map((copy) => (
                  <ul key={copy} aria-hidden={copy === 1 || undefined} className="technology-marquee-list">
                    {[0, 1, 2].flatMap((repeat) => items.map((name) => {
                      const key = `${id}-${copy}-${repeat}-${name}`;
                      const decorative = copy === 1 || repeat > 0;
                      const Item = decorative ? "span" : "button";
                      return (
                        <li key={key} aria-hidden={decorative || undefined} data-repeat={repeat}>
                          <Item
                            type={decorative ? undefined : "button"}
                            className="technology-marquee-item liquid-hover"
                            data-expanded={preview?.key === key ? "true" : undefined}
                            aria-describedby={preview?.key === key ? tooltipId : undefined}
                            onPointerEnter={(event) => {
                              if (event.pointerType !== "touch") show(name, key, event.currentTarget);
                            }}
                            onPointerLeave={(event) => {
                              if (event.pointerType !== "touch") queueClose();
                            }}
                            onFocus={(event) => {
                              event.currentTarget.scrollIntoView({ behavior: "instant", block: "nearest", inline: "nearest" });
                              show(name, key, event.currentTarget);
                            }}
                            onBlur={queueClose}
                            onClick={(event) => show(name, key, event.currentTarget)}
                          >
                            <span className="technology-marquee-icon">{technologyIcons[name] ?? <Code2 aria-hidden="true" />}</span>
                            <span className="whitespace-nowrap">{name}</span>
                          </Item>
                        </li>
                      );
                    }))}
                  </ul>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
      <p className="reading-label mt-5 text-xs text-my-green-100">
        Cada fila se pausa para que puedas explorarla. Pulsa Escape o toca fuera para cerrar la información.
      </p>
      <div className="mt-12 grid gap-10 md:grid-cols-[2fr_1fr]">
        {techCategories.filter(({ id }) => !technologyGroups.some((group) => group.id === id)).map(({ id, title, items }) => (
          <section key={id} aria-labelledby={`technology-group-${id}`}>
            <h3 id={`technology-group-${id}`} className="mb-4 text-xl font-semibold text-white">{title}</h3>
            <ul className="flex flex-wrap gap-3">
              {items.map((item) => <li key={item} className="tech-badge">{item}</li>)}
            </ul>
          </section>
        ))}
      </div>
      {preview && createPortal(
        <div
          ref={popup}
          id={tooltipId}
          role="tooltip"
          className="technology-preview"
          style={{ left: preview.left, top: preview.top }}
          onPointerEnter={() => { popupHovered.current = true; cancelClose(); }}
          onPointerLeave={() => { popupHovered.current = false; queueClose(); }}
        >
          <p className="mb-2 text-lg font-bold text-white">{preview.name}</p>
          <p className="text-sm leading-relaxed text-my-green-50">{technologyDetails[preview.name]?.purpose}</p>
          <p className="mt-3 border-t border-white/15 pt-3 text-sm leading-relaxed text-my-green-100">{technologyDetails[preview.name]?.detail}</p>
        </div>, document.body,
      )}
    </section>
  );
};

export default Technologies;


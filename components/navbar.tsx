"use client";

import { itemsNavbar } from "@/data";
import { MotionToggle } from "@/components/motion-preferences";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mobileLabels: Record<string, string> = {
  "/": "Inicio",
  "/about-me": "Perfil",
  "/services": "Servicios",
  "/technologies": "Tecnol.",
  "/portfolio": "Proyectos",
  "/contact": "Contacto",
};

const Navbar = () => {
  const route = usePathname();

  return (
    <nav aria-label="Navegación principal" className="site-nav fixed inset-x-0 z-40 mx-auto">
      <div className="navigation-dock flex w-full items-center">
        <div className="grid min-w-0 flex-1 grid-cols-6">
          {itemsNavbar.map((item) => {
            const active = route === item.link;
            return (
              <Link
                key={item.id}
                href={item.link}
                aria-label={item.title}
                aria-current={active ? "page" : undefined}
                className={`navigation-link relative flex min-h-14 min-w-11 flex-col items-center justify-center gap-1 py-2 text-[0.625rem] font-medium leading-tight transition-colors focus-visible:outline-offset-[-3px] sm:text-xs md:flex-row md:gap-2 md:px-1 md:text-[0.8125rem] ${active ? "text-tamarillo-300" : "text-white/80 hover:text-white"}`}
              >
                <span aria-hidden="true" className="flex h-5 w-5 shrink-0 items-center justify-center">{item.icon}</span>
                <span aria-hidden="true" className="whitespace-nowrap sm:hidden">{mobileLabels[item.link] ?? item.title}</span>
                <span aria-hidden="true" className="hidden whitespace-nowrap sm:inline">{item.title}</span>
                {active && <span aria-hidden="true" className="navigation-active-marker" />}
              </Link>
            );
          })}
        </div>
        <MotionToggle />
      </div>
    </nav>
  );
};

export default Navbar;

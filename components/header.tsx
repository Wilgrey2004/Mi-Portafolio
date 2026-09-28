import Link from "next/link";
import { socialNetworks } from "@/data";

const Header = () => (
  <header className="absolute inset-x-0 top-0 z-40 px-4 sm:px-8">
    <div className="header-notch mx-auto flex w-fit max-w-full items-center gap-2 px-3 pb-3 pt-2 sm:gap-7 sm:px-6">
      <Link
        href="/"
        aria-label="Wilgrey MD, ir al inicio"
        className="inline-flex min-h-11 items-center gap-1 whitespace-nowrap rounded-lg text-xl font-bold tracking-tight text-white transition-colors hover:text-white/80 sm:text-2xl"
      >
        Wilgrey <span className="text-tamarillo-400">MD</span>
      </Link>
      <span aria-hidden="true" className="h-6 w-px bg-white/20" />
      <nav aria-label="Redes sociales">
        <ul className="flex items-center gap-1 sm:gap-2">
          {socialNetworks.map(({ id, label, logo, src }) => (
            <li key={id}>
              <Link
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex h-11 w-11 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/15 hover:text-white focus-visible:bg-white/15"
              >
                <span aria-hidden="true" className="scale-[0.85]">{logo}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;

import Link from "next/link";
import { MapPin } from "lucide-react";
import { contactChannels, contactInfo, socialNetworks } from "@/data";

const ContactSection = () => (
  <section aria-label="Canales de contacto" className="mx-auto w-full max-w-4xl">
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {contactChannels.map((channel) => (
        <li key={channel.id}>
          <Link
            href={channel.href}
            target={channel.external ? "_blank" : undefined}
            rel={channel.external ? "noopener noreferrer" : undefined}
            className={`card-glass card-glass-hover liquid-hover group flex min-h-40 h-full flex-col items-center justify-center gap-3 text-center ${
              channel.label === "WhatsApp" ? "border-tamarillo-500/40" : ""
            }`}
          >
            <span
              aria-hidden="true"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-tamarillo-500/15 text-tamarillo-300 transition-colors group-hover:bg-tamarillo-700 group-hover:text-white"
            >
              {channel.icon}
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-wide text-my-green-100 group-hover:text-white">
                {channel.label}
              </span>
              <span className="mt-1 block break-words font-semibold text-white">
                {channel.value}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>

    <div className="card-glass mt-5 flex flex-col items-center justify-between gap-5 sm:flex-row">
      <div className="flex items-center gap-2 text-white/90">
        <MapPin size={20} className="text-tamarillo-300" aria-hidden="true" />
        <span>{contactInfo.location}</span>
      </div>

      <ul className="flex items-center gap-2" aria-label="Redes sociales">
        {socialNetworks.map(({ id, label, logo, src }) => (
          <li key={id}>
            <Link
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-tamarillo-300"
            >
              <span aria-hidden="true">{logo}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ContactSection;

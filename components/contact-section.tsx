"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { contactChannels, contactInfo, socialNetworks } from "@/data";
import { staggerContainer, staggerItem } from "@/utils/motion-transitions";
import { MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <motion.div
      variants={staggerContainer(0.12, 0.15)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full max-w-4xl mx-auto"
    >
      {/* Canales directos */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {contactChannels.map((channel) => (
          <motion.div key={channel.id} variants={staggerItem}>
            <Link
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center h-full gap-3 text-center card-glass card-glass-hover group"
            >
              <span className="flex items-center justify-center rounded-full w-14 h-14 bg-tamarillo-500/20 text-tamarillo-400 transition-colors duration-300 group-hover:bg-tamarillo-500 group-hover:text-white">
                {channel.icon}
              </span>
              <div>
                <p className="text-sm uppercase tracking-wide text-white/60">
                  {channel.label}
                </p>
                <p className="font-semibold text-white break-words">
                  {channel.value}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Ubicación + redes */}
      <motion.div
        variants={staggerItem}
        className="flex flex-col items-center justify-between gap-6 mt-8 sm:flex-row card-glass"
      >
        <div className="flex items-center gap-2 text-white/80">
          <MapPin size={20} className="text-tamarillo-400" />
          <span>{contactInfo.location}</span>
        </div>

        <div className="flex items-center gap-6">
          {socialNetworks.map(({ id, logo, src }) => (
            <Link
              key={id}
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:text-tamarillo-500 hover:scale-110"
            >
              {logo}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* CTA principal a WhatsApp */}
      <motion.div variants={staggerItem} className="flex justify-center mt-10">
        <Link
          href={contactInfo.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 font-semibold transition-all border rounded-xl border-tamarillo-500 bg-tamarillo-500 hover:bg-transparent hover:text-tamarillo-400 hover:shadow-lg hover:shadow-tamarillo-950/40"
        >
          Escríbeme por WhatsApp
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;

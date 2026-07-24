"use client";

import CircleImage from "@/components/circle-Image";
import ContainerPage from "@/components/container";
import ContactSection from "@/components/contact-section";
import CoverParticles from "@/components/cover-particles";
import TransitionPages from "@/components/transition-pages";
import { RevealOnScroll } from "@/components/transition-components";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <CoverParticles />
      <TransitionPages />
      <CircleImage />

      <ContainerPage>
        <RevealOnScroll>
          <h1 className="section-title mb-4 text-center">
            Hablemos de tu{" "}
            <span className="font-bold text-tamarillo-500">proyecto</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-10 text-center text-gray-300">
            ¿Tienes una idea o una vacante? Contáctame directamente por
            WhatsApp, correo o redes. Respondo lo antes posible. 🚀
          </p>
        </RevealOnScroll>

        <ContactSection />
      </ContainerPage>
    </>
  );
};

export default ContactPage;

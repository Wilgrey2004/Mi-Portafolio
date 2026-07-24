"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, Pagination, A11y } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { serviceData } from "@/data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ServicesCarousel = () => {
  // Respeta prefers-reduced-motion: sin autoplay si el usuario lo pide.
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay, Keyboard, Navigation, Pagination, A11y]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        keyboard={{ enabled: true }}
        a11y={{ enabled: true }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".services-prev",
          nextEl: ".services-next",
        }}
        autoplay={
          reducedMotion
            ? false
            : {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
        }
        loop
        className="!pb-14"
      >
        {serviceData.map((service, index) => (
          <SwiperSlide key={index} className="h-auto">
            <article className="card-glass card-glass-hover group flex h-full flex-col">
              <span className="flex items-center justify-center mb-4 text-3xl transition-colors duration-300 rounded-xl w-12 h-12 bg-tamarillo-500/20 text-tamarillo-400 group-hover:bg-tamarillo-500 group-hover:text-white">
                {service.icon}
              </span>
              <h3 className="mb-1 text-lg font-bold text-white">
                {service.title}
              </h3>
              <p className="mb-3 text-sm font-medium text-tamarillo-400">
                {service.benefit}
              </p>
              <p className="mb-4 text-sm text-gray-300">{service.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag, i) => (
                  <span key={i} className="tech-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Controles de navegación accesibles */}
      <div className="flex justify-center gap-3 mt-2">
        <button
          type="button"
          aria-label="Servicio anterior"
          className="services-prev flex items-center justify-center w-10 h-10 text-white transition-colors border rounded-full border-white/15 bg-my-green-800/50 hover:border-tamarillo-500/60 hover:text-tamarillo-400"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Servicio siguiente"
          className="services-next flex items-center justify-center w-10 h-10 text-white transition-colors border rounded-full border-white/15 bg-my-green-800/50 hover:border-tamarillo-500/60 hover:text-tamarillo-400"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ServicesCarousel;

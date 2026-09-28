"use client";

import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useMotionPreference } from "@/components/motion-preferences";
import { serviceData } from "@/data";

import "swiper/css";
import "swiper/css/pagination";

const ServicesCarousel = () => {
  const reducedMotion = useMotionPreference();
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [inView, setInView] = useState(true);
  const root = useRef<HTMLDivElement>(null);
  const manualTransition = useRef(false);

  useEffect(() => {
    const update = () => setVisible(!document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    if (root.current) observer.observe(root.current);
    return () => {
      document.removeEventListener("visibilitychange", update);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!swiper || swiper.destroyed) return;
    if (reducedMotion || paused || hovered || focused || !visible || !inView) {
      // Stopping autoplay alone leaves its current seven-second CSS slide moving.
      const position = swiper.getTranslate();
      swiper.autoplay.stop();
      if (!manualTransition.current) {
        swiper.wrapperEl.style.transitionDuration = "0ms";
        swiper.setTranslate(position);
        swiper.animating = false;
        swiper.updateProgress();
        swiper.updateSlidesClasses();
      }
    } else if (!swiper.autoplay.running) {
      swiper.autoplay.start();
    }
  }, [swiper, reducedMotion, paused, hovered, focused, visible, inView]);

  const navigate = (direction: "previous" | "next") => {
    if (!swiper) return;
    manualTransition.current = true;
    setPaused(true);
    swiper.autoplay.stop();
    if (direction === "previous") swiper.slidePrev(reducedMotion ? 0 : 350);
    else swiper.slideNext(reducedMotion ? 0 : 350);
  };

  return (
    <div
      ref={root}
      role="region"
      aria-label="Servicios disponibles"
      tabIndex={0}
      className="relative w-full rounded-xl focus-visible:outline-offset-4"
      onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          navigate(event.key === "ArrowLeft" ? "previous" : "next");
        }
      }}
      onClickCapture={(event) => {
        if (event.target instanceof Element && event.target.closest(".swiper-pagination-bullet") && swiper) {
          manualTransition.current = true;
          swiper.params.speed = reducedMotion ? 0 : 350;
          swiper.autoplay.stop();
          setPaused(true);
        }
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        onSwiper={setSwiper}
        slidesPerView="auto"
        centeredSlides
        spaceBetween={24}
        speed={reducedMotion ? 0 : 500}
        pagination={{ clickable: true, renderBullet: (index, className) => `<button type="button" class="${className}" aria-label="Ir al servicio ${index + 1}"></button>` }}
        a11y={{ enabled: true, paginationBulletMessage: "Ir al servicio {{index}}" }}
        autoplay={reducedMotion ? false : { delay: 6500, disableOnInteraction: false }}
        onSliderFirstMove={(instance) => {
          manualTransition.current = true;
          instance.params.speed = reducedMotion ? 0 : 350;
          setPaused(true);
        }}
        onTransitionEnd={(instance) => {
          manualTransition.current = false;
          instance.params.speed = reducedMotion ? 0 : 500;
        }}
        onClick={(instance, event) => {
          if (event.target instanceof Element && event.target.closest(".swiper-pagination-bullet")) {
            setPaused(true);
            instance.autoplay.stop();
          }
        }}
        loop
        className="services-carousel !pb-14"
      >
        {serviceData.map((service) => (
          <SwiperSlide key={service.title} className="!h-auto">
            <article className="card-glass card-glass-hover group flex h-full flex-col">
              <span aria-hidden="true" className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-tamarillo-500/20 text-tamarillo-300">
                {service.icon}
              </span>
              <h2 className="mb-1 text-lg font-bold text-white">{service.title}</h2>
              <p className="mb-3 text-sm font-medium text-tamarillo-300">{service.benefit}</p>
              <p className="mb-4 max-w-prose text-base leading-relaxed text-my-green-100">{service.description}</p>
              <ul className="mt-auto flex flex-wrap gap-2" aria-label={`Tecnologías para ${service.title}`}>
                {service.tags.map((tag) => <li key={tag} className="tech-badge">{tag}</li>)}
              </ul>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mx-auto mt-2 flex w-fit max-w-full flex-wrap items-center justify-center gap-3 rounded-2xl bg-my-green-950 px-4 py-3">
        <button type="button" aria-label="Servicio anterior" onClick={() => navigate("previous")} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:bg-my-green-900">
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        {!reducedMotion && (
          <button
            type="button"
            aria-pressed={paused}
            aria-label="Pausar recorrido automático"
            onClick={() => {
              manualTransition.current = false;
              setPaused((current) => !current);
            }}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-4 text-sm text-white hover:bg-my-green-900"
          >
            {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
            {paused ? "Reanudar recorrido" : "Pausar recorrido"}
          </button>
        )}
        <button type="button" aria-label="Servicio siguiente" onClick={() => navigate("next")} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:bg-my-green-900">
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
      <p className="reading-label mx-auto mt-3 text-center text-xs leading-relaxed text-my-green-100">
        Desliza o usa las flechas. Al elegir un servicio, el recorrido se pausa para leerlo.
      </p>
    </div>
  );
};

export default ServicesCarousel;

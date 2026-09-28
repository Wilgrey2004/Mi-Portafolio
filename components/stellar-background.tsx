"use client";

import { useEffect, useRef } from "react";
import { useMotionPreference } from "@/components/motion-preferences";

type Star = { x: number; y: number; radius: number; opacity: number; phase: number };

export default function StellarBackground() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const elapsed = useRef(0);
  const reducedMotion = useMotionPreference();

  useEffect(() => {
    const element = canvas.current;
    const context = element?.getContext("2d");
    if (!element || !context) return;

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let frame = 0;
    let previous = 0;
    let lastDraw = 0;
    let seed = 173;
    const random = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      for (const star of stars) {
        const shimmer = reducedMotion ? 1 : 0.85 + 0.15 * Math.sin(elapsed.current * 0.45 + star.phase);
        context.beginPath();
        context.fillStyle = `rgba(205, 225, 239, ${star.opacity * shimmer})`;
        context.arc(star.x * width, star.y * height, star.radius, 0, Math.PI * 2);
        context.fill();
      }

      // Sparse, gentle trails leave the projects as the brightest objects.
      const count = width < 640 ? 2 : 4;
      for (let index = 0; index < count; index += 1) {
        const cycle = 18 + index * 3;
        const progress = ((elapsed.current + index * 7) % cycle) / 6;
        if (progress > 1) continue;
        const x = width * (0.12 + index * 0.22) + progress * width * 0.8;
        const y = -100 + progress * (height + 280);
        const length = Math.min(140, width * 0.24);
        const fade = Math.sin(progress * Math.PI) * 0.5;
        const tint = index % 2 === 0 ? "155, 218, 209" : "255, 152, 157";
        const trail = context.createLinearGradient(x - length * 0.65, y - length, x, y);
        trail.addColorStop(0, `rgba(${tint}, 0)`);
        trail.addColorStop(1, `rgba(${tint}, ${fade})`);
        context.beginPath();
        context.strokeStyle = trail;
        context.lineWidth = 1.2;
        context.moveTo(x - length * 0.65, y - length);
        context.lineTo(x, y);
        context.stroke();
        context.beginPath();
        context.fillStyle = `rgba(235, 245, 255, ${fade})`;
        context.arc(x, y, 1.3, 0, Math.PI * 2);
        context.fill();
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      element.width = Math.round(width * ratio);
      element.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      seed = 173;
      const count = Math.min(140, Math.max(40, Math.round(width * height / 9500)));
      stars = Array.from({ length: count }, () => ({
        x: random(), y: random(), radius: 0.5 + random() * 0.9,
        opacity: 0.16 + random() * 0.48, phase: random() * Math.PI * 2,
      }));
      draw();
    };

    const animate = (time: number) => {
      if (document.hidden || reducedMotion) return;
      if (previous) elapsed.current += Math.min((time - previous) / 1000, 0.05);
      previous = time;
      if (time - lastDraw >= 1000 / 30) {
        draw();
        lastDraw = time;
      }
      frame = requestAnimationFrame(animate);
    };

    const visibility = () => {
      cancelAnimationFrame(frame);
      previous = 0;
      if (!document.hidden && !reducedMotion) frame = requestAnimationFrame(animate);
    };

    resize();
    visibility();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [reducedMotion]);

  return (
    <div aria-hidden="true" className="stellar-background pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvas} className="h-full w-full" />
    </div>
  );
}

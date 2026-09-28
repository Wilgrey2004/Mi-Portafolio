"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMotionPreference } from "@/components/motion-preferences";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ShaderMaterial, Vector2, Vector4 } from "three";
import {
  hasLiquidBackground,
  liquidMaterialShader,
  liquidVertexShader,
} from "@/utils/liquid-material";

type EffectMode = 0 | 1 | 2 | 3;

type EffectState = {
  mode: EffectMode;
  pointer: [number, number];
  bounds: [number, number, number, number];
  startedAt: number;
};

const PAGE_TRANSITION_MS = 500;

const fragmentShader = `
  precision highp float;
  uniform float uTime;
  uniform float uMode;
  uniform float uProgress;
  uniform vec2 uPointer;
  uniform vec4 uBounds;
  varying vec2 vUv;
  ${liquidMaterialShader}

  void main() {
    if (uMode < 0.5) discard;

    if (uMode > 1.5 && uMode < 2.5) {
      vec2 warped = liquidWarp(vUv, uTime, vec2(0.5, 0.5));
      float front = 1.15 - uProgress * 1.6;
      float cover = 1.0 - smoothstep(front - 0.055, front + 0.055, warped.x);
      gl_FragColor = vec4(liquidMetal(vUv, uTime, vec2(0.5, 0.5)), cover * 0.97);
      return;
    }

    vec2 local = (vUv - uBounds.xy) / uBounds.zw;
    float inside = step(0.0, local.x) * step(local.x, 1.0)
      * step(0.0, local.y) * step(local.y, 1.0);
    if (inside < 0.5) discard;

    vec2 center = (uPointer - uBounds.xy) / uBounds.zw;
    vec2 delta = (local - center) * vec2(uBounds.z / uBounds.w, 1.0);
    float distortion = sin(local.x * 13.0 + uTime * 1.1)
      * sin(local.y * 18.0 - uTime * 0.8) * 0.05;
    float radius = length(delta) + distortion;
    float glow = 1.0 - smoothstep(0.10, 0.70, radius);
    float rim = min(min(local.x, 1.0 - local.x), min(local.y, 1.0 - local.y));
    float edgeFade = smoothstep(0.0, 0.045, rim);
    float alpha = edgeFade * glow * uProgress * 0.7;
    gl_FragColor = vec4(liquidMetal(local, uTime, center), alpha);
  }
`;

function LiquidPlane({ effect }: { effect: React.RefObject<EffectState> }) {
  const material = useRef<ShaderMaterial>(null);
  const viewport = useThree((state) => state.viewport);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMode: { value: 0 },
      uProgress: { value: 0 },
      uPointer: { value: new Vector2(0.5, 0.5) },
      uBounds: { value: new Vector4(0, 0, 1, 1) },
    }),
    [],
  );

  useFrame(() => {
    if (!material.current) return;
    const current = effect.current;
    const elapsed = (performance.now() - current.startedAt) / 1000;
    const values = material.current.uniforms;
    values.uTime.value = performance.now() / 1000;
    values.uMode.value = current.mode;
    values.uProgress.value = current.mode === 2
      ? Math.min(elapsed / (PAGE_TRANSITION_MS / 1000), 1)
      : current.mode === 3
        ? Math.max(1 - elapsed / 0.45, 0)
        : 1;
    values.uPointer.value.set(...current.pointer);
    values.uBounds.value.set(...current.bounds);
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]} frustumCulled={false}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        vertexShader={liquidVertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function LiquidEffects() {
  const pathname = usePathname();
  const reducedMotion = useMotionPreference();
  const previousPath = useRef(pathname);
  const effect = useRef<EffectState>({
    mode: 0,
    pointer: [0.5, 0.5],
    bounds: [0, 0, 1, 1],
    startedAt: 0,
  });
  const stopTimer = useRef<number | null>(null);
  const running = useRef(false);
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => setMounted(true), []);

  const setRunning = useCallback((value: boolean) => {
    if (running.current !== value) {
      running.current = value;
      setIsAnimating(value);
    }
  }, []);

  const clearStopTimer = useCallback(() => {
    if (stopTimer.current !== null) {
      window.clearTimeout(stopTimer.current);
      stopTimer.current = null;
    }
  }, []);

  const showHover = useCallback((element: Element, x: number, y: number) => {
    if (effect.current.mode === 2) return;
    const rect = element.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    clearStopTimer();
    effect.current.mode = 1;
    effect.current.pointer = [x / window.innerWidth, 1 - y / window.innerHeight];
    effect.current.bounds = [
      rect.left / window.innerWidth,
      (window.innerHeight - rect.bottom) / window.innerHeight,
      rect.width / window.innerWidth,
      rect.height / window.innerHeight,
    ];
    effect.current.startedAt = performance.now();
    setRunning(true);
  }, [clearStopTimer, setRunning]);

  const releaseHover = useCallback(() => {
    if (effect.current.mode !== 1) return;
    clearStopTimer();
    effect.current.mode = 3;
    effect.current.startedAt = performance.now();
    stopTimer.current = window.setTimeout(() => {
      effect.current.mode = 0;
      setRunning(false);
    }, 470);
  }, [clearStopTimer, setRunning]);

  useEffect(() => {
    const changedRoute = previousPath.current !== pathname;
    previousPath.current = pathname;
    if (reducedMotion || !changedRoute) return;
    clearStopTimer();
    effect.current.mode = 2;
    effect.current.startedAt = performance.now();
    setRunning(true);
    stopTimer.current = window.setTimeout(() => {
      effect.current.mode = 0;
      setRunning(false);
    }, PAGE_TRANSITION_MS + 40);
    return clearStopTimer;
  }, [pathname, reducedMotion, clearStopTimer, setRunning]);

  useEffect(() => {
    if (reducedMotion || hasLiquidBackground(pathname)
      || pathname === "/" || pathname === "/contact"
      || pathname === "/portfolio" || pathname === "/about-me") return;
    const hovered = (target: EventTarget | null) =>
      target instanceof Element ? target.closest(".liquid-hover") : null;
    const onPointerMove = (event: PointerEvent) => {
      const element = hovered(event.target);
      if (element) showHover(element, event.clientX, event.clientY);
      else releaseHover();
    };
    const onPointerOut = (event: PointerEvent) => {
      if (!event.relatedTarget) releaseHover();
    };
    const onFocusIn = (event: FocusEvent) => {
      const element = hovered(event.target);
      if (element) {
        const rect = element.getBoundingClientRect();
        showHover(element, rect.left + rect.width / 2, rect.top + rect.height / 2);
      }
    };
    const onFocusOut = (event: FocusEvent) => {
      if (!hovered(event.relatedTarget)) releaseHover();
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerout", onPointerOut, { passive: true });
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    window.addEventListener("blur", releaseHover);
    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerout", onPointerOut);
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
      window.removeEventListener("blur", releaseHover);
      clearStopTimer();
    };
  }, [pathname, reducedMotion, showHover, releaseHover, clearStopTimer]);

  if (!mounted || reducedMotion) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-20">
      <Canvas
        orthographic
        camera={{ position: [0, 0, 1], near: 0.1, far: 10, zoom: 1 }}
        dpr={[0.75, 1]}
        frameloop={isAnimating ? "always" : "demand"}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        fallback={null}
        style={{ pointerEvents: "none" }}
      >
        <LiquidPlane effect={effect} />
      </Canvas>
    </div>
  );
}

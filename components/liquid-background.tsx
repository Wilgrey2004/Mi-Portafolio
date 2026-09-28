"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMotionPreference } from "@/components/motion-preferences";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { ShaderMaterial, Vector2 } from "three";
import {
  hasLiquidBackground,
  liquidMaterialShader,
  liquidVertexShader,
} from "@/utils/liquid-material";

const backgroundFragmentShader = `
  precision highp float;
  uniform float uTime;
  uniform float uActive;
  uniform float uHome;
  uniform vec2 uPointer;
  uniform vec2 uResolution;
  varying vec2 vUv;
  ${liquidMaterialShader}

  void main() {
    vec3 base = mix(vec3(0.071, 0.208, 0.184),
      vec3(0.035, 0.133, 0.118), uHome);
    vec2 delta = (vUv - uPointer)
      * vec2(uResolution.x / max(uResolution.y, 1.0), 1.0);
    float influence = exp(-dot(delta, delta) * 5.0) * uActive;
    float ripple = sin(length(delta) * 18.0 - uTime * 2.0);
    vec2 surface = vUv + delta * influence * (0.22 + ripple * 0.06);
    vec2 materialPointer = mix(vec2(0.5), uPointer, uActive);
    vec3 liquid = liquidMetal(surface, uTime, materialPointer);
    float light = dot(liquid, vec3(0.3, 0.5, 0.2));
    vec3 green = mix(vec3(0.015, 0.075, 0.06),
      vec3(0.12, 0.40, 0.28), clamp(light * 5.0, 0.0, 1.0));
    float hoverColor = (1.0 - smoothstep(60.0, 260.0,
      length((vUv - uPointer) * uResolution))) * uActive;
    float greenPalette = mix(uHome, 1.0 - uHome, hoverColor);
    liquid = mix(liquid, green, greenPalette);
    vec3 hoverBase = mix(vec3(0.035, 0.133, 0.118),
      vec3(0.12, 0.015, 0.025), uHome);
    base = mix(base, hoverBase, hoverColor);
    vec3 color = mix(base, liquid, 0.65 + influence * 0.12);
    gl_FragColor = vec4(color, 1.0);
  }
`;

function BackgroundPlane({
  active,
  animating,
  pointer,
  variant,
}: {
  active: React.RefObject<boolean>;
  animating: boolean;
  pointer: React.RefObject<Vector2>;
  variant: "home" | "contact" | "default";
}) {
  const material = useRef<ShaderMaterial>(null);
  const viewport = useThree((state) => state.viewport);
  const size = useThree((state) => state.size);
  const invalidate = useThree((state) => state.invalidate);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uActive: { value: 0 },
      uHome: { value: variant === "home" ? 1 : 0 },
      uPointer: { value: new Vector2(0.5, 0.5) },
      uResolution: { value: new Vector2(1, 1) },
    }),
    [variant],
  );

  useEffect(() => {
    // Draw the texture after sizing, including the reduced-motion still frame.
    const frame = requestAnimationFrame(() => invalidate());
    return () => cancelAnimationFrame(frame);
  }, [animating, invalidate, size.width, size.height]);

  useFrame((_, delta) => {
    if (!material.current) return;
    const values = material.current.uniforms;
    const ease = 1 - Math.exp(-Math.min(delta, 0.05) * 7);
    values.uActive.value += ((active.current ? 1 : 0) - values.uActive.value) * ease;
    values.uResolution.value.set(size.width, size.height);
    if (animating) values.uTime.value += Math.min(delta, 0.05) * 0.65;
    values.uPointer.value.lerp(pointer.current, ease);
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]} frustumCulled={false}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        vertexShader={liquidVertexShader}
        fragmentShader={backgroundFragmentShader}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
}

function LiquidBackgroundCanvas({ variant }: { variant: "home" | "contact" | "default" }) {
  const reducedMotion = useMotionPreference();
  const [mounted, setMounted] = useState(false);
  const active = useRef(false);
  const pointer = useRef(new Vector2(0.5, 0.5));
  const [canHover, setCanHover] = useState(false);
  const [visible, setVisible] = useState(true);
  const animating = visible && !reducedMotion;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onVisibilityChange = () => {
      setVisible(!document.hidden);
      if (document.hidden) active.current = false;
    };
    onVisibilityChange();
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!canHover || reducedMotion) return;
    const pause = () => {
      active.current = false;
    };
    const onPointer = (event: PointerEvent) => {
      if (event.pointerType === "touch" || document.hidden) return;
      pointer.current.set(
        event.clientX / window.innerWidth,
        1 - event.clientY / window.innerHeight,
      );
      active.current = true;
    };
    const onPointerOut = (event: PointerEvent) => {
      if (!event.relatedTarget) pause();
    };

    document.addEventListener("pointerover", onPointer, { passive: true });
    document.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("pointerout", onPointerOut, { passive: true });
    window.addEventListener("blur", pause);
    return () => {
      document.removeEventListener("pointerover", onPointer);
      document.removeEventListener("pointermove", onPointer);
      document.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("blur", pause);
      active.current = false;
    };
  }, [canHover, reducedMotion]);

  return (
    <div aria-hidden="true" className="liquid-static-background pointer-events-none fixed inset-0 z-0" style={{ backgroundColor: variant === "home" ? "#09221e" : undefined }}>
      {mounted && (
        <Canvas
          orthographic
          camera={{ position: [0, 0, 1], near: 0.1, far: 10, zoom: 1 }}
          dpr={[0.75, 1]}
          frameloop={animating ? "always" : "demand"}
          gl={{ alpha: false, antialias: false, powerPreference: "low-power" }}
          fallback={null}
          style={{ pointerEvents: "none" }}
        >
          <BackgroundPlane active={active} animating={animating} pointer={pointer} variant={variant} />
        </Canvas>
      )}
    </div>
  );
}

export default function LiquidBackground({ variant }: { variant?: "home" | "contact" }) {
  const pathname = usePathname();
  return variant || hasLiquidBackground(pathname)
    ? <LiquidBackgroundCanvas variant={variant ?? "default"} />
    : null;
}

"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { ShaderMaterial, Vector2 } from "three";
import { liquidMaterialShader, liquidVertexShader } from "@/utils/liquid-material";

type Variant = "home" | "contact";

const fragmentShader = `
  precision highp float;
  uniform float uTime;
  uniform float uHome;
  uniform vec2 uResolution;
  uniform vec2 uDrops[3];
  varying vec2 vUv;
  ${liquidMaterialShader}

  void main() {
    vec3 color = vec3(0.0);
    float totalAlpha = 0.0;
    for (int i = 0; i < 3; i++) {
      vec2 delta = (vUv - uDrops[i]) * uResolution;
      float angle = atan(delta.y, delta.x);
      float wave = sin(angle * 6.0 + uTime * 1.2 + float(i)) * 10.0
        + sin(angle * 13.0 - uTime * 0.85) * 5.0;
      float radius = 86.0 + float(i) * 13.0 + wave;
      float core = 1.0 - smoothstep(radius - 12.0, radius + 5.0, length(delta));
      float tailWidth = 34.0 * (1.0 - smoothstep(0.0, 260.0, delta.y));
      float tail = (1.0 - smoothstep(tailWidth - 9.0, tailWidth + 13.0,
        abs(delta.x + sin(delta.y * 0.022 + uTime + float(i)) * 19.0)))
        * smoothstep(5.0, 45.0, delta.y)
        * (1.0 - smoothstep(155.0, 290.0, delta.y)) * 0.2;
      float alpha = max(core, tail);
      vec3 metal = liquidMetal(vUv * 1.3 + float(i) * 0.19, uTime, uDrops[i]);
      float light = dot(metal, vec3(0.3, 0.5, 0.2));
      vec3 green = mix(vec3(0.02, 0.21, 0.15), vec3(0.22, 0.66, 0.43),
        clamp(light * 3.0, 0.0, 1.0));
      vec3 dropColor = mix(metal, green, uHome);
      float strength = mix(0.62, 0.4, uHome);
      color += dropColor * alpha * strength;
      totalAlpha = min(1.0, totalAlpha + alpha * strength);
    }
    gl_FragColor = vec4(color / max(totalAlpha, 0.001), totalAlpha);
  }
`;

function DropsPlane({ drops, variant }: {
  drops: React.RefObject<Vector2[]>;
  variant: Variant;
}) {
  const material = useRef<ShaderMaterial>(null);
  const viewport = useThree((state) => state.viewport);
  const size = useThree((state) => state.size);
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uHome: { value: variant === "home" ? 1 : 0 },
    uResolution: { value: new Vector2(1, 1) },
    uDrops: { value: [new Vector2(), new Vector2(), new Vector2()] },
  }), [variant]);

  useFrame((_, delta) => {
    if (!material.current) return;
    const values = material.current.uniforms;
    values.uTime.value += Math.min(delta, 0.05);
    values.uResolution.value.set(size.width, size.height);
    drops.current.forEach((drop, index) => values.uDrops.value[index].copy(drop));
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

export default function FallingLiquids({ variant }: { variant: Variant }) {
  const reducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const hovering = useRef(false);
  const pointer = useRef(new Vector2(0.5, 0.5));
  const drops = useRef([
    new Vector2(0.2, 1.16),
    new Vector2(0.52, 1.64),
    new Vector2(0.82, 2.12),
  ]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      hovering.current = true;
      pointer.current.set(
        event.clientX / window.innerWidth,
        1 - event.clientY / window.innerHeight,
      );
    };
    const onOut = (event: PointerEvent) => {
      if (!event.relatedTarget) hovering.current = false;
    };
    const onVisibility = () => {
      setVisible(!document.hidden);
      if (document.hidden) hovering.current = false;
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("blur", onVisibility);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("blur", onVisibility);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion || !visible) return;
    let frame = 0;
    let previous = performance.now();
    const tick = (now: number) => {
      const delta = Math.min((now - previous) / 1000, 0.05);
      previous = now;
      drops.current.forEach((drop, index) => {
        if (hovering.current) {
          const targetX = pointer.current.x + (index - 1) * 0.13;
          const targetY = pointer.current.y + (index === 1 ? 0.06 : -0.09);
          const ease = 1 - Math.exp(-delta * 1.8);
          drop.x += (targetX - drop.x) * ease;
          drop.y += (targetY - drop.y) * ease;
        } else {
          drop.y -= delta * (0.16 + index * 0.025);
          if (drop.y < -0.45) {
            drop.y = 1.3 + index * 0.34;
            drop.x = [0.2, 0.52, 0.82][index];
          }
        }
      });
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reducedMotion, visible]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {mounted && !reducedMotion && (
        <Canvas
          orthographic
          camera={{ position: [0, 0, 1], near: 0.1, far: 10, zoom: 1 }}
          dpr={[0.75, 1]}
          frameloop={visible ? "always" : "demand"}
          gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
          fallback={null}
          style={{ pointerEvents: "none" }}
        >
          <DropsPlane drops={drops} variant={variant} />
        </Canvas>
      )}
    </div>
  );
}

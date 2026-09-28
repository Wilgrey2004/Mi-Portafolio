export const LIQUID_BACKGROUND_ROUTES = new Set([
  "/services",
  "/technologies",
]);

export const hasLiquidBackground = (pathname: string) =>
  LIQUID_BACKGROUND_ROUTES.has(pathname);

export const liquidVertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Both the page wipe and the hover background use the same red and black liquid.
export const liquidMaterialShader = `
  vec2 liquidWarp(vec2 uv, float time, vec2 pointer) {
    vec2 fromPointer = uv - pointer;
    float influence = exp(-dot(fromPointer, fromPointer) * 7.0);
    vec2 warped = uv;
    warped.x += sin(uv.y * 11.0 + time * 0.8) * 0.045
      + sin(uv.y * 27.0 - time * 1.1) * 0.025
      + fromPointer.y * influence * 0.11;
    warped.y += sin(uv.x * 9.0 - time * 0.55) * 0.035
      + fromPointer.x * influence * 0.045;
    return warped;
  }

  vec3 liquidMetal(vec2 uv, float time, vec2 pointer) {
    vec2 warped = liquidWarp(uv, time, pointer);
    float folds = sin(warped.x * 20.0 + warped.y * 12.0
      + sin(warped.y * 9.0 - time * 0.55) * 2.2);
    float veins = sin(warped.x * 49.0 + warped.y * 17.0
      + sin(warped.y * 14.0 + time * 0.6) * 2.4);
    float redField = 0.5 + 0.5 * sin(warped.x * 7.0 - warped.y * 4.0
      + folds * 1.2);
    float shadowBand = pow(max(0.0, folds * 0.5 + 0.5), 7.0);
    float etchedLine = pow(1.0 - abs(veins), 8.0);
    vec3 darkMetal = vec3(0.012, 0.006, 0.012);
    vec3 redMetal = vec3(0.46, 0.026, 0.055);
    vec3 color = mix(darkMetal, redMetal, redField * 0.8);
    color = mix(color, vec3(0.002, 0.002, 0.004), shadowBand * 0.8);
    color += vec3(0.17, 0.025, 0.04) * etchedLine;
    return clamp(color, 0.0, 1.0);
  }
`;

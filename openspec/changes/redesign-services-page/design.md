## Context

La pantalla `/services` ([app/(routes)/services/page.tsx](app/(routes)/services/page.tsx)) es hoy un grid `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` de tarjetas `card-glass` idénticas, alimentado por `serviceData` en [data.tsx](data.tsx). El resultado es correcto pero genérico.

El proyecto ya cuenta con:
- **Swiper** (hay estilos de `swiper-pagination` en [app/globals.css](app/globals.css); existía un `components/slider-services.tsx` que se eliminó y se puede retomar como referencia).
- **framer-motion** con utilidades `staggerContainer` / `staggerItem` en [utils/motion-transitions.tsx](utils/motion-transitions.tsx).
- Sistema de diseño: `card-glass`, `card-glass-hover`, `tech-badge`, `section-title`, acento `tamarillo`, fondo `my-green`.
- Patrón de layout tipo bento ya usado en [components/technologies.tsx](components/technologies.tsx).

El usuario pidió explícitamente: arreglar la pantalla, añadir **carrusel de servicios** y **secciones con cortes/asimetría** ("ambos"), una **sección de texto**, y evitar el diseño genérico.

## Goals / Non-Goals

**Goals:**
- Reemplazar el grid estático por un carrusel de servicios deslizable (Swiper) responsivo.
- Añadir una sección de texto editorial con jerarquía tipográfica antes del carrusel.
- Introducir asimetría/cortes visuales que rompan la cuadrícula uniforme.
- Mantener coherencia con el sistema de diseño existente y la accesibilidad (teclado + `prefers-reduced-motion`).

**Non-Goals:**
- Cambiar rutas, navbar o layout global.
- Rediseñar otras pantallas.
- Añadir dependencias externas nuevas.
- Rediseñar el contenido de `serviceData` (se puede enriquecer, no rehacer).

## Decisions

### 1. Carrusel con Swiper en lugar de grid
Se usa Swiper (ya en el proyecto y con estilos de paginación existentes) para el listado de servicios, con `breakpoints` que muestran ~1 slide en móvil, ~2 en tablet y ~3 en escritorio, navegación por teclado (`keyboard` module), paginación y autoplay opcional pausable.
- **Alternativa descartada**: mantener grid + animación. No cumple la petición explícita de carrusel.
- **Componente**: nuevo `components/services-carousel.tsx` (`"use client"`), aislando la lógica Swiper de la página.

### 2. Layout asimétrico con cortes
La sección de texto y el carrusel se envuelven en una composición no uniforme: encabezado desplazado (offset), un panel/acento con `clip-path` diagonal o un elemento decorativo (blob/línea con acento `tamarillo`), rompiendo el grid recto. Se implementa con utilidades Tailwind + una clase de `clip-path` en `globals.css` si hace falta.
- **Alternativa descartada**: bento grid puro (ya usado en technologies). Se prefiere asimetría distinta para diferenciar la pantalla.

### 3. Sección de texto reutilizando tokens
Encabezado con `section-title` + acento `tamarillo` y párrafo con ancho acotado (`max-w-2xl`). Se envuelve en `RevealOnScroll` para la animación de entrada coherente con el resto.

### 4. Datos
Se reutiliza `serviceData`. Si se necesita más profundidad por slide (beneficio/detalle), se añaden campos opcionales a los objetos de `serviceData` sin romper otros consumidores.

### 5. Accesibilidad
- Swiper `keyboard: { enabled: true }` y `a11y` habilitado.
- Animaciones respetan el bloque `prefers-reduced-motion` ya presente en `globals.css`; para Swiper, desactivar autoplay cuando esa preferencia esté activa.

## Risks / Trade-offs

- **[Swiper aumenta JS del cliente]** → El componente ya se usaba en el proyecto; se importa solo en la página de servicios (`"use client"`), sin impacto global.
- **[`clip-path` diagonal puede recortar contenido en breakpoints extremos]** → Aplicar solo a elementos decorativos, no a contenedores con texto; probar en móvil, tablet y escritorio.
- **[Autoplay puede molestar/accesibilidad]** → Autoplay pausable al hover/focus y desactivado con `prefers-reduced-motion`.
- **[Regresión visual respecto al grid actual]** → Mantener el CTA de contacto y el uso de `card-glass` para conservar consistencia; revisar en `/services` tras implementar.

## Context

El portafolio es una app Next.js 16 (App Router) + React 19 + TypeScript + Tailwind 3, con `framer-motion` 11 ya instalado, `swiper`, `react-type-animation`, `react-countup` y `@tsparticles`. El contenido vive centralizado en `data.tsx` y se consume desde páginas en `app/(routes)/*` y componentes en `components/*`. La paleta está definida en `tailwind.config.ts` (`my-green` y `tamarillo`) y en `app/globals.css`.

Estado actual y restricciones:
- Rutas: `/` (home), `/about-me`, `/services`, `/portfolio`, `/testimonials`.
- La navegación (`data.tsx > itemsNavbar`) tiene 5 ítems y usa `lucide-react` para íconos.
- Las animaciones existentes usan `MotionTransition` (`components/transition-components.tsx`) + `fadeIn` (`utils/motion-transitions.tsx`), con variantes `right`/`bottom`.
- Constraint del usuario: **mantener colores e imágenes**, **eliminar la pantalla de clientes** (testimonios), **usar framer-motion o anime.js** (elegimos framer-motion por estar ya instalado), agregar **contacto directo** (WhatsApp +1 849-406-1420) y **sección de tecnologías**, y **rediseñar** pantallas simples.

## Goals / Non-Goals

**Goals:**
- Sincronizar todo el contenido con el CV real desde `data.tsx` (perfil, experiencia, educación, certificaciones, proyectos, contadores).
- Añadir sección de **Tecnologías** (data-driven, badges por categoría) y sección de **Contacto directo** (WhatsApp/correo/redes) con CTA desde el home.
- Eliminar por completo la ruta y datos de testimonios y su ítem en el navbar.
- Elevar la UI/UX: jerarquía tipográfica, tarjetas con profundidad (bento/glass ligero), hover states y espaciado consistentes, conservando paleta e imágenes.
- Añadir animaciones de entrada y microinteracciones con framer-motion (incluyendo reveals en viewport con `whileInView`).

**Non-Goals:**
- No se cambia el framework, ni se migra a otra librería de estilos.
- No se rediseña el logotipo ni se cambian los colores de marca.
- No se añade backend, formulario con envío server-side ni base de datos (el contacto es vía enlaces directos).
- No se implementa i18n ni modo claro/oscuro (el sitio es dark por diseño actual).
- No se añaden dependencias nuevas obligatorias.

## Decisions

### D1: framer-motion en lugar de anime.js
Ya está instalado y es idiomático con React/Next. Reutilizamos `MotionTransition`/`fadeIn` y añadimos variantes nuevas (stagger, `whileInView`) en `utils/motion-transitions.tsx`. **Alternativa descartada:** anime.js — añadiría dependencia y trabajo imperativo de refs sin beneficio claro aquí.

### D2: Corregir y ampliar utilidades de animación
Hay un bug en `fadeIn` (`pacity` en vez de `opacity` en el estado `hidden`). Se corrige y se agregan helpers: `fadeInUp`, `staggerContainer` y variantes con `viewport={{ once: true }}` para reveals al hacer scroll. Esto habilita animaciones consistentes en tecnologías, contacto y tarjetas.

### D3: Contenido dirigido por datos en `data.tsx`
Todas las secciones nuevas y actualizadas leen de arreglos tipados en `data.tsx`:
- `dataAboutPage` (timeline) → reemplazar con experiencia/educación reales del CV.
- `dataPortfolio` → añadir proyectos del CV (Barbería Julio Max, gestión Go+Vue, landing+gestión estudiantil) manteniendo los existentes con enlaces válidos; usar imágenes actuales o `NoImagenDispoible.png` cuando falte.
- `dataCounter` → métricas verídicas (años, proyectos, tecnologías); eliminar "clientes satisfechos".
- `itemsNavbar` → quitar Testimonios, añadir Tecnologías y Contacto (íconos `lucide-react`, p. ej. `Cpu`/`Layers` y `Phone`/`MessageCircle`).
- **Nuevo** `techCategories`: arreglo de `{ title, icon, items[] }` con las categorías del CV (IA, Lenguajes, Frameworks, Bases de Datos, Herramientas, Habilidades Blandas, Idiomas).
- **Nuevo** `contactChannels` / `contactInfo`: WhatsApp (`https://wa.me/18494061420`), correo (`mailto:Apro24470@gmail.com`), redes (reutiliza `socialNetworks`).

### D4: Rutas nuevas y eliminación de testimonios
- Crear `app/(routes)/technologies/page.tsx` y `app/(routes)/contact/page.tsx`.
- Eliminar `app/(routes)/testimonials/` y borrar `dataTestimonials` de `data.tsx`.
- Evaluar retirar `swiper` de `layout.tsx`/`package.json` sólo si ya no lo usa `slider-services`; como `slider-services` aún lo usa, se mantiene por ahora.

### D5: Sistema visual (UI/UX) sobre Tailwind
- Introducir un patrón de **tarjeta** reutilizable: fondo translúcido (`bg-my-green-800/40`), `backdrop-blur`, borde sutil (`border-white/10`), `rounded-2xl`, sombra y hover (elevación + borde tamarillo). Se aplica a proyectos, tecnologías, timeline y contacto.
- Jerarquía tipográfica consistente: títulos de sección con acento `text-tamarillo-500`, subtítulos y cuerpo con opacidades de blanco.
- Layout tipo **bento** para tecnologías (grid responsivo) y para el home (hero reorganizado con foto, claim y CTAs incluyendo contacto).
- Conservar `gradient-cover`, partículas (`CoverParticles`) e imágenes de `public/`.

### D6: Contacto sin backend
El contacto usa enlaces directos (`wa.me`, `mailto:`, redes) — cero backend, sin recolección de datos. **Alternativa descartada:** formulario con API/route handler — fuera de alcance y requeriría servicio de correo.

## Risks / Trade-offs

- **[Fechas del CV en el futuro (p. ej. CoopHispanica "Julio 2026 - Actualidad")]** → Se transcriben tal cual del CV; se marcan como "Actualidad" cuando el CV lo indica. Riesgo de inconsistencia temporal → mitigación: mantener las fechas exactamente como en el CV y centralizarlas en `data.tsx` para editar fácil.
- **[Imágenes faltantes para proyectos nuevos]** → usar `NoImagenDispoible.png` como placeholder existente; no se inventan capturas.
- **[Exceso de animación afecta rendimiento/accesibilidad]** → usar `whileInView` con `once: true`, transiciones cortas y respetar `prefers-reduced-motion` donde sea sencillo; evitar animar listas muy grandes simultáneamente.
- **[Romper enlaces al eliminar `/testimonials`]** → quitar toda referencia (navbar, imports); verificar build. No hay enlaces internos hacia testimonios salvo el navbar.
- **[`swiper` queda infrautilizado]** → se mantiene mientras `slider-services` lo use; retirarlo es opcional y no bloquea el cambio.
- **[Datos ficticios previos (contadores/testimonios)]** → se eliminan para no comprometer credibilidad; los contadores pasan a métricas reales/verificables.

## Migration Plan

1. Actualizar `data.tsx` (contenido CV + nuevos arreglos `techCategories`, contacto; limpiar `dataTestimonials`, `dataCounter`, `itemsNavbar`).
2. Corregir/ampliar `utils/motion-transitions.tsx` y `transition-components.tsx`.
3. Rediseñar componentes compartidos (tarjeta, timeline, portafolio-box, contadores).
4. Crear rutas `technologies` y `contact`; actualizar `navbar` y `header`.
5. Rediseñar `home`/`introduction`, `about-me`, `services`, `portfolio`.
6. Eliminar `app/(routes)/testimonials/` y referencias.
7. Verificar `npm run build` y `npm run lint`; revisión visual en `npm run dev`.

Rollback: el cambio está aislado en una rama; revertir el merge restaura el estado anterior (la ruta de testimonios y datos se recuperan del control de versiones).

## Open Questions

- ¿Confirmar que las fechas futuras del CV (2026) deben mostrarse literalmente o ajustarse? (por defecto: literal del CV).
- ¿La sección de Tecnologías y Contacto deben ser rutas separadas o secciones dentro de páginas existentes? (por defecto: rutas dedicadas + CTA/preview en el home).
- ¿Se desea conservar el bloque de "servicios" (Branding/SEO/Copywriting) que no está en el CV, o reenfocarlo a servicios de desarrollo reales? (por defecto: reenfocar a servicios de desarrollo coherentes con el perfil).

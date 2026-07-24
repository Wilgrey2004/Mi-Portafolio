## Why

El portafolio actual funciona pero se siente plano: varias pantallas son demasiado simples, la información no coincide con el CV real (experiencia, proyectos, stack), y hay una sección de "testimonios de clientes" con datos ficticios que resta credibilidad a un portafolio profesional. Falta además una vía de contacto directo y una sección clara que comunique el stack tecnológico que domino, algo clave para reclutadores. Este cambio moderniza la UI/UX, sincroniza el contenido con el CV y refuerza la conversión (contacto).

## What Changes

- **Actualizar toda la información al CV real**: perfil full stack (C#/.NET y React), arquitectura Onion, spec-driven y flujos con agentes de IA; experiencia real (CoopHispanica, LINKDICOM, cookiesjar SRL); educación (ITLA, Politécnico Analilliams Miranda); certificaciones (React/Spring/ChatGPT IA, MVC .NET+ASP); proyectos reales (Barbería Julio Max, Sistema de gestión Go+Vue, Landing + gestión estudiantil) manteniendo los proyectos actuales relevantes.
- **BREAKING** Eliminar la pantalla de testimonios/clientes (`/testimonials`) y quitar su entrada del navbar y sus datos ficticios.
- **Nueva sección de Tecnologías** que agrupa el stack por categorías (IA, Lenguajes, Frameworks, Bases de datos, Herramientas, Habilidades blandas, Idiomas) con íconos/badges.
- **Nueva sección de Contacto directo** con acción a WhatsApp (+1 849-406-1420), correo (Apro24470@gmail.com) y redes, más un CTA visible desde el home.
- **Rediseño visual (UI/UX)** de home, sobre-mí, servicios y portafolio: jerarquía tipográfica, tarjetas con profundidad (bento/glassmorphism ligero), estados hover y espaciado consistentes, manteniendo la paleta (my-green + tamarillo) e imágenes actuales.
- **Animaciones** de entrada y microinteracciones con framer-motion (fade/slide/stagger, hover en tarjetas, viewport reveals) reutilizando las utilidades existentes.
- Actualizar el navbar para reflejar las secciones nuevas (Tecnologías, Contacto) y quitar Testimonios.

## Capabilities

### New Capabilities
- `technologies-section`: Nueva página/sección que presenta el stack tecnológico agrupado por categorías con badges animados, alimentada desde `data.tsx`.
- `direct-contact`: Sección de contacto directo con WhatsApp, correo y redes sociales, más CTA en el home.
- `portfolio-content`: Modelo de datos y contenido del portafolio (perfil, experiencia/timeline, proyectos, contadores) sincronizado con el CV real.

### Modified Capabilities
<!-- No hay specs existentes en openspec/specs/; todo el comportamiento se define como nuevas capabilities. -->

## Impact

- **Contenido/datos**: `data.tsx` (perfil, timeline, proyectos, contadores, navbar, redes; nuevos arreglos de tecnologías y contacto).
- **Rutas/páginas**: `app/page.tsx`, `app/introduction.tsx`, `app/(routes)/about-me`, `app/(routes)/services`, `app/(routes)/portfolio`; nuevas rutas `app/(routes)/technologies` y `app/(routes)/contact`; **eliminación** de `app/(routes)/testimonials`.
- **Componentes**: `navbar.tsx`, `header.tsx`, `porfoleo-box.tsx`, `time-line.tsx`, `slider-services.tsx`, `counter-services.tsx`; nuevos componentes de tecnologías, contacto y tarjetas rediseñadas; utilidades de animación en `utils/motion-transitions.tsx`.
- **Estilos**: `tailwind.config.ts` y `app/globals.css` (posibles utilidades nuevas), conservando la paleta e imágenes en `public/`.
- **Dependencias**: se reutiliza `framer-motion` ya instalado; se puede retirar `swiper` de testimonios si deja de usarse. No se añaden dependencias nuevas obligatorias.

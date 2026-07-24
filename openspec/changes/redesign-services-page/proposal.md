## Why

La pantalla de servicios actual es un grid de 3 columnas de tarjetas idénticas: un patrón genérico que no diferencia el portafolio ni comunica el valor real de cada servicio. Se percibe plano, sin jerarquía y sin narrativa. Queremos una experiencia con más carácter que capte la atención y transmita profesionalidad.

## What Changes

- Rediseño completo de la pantalla `/services` con un layout asimétrico (secciones con cortes/diagonales) que rompe el grid recto y elimina el look genérico.
- Nuevo **carrusel de servicios** (Swiper, ya presente en el proyecto) que permite recorrer los servicios de forma deslizable, sustituyendo el grid estático de tarjetas.
- Nueva **sección de texto** editorial que da contexto y narrativa a la oferta de servicios (propuesta de valor / cómo trabajo), con jerarquía tipográfica clara.
- Reutilización del sistema de diseño existente (`card-glass`, `tech-badge`, acento `tamarillo`) para mantener coherencia con el resto del sitio.
- Respeto de accesibilidad: navegación por teclado en el carrusel y `prefers-reduced-motion`.

## Capabilities

### New Capabilities
- `services-page`: Estructura, contenido y comportamiento de la pantalla de servicios rediseñada — sección de texto editorial, carrusel de servicios deslizable y layout asimétrico con acentos, incluyendo requisitos de accesibilidad y responsividad.

### Modified Capabilities
<!-- No existen specs previas en openspec/specs/ para esta capacidad; se introduce como nueva. -->

## Impact

- **Código afectado**: `app/(routes)/services/page.tsx` (reescritura del layout), nuevo componente de carrusel de servicios, nueva sección de texto; posibles utilidades de estilo en `app/globals.css`.
- **Datos**: reutiliza `serviceData` de `data.tsx`; puede añadir campos opcionales (ej. detalle/beneficio) por servicio.
- **Dependencias**: `swiper` y `framer-motion` (ya instaladas). Sin nuevas dependencias externas.
- **Sin cambios** en rutas, navegación global ni en otras pantallas.

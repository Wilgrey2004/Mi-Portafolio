## 1. Preparación

- [x] 1.1 Verificar que `swiper` está en `package.json` y confirmar los módulos disponibles (Navigation, Pagination, Keyboard, A11y, Autoplay)
- [x] 1.2 Revisar el `slider-services.tsx` eliminado en el historial de git como referencia de configuración previa de Swiper
- [x] 1.3 (Opcional) Enriquecer `serviceData` en `data.tsx` con campos opcionales (ej. beneficio/detalle) sin romper otros consumidores

## 2. Sección de texto editorial

- [x] 2.1 Reescribir el encabezado de `app/(routes)/services/page.tsx` con `section-title` + acento `tamarillo` y un párrafo editorial con ancho acotado (`max-w-2xl`)
- [x] 2.2 Envolver la sección de texto en `RevealOnScroll` para animación de entrada coherente
- [x] 2.3 Verificar legibilidad y centrado en viewport móvil

## 3. Carrusel de servicios

- [x] 3.1 Crear `components/services-carousel.tsx` (`"use client"`) con Swiper alimentado por `serviceData`
- [x] 3.2 Configurar `breakpoints` responsivos (~1 slide móvil, ~2 tablet, ~3 escritorio)
- [x] 3.3 Renderizar cada slide con ícono, título y descripción usando `card-glass` / `card-glass-hover`
- [x] 3.4 Añadir navegación (prev/next) y paginación reutilizando los estilos de `swiper-pagination` de `globals.css`
- [x] 3.5 Habilitar módulo `keyboard` y `a11y` para navegación accesible
- [x] 3.6 Configurar autoplay pausable (hover/focus) y desactivarlo cuando `prefers-reduced-motion` esté activo
- [x] 3.7 Reemplazar el grid estático de `page.tsx` por `<ServicesCarousel />`

## 4. Layout asimétrico / cortes visuales

- [x] 4.1 Añadir utilidad(es) de `clip-path` diagonal en `app/globals.css` (solo para elementos decorativos)
- [x] 4.2 Componer la pantalla con asimetría: encabezado con offset y/o panel/acento diagonal que rompa la cuadrícula uniforme
- [x] 4.3 Añadir elemento decorativo con acento `tamarillo` (blob/línea) sin recortar texto
- [x] 4.4 Verificar que los cortes no ocultan contenido en móvil, tablet y escritorio

## 5. CTA y cierre

- [x] 5.1 Conservar el botón de contacto (WhatsApp) usando `contactInfo`, visible tras el carrusel
- [x] 5.2 Verificar coherencia visual con el resto del sitio (tokens, colores, tipografía)

## 6. Verificación

- [x] 6.1 Ejecutar la app y revisar `/services` en móvil, tablet y escritorio
- [x] 6.2 Probar navegación por teclado del carrusel
- [x] 6.3 Probar con `prefers-reduced-motion: reduce` activo
- [x] 6.4 Ejecutar `npm run build` / lint para confirmar que compila sin errores

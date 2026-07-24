## 1. Datos y contenido (data.tsx)

- [x] 1.1 Actualizar `dataAboutPage` (timeline) con la trayectoria real del CV: ITLA/Politécnico Analilliams Miranda, cookiesjar SRL (Mar–Jul 2025, +570h .NET), LINKDICOM (Front-End Vue, Mar–Jun 2026), CoopHispanica (Junior Full Stack C#+React, Jul 2026–Actualidad), con fechas y `tech` correctos
- [x] 1.2 Actualizar `dataPortfolio` añadiendo proyectos del CV (Barbería Julio Max — Vue/bento; Sistema de gestión de productos — Go+Vue+SQL Server/DI; Landing + gestión estudiantil — React+Supabase/Postgres) y revisar enlaces de los existentes; usar `NoImagenDispoible.png` donde falte imagen
- [x] 1.3 Reemplazar `dataCounter` por métricas verídicas (p. ej. años de experiencia, proyectos finalizados, tecnologías dominadas) y eliminar "Clientes satisfechos"
- [x] 1.4 Crear arreglo `techCategories` con categorías del CV: IA (Claude Code, Opencode, Spec-kit, Open-Speck, GPT Codex), Lenguajes (C#, Go, TypeScript, SQL, JavaScript, Dart), Frameworks (.NET Core 8, Vue 3, React, Flutter), Bases de Datos (SQL Server, Oracle 19c, MySQL, Isar, Supabase), Herramientas (VS Code, Visual Studio, Android Studio, Netlify, Git, GitHub, Docker), Habilidades Blandas e Idiomas (Español nativo, Inglés A2), con `icon` de lucide-react
- [x] 1.5 Crear `contactInfo`/`contactChannels` (WhatsApp `https://wa.me/18494061420`, correo `mailto:Apro24470@gmail.com`) y verificar `socialNetworks`
- [x] 1.6 Actualizar `itemsNavbar`: quitar Testimonios, añadir Tecnologías y Contacto con íconos y `link` correctos; corregir títulos duplicados
- [x] 1.7 Eliminar `dataTestimonials` de `data.tsx`

## 2. Utilidades de animación (framer-motion)

- [x] 2.1 Corregir bug `pacity` → `opacity` en `utils/motion-transitions.tsx` (`fadeIn` estado hidden)
- [x] 2.2 Añadir helpers `fadeInUp`, `staggerContainer` y variantes reutilizables para reveals
- [x] 2.3 Añadir un componente/patrón de revelado en viewport con `whileInView` y `viewport={{ once: true }}` (extender `transition-components.tsx` o crear helper)

## 3. Sistema visual y componente de tarjeta

- [x] 3.1 Definir patrón de tarjeta reutilizable (fondo translúcido `my-green`, `backdrop-blur`, borde `white/10`, `rounded-2xl`, hover con elevación + acento tamarillo), conservando paleta e imágenes
- [x] 3.2 Añadir utilidades necesarias en `tailwind.config.ts`/`app/globals.css` sin romper la paleta existente

## 4. Sección de Tecnologías

- [x] 4.1 Crear componente de sección de tecnologías (grid bento responsivo) que consuma `techCategories`
- [x] 4.2 Aplicar animación stagger de entrada y microinteracción hover a los badges
- [x] 4.3 Crear ruta `app/(routes)/technologies/page.tsx` con `TransitionPages`, `CoverParticles`/`CircleImage` y título coherente

## 5. Sección de Contacto directo

- [x] 5.1 Crear componente de contacto con canales accionables (WhatsApp, correo, redes) y estados hover accesibles
- [x] 5.2 Crear ruta `app/(routes)/contact/page.tsx` con animaciones de entrada
- [x] 5.3 Añadir CTA de contacto visible en el home (`introduction.tsx`)

## 6. Rediseño de pantallas existentes

- [x] 6.1 Rediseñar `app/introduction.tsx` (home): hero reorganizado, claim del CV (full stack C#/.NET + React), CTAs (proyectos, sobre mí, CV, contacto)
- [x] 6.2 Rediseñar `about-me` y `components/time-line.tsx`/`counter-services.tsx` con el nuevo patrón de tarjeta y animaciones
- [x] 6.3 Rediseñar `portfolio` y `components/porfoleo-box.tsx` (tarjetas con profundidad, hover, imagen consistente)
- [x] 6.4 Reenfocar/rediseñar `services` a servicios coherentes con el perfil de desarrollo y mejorar el layout
- [x] 6.5 Actualizar `components/navbar.tsx` y `components/header.tsx` para reflejar las secciones nuevas y el ítem activo

## 7. Eliminación de testimonios/clientes

- [x] 7.1 Eliminar `app/(routes)/testimonials/` y todas sus referencias
- [x] 7.2 Verificar que no queden imports ni enlaces rotos a testimonios; evaluar retiro de `swiper` sólo si deja de usarse

## 8. Verificación

- [x] 8.1 Ejecutar `npm run lint` y corregir advertencias introducidas
- [x] 8.2 Ejecutar `npm run build` y asegurar compilación sin errores
- [x] 8.3 Revisión visual con `npm run dev` en móvil y escritorio (navegación, animaciones, enlaces de contacto)
- [x] 8.4 Validar el cambio con `openspec validate revamp-portfolio-ui-ux`

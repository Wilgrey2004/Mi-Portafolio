## ADDED Requirements

### Requirement: Contenido sincronizado con el CV

El sistema SHALL mostrar información de perfil, experiencia, educación, certificaciones y proyectos coherente con el CV real del desarrollador. El texto introductorio SHALL describir un perfil full stack (C#/.NET y React) con arquitectura Onion, desarrollo guiado por especificaciones y flujos asistidos por IA.

#### Scenario: Perfil actualizado en el home

- **WHEN** el usuario visita el home
- **THEN** el título y la descripción reflejan el perfil full stack C#/.NET + React del CV, no un texto genérico

#### Scenario: Experiencia real en la trayectoria

- **WHEN** el usuario visita la sección de trayectoria (about-me)
- **THEN** el timeline incluye las experiencias reales del CV (CoopHispanica, LINKDICOM, cookiesjar SRL) y la formación en ITLA, con fechas y tecnologías correctas

#### Scenario: Proyectos reales en el portafolio

- **WHEN** el usuario visita el portafolio
- **THEN** se muestran los proyectos del CV (p. ej. Barbería Julio Max, sistema de gestión Go+Vue, landing + gestión estudiantil) junto con los proyectos existentes relevantes, cada uno con enlaces válidos

### Requirement: Contadores de métricas coherentes

El sistema SHALL mostrar contadores de métricas que sean verídicos respecto al perfil (p. ej. años de experiencia, proyectos, tecnologías) y SHALL evitar métricas ficticias no verificables.

#### Scenario: Métricas sin datos ficticios

- **WHEN** el usuario visita la sección con contadores
- **THEN** las métricas mostradas corresponden a valores reales o verificables del perfil, sin cifras inventadas de "clientes"

### Requirement: Retiro de la sección de testimonios de clientes

El sistema SHALL eliminar la pantalla de testimonios de clientes, su ruta, su entrada en el navbar y sus datos ficticios.

#### Scenario: Ruta de testimonios inexistente

- **WHEN** el usuario intenta navegar a `/testimonials`
- **THEN** la ruta ya no existe como sección del portafolio y no aparece en el navbar

### Requirement: Rediseño visual de las pantallas

El sistema SHALL aplicar un rediseño visual consistente (jerarquía tipográfica, tarjetas con profundidad, espaciado y estados hover coherentes) a las pantallas de home, trayectoria, servicios y portafolio, conservando la paleta (my-green / tamarillo) e imágenes actuales, y SHALL incorporar animaciones de entrada con framer-motion.

#### Scenario: Consistencia visual entre pantallas

- **WHEN** el usuario navega entre las distintas secciones
- **THEN** las pantallas comparten un lenguaje visual consistente (tarjetas, tipografía, espaciado) y no lucen planas o vacías

#### Scenario: Animaciones de entrada

- **WHEN** una sección se carga o entra en el viewport
- **THEN** sus elementos principales aparecen con animaciones de entrada suaves mediante framer-motion

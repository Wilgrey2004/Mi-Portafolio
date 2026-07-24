# technologies-section Specification

## Purpose

Presentar de forma clara y atractiva el stack tecnológico del desarrollador, agrupado por categorías y alimentado desde datos, para que reclutadores y visitantes identifiquen rápidamente las competencias técnicas.

## Requirements

### Requirement: Sección de tecnologías agrupada por categorías

El sistema SHALL presentar una sección de tecnologías que agrupe el stack del desarrollador en categorías provenientes del CV: Inteligencia Artificial, Lenguajes, Frameworks/Tecnologías, Bases de Datos, Herramientas de Trabajo, Habilidades Blandas e Idiomas. Cada categoría SHALL mostrar sus elementos como badges o tarjetas legibles, alimentados desde `data.tsx` y no codificados en el markup.

#### Scenario: Renderizado de todas las categorías

- **WHEN** el usuario visita la sección de tecnologías
- **THEN** el sistema muestra cada categoría con su título y todos los elementos definidos en `data.tsx` (p. ej. IA: Claude Code, Opencode, Spec-kit, OpenSpec, GPT Codex; Lenguajes: C#, Go, TypeScript, SQL, JavaScript, Dart)

#### Scenario: Contenido dirigido por datos

- **WHEN** se agrega o edita un elemento en el arreglo de tecnologías de `data.tsx`
- **THEN** la sección refleja el cambio sin modificar el componente de presentación

### Requirement: Animación de entrada de los badges de tecnología

El sistema SHALL animar la aparición de las categorías y sus badges usando framer-motion, con un efecto escalonado (stagger) que se dispara al entrar en el viewport, respetando la paleta de colores existente (my-green / tamarillo).

#### Scenario: Revelado al hacer scroll

- **WHEN** la sección de tecnologías entra en el viewport
- **THEN** las categorías y badges aparecen con una animación escalonada (fade/slide) sin bloquear la interacción

#### Scenario: Microinteracción en hover

- **WHEN** el usuario pasa el cursor sobre un badge de tecnología
- **THEN** el badge responde con una microinteracción visual (escala o resalte) coherente con la paleta

### Requirement: Acceso desde la navegación

El sistema SHALL exponer la sección de tecnologías como una entrada accesible en el navbar y/o desde el home, permitiendo llegar a ella mediante una ruta dedicada.

#### Scenario: Navegación a tecnologías

- **WHEN** el usuario selecciona la entrada de Tecnologías en el navbar
- **THEN** el sistema navega a la sección/ruta de tecnologías y resalta el ítem activo

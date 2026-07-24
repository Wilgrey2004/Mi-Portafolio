## ADDED Requirements

### Requirement: Sección de texto editorial

La pantalla de servicios SHALL presentar una sección de texto introductoria que comunique la propuesta de valor y la forma de trabajar, con jerarquía tipográfica clara (título de sección con acento, subtítulo/párrafo de apoyo) y separada visualmente del listado de servicios.

#### Scenario: El visitante llega a la pantalla de servicios

- **WHEN** el visitante abre la ruta `/services`
- **THEN** ve un encabezado con acento en color `tamarillo` y un párrafo editorial que describe la propuesta de valor antes de recorrer los servicios

#### Scenario: Lectura en pantallas pequeñas

- **WHEN** el visitante abre `/services` en un viewport móvil
- **THEN** la sección de texto se mantiene legible, centrada y con ancho de línea acotado (no ocupa todo el ancho de la pantalla)

### Requirement: Carrusel de servicios deslizable

La pantalla de servicios SHALL mostrar los servicios en un carrusel deslizable (Swiper) en lugar de un grid estático, permitiendo recorrer los servicios con controles de navegación y paginación.

#### Scenario: Navegación con controles

- **WHEN** el visitante interactúa con los controles de siguiente/anterior o la paginación del carrusel
- **THEN** el carrusel avanza o retrocede mostrando las tarjetas de servicio correspondientes

#### Scenario: Contenido de cada slide

- **WHEN** se muestra un slide del carrusel
- **THEN** presenta el ícono, título y descripción del servicio usando el estilo `card-glass` coherente con el resto del sitio

#### Scenario: Adaptación por tamaño de pantalla

- **WHEN** cambia el ancho del viewport
- **THEN** el carrusel ajusta la cantidad de slides visibles (menos en móvil, más en escritorio) sin romper el layout

### Requirement: Layout asimétrico no genérico

La pantalla de servicios SHALL usar un layout asimétrico con cortes o acentos visuales (diagonales, offsets o formas) que rompan el grid recto uniforme, diferenciándose del patrón genérico de tarjetas idénticas en cuadrícula.

#### Scenario: Presentación diferenciada

- **WHEN** el visitante observa la pantalla de servicios
- **THEN** percibe una composición con asimetría o cortes visuales, no una simple cuadrícula uniforme de tarjetas iguales

### Requirement: Accesibilidad y movimiento reducido

La pantalla de servicios SHALL ser accesible: el carrusel MUST ser navegable por teclado y todas las animaciones MUST respetar la preferencia `prefers-reduced-motion`.

#### Scenario: Navegación por teclado

- **WHEN** el visitante usa el teclado para enfocar y operar el carrusel
- **THEN** puede avanzar y retroceder entre servicios sin necesidad de mouse

#### Scenario: Preferencia de movimiento reducido

- **WHEN** el sistema del visitante indica `prefers-reduced-motion: reduce`
- **THEN** las animaciones de entrada y del carrusel se reducen o desactivan según esa preferencia

### Requirement: Llamada a la acción de contacto

La pantalla de servicios SHALL conservar una llamada a la acción que dirija al visitante a contactar (WhatsApp/contacto), visible tras recorrer los servicios.

#### Scenario: El visitante decide contactar

- **WHEN** el visitante termina de revisar los servicios
- **THEN** encuentra un botón de contacto que abre el canal configurado en `contactInfo`

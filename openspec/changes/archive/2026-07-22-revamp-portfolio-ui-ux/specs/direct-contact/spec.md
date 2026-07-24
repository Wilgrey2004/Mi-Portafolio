## ADDED Requirements

### Requirement: Sección de contacto directo

El sistema SHALL ofrecer una sección de contacto directo que muestre los canales reales del desarrollador tomados del CV: WhatsApp/teléfono (+1 849-406-1420), correo electrónico (Apro24470@gmail.com) y las redes sociales existentes. Cada canal SHALL ser accionable mediante enlaces (`wa.me`, `mailto:`, URLs externas).

#### Scenario: Contacto por WhatsApp

- **WHEN** el usuario pulsa el canal de WhatsApp
- **THEN** el sistema abre `https://wa.me/18494061420` con un mensaje inicial predefinido en una pestaña nueva

#### Scenario: Contacto por correo

- **WHEN** el usuario pulsa el canal de correo
- **THEN** el sistema abre un enlace `mailto:Apro24470@gmail.com`

#### Scenario: Acceso a redes sociales

- **WHEN** el usuario pulsa un ícono de red social
- **THEN** el sistema abre la URL correspondiente en una pestaña nueva

### Requirement: CTA de contacto visible desde el home

El sistema SHALL presentar un llamado a la acción (CTA) de contacto accesible desde el home y desde el navbar, de modo que el contacto directo esté a un clic de la pantalla principal.

#### Scenario: CTA desde el home

- **WHEN** el usuario está en el home
- **THEN** existe un botón/CTA visible que lleva a la sección de contacto directo

#### Scenario: Entrada en el navbar

- **WHEN** el usuario abre el navbar
- **THEN** existe una entrada de Contacto que navega a la sección de contacto y resalta el ítem activo

### Requirement: Animación y coherencia visual del contacto

El sistema SHALL animar la aparición de la sección de contacto con framer-motion y SHALL mantener la paleta e imágenes actuales, con estados hover claros en cada canal.

#### Scenario: Revelado al entrar en viewport

- **WHEN** la sección de contacto entra en el viewport
- **THEN** los canales aparecen con una animación de entrada (fade/slide) y responden con hover accesible

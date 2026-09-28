# Auditoría de patrones UX/UI del portafolio

Fecha: 28 de septiembre de 2026. Criterios: Impeccable audit, craft-floor y harden. Modo de la superficie: Experience. La solicitud incluye aplicar las correcciones.

## Veredicto de integridad

El portafolio conserva un lenguaje propio: verde oscuro y tamarillo, ilustración personal, fondos líquidos y estelares, proyectos reales y trayectoria editorial. Los problemas principales eran mecánicos y de lectura: controles apretados, movimiento durante la lectura, contenido omitido y estilos compartidos que anulaban decisiones locales. Se corrigieron sin sustituir su identidad.

## Evaluación orientativa

Estas puntuaciones son juicio de auditoría, no certificación WCAG ni medición de rendimiento.

| Dimensión | Antes | Después | Evidencia principal |
| --- | ---: | ---: | --- |
| Accesibilidad | 2/4 | 3/4 | Botones de paginación, foco estable en tecnologías y corrección de hidratación con movimiento reducido. |
| Rendimiento | 2/4 | 3/4 | Retiro de blur decorativo en navegación y filas; sizes de imágenes ajustado a la cuadrícula real. |
| Adaptación | 2/4 | 3/4 | Navegación móvil separada de pausa; controles principales mayores de 44 px. |
| Sistema visual | 2/4 | 3/4 | Geist aplicado, tokens globales, superficies estables y alineación explícita. |
| Integridad | 2/4 | 4/4 | Siete categorías provenientes de datos, contenido factual preservado y detector sin hallazgos. |
| Total | 10/20 | 16/20 | De aceptable a bueno, según las bandas de Impeccable. |

## Hallazgos y correcciones

14 hallazgos tratados: 0 P0, 5 P1, 9 P2, 0 P3. Las prioridades reflejan impacto observado o riesgo comprobado en código; no todas implican incumplimiento WCAG.

| Prioridad | Ubicación | Hallazgo e impacto | Corrección |
| --- | --- | --- | --- |
| P1 | components/navbar.tsx; app/globals.css | En 320 px los seis destinos y la pausa comparten una fila demasiado estrecha; las etiquetas se juntan. | Pausa por encima del dock móvil, seis columnas dedicadas, etiquetas de 12 px. Medición final: aproximadamente 50 × 56 px por enlace. |
| P1 | components/services-carousel.tsx; app/globals.css | Paginación de puntos pequeña para tocar y markup sin button nativo. | Botones nativos con etiquetas en español y área de 44 × 44 px medida en DOM. |
| P1 | components/services-carousel.tsx | Autoplay continuo con delay 0 y transiciones de siete segundos mueve texto mientras se lee. | Intervalo de 6,5 segundos, transición de 500 ms y controles manuales conservados. El foco y el hover continúan pausando el avance. |
| P1 | components/technologies.tsx; app/globals.css | Copias decorativas contienen botones que pueden recibir foco al hacer clic; recorrido de teclado sobre contenido animado. | Copias como spans, botones únicamente en la lista principal y presentación estática al usar foco visible. |
| P1 | components/motion-preferences.tsx | Al cargar con prefers-reduced-motion el navegador omite un botón que el servidor sí renderiza; provoca fallo de hidratación. | Resolver la preferencia después de hidratar. Recarga real con emulación de movimiento reducido: sin errores de consola. |
| P2 | app/globals.css | Texto con sombras fuertes usado como sustituto de una superficie legible; navegación translúcida y filas con blur compiten con los fondos. | Retirar sombras del texto y blur decorativo; superficies opacas para contenido agrupado, navegación oscura y velo sobre el fondo líquido. Mejora visual comprobada, sin certificar contraste de cada fotograma del shader. |
| P2 | app/globals.css | Geist se descarga y declara como variable, pero no se asigna al body. | Aplicar font-family con la variable de Geist. |
| P2 | app/globals.css; rutas de contacto, proyectos, servicios y tecnologías | section-title impone alineación izquierda en escritorio y anula encabezados centrados. | La clase compartida controla tipografía; cada pantalla declara su alineación. Proyectos centrados confirmado en estilos calculados. |
| P2 | components/technologies.tsx | Solo se renderizan cinco de siete categorías exigidas por technologies-section. | Mostrar habilidades blandas e idiomas desde techCategories. Confirmados ambos encabezados y elementos en el árbol accesible. |
| P2 | components/header.tsx | Redes sociales de 40 px y marca sin altura mínima. | Objetivos de 44 px, espaciado compacto para móvil y separación explícita entre Wilgrey y MD. |
| P2 | app/globals.css; components/transition-components.tsx; components/motion-preferences.tsx | Regla global de 0,01 ms elimina toda transición; componentes Framer no usan la preferencia compartida. | Alternativas selectivas de CSS, MotionConfig y entrada inmediata en los wrappers cuando hay movimiento reducido. |
| P2 | components/motion-preferences.tsx; components/rotating-words.tsx | Pausa perdida al recargar; etiquetas accesibles cambian con el estado y el título rotatorio. | Guardar pausa localmente, etiqueta estable de botón toggle y título accesible estable. Almacenamiento bloqueado manejado sin impedir interacción. |
| P2 | components/porfoleo-box.tsx | sizes solicita 25vw aunque hay tres columnas; imagen puede verse menos nítida de lo previsto. | Usar tamaños de una, dos o tres columnas y 360 px al alcanzar el ancho máximo del contenedor. |
| P2 | components/porfoleo-box.tsx | Tres grandes bloques «Captura no disponible» dominan la primera pantalla de proyectos. | Los proyectos sin imagen presentan directamente su título, descripción y repositorios; las capturas reales conservan protagonismo. |

## Patrones sistémicos

- Los estilos compartidos deben definir mecánica y tokens sin imponer la alineación de cada pantalla.
- Un fondo expresivo requiere que texto y controles mantengan una base legible durante la animación.
- Las copias necesarias para una animación deben permanecer decorativas; el teclado debe recorrer una sola lista.
- Pausar movimiento debe mantener la preferencia durante la visita y entre recargas, y respetar la hidratación de Next.js.

## Prácticas conservadas

Enlace para saltar al contenido, main en las seis rutas, idioma español, aria-current en navegación, información desde data.tsx, enlaces externos protegidos con rel, alternativas de imágenes, canales de contacto accionables y fondos que se detienen al ocultar el documento. No se añadieron testimonios ni métricas ficticias.

## Verificación

- Revisión visual de las seis rutas: inicio, trayectoria, servicios, tecnologías, proyectos y contacto. Capturas de escritorio a 1280 × 900 y revisión móvil a 320 × 740, además del viewport inicial de 662 px.
- Medición DOM a 320 px: documento sin desbordamiento horizontal en servicios y tecnologías; enlaces del dock de aproximadamente 50 × 56 px; seis botones de paginación de 44 × 44 px.
- Servicio siguiente probado en navegador: cambia el recorrido y deja la reproducción pausada. Controles y textos permanecen accesibles.
- Tecnologías: navegación Tab alcanza Vue 3 desde .NET 10; aparece descripción contextual y Escape la cierra.
- prefers-reduced-motion emulado: dataset motion=paused y animation-name=none en la fila. Recarga adicional tras corregir hidratación: consola de errores vacía. Emulación y viewport restaurados; pestañas temporales cerradas.
- `npx tsc --noEmit`: aprobado.
- `npm run build`: aprobado, seis rutas y página de error generadas estáticamente.
- Detector Impeccable ejecutado una vez sobre los targets modificados: salida `[]`, exit code 0. No equivale a certificar accesibilidad; algunos ajustes de verificación posteriores no requirieron repetirlo.

## Límites

No se realizó benchmark de GPU, Lighthouse, prueba exhaustiva con lector de pantalla ni contraste de todos los fotogramas WebGL. No se verificó la disponibilidad remota de cada demo/repositorio ni se enviaron mensajes de contacto. No hay capturas nuevas para proyectos que carecen de ellas. La consola mantiene una advertencia de Three.Clock procedente de dependencias. Node disponible: 22.20.0, inferior al mínimo 22.22.0 del proyecto; TypeScript y build completaron correctamente en ese entorno.

No queda un bloqueo funcional observado en los flujos revisados. Una auditoría externa de accesibilidad y medición de rendimiento permitirían validar las dimensiones que aquí se evaluaron por inspección.

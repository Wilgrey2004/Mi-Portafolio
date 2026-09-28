import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Cpu,
  MessageCircle,
  Code2,
  Layers,
  Database,
  Wrench,
  Sparkles,
  Users,
  Languages,
  Server,
  Palette,
  Bot,
  ShieldCheck,
  Mail,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    label: "YouTube",
    logo: <Youtube size={24} strokeWidth={1.75} />,
    src: "https://www.youtube.com/@wilgrey-md",
  },
  {
    id: 3,
    label: "Facebook",
    logo: <Facebook size={24} strokeWidth={1.75} />,
    src: "https://www.facebook.com/wilgrey.ravelocruz.9",
  },
  {
    id: 4,
    label: "Instagram",
    logo: <Instagram size={24} strokeWidth={1.75} />,
    src: "https://www.instagram.com/wilgrey_mmd/",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Inicio",
    icon: <HomeIcon size={20} color="currentColor" strokeWidth={1.75} />,
    link: "/",
  },
  {
    id: 2,
    title: "Sobre mí",
    icon: <UserRound size={20} color="currentColor" strokeWidth={1.75} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Servicios",
    icon: <BookText size={20} color="currentColor" strokeWidth={1.75} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Tecnologías",
    icon: <Cpu size={20} color="currentColor" strokeWidth={1.75} />,
    link: "/technologies",
  },
  {
    id: 5,
    title: "Portafolio",
    icon: <CodeSquare size={20} color="currentColor" strokeWidth={1.75} />,
    link: "/portfolio",
  },
  {
    id: 6,
    title: "Contacto",
    icon: <MessageCircle size={20} color="currentColor" strokeWidth={1.75} />,
    link: "/contact",
  },
];

// Datos de contacto directo (tomados del CV)
export const contactInfo = {
  phoneDisplay: "+1 (849) 406-1420",
  whatsapp: "https://wa.me/18494061420?text=%C2%A1Hola%20Wilgrey!%20Vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20contigo.",
  email: "Apro24470@gmail.com",
  emailHref: "mailto:Apro24470@gmail.com",
  location: "República Dominicana",
  cvUrl: "https://rxresu.me/apro24470/wilgrey-ravalo-cruz-cv",
};

export const contactChannels = [
  {
    id: 1,
    label: "WhatsApp",
    value: contactInfo.phoneDisplay,
    href: contactInfo.whatsapp,
    icon: <MessageCircle size={28} strokeWidth={1.5} />,
    external: true,
  },
  {
    id: 2,
    label: "Correo",
    value: contactInfo.email,
    href: contactInfo.emailHref,
    icon: <Mail size={28} strokeWidth={1.5} />,
    external: false,
  },
  {
    id: 3,
    label: "LinkedIn",
    value: "Wilgrey Ravelo Cruz",
    href: "https://www.linkedin.com/in/wilgrey-ravelo-cruz-50869232b/",
    icon: <Linkedin size={28} strokeWidth={1.5} />,
    external: true,
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Inicio en el Desarrollo de Software",
    subtitle: "Instituto Técnico de las Américas (ITLA)",
    description:
      "Comencé el Técnico Superior en Desarrollo de Software gracias a una beca por méritos académicos. Esta etapa asentó mi pensamiento lógico, la disciplina técnica y las bases de programación orientada a objetos.",
    date: "Ene 2023",
    tech: ["Lógica de programación", "C#", "Java", "SQL"],
  },
  {
    id: 2,
    title: "Primeros proyectos web y experiencia práctica",
    subtitle: "Proyectos independientes",
    description:
      "Durante 2023 desarrollé varios proyectos web aplicando diseño responsive e interactividad. Uno de ellos fue el sitio web de la funeraria LOGUZ.",
    date: "2023",
    tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    link: {
      label: "Ver proyecto LOGUZ",
      url: "https://wilgrey2004.github.io/LOGUZ/",
    },
  },
  {
    id: 9,
    title: "SETEA — Sistema de ventas y reparaciones",
    subtitle: "Software para un negocio de dispositivos electrónicos",
    description:
      "Sistema de escritorio hecho a medida para gestionar ventas y reparaciones de dispositivos electrónicos.",
    date: "2023",
    tech: ["C#", ".NET Framework", "Windows Forms", "SQL Server", "Entity Framework"],
    link: {
      label: "Ver sistema SETEA",
      url: "https://github.com/Wilgrey2004/SETEA-Sistema",
    },
  },
  {
    id: 3,
    title: "Pasantía como Desarrollador Junior C# .NET 8",
    subtitle: "CookiesJar SRL",
    description:
      "Pasantía de más de 570 horas en desarrollo con .NET Core, participando en el mantenimiento y creación de soluciones reales bajo control de versiones y metodologías profesionales de equipo.",
    date: "Mar 2025",
    tech: ["C#", ".NET 8", "ASP.NET", "SQL Server", "Git"],
    link: {
      label: "Ver empresa",
      url: "https://cookiesjar.net/",
    },
  },
  {
    id: 4,
    title: "Certificación en MVC con .NET + ASP",
    subtitle: "Formación complementaria — Misael Cazarez",
    description:
      "Curso enfocado en la arquitectura MVC con ASP.NET, la estructuración de aplicaciones web y la conexión a bases de datos.",
    date: "Ene 2026",
    tech: ["ASP.NET MVC", ".NET", "SQL"],
    link: {
      label: "Ver certificado",
      url: "https://www.udemy.com/certificate/UC-a1d0ac37-187e-44f0-bc46-8da9d283c4cd/",
    },
  },
  {
    id: 5,
    title: "Certificación en React, Spring y ChatGPT IA",
    subtitle: "Formación complementaria — Ing. Ubaldo Acosta, Ing. Marcela Gamiño",
    description:
      "Formación en desarrollo frontend con React, backend con Spring/Spring Boot y uso práctico de herramientas de inteligencia artificial aplicadas al desarrollo de software.",
    date: "Ene 2026",
    tech: ["React", "Spring Boot", "ChatGPT IA", "Java"],
    link: {
      label: "Ver certificado",
      url: "https://www.udemy.com/certificate/UC-1a375878-f85a-47d7-9736-8b9a678aa13e/",
    },
  },
  {
    id: 6,
    title: "Desarrollador Front-End Vue JS",
    subtitle: "LINKDICOM R.D.",
    description:
      "Desarrollo de interfaces con Vue JS, construyendo componentes reutilizables y experiencias fluidas dentro de un equipo de producto.",
    date: "Mar 2026",
    tech: ["Vue 3", "TypeScript", "JavaScript", "CSS"],
  },
  {
    id: 7,
    title: "Desarrollador Junior Full Stack .NET + React",
    subtitle: "CoopHispánica — Punta Cana, Bávaro",
    description:
      "Trabajo en el desarrollo de sistemas bancarios para CoopHispánica: cores financieros, sistemas de tarjetas, crédito y otras soluciones del sector financiero. Como desarrollador junior full stack, construyo el backend con .NET y las interfaces con React.",
    date: "Jul 2026 — Actualidad",
    tech: ["C#", ".NET", "React", "SQL Server"],
  },
  {
    id: 8,
    title: "Sistema de cotizaciones .NET + Vue",
    subtitle: "Aplicación web full stack",
    description:
      "Aplicación para gestionar cotizaciones, plantillas, fases, conceptos y su exportación. Integra una API en .NET organizada por capas y una interfaz en Vue 3.",
    date: "2026",
    tech: ["C#", ".NET", "Onion Architecture", "Vue 3", "TypeScript"],
    link: {
      label: "Ver sistema de cotizaciones",
      url: "https://github.com/Wilgrey2004/Sistema_Cotizaciones",
    },
  },
  {
    id: 10,
    title: "Sitio institucional del Politécnico Ana Lilliams Miranda",
    subtitle: "Proyecto web · despliegue en Netlify",
    description:
      "Desarrollé un sitio para presentar la oferta técnica, la vida escolar y la información del centro.",
    date: "Mar 2026",
    tech: ["React", "TypeScript", "Diseño responsivo", "Netlify"],
    links: [
      { label: "Ver demo", url: "https://palm-demo.netlify.app/" },
      {
        label: "Ver código",
        url: "https://github.com/Wilgrey2004/Politecnico_Analilliams_Miranda_Web_Page",
      },
    ],
  },
  {
    id: 11,
    title: "Sitio web para Barbería Julio",
    subtitle: "Proyecto web · despliegue en Netlify",
    description:
      "Construí una página para mostrar servicios, precios, galería y opciones de contacto y reserva.",
    date: "Mar 2026",
    tech: ["Vue", "JavaScript", "Diseño responsivo", "Netlify"],
    links: [
      { label: "Ver demo", url: "https://juliobarbershopdemo.netlify.app/" },
      {
        label: "Ver código",
        url: "https://github.com/Wilgrey2004/julio_barber_shop",
      },
    ],
  },
  {
    id: 12,
    title: "Sistema de ventas, facturación e inventario",
    subtitle: "Aplicación web · despliegue en Netlify",
    description:
      "Desarrollé un panel para registrar ventas y facturas, y gestionar productos, personal e historial.",
    date: "Mar 2026",
    tech: ["Vue", "JavaScript", "Gestión de inventario", "Netlify"],
    links: [
      {
        label: "Ver demo",
        url: "https://getion-ventas-inventario-wilgrey-md.netlify.app/",
      },
      {
        label: "Ver código",
        url: "https://github.com/Wilgrey2004/Sistema_De_Facturacion_Inventario",
      },
    ],
  },
  {
    id: 13,
    title: "Palma Verde — sitio web para restaurante",
    subtitle: "Proyecto web · despliegue en Netlify",
    description:
      "Diseñé una landing page con menú, ubicación, horarios y reserva de mesa.",
    date: "Abr 2026",
    tech: ["HTML", "CSS", "JavaScript", "Netlify"],
    links: [
      { label: "Ver demo", url: "https://palma-verde.netlify.app/" },
      {
        label: "Ver código",
        url: "https://github.com/Wilgrey2004/palma-verde-demo",
      },
    ],
  },
];

export const dataAboutChapters = [
  { year: "2023", title: "Las bases. Y el primer salto.", entryIds: [1, 2, 9] },
  { year: "2025", title: "Aprender en proyectos reales.", entryIds: [3] },
  { year: "2026", title: "De frontend a full stack.", entryIds: [6, 10, 11, 12, 13, 8, 7], courseIds: [4, 5] },
];

export const dataAboutIntro = {
  currentEntryId: 7,
  projectEntryId: 2,
  projectImage: "/Imagendemo-1.png",
};

export const dataCounter = [
  {
    id: 0,
    endCounter: 3,
    text: "Años de formación y experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 15,
    text: "Proyectos desarrollados",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 20,
    text: "Tecnologías dominadas",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <Layers />,
    title: "Desarrollo Full Stack",
    description:
      "Aplicaciones completas de extremo a extremo con C# / .NET 10 y React, integrando frontend, backend y base de datos.",
    benefit: "Un solo responsable de todo el ciclo",
    tags: ["C#", ".NET 10", "React"],
  },
  {
    icon: <ShieldCheck />,
    title: "Arquitectura de Software",
    description:
      "Software mantenible y escalable aplicando arquitectura Onion, inyección de dependencias y patrones de diseño.",
    benefit: "Código que crece sin romperse",
    tags: ["Onion", "DI", "Patrones"],
  },
  {
    icon: <Palette />,
    title: "Desarrollo Frontend",
    description:
      "Interfaces modernas, responsivas y accesibles con React, Vue 3 y Flutter, centradas en la experiencia de usuario.",
    benefit: "Interfaces que se sienten bien",
    tags: ["React", "Vue 3", "Flutter"],
  },
  {
    icon: <Server />,
    title: "APIs y Backend",
    description:
      "APIs REST eficientes y seguras con C# / .NET 10 y Go, con acceso a datos optimizado y buenas prácticas.",
    benefit: "Backends rápidos y seguros",
    tags: [".NET 10", "Go", "REST"],
  },
  {
    icon: <Database />,
    title: "Bases de Datos",
    description:
      "Diseño y gestión de datos con SQL Server, Oracle 19c, MySQL y Supabase, garantizando integridad y rendimiento.",
    benefit: "Datos íntegros y a punto",
    tags: ["SQL Server", "Oracle", "Supabase"],
  },
  {
    icon: <Bot />,
    title: "Desarrollo asistido por IA",
    description:
      "Flujos spec-driven y agentes de IA (Claude Code, Codex) para acelerar la entrega manteniendo la calidad del código.",
    benefit: "Más velocidad, misma calidad",
    tags: ["Claude Code", "Codex", "Spec-driven"],
  },
];

// Categorías de tecnologías (tomadas del CV)
export const techCategories = [
  {
    id: 1,
    title: "Inteligencia Artificial",
    icon: <Sparkles size={26} strokeWidth={1.5} />,
    items: ["Claude Code", "Opencode", "Spec-kit", "OpenSpec", "GPT Codex"],
  },
  {
    id: 2,
    title: "Lenguajes",
    icon: <Code2 size={26} strokeWidth={1.5} />,
    items: ["C#", "Go", "TypeScript", "SQL", "JavaScript", "Dart"],
  },
  {
    id: 3,
    title: "Frameworks y Tecnologías",
    icon: <Layers size={26} strokeWidth={1.5} />,
    items: [".NET 10", "Vue 3", "React", "Flutter"],
  },
  {
    id: 4,
    title: "Bases de Datos",
    icon: <Database size={26} strokeWidth={1.5} />,
    items: ["SQL Server", "Oracle 19c", "MySQL", "Isar", "Supabase"],
  },
  {
    id: 5,
    title: "Herramientas de Trabajo",
    icon: <Wrench size={26} strokeWidth={1.5} />,
    items: [
      "VS Code",
      "Visual Studio",
      "Android Studio",
      "Netlify",
      "Git",
      "GitHub",
      "Docker",
    ],
  },
  {
    id: 6,
    title: "Habilidades Blandas",
    icon: <Users size={26} strokeWidth={1.5} />,
    items: [
      "Trabajo en equipo",
      "Comunicación efectiva",
      "Responsabilidad",
      "Creatividad",
      "Oratoria",
      "Pensamiento analítico",
      "Orientación a resultados",
    ],
  },
  {
    id: 7,
    title: "Idiomas",
    icon: <Languages size={26} strokeWidth={1.5} />,
    items: ["Español — Nativo", "Inglés — A2"],
  },
];

export const technologyDetails: Record<string, { purpose: string; detail: string }> = {
  ".NET 10": { purpose: "Construir APIs, servicios y aplicaciones con C#.", detail: "Plataforma multiplataforma con herramientas para backend, web y acceso a datos." },
  "React": { purpose: "Crear interfaces web interactivas.", detail: "Organiza la interfaz en componentes reutilizables y actualiza la vista cuando cambian los datos." },
  "Vue 3": { purpose: "Desarrollar interfaces y aplicaciones web.", detail: "Combina componentes, plantillas y reactividad para mantener la interfaz sincronizada con los datos." },
  "Flutter": { purpose: "Crear aplicaciones móviles, web y de escritorio.", detail: "Usa Dart y una base de código compartida para construir interfaces con widgets." },
  "C#": { purpose: "Programar la lógica de aplicaciones y servicios.", detail: "Lenguaje con tipado estático, orientación a objetos y operaciones asíncronas, integrado con .NET." },
  "Go": { purpose: "Construir servicios de backend y herramientas de línea de comandos.", detail: "Ofrece compilación a código nativo y goroutines para trabajar con tareas concurrentes." },
  "TypeScript": { purpose: "Desarrollar JavaScript con comprobación de tipos.", detail: "Permite detectar incompatibilidades antes de ejecutar el código y facilita mantener proyectos grandes." },
  "SQL": { purpose: "Consultar, relacionar y modificar datos.", detail: "Es el lenguaje de trabajo de las bases relacionales: filtros, joins, agregaciones y transacciones." },
  "JavaScript": { purpose: "Añadir interacción a la web y desarrollar servicios.", detail: "Se ejecuta en el navegador y en entornos de servidor; es la base de React y Vue." },
  "Dart": { purpose: "Programar aplicaciones e interfaces con Flutter.", detail: "Lenguaje con tipado estático y herramientas para compilar aplicaciones a distintos destinos." },
  "SQL Server": { purpose: "Almacenar y consultar datos de aplicaciones.", detail: "Motor relacional de Microsoft con transacciones, índices y consultas mediante T-SQL." },
  "Oracle 19c": { purpose: "Gestionar datos relacionales en sistemas empresariales.", detail: "Ofrece transacciones, consultas SQL y programación de lógica de datos con PL/SQL." },
  "MySQL": { purpose: "Persistir datos estructurados para aplicaciones web.", detail: "Base de datos relacional que permite relacionar tablas y mantener la integridad de los datos." },
  "Isar": { purpose: "Guardar datos localmente en aplicaciones Dart y Flutter.", detail: "Base de datos NoSQL integrada en la aplicación, útil para funciones que trabajan sin conexión." },
  "Supabase": { purpose: "Proporcionar datos y servicios de backend a una aplicación.", detail: "Combina PostgreSQL con autenticación, almacenamiento de archivos y funciones de tiempo real." },
  "Claude Code": { purpose: "Asistir en tareas de programación con IA.", detail: "Ayuda a explorar repositorios, modificar código y ejecutar comprobaciones dentro del flujo de desarrollo." },
  "Opencode": { purpose: "Trabajar con un agente de IA sobre un proyecto de software.", detail: "Herramienta de código abierto que permite consultar el código y realizar cambios con distintos proveedores de modelos." },
  "Spec-kit": { purpose: "Organizar el desarrollo a partir de especificaciones.", detail: "Estructura requisitos, planificación y tareas para guiar la implementación con asistentes de IA." },
  "OpenSpec": { purpose: "Definir y seguir cambios mediante especificaciones.", detail: "Mantiene propuestas, requisitos y tareas junto al código para dar contexto a los asistentes de desarrollo." },
  "GPT Codex": { purpose: "Asistir en la implementación y revisión de código.", detail: "Agente de programación de OpenAI que trabaja con el contexto del proyecto y sus herramientas de desarrollo." },
  "VS Code": { purpose: "Editar, depurar y organizar proyectos de software.", detail: "Editor extensible con terminal integrada, navegación de código y soporte para distintos lenguajes." },
  "Visual Studio": { purpose: "Desarrollar y depurar aplicaciones, especialmente con .NET.", detail: "Entorno integrado con herramientas de compilación, pruebas y análisis del código." },
  "Android Studio": { purpose: "Crear y probar aplicaciones para Android.", detail: "Incluye editor, emulador y herramientas para depuración y análisis del rendimiento." },
  "Netlify": { purpose: "Publicar sitios y aplicaciones web.", detail: "Integra repositorios con procesos de compilación y despliegues para distribuir una web." },
  "Git": { purpose: "Registrar cambios y coordinar el trabajo sobre el código.", detail: "Control de versiones distribuido con ramas, historial y herramientas para combinar cambios." },
  "GitHub": { purpose: "Alojar repositorios y colaborar en proyectos.", detail: "Reúne revisiones mediante pull requests, seguimiento de tareas y automatización de flujos de trabajo." },
  "Docker": { purpose: "Empaquetar y ejecutar aplicaciones en contenedores.", detail: "Agrupa la aplicación con sus dependencias para disponer de entornos reproducibles." },
};

export const dataPortfolio = [
  {
    id: 9,
    priority: 1,
    title: "Sistema de cotizaciones — .NET + Vue",
    description:
      "Gestiona cotizaciones, plantillas y fases con una API en .NET y una aplicación web en Vue 3.",
    image: null,
    urlGithub: "https://github.com/Wilgrey2004/Sistema_Cotizaciones",
    urlDemo: "",
  },
  {
    id: 10,
    priority: 2,
    title: "SETEA — Ventas y reparaciones de dispositivos",
    description:
      "Sistema de escritorio para la gestión de ventas y reparaciones, acompañado de una API REST para ventas e inventario.",
    image: null,
    urlGithub: "https://github.com/Wilgrey2004/SETEA-Sistema",
    urlDemo: "",
    urlRelated: {
      label: "API REST",
      url: "https://github.com/Wilgrey2004/Setea-Api",
    },
  },
  {
    id: 1,
    priority: 8,
    title: "LOGUZ – Sitio web corporativo",
    image: "/netlify-previews/loguz.webp",
    urlGithub: "https://github.com/Wilgrey2004/LOGUZ",
    urlDemo: "https://loguz.netlify.app/",
  },
  {
    id: 2,
    title: "App Full Stack con Spring Boot y React",
    image: "/ImageDemo-2.png",
    urlGithub:
      "https://github.com/Wilgrey2004/Api_Rest_Spring_Boot_Java_Y_React",
    urlDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:7418409781020889088/",
  },
  {
    id: 3,
    priority: 5,
    title: "Barbería Julio Max – Diseño Bento con Vue",
    description:
      "Sitio para una barbería con servicios, precios, galería y contacto para reservar.",
    image: "/netlify-previews/barberia-julio.webp",
    urlGithub: "https://github.com/Wilgrey2004/julio_barber_shop",
    urlDemo: "https://juliobarbershopdemo.netlify.app/",
  },
  {
    id: 4,
    title: "Sistema de Gestión de Productos (Go + Vue)",
    image: null,
    urlGithub: "https://github.com/Wilgrey2004",
    urlDemo: "",
  },
  {
    id: 5,
    priority: 3,
    title: "Sistema de gestión estudiantil — C#",
    description:
      "Aplicación de escritorio para administrar estudiantes, profesores y cursos, con persistencia de datos.",
    image: null,
    urlGithub: "https://github.com/Wilgrey2004/p-proyect_v2",
    urlDemo: "",
  },
  {
    id: 6,
    title: "Autenticación con Supabase y React",
    image: null,
    urlGithub:
      "https://github.com/Wilgrey2004/login_whit_supabase_react_tailwindcss",
    urlDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:7412597868445941760/",
  },
  {
    id: 7,
    title: "Tienda Online con Carrito (Node.js)",
    image: "/ImageDemo-4.png",
    urlGithub: "https://github.com/Wilgrey2004/Tienda-Node.js",
    urlDemo: "",
  },
  {
    id: 11,
    priority: 6,
    title: "Palma Verde — sitio web para restaurante",
    description:
      "Landing page de restaurante con menú, ubicación, horarios y reserva de mesa.",
    image: "/netlify-previews/palma-verde.webp",
    urlGithub: "https://github.com/Wilgrey2004/palma-verde-demo",
    urlDemo: "https://palma-verde.netlify.app/",
  },
  {
    id: 12,
    priority: 7,
    title: "Politécnico Ana Lilliams Miranda — sitio institucional",
    description:
      "Sitio institucional que presenta la oferta técnica, la vida escolar y la información del centro.",
    image: "/netlify-previews/politecnico.webp",
    urlGithub:
      "https://github.com/Wilgrey2004/Politecnico_Analilliams_Miranda_Web_Page",
    urlDemo: "https://palm-demo.netlify.app/",
  },
  {
    id: 13,
    priority: 4,
    title: "Sistema de ventas, facturación e inventario",
    description:
      "Panel web para registrar ventas y facturas, y consultar productos, personal e historial.",
    image: "/netlify-previews/facturacion-inventario.webp",
    urlGithub:
      "https://github.com/Wilgrey2004/Sistema_De_Facturacion_Inventario",
    urlDemo: "https://getion-ventas-inventario-wilgrey-md.netlify.app/",
  },
  {
    id: 8,
    title: "App de Notas con Flutter e Isar DB",
    image: null,
    urlGithub:
      "https://github.com/Wilgrey2004/Example_to_Use_Db_On_Flutter_Isar",
    urlDemo: "",
  },
];

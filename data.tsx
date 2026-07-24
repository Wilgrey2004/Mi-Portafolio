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
  Phone,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Youtube size={30} strokeWidth={1} />,
    src: "https://www.youtube.com/@wilgrey-md",
  },
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/wilgrey-ravelo-cruz-50869232b/",
  },

  {
    id: 3,
    logo: <Facebook size={30} strokeWidth={1} />,
    src: "https://www.facebook.com/wilgrey.ravelocruz.9",
  },
  {
    id: 4,
    logo: <Instagram size={30} strokeWidth={1} />,
    src: "https://www.instagram.com/wilgrey_mmd/",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Inicio",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "Sobre mí",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Servicios",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Tecnologías",
    icon: <Cpu size={25} color="#fff" strokeWidth={1} />,
    link: "/technologies",
  },
  {
    id: 5,
    title: "Portafolio",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 6,
    title: "Contacto",
    icon: <MessageCircle size={25} color="#fff" strokeWidth={1} />,
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
    icon: <Phone size={28} strokeWidth={1.5} />,
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
      "Desarrollé sitios y aplicaciones para proyectos reales aplicando diseño responsive, interactividad y buenas prácticas de UX. Uno de mis primeros proyectos fue el sitio web de la funeraria LOGUZ.",
    date: "Dic 2023",
    tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    link: {
      label: "Ver proyecto LOGUZ",
      url: "https://wilgrey2004.github.io/LOGUZ/",
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
    title: "Junior Full Stack C# + React",
    subtitle: "CoopHispánica — Punta Cana, Bávaro",
    description:
      "Desarrollo full stack aplicando arquitectura Onion y patrones de diseño, con desarrollo guiado por especificaciones y flujos asistidos por agentes de IA para acelerar la entrega sin sacrificar calidad de código.",
    date: "Jul 2026 — Actualidad",
    tech: ["C#", ".NET Core 8", "React", "Onion Architecture", "SQL Server"],
  },
];

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
      "Aplicaciones completas de extremo a extremo con C# / .NET Core 8 y React, integrando frontend, backend y base de datos.",
    benefit: "Un solo responsable de todo el ciclo",
    tags: ["C#", ".NET Core 8", "React"],
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
      "APIs REST eficientes y seguras con .NET Core y Go, con acceso a datos optimizado y buenas prácticas.",
    benefit: "Backends rápidos y seguros",
    tags: [".NET Core", "Go", "REST"],
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
    items: [".NET Core 8", "Vue 3", "React", "Flutter"],
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

export const dataPortfolio = [
  {
    id: 1,
    title: "LOGUZ – Sitio web corporativo",
    image: "/Imagendemo-1.png",
    urlGithub: "https://github.com/Wilgrey2004/LOGUZ",
    urlDemo: "https://wilgrey2004.github.io/LOGUZ/",
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
    title: "Barbería Julio Max – Diseño Bento con Vue",
    image: "/ImageDemo-5.png",
    urlGithub: "https://github.com/Wilgrey2004",
    urlDemo: "",
  },
  {
    id: 4,
    title: "Sistema de Gestión de Productos (Go + Vue)",
    image: "/NoImagenDispoible.png",
    urlGithub: "https://github.com/Wilgrey2004",
    urlDemo: "",
  },
  {
    id: 5,
    title: "Landing + Gestión Estudiantil (React + Supabase)",
    image: "/NoImagenDispoible.png",
    urlGithub: "https://github.com/Wilgrey2004/p-proyect_v2",
    urlDemo: "",
  },
  {
    id: 6,
    title: "Autenticación con Supabase y React",
    image: "/NoImagenDispoible.png",
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
    id: 8,
    title: "App de Notas con Flutter e Isar DB",
    image: "/NoImagenDispoible.png",
    urlGithub:
      "https://github.com/Wilgrey2004/Example_to_Use_Db_On_Flutter_Isar",
    urlDemo: "",
  },
];

import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Twitter,
  Rss,
  Twitch,
  Youtube,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
  Instagram,
  Facebook,
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
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Home",
    icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    link: "/testimonials",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Inicio en el Desarrollo de Software",
    subtitle: "Instituto Técnico de las Américas (ITLA)",
    description:
      "Inicié mi formación en desarrollo de software gracias a una beca otorgada por mis méritos académicos y compromiso durante mis estudios previos. Esta etapa marcó la base de mi pensamiento lógico, disciplina técnica y enfoque profesional.",
    date: "Ene 2023",
    tech: ["Lógica de programación", "C#", "Java", "SQL"],
  },
  {
    id: 2,
    title: "Primeros proyectos web y experiencia práctica",
    subtitle: "Proyectos independientes",
    description:
      "Comencé a desarrollar sitios web y aplicaciones para proyectos reales y pequeñas empresas, aplicando buenas prácticas de diseño responsive, interactividad y experiencia de usuario. Uno de mis primeros proyectos fue el sitio web de la funeraria LOGUZ.",
    date: "Dic 2023",
    tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    link: {
      label: "Ver proyecto LOGUZ",
      url: "https://wilgrey2004.github.io/LOGUZ/",
    },
  },
  {
    id: 3,
    title: "Desarrollo de aplicaciones y sistemas",
    subtitle: "Proyectos académicos y personales",
    description:
      "Desarrollé sistemas más completos como aplicaciones de gestión, autenticación de usuarios y consumo de bases de datos, fortaleciendo mis conocimientos en backend, bases de datos y arquitectura de aplicaciones.",
    date: "ABR 2024",
    tech: [
      "ASP.NET Core",
      "LINQ",
      "SQL Server",
      "Node.js",
      "Express",
      "Supabase",
    ],
    link: {
      label: "Ver repositorios",
      url: "https://github.com/Wilgrey2004",
    },
  },
  {
    id: 4,
    title: "Pasante Desarrollador de Software",
    subtitle: "CookiesJar SRL",
    description:
      "Formé parte del equipo de desarrollo participando en el mantenimiento y creación de soluciones de software, colaborando bajo entornos reales de trabajo, control de versiones y metodologías profesionales.",
    date: "Mar 2025",
    tech: ["React", "Node.js", "ASP.NET", "Git", "SQL"],
    link: {
      label: "Ver empresa",
      url: "https://cookiesjar.net/",
    },
  },
  {
    id: 5,
    title: "Certificaciones y crecimiento continuo En MVC",
    subtitle: "Formación complementaria",
    description:
      "Reforcé mis conocimientos mediante certificaciones enfocadas en desarrollo moderno, arquitectura MVC.",
    date: "Ene 2026",
    tech: ["ASP.NET MVC"],
    link: {
      label: "Ver certificados",
      url: "https://www.udemy.com/certificate/UC-a1d0ac37-187e-44f0-bc46-8da9d283c4cd/",
    },
  },

  {
    id: 6,
    title: "Certificaciones y crecimiento continuo En React y Spring Boot",
    subtitle: "Formación complementaria",
    description:
      "Reforcé mis conocimientos mediante certificaciones enfocadas en desarrollo moderno, con uso de herramientas de inteligencia artificial aplicadas al desarrollo de software.",
    date: "Ene 2026",
    tech: ["React", "Spring Boot", "ChatGPT IA", "Java"],
    link: {
      label: "Ver certificados",
      url: "https://www.udemy.com/certificate/UC-1a375878-f85a-47d7-9736-8b9a678aa13e/",
    },
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 2,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 10,
    text: "Clientes satisfechos",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 2,
    endCounter: 50,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: true,
  },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: "Branding",
    description:
      "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
  },
  {
    icon: <Pencil />,
    title: "Diseño web",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
  {
    icon: <Book />,
    title: "Copywriting",
    description:
      "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
  },
  {
    icon: <Rocket />,
    title: "SEO",
    description:
      "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
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
    title: "Aplicación Full Stack con Spring Boot y React",
    image: "/ImageDemo-2.png",
    urlGithub:
      "https://github.com/Wilgrey2004/Api_Rest_Spring_Boot_Java_Y_React",
    urlDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:7418409781020889088/",
  },
  {
    id: 3,
    title: "Autenticación con Supabase y React",
    image: "/NoImagenDispoible.png",
    urlGithub:
      "https://github.com/Wilgrey2004/login_whit_supabase_react_tailwindcss",
    urlDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:7412597868445941760/",
  },
  {
    id: 4,
    title: "Sistema de Gestión Estudiantil",
    image: "/NoImagenDispoible.png",
    urlGithub: "https://github.com/Wilgrey2004/p-proyect_v2",
    urlDemo: "https://github.com/Wilgrey2004/p-proyect_v2",
  },
  {
    id: 5,
    title: "Tienda Online con Carrito de Compras (Node.js)",
    image: "/ImageDemo-4.png",
    urlGithub: "https://github.com/Wilgrey2004/Tienda-Node.js",
    urlDemo: "https://github.com/Wilgrey2004/Tienda-Node.js",
  },
  {
    id: 6,
    title: "Setea – Landing Page Responsive",
    image: "/ImageDemo-5.png",
    urlGithub: "https://github.com/Wilgrey2004/web_page_setea",
    urlDemo: "https://wilgrey2004.github.io/web_page_setea",
  },
  {
    id: 7,
    title: "App de Notas con Flutter e Isar DB",
    image: "/NoImagenDispoible.png",
    urlGithub:
      "https://github.com/Wilgrey2004/Example_to_Use_Db_On_Flutter_Isar",
    urlDemo: "https://github.com/Wilgrey2004/Example_to_Use_Db_On_Flutter_Isar",
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile1.png",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile2.png",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile3.png",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile4.png",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile5.png",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile6.png",
  },
];

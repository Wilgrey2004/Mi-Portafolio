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
    src: "https://www.linkedin.com/in/wilgrey-md-ravelo-cruz-50869232b/",
  },
  {
    id: 3,
    logo: <Twitter size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 4,
    logo: <Rss size={30} strokeWidth={1} />,
    src: "#!",
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
    title: "Comienzo de Mi carrera en Desarrollo de software",
    subtitle: "Itla",
    description:
      "Empece mi carrera gracias a una beca de parte de egeid la cual consegui en el Politecnico analilliams miranda por mis buenas notas y aportes.",
    date: "Ene 2023 ",
  },
  {
    id: 2,
    title: "Desarrollador Frontend",
    subtitle: "Sitios web Empresas pequeñas",
    description:
      "Di inicio a desarrollar sitios web para empresas pequeñas empezando con la funeraria LOGUZ.",
    date: "die 2023",
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
    title: "LOGUZ",
    image: "/Imagendemo-1.png",
    urlGithub: "https://github.com/Wilgrey2004/LOGUZ",
    urlDemo: "https://wilgrey2004.github.io/LOGUZ/",
  },
  {
    id: 2,
    title: "LOGUZ",
    image: "/Imagendemo-1.png",
    urlGithub: "https://github.com/Wilgrey2004/LOGUZ",
    urlDemo: "https://wilgrey2004.github.io/LOGUZ/",
  },
  {
    id: 3,
    title: "LOGUZ",
    image: "/Imagendemo-1.png",
    urlGithub: "https://github.com/Wilgrey2004/LOGUZ",
    urlDemo: "https://wilgrey2004.github.io/LOGUZ/",
  },
  {
    id: 4,
    title: "LOGUZ",
    image: "/Imagendemo-1.png",
    urlGithub: "https://github.com/Wilgrey2004/LOGUZ",
    urlDemo: "https://wilgrey2004.github.io/LOGUZ/",
  },

  {
    id: 5,
    title: "LOGUZ",
    image: "/Imagendemo-1.png",
    urlGithub: "https://github.com/Wilgrey2004/LOGUZ",
    urlDemo: "https://wilgrey2004.github.io/LOGUZ/",
  },

  {
    id: 6,
    title: "LOGUZ",
    image: "/Imagendemo-1.png",
    urlGithub: "https://github.com/Wilgrey2004/LOGUZ",
    urlDemo: "https://wilgrey2004.github.io/LOGUZ/",
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

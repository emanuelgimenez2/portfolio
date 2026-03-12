import emoji from "react-easy-emoji";

const greeting = {
  username: "Emanuel Gimenez",
  title: "Hola, soy Emanuel",
  subTitle:
    "Full Stack Developer con +4 años de experiencia y fundador de Servitec. Especializado en el ecosistema JavaScript/TypeScript con React, Next.js, Node.js y bases de datos SQL/NoSQL. Experiencia liderando proyectos end-to-end, desde el relevamiento hasta produccion.",
  roles: [
    "Full Stack Developer",
    "Fundador de Servitec",
    "React & Node.js",
    "TypeScript",
  ],
  resumeLink:
    "https://drive.google.com/file/d/1mXbHfZv9p9i1b4UFxYjJsWU1RmJPQ54L/view?usp=sharing",
};

const socialMediaLinks = {
  github: "https://github.com/emanuelgimenez2",
  linkedin: "https://www.linkedin.com/in/emanuel-gimenez/",
  gmail: "emanuelgimenez2@gmail.com",
  whatsapp: "https://walink.co/664eed",
  instagram: "https://www.instagram.com/manurauns/",
  instagramServitec: "https://www.instagram.com/servitec.cdelu/",
};

const skillsSection = {
  title: "Skills",
  subTitle: "TECNOLOGIAS QUE USO PARA DAR VIDA A LOS PROYECTOS",
  skills: [],
  skillCategories: [
    {
      title: "Frontend",
      icon: "fas fa-laptop-code",
      skills: [
        "React",
        "Next.js",
        "Redux",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Sass",
        "Bootstrap",
        "Material UI",
        "Ant Design",
      ],
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      skills: [
        "Node.js",
        "Express",
        "Sequelize",
        "REST APIs",
        "SQL",
      ],
    },
    {
      title: "Bases de Datos",
      icon: "fas fa-database",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
    },
    {
      title: "DevOps & Tools",
      icon: "fas fa-tools",
      skills: [
        "Git",
        "Docker",
        "GitHub",
        "Vercel",
        "Jira",
        "Claude AI",
      ],
    },
    {
      title: "Autenticacion",
      icon: "fas fa-shield-alt",
      skills: ["Auth0", "Firebase Auth"],
    },
    {
      title: "Metodologias",
      icon: "fas fa-project-diagram",
      skills: ["Scrum", "Agile", "Gestion de proyectos"],
    },
  ],
  softwareSkills: [
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Next.js", fontAwesomeClassname: "fab fa-react" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "TypeScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "Sass", fontAwesomeClassname: "fab fa-sass" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
  ],
};

const projects = [
  {
    id: 1,
    title: "Veterinaria - Salud Animal Domiciliaria",
    description:
      "Plataforma integral para veterinaria con atencion domiciliaria. Incluye sistema de turnos, dashboard con metricas en tiempo real, gestion de mascotas, clientes y libreta sanitaria. Panel de administracion completo.",
    image: "/veterinaria/inicio.png",
    link: "https://veterinariaps.vercel.app/",
    repo: "https://github.com/emanuelgimenez2",
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "Auth0"],
  },
  {
    id: 2,
    title: "Helados Mio - Distribuidora",
    description:
      "Sistema de gestion para distribuidora de helados con catalogo de productos, carrito de compras, dashboard ejecutivo con metricas de ventas, gestion de clientes, stock, listas de precios y auditorias.",
    image: "/heladiosmio/inicio.png",
    link: "https://distri-helados-mio.vercel.app/",
    repo: "https://github.com/emanuelgimenez2",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Vercel"],
  },
  {
    id: 3,
    title: "Turnos - Prefectura Naval Argentina",
    description:
      "Sistema de gestion de tramites nauticos para Prefectura Naval Argentina. Permite agendar turnos, consultar deudas de embarcaciones y gestionar tramites de forma digital y eficiente.",
    image: "/turnosPNA/INICIO.png",
    link: "https://turno-polinave.vercel.app/",
    repo: "https://github.com/emanuelgimenez2/turno",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
  },
];

const educationInfo = {
  viewEducation: true,
  schools: [
    {
      schoolName: "soyHenry",
      logo: require("./assets/images/soyHenry.png"),
      subHeader: "Full Stack Developer",
      duration: "2022 - Bootcamp intensivo (+800 horas)",
      descBullets: [
        "React | Redux | Node.js | Express | TypeScript",
        "PostgreSQL | Sequelize | REST APIs | Testing",
        "Metodologia Scrum | Code Reviews | Deploy continuo",
      ],
    },
    {
      schoolName:
        "Universidad Autonoma de Entre Rios (UADER)",
      logo: require("./assets/images/logo_fcyt.png"),
      subHeader: "Lic. en Sistemas de Informacion",
      duration: "2011",
    },
    {
      schoolName: "FreeCodeCamp.org",
      logo: require("./assets/images/logo_freecodecamp.jfif"),
      subHeader: "JavaScript Algorithms & Responsive Web Design",
      duration: "2020",
      descBullets: [
        "JavaScript | Algoritmos | Data Structures",
        "HTML5 | CSS3 | Responsive Design",
      ],
    },
    {
      schoolName: "LinkedIn Learning",
      logo: require("./assets/images/logo_freecodecamp.jfif"),
      subHeader: "React Esencial",
      duration: "2021",
    },
    {
      schoolName: "Google Activate",
      logo: require("./assets/images/google_activate.jpg"),
      subHeader: "Introduccion al Desarrollo Web: HTML y CSS",
      duration: "2021",
    },
  ],
};

const techStack = {
  viewSkillBars: false,
  experience: [
    { Stack: "Frontend", progressPercentage: "85%" },
    { Stack: "Backend", progressPercentage: "80%" },
    { Stack: "Bases de Datos", progressPercentage: "75%" },
  ],
};

const workExperiences = {
  viewExperiences: true,
  experience: [
    {
      role: "Fundador & Lead Developer",
      company: "Servitec",
      companylogo: require("./assets/images/helpdesk.png"),
      date: "2022 – Presente",
      desc: "Fundacion y gestion integral de empresa de desarrollo de software con cartera activa de clientes.",
      descBullets: [
        "Desarrollo full stack con React, Next.js, Node.js, Express, PostgreSQL y MongoDB",
        "Liderazgo tecnico end-to-end: requerimientos, arquitectura, desarrollo, testing y deploy",
        "Integraciones con APIs de terceros, pasarelas de pago y autenticacion",
        "Gestion de clientes, presupuestos y planificacion agil",
      ],
    },
    {
      role: "Ayudante de Tercera",
      company: "Prefectura Naval Argentina",
      companylogo: require("./assets/images/prefectura_logo.jpg"),
      date: "2009 – Presente",
      desc: "Gestion administrativa, documental electronica y coordinacion de tareas operativas.",
      descBullets: [
        "Gestion administrativa y documental electronica",
        "Coordinacion de tareas operativas en entorno institucional",
      ],
    },
    {
      role: "Soporte IT",
      company: "Freelance",
      companylogo: require("./assets/images/helpdesk.png"),
      date: "2015 – Presente",
      desc: "Soporte tecnico y mantenimiento para empresas y particulares.",
      descBullets: [
        "Diagnostico y resolucion de problemas de hardware y software",
        "Mantenimiento de equipos y redes",
      ],
    },
  ],
};

const openSource = {
  githubUserName: "emanuelgimenez2",
  showGithubProfile: "true",
};

const bigProjects = {
  title: "Proyectos Grandes",
  subtitle: "CLIENTES DE SERVITEC",
  projects: [],
};

const achievementSection = {
  title: emoji("Logros y Certificaciones 🏆"),
  subtitle: "",
};

const talkSection = {
  title: "CHARLAS",
  subtitle: emoji("ME ENCANTA COMPARTIR LO QUE APRENDO 😅"),
  talks: [],
};

const contactInfo = {
  title: emoji("Contactame ☎️"),
  subtitle:
    "Tenes un proyecto en mente? Queres una cotizacion para tu idea? Escribime y hablamos.",
  number: "+5493442533465",
  email_address: "emanuelgimenez2@gmail.com",
};

const twitterDetails = {
  userName: "",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  talkSection,
  projects,
  contactInfo,
  twitterDetails,
};

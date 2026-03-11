import emoji from "react-easy-emoji";

const greeting = {
  username: "Emanuel Gimenez",
  title: "Hola, soy Emanuel",
  subTitle: emoji(
    `Desarrollador Full Stack Web 🚀 con experiencia construyendo aplicaciones web con JavaScript, React, Node.js y otras tecnologías modernas.`
  ),
  resumeLink:
    "https://drive.google.com/file/d/1-minpFJYkK7-c1fYRbVxBCvqDgqb500v/view?usp=sharing",
};

const socialMediaLinks = {
  github: "https://github.com/emanuelgimenez2",
  linkedin: "https://www.linkedin.com/in/emanuel-gimenez/",
  gmail: "e.gimenez.developer@gmail.com",
  whatsapp: "https://walink.co/664eed",
  instagram: "https://www.instagram.com/manurauns/",
};

const skillsSection = {
  title: "Skills",
  subTitle: "FULL STACK DEVELOPER",
  skills: [],
  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database",
    },
  ],
};

const projects = [
  {
    id: 1,
    title: "Movies",
    description:
      "Aplicacion que permite buscar peliculas y series, y guardarlas en tus favoritos.",
    image: require("../src/assets/images/movies-page.jpg"),
    link: "https://api-movies-ten.vercel.app/",
    repo: "https://github.com/emanuelgimenez2/api-movies",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Aplicacion que permite consultar el clima de cualquier ciudad del mundo.",
    image: require("../src/assets/images/clima.jpg"),
    link: "https://app-weather-emanuelgimenez2.vercel.app/",
    repo: "https://github.com/emanuelgimenez2/App-weather",
  },
  {
    id: 3,
    title: "Turnos - Prefectura Naval",
    description:
      "Aplicacion diseñada para agilizar y modernizar la gestion de turnos en la Prefectura Naval Argentina. Interfaz intuitiva que permite a ciudadanos y personal administrativo coordinar citas de manera eficiente.",
    image: require("../src/assets/images/turno.jpeg"),
    link: "https://turno-polinave.vercel.app/",
    repo: "https://github.com/emanuelgimenez2/turno",
  },
];

const educationInfo = {
  viewEducation: true,
  schools: [
    {
      schoolName:
        "Facultad de Ciencia y Tecnologia, Sede Concepcion del Uruguay",
      logo: require("./assets/images/logo_fcyt.png"),
      subHeader: "Licenciatura en Sistemas de Informacion",
      duration: "Abril 2008",
    },
    {
      schoolName: "FreeCodeCamp.org",
      logo: require("./assets/images/logo_freecodecamp.jfif"),
      subHeader: "Responsive Web Design",
      duration: "Junio 2020 - Octubre 2020",
      descBullets: [
        "HTML5 | CSS3 | JavaScript",
        "Data Structures | Algoritmos",
      ],
    },
    {
      schoolName: "Google Activate",
      logo: require("./assets/images/google_activate.jpg"),
      subHeader: "Curso de Introduccion al Desarrollo Web: HTML y CSS",
      duration: "Octubre 2021",
      descBullets: [
        "Historia | Funcionamiento | Escritura",
        "Publicacion | Estructura | Presentacion",
        "Elementos | Layout",
      ],
    },
    {
      schoolName: "Platzi",
      logo: require("./assets/images/platzy-logo.jpg"),
      subHeader: "Escuela de Desarrollo Web",
      duration: "Octubre 2021",
      descBullets: [
        "CodeStream | Git y Github | JavaScript | Data Structures",
        "ECMAScript 6+ | APIs | ReactJS | NodeJS | MongoDB",
      ],
    },
    {
      schoolName: "soyHenry",
      logo: require("./assets/images/soyHenry.png"),
      subHeader: "Full Stack Developer",
      duration: "En curso",
      descBullets: [
        "HTML5 | CSS3 | JavaScript | Git | Testing",
        "AJAX | Webpack | ReactJS | Redux | React-Redux",
        "NodeJS | Express | TypeScript",
        "SQL | PostgreSQL | MySQL | Autenticacion",
      ],
    },
  ],
};

const techStack = {
  viewSkillBars: false,
  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "70%",
    },
    {
      Stack: "Backend",
      progressPercentage: "80%",
    },
    {
      Stack: "Programacion",
      progressPercentage: "60%",
    },
  ],
};

const workExperiences = {
  viewExperiences: true,
  experience: [
    {
      role: "Personal permanente",
      company: "Prefectura Naval Argentina",
      companylogo: require("./assets/images/prefectura_logo.jpg"),
      date: "2009 – Presente",
      desc: "Personal responsable en despacho, administracion y soporte IT.",
      descBullets: [
        "Equipo de personal",
        "Gestion general",
        "Soporte a servicios IT",
        "Resolucion de errores",
        "Soporte tecnico de emergencia",
      ],
    },
    {
      role: "Help Desk",
      company: "Freelancer",
      companylogo: require("./assets/images/helpdesk.png"),
      date: "2010 – Presente",
      desc: "Resolucion de problemas informaticos para particulares y empresas.",
      descBullets: [
        "MS Windows, MS Office",
        "Redes",
        "Impresoras",
        "Problemas de hardware",
        "Problemas de software",
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
  subtitle: "STARTUPS Y EMPRESAS EN LAS QUE COLABORE",
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
    "Queres hablar de un proyecto o simplemente saludar? Mi bandeja esta abierta para todos.",
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

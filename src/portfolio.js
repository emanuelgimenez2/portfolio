/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Emanuel Gimenez",
  title: "Hi all, I'm Emanuel",
  subTitle: emoji(
    `Full Stack Web Developer. My working principle is learning by doing.

    \n A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.`
  ),
  resumeLink:
    "https://drive.google.com/file/d/1j2Vs_FrHvDRJB87hCW_xVWjxVyAkVKhl/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/emanuelgimenez2",
  linkedin: "https://www.linkedin.com/in/emanuel-gimenez/",
  gmail: "emanuelgimenez2@gmail.com",
  whatsapp: "https://walink.co/664eed",
  instagram: "https://www.instagram.com/manurauns/",
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "FULL STACK DEVELOPER",
  skills: [emoji("⚡ ")],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws",
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire",
    // },
  ],
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName:
        "Facultad de Ciencia y Tecnología, Sede Concepción del Uruguay",
      logo: require("./assets/images/logo_fcyt.png"),
      subHeader: "Licenciatura en Sistemas de Información",
      duration: "April 2008",
    },
    {
      schoolName: "freecodecamp.org",
      logo: require("./assets/images/logo_freecodecamp.jfif"),
      subHeader: "Responsive Web Design",
      duration: "June 2020 - October 2020",
      ////descBullets: [
      //'hTML5 | CSS3 | JavaScript | Git | Basic Testing`,
      //`Data Structures, algorithms, Big O, Functional VS OOP.`,
      //`AJAX | Webpack | ReactJS | Redux | React-Redux`,
      //`NodeJs | Web servers (Express) | TypeScript`,
      //`SQL | Postgres | MySQL | authentication`,
      //],
    },
    {
      schoolName: "Google Actívate",
      logo: require("./assets/images/google_activate.jpg"),
      subHeader: "Curso de Introducción al Desarrollo Web: HTML y CSS",
      duration: "October 2021",
    },
    {
      schoolName: "Platzi",
      logo: require("./assets/images/platzy-logo.jpg"),
      subHeader: "Escuela de Desarrollo Web",
      duration: "October 2021",
    },
    {
      schoolName: "soyHenry",
      logo: require("./assets/images/soyHenry.png"),
      subHeader: "Full stack Developer",
      duration: "actualmente en cursado",
      /* descBullets: [
      'hTML5 | CSS3 | JavaScript | Git | Basic Testing`,
        `Data Structures, algorithms, Big O, Functional VS OOP.`,
        `AJAX | Webpack | ReactJS | Redux | React-Redux`,
        `NodeJs | Web servers (Express) | TypeScript`,
        `SQL | Postgres | MySQL | authentication`,
      ], */
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
};

// Your top 3 work experiences
const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Personal en actividad",
      company: "Prefectura Naval Argentina",
      companylogo: require("./assets/images/prefectura_logo.jpg"),
      date: "2009 – Present",
      desc: `Responsible personnel in shipping, administration and IT support.`,
      descBullets: [
        "Personnel team",
        "Management in general",
        "Support to IT services",
        "Solve all kinds of related errors",
        "Technical support, emergency",
      ],
    },

    {
      role: "Help Desk",
      company: "FreeLancer",
      companylogo: require("./assets/images/helpdesk.png"),
      date: "2010 – Present",
      desc: `Solve individuals and companies problems`,
      descBullets: [
        "MS Windows, MS Office",
        "Networking",
        "Printers",
        "Hardware problems",
        "Software problems",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "emanuelgimenez2", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [],
};

// Your Achievement Section Include Your Certification Talks and More
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "",
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
};



const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+5493442533465",
  email_address: "emanuelgimenez2@gmail.com",
};

//Twitter Section
const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
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
 
  contactInfo,
  twitterDetails,
};

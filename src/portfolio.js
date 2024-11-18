/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Emanuel Gimenez",
  title: "Hi all, I'm Emanuel",
  subTitle: emoji(
    `Full Stack Web Developer.

    \n A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.`
  ),
  resumeLink:
    "https://drive.google.com/file/d/1-minpFJYkK7-c1fYRbVxBCvqDgqb500v/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/emanuelgimenez2",
  linkedin: "https://www.linkedin.com/in/emanuel-gimenez/",
  gmail: "e.gimenez.developer@gmail.com",
  whatsapp: "https://walink.co/664eed",
  instagram: "https://www.instagram.com/manurauns/",
};

// Your Skills Section

const skillsSection = {
  title: "Skill",
  subTitle: "FULL STACK DEVELOPER",
  skills: [emoji(" ")],

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

 //Your education background
 const projects = 
   [
  {
    id: 1,
    title: "Movies",
    description:
      "Aplication that allows you to search for movies and shows, and save them in your favorites.",
    image: require("../src/assets/images/movies-page.jpg"),
    link: "https://api-movies-ten.vercel.app/",
    repo: "https://github.com/emanuelgimenez2/api-movies"
  },
  
  {
    id: 3,
    title: "Weather App",
    description:
      "Aplication that allows you to search for weather in any city.",
    image: require("../src/assets/images/clima.jpg"),
    link: "https://app-weather-emanuelgimenez2.vercel.app/",
    repo: "https://github.com/emanuelgimenez2/App-weather"
  },
  {
    id: 3,
    title: "Turnos",
    description:
      "Esta aplicación está diseñada para agilizar y modernizar el proceso de gestión de turnos en la Prefectura Naval Argentina. Con una interfaz intuitiva y funcional, permite a los ciudadanos y al personal administrativo coordinar citas de manera eficiente y organizada.",
    image: require("../src/assets/images/turno.jpeg"),
    link: "https://turno-polinave.vercel.app/",
    repo: "https://github.com/emanuelgimenez2/turno"
  }
]


 


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
      schoolName: "FreeCodeCamp.org",
      logo: require("./assets/images/logo_freecodecamp.jfif"),
      subHeader: "Responsive Web Design",
      duration: "June 2020 - October 2020",
      descBullets: [
     " hTML5 | CSS3 | JavaScript ",
     " Data Structures | Algoritmos",
      
      ],
    },
    {
      schoolName: "Google Actívate",
      logo: require("./assets/images/google_activate.jpg"),
      subHeader: "Introduction to Web Development Course: HTML y CSS",
      duration: "October 2021",
      descBullets: [

        "History | Operation | Writing ",
        "Publication | Structuring | Presentation ",
        "Elements | Layout | Exit",
         
         ],
    },
    {
      schoolName: "Platzi",
      logo: require("./assets/images/platzy-logo.jpg"),
      subHeader: "Escuela de Desarrollo Web",
      duration: "October 2021",
      descBullets: [
        "CodeSteam | Git y Github | JavaScript | Data Structure",        
        "ECMAScript 6+ | APIs | ReactJS | NodeJS | MongoDB",
        
        ], 
    },
    {
      schoolName: "soyHenry",
      logo: require("./assets/images/soyHenry.png"),
      subHeader: "Full Stack Developer",
      duration: "currently in course",
       descBullets: [
      "hTML5 | CSS3 | JavaScript | Git | Basic Testing",        
       " AJAX | Webpack | ReactJS | Redux | React-Redux",
       " NodeJs | Web servers (Express) | TypeScript",
        "SQL | Postgres | MySQL | Authentication",
      ], 
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
      role: "Personal permanent",
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
    // {
    //   role: "Personal permanent",
    //   company: "Prefectura Naval Argentina",
    //   companylogo: require("./assets/images/prefectura_logo.jpg"),
    //   date: "2009 – Present",
    //   desc: `Responsible personnel in shipping, administration and IT support.`,
    //   descBullets: [
    //     "Personnel team",
    //     "Management in general",
    //     "Support to IT services",
    //     "Solve all kinds of related errors",
    //     "Technical support, emergency",
    //   ],
    // },
  ],
};

//  Your Open Source Section to View Your Github Pinned Projects
// To know how to get github key look at readme.md 
 const openSource = {
  githubConvertedToken:"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",
  githubUserName: "emanuelgimenez2", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};
 
// Some Big Projects You have worked with your company
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      
      link: "https://www.behance.net/gallery/58937147/Freiheit",
      github: ""
    },


  ],
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
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE  😅"
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
  projects,
 
  contactInfo,
  twitterDetails,
};

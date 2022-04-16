import React  from "react"
import Card from "../../components/card/Card";
import "./Project.css"

export default function Projects({projects}) {

    return (
      <div className="main-project">
      <h1 className="education-heading">Projectos</h1>
      <Card/>
     {/*  {
        props.projects.map((project, index) => {
          return (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              repo={project.repo}
            />
          );
        })
      } */}
    


      </div>
      
    );
  
}

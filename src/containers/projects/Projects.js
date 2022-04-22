import React from "react";
import Card from "../../components/card/Card";
import "./Project.css";
import { projects } from "../../portfolio.js";

export default function Projects(props) {
  return (
    <div className="main-project">
      <h1 className="education-heading">Projects</h1>
      <div className="main-project-container">

      {projects.map((project, index) => {
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
      })}
      </div>
    </div>
  );
}

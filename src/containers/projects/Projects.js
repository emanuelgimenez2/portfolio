import Card from "../../components/card/Card"
import "./Project.css"
import { projects } from "../../portfolio.js"

export default function Projects(props) {
  return (
    <section className="portfolio-projects-section">
      <div className="portfolio-projects-wrapper">
        <div className="portfolio-projects-header">
          <h1 className="portfolio-projects-title">
            Mis <span className="portfolio-projects-highlight">Proyectos</span>
          </h1>
          <p className="portfolio-projects-subtitle">
            Una selección de proyectos en los que he trabajado
          </p>
        </div>

        <div className="portfolio-projects-grid">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              repo={project.repo}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
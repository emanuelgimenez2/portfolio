import { useContext } from "react"
import "./Skills.css"
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill"
import { skillsSection } from "../../portfolio"
import FadeIn from "../../components/fadeIn/FadeIn"
import StyleContext from "../../contexts/StyleContext"

const accentColors = [
  "var(--color-accent-1)",
  "var(--color-accent-2)",
  "var(--color-accent-3)",
  "var(--color-accent-4)",
  "var(--color-accent-5)",
  "var(--color-accent-1)",
]

export default function Skills() {
  const { isDark } = useContext(StyleContext)
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="portfolio-skills-container">
        <FadeIn direction="right" duration={1000}>
          <div className="portfolio-skills-content">
            <h1 className={isDark ? "dark-mode portfolio-skills-heading" : "portfolio-skills-heading"}>
              {skillsSection.title}
            </h1>
            <p className={isDark ? "dark-mode portfolio-skills-subtitle" : "portfolio-skills-subtitle"}>
              {skillsSection.subTitle}
            </p>

            <div className="portfolio-skills-icons-wrapper">
              <SoftwareSkill />
            </div>

            <div className="skills-categories-grid">
              {skillsSection.skillCategories.map((category, index) => (
                <div
                  className="skills-category-card"
                  key={index}
                  style={{ "--card-accent": accentColors[index % accentColors.length], animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skills-category-header">
                    <div className="skills-category-icon-wrapper">
                      <i className={category.icon}></i>
                    </div>
                    <h3 className="skills-category-title">{category.title}</h3>
                  </div>
                  <div className="skills-category-pills">
                    {category.skills.map((skill, i) => (
                      <span className="skills-pill" key={i}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

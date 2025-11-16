"use client"

import { useContext } from "react"
import "./Skills.css"
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill"
import { skillsSection } from "../../portfolio"
import { Fade } from "react-reveal"
import StyleContext from "../../contexts/StyleContext"

export default function Skills() {
  const { isDark } = useContext(StyleContext)
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="portfolio-skills-container">
        
        <Fade right duration={1000}>
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

            <div className="portfolio-skills-list">
              {skillsSection.skills.map((skills, index) => {
               
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

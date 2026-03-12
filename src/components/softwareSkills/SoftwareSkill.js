import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, index) => {
            return (
              <li
                key={index}
                className="software-skill-inline"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="skill-icon-container">
                  <i className={skills.fontAwesomeClassname}></i>
                  <span className="skill-tooltip">{skills.skillName}</span>
                </div>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

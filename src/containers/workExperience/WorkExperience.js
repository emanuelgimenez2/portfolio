import React, {useContext} from "react";
import "./WorkExperience.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import FadeIn from "../../components/fadeIn/FadeIn";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
    const {isDark} = useContext(StyleContext)
    if(workExperiences.viewExperiences){
        return (
            <div id="experience">
                <FadeIn direction="bottom" duration={1000} distance="20px">
                <div className="experience-container" id="workExperience">
                    <div>
                        <h1 className="experience-heading">Experiencia</h1>
                        <div className="experience-cards-div">
                        {workExperiences.experience.map((card, index) => {
                            return (
                                <ExperienceCard
                                key={index}
                                    isDark={isDark}
                                    cardInfo={{
                                        company: card.company,
                                        desc: card.desc,
                                        date: card.date,
                                        companylogo: card.companylogo,
                                        role: card.role,
                                        descBullets: card.descBullets
                                    }}
                                />
                            );
                        })}
                        </div>
                    </div>
                </div>
                </FadeIn>
            </div>
        );
    }
    return null;
}

import React, { useContext } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import FadeIn from "../../components/fadeIn/FadeIn";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  return (
    <FadeIn direction="bottom" duration={1000} distance="40px">
      <section
        className={isDark ? "dark-mode hero-section" : "hero-section"}
        id="greeting"
      >
        {/* Animated background */}
        <div className="hero-bg">
          <div className="hero-grid"></div>
          <div className="hero-bg-orb"></div>
        </div>

        <div className="hero-content">
          {/* Eyebrow tag */}
          <div className="hero-animate-in">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot"></span>
              Disponible para nuevos proyectos
            </div>
          </div>

          {/* Main heading */}
          <div className="hero-animate-in">
            <h1 className="hero-heading">
              {greeting.title}{" "}
              <span className="wave-emoji">{emoji("👋")}</span>
              <span className="hero-name">Emanuel Gimenez</span>
            </h1>
          </div>

          {/* Typewriter subtitle */}
          <div className="hero-animate-in">
            <div className="hero-typewriter-wrapper">
              <span className="hero-typewriter-prefix">&gt;</span>
              <span className="hero-typewriter">
                <span className="hero-typewriter-roles">
                  {/* Static span for sizing */}
                  <span className="hero-typewriter-role-static">
                    Full Stack Developer
                  </span>
                  <span className="hero-typewriter-role">
                    Full Stack Developer
                  </span>
                  <span className="hero-typewriter-role">
                    Fundador de Servitec
                  </span>
                  <span className="hero-typewriter-role">
                    React &amp; Node.js
                  </span>
                </span>
              </span>
            </div>
          </div>

          {/* Bio */}
          <div className="hero-animate-in">
            <p className="hero-bio">{greeting.subTitle}</p>
          </div>

          {/* Social media icons */}
          <div className="hero-animate-in">
            <div className="hero-social">
              <SocialMedia />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-animate-in">
            <div className="hero-cta-group">
              <a className="hero-btn hero-btn-primary" href="#contact">
                Contactame
                <span className="hero-btn-icon">&rarr;</span>
              </a>
              <a
                className="hero-btn hero-btn-secondary"
                href={greeting.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-file-alt"></i>
                Ver mi CV
              </a>
            </div>
          </div>

          {/* Location badge */}
          <div className="hero-animate-in">
            <div className="hero-location">
              <i className="fas fa-map-marker-alt"></i>
              <span>Entre Rios, Argentina</span>
              <span className="hero-location-separator"></span>
              <span>{emoji("🇦🇷")} {emoji("🇪🇺")} Ciudadania UE</span>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

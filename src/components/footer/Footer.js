import React, { useContext } from "react";
import "./Footer.css";
import FadeIn from "../fadeIn/FadeIn";
import { socialMediaLinks } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  const currentYear = new Date().getFullYear();

  return (
    <FadeIn direction="bottom" duration={1000} distance="5px">
      <footer className={isDark ? "dark-mode portfolio-footer" : "portfolio-footer"}>
        <div className="portfolio-footer-inner">
          <div className="portfolio-footer-brand">
            <span className="portfolio-footer-logo">EG</span>
            <p className="portfolio-footer-tagline">
              Full Stack Developer & Fundador de Servitec
            </p>
          </div>

          <div className="portfolio-footer-links">
            <a href="#greeting" className="portfolio-footer-link">Inicio</a>
            <a href="#skills" className="portfolio-footer-link">Skills</a>
            <a href="#experience" className="portfolio-footer-link">Experiencia</a>
            <a href="#projects" className="portfolio-footer-link">Proyectos</a>
            <a href="#contact" className="portfolio-footer-link">Contacto</a>
          </div>

          <div className="portfolio-footer-social">
            {socialMediaLinks.github && (
              <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer" className="portfolio-footer-social-icon" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            )}
            {socialMediaLinks.linkedin && (
              <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" className="portfolio-footer-social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            )}
            {socialMediaLinks.gmail && (
              <a href={`mailto:${socialMediaLinks.gmail}`} className="portfolio-footer-social-icon" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            )}
            {socialMediaLinks.whatsapp && (
              <a href={socialMediaLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="portfolio-footer-social-icon" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
            )}
            {socialMediaLinks.instagram && (
              <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer" className="portfolio-footer-social-icon" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            )}
            {socialMediaLinks.instagramServitec && (
              <a href={socialMediaLinks.instagramServitec} target="_blank" rel="noopener noreferrer" className="portfolio-footer-social-icon" aria-label="Servitec Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            )}
          </div>

          <div className="portfolio-footer-divider"></div>

          <p className="portfolio-footer-copy">
            &copy; {currentYear} Emanuel Gimenez. Hecho con dedicacion desde Entre Rios, Argentina.
          </p>
        </div>
      </footer>
    </FadeIn>
  );
}

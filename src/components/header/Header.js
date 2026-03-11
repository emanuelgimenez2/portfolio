import { useContext, useEffect, useRef, useCallback } from "react";
import Headroom from "react-headroom";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { greeting, workExperiences } from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  const exp = workExperiences.viewExperiences;
  const menuBtnRef = useRef(null);

  const closeMenu = useCallback(() => {
    if (menuBtnRef.current) {
      menuBtnRef.current.checked = false;
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      const header = document.querySelector(".header");
      if (
        menuBtnRef.current &&
        menuBtnRef.current.checked &&
        header &&
        !header.contains(event.target)
      ) {
        menuBtnRef.current.checked = false;
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo" aria-label="Inicio">
          <span className="logo-name">{greeting.username}</span>
        </a>
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          ref={menuBtnRef}
          aria-label="Abrir menu"
        />
        <label className="menu-icon" htmlFor="menu-btn" aria-label="Menu de navegacion">
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <nav>
          <ul className={isDark ? "dark-menu menu" : "menu"}>
            <li>
              <a href="#skills" onClick={closeMenu}>Skills</a>
            </li>
            {exp && (
              <li>
                <a href="#experience" onClick={closeMenu}>Experiencia</a>
              </li>
            )}
            <li>
              <a href="#education" onClick={closeMenu}>Educacion</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>Contacto</a>
            </li>
            <li className="theme-toggle">
              <ToggleSwitch />
            </li>
          </ul>
        </nav>
      </header>
    </Headroom>
  );
}

export default Header;

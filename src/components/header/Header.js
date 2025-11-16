"use client"

import { useContext, useEffect } from "react"
import Headroom from "react-headroom"
import "./Header.css"
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch"
import StyleContext from "../../contexts/StyleContext"
import { greeting, workExperiences } from "../../portfolio"

function Header() {
  const { isDark } = useContext(StyleContext)
  const exp = workExperiences.viewExperiences

  useEffect(() => {
    // Cerrar el menú al hacer clic en cualquier enlace
    const menuLinks = document.querySelectorAll('.header .menu a')
    const menuBtn = document.getElementById('menu-btn')
    
    const closeMenu = () => {
      if (menuBtn) {
        menuBtn.checked = false
      }
    }

    menuLinks.forEach(link => {
      link.addEventListener('click', closeMenu)
    })

    // Cerrar el menú al hacer clic fuera de él
    const handleClickOutside = (event) => {
      const header = document.querySelector('.header')
      const menuIcon = document.querySelector('.menu-icon')
      
      if (menuBtn && menuBtn.checked && 
          !header.contains(event.target) && 
          !menuIcon.contains(event.target)) {
        menuBtn.checked = false
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      menuLinks.forEach(link => {
        link.removeEventListener('click', closeMenu)
      })
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="logo-name">{greeting.username}</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#skills">Skills</a>
          </li>
          {exp === true && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li className="theme-toggle">
            <ToggleSwitch />
          </li>
        </ul>
      </header>
    </Headroom>
  )
}

export default Header
# Portfolio - Emanuel Gimenez

## Project Overview
Portfolio personal de Emanuel Gimenez, Desarrollador Full Stack Web.
Desplegado en GitHub Pages y Vercel.

## Tech Stack
- **Framework:** React 18.2.0 (Create React App / react-scripts 5.0.1)
- **Routing:** React Router DOM 6.3.0
- **Styling:** Plain CSS con custom properties (variables globales en `:root`)
- **Animations:** Componente `FadeIn` propio con IntersectionObserver + CSS transitions
- **Icons:** Font Awesome 5 (CDN), react-icons
- **Theme:** Dark mode manual via React Context (`StyleContext`) + CSS custom properties
- **Deployment:** gh-pages para GitHub Pages, Vercel

## Project Structure
```
src/
  portfolio.js        # Toda la configuracion de contenido (single source of truth)
  App.js              # Root component
  index.js            # Entry point (React 18 createRoot)
  index.css           # CSS custom properties + fonts globales
  containers/
    Main.js           # Layout orchestrator (functional component)
    greeting/         # Hero section
    skills/           # Skills display
    projects/         # Project cards grid
    education/        # Education timeline
    workExperience/   # Work experience cards
    skillProgress/    # Skill progress bars (hidden via flag)
    contact/          # Contact section
    topbutton/        # Scroll-to-top
  components/
    fadeIn/            # Componente de animacion (reemplazo de react-reveal)
    header/           # Navigation con Headroom
    footer/           # Footer
    card/             # Project card
    button/           # CTA button
    socialMedia/      # Social links
    softwareSkills/   # Skill icons
    educationCard/    # Education card
    experienceCard/   # Experience card
    ToggleSwitch/     # Dark mode toggle
  contexts/
    StyleContext.js    # Theme context (isDark, changeTheme)
  assets/
    images/           # Screenshots, logos, SVGs
    fonts/            # Agustina, Montserrat
```

## Key Conventions
- Todo el contenido se configura en `src/portfolio.js` (proyectos, educacion, experiencia, skills, etc.)
- Cada componente tiene su CSS colocado en la misma carpeta.
- Dark mode usa `.dark-mode` class en el root div + `isDark` de StyleContext + CSS custom properties.
- Las secciones se pueden activar/desactivar via flags booleanos en portfolio.js (`viewEducation`, `viewExperiences`, `viewSkillBars`).
- Todo el contenido esta en español.

## CSS Custom Properties
Variables globales definidas en `index.css` bajo `:root` y `.dark-mode`:
- `--color-primary`, `--color-accent-1` a `--color-accent-5`
- `--color-bg`, `--color-text`, `--color-text-secondary`, `--color-text-muted`
- `--color-card-bg`, `--color-card-shadow`, `--color-border`
- `--color-gradient`, `--color-gradient-text`

## Commands
- `npm start` — Dev server
- `npm run build` — Production build
- `npm run deploy` — Deploy a GitHub Pages (ejecuta build primero)
- `npm test` — Tests

## Known Issues (pendientes)
- Excesivo uso de `!important` en Skills.css y Education.css (necesita refactor de especificidad)
- Google Analytics usa UA tracking (deprecado), considerar migrar a GA4

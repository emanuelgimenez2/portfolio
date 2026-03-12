import React, { useState, useEffect, useCallback } from "react";
import { StyleProvider } from "../contexts/StyleContext";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import Education from "./education/Education";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import "./Main.css";

export default function Main() {
  const [isDark, setIsDark] = useState(true);

  const changeTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark, changeTheme }}>
        <Header />
        <Greeting />
        <Skills />
        <Projects />
        <StackProgress />
        <Education />
        <WorkExperience />
        <Contact />
        <Footer />
        <Top />
      </StyleProvider>
    </div>
  );
}

import React, { Component } from "react";
import { StyleProvider } from "../contexts/StyleContext";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import Education from "./education/Education";
import WorkExperience from "./workExperience/WorkExperience";
// import StartupProject from "./StartupProjects/StartupProject";
// import Achievement from "./achievement/Achievement";
// import Blogs from "./blogs/Blogs";
// import Talks from "./talks/Talks";
// import Twitter from "./twitter-embed/twitter";
// import Podcast from "./podcast/Podcast";
import Projects from "./projects/Projects";
import Profile from "./profile/Profile";
// import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import "./Main.css";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
    };
  }

  componentDidMount() {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    this.setState({ isDark: darkPref.matches });
  }
  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <Header />
          <Greeting />
          <Skills />
          <StackProgress />
          <Education />
          <WorkExperience />
      {/*     <StartupProject /> */}
          {/* <Achievement /> */}
          {/* <Blogs /> */}
          {/* <Talks /> */}
          {/* <Twitter /> */}
          {/* <Podcast /> */}
          <Projects />
          <Profile />
          {/* <Contact /> */}
          <Footer />
          <Top />
        </StyleProvider>
      </div>
    );
  }
}

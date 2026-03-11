import React, { useContext } from "react";
import "./Footer.css";
import FadeIn from "../fadeIn/FadeIn";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <FadeIn direction="bottom" duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Hecho con ❤️ por Emanuel Gimenez")}
        </p>
      </div>
    </FadeIn>
  );
}

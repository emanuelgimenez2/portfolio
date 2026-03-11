import React, { useState, useEffect } from "react";
import "./Top.css";

export default function Top() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(
        document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
      );
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTop}
      className={`top-button ${visible ? "top-button-visible" : ""}`}
      aria-label="Volver arriba"
    >
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}

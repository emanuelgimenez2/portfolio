import React from "react";
import "./Card.css";
import moviesPage from "../../assets/images/movies-page.jpg";
import { Link } from "react-router-dom";
import { projects } from "../../portfolio";

export default function ({ title, description, image, link, repo }) {
  return (
    <div
      className="main-card"
      style={{
        backgroundSize: "100%",

        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",

        backgroundImage: `url(${image})`,
      }}
    >
      {/* <h3 className="title-card education-text-school">titulo</h3> */}
      <footer className="buttons-card">
        <button className="main-button button-card">
          <a className="link" href={link} target="_blank">
            Deploy
          </a>{" "}
        </button>

        <button className="main-button button-card">
          <a className="link" href={repo} target="_blank">
            Repo
          </a>
        </button>
      </footer>
    </div>
  );
}

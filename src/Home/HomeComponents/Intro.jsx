import React from "react";
import "../HomeCss/Intro.css";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="introduction">
          <h1 data-aos="zoom-out-down">REACTIQUE</h1>
          <p data-aos="zoom-out">
            Some of the projects I built to practice & fulfill my childish dream
            of:
          </p>
          <div data-aos="zoom-in">
            <span>"Having my website live on the internet"</span>
          </div>
        </div>
        <button
          onClick={() => window.open("https://heetfolio.netlify.app/", "_blank")}
          data-aos="zoom-in-up"
        >
          Meet the creator
        </button>
        <a href="#web-creations">
          <i className="fas fa-chevron-down" />
        </a>
      </div>
    </>
  );
};

export default Intro;

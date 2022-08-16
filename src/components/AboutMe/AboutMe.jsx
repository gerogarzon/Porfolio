import React from "react";
import "./AboutMe.css";
import Header from "../Header/Header";
import gero from "../../resources/gero.jpg";
import {
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const AboutMe = () => {
  return (
    <>
      <div className="main">
        <Header />
        <br></br><br></br><br></br>
        <div className="aboutme-container">
          <div className="container-item left">
            <img className="cvFoto" src={gero} alt="cvImage"></img>
            <h3>Geronimo Garzon</h3>
            <a
              className="links"
              href="https://github.com/gerogarzon"
              target="_blank"
              rel="noreferrer"
            >
              <GithubOutlined
                className="footer-icons"
                style={{ fontSize: "22px" }}
              />
            </a>
            <a
              className="links"
              href="https://www.linkedin.com/in/geronimo-garzon/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinOutlined
                className="footer-icons"
                style={{ fontSize: "22px" }}
              />
            </a>
            <a
              className="links"
              href="https://www.facebook.com/geronimo.garzon"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookOutlined
                className="footer-icons"
                style={{ fontSize: "22px" }}
              />
            </a>
          </div>
          <div className="container-item right">
            <h1 className="right-items title">About</h1>
            <p className="right-items">
              I studied and graduated in industrial engineering and after 4
              years of career working mostly in the finance and commercial area
              I found my passion for software development.
            </p>
            <br></br>
            <p className="right-items">
              I consider myself a responsible, flexible, and proactive person,
              passionate about learning new things focused on technology. I seek
              to constantly challenge myself to grow both professionally and
              personally. My purpose is to be part of an environment that allows
              me to continue consolidating my training and enjoy what I do, like
              building product and making something people want.
            </p>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
      </div>
    </>
  );
};

export default AboutMe;

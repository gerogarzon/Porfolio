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
        <br></br>
        <br></br>
        <br></br>
        {/* about me container */}
        <div className="aboutme-container">
          {/* left side */}
          <div className="container-item aboutLeft">
            <div className="justifyContent">
              <img className="cvFoto" src={gero} alt="cvImage"></img>
            </div>
            <div className="justifyContent">
              <h3 className="leftItems">Geronimo Garzon</h3>
            </div>
            <div className="justifyContent">
              <a
                className="links leftItems"
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
                className="links leftItems"
                href="https://www.linkedin.com/in/geronimo-garzon/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinOutlined
                  className="footer-icons leftItems"
                  style={{ fontSize: "22px" }}
                />
              </a>
              <a
                className="links leftItems"
                href="https://www.facebook.com/geronimo.garzon"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookOutlined
                  className="footer-icons leftItems"
                  style={{ fontSize: "22px" }}
                />
              </a>
            </div>
          </div>
          {/* right side */}
          <div className="container-item aboutRight">
            <h1 className="right-items title">About</h1>
            <div className="right-items">
              <div>
                Graduated in industrial engineering and after 4 years of career
                working mostly in the areas of finance and commercial I found my
                passion for software development. Now I'm in this software world
                for more than a year and a half, I'm specializing as a MERN
                (MongoDB,ExpressJS,ReactJS,NodeJS) full stack developer.
              </div>
              <div>
                I consider myself a responsible, flexible, and proactive person,
                passionate about learning new things focused on technology. I
                seek to constantly challenge myself to grow both professionally
                and personally. My purpose is to be part of an environment that
                allows me to continue consolidating my training and enjoy what I
                do, like building product and making something people want.
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
};

export default AboutMe;

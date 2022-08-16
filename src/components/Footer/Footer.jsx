import React from "react";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-content-items column1">
          <p className="column-one">Geronimo Garzon</p>
          <p className="column-one">Mern full stack developer</p>
        </div>

        <div className="footer-content-items column3">
          <h5 className="column-one">Contact</h5>
          <p className="column-one">gerogarzon@gmail.com</p>
        </div>
        <div className="footer-content-items column4">
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
        </div>
      </div>
      <div className="footer-copyright">
        Copyright @2022 Design and create by Geronimo Garzon. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;

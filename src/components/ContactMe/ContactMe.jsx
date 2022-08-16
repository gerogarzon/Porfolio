import React from "react";
import Header from "../Header/Header";
import { GithubOutlined, LinkedinOutlined, FacebookOutlined } from "@ant-design/icons";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <>
      <div className="main">
        <Header />
        <h1 className="contactTitle">Contact</h1>
        <div className="contactme-container">
          <div className="contact-items contact-left">
            <h1>Let's get in touch!</h1>
            <p className="email">
              Either by <b>email</b> or throught my <b>social media</b>.
            </p>
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
          <div className="contact-items contact-right">
            <form className="contactme-form">
              <label className="contactme-form-label">Name</label>
              <input
                className="contactme-form-inputs"
                type="text"
                placeholder="Enter your Name"
              ></input>
              <label className="contactme-form-label">Email</label>
              <input
                className="contactme-form-inputs"
                type="text"
                placeholder="Enter your email"
              ></input>
              <label className="contactme-form-label ">Message</label>
              <input
                className="contactme-form-inputs message"
                type="text"
                placeholder="Enter your massage"
              ></input>
              <button className="contactme-form-button">Send</button>
            </form>
          </div>
        </div>
        <br></br><br></br>
        <br></br>
      </div>
    </>
  );
};

export default ContactMe;

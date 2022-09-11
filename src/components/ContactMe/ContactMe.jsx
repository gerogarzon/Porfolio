import React, { useRef } from "react";
import Header from "../Header/Header";
import {
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactMe = () => {
  const form = useRef();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const clearInputs = () => {
    // 👇️ clear input field value
    ref1.current.value = "";
    ref2.current.value = "";
    ref3.current.value = "";
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    await emailjs
      .sendForm(
        "service_qe1it9h",
        "template_n6a2lje",
        form.current,
        "UibsY4UnD3uZLnpfw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(
        Swal.fire({
          icon: "success",
          title: "Your email has been sent",
          timer: 2000,
        })
      );

    clearInputs();
  };

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
            <h5 style={{ color: "#555", margin: "0px" }}>Follow me:</h5>
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
            <h5
              style={{
                color: "#555",
                margin: "0px",
                padding: "15px 0px 0px 0px",
              }}
            >
              Email me:
            </h5>
            <i style={{ margin: "0px", padding: "0px 0px 0px 10px" }}>
              gerogarzon@gmail.com
            </i>
          </div>
          <br></br>
          <br></br>
          <div className="contact-items contact-right">
            <form
              id="myForm"
              className="contactme-form"
              ref={form}
              onSubmit={sendEmail}
            >
              <label className="contactme-form-label">Name</label>
              <input
                className="contactme-form-inputs"
                type="text"
                placeholder="Enter your Name"
                name="user_name"
                ref={ref1}
              ></input>
              <label className="contactme-form-label">Email</label>
              <input
                className="contactme-form-inputs"
                type="email"
                placeholder="Enter your email"
                name="user_email"
                ref={ref2}
              ></input>
              <label className="contactme-form-label ">Message</label>
              <input
                className="contactme-form-inputs message"
                type="text"
                placeholder="Enter your massage"
                name="message"
                ref={ref3}
              ></input>
              <button
                className="contactme-form-button"
                type="submit"
                value="Send"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;

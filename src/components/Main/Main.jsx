import React from "react";
import "./Main.css";
import Header from "../Header/Header";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="body-main-container">
        <h1 style={{ fontSize: "30px", margin: "0px" }}>Hello! I am</h1>
        <h1 style={{ fontSize: "70px", margin: "0px", color: "#15bb91" }}>
          Gero
        </h1>
        <h3>Full Stack Developer</h3>
        <p>
          This is my portfolio website. It's a minimalist simple page
          application created using RectJs.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Main;

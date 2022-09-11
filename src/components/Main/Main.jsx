import React from "react";
import "./Main.css";
import Header from "../Header/Header";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="body-main-container">
        <h1 style={{ fontSize: "30px", margin: "0px" }}>Hello! I'm</h1>
        <h1 style={{ fontSize: "90px", margin: "0px", color: "#15bb91" }}>
          Gero
        </h1>
        <h2>Full Stack Developer</h2>
       
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

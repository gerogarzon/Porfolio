import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import logo from "../../resources/logo.png";


const Main = () => {
  return (
    <div className="main">
      <Header />
    
      <div className="body-main-container">
        <img className="imageLogo" src={logo} alt="logo"></img>
        <div className="homeContent">
          <h1 className="textAlignLeft">Hello, </h1>
          <h1 className="textAlignLeft">
            I am <b style={{ color: "#15bb91" }}>Gero</b>,
          </h1>
          <h2 className="textAlignLeft">Full Stack Developer</h2>
          <br></br>
          <h6 className="textAlignLeft">Currently located in Buenos Aires,Argentina</h6>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Main;

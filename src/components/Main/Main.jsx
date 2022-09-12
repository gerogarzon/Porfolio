import React from "react";
import "./Main.css";
import Header from "../Header/Header";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="body-main-container">
        <h1  style={{ margin: "0px"}}>Hello World </h1>
        <h1 style={{  margin: "0px"}}>
        I'm <b style={{ fontSize: "70px", margin: "0px", color: "#15bb91" }}>Gero</b>
        </h1>
        <h2>Full Stack Developer</h2>
        <h5>Currently located in Argentina</h5>
       
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

import React from "react";
import "./Main.css";
import { Card, Button } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="body-main-container">
        <h1 style={{fontSize:"30px", margin:"0px"}}>Hello! I am</h1>
        <h1 style={{fontSize:"70px", margin:"0px"}}>Gero</h1>
        <h3><p className="mern">MERN</p> Full Stack Developer</h3>
        <p>This is my portfolio website. It's a minimalist simple page application created using RectJs.</p>
      </div>
    
    </div>
  );
};

export default Main;

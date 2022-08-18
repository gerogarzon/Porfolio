import React from 'react';
import '../Skills/Skills.css';
import Header from "../Header/Header";
import { Html5Outlined } from "@ant-design/icons";
import html from '../../resources/html.png';
import css from '../../resources/css.png';
import react from '../../resources/react.png';
import node from '../../resources/node.png';
import js from '../../resources/js.png';
import db from '../../resources/db.png';


const Skills = () => {
  return (
    <>
    <div className="main">
    <Header />
    <h1 className="skillsTitle">Skills</h1>
    <div className="skills-container">
      <div className="skills-container-items skill1"><img className="skills-image" src={html} alt="logo"></img></div>
      <div className="skills-container-items skill2"><img className="skills-image" src={css} alt="logo"></img></div>
      <div className="skills-container-items skill4"><img className="skills-image" src={js} alt="logo"></img></div>
      <div className="skills-container-items skill3"><img className="skills-image" src={react } alt="logo"></img></div>
      <div className="skills-container-items skill4"><img className="skills-image" src={node} alt="logo"></img></div>
      <div className="skills-container-items skill4"><img className="skills-image" src={db} alt="logo"></img></div>
    </div>
    <br></br><br></br><br></br><br></br>
    </div>
    </>
  )
}

export default Skills
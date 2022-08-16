import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Skills from './components/Skills/Skills'
import AboutMe from './components/AboutMe/AboutMe'
import ContactMe from './components/ContactMe/ContactMe'
import Projects from './components/Proyects/Projects'
function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Main />}/> 
        <Route path="/skills" element={<Skills />}/> 
        <Route path="/aboutme" element={<AboutMe />}/> 
        <Route path="/projects" element={<Projects />}/> 
        <Route path="/contactme" element={<ContactMe />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

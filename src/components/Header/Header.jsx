import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="main-navbar-container">
        <div className="navbar-container-left">
          <a href="/" className="navbar-container-items">
            Home
          </a>
          <a href="/aboutme" className="navbar-container-items">
            About me
          </a>
          <a href="/skills" className="navbar-container-items">
            Skills
          </a>
          <a href="/projects" className="navbar-container-items">
            Projects
          </a>
          <a href="/contactme" className="navbar-container-items">
            Contact me
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;

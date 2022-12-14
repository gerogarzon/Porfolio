import React from "react";
import Header from "../Header/Header";
import { Card } from "react-bootstrap";
import { SelectOutlined } from "@ant-design/icons";

import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="main">
        <Header />
        <h1 className="projectsTitle">Projects</h1>
        <div className="project-container">
          <Card className="project-container-items card1">
            <Card.Body className="bg-color">
              <Card.Title className="bg-color cardTitle">e-menu</Card.Title>
              <Card.Text className="bg-color">
                This project is a full stack MongoDb Express.js ReactJs NodeJs
                e-commerce with admin page.<br></br>
                <br></br>
              </Card.Text>
              <Card.Link
                href="https://e-menu-rc.netlify.app"
                target="_blank"
                className="bg-color goto-link"
              >
                <SelectOutlined className="linkLogo" />
              </Card.Link>
            </Card.Body>
          </Card>
          <Card className="project-container-items card2">
            <Card.Body className="bg-color">
              <Card.Title className="bg-color cardTitle">Cinefilos</Card.Title>
              <Card.Text className="bg-color">
                Cinefilos is a CRUD made of pure javascript. It also have
                functions for users registration, login and admin-role
                verification.
              </Card.Text>
              <Card.Link
                href="https://cinefilossite.netlify.app/"
                target="_blank"
                className="bg-color goto-link"
              >
                <SelectOutlined className="linkLogo" />
              </Card.Link>
            
            </Card.Body>
          </Card>

          <Card className="project-container-items card4">
            <Card.Body className="bg-color">
              <Card.Title className="bg-color cardTitle">Astral</Card.Title>
              <Card.Text className="bg-color">
                My first proyect made of pure HTML and CSS. It is an astrology
                blog.<br></br>
                <br></br>
              </Card.Text>
              <Card.Link
                href="https://astral-blog2.netlify.app/"
                target="_blank"
                className="bg-color goto-link"
              >
                <SelectOutlined className="linkLogo" />
              </Card.Link>
             
            </Card.Body>
          </Card>
          <Card className="project-container-items card3">
            <Card.Body className="bg-color">
              <Card.Title className="bg-color cardTitle">MoviesList</Card.Title>
              <Card.Text className="bg-color">
              Movie search engine consuming the TMDB api.  It has functions of login, search engine, added to favorites among others.
              </Card.Text>
              <Card.Link
                href="https://discover-movies-tmbd.netlify.app/"
                target="_blank"
                className="bg-color goto-link"
              >
                <SelectOutlined className="linkLogo" />
              </Card.Link>
              
            </Card.Body>
          </Card>
        </div>
        <br></br>
      </div>
    </>
  );
};

export default Projects;

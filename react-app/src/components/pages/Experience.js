import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./pages.css";
import Container from "../building_components/Container";
import pdf from "../../images/JordynSaltzman_Resume.pdf";

const Experience = () => {
  return (
    <Container>
      <div className="row myCourses">
        <div className="col">
          <h2 className="listTitle">Courses</h2>
          <ul>
            <li>
              The Coding Bootcamp at Johns Hopkins Engineering (10/2019 -
              Present)
            </li>
            <li>
              <strong>Udemy:</strong> CSSCasts; CSS libraries Plugins Tips &
              Tricks 2020 (In progess)
            </li>
            <li>
              <strong>Udemy:</strong> A Beginners Guide to Advanced JavaScript &
              ES6 - ES2017 (In progress)
            </li>
          </ul>
        </div>
      </div>
      <div className="row mySkills">
        <div className="col-md-12">
          <h2 className="listTitle">Skills</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <h2 className="listSubtitle">The Browser</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>React.js</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h2 className="listSubtitle">Dev Tools</h2>
          <ul>
            <li>Git</li>
            <li>Github</li>
            <li>Gitkracken Glo</li>
            <li>Heroku</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h2 className="listSubtitle">API Interaction</h2>
          <ul>
            <li>APIs</li>
            <li>JSON</li>
            <li>AJAX</li>
            <li>CRUD Operators</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h2 className="listSubtitle">Server Side</h2>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Handlebars</li>
            <li>Sessions</li>
            <li>MVC</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>ORM (Sequelize and Mongoose)</li>
          </ul>
        </div>
      </div>
      <div className="row downloadCV">
        <div className="col-md-12">
          <a
            href={pdf}
            target="_blank"
            className="resumeDownload learnMore
      "
          >
            Download Resume
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Experience;

import React from "react";
import "./building.css";

const Project = (props) => {
  return (
    <div>
      <div className="row center">
        <div className="col-md-12 center">
          <h3 className="listTitle">{props.title}</h3>
        </div>
        <div className="col-md-12 uncenter projText">
          <p>
            <strong>{props.description}</strong>
          </p>
          <p>{props.projDetails}</p>
        </div>
        <div className="col-md-12 center">
          <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href={props.websiteLink} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-link"></i>
          </a>
        </div>
        <div className="col-md-12 learnMore" onClick={props.onClick}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Project;

import React, { useState } from "react";
import "./building.css";
// import projectlist from "../../projectlist";

const Project = props => {
  return (
    <div className="row">
      <div className="col-md-12">
        <h3 className="listTitle">{props.title}</h3>
      </div>
      <div className="col-md-12">
        <p className="bodyText">{props.description}</p>
        <p className="bodyText">{props.githubLink}</p>
      </div>
      <div className="col-md-12">
        <h3 className="learnMore">{props.children}</h3>
      </div>
    </div>
  );
};

export default Project;

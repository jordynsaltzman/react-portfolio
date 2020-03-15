import React, { useState } from "react";
import Container from "../building_components/Container";
// import { Link } from "react-router-dom";
import "./pages.css";
import Project from "../building_components/Project";

const Projects = props => {
  const projectlist = props.projectlist;

  const [state, setState] = useState({ projOpen: false, projId: 0 });

  let handleClick = event => {
    let clickedId = event.target.id;
    let projName = projectlist[clickedId].projectName;
    let projDescrption = projectlist[clickedId].projectDescription;
    let githubLink = projectlist[clickedId].githubLink;
    setState({
      projOpen: !state.projOpen,
      projId: clickedId,
      projName: projName,
      projDescrption: projDescrption,
      githubLink: githubLink
    });
  };

  let handleBackClick = () => {
    setState({ projOpen: !state.projOpen });
  };
  return (
    <Container>
      {state.projOpen ? (
        <Project
          title={state.projName}
          description={state.projDescrption}
          githubLink={state.githubLink}
        >
          <div onClick={handleBackClick}>Back to projects</div>
        </Project>
      ) : (
        <div>
          <div className="col-md-6">
            <h2 className="listTitle" onClick={handleClick} id="0">
              Stovetop
            </h2>
          </div>
          <div className="col-md-6">
            <h2 className="listTitle" onClick={handleClick} id="1">
              Alumni App
            </h2>
          </div>
          <div className="col-md-6">
            <h2 className="listTitle" onClick={handleClick} id="2">
              Cohort Collab
            </h2>
          </div>
          <div className="col-md-6">
            <h2 className="listTitle" onClick={handleClick} id="3">
              Sandwich Maker
            </h2>
          </div>
          <div className="col-md-6">
            <h2 className="listTitle" onClick={handleClick} id="4">
              Fitness Tracker
            </h2>
          </div>
          <div className="col-md-6">
            <h2 className="listTitle" onClick={handleClick} id="5">
              Profile Generator
            </h2>
          </div>
          <div className="col-md-6">
            <h2 className="listTitle" onClick={handleClick} id="6">
              Template Engine
            </h2>
          </div>
          <div className="col-md-6">
            <h2 className="listTitle" onClick={handleClick} id="7">
              Note Taker
            </h2>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Projects;

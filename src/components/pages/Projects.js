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
    let projDetails = projectlist[clickedId].projDetails;
    let websiteLink = projectlist[clickedId].websiteLink;
    setState({
      projOpen: !state.projOpen,
      projId: clickedId,
      projName: projName,
      projDescrption: projDescrption,
      projDetails: projDetails,
      githubLink: githubLink,
      websiteLink: websiteLink
    });
  };

  let handleBackClick = () => {
    setState({ projOpen: !state.projOpen });
  };
  return (
    <Container className="projContainer">
      {state.projOpen ? (
        <Project
          title={state.projName}
          description={state.projDescrption}
          githubLink={state.githubLink}
          projDetails={state.projDetails}
          websiteLink={state.websiteLink}
          onClick={handleBackClick}
        >
          Back to projects
        </Project>
      ) : (
        <div className="row projectDiv">
          <div className="col-md-6">
            <h2 className="projTitle" onClick={handleClick} id="1">
              Alum App
            </h2>
            <h2 className="projTitle" onClick={handleClick} id="0">
              Stovetop
            </h2>

            <h2 className="projTitle" onClick={handleClick} id="7">
              Note Taker
            </h2>

            <h2 className="projTitle" onClick={handleClick} id="2">
              Cohort Collab
            </h2>

            <h2 className="projTitle" onClick={handleClick} id="4">
              Fitness Tracker
            </h2>
            <h2 className="projTitle" onClick={handleClick} id="8">
              React Portfolio
            </h2>
            <h2 className="projTitle" onClick={handleClick} id="3">
              Sandwich Maker
            </h2>

            <h2 className="projTitle" onClick={handleClick} id="6">
              Template Engine
            </h2>

            <h2 className="projTitle" onClick={handleClick} id="5">
              Profile Generator
            </h2>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Projects;

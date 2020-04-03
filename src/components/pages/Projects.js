import React, { useState } from "react";
import Container from "../building_components/Container";
// import { Link } from "react-router-dom";
import "./pages.css";
import Project from "../building_components/Project";

const Projects = (props) => {
  const projectlist = props.projectlist;

  const [state, setState] = useState({ projOpen: false, projId: 0 });

  let handleClick = (event) => {
    let clickedId = event.target.id;
    let projName = projectlist[clickedId].projectName;
    let projDescrption = projectlist[clickedId].projectDescription;
    let githubLink = projectlist[clickedId].githubLink;
    let projDetails = projectlist[clickedId].projDetails;
    let websiteLink = projectlist[clickedId].websiteLink;
    let projImg = projectlist[clickedId].projImg;

    setState({
      projOpen: !state.projOpen,
      projId: clickedId,
      projName: projName,
      projImg: projImg,
      projDescrption: projDescrption,
      projDetails: projDetails,
      githubLink: githubLink,
      websiteLink: websiteLink,
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
          {/* <img src={state.projImg} alt="Project Screenshot" /> */}
          Back to projects
        </Project>
      ) : (
        <div className="row projectDiv">
          <div className="col-md-6">
            {projectlist.map((project) => {
              return (
                <h2
                  className="projTitle"
                  onClick={handleClick}
                  id={project.projectId}
                >
                  {project.projectName}
                </h2>
              );
            })}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Projects;

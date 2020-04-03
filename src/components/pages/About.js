import React from "react";
import "./pages.css";
import Headshot from "../../images/hexpic2.png";
import Container from "../building_components/Container";

const About = () => {
  return (
    <Container>
      <div className="row aboutRow">
        <div className="col-md-4 headshotDiv">
          <img
            src={Headshot}
            className="headshot floating"
            alt="Jordyn Saltzman"
          ></img>
        </div>
        <div className="col-md-8 bodyText">
          <p>
            <strong>
              I have an insatiable curiosity and love figuring out how things
              work.{" "}
            </strong>
            Since October 2019 when I began my journey as a developer, I have
            grown extremely passionate about code and aspire to be a great
            full-stack engineer. Programming ignites my creative side and
            inspires the designer in me, while simultaneously satisfying my love
            of logic problems and abstract thinking. I am excited to be doing
            what I love, and spend each day strengthening my skills, learning
            new techniques, and devising creative solutions to problems.
          </p>
          <p>
            I have just completed a 24-week certification course at{" "}
            <a className="bodyLink" href="https://bootcamp.wse.jhu.edu/">
              The Coding Bootcamp at Johns Hopkins Engineering
            </a>{" "}
            in April 2020. I look forward to what the future holds!
          </p>
          <a className="learnMore" href="/projects">
            <h3>View my work</h3>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default About;

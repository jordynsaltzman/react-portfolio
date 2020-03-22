import React from "react";
import "./pages.css";
import Container from "../building_components/Container";

const Home = () => {
  return (
    <Container>
      <div className="titleDiv">
        <h1 className="title">
          Hi, my name is <span className="titleName">Jordyn Saltzman.</span>
        </h1>
        <br />
        <h1 className="title">I'm a full-stack developer.</h1>
        <a className="learnMore" href="/about">
          <h3>
            More about me <i className="fa fa-arrow-left"></i>
          </h3>
        </a>
      </div>
    </Container>
  );
};

export default Home;

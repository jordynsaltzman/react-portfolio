import React from "react";
import "./pages.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="titleDiv">
        <h1 className="title">Hi, my name is Jordyn Saltzman.</h1>
        <br />
        <h1 className="title">I am a full-stack developer.</h1>
        <a className="learnMore" href="/about">
          <h3>
            More about me <i class="fa fa-arrow-left"></i>
          </h3>
        </a>
      </div>
    </div>
  );
};

export default Home;

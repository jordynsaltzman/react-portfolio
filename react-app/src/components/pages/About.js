import React from "react";
import "./pages.css";
import Headshot from "../../images/headshot.png";

const About = () => {
  return (
    <div className="homeContainer">
      <div className="aboutTitleDiv">
        <h1 className="title aboutTitle">About Me:</h1>
        <img src={Headshot} className="headshot" alt="Jordyn Saltzman"></img>
        <a className="learnMore" href="/projects">
          <h3>
            <i class="fa fa-arrow-right"></i>View My Work
          </h3>
        </a>
      </div>

      <div className="bodyText">
        <p>
          <strong>
            I have an insatiable curiosity and love figuring out how things
            work.{" "}
          </strong>
          Currently, I am building a solid foundation in web development at{" "}
          <a className="bodyLink" href="https://bootcamp.wse.jhu.edu/">
            The Coding Bootcamp at Johns Hopkins Engineering.
          </a>{" "}
          Since October 2019 when I started this journey, I have built web
          applications using HTML5, CSS3, JavaScript, jQuery, Bootstrap,
          Express.js, ReactJS, Node.js, MongoDB, Mongoose.js, MySQL,
          Sequelize.js, Command Line, REST APIs, Git and more. Outside of class,
          I am taking several courses on Udemy, participating in Hackathons, and
          getting lost in Stack Overflow. I am excited to be taking the plunge
          into a new field that marries my love of problem solving, design, and
          abstract thinking.
        </p>
      </div>
    </div>
  );
};

export default About;

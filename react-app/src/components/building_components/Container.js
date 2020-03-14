import React from "react";
import "./building.css";

const Container = props => {
  return (
    <div className="homeContainer">
      <div className="navIcon">
        <a href="/navigation">
          <i className="fas fa-bars"></i>
        </a>
      </div>
      <div className="row h-100">
        <div className="col-md-12 my-auto">{props.children}</div>
      </div>
    </div>
  );
};

export default Container;

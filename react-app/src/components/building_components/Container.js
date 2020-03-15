import React from "react";
import "./building.css";
import Navpage from "../pages/Navpage";

const Container = props => {
  const changeStyle = () => {
    Navpage.setState({
      id: "active"
    });
  };
  return (
    <div className="homeContainer">
      <Navpage id="inactive" />
      <div className="navIcon">
        <span onClick={changeStyle}>
          <i className="fas fa-bars"></i>
        </span>
      </div>
      <div className="row h-100">
        <div className="col-md-12 my-auto">{props.children}</div>
      </div>
    </div>
  );
};

export default Container;

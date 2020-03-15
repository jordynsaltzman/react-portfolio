import React, { useState } from "react";
import "./building.css";
import Navpage from "../pages/Navpage";

const Container = props => {
  const [state, setState] = useState({ navbarOpen: false });
  let handleClick = () => {
    setState({ navbarOpen: !state.navbarOpen });
  };
  return (
    <div className="homeContainer">
      <div className="navIcon">
        <span onClick={handleClick}>
          <i className="fas fa-bars"></i>
        </span>
      </div>
      {state.navbarOpen ? (
        <Navpage />
      ) : (
        <div className="row h-100">
          <div className="col-md-12 my-auto">{props.children}</div>
        </div>
      )}
    </div>
  );
};

export default Container;

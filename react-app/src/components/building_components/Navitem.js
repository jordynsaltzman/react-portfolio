import React from "react";
import "./building.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Navitem = props => {
  //   if (Router.Route.location.pathname === this.props.href) {
  //     console.log("I AM ON THIS PAGE");
  //   }
  return (
    <div className="navItemDiv">
      <a className="navItem" href={props.href}>
        {props.children}
      </a>
    </div>
  );
};
export default Navitem;

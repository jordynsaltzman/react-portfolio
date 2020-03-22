import React from "react";
import { NavLink } from "react-router-dom";
import "./building.css";

const Navbar = () => {
  return (
    <nav>
      <div className="row h-100">
        <div className="col-md-12 my-auto">
          <div className="navItemDiv">
            <NavLink
              exact
              activeClassName="navbar__link--active"
              className="navItem"
              to="/"
            >
              Home
            </NavLink>
          </div>
          <div className="navItemDiv">
            <NavLink
              exact
              activeClassName="navbar__link--active"
              className="navItem"
              to="/about"
            >
              About
            </NavLink>
          </div>
          <div className="navItemDiv">
            <NavLink
              exact
              activeClassName="navbar__link--active"
              className="navItem"
              to="/experience"
            >
              Experience
            </NavLink>
          </div>
          <div className="navItemDiv">
            <NavLink
              exact
              activeClassName="navbar__link--active"
              className="navItem"
              to="/projects"
            >
              Projects
            </NavLink>
          </div>
          <div className="navItemDiv">
            <NavLink
              exact
              activeClassName="navbar__link--active"
              className="navItem"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

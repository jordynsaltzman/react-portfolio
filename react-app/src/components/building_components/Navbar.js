import React from "react";
import Navitem from "./Navitem";
import { NavLink } from "react-router-dom";
import "./building.css";

const Navbar = () => {
  return (
    <nav>
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
      {/* <Navitem href="/">Home</Navitem>
        <Navitem href="/about">About</Navitem> */}
      {/* <Navitem href="/experience">Experience</Navitem> */}
      {/* <Navitem href="/projects">Projects</Navitem>
        <Navitem href="/contact">Contact</Navitem> */}
    </nav>
  );
};
export default Navbar;

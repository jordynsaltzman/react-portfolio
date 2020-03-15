import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Experience from "./components/pages/Experience";
import Contact from "./components/pages/Contact";
import Navbar from "./components/building_components/Navbar";
import Navpage from "./components/pages/Navpage";
import Container from "./components/building_components/Container";
import projectlist from "./projectlist";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/experience" component={Experience} />
          {/* <Route exact path="/projects" component={Projects} /> */}
          <Route
            exact
            path="/projects"
            render={props => <Projects {...props} projectlist={projectlist} />}
          />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

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

function App() {
  // const [state, setState] = useState({ navbar: true });
  // let callback = value => useState((navbar: value));
  // let navbarComp = state.navbar ? (
  //   <Container changeStyle={callback} />
  // ) : (
  //   <Navbar></Navbar>
  // );
  return (
    <Router>
      <div className="App">
        {/* {navbarComp}
        {!state.navbar && ( */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          {/* <Route exact path="/navigation" component={Navpage} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

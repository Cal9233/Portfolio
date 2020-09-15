import React from "react";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./pages/index";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/project" component={Project} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
    </>
  );
}

export default App;

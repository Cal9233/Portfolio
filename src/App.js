import React from "react";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./pages/index";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
require("dotenv").config();

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/project" component={Project} />
      <Route path="/contact" component={Contact} />
    </>
  );
}

export default App;

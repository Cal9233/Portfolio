import React from "react";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components/index";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import Resume from "./components/Resume";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      {/* <Route path="/resume" component={Resume} /> */}
    </>
  );
}

export default App;

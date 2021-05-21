import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import State from "./covidTracker/State";
const RouterExample = () => {
  return (
    <>
      <Router>
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark menu-bg">
            <div class="container-fluid">
              <div className="logo">Cod</div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/covid-traker">Covid Traker</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/covid-traker">
              <State />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};
export default RouterExample;

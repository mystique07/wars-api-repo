import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Default.css";

import Home from "./components/pages/Home";
import Errors from "./components/pages/Error";
import Nav from "./components/startWars/Nav";
import Planet from "./components/startWars/Planets";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <h1>Awesome Star-Wars Planets</h1>

          <Router>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
            <hr />
            <Nav />
            <hr />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/planets/:planetId" component={Planet} />

              <Route component={Errors} />
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}

export default App;

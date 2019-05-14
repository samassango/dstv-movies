import * as React from "react";
import "./App.css";

import Home from "./components/home";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Movie from "./components/movie";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <p className="App-intro">
            <Route exact={true} path="/" component={Home} />
            <Route path="/movie/:id" component={Movie} />
          </p>
        </div>
      </Router>
    );
  }
}

export default App;

// <header className="App-header">
// <h1 className="App-title">Recommended Movies</h1>
// </header>
// <Home />
//

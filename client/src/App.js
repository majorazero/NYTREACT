import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Saved from "./components/Saved/Saved.js";
import Search from "./components/Search/Search.js";
//import Results from "./components/Results/Results.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </div>
      </Router>
    );
  }
}

export default App;

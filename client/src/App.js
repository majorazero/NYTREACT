import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
        </div>
      </Router>
    );
  }
}

export default App;

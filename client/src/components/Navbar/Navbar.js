import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return(
    <nav className="navbar navCust">
      <div className="nytTitle">
        <h1>New York Times Article Scrubber</h1>
        <small>How ugly everything is... err... it's a <span className="feature">feature.</span></small>
      </div>
      <div className="navbar-nav">
        <Link className="nav-item nav-link" to="/">Search</Link>
        <Link className="nav-item nav-link" to="/saved">Saved</Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return(
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <div className="navbar-nav">
        <Link className="nav-item nav-link" to="/">Search</Link>
        <Link className="nav-item nav-link" to="/results">Results</Link>
        <Link className="nav-item nav-link" to="/saved">Saved</Link>
      </div>
    </nav>
  );
};

export default Navbar;

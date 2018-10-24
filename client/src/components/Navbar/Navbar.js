import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return(
    <nav className="navbar navbar-light bg-light">
      <h1>NEW YORK TIME ARTICLE SCRUBBER</h1>
      <div className="navbar-nav">
        <Link className="nav-item nav-link" to="/">Search</Link>
        <Link className="nav-item nav-link" to="/saved">Saved</Link>
      </div>
    </nav>
  );
};

export default Navbar;

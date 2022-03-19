import React from "react";
import { Link } from "react-router-dom";

// navigation bar to navigate between different pages
function NavMenu(){
  return (
    <nav className="nav-container-menu-items">
      <Link className="btn btn-primary btn-lg" role="button" to="/">
        Home
      </Link>
      <Link
        className="btn btn-primary btn-lg"
        role="button"
        to="/movieList"
      >
        Movie List
      </Link>
      <Link
        className="btn btn-primary btn-lg"
        role="button"
        to="/movieBlockList"
      >
        Movie Block List
      </Link>
      <Link
        className="btn btn-primary btn-lg"
        role="button"
        to="/movieLikeList"
      >
        Movie Like List
      </Link>
    </nav>
  );
};

export default NavMenu;
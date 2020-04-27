import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {

    return(
      <div className="navbar">
          <span className="nav-brand">LOGO</span>
          <ul className="nav-links">
              <Link to="/" className="nav-items">
                  <li> HOME </li>
              </Link>
              <Link to="/about" className="nav-items">
                  <li> ABOUT </li>
              </Link>
              <Link to="/users" className="nav-items">
                  <li> USERS </li>
              </Link>
          </ul>
      </div>
    );
}
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        Learning React
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/counter"
              activeClassName="active"
            >
              Counter
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/counter-card"
              activeClassName="active"
            >
              Counter-Cards
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/covid-card"
              activeClassName="active"
            >
              Covid19-Cards
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

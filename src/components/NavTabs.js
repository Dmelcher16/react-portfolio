import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function NavTabs() {
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs bg-secondary">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home/About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
        >
          Contact/Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Router>
        <div>
          <a className="nav-brand" href="/">
            NotifyHelp
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <a className="nav-items" href="/stats">
              stats
            </a>
          </li>
          <li>
            <a className="nav-items" href="/feeds">
              feeds
            </a>
          </li>
          <li>
            <a className="nav-items" href="/help">
              help
            </a>
          </li>
          <li>
            <a className="nav-items" href="/support">
              support
            </a>
          </li>
        </ul>
      </Router>
    </nav>
  );
};

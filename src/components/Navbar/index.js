import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { LinkItem } from "../LinkItem";

import "./navbar.css";

export const Navbar = () => {
  const links = [
    {
      name: 'stats',
      link: '/stats',
      id: 'stats',
    },
    {
      name: 'feeds',
      link: '/feeds',
      id: 'feeds',
    },
    {
      name: 'help',
      link: '/help',
      id: 'help',
    },
    {
      name: 'support',
      link: '/support',
      id: 'support',
    }
  ]
  return (
    <nav className="navbar-container">
      <Router>
        <div>
          <a className="nav-brand" href="/">
            NotifyHelp
          </a>
        </div>
        <ul className="nav-links">
          {
            links.map((linkItem)  => <LinkItem linkItem={linkItem}/>  
            )
          }
        </ul>
      </Router>
    </nav>
  );
};

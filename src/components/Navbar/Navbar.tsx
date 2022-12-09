import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">Pages</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="pages/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="pages/contacts" className="nav-link">
                Contacts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="pages/kdrama" className="nav-link">
                Kdrama
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="pages/netflix" className="nav-link">
                Netflix
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="pages/favouriteDishes" className="nav-link">
                Favourite foods
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
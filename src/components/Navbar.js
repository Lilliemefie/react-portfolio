import React from 'react';
import { NavLink } from "react-router-dom";
import '../style/Navbar.css';

export default function Navbar () {
  return (
    <header>
<nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">About me</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/project" className="nav-link">Project</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Resume</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
  )
};


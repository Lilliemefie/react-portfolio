import React from 'react';
import { NavLink } from "react-router-dom";
import '../style/Navbar.css';

export default function Navbar () {
  return (
<header>
<nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <NavLink to="/" className="navbar-brand"></NavLink>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item"><NavLink to="/"  className="nav-link active" aria-current="page">HOME</NavLink></li>
        <li className="nav-item"><NavLink to="/about" className="nav-link">ABOUT</NavLink></li>
        <li className="nav-item"><NavLink to="/project" className="nav-link">PROJECT</NavLink></li>
        <li className="nav-item"><NavLink to="/contact" className="nav-link">CONTACT</NavLink></li>
        <li className="nav-item"> <a className="nav-link" href="https://drive.google.com/file/d/1rVZOqBVKmUdHKdNEUxb2TzAyHa2rOQI3/view?usp=sharing"
         target="_blank">RESUME</a></li>
      </ul>
    </div>
  </div>
</nav>
</header>

  )
};


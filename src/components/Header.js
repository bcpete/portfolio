import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
<header className="header">
  <h1 className="logo">BP</h1>
  <ul className="main-nav">
    <li><NavLink to="/" exact={true}>Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/projects">Projects</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
  </ul>
</header>
)

export default Header;
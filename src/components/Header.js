import React from "react";

const Header = () => (
  <header className="header">
    <div className="header-content">
      {/* Logo or Name */}
      <h1 className="name">Abhishek Pandey</h1>

      {/* Navigation Menu */}
      <nav className="navbar">
        <ul className="navbar-list">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;

import React, { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">KYLE MENDOZA</div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        <li><a href="#">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
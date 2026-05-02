import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">KYLE MENDOZA</div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link
            to="/"
            onClick={handleLinkClick}
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/education"
            onClick={handleLinkClick}
            className={location.pathname === "/education" ? "active" : ""}
          >
            Education
          </Link>
        </li>

        <li>
          <Link
            to="/projects"
            onClick={handleLinkClick}
            className={location.pathname === "/projects" ? "active" : ""}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>

        <li>
          <a href="#">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
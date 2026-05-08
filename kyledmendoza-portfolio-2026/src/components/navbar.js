import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

import resumePDF from "../assets/Kyle Mendoza - Resume.pdf";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false); // New state for notification
  const location = useLocation();

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Function to trigger the notification
  const handleResumeClick = () => {
    setIsDownloading(true);
    setMenuOpen(false); // Close mobile menu if open

    // Hide the notification after 3 seconds
    setTimeout(() => {
      setIsDownloading(false);
    }, 3000);
  };

  return (
    <nav className="navbar">
      <div className="logo">KYLE MENDOZA</div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={handleLinkClick} className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleLinkClick} className={location.pathname === "/about" ? "active" : ""}>
            About
          </Link>
        </li>
        <li>
          <Link to="/education" onClick={handleLinkClick} className={location.pathname === "/education" ? "active" : ""}>
            Education
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={handleLinkClick} className={location.pathname === "/projects" ? "active" : ""}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleLinkClick} className={location.pathname === "/contact" ? "active" : ""}>
            Contact
          </Link>
        </li>
        <li>
          {/* Updated Resume link with onClick */}
          <a 
            href={resumePDF} 
            download="Kyle Mendoza - Resume.pdf" 
            onClick={handleResumeClick}
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Notification Toast */}
      {isDownloading && (
        <div className="download-notification">
          <span className="spinner"></span>
          Downloading Resume...
        </div>
      )}
    </nav>
  );
}

export default Navbar;
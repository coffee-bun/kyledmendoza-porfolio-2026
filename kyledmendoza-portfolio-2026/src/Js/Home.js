import React, { useState, useEffect } from "react";
import "../Css/Home.css";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      <nav className="navbar">
        <div className="logo">KYLE MENDOZA</div>

        {/* Hamburger button */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#">Resume</a></li>
        </ul>
      </nav>

        <section className="page1-section">
        <div className="hero-content">
            <h1>Page 1</h1>
        </div>
        </section>

        <section className="page2-section">
        <h2>Page 2</h2>
        </section>

        <section className="page3-section">
        <h2>Page 3</h2>
        </section>

        <section className="page4-section">
        <h2>Page 4</h2>
        </section>

        <section className="footer-section">
        <div className="footer-content">
            <h2>Interested in my work? Let’s make something great.</h2>
            
            <p>
            Feel free to explore my projects or reach out if you’d like to collaborate
            </p>
            
            <span className="footer-address">
            San Mateo, Rizal, Philippines 1850
            </span>

            <div className="footer-buttons">
            <a href="#contact" className="btn primary">Contact Me</a>
            <a href="#projects" className="btn secondary">Explore Projects</a>
            </div>
        </div>

        {/* FOOTER BOTTOM BAR */}
        <div className="footer-bottom">
            <div className="footer-left">
             <p>© 2026 All Rights Reserved | kyledmendoza02@gmail.com | 09198828959</p>
            </div>

            <div className="footer-right">
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fas fa-envelope"></i></a>
            <a href="#"><i className="fab fa-viber"></i></a>
            </div>
        </div>
        </section>
    </>
  );
}

export default Home;
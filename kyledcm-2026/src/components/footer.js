import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
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
            <Link to="/contact" className="btn primary">
              Contact Me
            </Link>

            <Link to="/projects" className="btn secondary">
              Explore Projects
            </Link>
          </div>
        </div>

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
  );
}

export default Footer;
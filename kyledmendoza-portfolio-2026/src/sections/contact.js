import React from "react";
import "../styles/Contact.css";
import SampleImage from "../assets/capcut-icon.png";

function Contact() {
  return (
    <div className="page-container">
      <div className="contact-columns">
        {/* Top Column */}
        <div className="contact-column-top">
          <div className="contact-header">
            <p className="contact-small-title contact">CONTACTS</p>
            <h2 className="contact-catchy-phrase contact">
              Interested in my work? <br />
              Let’s make something great.
            </h2>
            <p className="contact-description contact">
              Feel free to explore my projects or reach out if you’d like to collaborate.
            </p>
            <p className="contact-address contact">
              San Mateo, Rizal, Philippines 1850
            </p>

            <div className="contact-buttons-container">
              <button className="btn-contact-me contact">Contact Me</button>
              <button className="btn-explore contact">Explore Projects</button>
            </div>
          </div>
        </div>

        {/* Bottom Column */}
        <div className="column-bottom">
<div className="social-grid">
  {/* Email */}
  <div className="social-item">
    <div className="tool-icon"> 
      <img src={SampleImage} alt="Email Icon" />
    </div>
    <h3>Email</h3>
    <p>yourname@email.com</p>
  </div>

  {/* LinkedIn */}
  <div className="social-item">
    <div className="tool-icon"> 
      <img src={SampleImage} alt="LinkedIn Icon" />
    </div>
    <h3>LinkedIn</h3>
    <p>linkedin.com/in/username</p>
  </div>

  {/* Viber */}
  <div className="social-item">
    <div className="tool-icon"> 
      <img src={SampleImage} alt="Viber Icon" />
    </div>
    <h3>Viber</h3>
    <p>+63 900 000 0000</p>
  </div>

  {/* Facebook */}
  <div className="social-item">
    <div className="tool-icon"> 
      <img src={SampleImage} alt="Facebook Icon" />
    </div>
    <h3>Facebook</h3>
    <p>facebook.com/username</p>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
import React, { useEffect } from "react";
import "../styles/About.css";
// Import your images - adjust the paths based on your actual file structure
import PrimaryImage from "../assets/kyle-primary.jpg";
import HoverImage from "../assets/kyle-hover.jpg";

function About() {
  useEffect(() => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
      const size = Math.random() * 11 + 6;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 8 + 8}s`;
      particle.style.animationDelay = `${Math.random() * 3}s`;
      if(Math.random() > 0.7) {
        particle.style.backgroundColor = '#181818ff';
        particle.style.borderRadius = '30%';
      }
    });
  }, []);

  return (
    <div className="about-page1">
      {/* Top Column with Particle Background - Smaller height */}
      <div className="about-page1col1">
        <div className="particles-container">
          {[...Array(35)].map((_, index) => (
            <div key={index} className="particle"></div>
          ))}
        </div>
        <div className="content-wrapper">
          <h1 className="greeting-title">Hello, I am Kyle</h1>
          <div className="title-highlight"></div>
          <p className="description">
            Front-End Developer | UI/UX Enthusiast | Quality Assurance Tester.
            <br />
            <br />
            I'm passionate about turning ideas into functional, user-friendly designs
            while always striving to improve. I see every project as a chance to
            learn, grow, and create something meaningful.
          </p>
        </div>
      </div>

      {/* Bottom Column - Premium Design */}
      <div className="about-page1col2">
        <div className="about-content-premium">
          <h2 className="about-title-premium">
            Turning ideas into meaningful <span className="text-gradient">digital experiences</span>.
          </h2>
          <div className="about-divider-premium">
            <div className="divider-line"></div>
            <div className="divider-dot"></div>
            <div className="divider-line"></div>
          </div>
          <div className="about-description-premium">
            <p>I'm Kyle Mendoza, an aspiring IT professional and <strong>front-end developer</strong> who loves creating digital experiences that are both engaging and functional. I enjoy turning ideas into responsive, user-friendly websites 
            that not only look good but also work smoothly. My skills cover front-end development, UI/UX design, and quality assurance — making sure everything I build is reliable, polished, and ready for users.</p>
            
            <p>I'm also really passionate about <strong>Web Designing</strong>. For me, great work isn't just about creating something — it's about making sure it works exactly as it should. 
            I pay close attention to the small details, checking every feature and interaction to make sure it meets the standard I'd expect if I were the user.</p>
            
            <p>I'm also really passionate about <strong>Quality Assurance Testing</strong>. For me, great work isn't just about creating something — it's about making sure it works exactly as it should. 
            I pay close attention to the small details, checking every feature and interaction to make sure it meets the standard I'd expect if I were the user.</p>
          </div>
        </div>
      </div>
 
      <div className="about-page3">
        <div className="about-page3-content">
          <h2 className="about-page3-title">A glimpse of the person behind the work.</h2>
          <div className="about-page3-divider"></div>
          <div className="about-page3-image-container">
            <img 
              src={PrimaryImage} 
              alt="Kyle Mendoza - Primary" 
              className="about-page3-image about-page3-image-primary"
            />
            <img 
              src={HoverImage} 
              alt="Kyle Mendoza - Hover" 
              className="about-page3-image about-page3-image-hover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
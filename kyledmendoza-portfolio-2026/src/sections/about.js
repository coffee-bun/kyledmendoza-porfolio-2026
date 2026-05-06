import React, { useEffect } from "react";
import "../styles/About.css";
import Footer from "../components/footer";
// Import your images - adjust the paths based on your actual file structure
import PrimaryImage from "../assets/kyle-primary.jpg";
import HoverImage from "../assets/kyle-hover.jpg";
import SeleniumIcon from "../assets/selenium-icon.png";

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
    <>
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

      {/* About Page 4 - Experiences Section */}
      <div className="about-page4">
        <div className="about-page4-content">
          <span className="about-page4-subtitle">EXPERIENCES</span>
          <h2 className="about-page4-title">PROFESSIONAL EXPERIENCES</h2>
          <div className="about-page4-divider"></div>
          <p className="about-page4-description">
            Building skills through real-world experience.
          </p>
          
          {/* Experience Entry 1 */}
          <div className="experience-entry">
            <div className="experience-left">Team Leader</div>
            <div className="experience-middle">Boundless AI Inc.</div>
            <div className="experience-right">2025-2026</div>
          </div>
          
          <div className="experience-divider"></div>

          {/* Experience Entry 2 */}
          <div className="experience-entry">
            <div className="experience-left">Game Tester</div>
            <div className="experience-middle">Boundless AI Inc.</div>
            <div className="experience-right">2025-2026</div>
          </div>
          
          <div className="experience-divider"></div>

          {/* Experience Cards Container */}
          <div className="about-experience-cards-container">
            {/* Card 1 */}
            <div className="about-experience-card">
              <div className="about-card-content">
                <div className="about-card-icon">
                  <img src={SeleniumIcon} alt="Team Leader Icon" />
                </div>
                <h3 className="about-card-role">Team Leader</h3>
                <p className="about-card-company">Project Leadership Experience</p>
                <span className="about-card-year">2023 - 2024</span>
                <p className="about-card-description">
                  Led a team of 5 developers to successfully deliver AI-powered solutions.
                  <span className="about-card-more">
                    {" "}Managed project timelines, conducted code reviews, and mentored junior developers.
                    Implemented agile methodologies that improved team efficiency by 40%.
                  </span>
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="about-experience-card">
              <div className="about-card-content">
                <div className="about-card-icon">
                  <img src={SeleniumIcon} alt="Game Tester Icon" />
                </div>
                <h3 className="about-card-role">Game Tester</h3>
                <p className="about-card-company">Quality Assurance Experience</p>
                <span className="about-card-year">2023 - 2024</span>
                <p className="about-card-description">
                  Conducted comprehensive quality assurance testing for multiple game projects.
                  <span className="about-card-more">
                    {" "}Identified and documented over 200 bugs, performed regression testing, and
                    collaborated with developers to ensure smooth gameplay experiences.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Page 5 - Internship Experiences Section */}
      <div className="about-page5">
        <div className="about-page5-content">
          <span className="about-page5-subtitle">INTERNSHIP</span>
          <h2 className="about-page5-title">INTERNSHIP EXPERIENCES</h2>
          <div className="about-page5-divider"></div>
          <p className="about-page5-description">
            Where I've learned, contributed, and grown.
          </p>
        </div>
      </div>

      {/* Internship Experience Entry 1 */}
      <div className="internship-entry">
        <div className="internship-left">Front-End Developer</div>
        <div className="internship-middle">Software Research Group (SRG)</div>
        <div className="internship-right">2024-2025</div>
      </div>

      <div className="internship-divider"></div>

      {/* Internship Experience Entry 2 */}
      <div className="internship-entry">
        <div className="internship-left">Quality Assurance Tester</div>
        <div className="internship-middle">Software Research Group (SRG)</div>
        <div className="internship-right">2024-2025</div>
      </div>
      
      <div className="internship-divider"></div>

      <div className="internship-cards-container">
        {/* Card 1 */}
        <div className="internship-card">
          <div className="internship-card-content">
            <div className="internship-card-icon">
              <img src={SeleniumIcon} alt="Front-End Developer Icon" />
            </div>
            <h3 className="internship-card-role">Front-End Developer</h3>
            <p className="internship-card-company">Software Research Group (SRG)</p>
            <span className="internship-card-year">2024 - 2025</span>
            <p className="internship-card-description">
              Worked on developing responsive UI components using React.
              <span className="internship-card-more">
                {" "}Focused on improving user experience and optimizing performance.
              </span>
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="internship-card">
          <div className="internship-card-content">
            <div className="internship-card-icon">
              <img src={SeleniumIcon} alt="QA Tester Icon" />
            </div>
            <h3 className="internship-card-role">Quality Assurance Tester</h3>
            <p className="internship-card-company">Software Research Group (SRG)</p>
            <span className="internship-card-year">2024 - 2025</span>
            <p className="internship-card-description">
              Conducted manual and automated testing to ensure application stability.
              <span className="internship-card-more">
                {" "}Reported bugs and collaborated with developers for fixes.
              </span>
            </p>
          </div>
        </div>
      </div>

{/* About Page 6 - Capabilities & Strengths */}
<div className="about-page6">
  <div className="about-page6-content">
    <h2 className="about-page6-title">
      CAPABILITIES AND STRENGTHS
    </h2>
    <div className="about-page6-divider"></div>
  </div>
</div>

<div className="capabilities-cards-container">
  {/* Card 1 */}
  <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">UI/UX Design</h3>
    <p className="capability-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <span className="capability-more">
        {" "}Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </span>
    </p>
  </div>

  {/* Card 2 */}
  <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">Problem Solving</h3>
    <p className="capability-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <span className="capability-more">
        {" "}Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </span>
    </p>
  </div>

  {/* Card 3 */}
  <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">Team Collaboration</h3>
    <p className="capability-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <span className="capability-more">
        {" "}Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </span>
    </p>
  </div>
    <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">UI/UX Design</h3>
    <p className="capability-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <span className="capability-more">
        {" "}Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </span>
    </p>
  </div>
    <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">UI/UX Design</h3>
    <p className="capability-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <span className="capability-more">
        {" "}Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </span>
    </p>
  </div>
    <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">UI/UX Design</h3>
    <p className="capability-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <span className="capability-more">
        {" "}Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </span>
    </p>
  </div>
    <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">UI/UX Design</h3>
    <p className="capability-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <span className="capability-more">
        {" "}Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </span>
    </p>
  </div>
    <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">UI/UX Design</h3>
    <p className="capability-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <span className="capability-more">
        {" "}Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </span>
    </p>
  </div>
    <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">UI/UX Design</h3>
    <p className="capability-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <span className="capability-more">
        {" "}Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </span>
    </p>
  </div>
</div>

{/* Add bottom padding to push footer down without moving it */}
<div className="content-bottom-padding"></div>

{/* Footer */}
<Footer />
    </>
  );
}

export default About;
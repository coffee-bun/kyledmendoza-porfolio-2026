import React, { useEffect } from "react";
import "../styles/About.css";
import Footer from "../components/footer";
// Import your images - adjust the paths based on your actual file structure
import PrimaryImage from "../assets/kyle-primary.jpg";
import HoverImage from "../assets/kyle-hover.jpg";
import SeleniumIcon from "../assets/selenium-icon.png";
import LeaderImage from "../assets/leader-icon.png";
import TesterImage from "../assets/tester-icon.png";
import FrontImage from "../assets/frontend-icon.png";
import QAImage from "../assets/qa-icon.png";

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
            Front-End Developer | UI/UX Enthusiast | Graphic Designer | Quality Assurance Tester.
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
            <p>An aspiring IT professional with experience in <strong>Front-End Developer</strong> gained through academic projects and continuous self-practice.
           Passionate about creating responsive and user-friendly web interfaces while continuously improving skills in UI/UX design, web development, and building functional digital experiences. </p>
            
            <p>I’m also passionate about <strong>Web Designing </strong>< strong>Web Development </strong> especially in creating clean, responsive, and user-friendly interfaces.
            I believe great digital experiences are not only visually appealing but also functional and reliable.I pay close attention to details, carefully checking each feature and interaction to ensure everything works smoothly and meets a high standard of user experience.</p>
            
            <p>I’m also passionate about <strong>Quality Assurance Testing</strong>, with professional experience in Video Game Testing and hands-on experience in manual testing for systems and applications.
           I believe quality goes beyond simply creating a product — it’s about ensuring every feature works properly, smoothly, and meets user expectations. 
           I pay close attention to detail, carefully testing functionalities and user interactions to help deliver reliable and polished digital experiences.
           </p>
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
                  <img src={LeaderImage } alt="Team Leader Icon" />
                </div>
                <h3 className="about-card-role">Team Leader</h3>
                <p className="about-card-company">Team Leadership Experience</p>
                <span className="about-card-year">2025 - 2026</span>
                <p className="about-card-description">
                  Experienced in leading a team of Game Testers
                  <span className="about-card-more">
                    {" "}ensuring that projects meet quality standards by identifying and monitoring errors, defects, and gameplay issues.
                    Handled team coordination, progress monitoring, report management, and documentation to maintain organized workflows and efficient testing processes.
                    Worked closely with team members to ensure tasks were completed accurately and on time while helping deliver stable and polished game builds.
                  </span>
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="about-experience-card">
              <div className="about-card-content">
                <div className="about-card-icon">
                  <img src={TesterImage} alt="Game Tester Icon" />
                </div>
                <h3 className="about-card-role">Game Tester</h3>
                <p className="about-card-company">Quality Assurance Experience</p>
                <span className="about-card-year">2025 - 2026</span>
                <p className="about-card-description">
                  Has professional experience in Game Testing
                  <span className="about-card-more">
                    {" "}esponsible for identifying bugs, defects, and gameplay issues to ensure quality standards are met before submission to team leads.
                    Performed detailed manual testing, followed testing procedures, and documented issues accurately to help deliver stable and polished game builds.
                    Worked closely with the QA team to ensure smooth gameplay experience and reliable system performance.
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
              <img src={FrontImage} alt="Front-End Developer Icon" />
            </div>
            <h3 className="internship-card-role">Front-End Developer</h3>
            <p className="internship-card-company">Software Research Group (SRG)</p>
            <span className="internship-card-year">2024 - 2025</span>
            <p className="internship-card-description">
              Gained valuable industry experience during internship
              <span className="internship-card-more">
                {" "}at the Software Research Group (SRG), where I further developed my skills and knowledge in Front-End Development.
                Assisted in creating and improving user interface designs, worked on responsive web layouts, and gained hands-on experience in building user-friendly
                and functional web applications within a professional development environment.
              </span>
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="internship-card">
          <div className="internship-card-content">
            <div className="internship-card-icon">
              <img src={QAImage} alt="QA Tester Icon" />
            </div>
            <h3 className="internship-card-role">Quality Assurance Tester</h3>
            <p className="internship-card-company">Software Research Group (SRG)</p>
            <span className="internship-card-year">2024 - 2025</span>
            <p className="internship-card-description">
              Gained hands-on experience in Front-End Development during internship
              <span className="internship-card-more">
                {" "}Rat the Software Research Group (SRG), where I enhanced my skills in designing and developing responsive and user-friendly web interfaces.
                Assisted in creating UI layouts, improving website functionality, and applying modern design practices while working in a collaborative development environment.
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
    <h3 className="capability-title">Troubleshooting</h3>
    <p className="capability-description">
      including identifying and resolving common hardware, software, and system-related issues.
      <span className="capability-more">
        {" "}
        Familiar with diagnosing technical problems, performing basic maintenance, and providing practical solutions to ensure systems function properly and efficiently.
      </span>
    </p>
  </div>

  {/* Card 2 */}
  <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">Hardware Installation</h3>
    <p className="capability-description">
      Has hands-on experience in hardware installation
      <span className="capability-more">
        {" "}Uincluding setting up and configuring computer components and peripheral devices. Familiar with basic computer assembly, hardware replacement
        , cable management, and ensuring devices are properly installed and functioning correctly.
      </span>
    </p>
  </div>

  {/* Card 3 */}
  <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">Software Installation</h3>
    <p className="capability-description">
      Has experience in software installation and configuration
      <span className="capability-more">
        {" "}including setting up operating systems, productivity tools, and essential applications.
        Familiar with troubleshooting installation issues, updating software, and ensuring programs are properly configured for smooth and efficient system performance.
      </span>
    </p>
  </div>
    <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">HTML</h3>
    <p className="capability-description">
      Knowledgeable in using HTML for creating
      <span className="capability-more">
        {" "}and structuring web pages, with experience developing responsive and user-friendly website
        layouts through academic projects and continuous front-end development practice.
      </span>
    </p>
  </div>
    <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">CSS</h3>
    <p className="capability-description">
      Knowledgeable in using CSS to design and style
      <span className="capability-more">
        {" "}responsive web interfaces, with experience creating visually organized and user-friendly layouts. 
        Familiar with applying modern styling techniques to improve website appearance, responsiveness, and overall user experience.
      </span>
    </p>
  </div>
    <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">JavaScript</h3>
    <p className="capability-description">
      Knowledgeable in using JavaScript for creating interactive
      <span className="capability-more">
        {" "}and dynamic web functionalities. Experienced in applying basic to intermediate JavaScript
        concepts in academic projects and front-end development practice to improve user interaction and website functionality.
      </span>
    </p>
  </div>
    <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">React</h3>
    <p className="capability-description">
      Knowledgeable in using React for developing responsive
      <span className="capability-more">
        {" "}and component-based user interfaces. Experienced in building interactive front-end applications through academic projects and continuous self-practice,
        focusing on reusable components, smooth user experience, and modern web development practices.
      </span>
    </p>
  </div>
    <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">Bootstrap</h3>
    <p className="capability-description">
      Knowledgeable in using Bootstrap for developing
      <span className="capability-more">
        {" "}responsive and mobile-friendly web interfaces. Experienced in utilizing Bootstrap components,
        grid systems, and styling utilities to create clean, organized, and user-friendly website layouts efficiently.
      </span>
    </p>
  </div>
    <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">Wix</h3>
    <p className="capability-description">
      Experienced in using Wix for designing and developing simple,
      <span className="capability-more">
        {" "}responsive, and visually organized websites. Familiar with customizing website layouts, managing content,
        and creating user-friendly web pages suited for portfolios, business sites, and basic web presentations.
      </span>
    </p>
  </div>
      <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">Manual Testing</h3>
    <p className="capability-description">
      Knowledgeable in Manual Testing with experience in identifying bugs,
      <span className="capability-more">
        {" "}defects, and system issues through detailed testing procedures.
        Familiar with test case execution, functionality checking, and documenting issues to help ensure systems and applications perform smoothly and meet quality standards.
      </span>
    </p>
  </div>
      <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">Jira</h3>
    <p className="capability-description">
      Knowledgeable in using Jira for task management,
      <span className="capability-more">
        {" "}bug tracking, and project coordination. Experienced in monitoring project progress, organizing reports, documenting issues,
        and collaborating with team members within a structured workflow environment.
      </span>
    </p>
  </div>
      <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">Selenium</h3>
    <p className="capability-description">
      Knowledgeable in using Selenium for basic automated testing
      <span className="capability-more">
        {" "}responsive, and visually organized websites. Familiar with customizing website layouts, managing content,
        and creating user-friendly web pages suited for portfolios, business sites, and basic web presentations.
      </span>
    </p>
  </div>
      <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">Canva</h3>
    <p className="capability-description">
      Experienced in using Canva for creating visual content such as presentations,
      <span className="capability-more">
        {" "}social media graphics, posters, and simple UI design concepts. Familiar with
        designing clean and engaging layouts that support branding, communication, and digital content presentation.
      </span>
    </p>
  </div>
      <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">Figma</h3>
    <p className="capability-description">
      Experienced in using Figma for creating user interface designs,
      <span className="capability-more">
        {" "}wireframes, and responsive web layouts. Familiar with designing modern and user-friendly
        UI concepts, organizing design components, and collaborating on front-end and web design projects.
      </span>
    </p>
  </div>
      <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">Adobe Photoshop</h3>
    <p className="capability-description">
      Experienced in using Adobe Photoshop for basic photo editing,
      <span className="capability-more">
        {" "}graphic design, and digital content creation. Familiar with creating visual assets, editing images, and
        designing simple layouts for presentations, social media content, and web-related projects.
      </span>
    </p>
  </div>
        <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">Adobe Lightroom</h3>
    <p className="capability-description">
      Experienced in using Adobe Lightroom for photo enhancement,
      <span className="capability-more">
        {" "}color correction, and basic image editing. Familiar with improving image quality,
        organizing photo collections, and creating visually appealing edits for digital and creative projects.
      </span>
    </p>
  </div>
        <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">Capcut</h3>
    <p className="capability-description">
      Experienced in using CapCut for editing and creating
      <span className="capability-more">
        {" "}short-form video content, including transitions, effects, subtitles, and basic motion graphics.
        Familiar with producing engaging and visually organized video presentations for social media, academic, and creative projects.
      </span>
    </p>
  </div>
        <div className="capability-card">
    <div className="capability-icon">
      <img src={SeleniumIcon} alt="Capability Icon" />
    </div>
    <h3 className="capability-title">Filmora</h3>
    <p className="capability-description">
      Experienced in using Wondershare Filmora for creating and editing video content
      <span className="capability-more">
        {" "}with transitions, effects, audio adjustments, and text animations.
        Familiar with producing clean and engaging videos for presentations, social media content, and creative multimedia projects.
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
import React from "react";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/Home.css";
import Html from "../assets/html-icon.png";
import Css from "../assets/css-icon.png";
import JavaScript from "../assets/javascript-icon.png";
import Bootstrap from "../assets/bootstrap-icon.png";
import ReactIcon from "../assets/react-icon.png";
import WixIcon from "../assets/wix-icon.png";
import FlutterflowIcon from "../assets/flutterflow-icon.png";
import FigmaIcon from "../assets/figma-icon.png";
import CanvaIcon from "../assets/canva-icon.png";
import PhotoshopIcon from "../assets/photoshop-icon.png";
import LightroomIcon from "../assets/lightroom-icon.png";
import FilmoraIcon from "../assets/filmora-icon.png";
import DavinciIcon from "../assets/davinci-icon.png";
import CapcutIcon from "../assets/capcut-icon.png";
import WordIcon from "../assets/word-icon.png";
import ExcelIcon from "../assets/excel-icon.png";
import PowerpointIcon from "../assets/powerpoint-icon.png";
import OutlookIcon from "../assets/outlook-icon.png";
import JiraIcon from "../assets/jira-icon.png";
import MablIcon from "../assets/mabl-icon.png";
import SeleniumIcon from "../assets/selenium-icon.png";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  const getSlideWidth = () => 340; // Card width + margin

  const experiences = [
    {
      icon: JiraIcon,
      title: "Quality Assurance",
      desc: "Experienced in testing applications, identifying bugs, and ensuring high-quality user experiences through structured QA processes."
    },
    {
      icon: FigmaIcon,
      title: "Web Designing",
      desc: "Skilled in creating visually appealing and user-friendly interfaces using modern design tools and UI/UX principles."
    },
    {
      icon: ReactIcon,
      title: "Front-End Development",
      desc: "Building responsive and interactive websites using HTML, CSS, JavaScript, and modern frameworks like React."
    },
    {
      icon: Html,
      title: "Web Development",
      desc: "Strong foundation in building structured and optimized web pages using modern web technologies."
    },
    {
      icon: CanvaIcon,
      title: "Graphic Designing",
      desc: "Creating engaging and visually appealing graphics for branding, social media, and marketing."
    },
    {
      icon: CanvaIcon,
      title: "Graphic 2 Designing",
      desc: "Creating engaging and visually appealing graphics for branding, social media, and marketing."
    },
    {
      icon: CanvaIcon,
      title: "Graphic 3 Designing",
      desc: "Creating engaging and visually appealing graphics for branding, social media, and marketing."
    },
    {
      icon: CanvaIcon,
      title: "Graphic 4 Designing",
      desc: "Creating engaging and visually appealing graphics for branding, social media, and marketing."
    },
    {
      icon: CanvaIcon,
      title: "Graphic 5 Designing",
      desc: "Creating engaging and visually appealing graphics for branding, social media, and marketing."
    }
  ];

  const maxIndex = Math.max(0, experiences.length - visibleCards);

  // Get the appropriate client coordinate based on event type
  const getClientX = (e) => {
    if (e.touches) {
      return e.touches[0].clientX;
    }
    return e.clientX;
  };

  const handleDragStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setIsAnimating(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    const clientX = getClientX(e);
    setStartX(clientX);
    setCurrentX(clientX);
    setDragOffset(currentIndex * getSlideWidth());
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const clientX = getClientX(e);
    const deltaX = clientX - startX;
    let newOffset = dragOffset - deltaX;
    
    // Add resistance at boundaries for better UX
    const minOffset = 0;
    const maxOffset = maxIndex * getSlideWidth();
    
    if (newOffset < minOffset) {
      newOffset = minOffset + (newOffset - minOffset) * 0.3;
    } else if (newOffset > maxOffset) {
      newOffset = maxOffset + (newOffset - maxOffset) * 0.3;
    }
    
    setCurrentX(clientX);
    
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${newOffset}px)`;
      trackRef.current.style.transition = 'none';
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const deltaX = currentX - startX;
    const slideWidth = getSlideWidth();
    const dragThreshold = slideWidth * 0.3; // 30% of slide width
    
    let newIndex = currentIndex;
    
    if (Math.abs(deltaX) > dragThreshold) {
      if (deltaX < 0 && currentIndex < maxIndex) {
        newIndex = currentIndex + 1;
      } else if (deltaX > 0 && currentIndex > 0) {
        newIndex = currentIndex - 1;
      }
    }
    
    animateToIndex(newIndex);
  };

  const animateToIndex = (targetIndex) => {
    setIsAnimating(true);
    const startOffset = currentIndex * getSlideWidth();
    const targetOffset = targetIndex * getSlideWidth();
    const distance = targetOffset - startOffset;
    const startTime = performance.now();
    const duration = 400; // ms
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentOffset = startOffset + (distance * easeOutCubic);
      
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${currentOffset}px)`;
        trackRef.current.style.transition = 'none';
      }
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCurrentIndex(targetIndex);
        setIsAnimating(false);
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${targetOffset}px)`;
        }
      }
    };
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    animationRef.current = requestAnimationFrame(animate);
  };

  // Update visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 768) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    
    return () => {
      window.removeEventListener('resize', updateVisibleCards);
    };
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [visibleCards]);

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      <Navbar />

      <section className="page1-section" id="home">
        <div className="hero-content">
          <div className="hero-rating">
            ⭐ 4.9/5 Rating
          </div>
          <h1 className="hero-name">Kyle Mendoza</h1>
          <p className="hero-description">
            I'm Kyle Mendoza, your Creative Design partner helping businesses & startups 
            replace digital noise with strategic intent by building impactful visual 
            identities that turn browsers into believers.
          </p>
        </div>
      </section>

      <section className="page2-section">
        <div className="page2col1">
          <div className="tools-slider">
            <div className="tools-track">
              <div className="tool-icon"> <img src={WordIcon} alt="Word Icon" /></div>
              <div className="tool-icon"> <img src={ExcelIcon} alt="Excel Icon" /></div>
              <div className="tool-icon"> <img src={PowerpointIcon} alt="Powerpoint Icon" /></div>
              <div className="tool-icon"> <img src={OutlookIcon} alt="Outlook Icon" /></div>
              <div className="tool-icon"> <img src={Html} alt="Html Icon" /></div>
              <div className="tool-icon"> <img src={Css} alt="Css Icon" /></div>
              <div className="tool-icon"> <img src={JavaScript} alt="JavaScript Icon" /></div>
              <div className="tool-icon"> <img src={Bootstrap} alt="Bootstrap Icon" /></div>
              <div className="tool-icon"> <img src={ReactIcon} alt="React Icon" /></div>
              <div className="tool-icon"> <img src={WixIcon} alt="Wix Icon" /></div>
              <div className="tool-icon"> <img src={FlutterflowIcon} alt="Flutterflow Icon" /></div>
              <div className="tool-icon"> <img src={FigmaIcon} alt="Figma Icon" /></div>
              <div className="tool-icon"> <img src={CanvaIcon} alt="Canva Icon" /></div>
              <div className="tool-icon"> <img src={PhotoshopIcon} alt="Photoshop Icon" /></div>
              <div className="tool-icon"> <img src={LightroomIcon} alt="Lightroom Icon" /></div>
              <div className="tool-icon"> <img src={FilmoraIcon} alt="Filmora Icon" /></div>
              <div className="tool-icon"> <img src={DavinciIcon} alt="Davinci Icon" /></div>
              <div className="tool-icon"> <img src={CapcutIcon} alt="Capcut Icon" /></div>
              <div className="tool-icon"> <img src={JiraIcon} alt="Jira Icon" /></div>
              <div className="tool-icon"> <img src={MablIcon} alt="Mabl Icon" /></div>
              <div className="tool-icon"> <img src={SeleniumIcon} alt="Selenium Icon" /></div>
            </div>
          </div>
        </div>

        <div className="page2col2">
          <div className="overview-container">
            <h2 className="overview-title">Overview</h2>
            <p className="overview-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="overview-tags">
              <span className="tag">Creative</span>
              <span className="tag">Collaborative</span>
              <span className="tag">Hardworking</span>
            </div>
          </div>
        </div>
        
        <div className="experience-wrapper">
          <div 
            className="experience-slider"
            ref={sliderRef}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            onTouchCancel={handleDragEnd}
            style={{ 
              cursor: isDragging ? 'grabbing' : 'grab',
              touchAction: 'none' // Prevents scrolling while swiping
            }}
          >
            <div
              className="experience-track"
              ref={trackRef}
              style={{
                transform: `translateX(-${currentIndex * getSlideWidth()}px)`,
                transition: isAnimating ? 'none' : 'transform 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)'
              }}
            >
              {experiences.map((exp, index) => (
                <div className="experience-card" key={index}>
                  <img src={exp.icon} alt="icon" className="card-icon" />
                  <h3>{exp.title}</h3>
                  <p>{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Optional: Add pagination dots for mobile */}
          <div className="pagination-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`pagination-dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => animateToIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="page3-section" id="education">
        <h2>Page 3</h2>
      </section>

      <section className="page4-section" id="projects">
        <h2>Page 4</h2>
      </section>

      <Footer />
    </>
  );
}

export default Home;
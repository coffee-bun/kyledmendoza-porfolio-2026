import React from "react";
import { useRef } from "react";
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
      I’m Kyle Mendoza, your Creative Design partner helping businesses & startups 
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

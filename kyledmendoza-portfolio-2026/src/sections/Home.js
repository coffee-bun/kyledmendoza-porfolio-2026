import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/Home.css";
import Html from "../assets/html-icon.png";
import Css from "../assets/css-icon.png";
import JavaScript from "../assets/javascript-icon.png";
import Bootstrap from "../assets/bootstrap-icon.png";
import ReactIcon from "../assets/react-icon.png";

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

<div className="tool-icon"> <img src={Html} alt="Html Icon" /></div>
<div className="tool-icon"> <img src={Css} alt="Css Icon" /></div>
<div className="tool-icon"> <img src={JavaScript} alt="JavaScript Icon" /></div>
<div className="tool-icon"> <img src={Bootstrap} alt="Bootstrap Icon" /></div>
<div className="tool-icon"> <img src={ReactIcon} alt="React Icon" /></div>

<div className="tool-icon"> <img src={Html} alt="Html Icon" /></div>
<div className="tool-icon"> <img src={Css} alt="Css Icon" /></div>
<div className="tool-icon"> <img src={JavaScript} alt="JavaScript Icon" /></div>
<div className="tool-icon"> <img src={JavaScript} alt="JavaScript Icon" /></div>

    </div>
  </div>
</div>

        <div className="page2col2">
          <h2>Page2col2</h2>
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
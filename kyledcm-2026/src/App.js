import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./sections/Home";
import About from "./sections/About";
import Education from "./sections/Education";
import Projects from "./sections/Project";
import Contact from "./sections/Contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
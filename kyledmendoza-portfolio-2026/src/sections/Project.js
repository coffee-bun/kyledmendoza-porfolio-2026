
import React, { useState } from "react";
import Footer from "../components/footer";
import "../styles/Project.css";
import SampleImage from "../assets/sample-image.jpg";
import SampleImage2 from "../assets/portfolio1.png";
import SampleImage3 from "../assets/portfolio2.png";


function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  // Track which image in the gallery is currently active
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectsData = [
    {
      id: 1,
      title: "My First Project",
      image: SampleImage,
      gallery: [ SampleImage, SampleImage2, SampleImage3,],
      description: "This is my second project description.",
      link: "#"
    },
    {
      id: 2,
      title: "My Second Project",
      image: SampleImage,
      gallery: [ SampleImage, SampleImage2, SampleImage3,],
      description: "This is my second project description.",
      link: "#"
    },
      {
      id: 3,
      title: "My Third Project",
      image: SampleImage,
      gallery: [ SampleImage, SampleImage2, SampleImage3,],
      description: "This is my second project description.",
      link: "#"
    }
  ];

  // Open modal and reset index to 0
  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => setSelectedProject(null);

  // Navigation Logic
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className="prjcts-container">
      <div className="projects-layout">
        {/* Left Fixed Sidebar */}
        <aside className="left-sidebar">
          <div className="sidebar-content">
            <h2 className="sidebar-title">What I’ve Been Building</h2>
            <div className="get-in-touch">
              <p className="proj-description">
                I'm always open to discussing new projects and creative ideas.
              </p>
              <button className="contact-btn">Contact Me</button>
            </div>
          </div>
        </aside>
<main className="right-content">
          {projectsData.map((project) => (
            <div className="projects-main-container" key={project.id}>
              <div className="project-display">
                <img src={project.image} alt={project.title} className="project-image" />
                <h2 className="prjcts-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <button className="view-prjct-btn" onClick={() => openModal(project)}>
                  View Project
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>

      {/* CAROUSEL MODAL */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>&times;</button>
            
            <div className="carousel-container">
              {/* Previous Button */}
              <button className="nav-btn prev" onClick={prevImage}>&#10094;</button>
              
              <div className="image-wrapper">
                <img 
                  src={selectedProject.gallery[currentImageIndex]} 
                  alt="Project slide" 
                  className="modal-img-single" 
                />
                <p className="image-counter">
                  {currentImageIndex + 1} / {selectedProject.gallery.length}
                </p>
              </div>

              {/* Next Button */}
              <button className="nav-btn next" onClick={nextImage}>&#10095;</button>
            </div>
            
            <h3 className="modal-project-title">{selectedProject.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
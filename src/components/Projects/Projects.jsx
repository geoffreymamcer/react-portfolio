import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured online store with product listings, cart functionality, and secure checkout.",
    tags: ["React", "Firebase"],
    image: "project1",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity application for organizing tasks with drag-and-drop functionality and team collaboration.",
    tags: ["React", "Firebase"],
    image: "project2",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Real-time weather information with forecasts, maps, and historical data visualization.",
    tags: ["React", "HTML", "CSS"],
    image: "project3",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing creative work and professional information.",
    tags: ["React", "Firebase"],
    image: "project4",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <div className={`image-placeholder ${project.image}`}></div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  View Demo
                </a>
                <a href="#" className="project-link">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

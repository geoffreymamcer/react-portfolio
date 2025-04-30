import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <div className="image-wrapper">
            <div className="image-placeholder"></div>
          </div>
        </div>
        <div className="about-text">
          <h3>Hello, Mark Geoffrey</h3>
          <p>
            I'm a passionate frontend developer with expertise in React,
            JavaScript, and modern CSS. I love creating beautiful, responsive,
            and user-friendly web applications.
          </p>
          <p>
            While still completing my studies, I've developed my skills through
            academic projects, personal coding challenges, and open-source
            contributions. I'm passionate about building web applications and
            continuously expanding my knowledge in frontend development.
          </p>
          <div className="about-details">
            <div className="detail-item">
              <span className="detail-label">Name:</span>
              <span className="detail-value">Mark Geoffrey A. Batocabe</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">
                batocabemarkgeoffrey@gmail.com
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">From:</span>
              <span className="detail-value">
                Pagbilao, Quezon Province, Philippines
              </span>
            </div>
          </div>
          <a href="#contact" className="cta-button">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Firebase", level: 75 },
  { name: "Git", level: 85 },
  { name: "UI/UX Design", level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        <div className="skills-content">
          <p className="skills-intro">
            I've worked with a variety of technologies in the web development
            world. Here's a quick overview of my main technical skills:
          </p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-illustration">
          <div className="illustration-placeholder"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

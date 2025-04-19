import React from 'react';
import { FaHandshake } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-hero">
      <div className="about-card">
        <div className="about-left">
        
          <h1 className="name">hi! 👋</h1>
           <h1 className="name"> I'm Abhishek Pandey, </h1>
          <p className="intro">
          A Cybersecurity enthusiast, dedicated to protecting systems, identifying vulnerabilities, and ensuring secure digital environments     </p>
          <div className="button-container">
            <button className="btn">Get in Touch</button>
            <button className="btn">Download Resume</button>
          </div>
        </div>
      
        
        <div className="about-right">
          <img
            src="https://www.enji.dev/_next/image?url=%2Fassets%2Fimages%2Fme.png&w=1080&q=100" // Replace with your image URL
            alt="Abhishek"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

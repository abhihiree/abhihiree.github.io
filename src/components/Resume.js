import React from "react";
import Index from './Index';  
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Tools from "./TechnicalTools";
import Certifications from './Certifications'; 
import Projects from './Projects'; 
import Publications from './Publications'; 
import Achievements from './Achievements'; 
import Interests from './Interests'; 
import Languages from './Languages';  
import Footer from './footer';


const Resume = () => {
  return (
    <div className="resume-container">
      <Index />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Tools />
      <Certifications />
      <Projects />
      <Publications />
      <Achievements />
      <Interests />
      <Languages />
      <Footer />
    </div>
  );
};

export default Resume;

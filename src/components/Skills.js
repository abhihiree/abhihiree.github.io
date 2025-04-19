import React from "react";
import {
  FaBug, FaNetworkWired, FaShieldAlt, FaSearch, FaMobileAlt,
  FaDatabase, FaEnvelopeOpenText, FaLaptopCode, FaGlobe,
  FaFingerprint, FaEye, FaCodeBranch
} from "react-icons/fa";
import { SiPostman, SiVirustotal, SiPowerbi } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Phishing", icon: <FaEnvelopeOpenText /> },
    { name: "Log Analysis", icon: <FaSearch /> },
    { name: "Mobile Forensics", icon: <FaMobileAlt /> },
    { name: "Web Application Testing", icon: <FaBug /> },
    { name: "Email Analysis", icon: <FaEnvelopeOpenText /> },
    { name: "Event Analysis", icon: <FaEye /> },
    { name: "Computer Forensics", icon: <FaFingerprint /> },
    { name: "Mobile Application Testing", icon: <FaMobileAlt /> },
    { name: "Database Analysis", icon: <FaDatabase /> },
    { name: "Malware Analysis", icon: <SiVirustotal /> },
    { name: "Social Media Analysis", icon: <FaGlobe /> },
    { name: "Thick Client Application Testing", icon: <FaLaptopCode /> },
    { name: "API Testing", icon: <SiPostman /> },
    { name: "Network Testing", icon: <FaNetworkWired /> },
    { name: "Vulnerability Assessment", icon: <FaShieldAlt /> },
    { name: "Open-Source Intelligence (OSINT)", icon: <FaCodeBranch /> }
  ];

  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-badge">
            <span className="icon">{skill.icon}</span>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

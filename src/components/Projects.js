import React from 'react';
import { FaNewspaper, FaShieldAlt, FaMobileAlt, FaRobot } from 'react-icons/fa'; // Import desired icons

const Projects = () => {
  const projects = [
    {
      title: 'SecureAlert: Integrating Drowsiness Detection for Enhanced Cybersecurity',
      period: '08/2023 – 05/2024',
      description:
        'SecureAlert transforms cybersecurity with its seamless integration of cutting-edge drowsiness detection technology. This innovative feature heightens security awareness during crucial operations, effectively reducing the risk of human error and fortifying overall cybersecurity protocols.',
      icon: <FaShieldAlt />, // Use FaShieldAlt icon for this project
    },
    {
      title: 'Sign Language Recognition',
      period: '01/2022 – 09/2022',
      description:
        'This project leverages automatic sign language recognition to enhance cybersecurity accessibility. It uses advanced algorithms to interpret hand gestures, ensuring secure communication for all users, including the deaf and individuals with autism. Powered by TensorFlow and OpenCV in Python, it embodies technology integration for inclusive cybersecurity solutions.',
      icon: <FaNewspaper />, // Use FaNewspaper icon for this project
    },
    {
      title: 'Monitor App',
      period: '03/2022 – 07/2022',
      description:
        'This application scans the system to identify weak parts and monitors the logs of a website and an Android phone. It identifies the IP address and unlawful behavior on the system, and stores all information in an encrypted format.',
      icon: <FaMobileAlt />, // Use FaMobileAlt icon for this project
    },
    {
      title: 'Chat Bot App',
      period: '09/2019 – 01/2020',
      description:
        'This program allows users to quickly ask questions and receive answers on cyber-crime and the latest hacks in the cyber world, available 24/7 for free.',
      icon: <FaRobot />, // Use FaRobot icon for this project
    },
  ];

  return (
    <section className="projects-sectin">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-header">
              {/* Display the icon dynamically */}
              <div className="project-icon">{project.icon}</div>
              {/* Display the title inline */}
              <div className="project-info">
                <h3>{project.title}</h3>
              </div>
              {/* Display the period (duration) on the right side */}
              <div className="project-period">
                <strong>{project.period}</strong>
              </div>
            </div>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { FaBook, FaLink } from 'react-icons/fa';

const Publications = () => {
  const publications = [
    {
      title: 'The Evolving Landscape of Cyber Crime: An Examination of Current Issues and Emerging Threats',
      date: '04/2024',
      url: 'https://matjournals.net/engineering/index.php/JFIHC/article/view/308',
      description: 'Cybercrime is a growing global issue, with criminals exploiting technological advancements. This paper explores trends like ransomware, data breaches, AI-driven attacks, and IoT vulnerabilities. It stresses the need for laws, international cooperation, and proactive cybersecurity. Recommendations include raising awareness, advanced authentication, data encryption, and continuous monitoring to enhance digital security.',
      icon: <FaBook />,
    },
    {
      title: 'Sign Language Recognition for Dumb & Deaf People Using Python, OpenCV & Tensor Flow',
      date: '05/2024',
      url: 'https://matjournals.net/engineering/index.php/JoSCCI/article/view/306',
      description: 'This study develops an automatic sign language recognition system to aid communication with the deaf and individuals with autism. Using a webcam and advanced algorithms, the system captures and processes hand gestures, identifies signs, and displays them as text. Implemented with TensorFlow and OpenCV in Python, it also provides audio messages for the recognized signs.',
      icon: <FaBook />,
    },
  ];

  return (
    <section className="publications-secion">
      <h2>Publications</h2>
      <div className="publications-list">
        {publications.map((publication, index) => (
          <div key={index} className="publication-item">
            <span className="publication-icon">{publication.icon}</span>
            <div className="publication-details">
              <h3>{publication.title}</h3>
              <p className="publication-date">{publication.date}</p>
              <p className="publication-description">{publication.description}</p>
              <a href={publication.url} target="_blank" rel="noopener noreferrer" className="publication-link">
                <FaLink /> Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;

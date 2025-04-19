import React from 'react';
import { FaCertificate } from 'react-icons/fa';  // Icon for certifications

const Certifications = () => {
  const certifications = [
    { name: 'Ethical Hacking Essentials (EHE)' },
    { name: 'Digital Forensics Essentials (DFE)' },
    { name: 'Start Kali Linux and Penetration Testing' },
    { name: 'Personality Development and Interview Skills' },
    { name: 'Cyber Security for Leadership' },
    { name: 'KLiC Advanced Excel Certificate' },
    { name: 'The Complete Ethical Hacking Course' },
    { name: 'Certified Red Team Professional (Pursuing)' }
  ];

  return (
    <section className="certifications-secion">
      <h2>Certifications</h2>
      <ul className="certifications-list">
        {certifications.map((cert, index) => (
          <li key={index} className="certification-item">
            <FaCertificate className="cert-icon" />
            <span className="certification-name">{cert.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;

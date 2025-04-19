import React from 'react';
import { FaGlobe } from 'react-icons/fa'; // Using a globe icon from react-icons

const Languages = () => {
  const languages = [
    { name: 'English', proficiency: 'Full Professional Proficiency', icon: <FaGlobe /> },
    { name: 'Hindi', proficiency: 'Full Professional Proficiency', icon: <FaGlobe /> },
  ];

  return (
    <section className="languages-secton">
      <h2>Languages</h2>
      <div className="languages-list">
        {languages.map((language, index) => (
          <div key={index} className="language-card">
            <div className="language-item">
              <div className="language-icon">{language.icon}</div> {/* Globe icon */}
              <p className="language-name">{language.name}</p>
              <p className="language-proficiency">{language.proficiency}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;

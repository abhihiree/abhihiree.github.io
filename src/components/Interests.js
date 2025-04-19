import React from 'react';
import { FaChess, FaMusic, FaGlobe, FaNewspaper, FaBook, FaLaptopCode, FaSearch, FaTv } from 'react-icons/fa'; // Updated import to include FaTv

const Interests = () => {
  const interests = [
    { name: 'Chess', icon: <FaChess /> },
    { name: 'Watching', icon: <FaTv /> },  // Alternate icon: FaTv for Watching
    { name: 'Reading', icon: <FaBook /> },
    { name: 'Technology News', icon: <FaNewspaper /> },
    { name: 'Listening', icon: <FaMusic /> },
    { name: 'Traveling', icon: <FaGlobe /> },
    { name: 'Googling', icon: <FaSearch /> },
    { name: 'Cyber Security', icon: <FaLaptopCode /> },
  ];

  return (
    <section className="interests-secion">
      <h2>Interests</h2>
      <div className="interests-list">
        {interests.map((interest, index) => (
          <div key={index} className="interest-item">
            <span className="interest-icon">{interest.icon}</span>
            <p className="interest-name">{interest.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests;

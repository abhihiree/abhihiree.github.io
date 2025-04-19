import React from 'react';
import { FaAward, FaTrophy } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      title: 'Appreciation Letter from Maharashtra Cyber for Investigation on Multiple Cases',
      date: '08/2020 – 08/2022',
      description: 'Received recognition for contributing significantly to the investigation and resolution of multiple cybercrime cases, enhancing the security and digital safety of Maharashtra.',
      icon: <FaAward />,
    },
    {
      title: 'CyberXchange Pvt. Ltd. Letter of Appreciation for Discovering Vulnerabilities on Several Websites',
      date: '12/2021 – 04/2022',
      description: 'Acknowledged for identifying critical vulnerabilities on various websites, improving the security posture of online platforms and preventing potential exploits.',
      icon: <FaTrophy />,
    },
  ];

  return (
    <section className="achievements-secion">
      <h2>Achievements</h2>
      <div className="achievements-list">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-item">
            <span className="achievement-icon">{achievement.icon}</span>
            <div className="achievement-details">
              <h3>{achievement.title}</h3>
              <p className="achievement-date">{achievement.date}</p>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

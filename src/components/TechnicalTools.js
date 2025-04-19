import React from 'react';
import { FaLinux, FaWindows, FaNetworkWired, FaBug, FaDatabase, FaShieldAlt, FaSpider, FaTerminal, FaTools, FaWifi } from 'react-icons/fa';
import { SiBurpsuite, SiWireshark, SiNessus } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

const Tools = () => {
  const tools = [
    { name: 'Burp Suite', icon: <SiBurpsuite /> },
    { name: 'Nmap', icon: <FaNetworkWired /> },  // Using FaNetworkWired as an alternative
    { name: 'Nipper', icon: <FaTools /> },
    { name: 'SqlMap', icon: <TbSql /> },
    { name: 'Invicti', icon: <FaShieldAlt /> },
    { name: 'UFED', icon: <FaTerminal /> },
    { name: 'Dorking', icon: <FaSpider /> },
    { name: 'Encase', icon: <FaBug /> },
    { name: 'Metasploit', icon: <FaShieldAlt /> },
    { name: 'Accunetix', icon: <FaBug /> },
    { name: 'Linux', icon: <FaLinux /> },
    { name: 'Windows', icon: <FaWindows /> },
    { name: 'Passware Kit', icon: <FaTools /> },
    { name: 'The Harvester', icon: <FaSpider /> },
    { name: 'Tenable Nessus', icon: <FaDatabase /> },
    { name: 'Wireshark', icon: <SiWireshark /> },
  ];

  return (
    <section className="skills-section">
      <h2>Tools</h2>
      <div className="skills-grid">
        {tools.map((tool, index) => (
          <div key={index} className="skill-badge">
            <span className="icon">{tool.icon}</span>
            {tool.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;

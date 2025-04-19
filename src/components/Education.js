import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Post Graduation in M.C.A.",
      institution: "Dr. J.J. Magdum College of Engineering",
      location: "Jaysinghpur, Kolhapur, Maharashtra, India",
      duration: "07/2023 – 04/2024",
      score: "83.5%",
      url: "https://jjmcoe.ac.in/"
    },
    {
      degree: "Graduation in B.Sc. Info. Tech.",
      institution: "Changu Kana Thakur College",
      location: "New Panvel, Maharashtra, India",
      duration: "07/2017 – 02/2020",
      score: "69.5%",
      url: "https://www.cktcollege.in/"
    },
    {
      degree: "College in H.S.C.",
      institution: "C G IP Chhajjopatti",
      location: "Azamgarh, Uttar Pradesh, India",
      duration: "07/2015 – 04/2017",
      score: "65.5%",
      url: "#" // Replace with actual URL if available
    },
    {
      degree: "School in S.S.C.",
      institution: "Govt's Queens Inter College",
      location: "Varanasi, Uttar Pradesh, India",
      duration: "07/2013 – 04/2014",
      score: "71.5%",
      url: "#" // Replace with actual URL if available
    },
  ];

  return (
    <section className="education-section">
      <h2>
        Education
      </h2>
      {educationData.map((edu, index) => (
        <div key={index} className="education-item">
          <div className="education-degree">{edu.degree}</div>
          
          <div className="education-institution-location">
            <a 
              className="education-institution"
              href={edu.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {edu.institution}
            </a>
            <div className="education-duration">{edu.duration}</div>
          </div>
          
          <div className="education-duration-score">
            <div className="education-location">{edu.location}</div>
            <div className="education-score">{edu.score}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;

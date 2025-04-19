import React from "react";

// Reusable Experience Item Component
const ExperienceItem = ({ title, company, location, duration, responsibilities, websiteUrl, logoUrl }) => (
  <div className="experience-item">
    <div className="experience-header">
      <h3 className="experience-title">{title}</h3>
      <p className="experience-location">{location}</p>
    </div>
    <div className="experience-meta">
      <div className="company-name">
        {websiteUrl ? (
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="company-link">
            <img
              src={logoUrl}
              alt="Website Icon"
              className="website-icon"
            />
            {company}
          </a>
        ) : (
          <span>{company}</span>
        )}
      </div>
      <p className="duration">{duration}</p>
    </div>
    <ul>
      {responsibilities.map((responsibility, index) => (
        <li key={index}>{responsibility}</li>
      ))}
    </ul>
  </div>
);

const Experience = () => (
  <section>
      <h2>
     Experience
    </h2>

    {/* Experience Item 1 */}
    <ExperienceItem
      title="Associate Security Engineer"
      company="Eviden India Pvt. Ltd."
      location="Navi Mumbai, MH"
      duration="2024 - Present"
      responsibilities={[
        "Conducted comprehensive penetration testing on mobile and web applications across Android and iOS platforms, identifying and exploiting critical vulnerabilities in real-world environments.",
        "Delivered detailed vulnerability assessments and network security evaluations, providing clear, actionable recommendations for remediation and risk mitigation to improve security posture.",
        "Collaborated closely with banking clients, conducting on-site security assessments to address specific security concerns, ensuring compliance with industry regulations, and enhancing security measures.",
        "Assessed vulnerability impact and risk through thorough risk analysis, helping prioritize remediation efforts based on potential business impact.",
        "Thoroughly documented pen testing activities, including evidence of successful exploits and comprehensive logs of all tests performed, providing full transparency and auditability.",
        "Demonstrated proficiency in identifying and mitigating application-level vulnerabilities such as XSS, SQL Injection, CSRF, authentication bypass, weak cryptography, and broken authentication, ensuring secure software deployment and client protection."
      ]}
      websiteUrl="https://www.eviden.com"
      logoUrl="https://atos.net/content/assets/global-images/atos-logo-blue-2023.svg"
    />

    {/* Experience Item 2 */}
    <ExperienceItem
      title="Cyber Security Analyst"
      company="Audix Technology Pvt. Ltd."
      location="Thane, MH"
      duration="2023 - 2024"
      responsibilities={[
        "Led application penetration testing on 150+ business applications, identifying vulnerabilities and providing mitigation strategies to strengthen overall security posture.",
        "Performed in-depth security testing across a variety of testing approaches including gray box, black box, and white box methodologies to identify weaknesses and vulnerabilities at different levels of access.",
        "Collaborated with cross-functional teams, including development and operations, to conduct vulnerability scans and ensure the timely remediation of identified security risks.",
        "Tested applications for vulnerabilities prior to production deployment, reducing the risk of security breaches and ensuring secure software release.",
        "Authored detailed reports on findings from penetration tests and security investigations, documenting vulnerabilities, suspicious activities, and recommendations for improving defenses.",
        "Conducted comprehensive vulnerability assessments on various platforms, including web applications, mobile applications, and thick clients, to identify and address potential security gaps.",
        "Regularly conducted penetration tests and vulnerability assessments, identifying and mitigating critical vulnerabilities to prevent potential exploitation and enhance system integrity."
      ]}
      websiteUrl="https://www.audix.co.in"
      logoUrl="https://www.audixindia.in/Audix/images/audix_color_logo.png"
    />

    {/* Experience Item 3 */}
    <ExperienceItem
      title="Cyber Security Analyst"
      company="Maharashtra Cyber Cell"
      location="Mumbai, MH"
      duration="2020 - 2022"
      responsibilities={[
        "Developed and managed programs to streamline the preparation of detailed reports and case documentation related to cybercrime investigations.",
        "Investigated and analyzed a variety of cybercrime cases, including extortion, phishing attacks, ransomware incidents, and other cyber threats to identify attack vectors and prevent future occurrences.",
        "Conducted in-depth security incident investigations, analyzing log files from multiple sources to determine the root cause of security breaches and mitigate their impact.",
        "Provided technical guidance to internal teams on data security best practices, ensuring compliance with industry regulations and enhancing overall organizational security posture.",
        "Stayed informed of the latest cyber threats and emerging attack techniques by attending seminars, conferences, and staying current with industry publications.",
        "Played an integral role in a successful operation that led to the shutdown of THOP TV, a large-scale illicit peer-to-peer streaming network, contributing to cybercrime prevention."
      ]}
      websiteUrl="https://www.mahacitizen.com"
      logoUrl="https://mhcyber.gov.in/documents/d/guest/mc-logo-png"
    />
  </section>
);

export default Experience;

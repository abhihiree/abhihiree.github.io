import React from "react";

const Header = () => (
  <header className="resume-header">
    <h1>Abhishek Pandey</h1>
    <div className="contact-bar">
      <a href="tel:+9198573023708" className="contact-link">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/685/685542.png" 
          alt="Phone Icon" 
          className="contact-icon"
        />
        91-8573023708
      </a>
      <span className="separator">|</span>
      <a href="mailto:Hiree.abhishek@gmail.com" className="contact-link">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/561/561127.png" 
          alt="Email Icon" 
          className="contact-icon"
        />
        Hiree.abhishek@gmail.com
      </a>
      <span className="separator">|</span>
      <span className="location">Uttar Pradesh, India</span>
      <span className="separator">|</span>
      <a
        href="https://www.linkedin.com/in/abhipandey-hb"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="LinkedIn Icon"
          className="contact-icon"
        />
        abhipandey-hb
      </a>
      <span className="separator">|</span>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="GitHub Icon"
          className="contact-icon"
        />
       Abhipandey
      </a>
       <span className="separator">|</span>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="GitHub Icon"
          className="contact-icon"
        />
       abhishekpandey.com
      </a>
    </div>
  </header>
);

export default Header;

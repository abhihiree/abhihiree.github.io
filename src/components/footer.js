import React from "react";

const Footer = () => (
  <footer className="get-in-touch">
    <h2 className="footer-title">Get in Touch</h2>

    
    <div className="footer-contact">
      <a href="mailto:Hiree.abhishek@gmail.com" className="footer-link">
        📧 Hiree.abhishek@gmail.com
      </a>
      <a href="tel:+9198573023708" className="footer-link">
        📞 +91-8573023708
      </a>
      <a href="https://linkedin.com/in/hiree.abhishek" target="_blank" rel="noreferrer" className="footer-link">
        🔗 LinkedIn
      </a>
      <a href="https://github.com/abhihiree" target="_blank" rel="noreferrer" className="footer-link">
        💻 GitHub
      </a>
      <a href="https://abhihiree.github.io/" target="_blank" rel="noreferrer" className="footer-link">
        🌐 Portfolio Website
      </a>
    </div>

    <p className="footer-credit">
      © {new Date().getFullYear()} Abhishek Pandey • Built with 💙 using React
    </p>
  </footer>
);

export default Footer;

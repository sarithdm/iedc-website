import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img src="/path/to/logo.png" alt="IEDC Logo" className="footer-logo" />
        <p>Address: 123 Main St, City, Country</p>
        <p>Email: info@iedc.com</p>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/about.html">About Us</a></li>
          <li><a href="/team.html">Team</a></li>
          <li><a href="/events.html">Events</a></li>
          <li><a href="/startups.html">Startups</a></li>
          <li><a href="/communities.html">Communities</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact Info</h4>
        <div>
          <h5>Contact Nodal Officer</h5>
          <p>Name: John Doe</p>
          <p>Phone: +123456789</p>
          <p>Email: nodal@iedc.com</p>
        </div>
        <div>
          <h5>Contact CEO</h5>
          <p>Name: Jane Smith</p>
          <p>Phone: +987654321</p>
          <p>Email: ceo@iedc.com</p>
        </div>
      </div>
      <div className="footer-section">
        <h4>Partners</h4>
        <img src="/path/to/partner1.png" alt="Partner 1" className="partner-logo" />
        <img src="/path/to/partner2.png" alt="Partner 2" className="partner-logo" />
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 IEDC. All rights reserved.</p>
        <p>Contact Webmaster: webmaster@iedc.com</p>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="home-header">
      <div className="banner">
        <img src="./img/IEDCLBSLogoColorWhiteText.webp" alt="IEDC Logo" className="logo" />
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/startups">Startups</a></li>
            <li><a href="/communities">Communities</a></li>
          </ul>
        </nav>
        <div className="banner-text">
          <h1>Welcome to IEDC LBSCEK</h1>
          <h2>Think. Create. Inspire.</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
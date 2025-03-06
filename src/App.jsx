import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Highlights from './components/Highlights';
import Team from './components/Team';
import Footer from './components/Footer';
import { FaBars, FaTimes } from 'react-icons/fa';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-blue-900 bg-opacity-90'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Text */}
            <a href="#" className="flex items-center space-x-3 pl-4">
              <img 
                src="./img/IEDCLBSLogoColorWhiteText.webp" 
                alt="IEDC LBSCEK Logo" 
                className="h-10 w-auto"
              />
              <span className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-blue-900' : 'text-white'
              }`}>
                IEDC LBSCEK
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 pr-4">
              <a href="#about" className={`transition-colors ${
                isScrolled ? 'text-blue-900 hover:text-blue-700' : 'text-white hover:text-blue-200'
              }`}>About</a>
              <a href="#events" className={`transition-colors ${
                isScrolled ? 'text-blue-900 hover:text-blue-700' : 'text-white hover:text-blue-200'
              }`}>Events</a>
              <a href="#highlights" className={`transition-colors ${
                isScrolled ? 'text-blue-900 hover:text-blue-700' : 'text-white hover:text-blue-200'
              }`}>Highlights</a>
              <a href="#team" className={`transition-colors ${
                isScrolled ? 'text-blue-900 hover:text-blue-700' : 'text-white hover:text-blue-200'
              }`}>Team</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden transition-colors ${
                isScrolled ? 'text-blue-900' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-900 bg-opacity-90 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="text-white hover:text-blue-200 transition-colors px-4">About</a>
                <a href="#events" className="text-white hover:text-blue-200 transition-colors px-4">Events</a>
                <a href="#highlights" className="text-white hover:text-blue-200 transition-colors px-4">Highlights</a>
                <a href="#team" className="text-white hover:text-blue-200 transition-colors px-4">Team</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Events />
        <Highlights />
        <Team />
      </main>

      <Footer />
    </div>
  );
}

export default App; 
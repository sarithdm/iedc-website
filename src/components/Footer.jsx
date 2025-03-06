import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">IEDC LBSCEK</h3>
            <p className="text-gray-400">
              Empowering students to innovate and create sustainable solutions through technology and entrepreneurship.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Programs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <FaEnvelope className="mr-2" />
                <a href="mailto:iedc@lbscek.ac.in" className="hover:text-white transition-colors">
                  iedc@lbscek.ac.in
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <FaPhone className="mr-2" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +91 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <FaMapMarkerAlt className="mr-2" />
                <span>LBS College of Engineering, Kasaragod, Kerala</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} IEDC LBSCEK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
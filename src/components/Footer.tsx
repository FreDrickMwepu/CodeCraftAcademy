import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo" style={{ cursor: 'default' }}>
              <div className="nav-logo-icon"></div>
              <div className="nav-logo-text">
                <strong>CodeCraft</strong>
                <span>Academy</span>
              </div>
            </div>
            <p>
              Empowering the next generation of digital innovators on the Copperbelt,
              Zambia. STEM education that's affordable, practical, and impactful.
            </p>
            <div className="footer-social">
              <div className="social-btn"><FaFacebookF /></div>
              <div className="social-btn"><FaLinkedinIn /></div>
              <div className="social-btn"><FaTwitter /></div>
              <div className="social-btn"><FaInstagram /></div>
            </div>
          </div>
          <div className="footer-col">
            <h4>Programs</h4>
            <div className="footer-links">
              <Link to="/programs" className="footer-link">Digital Literacy</Link>
              <Link to="/programs" className="footer-link">Scratch Programming</Link>
              <Link to="/programs" className="footer-link">Web Design</Link>
              <Link to="/programs" className="footer-link">Python</Link>
              <Link to="/programs" className="footer-link">Robotics</Link>
              <Link to="/programs" className="footer-link">Holiday Bootcamps</Link>
            </div>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <div className="footer-links">
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/about" className="footer-link">Mission &amp; Vision</Link>
              <Link to="/pricing" className="footer-link">Fee Structure</Link>
              <Link to="/contact" className="footer-link">Partner with Us</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-links">
              <span className="footer-link">+260 96 9524755</span>
              <span className="footer-link">+260 97 5608103</span>
              <span className="footer-link">codecraftacademytm@gmail.com</span>
              <span className="footer-link">Kitwe, Copperbelt, Zambia</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} <span className="footer-orange">CodeCraft Academy</span>. All rights reserved.</p>
          <p>Empowering the Next Generation of Digital Innovators.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
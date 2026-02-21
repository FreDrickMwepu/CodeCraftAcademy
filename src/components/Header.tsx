import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <nav>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <div className="nav-logo-icon"></div>
          <div className="nav-logo-text">
            <strong>CodeCraft</strong>
            <span>Academy</span>
          </div>
        </Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link${isActive('/') ? ' active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link${isActive('/about') ? ' active' : ''}`}>About Us</Link>
          <Link to="/programs" className={`nav-link${isActive('/programs') ? ' active' : ''}`}>Programs</Link>
          <Link to="/pricing" className={`nav-link${isActive('/pricing') ? ' active' : ''}`}>Fees</Link>
          <Link to="/contact" className={`nav-link${isActive('/contact') ? ' active' : ''}`}>Contact</Link>
        </div>
        <Link to="/contact" className="btn btn--orange nav-cta">Enrol Now &rarr;</Link>
      </div>
    </nav>
  );
};

export default Header;
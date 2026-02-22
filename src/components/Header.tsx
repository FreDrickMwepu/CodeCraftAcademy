import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiBars3, HiXMark } from 'react-icons/hi2';

const Header: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string): boolean => location.pathname === path;

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <img
            src="/resources/Logo/logowhite.svg"
            alt="CodeCraft Academy"
            className="nav-logo-img"
          />
        </Link>

        {/* Desktop Links */}
        <div className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
          <Link to="/" className={`nav-link${isActive('/') ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className={`nav-link${isActive('/about') ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/programs" className={`nav-link${isActive('/programs') ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Programs</Link>
          <Link to="/pricing" className={`nav-link${isActive('/pricing') ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Fees</Link>
          <Link to="/contact" className={`nav-link${isActive('/contact') ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/contact" className="btn btn--orange nav-cta nav-cta--mobile" onClick={() => setMenuOpen(false)}>Enrol Now &rarr;</Link>
        </div>

        {/* Overlay */}
        {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)}></div>}

        <Link to="/contact" className="btn btn--orange nav-cta nav-cta--desktop">Enrol Now &rarr;</Link>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiXMark /> : <HiBars3 />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
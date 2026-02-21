import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
      </div>
      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow">
            <div className="hero-badge">Kitwe &middot; Copperbelt &middot; Zambia</div>
            <div className="hero-badge-line"></div>
          </div>
          <h1>Empowering<em>Digital Innovators.</em></h1>
          <p className="hero-sub">
            CodeCraft Academy equips children and youth aged 6–18+ with future-ready
            technology skills through coding, robotics, and creative design — right here
            on the Copperbelt.
          </p>
          <div className="hero-actions">
            <Link to="/programs" className="btn btn--orange">Explore Programs &rarr;</Link>
            <Link to="/about" className="btn btn--outline-white">Our Story</Link>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">1,000+</div>
              <div className="stat-label">Learners (3yr goal)</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">6–18+</div>
              <div className="stat-label">Age Range</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">5</div>
              <div className="stat-label">Core Disciplines</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">10+</div>
              <div className="stat-label">Partner Schools</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-robot-wrap">
            <div className="hero-robot-bg"></div>
            <div className="hero-robot-inner">
              <svg className="robot-svg" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="45" y="55" width="90" height="70" rx="16" fill="#FFA202" />
                <rect x="57" y="68" width="66" height="44" rx="10" fill="#1E1D1D" />
                <circle cx="76" cy="88" r="10" fill="#FFA202" />
                <circle cx="104" cy="88" r="10" fill="#FFA202" />
                <circle cx="78" cy="86" r="4" fill="#1E1D1D" />
                <circle cx="106" cy="86" r="4" fill="#1E1D1D" />
                <line x1="90" y1="55" x2="90" y2="35" stroke="#FFA202" strokeWidth="4" strokeLinecap="round" />
                <circle cx="90" cy="30" r="8" fill="#FFA202" />
                <circle cx="90" cy="30" r="4" fill="#1E1D1D" />
                <rect x="55" y="130" width="70" height="30" rx="10" fill="#FFA202" opacity="0.8" />
                <rect x="62" y="158" width="20" height="14" rx="6" fill="#FFA202" opacity="0.6" />
                <rect x="98" y="158" width="20" height="14" rx="6" fill="#FFA202" opacity="0.6" />
                <rect x="18" y="130" width="30" height="14" rx="7" fill="#FFA202" opacity="0.7" />
                <rect x="132" y="130" width="30" height="14" rx="7" fill="#FFA202" opacity="0.7" />
                <text x="66" y="108" fontFamily="monospace" fontSize="11" fill="#FFA202" fontWeight="bold">&lt;/&gt;</text>
              </svg>
            </div>
            <div className="hero-orbits">
              <div className="orbit-dot"></div>
            </div>
            <div className="hero-orbits-2">
              <div className="orbit-dot-2"></div>
            </div>
            <div className="code-card code-card-1">print("Hello, World!")</div>
            <div className="code-card code-card-2">{'for i in range(10): 🤖'}</div>
            <div className="code-card code-card-3">robot.move(forward)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
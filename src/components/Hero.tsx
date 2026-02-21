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
          <div className="hero-image-collage">
            <img
              src="/resources/Pilot%20Program%20Day%201/SML%20STUDIOS%20(1%20of%2043).jpg"
              alt="Students learning to code at CodeCraft Academy"
              className="hero-img hero-img--main"
            />
            <img
              src="/resources/Pilot%20Program%20Day%201/SML%20STUDIOS%20(10%20of%2043).jpg"
              alt="Hands-on robotics session"
              className="hero-img hero-img--accent"
            />
            <div className="hero-img-badge">
              <span className="hero-img-badge-num">Pilot</span>
              <span className="hero-img-badge-label">Program</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
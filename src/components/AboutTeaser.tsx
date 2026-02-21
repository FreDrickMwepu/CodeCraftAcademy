import React from 'react';
import { HiOutlineLightBulb, HiOutlineStar, HiOutlineUserGroup, HiOutlineRocketLaunch } from 'react-icons/hi2';

const values = [
  { icon: <HiOutlineLightBulb />, title: 'Innovation', description: 'Encouraging creativity and new ways of thinking through every lesson.' },
  { icon: <HiOutlineStar />, title: 'Excellence', description: 'Maintaining high standards in curriculum, delivery, and student outcomes.' },
  { icon: <HiOutlineUserGroup />, title: 'Inclusivity', description: 'Accessible to all learners, regardless of gender or background.' },
  { icon: <HiOutlineRocketLaunch />, title: 'Impact', description: 'Real-world problem solving that matters beyond the classroom.' },
];

const AboutTeaser: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual fade-in">
            <div className="about-img-main">
              <img
                src="/resources/Pilot%20Program%20Day%201/SML%20STUDIOS%20(5%20of%2043).jpg"
                alt="Students at CodeCraft Academy pilot program"
                className="about-img-photo"
              />
            </div>
            <div className="about-accent">
              <div className="big">DEBS</div>
              <small>Ministry of Education Endorsed</small>
            </div>
          </div>
          <div className="fade-in">
            <div className="tag">Who We Are</div>
            <h2>The Copperbelt's Premier Youth Tech Academy</h2>
            <p style={{ marginTop: 16, color: 'var(--grey-text)' }}>
              CodeCraft Academy is a STEM-focused digital skills institution designed to
              equip children and youth with future-ready technology skills through
              structured, age-appropriate, and project-based learning.
            </p>
            <div className="values-list">
              {values.map((v, i) => (
                <div className="value-item" key={i}>
                  <div className="value-icon">{v.icon}</div>
                  <div className="value-text">
                    <h4>{v.title}</h4>
                    <p>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;

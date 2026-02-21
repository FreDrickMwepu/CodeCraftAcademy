import React from 'react';

const values = [
  { icon: '💡', title: 'Innovation', description: 'Encouraging creativity and new ways of thinking through every lesson.' },
  { icon: '⭐', title: 'Excellence', description: 'Maintaining high standards in curriculum, delivery, and student outcomes.' },
  { icon: '🤝', title: 'Inclusivity', description: 'Accessible to all learners, regardless of gender or background.' },
  { icon: '🚀', title: 'Impact', description: 'Real-world problem solving that matters beyond the classroom.' },
];

const AboutTeaser: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual fade-in">
            <div className="about-img-main">
              <div className="about-img-inner">
                <div className="about-img-pattern"></div>
                <div className="about-img-text">
                  <div className="big-num">4IR</div>
                  <div className="mission-text">
                    Preparing Zambia's Youth<br />for the 4th Industrial Revolution
                  </div>
                </div>
              </div>
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

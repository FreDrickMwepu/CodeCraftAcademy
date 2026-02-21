import React from 'react';
import { Link } from 'react-router-dom';

const programs = [
  {
    icon: '🖥️', title: 'Digital Literacy', age: 'Ages 6–10',
    desc: 'Foundational digital skills including computer operations, internet safety, and creative applications.',
    topics: ['Computer Basics', 'Internet Safety', 'Typing'],
  },
  {
    icon: '🐱', title: 'Scratch Programming', age: 'Ages 7–12',
    desc: 'Visual block-based coding to build logic, creativity, and algorithmic thinking through games and stories.',
    topics: ['Block Coding', 'Game Design', 'Animation'],
  },
  {
    icon: '🤖', title: 'Robotics', age: 'Ages 10–18+',
    desc: 'Hands-on robotics using Arduino and Micro:bit, from beginner builds to advanced autonomous systems.',
    topics: ['Arduino', 'Micro:bit', 'Sensors'],
  },
  {
    icon: '🌐', title: 'Web Design', age: 'Ages 12–18+',
    desc: 'Build real websites with HTML, CSS, and JavaScript — skills that open doors to global digital careers.',
    topics: ['HTML & CSS', 'JavaScript', 'UI Design'],
  },
  {
    icon: '🐍', title: 'Python Programming', age: 'Ages 13–18+',
    desc: 'Industry-standard text-based programming for data, automation, and career-ready software development.',
    topics: ['Python', 'Algorithms', 'Projects'],
  },
  {
    icon: '🎨', title: 'Graphic Design', age: 'Ages 10–18+',
    desc: 'Visual communication and design thinking using industry tools to create logos, posters, and digital art.',
    topics: ['Canva', 'Illustration', 'Branding'],
  },
];

const ProgramsTeaser: React.FC = () => {
  return (
    <section className="section section--grey">
      <div className="container">
        <div className="section-header center fade-in">
          <div className="tag">What We Teach</div>
          <h2>Programs for Every Age &amp; Level</h2>
          <p>From Scratch for beginners to Python and advanced robotics — our curriculum grows with your child.</p>
        </div>
        <div className="programs-grid">
          {programs.map((p, i) => (
            <Link to="/programs" className="program-card fade-in" key={i} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="program-card-top">
                <div className="program-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <span className="program-age">{p.age}</span>
              </div>
              <div className="program-card-body">
                <p>{p.desc}</p>
                <div className="program-topics">
                  {p.topics.map((t, j) => (
                    <span className="topic-chip" key={j}>{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link to="/programs" className="btn btn--black">View All Programs &rarr;</Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsTeaser;

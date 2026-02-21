import React from 'react';
import { Link } from 'react-router-dom';
import CTAStrip from '../components/CTAStrip';

const problems = [
  { icon: '📚', title: 'Theory-Only ICT Education', desc: 'Schools teach computer studies with minimal hands-on programming or robotics experience.' },
  { icon: '💰', title: 'Limited Affordable Access', desc: 'Coding and robotics training has been out of reach for low- and middle-income families.' },
  { icon: '👩‍💻', title: 'Teacher Capacity Gaps', desc: 'Teachers lack specialized training in AI, robotics, and modern software development.' },
  { icon: '📉', title: 'Youth Skills Mismatch', desc: 'Many students complete secondary school without market-relevant digital skills, fuelling unemployment.' },
];

const objectives = [
  { num: '6yrs', desc: 'Introduce coding and robotics to learners from as early as age 6.' },
  { num: '40%', desc: 'Promote female participation in STEM by at least 40%.' },
  { num: '1,000', desc: 'Train at least 1,000 learners within the first 3 years of operation.' },
  { num: '10+', desc: 'Establish technology hubs in at least 10 partner schools across the Copperbelt.' },
];

const compareRows = [
  { feature: 'Hands-on Coding', cc: '✓ Yes', school: 'Limited', tutor: '✓ Yes', ccClass: 'check-yes highlight', schoolClass: 'check-rare', tutorClass: 'check-yes' },
  { feature: 'Robotics Training', cc: '✓ Yes', school: '✗ No', tutor: 'Rare', ccClass: 'check-yes highlight', schoolClass: 'check-no', tutorClass: 'check-rare' },
  { feature: 'School Integration', cc: '✓ Yes', school: '✓ Yes', tutor: '✗ No', ccClass: 'check-yes highlight', schoolClass: 'check-yes', tutorClass: 'check-no' },
  { feature: 'Age-Based Progression', cc: '✓ Yes', school: '✗ No', tutor: '✗ No', ccClass: 'check-yes highlight', schoolClass: 'check-no', tutorClass: 'check-no' },
  { feature: 'Project-Based Learning', cc: '✓ Yes', school: 'Minimal', tutor: 'Limited', ccClass: 'check-yes highlight', schoolClass: 'check-rare', tutorClass: 'check-rare' },
  { feature: 'Certifications', cc: '✓ Yes', school: '✗ No', tutor: 'Informal only', ccClass: 'check-yes highlight', schoolClass: 'check-no', tutorClass: 'check-rare' },
  { feature: 'Affordable Group Pricing', cc: '✓ Yes', school: 'N/A', tutor: 'Expensive', ccClass: 'check-yes highlight', schoolClass: '', tutorClass: 'check-no' },
];

const About: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="tag">About CodeCraft Academy</div>
          <h1>We're Building<br /><span>Zambia's Digital Future.</span></h1>
          <p>
            Founded in Kitwe on the Copperbelt, CodeCraft Academy exists to close the gap
            between school education and real-world technology skills — making STEM education
            accessible, practical, and empowering for every young person.
          </p>
          <div style={{ marginTop: 40, display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
            <Link to="/programs" className="btn btn--orange">See Our Programs</Link>
            <Link to="/contact" className="btn btn--outline-white">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <div className="tag">Our Foundation</div>
            <h2>Mission, Vision &amp; Values</h2>
          </div>
          <div className="mvv-grid">
            <div className="mvv-card mvv-card-1">
              <div className="mvv-label">Our Mission</div>
              <h3>To Inspire, Educate &amp; Empower</h3>
              <p>We inspire, educate, and empower young people on the Copperbelt with digital skills and an innovative mindset — preparing them for the world they will inherit.</p>
            </div>
            <div className="mvv-card mvv-card-2">
              <div className="mvv-label" style={{ color: 'rgba(255,162,2,0.7)' }}>Our Vision</div>
              <h3 style={{ color: 'var(--orange)' }}>Zambia's Leading Youth Innovation Centre</h3>
              <p>To become the premier youth innovation center in Zambia, recognized for producing the next generation of Africa's digital leaders and entrepreneurs.</p>
            </div>
            <div className="mvv-card mvv-card-3">
              <div className="mvv-label">Core Values</div>
              <h3>Innovation &middot; Excellence &middot; Inclusivity &middot; Impact</h3>
              <p>Everything we do is guided by these four pillars — from how we design our curriculum to how we welcome every single learner through our doors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="section section--grey">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="tag">The Problem We Solve</div>
              <h2>Why CodeCraft Academy Exists</h2>
              <p style={{ marginTop: 16, color: 'var(--grey-text)' }}>
                Despite the increasing role of technology in education, business, and employment,
                most Copperbelt learners face significant barriers to practical digital education.
              </p>
              <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
                {problems.map((p, i) => (
                  <div className="problem-card" key={i}>
                    <div className="problem-icon">{p.icon}</div>
                    <div>
                      <strong>{p.title}</strong>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="tag tag--black">Our Objectives</div>
              <h2>What We Aim to Achieve</h2>
              <div className="objectives-grid" style={{ marginTop: 24 }}>
                {objectives.map((o, i) => (
                  <div className="objective-item" key={i}>
                    <div className="objective-num">{o.num}</div>
                    <p>{o.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <div className="tag">Why Choose Us</div>
            <h2>CodeCraft vs. The Alternatives</h2>
            <p>We uniquely combine affordability, hands-on robotics, school integration, and progressive certification in one system.</p>
          </div>
          <div style={{ overflowX: 'auto' as const }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th style={{ color: 'var(--orange)' }}>CodeCraft Academy</th>
                  <th>Typical Computer Studies</th>
                  <th>Private ICT Tutors</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r, i) => (
                  <tr key={i}>
                    <td>{r.feature}</td>
                    <td className={r.ccClass}>{r.cc}</td>
                    <td className={r.schoolClass}>{r.school}</td>
                    <td className={r.tutorClass}>{r.tutor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTAStrip
        title="Be Part of the CodeCraft Story"
        subtitle="Whether as a parent, school, NGO, or sponsor — there's a place for you in our mission."
        primaryText="Contact Us"
        primaryLink="/contact"
        secondaryText="View Fees"
        secondaryLink="/pricing"
      />
    </div>
  );
};

export default About;
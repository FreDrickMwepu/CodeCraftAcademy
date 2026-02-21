import React from 'react';
import CTAStrip from '../components/CTAStrip';
import { HiComputerDesktop, HiPuzzlePiece, HiPaintBrush, HiGlobeAlt, HiPlayCircle, HiCommandLine, HiCpuChip, HiCog6Tooth, HiAcademicCap, HiBuildingOffice2, HiCalendarDays, HiTrophy } from 'react-icons/hi2';

const courses = [
  { icon: <HiComputerDesktop />, title: 'Digital Literacy I & II', age: 'Ages 6–10', desc: 'Computer operations, internet safety, file management, and creative applications — the essential first step into the digital world.', topics: ['Computer Basics', 'Internet Safety', 'MS Office', 'Typing'] },
  { icon: <HiPuzzlePiece />, title: 'Scratch Programming', age: 'Ages 7–13', desc: 'Visual block-based coding to build logic, creativity, and algorithmic thinking. Learners build their own games, stories, and animations.', topics: ['Block Coding', 'Game Design', 'Animation', 'Logic'] },
  { icon: <HiPaintBrush />, title: 'Graphic Design', age: 'Ages 10–18+', desc: 'Visual communication and design thinking using industry tools. Learners design logos, posters, social media content, and digital branding.', topics: ['Canva', 'Illustration', 'Branding', 'Typography'] },
  { icon: <HiGlobeAlt />, title: 'Web Design', age: 'Ages 12–18+', desc: 'Build real, functional websites. Learners move from HTML basics to styled CSS layouts and interactive JavaScript features.', topics: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'] },
  { icon: <HiPlayCircle />, title: 'Game Design', age: 'Ages 11–18+', desc: 'Design and build original games from concept to completion. Covers game mechanics, level design, and basic programming logic.', topics: ['Game Mechanics', 'Level Design', 'Storytelling'] },
  { icon: <HiCommandLine />, title: 'Python Programming', age: 'Ages 13–18+', desc: 'Industry-standard text-based programming. Covers variables, loops, functions, and real-world project development.', topics: ['Python', 'Algorithms', 'Data Structures', 'Projects'] },
  { icon: <HiCpuChip />, title: 'Robotics — Intro', age: 'Ages 10–14', desc: 'Build and program beginner robots using Micro:bit. Understand sensors, motors, and basic programming logic through hands-on challenges.', topics: ['Micro:bit', 'Sensors', 'Block Code', 'Challenges'] },
  { icon: <HiCog6Tooth />, title: 'Robotics — Advanced', age: 'Ages 14–18+', desc: 'Advanced autonomous robot design using Arduino. Competition-ready preparation including inter-school robotics challenges and tech expos.', topics: ['Arduino', 'Autonomous Systems', 'Competition Prep'], featured: true },
];

const deliveryModes = [
  { icon: <HiAcademicCap />, title: 'In-School Co-Curricular', desc: 'Weekly sessions during school terms, delivered at partner schools. Schools may host onsite or offsite and select coding or robotics.' },
  { icon: <HiBuildingOffice2 />, title: 'After-School & Weekend', desc: 'Weekday and Saturday classes for working parents and independent learners. Open to school-going and out-of-school youth.' },
  { icon: <HiCalendarDays />, title: 'Holiday Bootcamps', desc: 'Intensive 2-week camps during school holidays. Fast-track skills acquisition with practical projects and demonstrations. Certificate included.' },
  { icon: <HiTrophy />, title: 'Competitions & Expos', desc: 'Annual Tech Expo and inter-school Robotics Challenges to showcase learner progress and connect with industry mentors.' },
];

const Programs: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="programs-hero">
        <img
          src="/resources/Pilot%20Program%20Day%201/SML%20STUDIOS%20(18%20of%2043).jpg"
          alt="Students at CodeCraft programs"
          className="programs-hero-bg-img"
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="tag tag--black">Our Curriculum</div>
          <h1>Programs Built for<br />Every Young Innovator</h1>
          <p>Structured, progressive, and project-based — our courses take learners from digital beginners to confident creators and coders.</p>
        </div>
      </section>

      {/* Age Bands */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <div className="tag">Learning Pathways</div>
            <h2>Designed Around Your Child's Age</h2>
            <p>Our age-based progression ensures every learner is challenged at exactly the right level.</p>
          </div>
          <div className="age-bands" style={{ marginTop: 48 }}>
            <div className="age-band">
              <div className="age-band-label">Foundation</div>
              <h3>6–10</h3>
              <p>Building digital foundations and creative thinking</p>
              <div className="age-band-courses">
                <div className="course-pill"><div className="course-pill-dot"></div>Digital Literacy I &amp; II</div>
                <div className="course-pill"><div className="course-pill-dot"></div>Scratch Basics</div>
                <div className="course-pill"><div className="course-pill-dot"></div>Creative Typing</div>
              </div>
            </div>
            <div className="age-band" style={{ background: 'var(--orange)' }}>
              <div className="age-band-label" style={{ color: 'rgba(0,0,0,0.6)' }}>Intermediate</div>
              <h3 style={{ color: 'var(--black)' }}>11–14</h3>
              <p style={{ color: 'rgba(0,0,0,0.7)' }}>Exploring real programming and creative design</p>
              <div className="age-band-courses">
                {['Scratch Advanced', 'Graphic Design', 'Intro to Robotics', 'Web Design Basics'].map((c, i) => (
                  <div className="course-pill" style={{ background: 'rgba(0,0,0,0.1)' }} key={i}>
                    <div className="course-pill-dot" style={{ background: 'var(--black)' }}></div>{c}
                  </div>
                ))}
              </div>
            </div>
            <div className="age-band" style={{ background: 'var(--black)' }}>
              <div className="age-band-label" style={{ color: 'rgba(255,162,2,0.6)' }}>Advanced</div>
              <h3>15–18+</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>Industry-relevant skills for careers &amp; entrepreneurship</p>
              <div className="age-band-courses">
                {['Python Programming', 'Advanced Robotics', 'Web Development', 'Game Design'].map((c, i) => (
                  <div className="course-pill" style={{ background: 'rgba(255,162,2,0.15)', color: 'white' }} key={i}>
                    <div className="course-pill-dot"></div>{c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="section section--grey">
        <div className="container">
          <div className="section-header center">
            <div className="tag">Course Catalogue</div>
            <h2>All Courses at a Glance</h2>
          </div>
          <div className="programs-grid" style={{ marginTop: 48 }}>
            {courses.map((c, i) => (
              <div className="program-card" key={i}>
                <div
                  className="program-card-top"
                  style={c.featured ? { background: 'var(--orange)' } : undefined}
                >
                  <div className="program-icon">{c.icon}</div>
                  <h3 style={c.featured ? { color: 'var(--black)' } : undefined}>{c.title}</h3>
                  <span
                    className="program-age"
                    style={c.featured ? { background: 'rgba(0,0,0,0.15)', color: 'var(--black)' } : undefined}
                  >
                    {c.age}
                  </span>
                </div>
                <div className="program-card-body">
                  <p>{c.desc}</p>
                  <div className="program-topics">
                    {c.topics.map((t, j) => (
                      <span className="topic-chip" key={j}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Modes */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <div className="tag">How We Deliver</div>
            <h2>Learning That Fits Your Schedule</h2>
            <p>Multiple delivery formats mean CodeCraft Academy works for every family and school context.</p>
          </div>
          <div className="delivery-grid">
            {deliveryModes.map((d, i) => (
              <div className="delivery-card" key={i}>
                <div className="delivery-icon">{d.icon}</div>
                <div>
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        title="Find the Right Program for Your Child"
        subtitle="Not sure which course to start with? Our team is happy to guide you."
        primaryText="Talk to Us"
        primaryLink="/contact"
        secondaryText="See Fees"
        secondaryLink="/pricing"
      />
    </div>
  );
};

export default Programs;
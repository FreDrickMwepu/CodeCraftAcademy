import React from 'react';
import { Link } from 'react-router-dom';
import { HiCalendarDays, HiAcademicCap, HiComputerDesktop, HiChartBar, HiDevicePhoneMobile, HiBanknotes, HiBuildingLibrary } from 'react-icons/hi2';

const feeCards = [
  {
    title: 'After-School & Weekday',
    amount: '1,000',
    period: 'per learner / month',
    features: [
      'K250 per lesson per child',
      '1 lesson per week',
      '4 lessons per month',
      'Applies to all age groups',
      'All programming levels',
      'Coding & Robotics courses',
      '8-month full program: K8,000',
    ],
    ctaText: 'Enrol Now',
  },
  {
    title: 'Weekend Program',
    amount: '1,000',
    period: 'per learner / month',
    featured: true,
    badge: 'Most Popular',
    features: [
      'K250 per lesson per child',
      'Friday or Saturday classes',
      '4 lessons per month',
      'Ideal for working parents',
      'School-going & out-of-school',
      'Coding & Robotics available',
      '8-month full program: K8,000',
    ],
    ctaText: 'Enrol Now',
  },
  {
    title: 'Holiday Bootcamp',
    amount: '2,500',
    period: 'per child / bootcamp',
    features: [
      '2-week intensive program',
      'Certificate of completion',
      'Coding OR Robotics track',
      'Practical projects & demos',
      'Open to new & continuing learners',
      'Fast-tracks skills acquisition',
      'All age groups welcome',
    ],
    ctaText: 'Reserve a Spot',
  },
];

const schoolFeatures = [
  { icon: <HiCalendarDays />, title: 'Once-a-Week Delivery', desc: 'Sessions delivered once per week during the school term — minimal disruption, maximum impact.' },
  { icon: <HiAcademicCap />, title: 'Onsite or Offsite', desc: 'We come to your school or learners travel to our hub — whichever works best for your situation.' },
  { icon: <HiComputerDesktop />, title: 'Coding or Robotics', desc: 'Schools select the discipline that best serves their learners — software coding or hands-on robotics.' },
  { icon: <HiChartBar />, title: 'Progress Reports', desc: 'Regular progress reports for parents and schools, keeping everyone informed and engaged.' },
];

const Pricing: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="pricing-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="tag">Fee Structure</div>
          <h1>Simple.<em> Transparent.</em><br />Affordable.</h1>
          <p>One clear price for all courses, all levels, and all age groups. No hidden fees, no surprises.</p>
        </div>
      </section>

      {/* Fee Cards */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <div className="tag">Pricing Plans</div>
            <h2>Choose What Works for You</h2>
            <p>Whether you prefer weekly sessions during term-time, weekend classes, or an intensive holiday bootcamp — we have an option for every family.</p>
          </div>
          <div className="fee-cards">
            {feeCards.map((card, i) => (
              <div className={`fee-card${card.featured ? ' featured' : ''}`} key={i}>
                {card.badge && <div className="fee-card-badge">{card.badge}</div>}
                <div className="fee-card-header">
                  <h3>{card.title}</h3>
                  <div className="fee-price">
                    <span className="currency">K</span>
                    <span className="amount">{card.amount}</span>
                    <span className="period">{card.period}</span>
                  </div>
                </div>
                <div className="fee-card-body">
                  {card.features.map((f, j) => (
                    <div className="fee-feature" key={j}>
                      <span
                        className="fee-check"
                        style={card.featured ? { color: 'var(--black)' } : undefined}
                      >
                        ✓
                      </span>
                      {f}
                    </div>
                  ))}
                </div>
                <div className="fee-card-footer">
                  <Link
                    to="/contact"
                    className="btn btn--black"
                    style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}
                  >
                    {card.ctaText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discounts & Payment */}
      <section className="section section--grey">
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'start' }}>
            <div>
              <div className="tag">Family Savings</div>
              <h2>Sibling Discounts Available</h2>
              <p style={{ marginTop: 16, color: 'var(--grey-text)', marginBottom: 32 }}>
                We believe every child in your family deserves access to digital education.
                That's why we offer discounts when you enrol more than one sibling.
              </p>
              <div className="discount-grid">
                <div className="discount-card">
                  <div className="discount-pct">5%</div>
                  <div>
                    <strong>2 Siblings Enrolled</strong>
                    <p>Discount applied to the total monthly fee.</p>
                  </div>
                </div>
                <div className="discount-card">
                  <div className="discount-pct">10%</div>
                  <div>
                    <strong>3 Siblings Enrolled</strong>
                    <p>Discount applied to the total monthly fee.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="tag tag--black">Payment Terms</div>
              <h2>Convenient Payment Options</h2>
              <p style={{ marginTop: 16, color: 'var(--grey-text)', marginBottom: 32 }}>
                We make it easy to pay in the way that suits your family best.
              </p>
              <div style={{ padding: 28, background: 'var(--white)', borderRadius: 12, border: '1px solid var(--grey-mid)', marginBottom: 24 }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: 'var(--grey-text)', marginBottom: 16 }}>
                  Payment Schedule
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '1px solid var(--grey-mid)' }}>
                  <span style={{ fontSize: '1.5rem' }}><HiCalendarDays /></span>
                  <div>
                    <strong style={{ fontSize: '0.9rem' }}>Due at Start of Month</strong>
                    <p style={{ fontSize: '0.82rem', color: 'var(--grey-text)' }}>Payment is expected at the beginning of each month.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0' }}>
                  <span style={{ fontSize: '1.5rem' }}><HiAcademicCap /></span>
                  <div>
                    <strong style={{ fontSize: '0.9rem' }}>School Fee Collection</strong>
                    <p style={{ fontSize: '0.82rem', color: 'var(--grey-text)' }}>Schools may collect fees directly from parents, or CodeCraft can manage payment.</p>
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: 12, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: 'var(--grey-text)' }}>
                We Accept
              </div>
              <div className="payment-methods">
                <div className="payment-chip"><span><HiDevicePhoneMobile /></span> Mobile Money</div>
                <div className="payment-chip"><span><HiBanknotes /></span> Cash</div>
                <div className="payment-chip"><span><HiBuildingLibrary /></span> Bank Transfer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Programs */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header center" style={{ color: 'var(--white)' }}>
            <div className="tag">For Schools</div>
            <h2>Partnering with Your School</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>
              CodeCraft Academy makes it easy for schools to offer world-class STEM education
              without the infrastructure overhead.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginTop: 48 }}>
            {schoolFeatures.map((sf, i) => (
              <div className="school-card" key={i}>
                <div style={{ fontSize: '2rem', marginBottom: 16 }}>{sf.icon}</div>
                <h3>{sf.title}</h3>
                <p>{sf.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/contact" className="btn btn--orange">Partner With Us &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

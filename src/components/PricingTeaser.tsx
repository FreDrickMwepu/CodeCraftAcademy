import React from 'react';
import { Link } from 'react-router-dom';

const PricingTeaser: React.FC = () => {
  return (
    <section className="section section--dark">
      <div className="container">
        <div className="section-header center fade-in" style={{ color: 'white' }}>
          <div className="tag">Simple Pricing</div>
          <h2>Transparent, Affordable Fees</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>
            No hidden charges. One clear fee for all courses, all levels, all ages.
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginTop: 48, flexWrap: 'wrap' as const }}>
          <div className="pricing-teaser-card pricing-teaser-card--outline">
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: 2, color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>Per Lesson</div>
            <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--orange)' }}>K250</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>per child</div>
          </div>
          <div className="pricing-teaser-card pricing-teaser-card--filled">
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: 2, color: 'rgba(0,0,0,0.6)', marginBottom: 12 }}>Monthly</div>
            <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--black)' }}>K1,000</div>
            <div style={{ color: 'rgba(0,0,0,0.6)', fontSize: '0.875rem' }}>4 lessons per month</div>
          </div>
          <div className="pricing-teaser-card pricing-teaser-card--outline">
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: 2, color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>Bootcamp</div>
            <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--orange)' }}>K2,500</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>2-week intensive</div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <Link to="/pricing" className="btn btn--orange">See Full Fee Structure &rarr;</Link>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;

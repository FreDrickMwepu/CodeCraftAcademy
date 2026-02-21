import React from 'react';
import ContactForm from '../components/ContactForm';
import { HiPhone, HiEnvelope, HiMapPin } from 'react-icons/hi2';

const contactItems = [
  { icon: <HiPhone />, label: 'Phone / WhatsApp', lines: ['+260 96 9524755', '+260 97 5608103'] },
  { icon: <HiEnvelope />, label: 'Email', lines: ['codecraftacademytm@gmail.com'] },
  { icon: <HiMapPin />, label: 'Location', lines: ['Kitwe, Copperbelt Province, Zambia'] },
];

const Contact: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-orb"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="tag tag--black">Get In Touch</div>
          <h1 style={{ color: 'var(--black)' }}>
            Let's Connect &amp;<br />Get Your Child Started.
          </h1>
          <p style={{ color: 'rgba(0,0,0,0.65)', maxWidth: 540, marginTop: 20, fontSize: '1.1rem' }}>
            Whether you're a parent, school administrator, NGO, or potential partner — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="tag">Reach Us Directly</div>
              <h2 style={{ marginBottom: 8 }}>
                We're Based in<br />Kitwe, Copperbelt.
              </h2>
              <p style={{ color: 'var(--grey-text)', marginBottom: 32 }}>
                Our team is available to answer your questions, arrange school visits, or help you find the right program.
              </p>
              <div className="contact-info">
                {contactItems.map((ci, i) => (
                  <div className="contact-item" key={i}>
                    <div className="contact-icon">{ci.icon}</div>
                    <div>
                      <h4>{ci.label}</h4>
                      {ci.lines.map((line, j) => (
                        <p key={j}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 40, padding: 24, background: 'var(--black)', borderRadius: 12 }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: 2, color: 'var(--orange)', fontWeight: 700, marginBottom: 12 }}>
                  January 2026 Intake Open
                </div>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                  Enrolment for our January 2026 term is now open. Spots are limited — reach out today to secure your child's place.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <div style={{ background: 'var(--grey-light)', padding: '64px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="tag">Location</div>
          <h2 style={{ marginBottom: 8 }}>Find Us in Kitwe</h2>
          <p style={{ color: 'var(--grey-text)', marginBottom: 32 }}>Kitwe, Copperbelt Province, Zambia</p>
          <div className="map-placeholder">
            <div className="map-grid-overlay"></div>
            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: 8 }}><HiMapPin /></div>
              <div style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '1.1rem' }}>Kitwe, Copperbelt</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', marginTop: 4 }}>Zambia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React, { useState } from 'react';
import Toast from './Toast';
import { ContactFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    program: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
    setFormData({
      firstName: '', lastName: '', email: '',
      phone: '', role: '', program: '', message: '',
    });
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3 style={{ marginBottom: 8 }}>Send Us a Message</h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--grey-text)', marginBottom: 28 }}>
          Fill in the form and our team will get back to you within 24 hours.
        </p>
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="firstName" placeholder="e.g. Thandiwe" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="lastName" placeholder="e.g. Banda" value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone / WhatsApp</label>
          <input type="tel" name="phone" placeholder="+260 ..." value={formData.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>I am a...</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="">Select one</option>
            <option>Parent / Guardian</option>
            <option>School Administrator</option>
            <option>NGO / Organisation</option>
            <option>Potential Sponsor / Partner</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Interested In</label>
          <select name="program" value={formData.program} onChange={handleChange}>
            <option value="">Select a program</option>
            <option>Digital Literacy</option>
            <option>Scratch Programming</option>
            <option>Graphic Design</option>
            <option>Web Design</option>
            <option>Game Design</option>
            <option>Python Programming</option>
            <option>Robotics (Intro)</option>
            <option>Robotics (Advanced)</option>
            <option>Holiday Bootcamp</option>
            <option>School Partnership</option>
          </select>
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Tell us about your child's age, any questions you have, or how we can help..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn--orange"
          style={{ width: '100%', justifyContent: 'center', fontSize: '1rem' }}
        >
          Send Message &rarr;
        </button>
      </form>
      <Toast show={showToast} message="Message sent! We'll be in touch soon." />
    </>
  );
};

export default ContactForm;
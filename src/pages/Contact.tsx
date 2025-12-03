import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <p>If you have any questions or inquiries, please fill out the form below:</p>
            <ContactForm />
            <div className="contact-info">
                <h2>Our Contact Information</h2>
                <p>Email: info@codecraftacademy.com</p>
                <p>Phone: +260 123 456 789</p>
                <p>Address: Copperbelt, Kitwe, Zambia</p>
            </div>
        </div>
    );
};

export default Contact;
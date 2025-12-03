import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} CodeCraft Academy. All rights reserved.</p>
                <div className="social-media">
                    <a href="https://facebook.com/codecraftacademy" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com/codecraftacademy" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com/codecraftacademy" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
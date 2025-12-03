import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="hero">
            <h1>Welcome to CodeCraft Academy</h1>
            <p>Your journey into the world of STEM starts here!</p>
            <a href="#programs" className="cta-button">Explore Our Programs</a>
        </div>
    );
};

export default Hero;
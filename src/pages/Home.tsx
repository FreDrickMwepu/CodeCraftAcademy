import React from 'react';
import Hero from '../components/Hero';
import Programs from './Programs';
import About from './About';

const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <About />
            <Programs />
        </div>
    );
};

export default Home;
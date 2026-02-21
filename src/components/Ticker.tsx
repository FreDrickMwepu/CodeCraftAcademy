import React from 'react';

const tickerItems = [
  'Coding', 'Robotics', 'Web Design', 'Digital Literacy',
  'Game Design', 'Python', 'Scratch', 'Creative Design',
];

const Ticker: React.FC = () => {
  return (
    <div className="ticker">
      <div className="ticker-inner">
        {/* Render twice for seamless loop */}
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <div className="ticker-item" key={i}>
            {i === 0 && <div className="ticker-dot"></div>}
            {item}
            <div className="ticker-dot"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;

import React from 'react';
import { Link } from 'react-router-dom';

interface CTAStripProps {
  title: string;
  subtitle: string;
  primaryText: string;
  primaryLink: string;
  secondaryText: string;
  secondaryLink: string;
}

const CTAStrip: React.FC<CTAStripProps> = ({
  title, subtitle, primaryText, primaryLink, secondaryText, secondaryLink,
}) => {
  return (
    <div className="cta-strip">
      <div className="container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <div className="actions">
          <Link to={primaryLink} className="btn btn--black">{primaryText}</Link>
          <Link to={secondaryLink} className="btn btn--outline">{secondaryText}</Link>
        </div>
      </div>
    </div>
  );
};

export default CTAStrip;

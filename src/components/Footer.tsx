import React from 'react';
import AnimateIn from './AnimateIn';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AnimateIn direction="up" className="footer" duration={0.5}>
      <p>© {currentYear} Vinam Arora</p>
    </AnimateIn>
  );
};

export default Footer;

import React from 'react';
import { Textfit } from 'react-textfit';
import AnimateIn from './AnimateIn';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="header">
      <AnimateIn className="header__title" direction="down" baseDelay={0}>
        <Textfit
          mode="single"
          max={50} // Maximum font size
          min={24} // Minimum font size for readability
        >
          Vinam Arora
        </Textfit>
      </AnimateIn>
      <AnimateIn className="header__nav" direction="down" baseDelay={0.1}>
        <Link to="/career">Career</Link>
        <Link to="/">Home</Link>
      </AnimateIn>
    </div>
  );
};

export default Header;

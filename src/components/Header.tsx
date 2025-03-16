import React from 'react';
import { Textfit } from 'react-textfit';
import AnimateIn from './AnimateIn';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="header">
      <AnimateIn className="header__title" direction="down" baseDelay={0}>
        <h1>
          <Textfit
            mode="single"
            max={50} // Maximum font size
            min={24} // Minimum font size for readability
          >
            Vinam Arora
          </Textfit>
        </h1>
      </AnimateIn>
      <div className="header__nav">
        <Link to="/career">Career</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import { Textfit } from 'react-textfit';
import AnimateIn from './AnimateIn';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="flex justify justify-between items-center">
      <AnimateIn className="font-normal w-[32%]" direction="down" baseDelay={0}>
        <Textfit
          mode="single"
          max={50} // Maximum font size
          min={24} // Minimum font size for readability
        >
          Vinam Arora
        </Textfit>
      </AnimateIn>
      <AnimateIn className="flex font-normal gap-10" direction="down" baseDelay={0.1}>
        <Link to="/" className="no-underline"><p>Home</p></Link>
        <Link to="/career" className="no-underline">Career</Link>
      </AnimateIn>
    </div>
  );
};

export default Header;

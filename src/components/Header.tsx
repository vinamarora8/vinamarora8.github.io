import React from 'react';
import { Textfit } from 'react-textfit';

const Header: React.FC = () => {
  return (
      <div className="header">
          <h1 className="header__title">
            <Textfit 
              mode="single" 
              max={50}  // Maximum font size
              min={24}  // Minimum font size for readability
            >
              Vinam Arora
            </Textfit>
          </h1>
          <div className="header__nav"></div>
      </div>
  )
}

export default Header; 
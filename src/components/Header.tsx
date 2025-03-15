import React from 'react';
import { Textfit } from 'react-textfit';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
      <div className="header">
          <motion.h1 
            className="header__title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7, 
              ease: [0.22, 1, 0.36, 1] // Custom easing for a nice bounce
            }}
          >
            <Textfit 
              mode="single" 
              max={50}  // Maximum font size
              min={24}  // Minimum font size for readability
            >
              Vinam Arora
            </Textfit>
          </motion.h1>
          <div className="header__nav"></div>
      </div>
  )
}

export default Header; 
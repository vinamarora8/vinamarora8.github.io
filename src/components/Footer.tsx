import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <p>© {currentYear} Vinam Arora</p>
    </footer>
  );
};

export default Footer; 
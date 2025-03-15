import React from 'react';
import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaEnvelope, FaGraduationCap } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="profile">
      <img 
        src="/images/profile-image.jpg" 
        alt="Vinam Arora" 
        className="profile__image"
      />
      
      <div className="profile__content">
        <h1 className="profile__name">Vinam Arora</h1>
        
        <div className="profile__title">
          Machine Learning PhD Student<br />
          @ Georgia Tech
        </div>
        
        <div className="profile__location">
          <FaMapMarkerAlt /> Atlanta, Georgia, USA
        </div>
        
        <div className="profile__bio">
          <p>
            I am a Ph.D. student in Machine Learning at the Georgia
            Institute of Technology, where I am advised by <a href="https://evadar.net/" target="_blank" rel="noopener noreferrer">Prof. Eva Dyer</a>.
            My areas of interest are Self-supervised Learning and Learning
            from large-scale data. I like working with challenging datasets
            and am actively working on developing deep learning methods
            for computational neuroscience, graphs, and timeseries.
          </p>
          <p>
            I did my undergrad in ECE from the Indian Institute of
            Technology - Roorkee (IIT-R). Before diving into machine
            learning research, I used to work as a chip-design engineer.
          </p>
        </div>
        
        <div className="social-links">
          <a 
            href="https://scholar.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-links__item"
            aria-label="Google Scholar"
          >
            <FaGraduationCap />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-links__item"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-links__item"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:example@email.com" 
            className="social-links__item"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 
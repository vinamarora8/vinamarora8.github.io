import React from 'react';
import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaEnvelope, FaGraduationCap } from 'react-icons/fa';
import AnimateIn from './AnimateIn';
import AnimateSocialLinks from './AnimateSocialLinks';
import ProgressiveImage from './ProgressiveImage';
import TiltEffect from './TiltEffect';

const Profile: React.FC = () => {
  return (
      <div className="profile">
        <div className="profile__left">
            <AnimateIn delay={0.1} direction="left">
                <TiltEffect maxTiltDegrees={5} shadowIntensity={0.05}>
                    <div className="profile__left__image-container">
                        <ProgressiveImage 
                        lowResSrc="/images/profile-image-low.jpg"
                        highResSrc="/images/profile-image.jpg" 
                        alt="Vinam Arora" 
                        className="profile__left__image"
                        />
                    </div>
                </TiltEffect>
            </AnimateIn>

            <AnimateIn delay={0.2} direction="left">
              <div className="profile__left__title">
                  Machine Learning Ph.D. Student<br />
                  @ Georgia Tech
              </div>
            </AnimateIn>

            <AnimateIn delay={0.3} direction="left">
              <div className="profile__left__location">
                <FaMapMarkerAlt /> <p>Atlanta, Georgia, USA</p>
              </div>
            </AnimateIn>
        </div>

        <div className="profile__right">
            <div className="profile__right__bio">
                <AnimateIn delay={0.2} direction="right">
                  <p>
                      I am a Ph.D. student in Machine Learning at the Georgia
                      Institute of Technology, where I conduct my research at the <a href="https://dyerlab.gatech.edu/" 
                      target="_blank" rel="noopener noreferrer">NerDS Lab</a> and
                      am advised by <a href="https://dyerlab.gatech.edu/people/pi-profile/" 
                      target="_blank" rel="noopener noreferrer">Prof. Eva Dyer</a>.
                      My areas of interest are Self-supervised Learning and Learning
                      from large-scale data. I like working with challenging datasets
                      and am actively working on developing deep learning methods
                      for computational neuroscience, graphs, and timeseries.
                  </p>
                </AnimateIn>
                <AnimateIn delay={0.3} direction="right">
                  <p>
                      I did my undergrad in ECE from the Indian Institute of
                      Technology - Roorkee (IIT-R). Before diving into machine
                      learning research, I used to work as a chip-design engineer
                      at Texas Instruments.
                  </p>
                </AnimateIn>
            </div>

            <AnimateSocialLinks baseDelay={0.5} staggerDelay={0.1} className="profile__right__social-links">
                <a 
                    href="https://scholar.google.com/citations?user=XHVqHR4AAAAJ&hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-links__item"
                    aria-label="Google Scholar"
                >
                    <FaGraduationCap />
                    <p>Google Scholar</p>
                </a>
                <a 
                    href="https://github.com/vinamarora8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-links__item"
                    aria-label="GitHub"
                >
                    <FaGithub />
                    <p>Github</p>
                </a>
                <a 
                    href="https://www.linkedin.com/in/vinam-arora/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-links__item"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                    <p>LinkedIn</p>
                </a>
                <a 
                    href="mailto:vinam@gatech.edu" 
                    className="social-links__item"
                    aria-label="Email"
                >
                    <FaEnvelope />
                    <p>Email</p>
                </a>
            </AnimateSocialLinks>
        </div>
      </div>
  )
}

export default Profile;
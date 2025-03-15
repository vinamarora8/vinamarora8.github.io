import React from 'react';
import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaEnvelope, FaGraduationCap } from 'react-icons/fa';

const Profile: React.FC = () => {
  return (
      <div className="profile">
        <div className="profile__left">
            <img 
                src="/images/profile-image.jpg" 
                alt="Vinam Arora" 
                className="profile__left__image"
            />

            <div className="profile__left__title">
                Machine Learning Ph.D. Student<br />
                @ Georgia Tech
            </div>

            <div className="profile__left__location">
            <FaMapMarkerAlt /> <p>Atlanta, Georgia, USA</p>
            </div>

        </div>

        <div className="profile__right">
            <div className="profile__right__bio">
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
                <p>
                    I did my undergrad in ECE from the Indian Institute of
                    Technology - Roorkee (IIT-R). Before diving into machine
                    learning research, I used to work as a chip-design engineer.
                </p>
            </div>

            <div className="profile__right__social-links">
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
            </div>
        </div>
      </div>
  )
}

export default Profile;
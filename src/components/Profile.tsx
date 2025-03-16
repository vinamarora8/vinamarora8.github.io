import React from 'react';
import { FaLocationDot, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa6';
import { FaGraduationCap } from 'react-icons/fa';
import AnimateIn from './AnimateIn';
import ProgressiveImage from './ProgressiveImage';
import TiltEffect from './TiltEffect';
import Link from './Link';

const Profile: React.FC = () => {
  return (
    <div className="profile">
      <AnimateIn className="profile__left" baseDelay={0.1} direction="left" staggerDelay={0.1}>
        <TiltEffect maxTiltDegrees={5} shadowIntensity={0.05}>
          <div className="profile__left__image">
            <ProgressiveImage
              lowResSrc="/images/profile-image-low.jpg"
              highResSrc="/images/profile-image.jpg"
              alt="Vinam Arora"
            />
          </div>
        </TiltEffect>

        <div className="profile__left__title">
          Machine Learning Ph.D. Student
          <br />@ Georgia Tech
        </div>

        <div className="profile__left__location">
          <FaLocationDot /> <p>Atlanta, Georgia, USA</p>
        </div>
      </AnimateIn>

      <div className="profile__right">
        <AnimateIn
          className="profile__right__bio"
          baseDelay={0.2}
          direction="right"
          staggerDelay={0.05}
        >
          <p>
            I am a second year Ph.D. student in Machine Learning at the Georgia Institute of
            Technology, where I conduct my research at the{' '}
            <Link href="https://dyerlab.gatech.edu/" className="underline">
              NerDS Lab
            </Link>{' '}
            and am advised by{' '}
            <Link href="https://dyerlab.gatech.edu/people/pi-profile/" className="underline">
              Prof. Eva Dyer
            </Link>
            .
          </p>
          <p>
            My areas of interest are Self-supervised Learning and Learning from large-scale data. I
            like working with challenging datasets and am actively working on developing deep
            learning methods for computational neuroscience, graphs, and timeseries.
          </p>
          <p>
            I did my undergrad in Electronics and Communication Engineering from the Indian
            Institute of Technology - Roorkee. Before diving into machine learning research, I used
            to work as a chip-design engineer at Texas Instruments.
          </p>
        </AnimateIn>

        <AnimateIn
          className="flex flex-row gap-x-16 text-center text-xs"
          baseDelay={0.5}
          staggerDelay={0.1}
          direction="up"
        >
          <Link
            href="https://scholar.google.com/citations?user=XHVqHR4AAAAJ&hl=en"
            aria-label="Google Scholar"
            className="flex flex-col items-center gap-1"
          >
            <FaGraduationCap className="w-10 h-10"/>
            <p>Google Scholar</p>
          </Link>
          <Link
            href="https://github.com/vinamarora8"
            aria-label="GitHub"
            className="flex flex-col items-center gap-1"
          >
            <FaGithub className="w-10 h-10"/>
            <p>Github</p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/vinam-arora/"
            aria-label="LinkedIn"
            className="flex flex-col items-center gap-1"
          >
            <FaLinkedin className="w-10 h-10"/>
            <p>LinkedIn</p>
          </Link>
          <Link
            href="mailto:vinam@gatech.edu"
            aria-label="Email"
            className="flex flex-col items-center gap-1"
          >
            <FaEnvelope className="w-10 h-10"/>
            <p>Email</p>
          </Link>
        </AnimateIn>
      </div>
    </div>
  );
};

export default Profile;

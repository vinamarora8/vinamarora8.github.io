import React from 'react';
import { FaLocationDot, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa6';
import { FaGraduationCap } from 'react-icons/fa';
import AnimateIn from './AnimateIn';
import ProgressiveImage from './ProgressiveImage';
import TiltEffect from './TiltEffect';
import Link from './Link';

const ProfileLeft: React.FC = () => {
  return (
    <AnimateIn
      className="mt-3 flex flex-col items-center gap-8 md:w-[288px]"
      baseDelay={0.1}
      direction="left"
      staggerDelay={0.1}
    >
      <TiltEffect maxTiltDegrees={5} shadowIntensity={0.05}>
        <div className="shadow-profile-pic max-w-[288px] rounded-4xl md:max-w-none">
          <ProgressiveImage
            lowResSrc="/images/profile-image-low.jpg"
            highResSrc="/images/profile-image.jpg"
            alt="Vinam Arora"
          />
        </div>
      </TiltEffect>

      <div className="flex flex-col items-center text-center text-lg font-normal">
        <p>Machine Learning Ph.D. Student</p>
        <p>@ Georgia Tech</p>
        <div className="text-secondary mt-2.5 flex flex-row items-center gap-1.5">
          <FaLocationDot className="mb-0.5" />
          <p>Atlanta, Georgia, USA</p>
        </div>
      </div>
    </AnimateIn>
  );
};

const ProfileRight: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:w-[60%]">
      <AnimateIn
        className="flex flex-col gap-5 text-justify text-lg"
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
          like working with challenging datasets and am actively working on developing deep learning
          methods for computational neuroscience, graphs, and timeseries.
        </p>
        <p>
          I did my undergrad in Electronics and Communication Engineering from the Indian Institute
          of Technology - Roorkee. Before diving into machine learning research, I used to work as a
          chip-design engineer at Texas Instruments.
        </p>
      </AnimateIn>

      <AnimateIn
        className="mt-8 flex flex-row gap-x-16 text-center text-[10px]"
        baseDelay={0.5}
        staggerDelay={0.1}
        direction="up"
      >
        <Link
          href="https://scholar.google.com/citations?user=XHVqHR4AAAAJ&hl=en"
          aria-label="Google Scholar"
          className="flex flex-col items-center gap-1"
        >
          <FaGraduationCap className="h-10 w-10" />
          <p>Google Scholar</p>
        </Link>
        <Link
          href="https://github.com/vinamarora8"
          aria-label="GitHub"
          className="flex flex-col items-center gap-1"
        >
          <FaGithub className="h-10 w-10" />
          <p>Github</p>
        </Link>
        <Link
          href="https://www.linkedin.com/in/vinam-arora/"
          aria-label="LinkedIn"
          className="flex flex-col items-center gap-1"
        >
          <FaLinkedin className="h-10 w-10" />
          <p>LinkedIn</p>
        </Link>
        <Link
          href="mailto:vinam@gatech.edu"
          aria-label="Email"
          className="flex flex-col items-center gap-1"
        >
          <FaEnvelope className="h-10 w-10" />
          <p>Email</p>
        </Link>
      </AnimateIn>
    </div>
  );
};

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start md:gap-14">
      <ProfileLeft />
      <ProfileRight />
    </div>
  );
};

export default Profile;

import React from 'react';
import { Textfit } from 'react-textfit';
import AnimateIn from './AnimateIn';
import Link from './Link';

const Header: React.FC = () => {
  return (
    <div className="mb-4 flex flex-col items-center justify-between md:flex-row">
      <AnimateIn
        className="w-full text-center font-normal md:w-[32%]"
        direction="down"
        baseDelay={0}
      >
        <Textfit
          mode="single"
          max={50} // Maximum font size
          min={24} // Minimum font size for readability
        >
          Vinam Arora
        </Textfit>
      </AnimateIn>
      <AnimateIn className="flex gap-10 font-normal" direction="down" baseDelay={0.1}>
        <Link href="/#/" newTab={false}>
          Home
        </Link>
        <Link href="/#/career" newTab={false}>
          Career
        </Link>
      </AnimateIn>
    </div>
  );
};

export default Header;

import React from 'react';
import careerData from '../data/career.yaml';
import AnimateIn from './AnimateIn';
import clsx from 'clsx';
import parse from 'html-react-parser';
import { desc } from 'framer-motion/client';
import Link from './Link';

const Career: React.FC = () => {
  const careerList: CareerItemProps[] = careerData;

  return (
    <div className="my-8 flex flex-row justify-center">
      <AnimateIn direction="down" baseDelay={0.2} staggerDelay={0.1} className="flex flex-col">
        {careerList.map((item, index) => (
          <CareerItem key={index} {...item} />
        ))}
      </AnimateIn>
    </div>
  );
};

export default Career;

interface CareerItemProps {
  logo: string;
  title: string;
  venue: string;
  timeline: string;
  description?: string;
}

const CareerItem: React.FC<CareerItemProps> = ({ logo, title, venue, timeline, description }) => {
  return (
    <div className="flex items-stretch gap-x-3">
      {/* Left side: */}
      <div
        className={clsx(
          'invisible w-0 overflow-hidden md:visible md:w-[100px]',
          'h-14',
          'flex flex-col justify-center',
          'text-right text-sm font-medium'
        )}
      >
        <p>{timeline}</p>
      </div>

      {/* Middle (logo) */}
      <div className="ml-[-20px] flex flex-col items-center md:ml-0">
        <div className={clsx('h-10 w-10', 'md:h-14 md:w-14', 'flex flex-col justify-center')}>
          <img src={logo} className="h-auto w-full" alt={title} />
        </div>

        <div className="bg-secondary h-[calc(100%-var(--spacing)*10)] w-0.5 rounded-full"></div>
      </div>

      {/* Right side */}
      <div className={'mb-3 flex max-w-[500px] flex-col'}>
        {/* Title container */}
        <div className={clsx(`flex min-h-10 flex-col justify-center md:h-14`)}>
          <p className="text-xs font-medium md:hidden md:text-base">{timeline}</p>
          <p className="text-sm font-medium md:text-xl">{title}</p>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-y-3">
          <p className="text-sm md:text-xl">{venue}</p>
          {description && (
            <div
              className={clsx(
                'flex flex-col gap-y-2 md:gap-y-3',
                'text-justify text-sm md:text-base'
              )}
            >
              {parse(description, {
                replace: (domNode) => {
                  if (domNode.type === 'tag' && domNode.name === 'a') {
                    // Get the text content safely
                    const linkText =
                      domNode.children?.[0]?.type === 'text'
                        ? domNode.children[0].data
                        : domNode.attribs?.href || 'Link';

                    return (
                      <Link href={domNode.attribs.href} className="underline">
                        {linkText}
                      </Link>
                    );
                  }
                },
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

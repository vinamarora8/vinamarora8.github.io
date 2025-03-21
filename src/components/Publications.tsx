import React from 'react';
import AnimateIn from './AnimateIn';
import publicationsData from '../data/publications.yaml';
import Accordian from './Accordian';
import { GoCommentDiscussion } from 'react-icons/go';
import { PiPresentation } from 'react-icons/pi';
import { CgWebsite } from 'react-icons/cg';
import { IoLinkOutline } from 'react-icons/io5';
import clsx from 'clsx';
import Link from './Link';

interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  links: {
    paper?: string;
    project?: string;
    poster?: string;
    openReview?: string;
  };
  abstract?: string;
}

const myName: string = 'V. Arora';

export default function Publications() {
  return (
    <section className="mt-16">
      <AnimateIn baseDelay={0.1} direction="right">
        <h2>My Publications</h2>
      </AnimateIn>

      <AnimateIn
        className="flex flex-col gap-8"
        baseDelay={0.3}
        staggerDelay={0.2}
        direction="right"
      >
        {(publicationsData as Publication[]).map((publication, index) => (
          <Accordian key={index}>
            {({ isExpanded }) => (
              <PublicationContent expanded={isExpanded} publication={publication} />
            )}
          </Accordian>
        ))}
      </AnimateIn>
    </section>
  );
}

interface PublicationContentProps {
  expanded: boolean;
  publication: Publication;
}

function PublicationContent({ expanded, publication: pub }: PublicationContentProps) {
  return (
    <div className="my-[6px]">
      {/* Title */}
      <p className="text-base leading-6 font-medium md:text-[20px]">{pub.title}</p>

      {/* Authors */}
      <div className="mb-2 text-sm md:text-base">
        {pub.authors.map((author, index) => (
          <React.Fragment key={index}>
            <span className={author === myName ? 'font-medium' : ''}>{author}</span>
            {index < pub.authors.length - 1 && ', '}
          </React.Fragment>
        ))}
      </div>

      <p className="text-sm font-medium md:text-base">
        {pub.venue}, {pub.year}
      </p>

      {/* Abstract */}
      <div
        className={clsx(
          'text-sm md:text-base',
          'max-h-0 overflow-hidden text-justify opacity-0',
          'transition-all duration-300 ease-in-out',
          expanded && 'max-h-[1000px] opacity-100'
        )}
      >
        <div style={{ height: 15 }}></div>
        <span className="font-medium">Abstract: </span>
        {pub.abstract}
        <div style={{ height: 15 }}></div>
      </div>

      {/* Links */}
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
        {pub.links.paper && (
          <Link href={pub.links.paper} aria-label="Paper" className="flex items-center gap-x-1.5">
            <CgWebsite />
            <p>Paper</p>
          </Link>
        )}

        {pub.links.project && (
          <Link
            href={pub.links.project}
            aria-label="Project Page"
            className="flex items-center gap-x-1.5"
          >
            <IoLinkOutline />
            <p>Project Page</p>
          </Link>
        )}

        {pub.links.poster && (
          <Link href={pub.links.poster} aria-label="Poster" className="flex items-center gap-x-1.5">
            <PiPresentation />
            <p>Poster</p>
          </Link>
        )}

        {pub.links.openReview && (
          <Link
            href={pub.links.openReview}
            aria-label="OpenReview"
            className="flex items-center gap-x-1.5"
          >
            <GoCommentDiscussion />
            <p>OpenReview</p>
          </Link>
        )}
      </div>
    </div>
  );
}

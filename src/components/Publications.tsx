import React from 'react';
import AnimateIn from './AnimateIn';
import publicationsData from '../data/publications.yaml';
import Accordian from './Accordian';
import { GoCommentDiscussion } from 'react-icons/go';
import { PiPresentation } from 'react-icons/pi';
import { CgWebsite } from 'react-icons/cg';
import { IoLinkOutline } from 'react-icons/io5';

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

const Publications: React.FC = () => {
  const publicationList: Publication[] = publicationsData;

  return (
    <section className="publications mt-16">
      <AnimateIn baseDelay={0.1} direction="right">
        <h2 className="text-3xl">My Publications</h2>
      </AnimateIn>

      <AnimateIn
        className="publications__list"
        baseDelay={0.3}
        staggerDelay={0.2}
        direction="right"
      >
        {publicationList.map((publication, index) => (
          <Accordian key={index}>
            {({ isExpanded }) => (
              <PublicationContent expanded={isExpanded} publication={publication} />
            )}
          </Accordian>
        ))}
      </AnimateIn>
    </section>
  );
};

interface PublicationContentProps {
  expanded: boolean;
  publication: Publication;
}

const PublicationContent: React.FC<PublicationContentProps> = ({ expanded, publication: pub }) => {
  return (
    <div className="publications__content">
      <h3 className="publications__title">{pub.title}</h3>
      <div className="publications__authors">
        {pub.authors.map((author, index) => (
          <React.Fragment key={index}>
            <span className={author === myName ? 'myself' : ''}>{author}</span>
            {index < pub.authors.length - 1 && ', '}
          </React.Fragment>
        ))}
      </div>
      <div className="publications__venue">
        {pub.venue}, {pub.year}
      </div>

      <div
        className={`publications__abstract ${expanded ? `publications__abstract--visible` : ''}`}
      >
        <div style={{ height: 15 }}></div>
        <span style={{ fontWeight: 400 }}>Abstract: </span>
        {pub.abstract}
        <div style={{ height: 15 }}></div>
      </div>

      <div className="publications__links">
        {pub.links.paper && (
          <a href={pub.links.paper} target="_blank" rel="noopener noreferrer">
            <CgWebsite /> <p>Paper</p>
          </a>
        )}

        {pub.links.project && (
          <a href={pub.links.project} target="_blank" rel="noopener noreferrer">
            <IoLinkOutline /> <p>Project Page</p>
          </a>
        )}

        {pub.links.poster && (
          <a href={pub.links.poster} target="_blank" rel="noopener noreferrer">
            <PiPresentation /> <p>Poster</p>
          </a>
        )}

        {pub.links.openReview && (
          <a href={pub.links.openReview} target="_blank" rel="noopener noreferrer">
            <GoCommentDiscussion /> <p>OpenReview</p>
          </a>
        )}
      </div>
    </div>
  );
};

export default Publications;

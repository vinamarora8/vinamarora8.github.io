import React from 'react';
import { FaFilePdf, FaImage, FaExternalLinkAlt } from 'react-icons/fa';
import AnimateIn from './AnimateIn';
import publicationsData from '../data/publications.yaml';

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
}

const myName: string = 'V. Arora';

const Publications: React.FC = () => {
    return (
        <section className="section publications">
            <AnimateIn baseDelay={0.1} direction="right">
                <h2 className="section-title">My Publications</h2>
            </AnimateIn>

            <AnimateIn
                className="publications__list"
                baseDelay={0.3}
                staggerDelay={0.2}
                direction="right"
            >
                {(publicationsData as Publication[]).map((publication, index) => (
                    <div key={index} className="publications__item">
                        <div className="publications__content">
                            <h3 className="publications__title">{publication.title}</h3>
                            <div className="publications__authors">
                                {publication.authors.map((author, index) => (
                                    <React.Fragment key={index}>
                                        <span className={author === myName ? 'myself' : ''}>
                                            {author}
                                        </span>
                                        {index < publication.authors.length - 1 && ', '}
                                    </React.Fragment>
                                ))}
                            </div>
                            <div className="publications__details">
                                <div className="publications__details__venue">
                                    {publication.venue}, {publication.year}
                                </div>

                                <div className="publications__details__links">
                                    {publication.links.paper && (
                                        <a
                                            href={publication.links.paper}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaFilePdf /> <p>Paper</p>
                                        </a>
                                    )}

                                    {publication.links.project && (
                                        <a
                                            href={publication.links.project}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaExternalLinkAlt /> <p>Project Page</p>
                                        </a>
                                    )}

                                    {publication.links.poster && (
                                        <a
                                            href={publication.links.poster}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaImage /> <p>Poster</p>
                                        </a>
                                    )}

                                    {publication.links.openReview && (
                                        <a
                                            href={publication.links.openReview}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaExternalLinkAlt /> <p>OpenReview</p>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </AnimateIn>
        </section>
    );
};

export default Publications;

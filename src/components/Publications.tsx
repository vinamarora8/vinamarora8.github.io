import React from 'react';
import { FaFilePdf, FaImage, FaExternalLinkAlt } from 'react-icons/fa';

interface Publication {
  id: number;
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

const publicationsData: Publication[] = [
  {
    id: 1,
    title: 'Multi-session, multi-task neural decoding from distinct cell-types and brain regions',
    authors: ['M. Azabou', 'K. X. Pan', 'V. Arora', 'I. J. Knight', 'E. L. Dyer', 'B. Richards'],
    venue: 'Accepted at Neural Information Processing Systems (NeurIPS)',
    year: 2024,
    links: {
      paper: '#'
    }
  },
  {
    id: 2,
    title: 'A Unified, Scalable Framework for Neural Population Decoding',
    authors: ['M. Azabou', 'V. Arora', 'V. Ganesh', 'X. Mao', 'S. Nachimuthu', 'M. Mendelson', 'B. Richards', 'M. Perich', 'G. Lajoie', 'E. L. Dyer'],
    venue: 'Presented at Neural Information Processing Systems (NeurIPS)',
    year: 2023,
    links: {
      paper: '#',
      project: '#',
      poster: '#',
      openReview: '#'
    }
  },
  {
    id: 3,
    title: 'GraphFM: A Scalable Framework For Multi-Graph Pretraining',
    authors: ['Divyansha L.', 'M. Azabou', 'V. Arora', 'E. L. Dyer'],
    venue: 'arXiv Preprint',
    year: 2024,
    links: {
      paper: '#'
    }
  }
];

const Publications: React.FC = () => {
  return (
    <section className="section publications">
      <h2 className="section-title">My Publications</h2>
      
      <div className="publications__list">
        {publicationsData.map((publication) => (
          <div key={publication.id} className="publications__item">
            <div className="publications__content">
              <h3 className="publications__title">{publication.title}</h3>
              <div className="publications__authors">
                {publication.authors.map((author, index) => (
                  <React.Fragment key={index}>
                    <span className={author === "V. Arora" ? "myself" : ""}>
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
                        <a href={publication.links.paper} target="_blank" rel="noopener noreferrer">
                            <FaFilePdf /> Paper
                        </a>
                        )}
                        
                        {publication.links.project && (
                        <a href={publication.links.project} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt /> Project Page
                        </a>
                        )}
                        
                        {publication.links.poster && (
                        <a href={publication.links.poster} target="_blank" rel="noopener noreferrer">
                            <FaImage /> Poster
                        </a>
                        )}
                        
                        {publication.links.openReview && (
                        <a href={publication.links.openReview} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt /> OpenReview
                        </a>
                        )}
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications; 
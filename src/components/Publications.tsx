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
      paper: 'https://openreview.net/pdf?id=IuU0wcO0mo'
    }
  },
  {
    id: 2,
    title: 'A Unified, Scalable Framework for Neural Population Decoding',
    authors: ['M. Azabou', 'V. Arora', 'V. Ganesh', 'X. Mao', 'S. Nachimuthu', 'M. Mendelson', 'B. Richards', 'M. Perich', 'G. Lajoie', 'E. L. Dyer'],
    venue: 'Presented at Neural Information Processing Systems (NeurIPS)',
    year: 2023,
    links: {
      paper: 'https://arxiv.org/abs/2310.16046',
      project: 'https://poyo-brain.github.io/',
      poster: 'https://nips.cc/media/PosterPDFs/NeurIPS%202023/70241.png?t=1702162469.6729155',
      openReview: 'https://openreview.net/forum?id=sw2Y0sirtM'
    }
  },
  {
    id: 3,
    title: 'GraphFM: A Scalable Framework For Multi-Graph Pretraining',
    authors: ['Divyansha L.', 'M. Azabou', 'V. Arora', 'E. L. Dyer'],
    venue: 'arXiv Preprint',
    year: 2024,
    links: {
      paper: 'https://arxiv.org/abs/2407.11907'
    }
  }
];

const myName: string = "V. Arora";

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
                    <span className={author === myName ? "myself" : ""}>
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
                            <FaFilePdf /> <p>Paper</p>
                        </a>
                        )}
                        
                        {publication.links.project && (
                        <a href={publication.links.project} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt /> <p>Project Page</p>
                        </a>
                        )}
                        
                        {publication.links.poster && (
                        <a href={publication.links.poster} target="_blank" rel="noopener noreferrer">
                            <FaImage /> <p>Poster</p>
                        </a>
                        )}
                        
                        {publication.links.openReview && (
                        <a href={publication.links.openReview} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt /> <p>OpenReview</p>
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
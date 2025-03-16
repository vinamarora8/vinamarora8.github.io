import React from 'react';
import careerData from '../data/career.yaml';

const Career: React.FC = () => {
  const careerList: CareerItemProps[] = careerData;

  return (
    <div className="career-container">
      <div className="career-list">
        {careerList.map((item, index) => (
          <CareerItem key={index} {...item} />
        ))}
      </div>
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
    <div className="career-item">
      <div className="career-item__timeline">{timeline}</div>
      <div className="career-item__bar-container">
        <div className="career-item__logo" />
        <div className="career-item__bar" />
      </div>
      <div className="career-item__text">
        <div className="career-item__title">{title}</div>
        <h4 className="career-item__venue">{venue}</h4>
        {description && (
          <div className="career-item__description">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        )}
      </div>
    </div>
  );
};

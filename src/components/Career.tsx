import React from 'react';
import careerData from '../data/career.yaml';
import AnimateIn from './AnimateIn';

const Career: React.FC = () => {
  const careerList: CareerItemProps[] = careerData;

  return (
    <div className="career-container">
        <AnimateIn direction="down" className="career-list" baseDelay={0.2} staggerDelay={0.1}>
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
    <div className="career-item">
      <div className="career-item__upper desktop">
        <div className="career-item__upper__timeline">{timeline}</div>
        <img className="career-item__upper__logo" src={logo}/>
        <div className="career-item__upper__title">{title}</div>
      </div>
      <div className="career-item__upper mobile">
        <img className="career-item__upper__logo mobile" src={logo}/>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div className="career-item__upper__timeline mobile">{timeline}</div>
          <div className="career-item__upper__title mobile">{title}</div>
        </div>
      </div>
      <div className="career-item__lower">
        <div className="career-item__lower__left" />
        <div className="career-item__lower__bar-container">
          <div className="career-item__lower__bar" />
        </div>
        <div className="career-item__lower__text">
          <div className="career-item__lower__text__venue">{venue}</div>
          {description && (
            <div 
              className="career-item__lower__text__description"
              dangerouslySetInnerHTML={{ __html: description }} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

import React from "react";

const Career: React.FC = () => {
    return (
        <div className="career-container">
            <div className="career-list">
                <CareerItem
                    logo="none"
                    title="Ph.D. in Machine Learning"
                    venue="Georgia Institute of Technology, GA, USA"
                    timeline="2024 - ongoing"
                />
            </div>
        </div>
    )
}

export default Career;

interface CareerItemProps {
    logo: string;
    title: string;
    venue: string;
    timeline: string;
    description?: string;
}

const CareerItem: React.FC<CareerItemProps> = ({
    logo,
    title,
    venue,
    timeline,
    description,
}) => {
    return (
        <div className="career-item">
            <div className="career-item__timeline">
                {timeline}
            </div>
            <div className="career-item__bar-container">
                <div className="career-item__logo"/>
                <div className="career-item__bar" />
            </div>
            <div className="career-item__text">
                <h3>{title}</h3>
                <h4>{venue}</h4>
                {description && <p>{description}</p>}
            </div>

        </div>

    )
}
import React, { ReactNode, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

interface AccordianProps {
  children: (props: { isExpanded: boolean }) => ReactNode;
}

const Accordian: React.FC<AccordianProps> = ({ children }) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className="publications__item">
      <div
        className="publications__abstract-button"
        onClick={() => setExpanded(!isExpanded)}
      >
        <div className="publications__abstract-button__border"/>
        <div className="publications__abstract-button__container">
          <FaAngleDown
            style={{ transform: isExpanded ? 'rotate(180deg)' : '' }}
          />
        </div>
      </div>

      {children({ isExpanded })}
    </div>
  )
}

export default Accordian
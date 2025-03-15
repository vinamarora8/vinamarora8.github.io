import React, { ReactNode, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

interface AccordianProps {
  children: (props: { isExpanded: boolean }) => ReactNode;
}

const Accordian: React.FC<AccordianProps> = ({ children }) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className="accordian">
      <div
        className="accordian__container"
        onClick={() => setExpanded(!isExpanded)}
      >
        <div className="accordian__border"/>
        <div className="accordian__button">
          <FaAngleDown
            style={{ transform: isExpanded ? 'rotate(180deg)' : '' }}
            strokeWidth="30px"
          />
        </div>
      </div>

      {children({ isExpanded })}
    </div>
  )
}

export default Accordian
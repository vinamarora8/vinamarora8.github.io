import React, { ReactNode, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

interface AccordianProps {
  children: (props: { isExpanded: boolean }) => ReactNode;
  customToggle?: (props: { 
    isExpanded: boolean, 
    toggleExpanded: () => void 
  }) => ReactNode;
}

const Accordian: React.FC<AccordianProps> = ({ children, customToggle }) => {
  const [isExpanded, setExpanded] = useState(false);
  
  const toggleExpanded = () => setExpanded(!isExpanded);

  const defaultToggle = (
    <div
      className="accordian__container"
      onClick={toggleExpanded}
    >
      <div className="accordian__border"/>
      <div className="accordian__button">
        <FaChevronDown
          style={{ transform: isExpanded ? 'rotate(180deg)' : '' }}
          strokeWidth="30px"
        />
      </div>
    </div>
  );

  return (
    <div className="accordian">
      {customToggle 
        ? customToggle({ isExpanded, toggleExpanded }) 
        : defaultToggle}

      {children({ isExpanded })}
    </div>
  );
}

export default Accordian;
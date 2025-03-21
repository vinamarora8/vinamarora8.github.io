import clsx from 'clsx';
import { ReactNode, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

interface AccordianToggleProps {
  isExpanded: boolean;
  toggleExpanded: () => void;
}

function AccordianToggle({ isExpanded, toggleExpanded }: AccordianToggleProps) {
  return (
    <>
      {/* Main container */}
      <div
        className="group/toggle-button flex cursor-pointer flex-row gap-[9px]"
        onClick={toggleExpanded}
      >
        {/* Left-side border */}
        <div className="relative w-[6px]">
          {/* Base div: gray */}
          <div
            className={clsx(
              'absolute h-full w-full',
              'rounded-tl-[3px] rounded-bl-[3px]',
              // base color
              'bg-comp-gray-100'
            )}
          />

          {/* An overlayed div that becomes visible when mouse hovers on container */}
          <div
            className={clsx(
              'absolute h-full w-full',
              'rounded-tl-[3px] rounded-bl-[3px]',
              // Gradient define
              'bg-gradient-to-b from-[#ffaec2] to-[#7ec3ff]',
              // Visibility switches
              'opacity-0 group-hover/full:opacity-100',
              isExpanded && 'opacity-100',
              'transition-all duration-100 ease-in'
            )}
          />
        </div>

        {/* Chevron button */}
        <div
          className={clsx(
            'mt-[10px]',
            'text-comp-gray-200',
            // Change color when hovering on the main container
            `group-hover/toggle-button:text-[#ffaec2]`
          )}
          style={{ transition: 'color 0.1s ease-in' }}
        >
          <FaChevronDown
            style={{
              transform: isExpanded ? 'rotate(180deg)' : '',
              height: '9px',
              width: '9px',
              transition: 'transform 0.2s ease-in-out',
              strokeWidth: '30px',
            }}
          />
        </div>
      </div>
    </>
  );
}

interface AccordianProps {
  children: (props: { isExpanded: boolean }) => ReactNode;
}

export default function Accordian({ children }: AccordianProps) {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!isExpanded);

  return (
    <div className={clsx('flex flex-row gap-[9px]', 'group/full')}>
      <AccordianToggle isExpanded={isExpanded} toggleExpanded={toggleExpanded} />
      {children({ isExpanded })}
    </div>
  );
}

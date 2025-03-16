import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface LinkProps {
  children: ReactNode | ReactNode[];
  href: string;
  'aria-label'?: string;
  className?: string;
  newTab?: boolean;
}

const Link: React.FC<LinkProps> = ({
  children,
  href,
  'aria-label': ariaLabel = '',
  className = '',
  newTab = true,
}) => {
  return (
    <a
      href={href}
      target={newTab ? '_blank' : '_self'}
      aria-label={ariaLabel}
      rel="noopener noreferrer"
      className={twMerge(className, 'hover:text-accent transition-all duration-100')}
    >
      {children}
    </a>
  );
};

export default Link;

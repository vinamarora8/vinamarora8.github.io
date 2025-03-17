import clsx from 'clsx';
import { ReactNode } from 'react';

interface LinkProps {
  children: ReactNode | ReactNode[];
  href: string;
  'aria-label'?: string;
  className?: string;
  newTab?: boolean;
  hoverStyle?: boolean;
}

function Link({
  children,
  href,
  'aria-label': ariaLabel = '',
  className = '',
  newTab = true,
  hoverStyle = true,
}: LinkProps) {
  return (
    <a
      href={href}
      target={newTab ? '_blank' : '_self'}
      aria-label={ariaLabel}
      rel="noopener noreferrer"
      className={clsx(className, hoverStyle && 'hover:text-accent transition-all duration-100')}
    >
      {children}
    </a>
  );
}

export default Link;

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  className?: string;
}

const AnimateIn: React.FC<AnimateInProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className = '',
}) => {
  // Define the initial and animate states based on direction
  const getDirectionOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 30 };
      case 'down':
        return { y: -30 };
      case 'left':
        return { x: 30 };
      case 'right':
        return { x: -30 };
      default:
        return { y: 30 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...getDirectionOffset(),
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateIn; 
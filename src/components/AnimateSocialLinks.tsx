import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimateSocialLinksProps {
  children: ReactNode[];
  baseDelay?: number;
  staggerDelay?: number;
  className?: string;
}

const AnimateSocialLinks: React.FC<AnimateSocialLinksProps> = ({
  children,
  baseDelay = 0.5,
  staggerDelay = 0.1,
  className = '',
}) => {
  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: baseDelay,
        staggerChildren: staggerDelay,
      },
    },
  };

  // Item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimateSocialLinks; 
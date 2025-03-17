import React, { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimateInProps {
  children: ReactNode | ReactNode[];
  direction: 'up' | 'down' | 'left' | 'right';
  className?: string;
  baseDelay?: number;
  staggerDelay?: number;
  duration?: number;
  threshold?: number; // Visibility threshold for triggering animation
  once?: boolean; // Whether to trigger animation only once
}

export default function AnimateIn({
  children,
  direction,
  className = '',
  baseDelay = 0.2,
  staggerDelay = 0.2,
  duration = 0.3,
  threshold = 0.1, // Default to 10% visibility
  once = true, // Default to trigger only once
}: AnimateInProps) {
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
    hidden: { opacity: 0, ...getDirectionOffset() },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration,
        ease: 'easeOut',
      },
    },
  };

  // Animate on scroll
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: once,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

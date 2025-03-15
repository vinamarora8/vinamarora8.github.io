import React, { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatePublicationsProps {
    children: ReactNode[];
    baseDelay?: number;
    staggerDelay?: number;
    threshold?: number; // Visibility threshold for triggering animation
    once?: boolean; // Whether to trigger animation only once
}

const AnimatePublications: React.FC<AnimatePublicationsProps> = ({
    children,
    baseDelay = 0.2,
    staggerDelay = 0.2,
    threshold = 0.1, // Default to 10% visibility
    once = true, // Default to trigger only once
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        amount: threshold, 
        once: once 
    });
    
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
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier for a nice easing
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className="publications__list"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {React.Children.map(children, (child, index) => (
                <motion.div key={index} variants={itemVariants}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default AnimatePublications;

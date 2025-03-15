import React, { ReactNode, useRef, useState, useEffect } from 'react';
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
    threshold = 0.04, // Default to 10% visibility
    once = true, // Default to trigger only once
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        amount: threshold, 
        once: once 
    });
    
    // Track if this is the initial render
    const [isInitialRender, setIsInitialRender] = useState(true);
    
    // Track if the element was in view during initial render
    const [wasInitiallyInView, setWasInitiallyInView] = useState(false);
    
    useEffect(() => {
        // Check if element is in view on initial render
        if (isInitialRender && isInView) {
            setWasInitiallyInView(true);
        }
        
        // After first render, set isInitialRender to false
        if (isInitialRender) {
            setIsInitialRender(false);
        }
    }, [isInView, isInitialRender]);
    
    // Only apply baseDelay if element was not in view during initial render
    const effectiveBaseDelay = wasInitiallyInView ? baseDelay : 0;

    // Container animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: effectiveBaseDelay,
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

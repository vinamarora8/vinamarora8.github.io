import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: 0.2,
                ease: 'easeOut',
            }}
        >
            <p>© {currentYear} Vinam Arora</p>
        </motion.footer>
    );
};

export default Footer;

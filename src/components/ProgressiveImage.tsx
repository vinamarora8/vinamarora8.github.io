import React, { useState, useEffect } from 'react';

interface ProgressiveImageProps {
    lowResSrc: string;
    highResSrc: string;
    alt: string;
    className?: string;
}

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
    lowResSrc,
    highResSrc,
    alt,
    className = '',
}) => {
    const [isHighResLoaded, setIsHighResLoaded] = useState(false);

    useEffect(() => {
        // Preload high resolution image
        const img = new Image();
        img.src = highResSrc;
        img.onload = () => {
            setIsHighResLoaded(true);
        };
    }, [highResSrc]);

    return (
        <div className={`progressive-image-container ${className}`}>
            {/* Low-res image (always present, hidden when high-res is loaded) */}
            <img
                src={lowResSrc}
                alt={alt}
                className="progressive-image low-res"
                style={{
                    opacity: isHighResLoaded ? 0 : 1,
                    filter: 'blur(10px)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'opacity 0.3s ease-out',
                }}
            />

            {/* High-res image (fades in when loaded) */}
            <img
                src={highResSrc}
                alt={alt}
                className="progressive-image high-res"
                style={{
                    opacity: isHighResLoaded ? 1 : 0,
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'opacity 0.3s ease-out',
                }}
            />
        </div>
    );
};

export default ProgressiveImage;

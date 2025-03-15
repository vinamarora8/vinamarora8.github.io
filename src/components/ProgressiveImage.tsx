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
  const [src, setSrc] = useState(lowResSrc);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload high resolution image
    const img = new Image();
    img.src = highResSrc;
    img.onload = () => {
      setSrc(highResSrc);
      setIsLoaded(true);
    };
  }, [highResSrc]);

  return (
    <div className={`progressive-image-container ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`progressive-image ${isLoaded ? 'loaded' : 'loading'}`}
        style={{
          filter: isLoaded ? 'none' : 'blur(10px)',
          transition: 'filter 0.3s ease-out'
        }}
      />
    </div>
  );
};

export default ProgressiveImage; 
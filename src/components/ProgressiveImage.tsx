import clsx from 'clsx';
import { useState, useEffect } from 'react';

interface ProgressiveImageProps {
  lowResSrc: string;
  highResSrc: string;
  alt: string;
  className?: string;
}

export default function ProgressiveImage({
  lowResSrc,
  highResSrc,
  alt,
  className = '',
}: ProgressiveImageProps) {
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
    <div className={clsx('relative overflow-hidden', className)}>
      {/* Low-res image (always present, hidden when high-res is loaded) */}
      <img
        src={lowResSrc}
        alt={alt}
        className="low-res block h-full w-full object-cover"
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
        className="high-res block h-full w-full object-cover"
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
}

import React, { useState, useRef, ReactNode } from 'react';

interface TiltEffectProps {
  children: ReactNode;
  className?: string;
  enabled?: boolean;
  maxTiltDegrees?: number;
  perspective?: number;
  shadowIntensity?: number;
  transitionSpeed?: {
    tiltIn: string;
    tiltOut: string;
  };
}

export default function TiltEffect({
  children,
  className = '',
  enabled = true,
  maxTiltDegrees = 5,
  perspective = 1000,
  transitionSpeed = { tiltIn: '0.1s', tiltOut: '0.5s' },
}: TiltEffectProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement for tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled || !containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    // Calculate mouse position relative to the center of the container
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Get mouse position relative to the container
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate the tilt angle
    // Invert the values so the element tilts away from the mouse
    const tiltX = ((mouseY - centerY) / centerY) * -maxTiltDegrees;
    const tiltY = ((mouseX - centerX) / centerX) * maxTiltDegrees;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 }); // Reset tilt when mouse leaves
  };

  return (
    <div
      ref={containerRef}
      className={`tilt-effect-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: enabled ? `${perspective}px` : 'none',
      }}
    >
      <div
        className="tilt-effect-inner"
        style={{
          transform:
            isHovering && enabled
              ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
              : 'rotateX(0deg) rotateY(0deg)',
          transition: isHovering
            ? `transform ${transitionSpeed.tiltIn} ease-out`
            : `transform ${transitionSpeed.tiltOut} ease-out`,
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        {children}
      </div>
    </div>
  );
}

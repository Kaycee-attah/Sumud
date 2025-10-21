// TiltedCard.tsx
import { useRef, useState, ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

interface TiltedCardProps {
  children: ReactNode;
  containerHeight?: string;
  containerWidth?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  className?: string;
  shadowIntensity?: number;
  enableGlare?: boolean;
}

export default function TiltedCard({
  children,
  containerHeight = 'auto',
  containerWidth = 'auto',
  scaleOnHover = 1.05,
  rotateAmplitude = 8,
  showMobileWarning = false,
  className = '',
  shadowIntensity = 0.3,
  enableGlare = true
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const glareOpacity = useSpring(0);

  const [lastY, setLastY] = useState(0);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    // Glare effect based on mouse position
    const glareX = (e.clientX - rect.left) / rect.width;
    const glareY = (e.clientY - rect.top) / rect.height;
    
    if (enableGlare) {
      glareOpacity.set(0.4);
    }
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    glareOpacity.set(0);
  }

  return (
    <figure
      ref={ref}
      className={`tilted-card-figure ${className}`}
      style={{
        height: containerHeight,
        width: containerWidth,
        maxWidth: '100%'
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="tilted-card-mobile-alert">This effect is not optimized for mobile. Check on desktop.</div>
      )}

      {/* Enhanced shadow container */}
      <motion.div
        className="tilted-card-shadow"
        style={{
          rotateX,
          rotateY,
          scale,
          boxShadow: `
            ${rotateX.get() * 2}px ${rotateY.get() * 2}px 20px rgba(0, 0, 0, ${shadowIntensity}),
            0 0 40px rgba(0, 0, 0, ${shadowIntensity * 0.5})
          `
        }}
      >
        {/* Glare effect */}
        {enableGlare && (
          <motion.div 
            className="tilted-card-glare"
            style={{
              opacity: glareOpacity,
              background: `radial-gradient(circle at ${x.get()}px ${y.get()}px, rgba(255,255,255,0.8) 0%, transparent 80%)`
            }}
          />
        )}
        
        <div className="tilted-card-inner">
          {children}
        </div>
      </motion.div>
    </figure>
  );
}
import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import useIsMobile from '../hooks/useIsMobile';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children, delay=0, direction='up', className='', once=true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView: boolean = useInView(ref, { once, margin: '-40px' });
  const isMobile: boolean = useIsMobile();

  // On mobile no initial hidden state
  if (isMobile) {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0.3, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 20 }}
        transition={{ duration: 0.5, delay: Math.min(delay, 0.1), ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    );
  }

  const directionOffset = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: 60 },
    right: { x: -60 },
    none: {},
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directionOffset[direction] }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}

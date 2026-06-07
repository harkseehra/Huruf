import type { Variants } from 'framer-motion';

export const SPRING = { type: 'spring', stiffness: 300, damping: 30 } as const;
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;
export const DURATION = 0.42;

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: DURATION, ease: EASE_OUT },
  }),
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: DURATION, ease: EASE_OUT },
  }),
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.18 } },
};

export const pageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: DURATION, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    scale: 1.01,
    filter: 'blur(2px)',
    transition: { duration: 0.24, ease: [0.36, 0, 0.66, 0] },
  },
};

export const navVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE_OUT } },
};

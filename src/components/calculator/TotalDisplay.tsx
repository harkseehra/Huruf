'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useNumeralSystem } from '@/hooks/useNumeralSystem';
import { fadeUpVariants } from '@/lib/motion';

interface TotalDisplayProps {
  total: number;
  reduced: number;
}

function AnimatedNumber({ target, format }: { target: number; format: (n: number) => string }) {
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => format(Math.round(v)));
  const prevRef = useRef(0);

  useEffect(() => {
    const ctrl = animate(mv, target, { duration: 0.7, ease: [0.22, 1, 0.36, 1] });
    prevRef.current = target;
    return () => ctrl.stop();
  }, [target, mv]);

  return <motion.span>{display}</motion.span>;
}

export function TotalDisplay({ total, reduced }: TotalDisplayProps) {
  const { format } = useNumeralSystem();

  return (
    <motion.section
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      custom={1}
      className="rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-card overflow-hidden"
      aria-label="Totals"
    >
      <div className="grid grid-cols-2 divide-x divide-[var(--border-default)]">
        {/* Total */}
        <div className="flex flex-col items-center gap-1 px-6 py-8">
          <span className="text-xs font-body uppercase tracking-widest text-[var(--text-muted)]">
            Total مجموع
          </span>
          <span
            className="font-mono font-medium leading-none text-[var(--text-primary)]"
            style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}
          >
            <AnimatedNumber target={total} format={format} />
          </span>
        </div>
        {/* Reduced */}
        <div className="flex flex-col items-center gap-1 px-6 py-8">
          <span className="text-xs font-body uppercase tracking-widest text-[var(--text-muted)]">
            Reduced مختصر
          </span>
          <span
            className="font-mono font-medium leading-none"
            style={{
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              color: 'var(--accent-primary)',
            }}
          >
            <AnimatedNumber target={reduced} format={format} />
          </span>
          <span className="mt-1 text-center text-xs font-body italic text-[var(--text-muted)] max-w-[12rem]">
            Sum of digits until single figure
          </span>
        </div>
      </div>
    </motion.section>
  );
}

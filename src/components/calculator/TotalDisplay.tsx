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
      className="rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] overflow-hidden"
      aria-label="Totals"
    >
      <div className="grid grid-cols-2 divide-x divide-[var(--border-default)]">
        {/* Total */}
        <div className="flex flex-col items-center gap-2 px-6 py-10">
          <div className="flex items-center gap-2">
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
              Total
            </span>
            <span className="font-persian text-xs text-[var(--text-muted)]" lang="fa">
              مجموع
            </span>
          </div>
          <span
            className="font-mono font-semibold leading-none text-[var(--text-primary)]"
            style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)' }}
          >
            <AnimatedNumber target={total} format={format} />
          </span>
        </div>

        {/* Reduced */}
        <div className="flex flex-col items-center gap-2 px-6 py-10">
          <div className="flex items-center gap-2">
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
              Reduced
            </span>
            <span className="font-persian text-xs text-[var(--text-muted)]" lang="fa">
              تقلیل‌یافته
            </span>
          </div>
          <span
            className="font-mono font-semibold leading-none text-[var(--text-primary)]"
            style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)' }}
          >
            <AnimatedNumber target={reduced} format={format} />
          </span>
          <span className="text-center text-xs font-body text-[var(--text-muted)] max-w-[10rem] leading-snug">
            Sum of digits repeated
          </span>
        </div>
      </div>
    </motion.section>
  );
}

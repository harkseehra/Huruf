'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { LetterCard } from './LetterCard';
import { fadeUpVariants } from '@/lib/motion';
import type { CalcLetter } from '@/types';

interface LetterBreakdownProps {
  letters: CalcLetter[];
}

export function LetterBreakdown({ letters }: LetterBreakdownProps) {
  if (letters.length === 0) return null;

  return (
    <motion.section
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      aria-label="Letter breakdown"
    >
      <div className="mb-5 flex items-baseline gap-3">
        <h2 className="font-body text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)]">
          Letter Breakdown
        </h2>
        <span className="font-persian text-sm text-[var(--text-muted)]" lang="fa">
          تجزیه حروف
        </span>
      </div>
      <motion.div
        layout
        className="flex flex-wrap gap-3 justify-end"
        dir="rtl"
      >
        <AnimatePresence mode="popLayout">
          {letters.map((item, i) => (
            <LetterCard key={`${item.char}-${i}`} item={item} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}

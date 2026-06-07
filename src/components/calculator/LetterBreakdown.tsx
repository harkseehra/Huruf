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
      <h2 className="mb-4 font-display text-lg italic text-[var(--text-secondary)]">
        Letter breakdown
        <span className="mr-2 font-arabic text-base not-italic text-[var(--text-muted)]">
          — تفكيك الحروف
        </span>
      </h2>
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

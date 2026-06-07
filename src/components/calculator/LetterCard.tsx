'use client';

import { motion } from 'framer-motion';
import { cardVariants } from '@/lib/motion';
import { Badge } from '@/components/ui/Badge';
import { useNumeralSystem } from '@/hooks/useNumeralSystem';
import type { CalcLetter } from '@/types';

interface LetterCardProps {
  item: CalcLetter;
  index: number;
}

export function LetterCard({ item, index }: LetterCardProps) {
  const { format } = useNumeralSystem();
  const { letter } = item;

  return (
    <motion.article
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={index}
      className="relative flex flex-col items-center gap-3 rounded-md p-4 shadow-card min-w-[7rem]"
      style={{
        backgroundColor: `var(--tint-${letter.element})`,
        borderLeft: `3px solid var(--ink-${letter.element})`,
      }}
    >
      {/* Element badge */}
      <Badge element={letter.element} className="absolute top-2 right-2 text-[10px] px-1.5 py-px" />

      {/* Arabic glyph */}
      <span
        className="font-arabic-display leading-none mt-2"
        style={{
          fontSize: 'var(--text-glyph)',
          color: `var(--ink-${letter.element})`,
        }}
        aria-label={letter.latin}
      >
        {letter.arabic}
      </span>

      {/* Latin transliteration */}
      <span className="text-xs font-body italic text-[var(--text-muted)]">
        {letter.latin}
      </span>

      {/* Value */}
      <span className="font-mono text-lg font-medium text-[var(--text-primary)]">
        {format(letter.value)}
      </span>

      {/* Planet (if present) */}
      {letter.planet && (
        <span className="text-[10px] font-body text-[var(--text-muted)] text-center leading-tight">
          {letter.planet}
        </span>
      )}
    </motion.article>
  );
}

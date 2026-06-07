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
      className="relative flex flex-col items-center gap-2 rounded-lg p-4 min-w-[6.5rem] border border-[var(--border-default)]"
      style={{
        backgroundColor: `var(--tint-${letter.element})`,
        borderLeftWidth: '3px',
        borderLeftColor: `var(--ink-${letter.element})`,
      }}
    >
      {/* Element badge */}
      <Badge element={letter.element} className="absolute top-2 right-2" />

      {/* Arabic glyph — heavy, clear */}
      <span
        className="font-arabic-display font-bold leading-none mt-3"
        style={{
          fontSize: 'var(--text-glyph)',
          color: `var(--ink-${letter.element})`,
        }}
        aria-label={letter.latin}
      >
        {letter.arabic}
      </span>

      {/* Latin name */}
      <span className="text-xs font-body text-[var(--text-muted)] tracking-wide">
        {letter.latin}
      </span>

      {/* Value — prominent */}
      <span
        className="font-mono font-semibold text-xl text-[var(--text-primary)]"
      >
        {format(letter.value)}
      </span>

      {/* Planet */}
      {letter.planet && (
        <span className="text-[10px] font-body text-[var(--text-muted)] text-center leading-tight">
          {letter.planet}
        </span>
      )}
    </motion.article>
  );
}

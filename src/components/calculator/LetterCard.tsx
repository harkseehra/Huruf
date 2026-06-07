'use client';

import { motion } from 'framer-motion';
import { cardVariants } from '@/lib/motion';
import { Badge } from '@/components/ui/Badge';
import { PlanetIcon } from '@/components/ui/PlanetIcon';
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
      className="relative flex flex-col items-center gap-2 rounded-lg p-4 min-w-[7rem] border border-[var(--border-default)] overflow-hidden"
      style={{
        backgroundColor: `var(--tint-${letter.element})`,
        borderLeftWidth: '3px',
        borderLeftColor: `var(--ink-${letter.element})`,
      }}
      title={letter.nature}
    >
      {/* Subtle dot field */}
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 80 120">
        {[[10,20],[40,10],[65,35],[25,70],[58,80],[72,18],[18,95]].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="0.8" fill="currentColor" opacity="0.07"/>
        ))}
      </svg>

      {/* Element badge */}
      <Badge element={letter.element} className="absolute top-2 right-2 z-10" />

      {/* Arabic glyph */}
      <span
        className="font-arabic-display font-bold leading-none mt-4 z-10"
        style={{ fontSize: 'var(--text-glyph)', color: `var(--ink-${letter.element})` }}
        aria-label={letter.latin}
      >
        {letter.arabic}
      </span>

      {/* Latin name */}
      <span className="text-xs font-body text-[var(--text-muted)] tracking-wide z-10">
        {letter.latin}
      </span>

      {/* Value */}
      <span className="font-mono font-semibold text-xl text-[var(--text-primary)] z-10">
        {format(letter.value)}
      </span>

      {/* Divine name */}
      {letter.divineNameAr && (
        <span
          className="font-persian text-[11px] text-[var(--text-muted)] z-10 leading-none"
          lang="fa"
          dir="rtl"
          title={letter.divineNameEn}
        >
          {letter.divineNameAr}
        </span>
      )}

      {/* Planet icon */}
      {letter.planet && (
        <div className="flex flex-col items-center gap-0.5 z-10" title={letter.planet}>
          <PlanetIcon planet={letter.planet} size={16} className="text-[var(--text-muted)]" />
          <span className="text-[9px] font-body text-[var(--text-muted)] opacity-60 leading-none">
            {letter.planet}
          </span>
        </div>
      )}
    </motion.article>
  );
}

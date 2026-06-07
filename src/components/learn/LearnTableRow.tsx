'use client';

import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/motion';
import { Badge } from '@/components/ui/Badge';
import { useNumeralSystem } from '@/hooks/useNumeralSystem';
import type { AbjadLetter } from '@/types';

interface LearnTableRowProps {
  letter: AbjadLetter;
  index: number;
  isEven: boolean;
}

export function LearnTableRow({ letter, index, isEven }: LearnTableRowProps) {
  const { format } = useNumeralSystem();

  return (
    <motion.tr
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20px' }}
      custom={index % 6}
      className="group transition-colors duration-100 hover:bg-[var(--bg-subtle)]"
      style={{ backgroundColor: isEven ? 'var(--bg-surface)' : 'var(--bg-page)' }}
    >
      {/* Element bar */}
      <td className="w-1 p-0">
        <div
          className="w-1 min-h-[3.5rem]"
          style={{ backgroundColor: `var(--ink-${letter.element})` }}
        />
      </td>

      {/* Glyph */}
      <td className="px-4 py-3 text-center">
        <span
          className="font-arabic-display font-bold text-3xl leading-none"
          style={{ color: `var(--ink-${letter.element})` }}
        >
          {letter.arabic}
        </span>
      </td>

      {/* Latin name */}
      <td className="px-3 py-3 font-body text-sm text-[var(--text-secondary)]">
        {letter.latin}
      </td>

      {/* Value */}
      <td className="px-3 py-3 font-mono text-base font-semibold text-[var(--text-primary)] text-right" dir="ltr">
        {format(letter.value)}
      </td>

      {/* Element */}
      <td className="px-3 py-3">
        <Badge element={letter.element} />
      </td>

      {/* Group */}
      <td className="px-3 py-3 text-xs font-body capitalize text-[var(--text-muted)] hidden md:table-cell">
        {letter.group}
      </td>

      {/* Planet */}
      <td className="px-3 py-3 text-xs font-body text-[var(--text-muted)] hidden lg:table-cell">
        {letter.planet ?? <span className="opacity-25">—</span>}
      </td>

      {/* Example */}
      <td className="px-4 py-3 text-right hidden sm:table-cell">
        <span className="font-arabic-display font-bold text-xl text-[var(--text-muted)]" dir="rtl">
          {letter.example}
        </span>
      </td>
    </motion.tr>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUpVariants } from '@/lib/motion';
import { Badge } from '@/components/ui/Badge';
import { PlanetIcon } from '@/components/ui/PlanetIcon';
import { useNumeralSystem } from '@/hooks/useNumeralSystem';
import type { AbjadLetter } from '@/types';

interface LearnTableRowProps {
  letter: AbjadLetter;
  index: number;
  isEven: boolean;
}

export function LearnTableRow({ letter, index, isEven }: LearnTableRowProps) {
  const { format } = useNumeralSystem();
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <motion.tr
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-20px' }}
        custom={index % 6}
        onClick={() => letter.nature ? setExpanded((v) => !v) : undefined}
        className={[
          'group transition-colors duration-100',
          letter.nature ? 'cursor-pointer' : '',
          expanded ? 'bg-[var(--bg-subtle)]' : (isEven ? 'bg-[var(--bg-surface)] hover:bg-[var(--bg-subtle)]' : 'bg-[var(--bg-page)] hover:bg-[var(--bg-subtle)]'),
        ].join(' ')}
      >
        {/* Element bar */}
        <td className="w-1 p-0">
          <div className="w-1 min-h-[3.5rem]" style={{ backgroundColor: `var(--ink-${letter.element})` }} />
        </td>

        {/* Glyph */}
        <td className="px-4 py-3 text-center">
          <span className="font-arabic-display font-bold text-3xl leading-none" style={{ color: `var(--ink-${letter.element})` }}>
            {letter.arabic}
          </span>
        </td>

        {/* Latin name */}
        <td className="px-3 py-3">
          <span className="font-body text-sm text-[var(--text-primary)] font-medium">{letter.latin}</span>
        </td>

        {/* Divine name */}
        <td className="px-3 py-3 hidden sm:table-cell">
          {letter.divineNameAr ? (
            <div>
              <span className="font-persian text-sm text-[var(--text-secondary)] block" lang="fa" dir="rtl">
                {letter.divineNameAr}
              </span>
              <span className="font-body text-[11px] text-[var(--text-muted)]">{letter.divineNameEn}</span>
            </div>
          ) : (
            <span className="text-[var(--text-muted)] opacity-25 font-mono text-xs">—</span>
          )}
        </td>

        {/* Value */}
        <td className="px-3 py-3 font-mono text-base font-semibold text-[var(--text-primary)] text-right" dir="ltr">
          {format(letter.value)}
        </td>

        {/* Element */}
        <td className="px-3 py-3">
          <Badge element={letter.element} />
        </td>

        {/* Planet */}
        <td className="px-3 py-3 hidden lg:table-cell">
          {letter.planet ? (
            <div className="flex items-center gap-1.5">
              <PlanetIcon planet={letter.planet} size={14} className="text-[var(--text-muted)]" />
              <span className="text-xs font-body text-[var(--text-muted)]">{letter.planet}</span>
            </div>
          ) : (
            <span className="text-[var(--text-muted)] opacity-25 font-mono text-xs">—</span>
          )}
        </td>

        {/* Example */}
        <td className="px-4 py-3 text-right hidden md:table-cell">
          <span className="font-arabic-display font-bold text-xl text-[var(--text-muted)]" dir="rtl">
            {letter.example}
          </span>
        </td>

        {/* Expand indicator */}
        <td className="px-3 py-3 w-6 text-center">
          {letter.nature && (
            <span className="text-[var(--text-muted)] text-xs font-mono opacity-40 group-hover:opacity-70 transition-opacity">
              {expanded ? '−' : '+'}
            </span>
          )}
        </td>
      </motion.tr>

      {/* Expanded nature row */}
      <AnimatePresence>
        {expanded && letter.nature && (
          <motion.tr
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <td className="w-1 p-0">
              <div className="w-1 h-full" style={{ backgroundColor: `var(--ink-${letter.element})`, opacity: 0.4 }} />
            </td>
            <td colSpan={8} className="px-6 pb-5 pt-2 bg-[var(--bg-subtle)]">
              <div className="flex items-start gap-4 max-w-3xl">
                {/* Large glyph */}
                <span
                  className="font-arabic-display font-bold text-5xl leading-none shrink-0 mt-1"
                  style={{ color: `var(--ink-${letter.element})`, opacity: 0.25 }}
                >
                  {letter.arabic}
                </span>
                <div>
                  {letter.divineNameEn && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-persian text-sm text-[var(--text-secondary)]" lang="fa" dir="rtl">
                        {letter.divineNameAr}
                      </span>
                      <span className="font-body text-xs text-[var(--text-muted)]">· {letter.divineNameEn}</span>
                    </div>
                  )}
                  <p className="font-body text-sm leading-relaxed text-[var(--text-secondary)]">
                    {letter.nature}
                  </p>
                </div>
              </div>
            </td>
          </motion.tr>
        )}
      </AnimatePresence>
    </>
  );
}

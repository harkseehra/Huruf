'use client';

import { motion } from 'framer-motion';
import { EASE_OUT, DURATION } from '@/lib/motion';

interface InterpretationPanelProps {
  reduced: number;
  text: string;
}

export function InterpretationPanel({ reduced, text }: InterpretationPanelProps) {
  return (
    <motion.section
      key={reduced}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: DURATION, ease: EASE_OUT }}
      className="rounded-xl bg-[var(--bg-subtle)] border-l-4 border-[var(--accent-primary)] p-6"
      aria-label="Interpretation"
    >
      <div className="mb-2 flex items-center gap-2">
        <span className="text-xs font-body uppercase tracking-widest text-[var(--text-muted)]">
          Interpretation — تفسير
        </span>
      </div>
      <blockquote className="font-body italic text-[var(--text-secondary)] leading-relaxed text-base sm:text-lg">
        &ldquo;{text}&rdquo;
      </blockquote>
      <p className="mt-3 text-xs font-body text-[var(--text-muted)] italic">
        Sample text — curated interpretations arrive in Phase 2.
      </p>
    </motion.section>
  );
}

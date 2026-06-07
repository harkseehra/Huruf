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
      className="rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] p-7"
      aria-label="Interpretation"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
          Interpretation
        </span>
        <span className="font-persian text-xs text-[var(--text-muted)]" lang="fa">
          تفسیر
        </span>
      </div>
      <blockquote className="font-body text-base leading-relaxed text-[var(--text-secondary)]">
        {text}
      </blockquote>
      <p className="mt-5 text-xs font-body text-[var(--text-muted)]">
        Sample text — curated interpretations arrive in Phase 2.
      </p>
    </motion.section>
  );
}

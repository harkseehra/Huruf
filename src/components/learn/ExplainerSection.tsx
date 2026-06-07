'use client';

import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface ExplainerSectionProps {
  titleEn: string;
  titleFa?: string;
  children: React.ReactNode;
  className?: string;
  tinted?: boolean;
}

export function ExplainerSection({ titleEn, titleFa, children, className, tinted }: ExplainerSectionProps) {
  return (
    <motion.section
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={cn(
        'rounded-lg px-6 py-8 sm:px-10 sm:py-10',
        tinted ? 'bg-[var(--bg-surface)] border border-[var(--border-default)]' : '',
        className
      )}
    >
      <header className="mb-7">
        <h2
          className="font-display text-[var(--text-primary)] leading-tight"
          style={{ fontSize: 'var(--text-display)' }}
        >
          {titleEn}
        </h2>
        {titleFa && (
          <p className="mt-1.5 font-persian text-lg text-[var(--text-muted)]" lang="fa" dir="rtl">
            {titleFa}
          </p>
        )}
        <div className="mt-4 h-px w-12 rounded-full bg-[var(--text-primary)] opacity-20" />
      </header>
      {children}
    </motion.section>
  );
}

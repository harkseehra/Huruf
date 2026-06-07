'use client';

import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface ExplainerSectionProps {
  titleEn: string;
  titleAr?: string;
  children: React.ReactNode;
  className?: string;
  tinted?: boolean;
}

export function ExplainerSection({ titleEn, titleAr, children, className, tinted }: ExplainerSectionProps) {
  return (
    <motion.section
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={cn(
        'rounded-xl px-6 py-8 sm:px-10 sm:py-10',
        tinted ? 'bg-[var(--bg-subtle)]' : '',
        className
      )}
    >
      <header className="mb-6">
        <h2 className="font-display text-display italic text-[var(--text-primary)] leading-tight">
          {titleEn}
        </h2>
        {titleAr && (
          <p className="mt-1 font-arabic text-xl text-[var(--text-muted)]" dir="rtl">
            {titleAr}
          </p>
        )}
        <div className="mt-3 h-px w-16 rounded-full bg-[var(--accent-primary)] opacity-50" />
      </header>
      {children}
    </motion.section>
  );
}

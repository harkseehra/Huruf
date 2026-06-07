'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SPRING } from '@/lib/motion';

interface HeroInputProps {
  value: string;
  onChange: (v: string) => void;
}

export function HeroInput({ value, onChange }: HeroInputProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  // Auto-resize
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={SPRING}
      className="relative w-full"
    >
      {/* Glow ring on focus */}
      <div className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300 opacity-0 peer-focus:opacity-100 shadow-glow" />
      <textarea
        ref={ref}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        dir="rtl"
        lang="ar"
        rows={2}
        placeholder="اكتب اسمك أو كلمة هنا..."
        className={[
          'peer w-full resize-none overflow-hidden',
          'rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)]',
          'px-6 py-5 text-center leading-relaxed',
          'font-arabic-display text-4xl sm:text-5xl',
          'text-[var(--text-primary)] placeholder:text-[var(--text-muted)]',
          'transition-all duration-300 ease-smooth',
          'focus:outline-none focus:border-[var(--border-strong)] focus:shadow-glow',
          'shadow-card',
        ].join(' ')}
        spellCheck={false}
        autoComplete="off"
      />
      {value.length === 0 && (
        <p className="mt-2 text-center text-xs font-body italic text-[var(--text-muted)]">
          Accepts Arabic, Persian, or Urdu script
        </p>
      )}
    </motion.div>
  );
}

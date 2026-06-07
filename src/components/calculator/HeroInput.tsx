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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={SPRING}
      className="relative w-full"
    >
      <textarea
        ref={ref}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        dir="rtl"
        lang="fa"
        rows={2}
        placeholder="نام یا کلمه‌ای بنویسید..."
        className={[
          'w-full resize-none overflow-hidden',
          'rounded-lg bg-[var(--bg-surface)] border border-[var(--border-default)]',
          'px-6 py-5 text-center',
          'font-arabic-display font-bold',
          'text-[var(--text-primary)] placeholder:text-[var(--text-muted)] placeholder:font-normal',
          'transition-all duration-300',
          'focus:outline-none focus:border-[var(--border-strong)] focus:shadow-[var(--shadow-glow)]',
          'shadow-[var(--shadow-card)]',
          'leading-relaxed',
        ].join(' ')}
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
        spellCheck={false}
        autoComplete="off"
      />
      <div className="mt-2 flex items-center justify-center gap-3">
        <span className="text-xs font-body text-[var(--text-muted)]">Persian · Arabic · Urdu</span>
        <span className="font-persian text-xs text-[var(--text-muted)]" lang="fa">فارسی · عربی · اردو</span>
      </div>
    </motion.div>
  );
}

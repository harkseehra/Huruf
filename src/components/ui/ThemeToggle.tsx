'use client';

import { Sun, Moon, BookOpen } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';
import { cn } from '@/lib/utils';
import type { Theme } from '@/types';

const options: Array<{ value: Theme; icon: React.ReactNode; label: string }> = [
  { value: 'paper', icon: <Sun size={14} />, label: 'Paper' },
  { value: 'night', icon: <Moon size={14} />, label: 'Night' },
  { value: 'sepia', icon: <BookOpen size={14} />, label: 'Sepia' },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label="Color theme"
      className="inline-flex items-center rounded-pill border border-[var(--border-default)] bg-[var(--bg-subtle)] p-0.5 gap-0.5"
    >
      {options.map(({ value, icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          aria-label={label}
          aria-pressed={theme === value}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-pill h-8 px-3 text-xs font-body font-medium',
            'transition-all duration-150 ease-smooth cursor-pointer',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-ring)]',
            theme === value
              ? 'bg-[var(--accent-primary)] text-[var(--text-on-accent)] shadow-sm'
              : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
          )}
        >
          {icon}
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
}

'use client';

import { useNumeralSystem } from '@/hooks/useNumeralSystem';
import { cn } from '@/lib/utils';
import type { NumeralSystem } from '@/types';

const options: Array<{ value: NumeralSystem; label: string }> = [
  { value: 'western', label: '123' },
  { value: 'eastern', label: '١٢٣' },
];

export function NumeralToggle() {
  const { system, setSystem } = useNumeralSystem();

  return (
    <div
      role="group"
      aria-label="Numeral system"
      className="inline-flex items-center rounded-pill border border-[var(--border-default)] bg-[var(--bg-subtle)] p-0.5 gap-0.5"
    >
      {options.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setSystem(value)}
          aria-pressed={system === value}
          className={cn(
            'inline-flex items-center justify-center rounded-pill h-8 px-3',
            'font-mono text-xs font-medium transition-all duration-150 ease-smooth cursor-pointer',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-ring)]',
            system === value
              ? 'bg-[var(--accent-primary)] text-[var(--text-on-accent)] shadow-sm'
              : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

import type { Element } from '@/types';
import { cn } from '@/lib/utils';

const elementLabels: Record<Element, { en: string; fa: string }> = {
  fire:  { en: 'Fire',  fa: 'آتش' },
  air:   { en: 'Air',   fa: 'هوا' },
  water: { en: 'Water', fa: 'آب' },
  earth: { en: 'Earth', fa: 'خاک' },
};

interface BadgeProps {
  element: Element;
  className?: string;
  showPersian?: boolean;
}

export function Badge({ element, className, showPersian = false }: BadgeProps) {
  const label = elementLabels[element];
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-pill px-2 py-0.5 text-[11px] font-body font-semibold leading-none tracking-wide',
        className
      )}
      style={{
        backgroundColor: `var(--tint-${element})`,
        color: `var(--ink-${element})`,
        border: `1px solid var(--ink-${element})`,
        opacity: 0.85,
      }}
    >
      {showPersian ? (
        <span className="font-persian text-xs" lang="fa">{label.fa}</span>
      ) : (
        label.en
      )}
    </span>
  );
}

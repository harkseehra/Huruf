import type { Element } from '@/types';
import { cn } from '@/lib/utils';

const elementLabels: Record<Element, { en: string; ar: string }> = {
  fire:  { en: 'Fire',  ar: 'نار' },
  air:   { en: 'Air',   ar: 'هوا' },
  water: { en: 'Water', ar: 'ماء' },
  earth: { en: 'Earth', ar: 'تراب' },
};

interface BadgeProps {
  element: Element;
  className?: string;
  showArabic?: boolean;
}

export function Badge({ element, className, showArabic = false }: BadgeProps) {
  const label = elementLabels[element];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-pill px-2.5 py-0.5 text-xs font-body font-medium leading-none',
        'border transition-colors duration-150',
        className
      )}
      style={{
        backgroundColor: `var(--tint-${element})`,
        color: `var(--ink-${element})`,
        borderColor: `var(--ink-${element})`,
        opacity: 0.9,
      }}
    >
      {showArabic ? (
        <span className="font-arabic text-xs">{label.ar}</span>
      ) : (
        label.en
      )}
    </span>
  );
}

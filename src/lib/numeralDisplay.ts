import type { NumeralSystem } from '@/types';

const EASTERN = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

export function formatNumeral(n: number, system: NumeralSystem): string {
  if (system === 'western') return String(n);
  return String(n).replace(/\d/g, (d) => EASTERN[Number(d)]);
}

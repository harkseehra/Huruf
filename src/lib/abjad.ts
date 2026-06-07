import { ABJAD_MAP, ALIASES } from '@/data/letters';
import type { AbjadLetter } from '@/types';

function normalise(char: string): string {
  return ALIASES[char] ?? char;
}

export function parseInput(input: string): Array<{ char: string; letter: AbjadLetter }> {
  const results: Array<{ char: string; letter: AbjadLetter }> = [];
  for (const raw of [...input]) {
    const char = normalise(raw);
    // Strip diacritics (harakat: U+064B–U+065F)
    if (/[ً-ٰٟـ]/.test(raw)) continue;
    const letter = ABJAD_MAP.get(char);
    if (letter) results.push({ char, letter });
  }
  return results;
}

export function sumLetters(letters: Array<{ letter: AbjadLetter }>): number {
  return letters.reduce((acc, { letter }) => acc + letter.value, 0);
}

export function reduceValue(n: number): number {
  // Theosophical reduction — respect master numbers 11, 22, 33
  while (n > 9 && n !== 11 && n !== 22 && n !== 33) {
    n = [...String(n)].reduce((a, d) => a + Number(d), 0);
  }
  return n;
}

export type Element = 'fire' | 'air' | 'water' | 'earth';
export type Theme = 'paper' | 'night' | 'sepia';
export type NumeralSystem = 'western' | 'eastern';
export type LetterGroup = 'units' | 'tens' | 'hundreds' | 'thousands';

export interface AbjadLetter {
  arabic: string;
  latin: string;
  value: number;
  element: Element;
  group: LetterGroup;
  ordinal: number;
  planet?: string;
  essence?: string;
  example?: string;
}

export interface CalcLetter {
  letter: AbjadLetter;
  char: string;
}

export interface CalcResult {
  input: string;
  letters: CalcLetter[];
  total: number;
  reduced: number;
  interpretation?: string;
}

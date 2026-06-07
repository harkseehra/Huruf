'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { parseInput, sumLetters, reduceValue } from '@/lib/abjad';
import { getInterpretation } from '@/data/interpretations';
import type { CalcResult } from '@/types';

export function useAbjadCalc() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<CalcResult | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const calculate = useCallback((text: string) => {
    if (!text.trim()) {
      setResult(null);
      return;
    }
    const letters = parseInput(text);
    if (letters.length === 0) {
      setResult(null);
      return;
    }
    const total = sumLetters(letters);
    const reduced = reduceValue(total);
    setResult({
      input: text,
      letters,
      total,
      reduced,
      interpretation: getInterpretation(reduced),
    });
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => calculate(input), 220);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [input, calculate]);

  return { input, setInput, result };
}

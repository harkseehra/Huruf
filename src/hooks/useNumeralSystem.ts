'use client';

import { createContext, useContext, useState } from 'react';
import type { NumeralSystem } from '@/types';
import { formatNumeral } from '@/lib/numeralDisplay';

interface NumeralContextValue {
  system: NumeralSystem;
  setSystem: (s: NumeralSystem) => void;
  format: (n: number) => string;
}

export const NumeralContext = createContext<NumeralContextValue>({
  system: 'western',
  setSystem: () => {},
  format: (n) => String(n),
});

export function useNumeralSystem() {
  return useContext(NumeralContext);
}

export function useNumeralSystemState() {
  const [system, setSystem] = useState<NumeralSystem>('western');
  return {
    system,
    setSystem,
    format: (n: number) => formatNumeral(n, system),
  };
}

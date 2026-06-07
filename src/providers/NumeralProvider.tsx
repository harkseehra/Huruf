'use client';

import { useState } from 'react';
import { NumeralContext } from '@/hooks/useNumeralSystem';
import { formatNumeral } from '@/lib/numeralDisplay';
import type { NumeralSystem } from '@/types';

export function NumeralProvider({ children }: { children: React.ReactNode }) {
  const [system, setSystem] = useState<NumeralSystem>('western');

  return (
    <NumeralContext.Provider
      value={{
        system,
        setSystem,
        format: (n: number) => formatNumeral(n, system),
      }}
    >
      {children}
    </NumeralContext.Provider>
  );
}

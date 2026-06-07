'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { HeroInput } from '@/components/calculator/HeroInput';
import { LetterBreakdown } from '@/components/calculator/LetterBreakdown';
import { TotalDisplay } from '@/components/calculator/TotalDisplay';
import { InterpretationPanel } from '@/components/calculator/InterpretationPanel';
import { useAbjadCalc } from '@/hooks/useAbjadCalc';
import { fadeUpVariants } from '@/lib/motion';

export default function CalculatorPage() {
  const { input, setInput, result } = useAbjadCalc();

  return (
    <div className="relative min-h-[calc(100dvh-4rem)] overflow-hidden">
      {/* Sky/grass gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 50% -5%, var(--accent-ring) 0%, transparent 70%)',
          opacity: 0.18,
        }}
      />

      <div className="mx-auto max-w-3xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        {/* Hero heading */}
        <motion.header
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 text-center"
        >
          <h1
            className="font-display italic text-[var(--text-primary)] leading-none"
            style={{ fontSize: 'var(--text-hero)' }}
          >
            حروف
          </h1>
          <p className="mt-3 font-body italic text-lg text-[var(--text-secondary)]">
            Abjad Numerology Explorer
          </p>
          <p className="mt-1 font-body text-sm text-[var(--text-muted)] max-w-sm mx-auto">
            Type a name or word in Arabic or Persian to reveal its numeric essence — letter by letter.
          </p>
        </motion.header>

        {/* Input */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mb-10"
        >
          <HeroInput value={input} onChange={setInput} />
        </motion.div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {result && result.letters.length > 0 && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              <LetterBreakdown letters={result.letters} />
              <TotalDisplay total={result.total} reduced={result.reduced} />
              {result.interpretation && (
                <InterpretationPanel
                  reduced={result.reduced}
                  text={result.interpretation}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty state */}
        <AnimatePresence>
          {!result && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mt-6 flex flex-col items-center gap-2 text-center"
            >
              <div className="flex gap-4 font-arabic-display text-5xl text-[var(--text-muted)] opacity-30 select-none" dir="rtl">
                <span style={{ color: 'var(--ink-fire)' }}>ا</span>
                <span style={{ color: 'var(--ink-air)' }}>ب</span>
                <span style={{ color: 'var(--ink-water)' }}>ج</span>
                <span style={{ color: 'var(--ink-earth)' }}>د</span>
              </div>
              <p className="font-body italic text-sm text-[var(--text-muted)]">
                Each letter carries a number, a planet, an element.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

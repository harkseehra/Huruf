'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { HeroInput } from '@/components/calculator/HeroInput';
import { LetterBreakdown } from '@/components/calculator/LetterBreakdown';
import { TotalDisplay } from '@/components/calculator/TotalDisplay';
import { InterpretationPanel } from '@/components/calculator/InterpretationPanel';
import { CelestialBg, ConstellationStrip } from '@/components/ui/CelestialBg';
import { useAbjadCalc } from '@/hooks/useAbjadCalc';
import { fadeUpVariants } from '@/lib/motion';

export default function CalculatorPage() {
  const { input, setInput, result } = useAbjadCalc();

  return (
    <div className="relative min-h-[calc(100dvh-3.5rem)]">
      <CelestialBg />

      <div className="relative z-10 mx-auto max-w-3xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">

        {/* Hero heading */}
        <motion.header
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-14 text-center"
        >
          <ConstellationStrip className="mx-auto mb-6 text-[var(--text-muted)]" />

          <h1
            className="font-display text-[var(--text-primary)] leading-none tracking-tight"
            style={{ fontSize: 'var(--text-hero)' }}
          >
            حروف
          </h1>
          <p className="mt-4 font-body text-xl font-semibold text-[var(--text-primary)]">
            Abjad Numerology Explorer
          </p>
          <p className="mt-1 font-persian text-base text-[var(--text-secondary)]" lang="fa">
            کاشف ابجد · علم الحروف
          </p>

          <ConstellationStrip className="mx-auto mt-6 text-[var(--text-muted)]" />

          <p className="mt-6 font-body text-sm text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
            Type a name or word in Persian or Arabic to reveal its numeric essence — letter by letter.
          </p>
        </motion.header>

        {/* Input */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mb-12"
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
              transition={{ duration: 0.3 }}
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
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-4 flex flex-col items-center gap-5 text-center"
            >
              {/* Four element glyphs with planet icons */}
              <div
                className="flex gap-8 font-arabic-display font-bold select-none"
                dir="rtl"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)' }}
              >
                {[
                  { char: 'ا', el: 'fire' },
                  { char: 'ب', el: 'air' },
                  { char: 'ج', el: 'water' },
                  { char: 'د', el: 'earth' },
                ].map(({ char, el }) => (
                  <span
                    key={char}
                    style={{ color: `var(--ink-${el})`, opacity: 0.3 }}
                  >
                    {char}
                  </span>
                ))}
              </div>
              <p className="font-body text-sm font-medium text-[var(--text-muted)]">
                Each letter carries a number, a planet, an element.
              </p>
              <p className="font-persian text-sm text-[var(--text-muted)]" lang="fa">
                هر حرف یک عدد، یک سیاره، یک عنصر دارد
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

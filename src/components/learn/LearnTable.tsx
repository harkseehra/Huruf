import { ABJAD_LETTERS } from '@/data/letters';
import { LearnTableRow } from './LearnTableRow';

export function LearnTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-[var(--border-default)] shadow-card">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-[var(--bg-subtle)] border-b border-[var(--border-default)]">
            <th className="w-1 p-0" aria-hidden="true" />
            <th className="px-4 py-3 text-center text-xs font-body font-medium uppercase tracking-wider text-[var(--text-muted)]">
              Glyph
            </th>
            <th className="px-3 py-3 text-xs font-body font-medium uppercase tracking-wider text-[var(--text-muted)]">
              Name
            </th>
            <th className="px-3 py-3 text-right text-xs font-body font-medium uppercase tracking-wider text-[var(--text-muted)]">
              Value
            </th>
            <th className="px-3 py-3 text-xs font-body font-medium uppercase tracking-wider text-[var(--text-muted)]">
              Element
            </th>
            <th className="px-3 py-3 text-xs font-body font-medium uppercase tracking-wider text-[var(--text-muted)] hidden md:table-cell">
              Group
            </th>
            <th className="px-3 py-3 text-xs font-body font-medium uppercase tracking-wider text-[var(--text-muted)] hidden lg:table-cell">
              Planet
            </th>
            <th className="px-4 py-3 text-right text-xs font-body font-medium uppercase tracking-wider text-[var(--text-muted)] hidden sm:table-cell">
              Example
            </th>
          </tr>
        </thead>
        <tbody>
          {ABJAD_LETTERS.map((letter, i) => (
            <LearnTableRow
              key={letter.arabic}
              letter={letter}
              index={i}
              isEven={i % 2 === 0}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

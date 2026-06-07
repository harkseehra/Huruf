import { ABJAD_LETTERS } from '@/data/letters';
import { LearnTableRow } from './LearnTableRow';

const headers = [
  { label: 'Glyph',       className: 'px-4 text-center w-16' },
  { label: 'Name',        className: 'px-3 w-24' },
  { label: 'Divine Name', className: 'px-3 hidden sm:table-cell' },
  { label: 'Value',       className: 'px-3 text-right w-16' },
  { label: 'Element',     className: 'px-3 w-24' },
  { label: 'Planet',      className: 'px-3 hidden lg:table-cell w-28' },
  { label: 'Example',     className: 'px-4 text-right hidden md:table-cell w-20' },
  { label: '',            className: 'px-3 w-6' },
];

export function LearnTable() {
  return (
    <div className="overflow-x-auto rounded-lg border border-[var(--border-default)] shadow-[var(--shadow-card)]">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-[var(--bg-subtle)] border-b border-[var(--border-default)]">
            <th className="w-1 p-0" aria-hidden="true" />
            {headers.map(({ label, className }) => (
              <th
                key={label}
                className={`py-3 text-xs font-body font-semibold uppercase tracking-wider text-[var(--text-muted)] ${className}`}
              >
                {label}
              </th>
            ))}
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
      <div className="border-t border-[var(--border-default)] bg-[var(--bg-subtle)] px-4 py-2.5">
        <p className="text-xs font-body text-[var(--text-muted)]">
          Click any row to expand its spiritual description. Element assignments follow Ibn Arabi&apos;s <em>Futūhāt al-Makkiyya</em> framework.
          Planetary correspondences are a scholarly reconstruction — Phase 2 will confirm against a named source edition.
        </p>
      </div>
    </div>
  );
}

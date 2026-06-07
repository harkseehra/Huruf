// Subtle Co-Star-style star field + orbital arcs
// Used as a fixed background layer behind page content — very low opacity

'use client';

// Deterministic star positions (no random — consistent across renders)
const STARS: Array<{ cx: number; cy: number; r: number; op: number }> = [
  { cx: 4,   cy: 8,   r: 0.8, op: 0.6 },
  { cx: 18,  cy: 3,   r: 0.5, op: 0.4 },
  { cx: 35,  cy: 15,  r: 1.0, op: 0.7 },
  { cx: 55,  cy: 5,   r: 0.6, op: 0.5 },
  { cx: 72,  cy: 12,  r: 0.8, op: 0.6 },
  { cx: 88,  cy: 4,   r: 0.5, op: 0.3 },
  { cx: 9,   cy: 28,  r: 0.6, op: 0.4 },
  { cx: 28,  cy: 40,  r: 1.2, op: 0.8 },
  { cx: 47,  cy: 32,  r: 0.5, op: 0.4 },
  { cx: 64,  cy: 45,  r: 0.7, op: 0.5 },
  { cx: 82,  cy: 30,  r: 0.9, op: 0.6 },
  { cx: 95,  cy: 42,  r: 0.5, op: 0.3 },
  { cx: 13,  cy: 58,  r: 0.7, op: 0.5 },
  { cx: 31,  cy: 70,  r: 0.5, op: 0.3 },
  { cx: 50,  cy: 62,  r: 1.1, op: 0.7 },
  { cx: 68,  cy: 75,  r: 0.6, op: 0.4 },
  { cx: 86,  cy: 60,  r: 0.8, op: 0.6 },
  { cx: 6,   cy: 82,  r: 0.5, op: 0.3 },
  { cx: 23,  cy: 90,  r: 0.9, op: 0.6 },
  { cx: 42,  cy: 85,  r: 0.5, op: 0.4 },
  { cx: 60,  cy: 92,  r: 0.7, op: 0.5 },
  { cx: 78,  cy: 88,  r: 1.0, op: 0.7 },
  { cx: 93,  cy: 78,  r: 0.5, op: 0.3 },
  { cx: 16,  cy: 50,  r: 0.6, op: 0.4 },
  { cx: 37,  cy: 55,  r: 0.5, op: 0.3 },
  { cx: 74,  cy: 55,  r: 0.8, op: 0.5 },
  { cx: 91,  cy: 18,  r: 0.6, op: 0.4 },
  { cx: 3,   cy: 70,  r: 0.9, op: 0.6 },
  { cx: 57,  cy: 20,  r: 0.5, op: 0.3 },
  { cx: 44,  cy: 10,  r: 0.7, op: 0.5 },
];

// Constellation-like connections (Co-Star uses sparse dot-line constellations)
const LINES: Array<[number, number]> = [
  [2, 5],   // stars 2→5
  [5, 11],
  [7, 8],
  [8, 14],
  [14, 19],
  [1, 3],
  [16, 22],
  [24, 29],
];

// Large faint orbital circles — very subtle
const ORBITALS = [
  { cx: 80, cy: 20, r: 18, op: 0.12 },
  { cx: 15, cy: 75, r: 24, op: 0.09 },
  { cx: 55, cy: 50, r: 32, op: 0.07 },
];

export function CelestialBg() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ opacity: 0.55 }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Orbital arcs */}
        {ORBITALS.map((o, i) => (
          <circle
            key={`orb-${i}`}
            cx={o.cx}
            cy={o.cy}
            r={o.r}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.12"
            opacity={o.op}
          />
        ))}

        {/* Constellation lines */}
        {LINES.map(([a, b], i) => {
          const s = STARS[a];
          const e = STARS[b];
          if (!s || !e) return null;
          return (
            <line
              key={`ln-${i}`}
              x1={s.cx} y1={s.cy}
              x2={e.cx} y2={e.cy}
              stroke="currentColor"
              strokeWidth="0.08"
              opacity="0.2"
            />
          );
        })}

        {/* Stars */}
        {STARS.map((s, i) => (
          <circle
            key={`s-${i}`}
            cx={s.cx}
            cy={s.cy}
            r={s.r * 0.3}
            fill="currentColor"
            opacity={s.op * 0.35}
          />
        ))}
      </svg>
    </div>
  );
}

// Smaller decorative element — horizontal constellation strip
// Used inside section headers, letter card backgrounds, etc.
export function ConstellationStrip({ className }: { className?: string }) {
  return (
    <svg
      width="120"
      height="24"
      viewBox="0 0 120 24"
      aria-hidden="true"
      className={className}
      style={{ display: 'block' }}
    >
      {[8,24,40,56,72,88,104].map((cx, i) => (
        <circle
          key={i}
          cx={cx}
          cy={12}
          r={i % 3 === 1 ? 1.2 : 0.7}
          fill="currentColor"
          opacity={i % 3 === 1 ? 0.35 : 0.2}
        />
      ))}
      <line x1="8" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.15"/>
      <line x1="24" y1="12" x2="40" y2="8" stroke="currentColor" strokeWidth="0.5" opacity="0.15"/>
      <line x1="40" y1="8" x2="56" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.15"/>
      <line x1="56" y1="12" x2="72" y2="16" stroke="currentColor" strokeWidth="0.5" opacity="0.15"/>
      <line x1="72" y1="16" x2="88" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.15"/>
      <line x1="88" y1="12" x2="104" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.15"/>
    </svg>
  );
}

// Co-Star-style minimal line-art planet icons
// strokeWidth ~1.2–1.5, round caps, no fills (except Sun dot)
// All use 24×24 viewBox, currentColor

import { cn } from '@/lib/utils';

interface PlanetIconProps {
  planet: string;   // sun | moon | mercury | venus | mars | jupiter | saturn
  size?: number;
  className?: string;
}

const icons: Record<string, React.FC<{ w: string }>> = {
  sun: ({ w }) => (
    <>
      <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth={w} fill="none" />
      {/* Inner rays — 4 short lines at cardinal points */}
      <line x1="12" y1="2.5" x2="12" y2="5"   stroke="currentColor" strokeWidth={w} strokeLinecap="round"/>
      <line x1="12" y1="19" x2="12" y2="21.5"  stroke="currentColor" strokeWidth={w} strokeLinecap="round"/>
      <line x1="2.5" y1="12" x2="5" y2="12"    stroke="currentColor" strokeWidth={w} strokeLinecap="round"/>
      <line x1="19" y1="12" x2="21.5" y2="12"  stroke="currentColor" strokeWidth={w} strokeLinecap="round"/>
      {/* Dot */}
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
    </>
  ),

  moon: ({ w }) => (
    // Crescent: large arc offset left of center
    <path
      d="M16 5.5 C13 5.5 10 8 10 12 C10 16 13 18.5 16 18.5 C14.2 18.5 12 17.2 10.8 15.2 C9.8 13.5 9.5 12.8 9.5 12 C9.5 11.2 9.8 10.5 10.8 8.8 C12 6.8 14.2 5.5 16 5.5 Z"
      stroke="currentColor"
      strokeWidth={w}
      strokeLinejoin="round"
      fill="none"
    />
  ),

  mercury: ({ w }) => (
    // Venus cross below + circle + crescent horns above
    <>
      {/* Crescent horns above circle */}
      <path d="M9 8.5 A3.5 3.5 0 0 1 15 8.5" stroke="currentColor" strokeWidth={w} strokeLinecap="round" fill="none"/>
      {/* Circle */}
      <circle cx="12" cy="11.5" r="4" stroke="currentColor" strokeWidth={w} fill="none"/>
      {/* Stem */}
      <line x1="12" y1="15.5" x2="12" y2="20" stroke="currentColor" strokeWidth={w} strokeLinecap="round"/>
      {/* Cross bar */}
      <line x1="9.5" y1="18" x2="14.5" y2="18" stroke="currentColor" strokeWidth={w} strokeLinecap="round"/>
    </>
  ),

  venus: ({ w }) => (
    <>
      <circle cx="12" cy="9.5" r="5.5" stroke="currentColor" strokeWidth={w} fill="none"/>
      <line x1="12" y1="15" x2="12" y2="21" stroke="currentColor" strokeWidth={w} strokeLinecap="round"/>
      <line x1="9" y1="18.5" x2="15" y2="18.5" stroke="currentColor" strokeWidth={w} strokeLinecap="round"/>
    </>
  ),

  mars: ({ w }) => (
    <>
      <circle cx="10.5" cy="13.5" r="6" stroke="currentColor" strokeWidth={w} fill="none"/>
      {/* Diagonal arrow shaft */}
      <line x1="14.8" y1="9.2" x2="20.5" y2="3.5" stroke="currentColor" strokeWidth={w} strokeLinecap="round"/>
      {/* Arrow head */}
      <polyline
        points="15.5,3.5 20.5,3.5 20.5,8.5"
        stroke="currentColor" strokeWidth={w}
        strokeLinecap="round" strokeLinejoin="round"
        fill="none"
      />
    </>
  ),

  jupiter: ({ w }) => (
    // The ♃ glyph — a cross with a curved left arm
    <>
      {/* Horizontal bar */}
      <line x1="6" y1="14" x2="18" y2="14" stroke="currentColor" strokeWidth={w} strokeLinecap="round"/>
      {/* Vertical cross at right of center */}
      <line x1="13" y1="8" x2="13" y2="21" stroke="currentColor" strokeWidth={w} strokeLinecap="round"/>
      {/* Curved hook upper-left: from left end of bar curving up */}
      <path d="M6 14 C6 14 5 10 8 7 C10 5 12 5 13 8" stroke="currentColor" strokeWidth={w} strokeLinecap="round" fill="none"/>
    </>
  ),

  saturn: ({ w }) => (
    // Cross + scythe/hook hanging from lower left
    <>
      {/* Vertical stem */}
      <line x1="12" y1="3" x2="12" y2="15" stroke="currentColor" strokeWidth={w} strokeLinecap="round"/>
      {/* Horizontal bar */}
      <line x1="8.5" y1="7" x2="15.5" y2="7" stroke="currentColor" strokeWidth={w} strokeLinecap="round"/>
      {/* Scythe hook at bottom */}
      <path d="M12 15 C12 19 8 20 7 17.5 C6 15 8.5 13.5 12 14" stroke="currentColor" strokeWidth={w} strokeLinecap="round" fill="none"/>
    </>
  ),
};

// Planet that maps from the letter data planet name string
const PLANET_ID_MAP: Record<string, string> = {
  Sun: 'sun',
  Moon: 'moon',
  Mercury: 'mercury',
  Venus: 'venus',
  Mars: 'mars',
  Jupiter: 'jupiter',
  Saturn: 'saturn',
  // Zodiac signs used in data — no icon, fall back gracefully
};

export function PlanetIcon({ planet, size = 24, className }: PlanetIconProps) {
  const id = PLANET_ID_MAP[planet] ?? planet.toLowerCase();
  const Icon = icons[id];

  if (!Icon) {
    // Unknown planet — show symbol text
    return (
      <span
        className={cn('inline-flex items-center justify-center font-mono text-xs', className)}
        style={{ width: size, height: size }}
        title={planet}
      >
        ✦
      </span>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-label={planet}
      className={cn('flex-shrink-0', className)}
      style={{ display: 'inline-block' }}
    >
      <Icon w="1.25" />
    </svg>
  );
}

// Larger display version with subtle circle backdrop — for the Learn page planet cards
export function PlanetIconDisplay({ planet, size = 56, className }: PlanetIconProps) {
  const id = PLANET_ID_MAP[planet] ?? planet.toLowerCase();
  const Icon = icons[id];

  if (!Icon) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-label={planet}
      className={cn('flex-shrink-0', className)}
    >
      {/* Subtle orbital ring behind */}
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.2"/>
      <Icon w="1.4" />
    </svg>
  );
}

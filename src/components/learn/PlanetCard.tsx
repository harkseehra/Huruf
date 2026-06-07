'use client';

import { motion } from 'framer-motion';
import { fadeUpVariants } from '@/lib/motion';
import { PlanetIconDisplay } from '@/components/ui/PlanetIcon';
import { ConstellationStrip } from '@/components/ui/CelestialBg';
import type { PlanetData } from '@/data/planets';

interface PlanetCardProps {
  planet: PlanetData;
  index: number;
}

export function PlanetCard({ planet, index }: PlanetCardProps) {
  return (
    <motion.article
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={index % 4}
      className="rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 border-b border-[var(--border-default)] px-6 py-5">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <PlanetIconDisplay planet={planet.english} size={40} className="text-[var(--text-primary)]" />
            <div>
              <h3 className="font-display text-2xl text-[var(--text-primary)] leading-none">
                {planet.english}
              </h3>
              <div className="mt-1 flex items-center gap-2">
                <span className="font-persian text-base text-[var(--text-secondary)]" lang="fa">
                  {planet.farsi}
                </span>
                <span className="text-[var(--text-muted)] font-mono text-xs">·</span>
                <span className="font-mono text-sm text-[var(--text-muted)]">
                  {planet.symbol}
                </span>
              </div>
            </div>
          </div>
          <ConstellationStrip className="mt-3 text-[var(--text-muted)]" />
        </div>
        <div className="text-right shrink-0">
          <p className="text-xs font-body text-[var(--text-muted)] uppercase tracking-wider">Day</p>
          <p className="font-body text-sm text-[var(--text-secondary)] mt-0.5">{planet.day.en}</p>
          <p className="font-persian text-sm text-[var(--text-muted)] mt-0.5" lang="fa">{planet.day.fa}</p>
          <p className="mt-2 text-xs font-body text-[var(--text-muted)] uppercase tracking-wider">Metal</p>
          <p className="font-body text-sm text-[var(--text-secondary)] mt-0.5">{planet.metal}</p>
        </div>
      </div>

      {/* Dual tradition meanings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-default)]">

        {/* Persian / Shamsi */}
        <div className="px-5 py-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--text-primary)] opacity-40" />
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
              Persian · Shamsi
            </span>
            <span className="font-persian text-xs text-[var(--text-muted)]" lang="fa">شمسی</span>
          </div>
          <p className="font-display text-base text-[var(--text-secondary)] mb-3 leading-snug">
            {planet.shamsi.title}
          </p>
          <ul className="space-y-1.5">
            {planet.shamsi.meanings.map((m, i) => (
              <li key={i} className="flex items-start gap-2 text-sm font-body text-[var(--text-secondary)]">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--text-muted)] shrink-0 opacity-50" />
                {m}
              </li>
            ))}
          </ul>
        </div>

        {/* Islamic / Hijri */}
        <div className="px-5 py-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full border border-[var(--text-primary)] opacity-40" />
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
              Islamic · Hijri
            </span>
            <span className="font-persian text-xs text-[var(--text-muted)]" lang="fa">هجری</span>
          </div>
          <p className="font-display text-base text-[var(--text-secondary)] mb-3 leading-snug">
            {planet.islamic.title}
          </p>
          <ul className="space-y-1.5">
            {planet.islamic.meanings.map((m, i) => (
              <li key={i} className="flex items-start gap-2 text-sm font-body text-[var(--text-secondary)]">
                <span className="mt-1.5 w-1 h-1 rounded-full border border-[var(--text-muted)] shrink-0 opacity-50" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Key difference */}
      <div className="border-t border-[var(--border-default)] px-5 py-4 bg-[var(--bg-subtle)]">
        <p className="text-xs font-body font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-1.5">
          Key distinction
        </p>
        <p className="text-sm font-body text-[var(--text-secondary)] leading-relaxed">
          {planet.difference}
        </p>
      </div>
    </motion.article>
  );
}

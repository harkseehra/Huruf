import { ExplainerSection } from '@/components/learn/ExplainerSection';
import { LearnTable } from '@/components/learn/LearnTable';
import { PlanetCard } from '@/components/learn/PlanetCard';
import { Badge } from '@/components/ui/Badge';
import { CelestialBg, ConstellationStrip } from '@/components/ui/CelestialBg';
import { PLANETS } from '@/data/planets';
import type { Element } from '@/types';

const elements: Array<{ id: Element; titleEn: string; titleFa: string; description: string }> = [
  {
    id: 'fire',
    titleEn: 'Fire — Nāriyya',
    titleFa: 'آتش — ناریه',
    description:
      'Letters of fire carry the qualities of light, warmth, rising energy, and spiritual illumination. They are associated with the will, the sun, and the principle of origin.',
  },
  {
    id: 'air',
    titleEn: 'Air — Hawāʾiyya',
    titleFa: 'هوا — هوایی',
    description:
      'Air letters hold breath, movement, the spoken word, and the transmission of spirit between forms. They govern the intellect, communication, and the mediating principle.',
  },
  {
    id: 'water',
    titleEn: 'Water — Māʾiyya',
    titleFa: 'آب — مایی',
    description:
      "Water letters carry receptivity, depth, the lunar, and the soul's inner tides. They are letters of feeling, reflection, and the hidden current beneath appearances.",
  },
  {
    id: 'earth',
    titleEn: 'Earth — Turābiyya',
    titleFa: 'خاک — ترابی',
    description:
      'Earth letters are the letters of manifestation, weight, stability, and the body. They anchor the spiritual into the physical and give form to what would otherwise remain invisible.',
  },
];

const reductionSteps = [
  { label: '٦٦', note: 'Example: الله' },
  { label: '٦＋٦', note: 'Sum the digits' },
  { label: '١٢', note: 'Interim' },
  { label: '١＋٢', note: 'Sum again' },
  { label: '٣', note: 'Reduced' },
];

export default function LearnPage() {
  return (
    <div className="relative">
      <CelestialBg />

      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-24 pt-14 sm:px-6 lg:px-8 space-y-16">

        {/* Page hero */}
        <header className="text-center pt-4">
          <ConstellationStrip className="mx-auto mb-6 text-[var(--text-muted)]" />
          <h1
            className="font-display text-[var(--text-primary)] leading-none"
            style={{ fontSize: 'var(--text-display)' }}
          >
            The Science of Letters
          </h1>
          <p className="mt-2 font-persian text-lg text-[var(--text-secondary)]" lang="fa">
            علم الحروف
          </p>
          <ConstellationStrip className="mx-auto mt-6 text-[var(--text-muted)]" />
        </header>

        {/* Intro */}
        <ExplainerSection titleEn="What is ʿIlm al-Ḥurūf?" titleFa="علم الحروف چیست؟" tinted>
          <div className="space-y-4 font-body text-base leading-relaxed text-[var(--text-secondary)] max-w-2xl">
            <p>
              <em>ʿIlm al-Ḥurūf</em> — the Science of Letters — is an esoteric discipline within
              Islamic mysticism that holds each letter of the Arabic alphabet to be a cosmic principle:
              a vibration with numerical, elemental, and planetary correspondences.
            </p>
            <p>
              By summing the abjad values of the letters in a name or word, a practitioner arrives at
              a number that reveals the hidden essence — the <em>bāṭin</em> — of that name.
              The Ḥurūf tradition draws on works such as al-Būnī&apos;s{' '}
              <em>Shams al-Maʿārif</em> and centuries of Sufi commentary.
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              Correspondences follow{' '}
              <strong>al-Būnī&apos;s <em>Shams al-Maʿārif al-Kubrā</em></strong> as the primary source.
              Other traditions differ; Phase 2 will specify the exact edition used.
            </p>
          </div>
        </ExplainerSection>

        {/* Two traditions */}
        <section>
          <header className="mb-8">
            <h2
              className="font-display text-[var(--text-primary)] leading-tight"
              style={{ fontSize: 'var(--text-display)' }}
            >
              Two Traditions, One Sky
            </h2>
            <p className="mt-1.5 font-persian text-lg text-[var(--text-muted)]" lang="fa" dir="rtl">
              دو سنت، یک آسمان
            </p>
            <div className="mt-4 h-px w-12 rounded-full bg-[var(--text-primary)] opacity-20" />
            <p className="mt-5 font-body text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              This app sits at the intersection of two ancient astrological traditions that
              share the same seven planets but read them through different clocks.
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Persian · Shamsi',
                titleFa: 'ایرانی · شمسی',
                subtitle: 'The Solar Tradition',
                body: 'Persian astrology follows the solar (Shamsi) calendar — rooted in the cycles of the sun, the ancient Zoroastrian understanding of light and fire, and the sovereignty of the individual soul. Planets are read as personal forces that shape character, fate, and the seasons of life.',
                icon: '☉',
              },
              {
                title: 'Islamic · Hijri',
                titleFa: 'اسلامی · هجری',
                subtitle: 'The Lunar Tradition',
                body: 'Islamic astrology follows the lunar (Hijri) calendar — the crescent that opens Ramadan, the Moon of the Prophet\'s birth, the sacred rhythm of divine time. Planets here are not personal forces but attributes of the divine: reflections of the 99 names, instruments of Qadar.',
                icon: '☽',
              },
            ].map((t) => (
              <div
                key={t.title}
                className="rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-3xl text-[var(--text-primary)] opacity-60">{t.icon}</span>
                  <div>
                    <h3 className="font-display text-xl text-[var(--text-primary)]">{t.title}</h3>
                    <p className="font-persian text-sm text-[var(--text-muted)]" lang="fa">{t.titleFa}</p>
                  </div>
                </div>
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-2">
                  {t.subtitle}
                </p>
                <p className="font-body text-sm leading-relaxed text-[var(--text-secondary)]">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Planets */}
        <section>
          <header className="mb-8">
            <h2
              className="font-display text-[var(--text-primary)] leading-tight"
              style={{ fontSize: 'var(--text-display)' }}
            >
              The Seven Planets
            </h2>
            <p className="mt-1.5 font-persian text-lg text-[var(--text-muted)]" lang="fa" dir="rtl">
              هفت سیاره
            </p>
            <div className="mt-4 h-px w-12 rounded-full bg-[var(--text-primary)] opacity-20" />
            <p className="mt-5 font-body text-sm text-[var(--text-muted)] max-w-xl leading-relaxed">
              Each of the seven classical planets governs specific letters in the abjad system.
              Below, each planet is shown with its signification in both traditions side by side.
            </p>
          </header>
          <div className="space-y-5">
            {PLANETS.map((planet, i) => (
              <PlanetCard key={planet.id} planet={planet} index={i} />
            ))}
          </div>
        </section>

        {/* Abjad order */}
        <ExplainerSection titleEn="The Abjad Order" titleFa="ترتیب ابجد">
          <div className="space-y-5 font-body text-base leading-relaxed text-[var(--text-secondary)] max-w-2xl">
            <p>
              Unlike the modern alphabetical order, the <em>abjad</em> order is ancient — shared with
              Hebrew and Syriac — and assigns numerical values in groups:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Units 1–9',       letters: 'ا ب ج د ه و ز ح ط' },
                { label: 'Tens 10–90',      letters: 'ي ك ل م ن س ع ف ص' },
                { label: 'Hundreds 100–900', letters: 'ق ر ش ت ث خ ذ ض ظ' },
                { label: 'Thousands 1000',  letters: 'غ' },
              ].map(({ label, letters }) => (
                <div
                  key={label}
                  className="rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-default)] px-4 py-4"
                >
                  <p className="text-xs font-body font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                    {label}
                  </p>
                  <p className="font-arabic-display font-bold text-2xl text-[var(--text-primary)] leading-relaxed" dir="rtl">
                    {letters}
                  </p>
                </div>
              ))}
            </div>
            <p>
              Persian adds four letters — پ چ ژ گ — which inherit the value of their nearest Arabic equivalent.
            </p>
          </div>
        </ExplainerSection>

        {/* Four Elements */}
        <ExplainerSection titleEn="The Four Elements" titleFa="چهار عنصر">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {elements.map((el) => (
              <div
                key={el.id}
                className="rounded-lg border p-6 transition-shadow duration-200 hover:shadow-[var(--shadow-card)]"
                style={{
                  backgroundColor: `var(--tint-${el.id})`,
                  borderColor: 'var(--border-default)',
                  borderLeftWidth: '3px',
                  borderLeftColor: `var(--ink-${el.id})`,
                }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <Badge element={el.id} />
                  <span className="font-persian text-sm text-[var(--text-muted)]" lang="fa" dir="rtl">
                    {el.titleFa}
                  </span>
                </div>
                <h3 className="mb-2 font-display text-xl text-[var(--text-primary)]">{el.titleEn}</h3>
                <p className="font-body text-sm leading-relaxed text-[var(--text-secondary)]">
                  {el.description}
                </p>
              </div>
            ))}
          </div>
        </ExplainerSection>

        {/* Full table */}
        <section>
          <header className="mb-6">
            <h2
              className="font-display text-[var(--text-primary)] leading-tight"
              style={{ fontSize: 'var(--text-display)' }}
            >
              The 28 + 4 Letters
            </h2>
            <p className="mt-1.5 font-persian text-lg text-[var(--text-muted)]" lang="fa" dir="rtl">
              بیست‌وهشت حرف عربی و چهار حرف فارسی
            </p>
            <div className="mt-4 h-px w-12 rounded-full bg-[var(--text-primary)] opacity-20" />
            <p className="mt-4 font-body text-sm text-[var(--text-muted)]">
              Sample data — sourced dataset with full correspondences arrives in Phase 2.
            </p>
          </header>
          <LearnTable />
        </section>

        {/* Reduction */}
        <ExplainerSection titleEn="How Reduction Works" titleFa="تقلیل عدد چگونه کار می‌کند" tinted>
          <div className="space-y-6 max-w-2xl">
            <p className="font-body text-base leading-relaxed text-[var(--text-secondary)]">
              When the abjad sum exceeds a single digit, it is reduced by summing its digits repeatedly
              until a single figure remains. Master numbers — 11, 22, and 33 — are not reduced further.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {reductionSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <span className="font-arabic-display font-bold text-3xl text-[var(--text-primary)]" dir="rtl">
                      {step.label}
                    </span>
                    <span className="text-[10px] font-body text-[var(--text-muted)] mt-0.5">{step.note}</span>
                  </div>
                  {i < reductionSteps.length - 1 && (
                    <span className="text-[var(--text-muted)] text-xl font-mono">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ExplainerSection>

      </div>
    </div>
  );
}

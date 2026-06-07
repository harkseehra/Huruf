import { ExplainerSection } from '@/components/learn/ExplainerSection';
import { LearnTable } from '@/components/learn/LearnTable';
import { Badge } from '@/components/ui/Badge';
import type { Element } from '@/types';

const elements: Array<{ id: Element; titleEn: string; titleAr: string; description: string }> = [
  {
    id: 'fire',
    titleEn: 'Fire — Nāriyya',
    titleAr: 'نارية',
    description:
      'Letters of fire carry the qualities of light, warmth, rising energy, and spiritual illumination. They are associated with the will, the sun, and the principle of origin.',
  },
  {
    id: 'air',
    titleEn: 'Air — Hawāʾiyya',
    titleAr: 'هوائية',
    description:
      'Air letters hold breath, movement, the spoken word, and the transmission of spirit between forms. They govern the intellect, communication, and the mediating principle.',
  },
  {
    id: 'water',
    titleEn: 'Water — Māʾiyya',
    titleAr: 'مائية',
    description:
      "Water letters carry receptivity, depth, the lunar, and the soul's inner tides. They are letters of feeling, reflection, and the hidden current beneath appearances.",
  },
  {
    id: 'earth',
    titleEn: 'Earth — Turābiyya',
    titleAr: 'ترابية',
    description:
      'Earth letters are the letters of manifestation, weight, stability, and the body. They anchor the spiritual into the physical and give form to what would otherwise remain invisible.',
  },
];

const reductionSteps = [
  { label: '٦٦', note: 'Example: the word الله' },
  { label: '٦ + ٦', note: 'Sum the digits' },
  { label: '١٢', note: 'Interim' },
  { label: '١ + ٢', note: 'Sum again' },
  { label: '٣', note: 'Reduced value' },
];

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-12 sm:px-6 lg:px-8 space-y-16">

      {/* Intro */}
      <ExplainerSection titleEn="What is ʿIlm al-Ḥurūf?" titleAr="علم الحروف" tinted>
        <div className="space-y-4 font-body text-base leading-relaxed text-[var(--text-secondary)] max-w-2xl">
          <p>
            <em>ʿIlm al-Ḥurūf</em> — the Science of Letters — is an esoteric discipline within
            Islamic mysticism that holds each letter of the Arabic alphabet to be a cosmic principle,
            a vibration with numerical, elemental, and planetary correspondences.
          </p>
          <p>
            By summing the abjad values of the letters in a name or word, a practitioner can
            arrive at a number that reveals the hidden essence — the <em>bāṭin</em> — of that name.
            The Ḥurūf tradition draws on works such as al-Būnī&apos;s{' '}
            <em>Shams al-Maʿārif</em> and centuries of Sufi commentary.
          </p>
          <p className="text-sm italic text-[var(--text-muted)]">
            Correspondences on this page follow{' '}
            <strong>al-Būnī&apos;s <em>Shams al-Maʿārif al-Kubrā</em></strong> as the primary source.
            Other traditions differ; Phase 2 will specify the exact edition used.
          </p>
        </div>
      </ExplainerSection>

      {/* Abjad order explainer */}
      <ExplainerSection titleEn="The Abjad Order" titleAr="ترتيب أبجد">
        <div className="space-y-4 font-body text-base leading-relaxed text-[var(--text-secondary)] max-w-2xl">
          <p>
            Unlike the modern alphabetical order (alef-bāʾ-tāʾ…), the <em>abjad</em> order is
            ancient — shared with Hebrew and Syriac — and assigns numerical values in groups:
          </p>
          <div className="grid grid-cols-4 gap-2 text-center font-mono text-sm">
            {[
              ['Units 1–9', 'ا ب ج د ه و ز ح ط'],
              ['Tens 10–90', 'ي ك ل م ن س ع ف ص'],
              ['Hundreds 100–900', 'ق ر ش ت ث خ ذ ض ظ'],
              ['Thousands 1000', 'غ'],
            ].map(([label, letters]) => (
              <div
                key={label}
                className="rounded-lg bg-[var(--bg-subtle)] px-3 py-3 border border-[var(--border-default)]"
              >
                <p className="text-xs text-[var(--text-muted)] mb-2 font-body">{label}</p>
                <p className="font-arabic-display text-xl text-[var(--text-primary)]" dir="rtl">
                  {letters}
                </p>
              </div>
            ))}
          </div>
          <p>
            Persian adds four letters — پ چ ژ گ — which inherit the value of their nearest Arabic
            equivalent.
          </p>
        </div>
      </ExplainerSection>

      {/* Four Elements */}
      <ExplainerSection titleEn="The Four Elements" titleAr="العناصر الأربعة">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {elements.map((el) => (
            <div
              key={el.id}
              className="rounded-xl border p-5 transition-shadow duration-200 hover:shadow-card"
              style={{
                backgroundColor: `var(--tint-${el.id})`,
                borderColor: `var(--ink-${el.id})`,
                borderLeftWidth: '3px',
              }}
            >
              <div className="mb-3 flex items-center gap-2">
                <Badge element={el.id} />
                <span
                  className="font-arabic text-sm text-[var(--text-muted)]"
                  dir="rtl"
                >
                  {el.titleAr}
                </span>
              </div>
              <h3
                className="mb-2 font-display italic text-lg leading-tight"
                style={{ color: `var(--ink-${el.id})` }}
              >
                {el.titleEn}
              </h3>
              <p className="font-body text-sm leading-relaxed text-[var(--text-secondary)]">
                {el.description}
              </p>
            </div>
          ))}
        </div>
      </ExplainerSection>

      {/* Full letter table */}
      <section>
        <header className="mb-6">
          <h2 className="font-display text-display italic text-[var(--text-primary)] leading-tight">
            The 28 + 4 Letters
          </h2>
          <p className="mt-1 font-arabic text-xl text-[var(--text-muted)]" dir="rtl">
            الحروف الثمانية والعشرون
          </p>
          <div className="mt-3 h-px w-16 rounded-full bg-[var(--accent-primary)] opacity-50" />
          <p className="mt-4 font-body text-sm italic text-[var(--text-muted)]">
            Sample data — sourced dataset with full planet, element, and essence correspondences arrives in Phase 2.
          </p>
        </header>
        <LearnTable />
      </section>

      {/* Reduction */}
      <ExplainerSection titleEn="How Reduction Works" titleAr="كيف يعمل الاختصار" tinted>
        <div className="space-y-6 max-w-2xl">
          <p className="font-body text-base leading-relaxed text-[var(--text-secondary)]">
            When the abjad sum of a name exceeds a single digit, it is reduced by summing its digits
            repeatedly until a single figure remains. Master numbers — 11, 22, and 33 — are not
            reduced further in this application, as they carry their own esoteric weight.
          </p>
          {/* Step diagram */}
          <div className="flex flex-wrap items-center gap-2">
            {reductionSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <span
                    className="font-arabic-display text-2xl text-[var(--text-primary)]"
                    dir="rtl"
                  >
                    {step.label}
                  </span>
                  <span className="text-[10px] font-body text-[var(--text-muted)] mt-0.5">
                    {step.note}
                  </span>
                </div>
                {i < reductionSteps.length - 1 && (
                  <span className="text-[var(--text-muted)] text-lg">→</span>
                )}
              </div>
            ))}
          </div>
          <p className="font-body text-sm italic text-[var(--text-muted)]">
            Normalization rules (handling of <em>tāʾ marbūṭa</em>, hamza, the definite article ال, etc.)
            will be finalized and documented in Phase 2.
          </p>
        </div>
      </ExplainerSection>

    </div>
  );
}

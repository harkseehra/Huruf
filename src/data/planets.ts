// Planet data for Islamic & Persian (Shamsi/solar) astrology traditions
// SAMPLE — Phase 2 will source from a named scholarly edition

export interface PlanetData {
  id: string;
  english: string;
  farsi: string;         // Persian name
  arabic: string;        // Arabic name
  symbol: string;        // Unicode astrological symbol
  element: 'fire' | 'air' | 'water' | 'earth';
  day: { en: string; fa: string };
  metal: string;
  stone: string;
  shamsi: {             // Persian solar tradition
    title: string;
    meanings: string[];
  };
  islamic: {            // Islamic lunar tradition
    title: string;
    meanings: string[];
  };
  difference: string;   // Key divergence between traditions
}

export const PLANETS: PlanetData[] = [
  {
    id: 'sun',
    english: 'Sun',
    farsi: 'خورشید',
    arabic: 'الشمس',
    symbol: '☉',
    element: 'fire',
    day: { en: 'Sunday', fa: 'یکشنبه' },
    metal: 'Gold',
    stone: 'Yellow Sapphire',
    shamsi: {
      title: 'Khurshid — Heart of Being',
      meanings: [
        'The self, will, and individual consciousness',
        'Kingship, authority, dignity, and dominion',
        'Life force, vitality, and illumination',
        'The father, patriarch, and lineage of honor',
      ],
    },
    islamic: {
      title: 'Shams — Divine Manifestation',
      meanings: [
        'Tajallī — the self-disclosure of the Divine',
        'The evident and the manifest (al-Ẓāhir)',
        'Guidance and enlightenment on the righteous path',
        'The light by which all things are known',
      ],
    },
    difference:
      'Shamsi tradition centers the Sun on personal sovereignty and individual will. Islamic tradition sees it as the mirror of divine manifestation — not the self, but the light that reveals the Self.',
  },
  {
    id: 'moon',
    english: 'Moon',
    farsi: 'ماه',
    arabic: 'القمر',
    symbol: '☽',
    element: 'water',
    day: { en: 'Monday', fa: 'دوشنبه' },
    metal: 'Silver',
    stone: 'Pearl · Moonstone',
    shamsi: {
      title: 'Māh — Mind and Psyche',
      meanings: [
        'The mind, intellect, and the seat of reason (ʿAql)',
        'Emotions, the subconscious, and inner tides',
        'The mother, nurturer, and the feminine principle',
        'Cycles, change, and the passage of time',
      ],
    },
    islamic: {
      title: 'Qamar — Sacred Time',
      meanings: [
        'The measure of sacred time and the Hijri calendar',
        'Light that reflects divine light (Nūr)',
        'Hidden knowledge and the unconscious',
        'Intercession and nearness to God (Tawassul)',
      ],
    },
    difference:
      'In Persian astrology the Moon rules the psyche and reason. In Islamic tradition the Moon is above all the keeper of sacred time — the Hijri month, the crescent of Ramadan, the rhythm of revelation.',
  },
  {
    id: 'mercury',
    english: 'Mercury',
    farsi: 'تیر',
    arabic: 'عطارد',
    symbol: '☿',
    element: 'air',
    day: { en: 'Wednesday', fa: 'چهارشنبه' },
    metal: 'Copper',
    stone: 'Emerald',
    shamsi: {
      title: 'Tīr — The Messenger',
      meanings: [
        'Speech, eloquence, language, and writing',
        'Commerce, trade, and skillful exchange',
        'Wit, cleverness, and intellectual dexterity',
        'Siblings, short journeys, and the intermediary',
      ],
    },
    islamic: {
      title: 'ʿUṭārid — Bearer of the Word',
      meanings: [
        'The conveyance of divine message (Risāla)',
        'Knowledge and learning (ʿIlm) in action',
        'The link between heaven and earth',
        'Trustworthiness and honest dealings (Amāna)',
      ],
    },
    difference:
      'Both honor Mercury as the mind in motion. Shamsi tradition stresses commercial and intellectual activity; Islamic tradition elevates Mercury to the bearer of prophetic message — the model of the reliable transmitter of truth.',
  },
  {
    id: 'venus',
    english: 'Venus',
    farsi: 'ناهید',
    arabic: 'الزهرة',
    symbol: '♀',
    element: 'water',
    day: { en: 'Friday', fa: 'جمعه' },
    metal: 'Copper',
    stone: 'Emerald · Rose Quartz',
    shamsi: {
      title: 'Nāhīd — The Radiant',
      meanings: [
        'Love, desire, attraction, and sensuality',
        'Beauty, grace, elegance, and the arts',
        'Pleasure, luxury, comfort, and abundance',
        'Music, poetry, and creative expression',
      ],
    },
    islamic: {
      title: 'Zuhra — Divine Beauty',
      meanings: [
        'Jamāl — the divine attribute of beauty',
        'Raḥma — mercy and compassion',
        'The soul\'s longing for reunion with the Beloved',
        'Generosity and charitable giving (Ṣadaqa)',
      ],
    },
    difference:
      'Shamsi Venus governs personal beauty and earthly pleasure. Islamic tradition transforms Venus into Jamāl — beauty as a divine attribute, and the soul\'s love not as passion but as longing for the Real.',
  },
  {
    id: 'mars',
    english: 'Mars',
    farsi: 'بهرام',
    arabic: 'المريخ',
    symbol: '♂',
    element: 'fire',
    day: { en: 'Tuesday', fa: 'سه‌شنبه' },
    metal: 'Iron',
    stone: 'Red Coral · Ruby',
    shamsi: {
      title: 'Bahrām — The Warrior',
      meanings: [
        'War, conflict, courage, and boldness in battle',
        'Energy, drive, aggression, and raw ambition',
        'Sexuality, passion, and animal magnetism',
        'Weapons, soldiers, and the art of conquest',
      ],
    },
    islamic: {
      title: 'Marrīkh — Righteous Strength',
      meanings: [
        'Quwwa — strength placed in service of justice',
        'The warrior for truth against falsehood',
        'Sacred struggle (Jihād) against the ego (nafs)',
        'Protection and defense of the faithful',
      ],
    },
    difference:
      'Shamsi Mars celebrates the conqueror and the personal will to power. Islamic tradition disciplines that fire: Mars becomes the force that combats the ego, not the external enemy — jihad begins within.',
  },
  {
    id: 'jupiter',
    english: 'Jupiter',
    farsi: 'هرمز',
    arabic: 'المشتري',
    symbol: '♃',
    element: 'air',
    day: { en: 'Thursday', fa: 'پنج‌شنبه' },
    metal: 'Tin',
    stone: 'Yellow Sapphire · Topaz',
    shamsi: {
      title: 'Hormuz — The Generous',
      meanings: [
        'Wisdom, expansion, growth, and abundance (Barakat)',
        'Fortune, luck, and worldly blessing',
        'High philosophy, learning, and noble aspiration',
        'Kingship, honor, nobility, and prestige',
      ],
    },
    islamic: {
      title: 'Mushtarī — The Beneficent',
      meanings: [
        'Raḥma wa Niʿma — divine mercy and bounty',
        'Ḥikma — wisdom and deep spiritual understanding',
        'ʿAdl — justice and fair judgment',
        'Guidance toward the straight path (al-Ṣirāṭ al-Mustaqīm)',
      ],
    },
    difference:
      'Both traditions love Jupiter — the great benefic. Shamsi focuses on material expansion and worldly success; Islamic tradition spiritualises the bounty into ḥikma and divine mercy, the teacher as guide to God.',
  },
  {
    id: 'saturn',
    english: 'Saturn',
    farsi: 'کیوان',
    arabic: 'زحل',
    symbol: '♄',
    element: 'earth',
    day: { en: 'Saturday', fa: 'شنبه' },
    metal: 'Lead',
    stone: 'Blue Sapphire · Amethyst',
    shamsi: {
      title: 'Kayvān — The Ancient',
      meanings: [
        'Time, limitation, boundaries, and structure',
        'Hardship, karma, consequences, and reckoning',
        'Discipline, duty, obligation, and responsibility',
        'Old age, wisdom earned through suffering, endings',
      ],
    },
    islamic: {
      title: 'Zuḥal — Divine Decree',
      meanings: [
        'Qadar — divine predestination and cosmic order',
        'The inevitability of death and the afterlife',
        'Ṣabr — patience and forbearance in adversity',
        'Return to God (Rujūʿ ilā \'Llāh) and the final judgment',
      ],
    },
    difference:
      'Both see Saturn as the planet of limits and suffering. Shamsi emphasises personal karma — you reap what you sow. Islamic tradition transforms limitation into submission: Saturn is not punishment but Qadar, the divine script that was always already written.',
  },
];

export const PLANET_MAP = new Map<string, PlanetData>(
  PLANETS.map((p) => [p.id, p])
);

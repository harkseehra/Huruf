// SAMPLE — replace in Phase 2 with fully sourced dataset (al-Būnī, Shams al-Maʿārif)
import type { AbjadLetter } from '@/types';

export const ABJAD_LETTERS: AbjadLetter[] = [
  { ordinal: 1,  arabic: 'ا', latin: 'alef',  value: 1,    element: 'fire',  group: 'units',     planet: 'Sun',     essence: 'the upright One, origin and breath',       example: 'اسم' },
  { ordinal: 2,  arabic: 'ب', latin: 'bāʾ',   value: 2,    element: 'air',   group: 'units',     planet: 'Moon',    essence: 'the house, vessel of meaning',              example: 'باب' },
  { ordinal: 3,  arabic: 'ج', latin: 'jīm',   value: 3,    element: 'water', group: 'units',     planet: 'Jupiter', essence: 'gathering, the womb of growth',             example: 'جان' },
  { ordinal: 4,  arabic: 'د', latin: 'dāl',   value: 4,    element: 'earth', group: 'units',     planet: undefined, essence: 'the door, threshold and descent',           example: 'دل' },
  { ordinal: 5,  arabic: 'ه', latin: 'hāʾ',   value: 5,    element: 'air',   group: 'units',     planet: 'Aries',   essence: 'the breath of the hidden name',             example: 'هدا' },
  { ordinal: 6,  arabic: 'و', latin: 'wāw',   value: 6,    element: 'earth', group: 'units',     planet: 'Taurus',  essence: 'the connector, link between worlds',        example: 'وجد' },
  { ordinal: 7,  arabic: 'ز', latin: 'zayn',  value: 7,    element: 'fire',  group: 'units',     planet: 'Mercury', essence: 'the adornment, brightness of the spirit',  example: 'زمان' },
  { ordinal: 8,  arabic: 'ح', latin: 'ḥāʾ',  value: 8,    element: 'water', group: 'units',     planet: 'Gemini',  essence: 'life, vitality flowing from source',        example: 'حب' },
  { ordinal: 9,  arabic: 'ط', latin: 'ṭāʾ',  value: 9,    element: 'earth', group: 'units',     planet: 'Cancer',  essence: 'the clay, fertile ground of manifestation', example: 'طور' },
  { ordinal: 10, arabic: 'ي', latin: 'yāʾ',   value: 10,   element: 'air',   group: 'tens',      planet: 'Virgo',   essence: 'the hand, reaching toward the divine',     example: 'يد' },
  { ordinal: 11, arabic: 'ك', latin: 'kāf',   value: 20,   element: 'fire',  group: 'tens',      planet: 'Leo',     essence: 'the palm, containing and releasing',       example: 'كلام' },
  { ordinal: 12, arabic: 'ل', latin: 'lām',   value: 30,   element: 'air',   group: 'tens',      planet: 'Libra',   essence: 'the tongue of justice and balance',        example: 'لطف' },
  { ordinal: 13, arabic: 'م', latin: 'mīm',   value: 40,   element: 'water', group: 'tens',      planet: undefined, essence: 'the water of the name, mercy',              example: 'مهر' },
  { ordinal: 14, arabic: 'ن', latin: 'nūn',   value: 50,   element: 'earth', group: 'tens',      planet: undefined, essence: 'the fish, the hidden ink of the pen',      example: 'نور' },
  { ordinal: 15, arabic: 'س', latin: 'sīn',   value: 60,   element: 'fire',  group: 'tens',      planet: 'Scorpio', essence: 'the tooth, penetrating through veils',     example: 'سر' },
  { ordinal: 16, arabic: 'ع', latin: 'ʿayn',  value: 70,   element: 'water', group: 'tens',      planet: 'Sagittarius', essence: 'the eye, witness and perceiver',       example: 'عشق' },
  { ordinal: 17, arabic: 'ف', latin: 'fāʾ',   value: 80,   element: 'air',   group: 'tens',      planet: 'Venus',   essence: 'the mouth exhaling the word of being',    example: 'فلک' },
  { ordinal: 18, arabic: 'ص', latin: 'ṣād',  value: 90,   element: 'earth', group: 'tens',      planet: 'Aquarius', essence: 'the pure, the clarified essence',         example: 'صبر' },
  { ordinal: 19, arabic: 'ق', latin: 'qāf',   value: 100,  element: 'fire',  group: 'hundreds',  planet: 'Pisces',  essence: 'the mountain at the edge of the world',   example: 'قلب' },
  { ordinal: 20, arabic: 'ر', latin: 'rāʾ',   value: 200,  element: 'water', group: 'hundreds',  planet: 'Mars',    essence: 'the head, the summit of the self',         example: 'روح' },
  { ordinal: 21, arabic: 'ش', latin: 'shīn',  value: 300,  element: 'air',   group: 'hundreds',  planet: 'Sun',     essence: 'the radiant, light scattered from one',   example: 'شمس' },
  { ordinal: 22, arabic: 'ت', latin: 'tāʾ',   value: 400,  element: 'earth', group: 'hundreds',  planet: 'Moon',    essence: 'the mark, the feminine seal',              example: 'تاب' },
  { ordinal: 23, arabic: 'ث', latin: 'thāʾ',  value: 500,  element: 'air',   group: 'hundreds',  planet: 'Jupiter', essence: 'the triple, abundance multiplied',         example: 'ثمر' },
  { ordinal: 24, arabic: 'خ', latin: 'khāʾ',  value: 600,  element: 'water', group: 'hundreds',  planet: 'Saturn',  essence: 'the inner, the hidden chamber',            example: 'خیر' },
  { ordinal: 25, arabic: 'ذ', latin: 'dhāl',  value: 700,  element: 'fire',  group: 'hundreds',  planet: 'Mars',    essence: 'the reminder, echo of the primal word',   example: 'ذکر' },
  { ordinal: 26, arabic: 'ض', latin: 'ḍād',  value: 800,  element: 'earth', group: 'hundreds',  planet: 'Mercury', essence: 'the earth pressed down, patient weight',   example: 'ضوء' },
  { ordinal: 27, arabic: 'ظ', latin: 'ẓāʾ',  value: 900,  element: 'air',   group: 'hundreds',  planet: 'Venus',   essence: 'the shade, appearance sheltering truth',  example: 'ظل' },
  { ordinal: 28, arabic: 'غ', latin: 'ghayn', value: 1000, element: 'fire',  group: 'thousands', planet: 'Saturn',  essence: 'the unseen, the occulted divine mystery', example: 'غیب' },
  // Persian additions — inherit nearest Arabic letter's value
  { ordinal: 29, arabic: 'پ', latin: 'pāʾ',   value: 2,    element: 'air',   group: 'units',     planet: 'Moon',    essence: 'the vessel, reflection of bāʾ',            example: 'پیام' },
  { ordinal: 30, arabic: 'چ', latin: 'chāʾ',  value: 3,    element: 'water', group: 'units',     planet: 'Jupiter', essence: 'multiplicity, the branching of jīm',       example: 'چشم' },
  { ordinal: 31, arabic: 'ژ', latin: 'zhāʾ',  value: 7,    element: 'fire',  group: 'units',     planet: 'Mercury', essence: 'the spark, swift fire of zayn',            example: 'ژرف' },
  { ordinal: 32, arabic: 'گ', latin: 'gāf',   value: 20,   element: 'fire',  group: 'tens',      planet: 'Leo',     essence: 'the opening, gate of the self',            example: 'گل' },
];

export const ABJAD_MAP = new Map<string, AbjadLetter>(
  ABJAD_LETTERS.map((l) => [l.arabic, l])
);

// Normalisation aliases (Phase 1 — basic only; Phase 2 will expand)
export const ALIASES: Record<string, string> = {
  'ك': 'ك', // Arabic kaf → keep
  'ي': 'ي', // final ya → keep
  'ة': 'ه', // tāʾ marbūṭa → hāʾ (5)
  'ى': 'ي', // alef maqsura → yāʾ (10)
  'آ': 'ا', // alef madda → alef (1)
  'أ': 'ا', // alef with hamza above → alef
  'إ': 'ا', // alef with hamza below → alef
  'ئ': 'ي', // ya with hamza → ya
  'ؤ': 'و', // waw with hamza → waw
  'ء': 'ا', // standalone hamza → alef (Phase 1 simplification; Phase 2 decision needed)
};

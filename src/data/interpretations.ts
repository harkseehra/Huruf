// SAMPLE — replace in Phase 2 with curated literary interpretations
// Voice: Rumi/Hafez register — poetic, contemplative, esoteric

export const INTERPRETATIONS: Record<number, string> = {
  1: 'The singular. The alef that stands upright before the dawn. Here is the origin — pure potential, undivided light before it knew multiplicity. This name carries the sovereignty of the One.',
  2: 'The witness and the witnessed. Two mirrors facing one another across the threshold of existence. This name holds within it the tension of longing — the soul reaching toward its source.',
  3: 'The trinity of creation: the one who speaks, the word spoken, and the breath between them. This name is abundant, generative, like the seed that already contains the forest.',
  4: 'The four pillars upon which the visible world rests: fire and water, earth and air in sacred proportion. This name is a foundation — it knows how to remain.',
  5: 'The breath of the Hidden. Five is the number of the senses, of the hand open to receive. This name is a vessel shaped to hold the subtle — do not fill it too quickly.',
  6: 'The harmony of the six directions: above, below, and the four winds. This name is a key. It opens toward beauty, and beauty opens toward the Beloved.',
  7: 'Seven heavens, seven days, seven letters in the name of the divine. This name is a ladder, each rung a world unto itself. Climb with the patience of the stars.',
  8: 'The octave, the lemniscate, the breath that turns back upon itself and does not diminish. This name carries renewal — what ends in it is already beginning again.',
  9: 'The last of the single digits, the number of completion and the threshold of return. This name is mature — it has travelled through all the others and carries their memory.',
  11: 'The master of illumination. Two pillars standing. This name does not simplify — it holds its tension as a gift, a bridge between the ordinary and the luminous.',
  22: 'The master builder. Four foundations multiplied by wisdom. This name is given to those who must create lasting forms out of the invisible — it carries great responsibility.',
  33: 'The master teacher. Grace in its fullest expression. This name is rare — it arrives when the soul has something urgent to give back to the world.',
};

export function getInterpretation(reduced: number): string {
  return (
    INTERPRETATIONS[reduced] ??
    'The hidden value of this name awaits its full reading. In the tradition of Ḥurūf, every number holds a face turned toward the divine — this one speaks in a voice not yet transcribed.'
  );
}

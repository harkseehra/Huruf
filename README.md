# CLAUDE.md — Ḥurūf (حروف)

> An interactive ʿIlm al-Ḥurūf / abjad explorer. Type a name or word; see it
> broken down letter by letter — numeric value, planet, element, essence — with
> a running total and a reduced value. A companion Learn page teaches the whole
> system. Sister tool to Nazar.
>
> **Working name:** Ḥurūf (حروف). Rename freely.

---

## ⚠️ HOW TO WORK ON THIS PROJECT — READ FIRST

This build is **phased with hard approval gates.** Do not run ahead.

1. **Phase 1 — Design only.** Build both pages as a static, clickable shell using
   the SAMPLE data in this file. All three color modes working. Rich typography,
   the letter-breakdown interaction, the result moment. **No real computation
   engine. No AI. No data curation.** When Phase 1 is done, **STOP and present it
   for review.** Do not start Phase 2 until I explicitly approve the design.
2. **Phase 2 — Computation engine + curated data.** Only after design approval.
3. **Phase 3 — AI transliteration layer.** Only after Phase 2 is approved.

If you are ever unsure whether something belongs in the current phase, it
doesn't — leave it for later and ask.

---

## Tech stack

- **Next.js 14** (App Router), TypeScript
- **Tailwind CSS** for layout; CSS variables for the theming/color-mode system
- Deployed on **Vercel**, source on **GitHub**
- **No database for v1** — all correspondence data lives in a static TS/JSON file
- AI (Phase 3) is a single server-side route calling the Anthropic API — never client-side, never with a key in the bundle

---

## Design system (use exactly — this is my house style)

### Color modes (three, user-toggleable, persisted in localStorage)
- **Paper** (default): warm off-white background, near-black ink
- **Night**: true black (`#000`) background for OLED, soft off-white ink
- **Sepia**: warm parchment background, dark sepia-brown ink

Implement as `data-theme="paper|night|sepia"` on `<html>` driving CSS variables.
Never hardcode colors in components — read from variables.

### Accent
- **Kon-peki "River Blue" `#2196D4`** — primary accent (active states, total figure, focus rings)

### Element colors → Iroshizuku inks (used to color-code letters by element)
- **Fire (nāriyya)** → `Momiji` warm red `#B23A48`
- **Air (hawā'iyya)** → `Tsuyu-kusa` light blue `#3A7CA5`
- **Water (mā'iyya)** → `Kon-peki` `#2196D4`
- **Earth (turābiyya)** → `Ina-ho` ochre `#A8842B`

(Approximate hex — tune per mode so each stays legible on paper/night/sepia.)

### Typography (richer is the point here)
- **Display Arabic/Persian letters** (the big glyphs): `Noto Kufi Arabic` — monumental, geometric
- **Body Persian/Arabic**: `Vazirmatn`
- **Latin UI**: `Inter` (or `DM Sans`)
- **Numerals / values**: `SF Mono` for Western digits
- Offer an **Eastern Arabic numerals toggle** (١ ٢ ٣ … ٤٠٠) — values shown in both systems is a rich, authentic touch
- Self-host fonts via `next/font` where possible

### Motion
- iPadOS-style transitions, **0.42s** slide/nav timing, gentle spring easing
- The letter breakdown should animate in **sequentially** (stagger each glyph), and the total should feel like an arrival, not a number that's just there
- **No Material Design.** No ripples, no floating action buttons, no Roboto.

---

## Pages

### 1. Calculator (home, `/`)

The hero. Layout top→bottom:

- **Input field** — accepts Perso-Arabic text (Phase 1: also accept it pre-typed). RTL-aware. Large, calm, generous.
- **Normalized form** — shows the cleaned Persian string that will be counted (in Phase 1 just echo the sample).
- **Letter breakdown** — the signature element. Each letter renders as a card/row:
  - the glyph, large, in Noto Kufi Arabic, **tinted by its element color**
  - its numeric value (both numeral systems if toggle on)
  - its planet (glyph or name)
  - its element
  - Glyphs animate in with a stagger.
- **Total** — the sum, displayed as a *moment*: large, Kon-peki, SF Mono.
- **Reduced value** — the total reduced to a single digit / to a smaller figure, with a one-line note on what reduction means.
- **Interpretation** — a short literary reading (Phase 1: lorem/sample text in the right voice; real text is Phase 2/3).

### 2. Learn (`/learn`)

The teaching page. Static, beautiful, scannable.

- Short intro: what ʿIlm al-Ḥurūf is, the abjad order, what the page shows. **Name the source** of the correspondence system on this page, e.g. "Correspondences follow al-Būnī's *Shams al-Maʿārif*; other traditions differ." (Source TBC by me in Phase 2.)
- **The full 28+4 letter table**, one row per letter:
  | Letter | Name | Value (W / E numerals) | Planet | Element | Essence | Example word |
- Group or color-code rows by element using the ink colors above.
- A short explainer block for: the abjad order, the four elements, the seven planets, and reduction.

---

## REFERENCE DATA

### Numeric values — CERTAIN, use as-is (Mashriqi / Eastern abjad)

Arabic 28:
```
ا 1    ب 2    ج 3    د 4    ه 5    و 6    ز 7    ح 8
ط 9    ي 10   ك 20   ل 30   م 40   ن 50   س 60   ع 70
ف 80   ص 90   ق 100  ر 200  ش 300  ت 400  ث 500  خ 600
ذ 700  ض 800  ظ 900  غ 1000
```
Persian 4 (inherit nearest Arabic letter's value):
```
پ 2 (←ب)   چ 3 (←ج)   ژ 7 (←ز)   گ 20 (←ک/ك)
```

### Correspondences — ⚠️ SAMPLE ONLY, FOR DESIGN MOCKUP

Use these few rows to populate the Phase-1 design so it looks real. **Do NOT
treat planet/element/essence below as final or complete** — the full, sourced
32-letter dataset is a Phase-2 deliverable that I will curate from a single named
edition. Mark this data `// SAMPLE — replace in Phase 2` in code.

```
ا  alif   1    Sun       Fire    "the upright One, origin and breath"   اسم
ب  bāʾ    2    Moon      Air     "the house, vessel of meaning"         باب
ج  jīm    3    Jupiter   Water   "gathering, the womb of growth"        جان
د  dāl    4    —         Earth   "the door, threshold and descent"      دل
م  mīm    40   —         Fire    "the water of the name, mercy"         مهر
ن  nūn    50   —         Air     "the fish, the hidden ink of the pen"  نور
```

(Planets left as `—` are deliberately blank — a reminder the mapping is curation
work, not yours to invent.)

---

## DEFERRED — do not build until the relevant phase is approved

### Phase 2 — Computation engine + curated data
- Deterministic abjad summation. **The code computes the math; never an LLM.**
- Normalization rules I must decide (flag these to me, don't guess):
  - strip harakat/tashkīl
  - آ → ? · ة → ه(5) or ت(400)? · ى → ي(10) · hamza ء → counted or not?
  - whether the definite article `ال` is counted (default: yes)
- Reduction logic (theosophical reduction to a single digit, and/or mod-9, etc.)
- The full sourced 32-letter dataset with planet, element, essence, example, in one TS file.

### Phase 3 — AI transliteration layer
- User types Latin/English → server route asks the model for **2–3 plausible
  Persian spellings**, returned as candidates.
- UI shows each candidate **with its differing abjad sum side by side**, so the
  ambiguity (Husayn = حسین vs حسن) becomes a teaching moment, not a bug.
- Model ONLY transliterates. All arithmetic stays in our deterministic engine.
- Optional: model-written interpretation in the literary voice (Rumi/Hafez register), as in Nazar.

---

## Phase 1 acceptance — what "design done" means
- [ ] Both pages built and navigable, 0.42s transitions
- [ ] All three color modes working and persisted
- [ ] Letter breakdown renders with staggered animation, element tinting
- [ ] Total + reduced value present as a designed "result moment"
- [ ] Eastern/Western numeral toggle
- [ ] Learn table fully laid out (sample rows OK), source named
- [ ] Responsive; RTL correct; fonts loaded
- [ ] **Then STOP and present for review.**

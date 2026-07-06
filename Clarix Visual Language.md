# Clarix Visual Language

**Version:** 1.0
**Status:** Living design system — the DNA
**Purpose:** This document names and standardizes the recurring elements that make a page unmistakably Clarix. It is the reference for every future component, section, and page. It describes what already exists in the codebase so the language stays consistent as the site grows.

> The test for everything below: **"Would this exist in the workshop?"**
> If yes, it belongs. If not, leave it out.

---

## 0. The one-line identity

Clarix does not decorate pages. It leaves **evidence of work** on them.

Every page is a **drafting sheet from an engineer's notebook** — precise, quiet, 95% clean, with a deliberate 2–5% of human roughness (a pencil underline, a margin note, a slightly crooked stamp). The clean and the rough are both intentional. The contrast is the point.

If someone removed the logo, they should still know it's Clarix because the page looks *drawn before it was built*.

---

## 1. The Clarix Mark — the registration crosshair

Clarix's recurring symbol is the **registration mark** (`components/workshop/Crosshair.tsx`): a small circle with a full-bleed cross through it — the alignment mark printers and draftspeople use to line up a sheet.

```
      │
   ╭──┼──╮
───┼──●──┼───
   ╰──┼──╯
      │
```

It already appears at the hero corners and on the workshop margin rail. Promote it to **the mark**:

- **Meaning:** the origin point. Where a drawing is aligned before work begins. "Measured, aligned, then built."
- **Where it may appear:** sheet corners, the margin rail, section origins, the footer, favicon, loading states, section dividers. Sparingly — it earns its meaning by *not* being everywhere.
- **Rules:** always thin-stroke (`strokeWidth ~1`), never filled, `text-fog/50` by default. Never scale it up as a hero graphic — it is a *mark*, not an illustration.
- **Do not** invent a second competing symbol. One mark, used with restraint.

---

## 2. Color

Warm paper, graphite ink, one copper accent. Defined in `app/globals.css`. **The interface must still read beautifully in grayscale** — color supports, never defines.

| Token | Value | Use |
|---|---|---|
| `--paper` | `#faf8f4` | Background. Warm white, drafting paper. |
| `--ink` | `#211f1a` | Primary text, primary buttons. |
| `--graphite` | `#45423b` | Body text. |
| `--fog` | `#8a857a` | Labels, mono metadata, the mark. |
| `--line` | `#e5e1d8` | Hairline rules, borders, the grid. |
| `--copper` | `#9c5b34` | The single accent. |
| `--copper-deep` | `#7f4526` | Copper pressed/hover. |

**Copper budget:** treat it as ink you're running low on. One accent per viewport is usually enough — a section index, a stamp, the emphasized clause of a headline. If two things fight for copper, one of them is wrong.

---

## 3. Typography — three voices

Set in `app/layout.tsx`. Each voice has one job; never mix them.

- **Display — Instrument Serif** (`font-display`). Editorial, confident. Hero headlines, section statements, philosophy. Italic is available for the emphasized clause (`<em class="text-copper">`).
- **Interface — Geist Sans** (`font-sans`). Body, navigation, buttons. Modern, highly readable.
- **Technical — Geist Mono** (`font-mono`). Metadata only: indices, sheet numbers, labels, build/rev tags. Always uppercase, wide tracking (`tracking-[0.18em]`–`[0.3em]`), tiny (`text-[9px]`–`text-[11px]`), in `fog`/`copper`.
- **Hand — Caveat** (`font-hand`). Margin notes, workshop observations, sketch labels **only**. Never body text. Usually rotated 1–2° off axis.

The mono + display + hand contrast *is* the notebook: printed labels, set headlines, handwritten thinking, all on one sheet.

---

## 4. The invisible grid & spacing

- Layout spine: `mx-auto max-w-6xl px-6`, sections `py-24 md:py-32`, separated by `border-t border-line`.
- Construction grid: `.blueprint-grid` at `32px`. Invisible in normal use; revealed by **debug mode** (Konami code, `DebugMode.tsx`).
- Spacing scale (from the brand doc): `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`. No random margins. Visitors feel it without seeing it.
- **Deliberate asymmetry:** columns are staggered on purpose (e.g. the middle column in `WhatWeBuild` sits `md:mt-12` lower; foundations stagger `lg:ml-10`). Precise content, relaxed layout — never rigidly symmetrical.

---

## 5. The component vocabulary

These are the standardized "words." Reuse them — do not reinvent equivalents.

### Structural
- **`SectionHeading`** (`ui/`) — the drafting-sheet label every chapter opens with: `index · label ──── note · S.NN/08`.
- **`WorkshopMargin`** (`layout/`) — the fixed left rail; tracks the active chapter and carries the living "Refining · Rev NN" element.
- **`Button`** (`ui/`) — mechanical press (`active:translate-y-px`), `rounded-[2px]`, no bounce. Variants: primary / secondary / ghost.

### Evidence & annotation (the roughness budget)
- **`WorkshopNote`** — recurring numbered note in the hand voice. *Only write when there is something true to say.*
- **`MarginNote`** — tiny mono revision note, nearly hidden, found by the curious.
- **`MicroTag`** — bordered mono tag: build numbers, "Draft · Approved", rev markers.
- **`Stamp`** — crooked approval stamp, copper outline.
- **`Crosshair`** — the mark (see §1).

### Sketch / hand-drawn (deterministic — no hydration drift, see `lib/sketch.ts`)
- **`SketchArrow`**, **`SketchUnderline`**, **`HoverUnderline`** — pencil strokes that draw themselves in.
- **`BlueprintDiagram`**, **`FoundationsDrawing`**, **`DecisionTree`**, **`MethodSketch`** — CAD-style illustrations built from `sketchRect` / `sketchCircle` / `sketchDiamond`.

### Motion
- **`Reveal`**, **`MeterBar`** (`animations/`), all under `motion/react`.

---

## 6. Motion — mechanical, not playful

Motion explains structure; it does not entertain. Elements **assemble, snap, align, lock into place** — they do not float or bounce.

- Standard entrance ease: `[0.22, 1, 0.36, 1]`, ~`0.6s`, small `y` offset (≤16px).
- Buttons press 1px. Cards move a few pixels, never leap.
- Sketch strokes *draw themselves* rather than fade.
- **Always** honor `prefers-reduced-motion` (handled globally in `globals.css` and via `useReducedMotion`).

---

## 7. Voice & language lexicon

Write like an engineer who respects the reader, not a marketer. No buzzwords, no jargon. Evidence over claims — show the diagram, the score, the rev history, not "we build scalable software."

| Instead of | Clarix says | Status |
|---|---|---|
| Services | **Capabilities** | shipped |
| Projects | **Builds** | shipped |
| Clients | **Partners** | shipped |
| Our Team | **The Workshop** / People | shipped |
| Portfolio | **Records** / Build Archive | shipped |
| Our Process | **Method** / How We Work | shipped |
| Maintenance | **Continuous Improvement** | shipped |
| Roadmap | **Workbench** | reserved |
| Blog | **Workshop Journal** | reserved |

---

## 8. Quiet obsession

Never *tell* visitors you care about details. Let them **discover** it. Reward curiosity with tiny true facts, placed where only the attentive find them:

- `title` tooltips on diagrams: *"Iteration 12 — earlier drafts had six boxes."*
- Rev markers that reference real edits.
- The debug-mode easter egg.
- A margin note admitting how many times a page was simplified.

These must be **true**. A fabricated "we adjusted this 18 times" is worse than none.

---

## 9. The living site

Clarix is never "done" — the site should quietly show ongoing work: the "Refining · Rev NN" element in the margin, incrementing workshop-note numbers, revision markers. When you ship a real refinement, bump the rev. The evidence should be real.

---

## 10. What to avoid

Floating blobs · neon gradients · particles · generic 3D · robots · sci-fi · stock business photos · fake dashboards · glassmorphism · trend-first design · **generic cards / accordions / testimonial sliders / feature grids**.

> Note: the site deliberately **rejects cards** (`WhatWeBuild`, Rev 12: *"seven cards felt like a brochure"*). The signature container is the **drafting sheet** — a ruled top border, a mono index, staggered columns — not a boxed card. Prefer the sheet.

---

## 11. Building a new page or section — the checklist

1. Open with a `SectionHeading` (index, label, sheet number `S.NN/08`).
2. Register the section id in `WorkshopMargin` `SECTIONS`.
3. Display headline in Instrument Serif; one emphasized clause in copper italic.
4. Body in Geist Sans, `text-graphite`.
5. Add **at most one or two** roughness elements (a `WorkshopNote`, a `MarginNote`, a `SketchUnderline`) — and only if true.
6. Use the drafting sheet, not a card.
7. Stagger the columns; avoid rigid symmetry.
8. Mechanical motion; honor reduced-motion.
9. Place the mark or a `Crosshair` only where it means something.
10. Final test: **"Would this exist in the workshop?"** If no, cut it.

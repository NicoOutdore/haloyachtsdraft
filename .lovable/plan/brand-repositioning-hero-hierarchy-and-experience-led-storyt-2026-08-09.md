# Brand repositioning: hero hierarchy and experience-led storytelling

A messaging refinement only. Existing palette, typography, navigation, layout language and minimal aesthetic stay exactly as they are. No new pages.

## 1. Homepage hero (`src/routes/index.tsx`)

Rebuild the hero text stack in this hierarchy, keeping the existing image, overlay and buttons:

```text
[HALO logo mark]
Infinite Range. Zero Noise.        <- small, wide letter-spacing, muted
Solar Powered. Ocean Capable.      <- dominant headline, largest
Quiet by Design.                   <- ~72% of headline size, lighter weight
Luxury solar-electric power catamarans designed around a simpler,
more enjoyable way to spend time on the water.
```

- Tagline uses the existing `eyebrow` style so it reads as brand, not slogan.
- Primary headline keeps the current h1 scale; secondary line renders inside the same heading block at ~72% size with `font-light` and slightly muted colour, so the three lines read as one statement.
- The Dixon Yacht Design italic line stays.

## 2. Homepage section flow

Order after the hero, progressively revealing brand -> experience -> ownership -> technology:

1. **Brand essence** (replaces the current "Why Halo" icon trio as the first block): "Halo is designed around the experience of being on the water, not the machinery required to get there." Short lead paragraph plus a restrained line noting that Halo removes the complexity of traditional yachting without removing the adventure. No icons.
2. **A day aboard Halo** (new, editorial): four quiet time-of-day beats - morning coastal cruise, lunch held quietly in a secluded bay, afternoon swim without engine noise, evening return or overnight with solar replenishing the bank. Text-led, generous spacing, no icons or cards.
3. **More time on the water** (new ownership section): six short benefit lines - quiet propulsion, reduced servicing, no sails or standing rigging, far fewer winterisation procedures, simple intuitive operation, solar energy every day. Typographic list, not a spec table.
4. **Existing philosophy block** ("Substance over spectacle") is kept and lightly tightened so it doesn't duplicate the new brand essence copy.
5. **Capability, kept but demoted**: the three current value props (CE Category A, solar-electric autonomy, decentralised build) are rewritten benefit-first with the specification as supporting evidence, and moved below the experience sections.
6. Partners, two-editions and running-cost sections stay where they are.

Benefit-led rewrites used across these sections: quiet (hearing the sea and conversation), effortless stops (GPS-based position holding *where conditions permit*, framed as convenience, never as a safety or anchoring replacement), natural comfort (cork insulation and decking - cooler in sun, warmer in cool weather, quieter interior; no exaggerated environmental claims), reduced complexity ("greatly reduced seasonal maintenance", "far fewer winterisation procedures" - never "no winterisation").

## 3. Positioning corrections elsewhere

- Copy that frames Halo primarily as an ocean-crossing or expedition yacht is softened so ocean capability reads as reassurance, not identity. Touches the intros on `/models`, `/architecture` and the FAQ intro only - specifications, numbers and data files are unchanged.
- Meta title/description on the homepage updated to lead with the experience and solar-electric catamaran positioning rather than a spec list.

## 4. CTA language

Primary hero CTA stays "Configure Your Halo". Secondary contact-style CTAs (footer, end-of-page prompts) become "Request a Private Briefing", pointing to the existing configure route. Form-side wording on `/configure` and `/build-with-us` is untouched so the sheet capture keeps working.

## Technical notes

- Files touched: `src/routes/index.tsx` (majority), plus small copy edits in `src/routes/models.tsx`, `src/routes/architecture.tsx`, `src/routes/faq.tsx`, `src/components/site/Footer.tsx`.
- No changes to `data.ts` pricing, weights, energy figures, forms, server functions or schema beyond the homepage meta description.

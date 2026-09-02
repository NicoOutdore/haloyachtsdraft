# Standardise yacht naming on Halo 13.5

Replace the remaining "Halo 44" / "44ft" references with Halo 13.5 naming so the site uses one model identifier throughout.

## Changes

1. **Homepage brand manifesto** (`src/routes/index.tsx`)
   - Change "Halo delivers 44ft solar-electric catamarans" to "Halo delivers 13.5 m solar-electric catamarans" (matching the existing dimension style used elsewhere on the site).

2. **FAQ warranty question** (`src/routes/faq.tsx`)
   - Change "How does the warranty coverage work on my Halo 44?" to "How does the warranty coverage work on my Halo 13.5?"
   - Update the embedded FAQ JSON-LD `mainEntity` entry so the question text matches the rendered copy.

## Out of scope
- Tailwind utility classes and numeric padding values (e.g. `min-w-[44rem]`, chart padding `44`) — these are layout values, not yacht references.
- Historical archived plans under `.lovable/plan/`.
- Existing "Halo 13.5" / "Halo 13.5m" references are already consistent with the target naming.

## Verification
- Build/typecheck passes.
- Search confirms no remaining "Halo 44" or "44ft" yacht references in `src/` or `public/`.

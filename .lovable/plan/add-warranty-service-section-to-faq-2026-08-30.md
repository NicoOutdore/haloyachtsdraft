# Add Warranty & Service section to FAQ

## Scope

Expand `/faq` to include a new "Warranty & Service" group with the six supplied questions and answers, and update surrounding labels/metadata so the page scope reflects the new content.

## Changes

1. **`src/routes/faq.tsx`**
   - Add a `WARRANTY_SERVICE: Faq[]` array containing the six supplied items verbatim.
   - Insert a new `<Section id="warranty" eyebrow="Warranty & service" title="Ownership support & warranty coverage">` between the existing "Buying & build" and "Safety" sections.
   - Update `JSON_LD.mainEntity` to spread `[...BUYING, ...WARRANTY_SERVICE, ...SAFETY, ...SUSTAINABILITY]` so schema and page stay in sync.
   - Update `TITLE` and `DESCRIPTION` to mention warranty/service coverage.
   - Update the `<PageHero>` title and intro to include warranty/service alongside buying, safety and sustainability.

2. **`src/components/site/Footer.tsx`**
   - Relabel the FAQ link from "FAQ — buying, safety & sustainability" to "FAQ — buying, warranty, safety & sustainability".

## Out of scope

- No styling or component changes beyond the existing `FaqList` / `Section` patterns.
- No backend, pricing, or configurator changes.

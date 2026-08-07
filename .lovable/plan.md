# Brand values statement + FAQ "Buying & Build Model" section

## 1. Where the brand positioning goes

The positioning paragraph is a manifesto, too long for the hero. Plan:

- **Homepage — new "Our philosophy" section** placed directly after the "Why Halo" value props and before the two-editions section. A quiet, full-width statement block: eyebrow "Our philosophy", headline "Substance over spectacle.", then the two paragraphs (lightly tightened for web rhythm, regular hyphens, no em dashes), set in a restrained large-serif/lead style on the panel surface.
- **Reuse condensed**: a two-sentence version of the same statement appears on the `/models` page intro area so the brand voice carries beyond the homepage. (Optional — say if you'd rather keep it homepage-only.)

Text used verbatim, with only spacing/dash normalisation:

> For discerning ocean navigators and eco-conscious yacht owners who value substance over spectacle, Halo Yachts delivers 44ft solar-electric catamarans that unite commercial-grade engineering with pragmatic quiet luxury.
>
> Unlike conventional leisure yachts - often plagued by fragile systems, high maintenance downtime, and noisy diesel generators - Halo combines zero-emission blue-water autonomy and industrial-grade continuous-duty reliability with a quiet, beautifully understated aesthetic. We engineer for absolute peace of mind at sea, so you can focus on the journey, silent and uninterrupted.

## 2. FAQ expansion

Add a third accordion section to `/faq`: **"The Buying & Build Model"**, placed first (before Safety and Sustainability), since purchase questions are the highest-intent entry point.

Questions added, using your copy:
1. How does purchasing a Halo yacht work? (€525,000 + VAT, turnkey, CE Cat A)
2. Who is my point of contact during the build? (dedicated Halo Program Manager)
3. How is my money protected during construction? (escrow, milestone release on independent surveyor certificate)
4. Can I choose the interior finishes and colours? (Curated Interior Palettes)
5. Why does Halo use standardized specifications? (CE Cat A, 24-week delivery, fleet uptime)
6. What warranty comes with my Halo yacht? (single-point warranty; ePropulsion, Victron, yard guarantees)

Supporting updates:
- FAQ page title/description and hero intro updated to cover buying/ownership as well as safety and sustainability.
- Existing `FAQPage` JSON-LD automatically extends to the new questions (they feed the same array).
- Footer link relabelled from "FAQ — safety & sustainability" to "FAQ — buying, safety & sustainability".

## Technical notes

- `src/routes/index.tsx`: new `<Section>` for the philosophy block; no data or logic changes.
- `src/routes/faq.tsx`: new `BUYING` array, rendered via existing `FaqList`, spread into `JSON_LD.mainEntity` first; new `id="buying"` section anchor.
- `src/components/site/Footer.tsx`: link label only.
- No backend, pricing data, or configurator changes.

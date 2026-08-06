# Technical credibility & international pricing update

Four content/UX corrections so engineers, partner yards and overseas buyers get honest, checkable numbers.

## 1. Separate battery range from solar-assisted range

Today the site headlines "5.0 kt infinite solar cruise" without ever stating what the bank alone delivers. Add an explicit two-mode range statement wherever propulsion is described (architecture, models, FAQ, homepage value prop).

Derived from the existing published figures (2.6 kW propulsion + 0.4 kW hotel at 5.0 kts, 47 kWh usable-derated to ~90%):

- Pure electric, no solar, 47 kWh: ~14 h at 5.0 kts = **~70 nm** ideal; quoted conservatively as **~55-65 nm** at 5 kts, **~30-35 nm** at 6.5 kts.
- With the 67.4 kWh upgrade: **~80-90 nm** at 5 kts.
- Overnight reserve (12 h at 3.8 kts Explorer / 3.5 kts Coastal) stays as published, restated as a *battery-only* figure.
- Daylight solar-assisted: unchanged infinite-cruise framing, explicitly conditioned on irradiance.

A new "Range modes" block on /architecture presents the three modes side by side (battery only / daylight solar-assisted / kite + regen), and /models gains matching comparison rows.

Note: these come from the site's own draw and capacity figures, not from an ePropulsion test report. If you have measured numbers, they should replace mine.

## 2. Hydro-regeneration speed threshold

Reframe regeneration around the ~6 kt threshold:

- Headline claim becomes "meaningful passive recharging above ~6 knots under kite".
- The 3-4 kt and 5 kt callouts are relabelled as hotel-load offset / trickle, not battery-building.
- Add a line stating generation drops off non-linearly below 6 kts and that kite-speed regeneration is not a substitute for solar.
- Chart keeps the same curve; annotation marks the 6 kt threshold.
- FAQ answers on regen and overnight kite generation are rewritten to match.

## 3. Partner yard scope of work

On /build-with-us, add a "Scope of work" section before the criteria, stating the model plainly:

- Precision CNC kit-set supplied by Halo (hull, structure, systems specification).
- Local fabrication, welding, fit-out and commissioning by the yard.
- Asset-light, licence/royalty based - not subcontracted labour supply.
- What Halo supplies vs what the yard supplies, as a two-column table.

The hero intro and the criteria copy are updated to reflect this framing, and the homepage "Decentralised Build Model" card gains a one-line scope clarification.

## 4. Currency toggle (GBP / EUR / USD)

Add a currency toggle affecting all prices site-wide:

- Toggle control in the header (compact select) and repeated on /pricing and /configure.
- Base currency stays GBP; EUR and USD shown at fixed indicative rates held in one place, with a visible "indicative conversion, contract currency GBP" note.
- Applies to base price, equipment pack prices, configurator totals and the running-cost table (those are ranges - converted and rounded).
- Selection persists in localStorage; default GBP.

## Technical notes

- `src/components/site/data.ts`: add `RANGE_MODES`, regen threshold copy, `CURRENCIES` with indicative rates; convert `RUNNING_COSTS` strings into numeric ranges so they can be converted.
- New `src/components/site/currency.tsx`: context provider + `useCurrency()` + `<CurrencyToggle />` + `formatPrice()`. Provider mounts in `src/routes/__root.tsx`.
- Edits: `architecture.tsx` (range modes, regen threshold, chart annotation), `models.tsx` (new comparison rows, Product JSON-LD offer currency follows selection default GBP), `faq.tsx`, `index.tsx`, `pricing.tsx`, `configure.tsx`, `equipment.tsx`, `build-with-us.tsx`, `RegenChart.tsx`.
- Head metadata on touched routes updated where the description quotes the old claims.

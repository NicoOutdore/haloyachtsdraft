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

## 4. Euro as contract currency, converted at 1.168

All GBP figures are converted at the standard rate of **1.168** and rounded to the nearest €2,500. Euro becomes the single quoted contract currency site-wide (£ symbols removed everywhere, `priceCurrency: "EUR"` in JSON-LD).

| Item | GBP | × 1.168 | Quoted EUR |
| --- | --- | --- | --- |
| Base build price | £450,000 | 525,600 | **€525,000** |
| Off-Grid Endurance Pack | £28,000 | 32,704 | **€32,500** |
| Blue-Water Expedition Pack | £31,000 | 36,208 | **€35,000** |
| Mediterranean Comfort & Power Pack | £29,500 | 34,456 | **€35,000** |
| Charter & Entertainment Pack | £27,000 | 31,536 | **€32,500** |

Build-price allocation on /pricing splits the new base evenly: €262,500 partner yard / €262,500 Halo Yachts.

Annual running costs are converted at the same rate but rounded to the nearest €50 (€2,500 steps would be meaningless at this scale): Halo €1,950 – €2,900; traditional diesel cat €6,400 – €8,750. Confirm if you would rather these also snap to €2,500.

A currency toggle is not included - one contract currency, quoted in Euro.


## 5. Solar specification: Maxeon glass modules, Solbian removed

- Remove the "Solbian Maxeon high-efficiency flush solar laminate upgrade" item from the Off-Grid Endurance Pack and the "Solbian Maxeon solar upgrade" item from the Mediterranean Comfort & Power Pack. Pack prices stay unchanged at 28,000 and 29,500.
- Replace Solbian in the partner/trust badge row with **Maxeon**, described as the rigid glass module supplier.
- Update the array specification everywhere it appears (architecture propulsion specs, homepage value prop, models, FAQ, pricing base-spec copy): Maxeon All-Black rigid glass modules, standard ISO/IEC module dimensions, rail-mounted on the hardtop with airflow underneath for cooling, durability and single-module replacement. Add a short line that standard dimensions let partner yards source locally without international freight markups.
- Remove any remaining "flush hardtop" / "laminate" wording that contradicts the rail-mounted glass approach.

## Technical notes

- `src/components/site/data.ts`: add `RANGE_MODES`, regen threshold copy, `CURRENCIES` with EUR base and indicative GBP/USD rates; convert `RUNNING_COSTS` strings into numeric ranges so they can be converted; edit `PACKS` items and the `PARTNERS` badge list (Solbian → Maxeon); update `PROPULSION_SPECS` solar rows.
- New `src/components/site/currency.tsx`: context provider + `useCurrency()` + `<CurrencyToggle />` + `formatPrice()`. Provider mounts in `src/routes/__root.tsx`.
- Edits: `architecture.tsx` (range modes, regen threshold, chart annotation, solar spec), `models.tsx` (new comparison rows, Product JSON-LD `priceCurrency: "EUR"`), `faq.tsx`, `index.tsx`, `pricing.tsx`, `configure.tsx`, `equipment.tsx`, `build-with-us.tsx`, `RegenChart.tsx`, `Header.tsx`.
- Head metadata on touched routes updated where the description quotes the old claims or Solbian.


# Explorer vs Coastal specification update

Your new weights, capacities and speeds change several figures already published on the site (60 kWh bank, ~4,600 kg displacement, "+30 kWh / 90 kWh" pack upgrade). This plan corrects those everywhere and adds a dedicated models comparison page.

## 1. New page: /models — Explorer vs Coastal

A side-by-side comparison table (stacked cards on mobile) with the rows you supplied:

- Target market: Private couples & blue-water cruisers / Luxury charter ops & vacation fleets
- Passenger capacity: 4 guests (short-handed) / 8 guests + 2 professional crew
- Base deployed weight: 7,270 kg / 8,335 kg
- Standard energy storage: 47.0 kWh (2 x 23.5 kWh, one block per hull) — both models
- Long-range option (via the Off-Grid Endurance Pack): +20.4 kWh (2 x 10.2 kWh, one per hull) = 67.4 kWh
- Long-range weight impact: 7,470 kg / 8,535 kg
- Base infinite solar cruise: 5.0 kts / 4.5 kts
- Upgraded infinite solar cruise: 4.9 kts / 4.4 kts
- Overnight safe speed (battery only): 3.8 kts / 3.5 kts, sustained 12 hours
- Overnight safe speed (kite assisted): 4.5+ kts / 4.4+ kts with net battery generation
- Fresh water: 400 L symmetrical (2 x 200 L)
- Toys & tender: True Kit 400 + ePropulsion Spirit 2.0

Above the table, two short positioning blocks using your marketing angles: Explorer as the lighter "infinite range" machine holding 5.0 kts on daylight solar; Coastal as a high-yield charter platform still cruising at 4.5 kts fully loaded. Below it, a note on the long-range upgrade as a performance cushion: +200 kg costs only 0.1 kt of daytime equilibrium speed but buys range security for high-speed bursts and heavy overnight house loads such as air conditioning.

Linked from the main header nav, the footer, and the two model cards on the homepage. Own SEO metadata plus Product JSON-LD for both editions. Added to the sitemap.

## 2. Corrections to existing pages

- Architecture: energy reservoir becomes "ePropulsion 96 V lithium — 47.0 kWh standard (2 x 23.5 kWh, one block per hull), expandable to 67.4 kWh"; the "~4,600 kg target lightcraft displacement" row is replaced by deployed weights of 7,270 kg (Explorer) and 8,335 kg (Coastal). Fresh water row notes 2 x 200 L symmetrical tanks. Solar-vs-demand table wording updated to reference the 47 kWh bank, and the model blocks pick up capacity, tender and cruise-speed lines with a link across to /models.
- Equipment: Off-Grid Endurance Pack line becomes "Long-range battery upgrade +20.4 kWh (2 x 10.2 kWh, one per hull) — 67.4 kWh total"; meta description updated from "90 kWh".
- Pricing: "60 kWh" reference in the base-specification copy becomes 47.0 kWh standard, with the 67.4 kWh upgrade noted.
- Homepage: meta description and the Solar-Electric Autonomy value card updated to 47 kWh standard / 67.4 kWh optional; model cards gain the headline cruise speed and guest capacity.
- FAQ: the answer citing "the 60 kWh bank" updated to 47 kWh standard / 67.4 kWh optional.
- Configurator: an optional battery step offering Standard 47.0 kWh, +10.2 kWh (single hull) or +20.4 kWh (67.4 kWh total). No price shown for the standalone upgrade until you supply one; the summary and the Google Sheet row include the chosen battery.

## Technical notes

New `src/routes/models.tsx`; new `MODEL_COMPARISON` and battery-option constants in `src/components/site/data.ts` so every page reads one source. Existing per-model data extended with capacity, deployed weight, cruise speeds and tender. Configurator gains a battery field written into the existing Configurator sheet tab (new column). No backend or schema changes.

## Open item

The standalone long-range battery upgrade price is not yet set — send it over and it drops straight into the configurator and equipment pages.

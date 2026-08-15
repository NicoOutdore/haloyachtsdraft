# Simplify the buyer configurator

The `/configure` page is a buyer-facing tool, so two things that belong to the yard or to the equipment packs come out.

## 1. Remove the Energy & Propulsion step

Battery capacity is already carried inside the priced equipment packs (the long-range bank ships with the pack), so a separate energy choice duplicates it and can contradict the pack selection.

- Delete step 2 and its standard vs long-range choice cards.
- Delete the linked logic that auto-added or removed the long-range pack when energy changed.
- The summary card drops the "Energy" row; capacity is implied by the selected packs. The universal statement about twin ePropulsion pods and the ~7.5 – 8.0 kWp Maxeon array moves into the intro text above the wizard so buyers still see it.
- The enquiry payload spec summary drops the energy line.

## 2. Remove the Turnkey vs regional CNC choice

Build route is Halo's arrangement with the partner yard, not a buyer decision.

- Step 4 becomes "Delivery & acquisition": preferred build region plus acquisition route only.
- Summary card drops the "Sourcing" row and keeps "Build region".
- The enquiry payload sends the build region without a sourcing route.

## Resulting wizard

1. Layout & finishes (2 / 3 / 4 cabins)
2. Smart packages (priced packs for the chosen variant, capacity included)
3. Delivery & acquisition (preferred build region, acquisition route)

Variant toggle, highlights card, build facts, summary pricing and enquiry modal are otherwise unchanged.

## Technical notes

- `src/routes/configure.tsx` only: remove `energy`/`sourcing` state, the `selectEnergy` helper and the long-range coupling in `togglePack`, drop the `ENERGY_OPTIONS` and `SOURCING_ROUTES` imports, and renumber the remaining steps 1–3.
- `VARIANTS[].defaultEnergy`, `ENERGY_OPTIONS` and `SOURCING_ROUTES` stay in `src/components/site/data.ts` — `SOURCING_ROUTES` content is still relevant to the yard-facing pages; no data or backend changes.

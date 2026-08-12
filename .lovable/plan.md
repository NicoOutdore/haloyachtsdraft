# Correct the supply model on /build-with-us

The page currently describes "client free-issue supply", where the owner buys, ships and insures items directly to the yard. That is wrong. Halo is the sole contracting party with the client (€525,000 + options), and Halo free-issues everything to the yard.

## Corrected model

Replace the two-card "Turnkey vs client free-issue" split with a single, accurate description of how supply works:

1. **Halo free-issue supply (all equipment)** — the client contracts only with Halo. Halo contracts with suppliers at fleet volume to secure best pricing, and drop-ships equipment directly to the partner yard against the build schedule. Halo buys, ships, insures and warrants; the yard receives, stores and installs, and is paid installation labour only. Nothing is procured or marked up by the yard.
2. **Curated client choice** — the client selects from a limited curated option set (soft furnishings, laminate and palette finishes, electronics packs, tender/toys). Selections lock at a defined cut-off in the schedule; Halo then places the supplier order. Standardised choice is what keeps pricing, lead times and warranty single-source.

Add a short line for yards: free-issued goods arrive against a Halo delivery schedule tied to the milestone stages, and the yard confirms receipt and condition on arrival.

## Responsibility matrix updates

- Remove the "Nominated free-issue equipment — Client buys & ships" row.
- Add: "Curated options (furnishings, laminates, electronics packs)" — Halo: Contracts & free-issues · Yard: Receives & installs · Client: Selects from curated range.
- Keep "Interior palette selection" as Halo curates / yard builds / client selects.
- Client column elsewhere stays limited to selection, funding escrow and receiving reports.

## Also updated

- The page meta description, which currently says "turnkey vs client free-issue sourcing".
- Any remaining "free-issue"/"owner-supplied" wording elsewhere on the page so it reads consistently as Halo free-issue.

## Technical notes

Changes are confined to `src/routes/build-with-us.tsx`: the `SOURCING` array, the `RESPONSIBILITY` array, the section heading ("Who buys, ships, insures and warrants" stays accurate) and the `DESCRIPTION` constant. No pricing, form, or data.ts changes.

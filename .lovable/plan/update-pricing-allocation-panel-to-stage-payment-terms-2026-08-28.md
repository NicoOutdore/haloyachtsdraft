# Update /pricing allocation panel to stage payment terms

## Goal
Replace the outdated "How the build price is allocated" panel on the Pricing & Ownership page with a buyer-facing summary of the escrow-protected stage payment schedule.

## Current state
`src/routes/pricing.tsx` currently shows a two-row split:
- Licensed partner yard — €262,500
- Halo Yachts (design, kit, systems) — €262,500

This implies the end customer is contracting separately with both parties. Under the revised operating model described on `/build-with-us`, Halo contracts directly with the yard; the customer contracts with Halo for the full €525,000 + options. The left-hand price card already describes what the base price covers, so the right-hand panel should instead set out how payments are staged.

## Proposed change
1. In `src/routes/pricing.tsx`, replace the allocation panel with a "Stage payment schedule" panel.
2. New panel content:
   - Heading: "Stage payment schedule".
   - Intro sentence: payments are held in a dedicated escrow account and released only after an independent marine surveyor issues a Stage Completion Certificate for each milestone.
   - Stage list:
     - 20% — Contract deposit on order confirmation.
     - 20% — Keel laid and hull panels tacked (Weeks 1–4).
     - 25% — Hull, bridge-deck and bulkheads welded (Weeks 5–10).
     - 20% — Deck/superstructure close-out, systems installed and commissioned (Weeks 11–21).
     - 15% — Sea trials, snagging complete and handover (Weeks 22–24).
   - Footer note: "All percentages are of the base build price. Equipment packs, local VAT, delivery and commissioning are quoted and paid separately."
3. Keep the existing `BASE_PRICE` constant and `formatEur` helper; remove the hardcoded €262,500/€262,500 split.
4. Adjust the surrounding copy only as needed for consistency.

## Files to edit
- `src/routes/pricing.tsx`

## Verification
- Preview `/pricing` and confirm the old allocation panel no longer appears.
- Confirm the new stage payment panel renders correctly on desktop and mobile.
- Confirm no broken imports or build errors.
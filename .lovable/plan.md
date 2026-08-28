# Update /pricing allocation panel to reflect direct Halo–yard contracting

## Goal
Replace the outdated "How the build price is allocated" panel on the Pricing & Ownership page with a buyer-facing summary of what the €525,000 base price covers now that Halo contracts directly with the build yard.

## Current state
`src/routes/pricing.tsx` currently shows a two-row split:
- Licensed partner yard — €262,500
- Halo Yachts (design, kit, systems) — €262,500

This implies the end customer is contracting separately with both parties. Under the revised operating model described on `/build-with-us`, Halo contracts directly with the yard; the customer contracts with Halo for the full €525,000 + options.

## Proposed change
1. In `src/routes/pricing.tsx`, replace the allocation panel with a "What the base price covers" panel.
2. New panel content should reflect:
   - Complete, sailaway 13.5 m solar-electric aluminium catamaran.
   - Naval architecture, structural CAD, DXF nesting files and engineering supervision by Halo.
   - Yard fabrication, welding, fairing and local outfitting under Halo's direct contract and Quality Gate.
   - Standard 47.0 kWh ePropulsion 96 V drivetrain, ~38 m² Maxeon hardtop solar array and 40 m² LibertyKite auxiliary drive.
   - CE Category A (Ocean) certification file and build documentation.
   - Equipment packs, local VAT, delivery and commissioning remain separately quoted.
3. Keep the existing `BASE_PRICE` constant and `formatEur` helper; do not reintroduce a 50/50 split.
4. Adjust the surrounding copy only as needed for consistency.

## Files to edit
- `src/routes/pricing.tsx`

## Verification
- Preview `/pricing` and confirm the old allocation panel no longer appears.
- Confirm the new panel renders correctly on desktop and mobile.
- Confirm no broken imports or build errors.
# Update the supply model on /build-with-us to a hybrid sourcing model

The /build-with-us page currently describes a simple "Halo free-issue" model and a sourcing/responsibility matrix that does not match the real hybrid approach. Update it to a three-part model: central Tier-1 partnerships, regional sourcing with local CNC, and the Halo Quality & Conformity Gate.

## 1. New "Supply, Sourcing & Fabrication Options" section

Replace the current two-card "SOURCING" block with a three-card layout that explains the hybrid model clearly to yard partners.

### Card 1 — Centralized Master Partnerships (Halo Tier-1 Tech)

- Halo holds central OEM supply agreements with Tier-1 marine technology partners including ePropulsion (electric powertrains), Maxeon (ultra-high-efficiency solar architecture), and Victron Energy (power electronics).
- These master partnerships guarantee volume pricing, pre-engineered plug-and-play compatibility, and global single-point warranty backing for every build.
- The yard never sources or marks up Tier-1 drivetrain, energy storage, power electronics, or solar systems.

### Card 2 — Regional Sourcing & Local CNC Cutting (Cost & Logistics Optimization)

Break this into three sub-bullets for readability:

- **Aluminium hull kits:** Raw 5083-H111 marine-grade aluminium plate is router/laser-cut at certified local CNC facilities using Halo’s master DXF nesting files, provided local metal mill certificates and dimensional tolerances (±0.2 mm) meet Halo’s structural requirements.
- **Lightweight interior kits:** Composite interior furniture flat-packs (PET foam/honeycomb core panels) are CNC-routed locally to Halo’s digital files using approved local composite suppliers.
- **Local outfitting items:** Saloon glazing, marine doors, portholes, and galley/heads fixtures may be sourced locally by the build team or client to minimize freight and import duties.

Add a short note: where local sourcing is not practical or certified, Halo supplies the kit centrally.

### Card 3 — The Halo Quality & Conformity Gate

- All locally sourced materials, glass, and fixtures are subject to explicit pre-approval by Halo’s engineering team before installation.
- This mandatory QA gate guarantees 100% conformity to Halo’s aesthetic standards, weight targets, and CE Category A (Ocean) structural safety requirements.
- No locally sourced item enters the build without a Halo pre-approval record.

## 2. Responsibility matrix updates

Revise the `RESPONSIBILITY` array to match the hybrid model:

- **Naval architecture, structural CAD & DXF nesting files** — Halo: Owns & issues · Yard: Executes to file · Client: —
- **5083-H111 aluminium plate & local CNC cutting** — Halo: Specifies, approves mill certs & tolerances · Yard: Sources locally & cuts to DXF · Client: —
- **Composite interior flat-packs** — Halo: Issues digital files & approves supplier · Yard: Sources locally & routes · Client: —
- **Tier-1 drivetrain, batteries, solar, power electronics** — Halo: Sources centrally & warrants · Yard: Receives & installs · Client: —
- **Local outfitting items (glazing, doors, fixtures)** — Halo: Pre-approves spec · Yard: Sources locally · Client: May nominate within approved range
- **Curated options (furnishings, laminates, electronics packs)** — Halo: Contracts & free-issues · Yard: Receives & installs · Client: Selects from curated range
- **Interior palette selection** — Halo: Curates options · Yard: Builds to selection · Client: Selects
- **Weekly inspection & milestone sign-off** — Halo: Performs · Yard: Hosts & documents · Client: Receives report
- **CE Category A certification file** — Halo: Owns & submits · Yard: Provides build records · Client: —
- **Stage payment release from escrow** — Halo: Authorises · Yard: Invoices on certificate · Client: Funds escrow

Remove the outdated "Turnkey sourcing" / "Client free-issue supply" split and the "Nominated free-issue equipment" row.

## 3. Framework section refinement

Update the "01 — Central engineering" card body to mention that Halo supplies master DXF nesting files for local CNC cutting, not just "CNC kit supplied by Halo". Keep the "No lofting, no interpretation" angle.

Update the "02 — Local fabrication" card body to mention local sourcing of aluminium and interior flat-packs under Halo file control, in addition to local labour and standard components.

## 4. Meta description and heading copy

Update the `DESCRIPTION` constant to remove "turnkey vs client free-issue sourcing" and instead say: "central Tier-1 partnerships, regional CNC-cut aluminium and interior kits, local outfitting under the Halo Quality & Conformity Gate, and CE Category A certification".

Keep the section heading "Supply, sourcing & fabrication options" or similar. Update the section title to something like "A hybrid supply model: central tech, local fabrication".

## 5. No other pages affected

This is a copy/structure update confined to `src/routes/build-with-us.tsx`. No changes to `data.ts`, pricing, forms, or other routes.

## Files touched

- `src/routes/build-with-us.tsx` only.

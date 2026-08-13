# Interactive model selector & step-by-step configurator

Rebuilds `/configure` around an Explorer / Coastal toggle with a four-step wizard, a live summary card and an enquiry modal — and makes the two model blocks on `/architecture` interactive so they switch in place instead of stacking.

Engineered figures stay as published on the site: 47.0 kWh standard, 67.4 kWh long-range upgrade, ~7.5 – 8.0 kWp Maxeon array. Your brief's 65 / 70 / 100 kWh and 2.8 / 4.2 kWp values are not used, so the configurator agrees with Architecture, Models, Equipment and Pricing.

## 1. Model selector toggle

A segmented control at the top of the configurator:

- HALO EXPLORER — Private owner & off-grid
- HALO COASTAL — Charter & commercial fleet

Selecting a variant sets the subheadline and pre-selects defaults:

| | Explorer | Coastal |
| --- | --- | --- |
| Subheadline | Off-grid autonomy and silent luxury for owner-operators. | Zero fuel OPEX, low maintenance and smart fleet protection. |
| Layout | 3 cabins | 4 cabins |
| Pack | Off-Grid Endurance Pack | Charter & Entertainment Navigation Pack |
| Energy | 67.4 kWh long-range (inside the pack) | 47.0 kWh standard |

Switching the toggle resets the wizard to that variant's defaults; every choice remains editable afterwards.

## 2. Dynamic highlights card

Sits beside the toggle and swaps with the selection.

- Explorer: no marina dependence; hold position over deep water and Posidonia beds with Virtual Anchor Mode instead of anchor chain; silent climate control day and night; watermaker-fed 400 L symmetrical tankage.
- Coastal: no diesel fuel bill; far less engine servicing than a diesel drivetrain; charter-safe operation — speed governor, return-home reserve and geofencing keep guests from flattening the bank at full throttle.

New capability items (Virtual Anchor, Starlink off-grid comms, charter protection suite, heavy-duty wear surfaces) appear as highlight and summary content only — no new prices, pack pricing unchanged.

## 3. Four-step wizard

Horizontal stepper on desktop, accordion on mobile; each step keeps the current card styling.

1. Layout & finishes — 2 / 3 / 4 cabins, with the variant's recommended layout marked.
2. Energy & propulsion — 47.0 kWh standard vs 67.4 kWh long-range (the upgrade selects the pack that carries it, so the two never disagree).
3. Smart packages — the existing priced equipment packs for the chosen model, with the variant's software and hardware capability listed inside them.
4. Sourcing & delivery — build location (New Zealand, Australia, Germany, Italy, Undecided) plus turnkey partner-yard build vs approved regional CNC kit cutting, and the acquisition route and timeline.

## 4. Summary card and CTA

"Your Custom Halo Summary" shows the variant, layout, energy, selected packs, sourcing route, 24-week build (2,410 hours), CE Category A (Ocean), target delivery window, and the indicative total from €525,000 + VAT base.

Primary CTA "Reserve Build Slot / Enquire About This Spec" opens an enquiry modal: name, email, optional country code and phone, operating region, target delivery window and notes. The configured spec is pre-filled into the notes body, which the user can edit. Existing validation and the Google Sheets capture are reused unchanged — operating region and delivery window are folded into the notes column, so no new sheet columns.

## 5. Architecture page model cards

The two stacked model blocks become one interactive card with an Explorer / Coastal switch: image, summary, feature list, capacity, weight, cruise speed and tender swap in place, with a link through to `/models` and `/configure` carrying the chosen variant.

## Technical notes

- `src/routes/configure.tsx` rewritten; wizard steps extracted into `src/components/site/configurator/` components to keep files small. `Choice` and `PhoneFields` reused, dialog via existing shadcn `dialog`.
- New `VARIANTS` constant in `src/components/site/data.ts` mapping each variant to its model code, default cabins, default pack, highlight bullets and subheadline — single source for both the configurator and the architecture card.
- Architecture model section refactored into a client-side stateful component; no data changes beyond the shared constant.
- `/configure` accepts an optional `?variant=explorer|coastal` search param so links can preselect.
- No backend, schema or server-function changes; `submitConfiguration` payload shape is unchanged.

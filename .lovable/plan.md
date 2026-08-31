# Build With Us: trim, gate and reassure

Restructure `/build-with-us` so the public page is short and persuasive, the operational depth sits behind a light lead-capture gate, and buyers get explicit reassurance that a yard network is a strength rather than a gap.

## Public (ungated) page

Three sections only:

1. **Framework** — the existing three-card explanation of central engineering, local fabrication, regional delivery, plus the Maxeon sourcing note.
2. **Requirements** — the existing four partner-yard criteria.
3. **Application** — the existing yard application form, unchanged.

Plus two new short blocks:

- A **trust strip** under the hero: CE Category A certification owned by Halo, weekly independent surveyor inspection, escrow-held stage payments released only on a Stage Completion Certificate, single Halo contract for the buyer. This pulls the reassurance already living on `/pricing` and `/faq` onto the page where the "no factory of our own" question actually arises.
- A **"Why a network, not a factory"** panel aimed at prospective buyers: builds happen near the owner, capacity is not hostage to one yard's order book, a slot can be re-allocated if a yard underperforms, and the buyer's contract and escrow remain with Halo throughout.

## Gated Programme Brief

Everything currently on the page that is operational depth moves behind one gate:

- Production cadence (2,410 hours / 24 weeks) and the five milestone stages
- Supply, sourcing and fabrication (three cards) and the responsibility matrix
- Regional fabrication routes (Option A / Option B)
- Oversight and approval (four cards)

Gate behaviour:

- A single panel titled "Partner Programme Brief" listing what is inside, with four fields: yard name, country/region, contact name, email.
- On submit the content expands inline on the same page — no email round-trip, no page change.
- Email validated with the existing pattern; failed validation shows inline errors.
- The unlock is remembered in `localStorage` so a returning yard is not re-gated, read after hydration to avoid a mismatch.
- The full application form stays open and ungated below, so a yard ready to apply never hits the gate.

## Build slots

Not included in this pass. No yard list or availability board is published yet. A hardcoded, page-editable slot list is the agreed shape when you are ready.

## Assessment of the changes

**Yard conversion.** Likely to improve. The current page asks a yard to read roughly 2,000 words of programme detail before reaching a form. Framework + Requirements answers "is this for me?" in under a minute; the gate then converts undecided browsers into contactable leads, and the ungated form keeps zero friction for the ready ones. The main risk is gating too much substance, which the trust strip and Framework section offset.

**Buyer reassurance.** Improves, but the trust strip and the network panel do the work, not the gate. The decisive reassurance for a buyer is that Halo holds the contract, the certification file and the escrow release, and that an independent surveyor gates every payment — stated plainly on this page rather than only on `/pricing` and `/faq`. A named yard list would strengthen this further and is the obvious next step once yards are signed.

## Technical notes

- All changes are confined to `src/routes/build-with-us.tsx`; existing data arrays are reused, and the gated sections are wrapped in a conditional rather than rewritten.
- New lead capture reuses `submitYardApplication`'s pattern via a new lightweight server function writing to a "Yard Interest" tab in the existing Google Sheet (`src/lib/submissions.functions.ts` + `sheets.server.ts`), with the same Zod validation style.
- The page `head()` description is updated to reflect the shorter public scope.

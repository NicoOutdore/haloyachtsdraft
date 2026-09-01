# Build With Us: clarify what the yard application unlocks

Add subtext beneath the "Yard application" title on `/build-with-us` so a prospective yard understands the tender/RFQ process, what they will receive after applying, and how payment/commercial terms are handled.

## Proposed changes

### 1. Subtext under "Yard application"

Replace the current plain title with an `intro` paragraph on the Application section:

> "Applications are reviewed by Halo's production team. Shortlisted yards are invited to an invitation-only RFQ that includes the full build timetable, scope of supply, target costs for yard-sourced materials, design study plans (chine plate nesting and structural frame layout), and a simple 5-page tender return document. Commercial terms and labour rates are discussed at RFQ stage against the 2,410-hour programme."

This keeps the page focused but answers the two gaps the user identified: how the tender process works, and what/when yards are paid.

### 2. Optional: add a "What happens next" panel inside the application form

A small inline panel above the form fields with three short bullets:

1. **Review** — Halo production team checks accreditations, welding capacity and QC infrastructure.
2. **RFQ invitation** — shortlisted yards receive the RFQ pack with design studies, timetable and tender return template.
3. **Tender return & commercial terms** — yards return rates and hours against the 2,410-hour programme; commercial terms are agreed at this stage.

This gives yards a clear expectation before they fill in the form.

### 3. Currency consistency

The tender return document provided by the user is denominated in GBP, but the site has been converted to EUR (€525,000 base price, equipment packs in EUR, etc.). Any reference to the RFQ budget cap or tender figures will be converted to EUR at the existing 1.168 rate and rounded sensibly, with a note that figures are indicative and confirmed at RFQ stage.

### 4. Verification

- Check the preview for the updated section copy and layout.
- Investigate and fix the current `StartClient.js` dynamic import runtime error before or alongside the content change so the page renders correctly in preview.

## Files touched

- `src/routes/build-with-us.tsx` — add `intro` to the Application section and optionally a "What happens next" panel.
- `src/lib/submissions.functions.ts` — no change unless the user wants the new RFQ status tracked in the sheet.

# Streamlined buyer funnel, build transparency and FAQ consolidation

A content and structure refactor. Existing palette, typography, navigation and minimal aesthetic stay as they are.

## 1. Build detail lives on /build-with-us (yard page), not /configure

All four build & delivery parameters sit on the yard-facing page, written as a project-management brief explaining how the programme runs and who is responsible for what:

1. **Production cadence & schedule** — 2,410 total labour hours across a scheduled 24-week window, keel laying to handover, with named milestone stages the yard books against.
2. **Supply & equipment sourcing responsibility** — Turnkey sourcing (Halo sources and supplies components to spec) vs. client free-issue supply (owner-supplied electronics or soft furnishings received, stored and fitted by the yard without markup). Sets out who buys, who ships, who insures and who warrants in each case.
3. **Regional fabrication options** — Option A: complete vessel built and sea-trialled in Holland/UK, then shipped or sailed to destination. Option B: precision CNC aluminium kit files cut at a certified regional metalwork partner near the client's home port and assembled locally.
4. **Build oversight & CE approval** — dedicated Halo representative/surveyor on weekly on-site inspection, digital photo and video updates, milestone sign-off reports gating stage payment release from escrow, and the full CE Category A (Ocean) certification and documentation process the yard must support.

A responsibility matrix (Halo / yard / client free-issue) makes the split explicit. The existing partner-yard application form stays as the page's only funnel; the intro is trimmed so it no longer restates homepage brand copy.

## 2. /configure stays buyer-light

`/configure` keeps the configurator, pricing summary and enquiry form unchanged, with the submit CTA renamed **"Request Build Slot"**. It carries only a short three-line reassurance strip (24-week delivery, escrow-protected stage payments, CE Category A), linking to `/faq` and `/build-with-us` for the detail. No production-hours or sourcing detail on this page.

## 3. FAQ stays on /faq, rewritten to the supplied text

`/faq` keeps three groups: **The purchase & build process**, **Specifications, customisation & warranty**, then the existing Safety and Sustainability groups. The buying answers use the exact supplied wording, with one change: the price reads **€525,000 + VAT** to match the contract currency used everywhere else. The FAQPage JSON-LD is regenerated from the same source array so schema and page never drift.

## 4. CTA strategy — no phone calls

- Every CTA routes to a form or email: primary "Request Build Slot" (`/configure`), secondary "Request Information".
- "Request a Private Briefing" wording is retired site-wide (homepage x2, footer) since it implies a call.
- No telephone number, "call us", or "book a call" copy anywhere; the optional phone field stays in both forms as a contact detail only, with helper text noting Halo responds by email.
- No downloadable PDFs or costing downloads are introduced anywhere. (None exist today; the plan keeps it that way.)

## 5. Content rationalisation

- Audit homepage, /models, /architecture, /equipment, /pricing, /configure, /build-with-us for duplicate copy. Known overlaps to resolve: brand essence vs. "Substance over spectacle" on the homepage (merge into one statement), the decentralised-build explanation repeated on homepage / models / build-with-us (keep the full version on build-with-us, one-line elsewhere), and the CE Category A claim restated on four pages (keep detail on /architecture).
- Frame every section for the private owner-operator: pragmatic luxury, quiet zero-emission cruising, transparent build and cost.

## 6. Virtual Anchor Mode

Add **Virtual Anchor Mode (electric dynamic positioning)** as a named lifestyle feature on the homepage ("A day aboard Halo" / benefits list) and in the /architecture systems copy: total silence at swim and lunch stops, no chain drag over protected Posidonia seagrass, and a positive net solar balance while holding station in calm daylight. Framed as convenience where conditions permit, never as a substitute for anchoring or a safety system.

## 7. LibertyKite 40 sqm section

New section on `/architecture` (with a short benefit-led mention in the homepage feature list), using the uploaded aerial kite photo as the section image:

- What it is: a 40 sqm LibertyKite traction wing flown from the foredeck for downwind and reaching passages — quiet, low-heel assistance that adds range without sails, mast or standing rigging.
- Standard cleat reinforcement: every Halo is delivered with reinforced, structurally backed foredeck cleat and load-point fittings engineered for sustained kite loads, so extended kite use is safe and does not require a retrofit. Loads are tied into the aluminium structure rather than deck hardware alone.
- Ties into the existing kite-assisted range mode already in `data.ts`, so the range figures and this section reference the same numbers.

Framed as an assistance system for suitable conditions, not a primary propulsion or safety claim.

## Technical notes

- Files touched: `src/routes/build-with-us.tsx` (largest change), `src/routes/configure.tsx`, `src/routes/faq.tsx`, `src/routes/index.tsx`, `src/routes/architecture.tsx`, `src/components/site/Footer.tsx`, and small copy edits in `models.tsx` / `equipment.tsx` / `pricing.tsx`.
- The kite image is registered as a Lovable asset pointer and imported, matching how other site imagery is handled; alt text describes the kite-assisted catamaran.
- FAQ uses the existing shadcn Accordion; content lives in typed arrays that also feed the JSON-LD.
- No changes to `data.ts` pricing, the Google Sheets submission functions, form field schema, or Sheets columns.
- Head metadata refreshed on `/configure`, `/faq`, `/build-with-us` and `/architecture` to match the new content.

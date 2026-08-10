# Streamlined buyer funnel, build transparency and FAQ consolidation

A content and structure refactor. Existing palette, typography, navigation and minimal aesthetic stay as they are.

## 1. Buyer build detail moves onto /configure

`/configure` becomes the buyer purchase page. Above the existing configurator, add a concise "How your Halo is built" block covering the four parameters:

1. **Production cadence** — 2,410 total labour hours across a scheduled 24-week window, keel laying to handover.
2. **Flexible supply** — Turnkey sourcing (Halo sources every component to spec) vs. client free-issue supply (owner-supplied electronics or soft furnishings fitted without yard markup).
3. **Regional fabrication** — Option A: complete vessel built and sea-trialled in Holland/UK, then shipped or sailed to destination. Option B: precision CNC aluminium kit cut and assembled at a certified regional partner near the owner's home port.
4. **Oversight & CE approval** — dedicated Halo representative/surveyor on weekly on-site inspection, digital photo and video updates, milestone sign-off reports, escrow-released stage payments, full CE Category A (Ocean) certification.

The configurator, pricing summary and enquiry form stay exactly as they are. The submit CTA is renamed "Request Build Slot", and the page closes with a link to the FAQ rather than repeating answers inline.

## 2. FAQ stays on /faq, rewritten to the supplied text

`/faq` keeps three groups: **The purchase & build process**, **Specifications, customisation & warranty**, then the existing Safety and Sustainability groups. The buying answers are replaced with the exact supplied wording, with one change: the price reads **€525,000 + VAT** to match the contract currency used everywhere else. The FAQPage JSON-LD is regenerated from the same source array so schema and page never drift.

## 3. /build-with-us stays yard-facing, with contract and supervision detail added

The page keeps its partner-yard purpose and application form, and gains a "Contract & supervision" section covering: scope split between Halo (design IP, CNC kit, drivetrain, solar architecture, specification) and the yard (fabrication, fit-out, labour); the 2,410-hour / 24-week production standard yards must hold to; weekly Halo representative inspections and milestone sign-off before stage funds release; free-issue equipment handling; and CE Category A documentation obligations. Its intro is trimmed so it no longer restates homepage brand copy.

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

## Technical notes

- Files touched: `src/routes/configure.tsx`, `src/routes/faq.tsx`, `src/routes/build-with-us.tsx`, `src/routes/index.tsx`, `src/routes/architecture.tsx`, `src/components/site/Footer.tsx`, and small copy edits in `models.tsx` / `equipment.tsx` / `pricing.tsx`.
- FAQ uses the existing shadcn Accordion; content lives in typed arrays that also feed the JSON-LD.
- No changes to `data.ts` pricing, the Google Sheets submission functions, form field schema, or Sheets columns.
- Head metadata refreshed on `/configure` and `/faq` to match the new content.

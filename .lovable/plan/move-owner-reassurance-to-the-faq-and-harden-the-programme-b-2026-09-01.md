# Move owner reassurance to the FAQ, and harden the Programme Brief form

## a) Remove "For prospective owners" from /build-with-us

The four-card "Why a network, not a single factory" section is aimed at buyers and does not belong on a yard-facing page. It is removed entirely, along with its data array. Everything else on the page stays: the governance strip, Framework, gated Programme Brief, Requirements, Application.

The governance strip at the top stays, because a yard also needs to know Halo carries the contract, the certification and the payment gates.

### Rationalised into a new FAQ group

A new group, **Our build network**, is added to `/faq` (after "Buying & build", before "Warranty & service") and folded into the existing FAQ JSON-LD:

1. **Why doesn't Halo own its own shipyard?** — Halo owns the part that determines the yacht: naval architecture, the master CNC files, the Tier-1 systems, the specification and the CE Category A certification file. Fabrication is contracted to accredited aluminium yards. Capital that would sit in a shed sits in engineering and in the boat.
2. **Who am I actually buying from?** — One purchase agreement with Halo Yachts. Halo is prime contractor; the yard is Halo's subcontractor and is never the buyer's counterparty.
3. **How do I know the yard is any good?** — Accreditation criteria (certified aluminium welding, marine QA records, capacity), the Halo Quality & Conformity Gate, weekly inspection by a Halo representative or appointed surveyor, and stage payments released from escrow only against a Stage Completion Certificate.
4. **Will two Halos built at different yards be the same boat?** — Same DXF-cut kit, same centrally sourced systems, same inspection regime and the same certification definition, so the yacht is identical regardless of which yard welds her.
5. **Does building near my home port actually help me?** — Shorter delivery leg, lower freight and import exposure, and commissioning/handover near where the boat will be used.
6. **What happens if a yard fails to perform mid-build?** — Written honestly (see below).

### The "Halo moves the build" point — reframed

You are right that physically relocating a part-built hull is rarely realistic; past the early panel stage it is expensive and slow, and it is not a promise worth making. The FAQ answer states the escalation ladder as it genuinely works:

- Problems surface weekly, not at handover, because inspection is continuous and payment gates are staged. Most issues are rectification at the yard, at the yard's cost, before the next stage payment is released.
- Money is the primary protection: an uncertified stage releases no funds, so the buyer is never paying ahead of verified work.
- Relocation is a real option only early — before major hull assembly, when the build is still effectively a cut kit — in which case Halo re-allocates the slot to another accredited yard.
- Later in the build, the remedy is Halo taking direct control of completion: supervision stepped up, additional labour or a replacement subcontractor brought in, and, if needed, a different yard completing fit-out and commissioning.
- In every case the buyer's contract, escrow balance, specification and warranty stay with Halo. No claim is made that a schedule is immune to disruption — the commitment is that the buyer's money and contract are.

The corresponding "A slot can be re-allocated" wording is not carried over to the yard page in its current absolute form.

## b) Bot protection and where the lead data goes

**Today:** the Programme Brief gate has no bot or spam protection at all, and neither does the yard application form. Submissions from the brief gate are appended to a **"Yard Interest"** tab in your Google Sheet (timestamp, yard, country, contact, email); applications go to the "Yard Applications" tab of the same sheet. Nothing is emailed anywhere — following up today means opening the sheet.

Proposed, in this pass:

- **Honeypot field** — a hidden, off-screen input on both the brief gate and the application form. Any submission that fills it is silently accepted client-side (the brief still opens) but discarded server-side.
- **Time-to-submit check** — a form render timestamp; submissions completed in under ~2 seconds are treated as automated and discarded server-side.
- **Server-side validation tightened** — reject disposable/obviously fake email shapes and enforce the existing length limits before the sheet write.
- **Per-session duplicate guard** — the same email unlocking repeatedly does not write duplicate rows.

Deliberately not added: a visible CAPTCHA. It hurts conversion on a low-volume B2B form, and the measures above stop essentially all commodity form spam. If real spam volume appears later, an invisible Turnstile/reCAPTCHA v3 check is the next step.

**Follow-up:** a `Status` column is added to the Yard Interest tab so you can mark who has been contacted, and the sheet row records whether that email later appears in Yard Applications. Automated follow-up email is a separate piece of work — say the word and it can be added on Lovable Cloud's built-in email, either an instant "here's the brief" confirmation to the yard, or a notification to you on each new lead.

## Technical notes

- `src/routes/build-with-us.tsx`: delete the `NETWORK` array and its `<Section>`; add honeypot + timestamp fields to both forms.
- `src/routes/faq.tsx`: new `NETWORK_FAQ` array rendered as an accordion group and merged into the JSON-LD source array; title/description/hero copy updated to mention the build network.
- `src/lib/submissions.functions.ts`: extend both Zod schemas with the honeypot and timestamp fields and drop suspicious submissions before `appendRow`.
- `src/lib/sheets.server.ts` unchanged; the Status column is a sheet-side header addition.

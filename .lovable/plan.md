# Reposition the €525,000 base price as a firm-but-indicative "from" price

## Goal
Keep a concrete headline figure (essential for buyer confidence and SEO) while presenting it honestly: the published price is an indicative "from" price that is firmed up in a written, fixed-price quotation before contract, reflecting yard, aluminium and regional cost variation.

## Pricing presentation strategy

**Recommended model: "From €525,000 pre-VAT" + a clear price-confirmation promise.**
- The published figure stays €525,000, always prefixed "from" and labelled "indicative base build price".
- Everywhere the figure appears, one short caveat explains the two main variables (partner-yard labour rates, aluminium market price) and states that a firm fixed-price quotation is issued before contract signing — the customer never commits without a confirmed price.
- The stage payment schedule already references percentages "of the base build price"; amend to "of the contracted base build price" so the contract figure, not the published figure, is clearly what payments are based on.

This is the standard approach for EU/UK consumer pricing: an honest "from" price is acceptable where it is genuinely achievable and the binding price is agreed before any contract/deposit. (Worth a quick review by a commercial lawyer for the exact EU/UK markets targeted — noted, not included in this build.)

## Changes by area

### 1. Pricing page (`src/routes/pricing.tsx`)
- Change card eyebrow from "End customer, pre-VAT" to "Indicative base price — end customer, pre-VAT" and render "From {formatEur(BASE_PRICE)}".
- Add a short "How your final price is confirmed" note under the price card covering:
  - price varies by build yard (labour rate) and the aluminium market at time of order;
  - Halo issues a firm, fixed-price written quotation valid for a defined acceptance window before contract;
  - once signed, the contracted price is fixed — stage payments are percentages of that contracted figure.
- Update the stage payment table footer: "All percentages are of the contracted base build price…".
- Update the meta description wording to "base build price from €525,000 pre-VAT".

### 2. Configurator (`src/routes/configure.tsx`)
- Summary row label stays "Base build (pre-VAT)" but value becomes "from €525,000".
- "Indicative total" sub-copy: "Plus VAT. Indicative from-price — a firm quotation is issued before contract and is fixed once signed."

### 3. FAQ (`src/routes/faq.tsx`)
- Update the buying-model answer: replace "for €525,000 + VAT" with "at a firm, quoted contract price (indicative base build from €525,000 pre-VAT)". Consider one new FAQ: "Is the published price the price I'll pay?" with the confirmation-process answer.

### 4. Homepage / models JSON-LD (`src/routes/index.tsx`, `src/routes/models.tsx`)
- Replace the single-price `Offer` with `AggregateOffer` using `lowPrice: BASE_PRICE` so structured data matches the "from" positioning and doesn't assert a fixed price.

### 5. Data layer (`src/components/site/data.ts`)
- Keep `BASE_PRICE = 525000` unchanged.
- Update `BUILD_FACTS` entry to "from €525,000 + VAT".
- No changes to stage payment percentages, packs, or running-cost figures.

## Files to edit
- `src/routes/pricing.tsx`
- `src/routes/configure.tsx`
- `src/routes/faq.tsx`
- `src/routes/index.tsx`
- `src/routes/models.tsx`
- `src/components/site/data.ts`

## Verification
- Preview `/pricing`, `/configure`, `/faq`, `/models` and home; confirm every instance of the price now reads "from €525,000" with the caveat.
- Confirm no remaining source strings assert a flat "€525,000" price without "from"/"indicative" framing (excluding the price-confirmation explanation itself).
- `bun run build` passes; JSON-LD still validates.

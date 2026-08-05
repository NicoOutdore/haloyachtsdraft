import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, Section, PageHero } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { BASE_PRICE, RUNNING_COSTS } from "@/components/site/data";

const TITLE = "Pricing, Ownership Pathways & Running Costs | Halo Yachts";
const DESCRIPTION =
  "Halo 13.5m base build price £450,000 pre-VAT, with outright purchase, Maltese maritime leasing (50% VAT reduction) and marine mortgage pathways — plus annual running cost comparisons against diesel cats.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Pricing,
});

const PATHWAYS = [
  {
    name: "Outright cash purchase",
    term: "Build-stage payments",
    body: "Staged payments released against verified build milestones, held under institutional escrow with independent marine surveyor sign-off at each stage.",
    points: ["Escrow-protected milestone releases", "Independent surveyor inspection reports", "Clean title on handover"],
  },
  {
    name: "Maltese maritime leasing",
    term: "Up to 36-month term",
    body: "A structured EU maritime lease that reduces the effective VAT from 18% to 9% — a 50% VAT saving — widely used for cruising yachts operating within European waters.",
    points: ["50% VAT reduction (18% → 9%)", "Up to 36-month lease term", "50% initial deposit", "EU-compliant maritime structure", "Purchase option at term end"],
  },
  {
    name: "Marine mortgage",
    term: "5 – 15 year term",
    body: "Conventional marine finance secured against the vessel, arranged with specialist marine lenders following survey and valuation.",
    points: ["5 – 15 year amortising term", "Deposit from 20%", "Survey & valuation led", "Rate set by lender"],
  },
];

function Pricing() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Commercial"
        title="Transparent pricing and ownership."
        intro="One base build price, three acquisition pathways, and a running cost profile that changes the arithmetic of long-term cruising."
      />

      <Section eyebrow="Base build" title="Target base build price">
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="surface-panel rounded-lg p-10">
            <p className="eyebrow">End customer, pre-VAT</p>
            <p className="mt-4 text-5xl font-semibold">£{BASE_PRICE.toLocaleString("en-GB")}</p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Complete, sailaway 13.5 m solar-electric aluminium catamaran in Model A or Model B
              configuration, including the 47.0 kWh ePropulsion 96 V system (67.4 kWh optional via equipment pack), ~38 m² hardtop solar array
              and standard 40 m² LibertyKite auxiliary drive.
            </p>
          </div>
          <div className="surface-panel rounded-lg p-10">
            <h3 className="text-lg font-semibold">How the build price is allocated</h3>
            <dl className="mt-6 space-y-4">
              <div className="flex items-baseline justify-between gap-4 border-b border-border/70 pb-3">
                <dt className="text-sm text-muted-foreground">Licensed partner yard</dt>
                <dd className="text-sm font-medium">£225,000</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-sm text-muted-foreground">Halo Yachts (design, kit, systems)</dt>
                <dd className="text-sm font-medium">£225,000</dd>
              </div>
            </dl>
            <p className="mt-6 text-xs text-muted-foreground">
              Equipment packs, local VAT, delivery and commissioning are quoted separately.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Acquisition" title="Three routes to ownership" className="border-t border-border">
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {PATHWAYS.map((p) => (
            <article key={p.name} className="surface-panel flex flex-col rounded-lg p-8">
              <p className="eyebrow">{p.term}</p>
              <h3 className="mt-3 text-xl font-semibold">{p.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Running costs" title="Annual running & maintenance comparison" className="border-t border-border">
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 pr-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">Platform</th>
                <th className="py-4 pr-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">Annual cost</th>
                <th className="py-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">Notes</th>
              </tr>
            </thead>
            <tbody>
              {RUNNING_COSTS.map((r) => (
                <tr key={r.craft} className="border-b border-border/70">
                  <td className={`py-5 pr-6 text-sm ${r.highlight ? "font-semibold text-accent" : ""}`}>{r.craft}</td>
                  <td className="py-5 pr-6 text-sm font-medium">{r.cost}</td>
                  <td className="py-5 text-sm text-muted-foreground">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg"><Link to="/configure">Configure & reserve</Link></Button>
          <Button asChild size="lg" variant="outline"><Link to="/equipment">See equipment packs</Link></Button>
        </div>
      </Section>
    </SiteShell>
  );
}

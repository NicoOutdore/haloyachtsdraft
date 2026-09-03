import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell, Section, PageHero } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { MODELS, MODEL_COMPARISON, BASE_PRICE } from "@/components/site/data";

const TITLE = "Explorer vs Coastal — Model Comparison | Halo Yachts";
const DESCRIPTION =
  "Side-by-side specifications for the Halo 13.5m Explorer and Coastal editions: deployed weight, 47 kWh standard battery, 67.4 kWh long-range option, infinite solar cruise speeds and overnight range.";
const URL = "https://haloyachts.lovable.app/models";

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": MODELS.map((m) => ({
    "@type": "Product",
    name: `Halo 13.5 ${m.code} — ${m.name}`,
    description: m.summary,
    category: "Solar-electric cruising catamaran",
    brand: { "@type": "Brand", name: "Halo Yachts" },
    offers: { "@type": "AggregateOffer", priceCurrency: "EUR", lowPrice: BASE_PRICE, offerCount: 1 },
  })),
};

export const Route = createFileRoute("/models")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(JSON_LD) }],
  }),
  component: Models,
});

const PITCHES = [
  {
    id: "model-a",
    eyebrow: "Model A — Explorer Edition",
    title: "The infinite range machine.",
    body:
      "Fewer guests means a lighter displacement — 7,270 kg deployed. That is what lets the Explorer hold a 5.0-knot infinite cruising sweet spot on standard solar power alone through daylight hours, then continue overnight at 3.8 knots on the bank or 4.5+ knots under kite with net battery generation.",
  },
  {
    id: "model-b",
    eyebrow: "Model B — Coastal Edition",
    title: "A high-yield charter platform.",
    body:
      "Even loaded to full charter capacity — 8 guests, 2 professional crew and heavy luggage at 8,335 kg — the Coastal still holds a 4.5-knot solar cruise in daylight, with a 3.5-knot overnight reserve and 4.4+ knots under kite. Simple, bulletproof systems for bareboat or skippered operation.",
  },
];

function Models() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Model comparison"
        title="Explorer or Coastal. One platform, two ways to live with it."
        intro="Both editions share the same aluminium hull platform, 96 V ePropulsion drivetrain and ~38 m² solar hardtop, and both are quiet, simple and ocean capable. Displacement, capacity and cruise performance are where they diverge."
      />


      <Section eyebrow="Positioning" title="Two very different owners.">
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {PITCHES.map((p) => {
            const model = MODELS.find((m) => m.id === p.id)!;
            return (
              <article key={p.id} className="surface-panel overflow-hidden rounded-lg">
                <img
                  src={model.image}
                  alt={`Halo ${model.code} — ${model.name}`}
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-8">
                  <p className="eyebrow">{p.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  <Link
                    to="/architecture"
                    hash={p.id}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                  >
                    Full technical specification <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Master specification"
        title="Explorer vs Coastal, line by line."
        intro="Indicative figures for the base build, with the long-range battery option shown where it changes the numbers."
        className="border-t border-border"
      >
        <div className="mt-10 hidden overflow-x-auto md:block">
          <table className="w-full min-w-[48rem] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <th className="w-1/4 py-3 pr-4 font-medium">Specification</th>
                <th className="py-3 pr-4 font-medium text-accent">Explorer — private / off-grid</th>
                <th className="py-3 font-medium">Coastal — vacation / charter</th>
              </tr>
            </thead>
            <tbody>
              {MODEL_COMPARISON.map((row) => (
                <tr key={row.metric} className="border-b border-border/60 align-top">
                  <th scope="row" className="py-4 pr-4 text-left font-medium">{row.metric}</th>
                  <td className="py-4 pr-4 text-muted-foreground">{row.explorer}</td>
                  <td className="py-4 text-muted-foreground">{row.coastal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 space-y-4 md:hidden">
          {MODEL_COMPARISON.map((row) => (
            <div key={row.metric} className="surface-panel rounded-lg p-6">
              <p className="eyebrow">{row.metric}</p>
              <p className="mt-3 text-sm">
                <span className="font-medium text-accent">Explorer:</span>{" "}
                <span className="text-muted-foreground">{row.explorer}</span>
              </p>
              <p className="mt-2 text-sm">
                <span className="font-medium">Coastal:</span>{" "}
                <span className="text-muted-foreground">{row.coastal}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="surface-panel mt-12 rounded-lg p-8">
          <h3 className="text-lg font-semibold">The long-range battery as a performance cushion</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            The 67.4 kWh upgrade adds one 10.2 kWh block per hull, supplied within an equipment pack
            rather than as a standalone option. The extra ~200 kg trims daytime equilibrium speed by
            only 0.1 knot, while adding substantial reserve for high-speed bursts and heavy overnight
            house loads such as cabin air conditioning.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/equipment">View equipment packs</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/configure">Configure & reserve</Link>
            </Button>
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}

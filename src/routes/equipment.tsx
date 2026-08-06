import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteShell, Section, PageHero } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { PACKS, MODELS, formatEur } from "@/components/site/data";

const TITLE = "Curated Equipment Packs & Upgrades | Halo Yachts";
const DESCRIPTION =
  "Factory-fitted equipment packs for the Halo 13.5m catamaran — the 67.4 kWh long-range battery upgrade, offshore navigation suites and Victron fast-charging infrastructure.";

export const Route = createFileRoute("/equipment")({
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
  component: Equipment,
});

function Equipment() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Optional upgrades"
        title="Curated equipment packs."
        intro="Factory-fitted upgrades bundled into a small number of high-value packs, so specification stays simple and build slots stay predictable."
      />

      {MODELS.map((model) => (
        <Section
          key={model.id}
          eyebrow={`${model.code} — ${model.name}`}
          title={`Packs for the ${model.name}`}
          className="border-b border-border"
        >
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {PACKS.filter((p) => p.model === model.code).map((pack) => (
              <article key={pack.id} className="surface-panel flex flex-col rounded-lg p-8">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <h3 className="min-w-0 text-xl font-semibold">{pack.name}</h3>
                  <p className="shrink-0 text-lg font-semibold text-accent">
                    {formatEur(pack.price)}
                  </p>
                </div>
                <ul className="mt-6 space-y-3">
                  {pack.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                {pack.note && (
                  <p className="mt-6 border-t border-border/60 pt-5 text-xs leading-relaxed text-muted-foreground">
                    {pack.note}
                  </p>
                )}
              </article>
            ))}
          </div>
        </Section>
      ))}

      <Section>
        <div className="surface-panel grid gap-6 rounded-lg p-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <div className="min-w-0">
            <h2 className="text-2xl font-semibold">Specify your yacht</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Combine an edition, cabin layout and equipment packs in the configurator.
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/configure">Configure & reserve</Link>
          </Button>
        </div>
      </Section>
    </SiteShell>
  );
}

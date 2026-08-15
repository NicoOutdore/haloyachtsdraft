import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, Section, PageHero } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { Choice, VariantToggle, HighlightsCard, Step } from "@/components/site/configurator/parts";
import { EnquiryDialog } from "@/components/site/configurator/EnquiryDialog";
import {
  MODELS,
  PACKS,
  BASE_PRICE,
  BUILD_LOCATIONS,
  BUILD_FACTS,
  VARIANTS,
  formatEur,
  type VariantId,
} from "@/components/site/data";

const TITLE = "Configure & Reserve Your Halo 13.5 | Halo Yachts";
const DESCRIPTION =
  "Configure your Halo 13.5m solar-electric catamaran — switch between the Explorer and Coastal platforms, then specify layout, energy, smart packages and your sourcing route.";

export const Route = createFileRoute("/configure")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  validateSearch: (search: Record<string, unknown>): { variant?: VariantId } =>
    search["variant"] === "coastal"
      ? { variant: "coastal" }
      : search["variant"] === "explorer"
        ? { variant: "explorer" }
        : {},
  component: Configure,
});

const ACQUISITION = [
  "Outright cash purchase",
  "Maltese maritime lease (3 years)",
  "Marine mortgage (5 to 15 years)",
  "Undecided",
];
const CABINS = ["2 cabins", "3 cabins", "4 cabins"];

function Configure() {
  const { variant: initialVariant } = Route.useSearch();

  const [variantId, setVariantId] = useState<VariantId>(initialVariant ?? "explorer");
  const variant = VARIANTS.find((v) => v.id === variantId)!;

  const [cabins, setCabins] = useState<string>(variant.defaultCabins);
  const [packs, setPacks] = useState<string[]>([variant.defaultPack]);
  const [location, setLocation] = useState<string>(BUILD_LOCATIONS[0]!);
  const [acquisition, setAcquisition] = useState<string>(ACQUISITION[0]!);
  const [dialogOpen, setDialogOpen] = useState(false);

  const model = MODELS.find((m) => m.code === variant.modelCode)!;
  const availablePacks = useMemo(
    () => PACKS.filter((p) => p.model === variant.modelCode),
    [variant.modelCode],
  );

  const selectedPacks = PACKS.filter((p) => packs.includes(p.id));
  const total = BASE_PRICE + selectedPacks.reduce((s, p) => s + p.price, 0);

  function selectVariant(id: VariantId) {
    const next = VARIANTS.find((v) => v.id === id)!;
    setVariantId(id);
    setCabins(next.defaultCabins);
    setPacks([next.defaultPack]);
  }

  function togglePack(id: string) {
    setPacks((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]));
  }

  const packNames = selectedPacks.map((p) => p.name).join(", ") || "No equipment packs";

  const specSummary = [
    `Halo 13.5 — ${variant.label} (${model.code} · ${model.name})`,
    `Layout: ${cabins}`,
    `Equipment packs: ${packNames}`,
    `Preferred build region: ${location}`,
    `Acquisition: ${acquisition}`,
    `Indicative total: ${formatEur(total)} + VAT`,
  ].join("\n");

  return (
    <SiteShell>
      <PageHero
        eyebrow="Configure & reserve"
        title="Specify your Halo 13.5."
        intro="Every Halo carries twin ePropulsion 96 V pods and a ~7.5 – 8.0 kWp Maxeon array. Start with the platform that matches how you will use her, then refine layout, smart packages and where she is built."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            <VariantToggle value={variantId} onChange={selectVariant} />
            <p className="mt-5 text-lg font-medium text-accent">{variant.subheadline}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              {model.code} — {model.name} · {model.capacity} · {model.cruise}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {BUILD_FACTS.map((f) => (
                <div key={f.label} className="rounded-lg border border-border bg-surface p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{f.label}</p>
                  <p className="mt-2 text-sm font-medium">{f.value}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Full detail in the{" "}
              <Link to="/faq" className="text-accent hover:underline">
                buyer FAQ
              </Link>{" "}
              and the{" "}
              <Link to="/build-with-us" className="text-accent hover:underline">
                build programme
              </Link>
              .
            </p>
          </div>
          <HighlightsCard variantId={variantId} />
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="space-y-10">
            <Step
              index={1}
              title="Layout & finishes"
              description="Curated interior palettes and joinery; cabin count sets the sleeping arrangement."
            >
              <div className="grid gap-4 sm:grid-cols-3">
                {CABINS.map((c) => (
                  <Choice
                    key={c}
                    selected={cabins === c}
                    onClick={() => setCabins(c)}
                    title={c}
                    {...(c === variant.defaultCabins ? { badge: "Recommended" } : {})}
                    {...(c === variant.defaultCabins
                      ? {
                          subtitle:
                            variantId === "explorer"
                              ? "Owner layout — master suite plus private office desk."
                              : "High-density charter layout for eight guests.",
                        }
                      : {})}
                  />
                ))}
              </div>
            </Step>

            <Step
              index={2}
              title="Smart packages"
              description={
                variantId === "explorer"
                  ? "Virtual Anchor Mode, off-grid comms and water autonomy."
                  : "Charter protection, fleet telematics and commercial durability."
              }
            >
              <div className="grid gap-4">
                {availablePacks.map((p) => (
                  <Choice
                    key={p.id}
                    selected={packs.includes(p.id)}
                    onClick={() => togglePack(p.id)}
                    title={p.name}
                    subtitle={p.items.join(" · ")}
                    price={formatEur(p.price)}
                    {...(p.id === variant.defaultPack ? { badge: "Pre-selected" } : {})}
                  />
                ))}
              </div>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {variant.capability.map((c) => (
                  <li key={c} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
            </Step>

            <Step
              index={3}
              title="Delivery & acquisition"
              description="Where she is built, and how you would like to acquire her."
            >
              <p className="text-sm font-medium">Preferred build region</p>
              <div className="mt-3 grid gap-4 sm:grid-cols-3">
                {BUILD_LOCATIONS.map((l) => (
                  <Choice key={l} selected={location === l} onClick={() => setLocation(l)} title={l} />
                ))}
              </div>
              <p className="mt-6 text-sm font-medium">Acquisition route</p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                {ACQUISITION.map((a) => (
                  <Choice
                    key={a}
                    selected={acquisition === a}
                    onClick={() => setAcquisition(a)}
                    title={a}
                  />
                ))}
              </div>
            </Step>
          </div>

          <aside className="surface-panel rounded-lg p-8 lg:sticky lg:top-28">
            <p className="eyebrow">Your custom Halo summary</p>
            <h2 className="mt-3 text-2xl font-semibold">{variant.label}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {model.code} — {model.name}
            </p>
            <dl className="mt-6 space-y-3 text-sm">
              <SummaryRow label="Base build (pre-VAT)" value={formatEur(BASE_PRICE)} />
              <SummaryRow label="Layout" value={cabins} />
              {selectedPacks.map((p) => (
                <SummaryRow key={p.id} label={p.name} value={formatEur(p.price)} />
              ))}
              <SummaryRow label="Build region" value={location} />
              <SummaryRow label="Build programme" value="24 weeks · 2,410 hours" />
              <SummaryRow label="Certification" value="CE Category A (Ocean)" />
            </dl>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Indicative total
            </p>
            <p className="mt-1 text-3xl font-semibold text-accent">{formatEur(total)}</p>
            <p className="mt-1 text-xs text-muted-foreground">Plus VAT, from a €525,000 base build.</p>

            <Button size="lg" className="mt-7 w-full" onClick={() => setDialogOpen(true)}>
              Reserve Build Slot / Enquire About This Spec
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">
              Enquiry only — no payment is taken, and we reply by email.
            </p>
          </aside>
        </div>
      </Section>

      <EnquiryDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        payload={{
          model: `${variant.label} — ${model.code} ${model.name}`,
          cabins,
          packs: packNames,
          location,
          acquisition,
          total,
          specSummary,
        }}
      />
    </SiteShell>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border/70 pb-3">
      <dt className="min-w-0 text-muted-foreground">{label}</dt>
      <dd className="shrink-0 text-right">{value}</dd>
    </div>
  );
}

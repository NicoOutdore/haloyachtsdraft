import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { SiteShell, Section, PageHero } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MODELS, PACKS, BASE_PRICE, BUILD_LOCATIONS } from "@/components/site/data";

const TITLE = "Configure & Reserve Your Halo 13.5 | Halo Yachts";
const DESCRIPTION =
  "Configure your Halo 13.5m solar-electric catamaran — choose the Explorer or Med edition, 3 or 4 cabin layout, equipment packs, preferred partner yard location and acquisition route.";

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
  component: Configure,
});

const ACQUISITION = ["Outright cash purchase", "Maltese maritime lease (3 years)", "Marine mortgage (7 years)", "Undecided"];
const TIMELINES = ["Within 12 months", "12 – 24 months", "24 – 36 months", "Exploring"];
const CABINS = ["2 cabins", "3 cabins", "4 cabins"];

function Choice({
  selected,
  onClick,
  title,
  subtitle,
  price,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  subtitle?: string;
  price?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`w-full rounded-lg border p-5 text-left transition-colors ${
        selected ? "border-accent bg-accent/10" : "border-border bg-surface hover:border-accent/50"
      }`}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
        <span className="min-w-0 font-medium">{title}</span>
        {price && <span className="shrink-0 text-sm text-accent">{price}</span>}
      </div>
      {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
    </button>
  );
}

function Configure() {
  const [model, setModel] = useState<string>(MODELS[0].code);
  const [cabins, setCabins] = useState(CABINS[0]);
  const [packs, setPacks] = useState<string[]>([]);
  const [location, setLocation] = useState(BUILD_LOCATIONS[0]);
  const [acquisition, setAcquisition] = useState(ACQUISITION[0]);
  const [timeline, setTimeline] = useState(TIMELINES[0]);

  const availablePacks = useMemo(() => PACKS.filter((p) => p.model === model), [model]);
  const total = useMemo(
    () => BASE_PRICE + PACKS.filter((p) => packs.includes(p.id)).reduce((s, p) => s + p.price, 0),
    [packs],
  );

  function selectModel(code: string) {
    setModel(code);
    setPacks([]);
  }

  function togglePack(id: string) {
    setPacks((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success("Reservation enquiry received", {
      description: "Our team will contact you within two business days with a build slot proposal.",
    });
    e.currentTarget.reset();
  }

  const selectedModel = MODELS.find((m) => m.code === model)!;

  return (
    <SiteShell>
      <PageHero
        eyebrow="Configure & reserve"
        title="Specify your Halo 13.5."
        intro="Choose your superstructure, interior layout and equipment packs, then tell us where and when you would like her built."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-semibold">1. Superstructure</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {MODELS.map((m) => (
                  <Choice
                    key={m.id}
                    selected={model === m.code}
                    onClick={() => selectModel(m.code)}
                    title={`${m.code} — ${m.name}`}
                    subtitle={m.subtitle}
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold">2. Interior layout</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {CABINS.map((c) => (
                  <Choice key={c} selected={cabins === c} onClick={() => setCabins(c)} title={c} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold">3. Equipment packs</h2>
              <div className="mt-5 grid gap-4">
                {availablePacks.map((p) => (
                  <Choice
                    key={p.id}
                    selected={packs.includes(p.id)}
                    onClick={() => togglePack(p.id)}
                    title={p.name}
                    subtitle={p.items.join(" · ")}
                    price={`£${p.price.toLocaleString("en-GB")}`}
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold">4. Preferred build location</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {BUILD_LOCATIONS.map((l) => (
                  <Choice key={l} selected={location === l} onClick={() => setLocation(l)} title={l} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold">5. Acquisition route & timeline</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {ACQUISITION.map((a) => (
                  <Choice key={a} selected={acquisition === a} onClick={() => setAcquisition(a)} title={a} />
                ))}
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-4">
                {TIMELINES.map((t) => (
                  <Choice key={t} selected={timeline === t} onClick={() => setTimeline(t)} title={t} />
                ))}
              </div>
            </div>
          </div>

          <aside className="surface-panel rounded-lg p-8 lg:sticky lg:top-28">
            <p className="eyebrow">Your specification</p>
            <h2 className="mt-3 text-2xl font-semibold">{selectedModel.name}</h2>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-b border-border/70 pb-3">
                <dt className="text-muted-foreground">Base build (pre-VAT)</dt>
                <dd>£{BASE_PRICE.toLocaleString("en-GB")}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border/70 pb-3">
                <dt className="text-muted-foreground">Layout</dt>
                <dd>{cabins}</dd>
              </div>
              {PACKS.filter((p) => packs.includes(p.id)).map((p) => (
                <div key={p.id} className="flex justify-between gap-4 border-b border-border/70 pb-3">
                  <dt className="min-w-0 text-muted-foreground">{p.name}</dt>
                  <dd className="shrink-0">£{p.price.toLocaleString("en-GB")}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-4 border-b border-border/70 pb-3">
                <dt className="text-muted-foreground">Build location</dt>
                <dd>{location}</dd>
              </div>
            </dl>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">Indicative total</p>
            <p className="mt-1 text-3xl font-semibold text-accent">£{total.toLocaleString("en-GB")}</p>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" required className="mt-2" autoComplete="name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required className="mt-2" autoComplete="email" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" className="mt-2" autoComplete="tel" />
              </div>
              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" name="notes" rows={3} className="mt-2" placeholder="Cruising plans, questions, timing" />
              </div>
              <Button type="submit" size="lg" className="w-full">Reserve a build slot</Button>
              <p className="text-xs text-muted-foreground">
                Enquiry only — no payment is taken. {acquisition} · {timeline}.
              </p>
            </form>
          </aside>
        </div>
      </Section>
    </SiteShell>
  );
}

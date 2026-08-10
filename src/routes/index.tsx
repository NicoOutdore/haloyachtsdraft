import { createFileRoute, Link } from "@tanstack/react-router";
import { Anchor, Sun, Factory, ArrowRight } from "lucide-react";
import { SiteShell, Section } from "@/components/site/SiteShell";
import { Logo } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";
import { IMAGES, PARTNERS, MODELS, RUNNING_COSTS, BASE_PRICE } from "@/components/site/data";

const TITLE = "Halo Yachts | Solar Powered. Ocean Capable. Quiet by Design.";
const DESCRIPTION =
  "Luxury solar-electric power catamarans designed around a simpler, more enjoyable way to spend time on the water — quiet propulsion, daily solar energy and genuine ocean capability.";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Halo Yachts",
  slogan: "Infinite Range, Zero Noise",
  description: DESCRIPTION,
  brand: { "@type": "Brand", name: "Halo Yachts" },
  makesOffer: MODELS.map((m) => ({
    "@type": "Offer",
    priceCurrency: "EUR",
    price: BASE_PRICE,
    itemOffered: {
      "@type": "Product",
      name: `Halo 13.5 ${m.code} — ${m.name}`,
      description: m.summary,
      category: "Solar-electric cruising catamaran",
    },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(JSON_LD) }],
  }),
  component: Home,
});

const DAY_ABOARD = [
  {
    time: "Morning",
    body: "Slip the lines and run quietly along the coast. No diesel clatter, no vibration underfoot - only water, wind and conversation.",
  },
  {
    time: "Midday",
    body: "Choose a secluded bay and switch to Virtual Anchor Mode. Where conditions suit, the twin electric drives hold position on GPS - no engine idling, no chain dragged across protected Posidonia seagrass, and in calm daylight the array usually covers the draw with something left over.",
  },
  {
    time: "Afternoon",
    body: "Swim, paddleboard, or read on a cork deck that stays cool underfoot in strong sun. Nothing running, nothing to shout over.",
  },
  {
    time: "Evening",
    body: "Return to harbour or stay out. The array keeps working through the last of the light, replenishing the bank while you sit down to dinner.",
  },
];

const OWNERSHIP = [
  "Quiet propulsion.",
  "Virtual Anchor Mode for silent swim and lunch stops.",
  "Reduced servicing.",
  "No sails or standing rigging.",
  "Far fewer winterisation procedures.",
  "Simple, intuitive operation.",
  "Solar energy every day.",
];

const VALUES = [
  {
    icon: Anchor,
    title: "Confidence when the coast runs out",
    body: "CE Category A ocean certification, self-sufficient systems and ISO/CE offshore safety equipment throughout. Capability you rarely need, and are glad to have.",
  },
  {
    icon: Sun,
    title: "Energy that arrives on its own",
    body: "Around 38 m² of Maxeon all-black rigid glass modules, a 47 kWh bank (67.4 kWh optional) and a standard LibertyKite auxiliary drive with hydro-regeneration. No fuel dock, no schedule.",
  },
  {
    icon: Factory,
    title: "Built close to home",
    body: "Precision CNC kit-sets from a single naval architecture package, fabricated by licensed regional partner yards in New Zealand, Australia, Germany and Italy.",
  },
];

function Home() {
  return (
    <SiteShell>
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
        <img
          src={IMAGES.explorer}
          alt="Halo 13.5m solar-electric aluminium catamaran at anchor in clear water"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 overlay-depth" />
        <div className="relative mx-auto max-w-4xl px-5 pt-28 pb-16 text-center lg:px-8">
          <Logo className="mx-auto h-28 sm:h-36" />
          <p className="eyebrow mt-5">Infinite Range. Zero Noise.</p>
          <h1 className="mt-8 text-3xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Solar Powered. Ocean Capable.
            <span className="mt-3 block text-[2.15rem] font-light leading-[1.15] text-foreground/85 sm:text-[2.5rem] lg:text-[3rem]">
              Quiet by Design.
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Luxury solar-electric power catamarans designed around a simpler, more enjoyable way to
            spend time on the water.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/configure">Configure Your Halo</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/configure">Request Information</Link>
            </Button>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-sm italic leading-relaxed text-muted-foreground/80">
            A collaboration with Dixon Yacht Design, pairing rugged aluminium durability with
            effortless life on the water.
          </p>
        </div>
      </section>

      <Section eyebrow="Brand essence" title="Designed around the water, not the machinery.">
        <div className="mt-8 max-w-3xl space-y-6">
          <p className="text-lg leading-relaxed text-foreground sm:text-xl">
            Halo is designed around the experience of being on the water, not the machinery required
            to get there. Every significant decision - quiet electric propulsion, solar energy,
            simple operation, natural materials, exceptional autonomy - exists to remove friction
            from a day afloat.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Halo removes the complexity of traditional yachting without removing the adventure. A
            two-hour evening cruise, a lunch stop in a quiet bay, a weekend away, a season of island
            hopping or an ocean passage: the same yacht, the same calm, with no ritual of preparation
            standing between you and the water.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="A day aboard Halo"
        title="How the yacht is actually used."
        className="border-t border-border"
      >
        <div className="mt-12 max-w-4xl divide-y divide-border/60">
          {DAY_ABOARD.map((d) => (
            <div key={d.time} className="grid gap-3 py-8 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-10">
              <p className="eyebrow pt-1">{d.time}</p>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{d.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Effortless ownership"
        title="More time on the water."
        intro="Halo is engineered to reduce the complexity that comes with traditional yacht ownership. Less time preparing the yacht. More time enjoying it."
        className="border-t border-border"
      >
        <ul className="mt-12 grid max-w-4xl gap-x-12 gap-y-6 sm:grid-cols-2">
          {OWNERSHIP.map((o) => (
            <li key={o} className="border-b border-border/50 pb-5 text-lg font-light text-foreground">
              {o}
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Cork decking and insulation keep the interior quieter and the deck comfortable underfoot,
          cooler in strong sun and warmer in cool weather. Other onboard systems still need
          appropriate seasonal care, but the annual routine is a fraction of what a sailing or
          diesel yacht demands.
        </p>
      </Section>

      <Section
        eyebrow="Our philosophy"
        title="Substance over spectacle."
        className="border-t border-border"
      >
        <div className="surface-panel mt-10 max-w-4xl rounded-lg p-8 sm:p-12">
          <p className="text-lg leading-relaxed text-foreground sm:text-xl">
            For discerning owners who value substance over spectacle, Halo delivers 44ft
            solar-electric catamarans that unite commercial-grade engineering with pragmatic quiet
            luxury.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Where conventional leisure yachts bring fragile systems, maintenance downtime and noisy
            diesel generators, Halo pairs continuous-duty reliability with a quiet, beautifully
            understated aesthetic. We engineer for peace of mind at sea, so the journey stays silent
            and uninterrupted.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="The evidence"
        title="What makes the experience possible."
        className="border-t border-border"
      >
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, body }) => (
            <article key={title} className="surface-panel rounded-lg p-8">
              <Icon className="size-7 text-accent" aria-hidden />
              <h3 className="mt-6 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="border-y border-border bg-navy-deep">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <p className="eyebrow text-center">Engineering & technology partners</p>
          <ul className="mt-7 grid grid-cols-2 gap-6 text-center sm:grid-cols-3 lg:grid-cols-5">
            {PARTNERS.map((p) => (
              <li key={p.name}>
                <p className="text-sm font-semibold text-silver-bright">{p.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{p.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section
        eyebrow="Two superstructures, one hull platform"
        title="Choose the deck that matches your ocean."
        intro="Both editions share the same high-efficiency aluminium hull platform, drivetrain and energy system."
      >
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {MODELS.map((m) => (
            <article key={m.id} className="surface-panel overflow-hidden rounded-lg">
              <img
                src={m.image}
                alt={`Halo ${m.code} — ${m.name}`}
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <p className="eyebrow">{m.code} — {m.subtitle}</p>
                <h3 className="mt-3 text-2xl font-semibold">{m.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.summary}</p>
                <dl className="mt-6 grid gap-3 border-t border-border/60 pt-5 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Capacity</dt>
                    <dd className="mt-1">{m.capacity}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Solar cruise</dt>
                    <dd className="mt-1 text-accent">{m.cruise}</dd>
                  </div>
                </dl>
                <Link
                  to="/models"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  Compare Explorer & Coastal <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Cost of ownership"
        title="Silence costs less."
        intro="Indicative annual running and maintenance costs for a comparable 13.5 m cruising platform."
      >
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {RUNNING_COSTS.map((r) => (
            <div
              key={r.craft}
              className={`rounded-lg p-7 ${r.highlight ? "border border-accent/60 bg-accent/10" : "surface-panel"}`}
            >
              <p className="text-sm text-muted-foreground">{r.craft}</p>
              <p className="mt-4 text-2xl font-semibold">{r.cost}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{r.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link to="/pricing">Pricing & acquisition pathways</Link>
          </Button>
          <Button asChild>
            <Link to="/configure">Request Build Slot</Link>
          </Button>
        </div>
      </Section>
    </SiteShell>
  );
}

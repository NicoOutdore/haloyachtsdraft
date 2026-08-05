import { createFileRoute, Link } from "@tanstack/react-router";
import { Anchor, Sun, Factory, ArrowRight } from "lucide-react";
import { SiteShell, Section } from "@/components/site/SiteShell";
import { Logo } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";
import { IMAGES, PARTNERS, MODELS, RUNNING_COSTS } from "@/components/site/data";

const TITLE = "Halo Yachts | 13.5m Solar-Electric Aluminium Catamarans";
const DESCRIPTION =
  "Halo Yachts builds 13.5m solar-electric aluminium blue-water cruising catamarans — CE Category A ocean certified, 47 kWh (67.4 kWh optional) ePropulsion 96V architecture and standard LibertyKite auxiliary drive.";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Halo Yachts",
  slogan: "Infinite Range, Zero Noise",
  description: DESCRIPTION,
  brand: { "@type": "Brand", name: "Halo Yachts" },
  makesOffer: MODELS.map((m) => ({
    "@type": "Offer",
    priceCurrency: "GBP",
    price: 450000,
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

const VALUES = [
  {
    icon: Anchor,
    title: "CE Category A Ocean Certified",
    body: "Engineered for self-sufficiency in extreme offshore conditions, with ISO/CE-compliant offshore safety equipment throughout.",
  },
  {
    icon: Sun,
    title: "Solar-Electric Autonomy",
    body: "Continuous daytime range from ~38 m² of rigid industrial hardtop solar, a 47 kWh standard bank (67.4 kWh optional), and standard LibertyKite auxiliary downwind drive with hydro-regeneration.",
  },
  {
    icon: Factory,
    title: "Decentralised Build Model",
    body: "World-class naval architecture paired with licensed regional partner yards in New Zealand, Australia, Germany and Italy.",
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
          <h1 className="mt-8 text-3xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Freedom Without Compromise.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Discover the Coastal and Explorer editions - aluminium solar-electric catamarans engineered
            for extended cruising, quiet luxury, and true off-grid self-sufficiency.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/configure">Configure Your Halo</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/architecture">Explore Architecture</Link>
            </Button>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-sm italic leading-relaxed text-muted-foreground/80">
            A collaboration with Dixon Yacht Design, pairing rugged aluminium durability with
            effortless life on the water.
          </p>
        </div>
      </section>

      <Section eyebrow="Why Halo" title="Built to leave the fuel dock behind.">
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
                <Link
                  to="/architecture"
                  hash={m.id}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  View full specification <ArrowRight className="size-4" />
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
        <div className="mt-10">
          <Button asChild variant="outline">
            <Link to="/pricing">Pricing & acquisition pathways</Link>
          </Button>
        </div>
      </Section>
    </SiteShell>
  );
}

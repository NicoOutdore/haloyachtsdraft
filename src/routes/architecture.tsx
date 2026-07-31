import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, Section, PageHero, SpecRow } from "@/components/site/SiteShell";
import {
  MODELS,
  SHARED_SPECS,
  PROPULSION_SPECS,
  SOLAR_YIELDS,
  REGEN_PROFILE,
} from "@/components/site/data";

const TITLE = "Naval Architecture & Technical Specifications | Halo Yachts";
const DESCRIPTION =
  "Full technical hub for the Halo 13.5m catamaran: 6.6m beam, 800mm bridge-deck clearance, Sealium aluminium construction, 60 kWh ePropulsion 96V drivetrain, 38m² solar array and kite hydro-regeneration.";

export const Route = createFileRoute("/architecture")({
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
  component: Architecture,
});

function Architecture() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Technical hub"
        title="Shared naval architecture. Two superstructures."
        intro="A slender semi-displacement aluminium platform designed by Dixon Yacht Design, engineered for CE Category A ocean service and continuous solar-electric autonomy."
      />

      <Section eyebrow="Platform" title="Dimensional & structural specification">
        <dl className="mt-10 grid gap-x-14 md:grid-cols-2">
          {SHARED_SPECS.map((s) => (
            <SpecRow key={s.label} label={s.label} value={s.value} />
          ))}
        </dl>
      </Section>

      {MODELS.map((m, i) => (
        <section key={m.id} id={m.id} className={`scroll-mt-24 border-y border-border ${i % 2 ? "" : "bg-navy-deep"}`}>
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
            <img
              src={m.image}
              alt={`Halo ${m.code} — ${m.name}`}
              className={`w-full rounded-lg object-cover ${i % 2 ? "lg:order-2" : ""}`}
              loading="lazy"
            />
            <div>
              <p className="eyebrow">{m.code} — {m.subtitle}</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{m.name}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{m.summary}</p>
              <ul className="mt-7 space-y-3">
                {m.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <Section eyebrow="Drivetrain" title="Propulsion, energy systems & hydro-regeneration">
        <dl className="mt-10 grid gap-x-14 md:grid-cols-2">
          {PROPULSION_SPECS.map((s) => (
            <SpecRow key={s.label} label={s.label} value={s.value} />
          ))}
        </dl>
      </Section>

      <Section
        eyebrow="Energy"
        title="Mediterranean solar yield profiles"
        intro="Indicative daily harvest from the ~38 m² hardtop array across the cruising year."
        className="border-t border-border"
      >
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {SOLAR_YIELDS.map((y) => (
            <div key={y.season} className="surface-panel rounded-lg p-7">
              <p className="eyebrow">{y.months}</p>
              <h3 className="mt-3 text-lg font-semibold">{y.season}</h3>
              <p className="mt-4 text-2xl font-semibold text-accent">{y.yield}</p>
              <p className="mt-2 text-xs text-muted-foreground">{y.sun}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 text-xl font-semibold">Hydro-regeneration under kite power</h3>
        <div className="mt-6 grid max-w-xl gap-4 sm:grid-cols-2">
          {REGEN_PROFILE.map((r) => (
            <div key={r.speed} className="surface-panel rounded-lg p-6">
              <p className="text-sm text-muted-foreground">At {r.speed}</p>
              <p className="mt-2 text-xl font-semibold">{r.input}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
          The standard 40 m² LibertyKite drives the yacht downwind while the ePropulsion pods
          freewheel as generators — CAN-bus integration authorises full regeneration back into the
          96 V bank.
        </p>
      </Section>
    </SiteShell>
  );
}

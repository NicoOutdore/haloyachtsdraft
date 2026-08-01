import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, Section, PageHero, SpecRow } from "@/components/site/SiteShell";
import {
  MODELS,
  SHARED_SPECS,
  PROPULSION_SPECS,
  SOLAR_YIELDS,
  CRUISE_DEMAND,
  SOLAR_VS_DEMAND,
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

        <h3 className="mt-16 text-xl font-semibold">Continuous solar input vs. propulsion demand</h3>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Daily totals matter for the bank, but infinite range is decided second by second: whenever
          live array output exceeds the pods&apos; draw, the yacht cruises on sunlight alone. At{" "}
          {CRUISE_DEMAND.speed} in benign conditions the twin pods draw {CRUISE_DEMAND.draw}
          {" "}({CRUISE_DEMAND.note.toLowerCase()}), plus roughly {CRUISE_DEMAND.hotel} of hotel load.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <th className="py-3 pr-4 font-medium">Sky condition</th>
                <th className="py-3 pr-4 font-medium">Live array input</th>
                <th className="py-3 pr-4 font-medium">Pods at 5.0 kts</th>
                <th className="py-3 font-medium">Result</th>
              </tr>
            </thead>
            <tbody>
              {SOLAR_VS_DEMAND.map((r) => (
                <tr key={r.condition} className="border-b border-border/60">
                  <td className="py-4 pr-4 font-medium">{r.condition}</td>
                  <td className="py-4 pr-4 text-accent">{r.input}</td>
                  <td className="py-4 pr-4 text-muted-foreground">{CRUISE_DEMAND.draw}</td>
                  <td className="py-4 text-muted-foreground">{r.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



        <h3 className="mt-16 text-xl font-semibold">Hydro-regeneration under kite power</h3>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          The standard 40 m² LibertyKite drives the yacht downwind while both ePropulsion pods
          freewheel as generators — CAN-bus integration authorises full regeneration back into the
          96 V bank. The dashed line is a single 20 kW pod; the solid line is the installed twin-pod
          configuration.
        </p>
        <RegenChart />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="surface-panel rounded-lg p-6">
            <p className="text-sm text-muted-foreground">3 – 4 kts under kite</p>
            <p className="mt-2 text-xl font-semibold text-accent">~0.3 – 0.7 kW</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Light-air drift: regeneration offsets most of the ~0.4 kW hotel load.
            </p>
          </div>
          <div className="surface-panel rounded-lg p-6">
            <p className="text-sm text-muted-foreground">5.0 kts under kite</p>
            <p className="mt-2 text-xl font-semibold text-accent">~1.2 kW</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Roughly 0.6 kW per pod — hotel load covered with surplus into the bank.
            </p>
          </div>
          <div className="surface-panel rounded-lg p-6">
            <p className="text-sm text-muted-foreground">6.5 kts under kite</p>
            <p className="mt-2 text-xl font-semibold text-accent">~2.4 kW</p>
            <p className="mt-2 text-xs text-muted-foreground">
              About 1.2 kW per pod — comparable to a clear-sky winter solar hour, sustained through
              the night.
            </p>
          </div>
        </div>

      </Section>
    </SiteShell>
  );
}

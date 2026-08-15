import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, Section, PageHero, SpecRow } from "@/components/site/SiteShell";
import { RegenChart } from "@/components/site/RegenChart";
import { ModelShowcase } from "@/components/site/ModelShowcase";
import {
  SHARED_SPECS,
  PROPULSION_SPECS,
  SOLAR_YIELDS,
  CRUISE_DEMAND,
  SOLAR_VS_DEMAND,
  RANGE_MODES,
  REGEN_THRESHOLD,
} from "@/components/site/data";


const TITLE = "Naval Architecture & Technical Specifications | Halo Yachts";
const DESCRIPTION =
  "Full technical hub for the Halo 13.5m catamaran: 6.6m beam, 800mm bridge-deck clearance, Sealium aluminium construction, 47 kWh (67.4 kWh optional) ePropulsion 96V drivetrain, 38m² solar array and kite hydro-regeneration.";

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
        intro="A slender semi-displacement aluminium platform designed by Dixon Yacht Design. The engineering exists to make the experience effortless: quiet running, daily solar energy, and CE Category A capability held in reserve."
      />


      <Section eyebrow="Platform" title="Dimensional & structural specification">
        <dl className="mt-10 grid gap-x-14 md:grid-cols-2">
          {SHARED_SPECS.map((s) => (
            <SpecRow key={s.label} label={s.label} value={s.value} />
          ))}
        </dl>
      </Section>

      <ModelShowcase />

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



        <h3 className="mt-16 text-xl font-semibold">Range modes</h3>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Three honest ways of stating range. Battery-only figures assume no solar and no kite;
          solar-assisted figures depend on irradiance.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {RANGE_MODES.map((m) => (
            <div key={m.mode} className="surface-panel rounded-lg p-6">
              <p className="eyebrow">{m.mode}</p>
              <p className="mt-3 text-lg font-semibold text-accent">{m.figures}</p>
              <p className="mt-2 text-xs text-muted-foreground">{m.upgrade}</p>
              <p className="mt-4 border-t border-border/60 pt-4 text-xs leading-relaxed text-muted-foreground">
                {m.note}
              </p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 text-xl font-semibold">Hydro-regeneration under kite power</h3>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          The standard 40 m² LibertyKite drives the yacht downwind while both ePropulsion pods
          freewheel as generators — CAN-bus integration authorises full regeneration back into the
          96 V bank. The dashed line is a single 20 kW pod; the solid line is the installed twin-pod
          configuration.
        </p>
        <p className="mt-4 max-w-2xl text-sm font-medium text-accent">
          {REGEN_THRESHOLD.headline}
        </p>
        <RegenChart />
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {REGEN_THRESHOLD.detail}
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="surface-panel rounded-lg p-6">
            <p className="text-sm text-muted-foreground">3 – 4 kts under kite</p>
            <p className="mt-2 text-xl font-semibold text-accent">~0.20 – 0.45 kW</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Partial hotel-load offset only — this trickle does not build charge in the bank.
            </p>
          </div>
          <div className="surface-panel rounded-lg p-6">
            <p className="text-sm text-muted-foreground">5.0 kts under kite</p>
            <p className="mt-2 text-xl font-semibold text-accent">~0.65 kW</p>
            <p className="mt-2 text-xs text-muted-foreground">
              About 0.33 kW per pod — roughly balances the ~0.4 kW hotel load.
            </p>
          </div>
          <div className="surface-panel rounded-lg p-6">
            <p className="text-sm text-muted-foreground">Above ~6 kts under kite</p>
            <p className="mt-2 text-xl font-semibold text-accent">~1.1 kW</p>
            <p className="mt-2 text-xs text-muted-foreground">
              About 0.55 kW per pod at 6.5 kts — the point where the bank starts to refill
              overnight.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Auxiliary drive"
        title="LibertyKite 40 m² — standard on every Halo"
        className="border-t border-border"
      >
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          <img
            src="/images/libertykite.png"
            alt="Aerial view of a cruising catamaran under a 40 square metre traction kite flown from the foredeck"
            className="w-full rounded-lg object-cover"
            loading="lazy"
          />
          <div>
            <p className="text-base leading-relaxed text-muted-foreground">
              A 40 m² LibertyKite traction wing is supplied as standard, flown from the foredeck on
              downwind and reaching passages. It adds quiet, low-heel assistance and extends range
              without a mast, sails or standing rigging — and while it pulls, both pods free-wheel
              as generators.
            </p>
            <h3 className="mt-8 text-lg font-semibold">Reinforced cleats and load paths as standard</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Kite loads are steady and long-duration, so they are engineered into the structure
              rather than carried by deck hardware alone. Every Halo leaves the yard with
              structurally backed foredeck cleats and kite load points: doubler plates welded into
              the aluminium deck, loads tied through to the underlying frames and bulkheads, and
              chafe-protected lead points sized for sustained flying. No retrofit, no owner-fitted
              padeyes, and no limit on extended kite use in suitable conditions.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              The foam-filled structural mini-keels give the tracking needed to hold a course under
              kite, and CAN-bus integration authorises full hydro-regeneration back into the 96 V
              bank while the kite is flying — see the regeneration curve above for realistic
              recovery at each speed.
            </p>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              The kite is an assistance system for suitable wind and sea states, used at the
              skipper&apos;s discretion. It is not a primary propulsion or safety system.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Virtual Anchor Mode"
        title="Hold position without dropping chain."
        className="border-t border-border"
      >
        <div className="mt-8 max-w-3xl space-y-5">
          <p className="text-base leading-relaxed text-muted-foreground">
            Electric dynamic positioning uses GPS and the twin pods to hold the yacht in place for a
            swim or lunch stop. There is no engine idling and no generator running — the stop is
            genuinely silent, and conversation carries across the cockpit.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Nothing is dragged across the seabed, so protected Posidonia seagrass meadows stay
            intact where anchoring would otherwise be restricted or damaging. In calm daylight the
            array typically out-produces the station-keeping and hotel draw, so the bank is level or
            rising by the time you get under way again.
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Intended for short stops in suitable conditions, at the skipper&apos;s discretion. It is
            not a replacement for ground tackle and not a safety system; the yacht carries
            offshore-grade anchoring equipment as standard.
          </p>
        </div>
      </Section>
    </SiteShell>
  );
}

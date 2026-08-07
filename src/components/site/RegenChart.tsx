import { REGEN_PROFILE } from "./data";

const W = 640;
const H = 280;
const PAD = { top: 24, right: 24, bottom: 44, left: 56 };

const MAX_KW = 1.25;
const MIN_KTS = 2.5;
const MAX_KTS = 7;

const x = (kts: number) =>
  PAD.left + ((kts - MIN_KTS) / (MAX_KTS - MIN_KTS)) * (W - PAD.left - PAD.right);
const y = (kw: number) => H - PAD.bottom - (kw / MAX_KW) * (H - PAD.top - PAD.bottom);

const line = (key: "perPod" | "twin") =>
  REGEN_PROFILE.map((p, i) => `${i ? "L" : "M"}${x(p.speed)},${y(p[key])}`).join(" ");

export function RegenChart() {
  return (
    <figure className="surface-panel mt-8 rounded-lg p-6">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        role="img"
        aria-label="Hydro-regeneration input against boat speed under kite power, for a single ePropulsion pod and for both pods combined."
      >
        {[0, 0.25, 0.5, 0.75, 1, 1.25].map((kw) => (
          <g key={kw}>
            <line
              x1={PAD.left}
              x2={W - PAD.right}
              y1={y(kw)}
              y2={y(kw)}
              stroke="currentColor"
              className="text-border"
              strokeWidth={1}
            />
            <text
              x={PAD.left - 10}
              y={y(kw) + 4}
              textAnchor="end"
              className="fill-muted-foreground text-[11px]"
            >
              {kw.toFixed(1)}
            </text>
          </g>
        ))}

        {REGEN_PROFILE.map((p) => (
          <text
            key={p.speed}
            x={x(p.speed)}
            y={H - PAD.bottom + 20}
            textAnchor="middle"
            className="fill-muted-foreground text-[11px]"
          >
            {p.speed.toFixed(1)} kts
          </text>
        ))}

        <text
          x={PAD.left - 10}
          y={PAD.top - 8}
          textAnchor="end"
          className="fill-muted-foreground text-[10px] uppercase tracking-[0.18em]"
        >
          kW
        </text>

        <line
          x1={x(6)}
          x2={x(6)}
          y1={PAD.top}
          y2={H - PAD.bottom}
          stroke="currentColor"
          className="text-accent opacity-50"
          strokeWidth={1.5}
          strokeDasharray="4 4"
        />
        <text
          x={x(6) + 6}
          y={PAD.top + 12}
          className="fill-accent text-[10px] uppercase tracking-[0.14em]"
        >
          ~6 kts threshold
        </text>

        <path d={line("perPod")} fill="none" stroke="currentColor" className="text-muted-foreground" strokeWidth={2} strokeDasharray="5 4" />
        <path d={line("twin")} fill="none" stroke="currentColor" className="text-accent" strokeWidth={2.5} />


        {REGEN_PROFILE.map((p) => (
          <g key={p.speed}>
            <circle cx={x(p.speed)} cy={y(p.perPod)} r={3.5} className="fill-muted-foreground" />
            <circle cx={x(p.speed)} cy={y(p.twin)} r={4} className="fill-accent" />
            <text
              x={x(p.speed)}
              y={y(p.twin) - 12}
              textAnchor="middle"
              className="fill-foreground text-[11px] font-medium"
            >
              {p.twin.toFixed(1)}
            </text>
          </g>
        ))}
      </svg>

      <figcaption className="mt-4 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="h-0.5 w-6 rounded bg-accent" aria-hidden />
          Twin pods (installed configuration)
        </span>
        <span className="flex items-center gap-2">
          <span
            className="h-0.5 w-6 rounded bg-muted-foreground opacity-70"
            aria-hidden
            style={{ backgroundImage: "repeating-linear-gradient(90deg,currentColor 0 4px,transparent 4px 8px)" }}
          />
          Single 20 kW pod
        </span>
      </figcaption>
    </figure>
  );
}

import type { ReactNode } from "react";
import { VARIANTS, type VariantId } from "@/components/site/data";

export function Choice({
  selected,
  onClick,
  title,
  subtitle,
  price,
  badge,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  subtitle?: string;
  price?: string;
  badge?: string;
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
      {badge && (
        <span className="mt-2 inline-block rounded-full border border-accent/40 px-2.5 py-0.5 text-[0.65rem] uppercase tracking-[0.14em] text-accent">
          {badge}
        </span>
      )}
      {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
    </button>
  );
}

export function VariantToggle({
  value,
  onChange,
}: {
  value: VariantId;
  onChange: (v: VariantId) => void;
}) {
  return (
    <div
      role="group"
      aria-label="Select platform variant"
      className="grid gap-2 rounded-xl border border-border bg-surface p-2 sm:grid-cols-2"
    >
      {VARIANTS.map((v) => {
        const active = v.id === value;
        return (
          <button
            key={v.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(v.id)}
            className={`rounded-lg px-5 py-4 text-left transition-colors ${
              active ? "bg-accent/15 ring-1 ring-accent" : "hover:bg-accent/5"
            }`}
          >
            <span
              className={`block text-sm font-semibold uppercase tracking-[0.18em] ${
                active ? "text-accent" : "text-foreground"
              }`}
            >
              {v.label}
            </span>
            <span className="mt-1 block text-sm text-muted-foreground">{v.audience}</span>
          </button>
        );
      })}
    </div>
  );
}

export function HighlightsCard({ variantId }: { variantId: VariantId }) {
  const variant = VARIANTS.find((v) => v.id === variantId)!;
  return (
    <div className="surface-panel rounded-lg p-7">
      <p className="eyebrow">Why this platform</p>
      <p className="mt-3 text-lg font-medium">{variant.subheadline}</p>
      <ul className="mt-5 space-y-3">
        {variant.highlights.map((h) => (
          <li key={h} className="flex gap-3 text-sm text-muted-foreground">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
            {h}
          </li>
        ))}
      </ul>
      <p className="mt-6 border-t border-border/60 pt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
        Included capability
      </p>
      <ul className="mt-3 space-y-2 text-sm">
        {variant.capability.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export function Step({
  index,
  title,
  description,
  children,
}: {
  index: number;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border pt-8 first:border-t-0 first:pt-0">
      <div className="flex items-start gap-4">
        <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-accent/50 text-sm font-semibold text-accent">
          {index}
        </span>
        <div className="min-w-0">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="mt-6 pl-0 sm:pl-12">{children}</div>
    </section>
  );
}

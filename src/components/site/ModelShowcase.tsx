import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MODELS, VARIANTS, type VariantId } from "@/components/site/data";
import { VariantToggle } from "@/components/site/configurator/parts";

export function ModelShowcase() {
  const [variantId, setVariantId] = useState<VariantId>("explorer");
  const variant = VARIANTS.find((v) => v.id === variantId)!;
  const model = MODELS.find((m) => m.code === variant.modelCode)!;

  return (
    <section id={model.id} className="scroll-mt-24 border-y border-border bg-navy-deep">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Superstructures</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">One platform, two personalities.</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Switch between the two superstructures to see how the same naval architecture is deployed.
          </p>
        </div>

        <div className="mt-8 max-w-2xl">
          <VariantToggle value={variantId} onChange={setVariantId} />
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          <img
            key={model.image}
            src={model.image}
            alt={`Halo ${model.code} — ${model.name}`}
            className="w-full rounded-lg object-cover"
            loading="lazy"
          />
          <div>
            <p className="eyebrow">
              {model.code} — {model.subtitle}
            </p>
            <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">{model.name}</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{model.summary}</p>
            <ul className="mt-7 space-y-3">
              {model.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
            <dl className="mt-7 grid gap-4 border-t border-border/60 pt-6 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Capacity</dt>
                <dd className="mt-1">{model.capacity}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Deployed weight
                </dt>
                <dd className="mt-1">{model.weight}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Tender &amp; toys
                </dt>
                <dd className="mt-1">{model.tender}</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm font-medium text-accent">{model.cruise}</p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
              <Link to="/models" className="text-accent hover:underline">
                Compare Explorer &amp; Coastal side by side →
              </Link>
              <Link
                to="/configure"
                search={{ variant: variantId }}
                className="text-accent hover:underline"
              >
                Configure the {variant.label} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

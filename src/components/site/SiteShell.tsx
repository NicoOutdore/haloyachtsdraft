import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl scroll-mt-24 px-5 py-16 lg:px-8 lg:py-24 ${className}`}>
      {(eyebrow || title || intro) && (
        <header className="max-w-3xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>}
          {intro && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>}
        </header>
      )}
      {children}
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="border-b border-border bg-navy-deep pt-28">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{intro}</p>
      </div>
    </div>
  );
}

export function SpecRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-border/70 py-3">
      <dt className="min-w-0 text-sm text-muted-foreground">{label}</dt>
      <dd className="text-right text-sm font-medium text-foreground">{value}</dd>
    </div>
  );
}

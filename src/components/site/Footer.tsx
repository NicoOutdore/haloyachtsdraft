import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy-deep">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Logo className="h-16" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            13.5 m solar-electric aluminium blue-water cruising catamarans. Naval architecture by
            Dixon Yacht Design, assembled by licensed regional partner yards.
          </p>
        </div>

        <nav aria-label="Yachts">
          <h2 className="eyebrow">Yachts</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/models" className="hover:text-foreground">Explorer vs Coastal comparison</Link></li>
            <li><Link to="/architecture" className="hover:text-foreground">Naval architecture</Link></li>
            <li><Link to="/architecture" hash="model-a" className="hover:text-foreground">Model A — Explorer Edition</Link></li>
            <li><Link to="/architecture" hash="model-b" className="hover:text-foreground">Model B — Coastal Edition</Link></li>
            <li><Link to="/equipment" className="hover:text-foreground">Equipment packs</Link></li>
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="eyebrow">Company</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/pricing" className="hover:text-foreground">Pricing & ownership</Link></li>
            <li><Link to="/configure" className="hover:text-foreground">Configure & reserve</Link></li>
            <li><Link to="/build-with-us" className="hover:text-foreground">Partner yard application</Link></li>
            <li><Link to="/faq" className="hover:text-foreground">FAQ — buying, safety & sustainability</Link></li>
          </ul>

        </nav>
      </div>

      <div className="border-t border-border/60 px-5 py-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground lg:px-8">
        © {new Date().getFullYear()} Halo Yachts — Infinite Range, Zero Noise
      </div>
    </footer>
  );
}

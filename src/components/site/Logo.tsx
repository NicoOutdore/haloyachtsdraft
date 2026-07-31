import { Link } from "@tanstack/react-router";
import logo from "@/assets/halo-logo.jpg.asset.json";

export function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Halo Yachts — infinite range, zero noise"
      className={`${className} w-auto mix-blend-screen contrast-125 invert`}
      loading="eager"
    />
  );
}

export function LogoLink({ className }: { className?: string }) {
  return (
    <Link to="/" aria-label="Halo Yachts home" className="shrink-0">
      <Logo className={className ?? "h-10"} />
    </Link>
  );
}

import { Link } from "@tanstack/react-router";
const logo = { url: "/images/halo-logo.jpg" };

/**
 * The source logo is a JPG on white. On the dark navy shell we invert +
 * hue-rotate (restores the navy hue) and screen out the now-black background.
 */
export function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Halo Yachts — infinite range, zero noise"
      className={`${className} w-auto invert hue-rotate-180 mix-blend-screen`}
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

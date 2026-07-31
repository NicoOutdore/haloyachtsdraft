import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { SiteShell, Section, PageHero } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const TITLE = "Partner Yard Application — Build With Us | Halo Yachts";
const DESCRIPTION =
  "Apply to join the Halo Yachts licensed build network. For premier aluminium fabrication yards with CNC welding capability, crane and slipway capacity and audited quality control.";

export const Route = createFileRoute("/build-with-us")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BuildWithUs,
});

const CRITERIA = [
  { title: "Aluminium fabrication", body: "Demonstrable marine-grade aluminium welding to 5083-H111 / Sealium, with certified welders and documented procedures." },
  { title: "CNC & assembly capacity", body: "Capability to assemble precision CNC-cut kits under cover, with jigging space for a 13.5 × 6.6 m multihull." },
  { title: "Crane & slipway", body: "In-house or contracted lifting and launching capacity appropriate to a ~5-tonne lightship catamaran." },
  { title: "Quality control", body: "Documented QC infrastructure, inspection records and willingness to host independent marine surveyor sign-offs." },
];

function Field({ id, label, ...rest }: { id: string; label: string } & React.ComponentProps<typeof Input>) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={id} className="mt-2" {...rest} />
    </div>
  );
}

function BuildWithUs() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success("Application submitted", {
      description: "Our production team will review your accreditations and respond shortly.",
    });
    e.currentTarget.reset();
  }

  return (
    <SiteShell>
      <PageHero
        eyebrow="Build with us"
        title="Join the Halo licensed build network."
        intro="We pair world-class naval architecture with premier regional aluminium yards. If your workshop meets the standard, we supply the kit, systems and specification — you build locally."
      />

      <Section eyebrow="Requirements" title="What we look for in a partner yard">
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {CRITERIA.map((c) => (
            <article key={c.title} className="surface-panel rounded-lg p-8">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Application" title="Yard application" className="border-t border-border">
        <form onSubmit={handleSubmit} className="surface-panel mt-10 grid max-w-3xl gap-5 rounded-lg p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="yard" label="Yard name" required />
            <Field id="country" label="Country / region" required />
            <Field id="contact" label="Contact name" required autoComplete="name" />
            <Field id="email" label="Email" type="email" required autoComplete="email" />
            <Field id="phone" label="Phone" autoComplete="tel" />
            <Field id="website" label="Website" type="url" placeholder="https://" />
          </div>

          <div>
            <Label htmlFor="accreditations">Workshop accreditations & certifications</Label>
            <Textarea id="accreditations" name="accreditations" rows={3} className="mt-2" placeholder="ISO 9001, welder qualifications (e.g. EN ISO 9606-2), CE/RCD experience" />
          </div>
          <div>
            <Label htmlFor="welding">CNC & aluminium welding capability</Label>
            <Textarea id="welding" name="welding" rows={3} className="mt-2" placeholder="Machines, sheet capacity, number of certified welders, annual aluminium tonnage" />
          </div>
          <div>
            <Label htmlFor="capacity">Crane, slipway & covered build capacity</Label>
            <Textarea id="capacity" name="capacity" rows={3} className="mt-2" placeholder="Lifting capacity, launch access, covered floor area and available build bays" />
          </div>
          <div>
            <Label htmlFor="qc">Quality control infrastructure</Label>
            <Textarea id="qc" name="qc" rows={3} className="mt-2" placeholder="Inspection processes, documentation, NDT, surveyor access" />
          </div>

          <Button type="submit" size="lg" className="justify-self-start">Submit application</Button>
        </form>
      </Section>
    </SiteShell>
  );
}

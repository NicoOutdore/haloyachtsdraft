import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { SiteShell, Section, PageHero } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PhoneFields, PHONE_PATTERN, EMAIL_PATTERN } from "@/components/site/PhoneFields";
import { submitYardApplication } from "@/lib/submissions.functions";

const TITLE = "Partner Yard Programme — Build With Us | Halo Yachts";
const DESCRIPTION =
  "How a Halo build runs: 2,410 labour hours over 24 weeks, central Tier-1 partnerships, regional CNC-cut aluminium and interior kits, local outfitting under the Halo Quality & Conformity Gate, weekly surveyor inspection, milestone sign-off and CE Category A certification.";

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

const FRAMEWORK = [
  {
    step: "01 — Central engineering",
    title: "Master DXF nesting files from Halo",
    body: "Every hull, bulkhead and structural component is defined by Dixon Yacht Design and issued by Halo as numbered master DXF nesting files. Certified local CNC facilities cut the 5083-H111/Sealium plate directly to these files, eliminating lofting, interpretation or shipping heavy aluminium across oceans.",
  },
  {
    step: "02 — Local fabrication",
    title: "Your yard welds, sources and fits out",
    body: "The partner yard welds and fairs to the Halo specification, sources locally approved aluminium and composite interior flat-packs against Halo files, and fits out using local labour. Halo engineering supervision and staged inspection ensure every local item meets the master standard.",
  },
  {
    step: "03 — Regional delivery",
    title: "Built near the owner",
    body: "Boats are built in the region they will be sailed — New Zealand, Australia, Germany, Italy — cutting freight, import duty and delivery miles while keeping the specification identical worldwide.",
  },
];

const CADENCE = [
  { label: "Total labour budget", value: "2,410 hours" },
  { label: "Scheduled window", value: "24 weeks" },
  { label: "Programme start", value: "Keel laying" },
  { label: "Programme end", value: "Sea trials & handover" },
];

const MILESTONES = [
  { week: "Weeks 1 – 4", body: "Kit receipt and verification, jig set-up, keel laying, hull panel tacking. Stage 1 sign-off on structural alignment." },
  { week: "Weeks 5 – 10", body: "Full hull and bridge-deck welding, bulkheads, mini-keels, fairing and weld inspection records." },
  { week: "Weeks 11 – 16", body: "Deck and superstructure close-out, tank integration, cabling runs, 96 V drivetrain and 24 V domestic architecture installed." },
  { week: "Weeks 17 – 21", body: "Solar array on rails, interior fit-out to the curated palette, systems commissioning and factory acceptance tests." },
  { week: "Weeks 22 – 24", body: "CE Category A documentation pack completed, sea trials, snagging and owner handover." },
];

const SOURCING = [
  {
    title: "Centralized Master Partnerships (Halo Tier-1 Tech)",
    body: "Halo holds central OEM supply agreements with Tier-1 marine technology partners — including ePropulsion for electric powertrains, Maxeon for ultra-high-efficiency solar architecture, and Victron Energy for power electronics. These master partnerships guarantee volume pricing, pre-engineered plug-and-play compatibility, and global single-point warranty backing for every build. The yard never sources or marks up Tier-1 drivetrain, energy storage, power electronics or solar systems.",
  },
  {
    title: "Regional Sourcing & Local CNC Cutting",
    body: "Aluminium hull kits use raw 5083-H111 marine-grade plate router/laser-cut at certified local CNC facilities using Halo’s master DXF nesting files, provided mill certificates and ±0.2 mm tolerances are approved. Composite interior furniture flat-packs are CNC-routed locally to Halo digital files using approved PET foam or honeycomb-core suppliers. Saloon glazing, marine doors, portholes and galley/heads fixtures may be sourced locally to minimise freight and import duties. Where local sourcing is not practical or certified, Halo supplies the kit centrally.",
  },
  {
    title: "The Halo Quality & Conformity Gate",
    body: "All locally sourced materials, glass and fixtures are subject to explicit pre-approval by Halo’s engineering team before installation. This mandatory QA gate guarantees 100% conformity to Halo aesthetic standards, weight targets and CE Category A (Ocean) structural safety requirements. No locally sourced item enters the build without a Halo pre-approval record.",
  },
];

const RESPONSIBILITY = [
  { item: "Naval architecture, structural CAD & DXF nesting files", halo: "Owns & issues", yard: "Executes to file", client: "—" },
  { item: "5083-H111 aluminium plate & local CNC cutting", halo: "Specifies & approves mill certs", yard: "Sources locally & cuts to DXF", client: "—" },
  { item: "Composite interior flat-packs", halo: "Issues files & approves supplier", yard: "Sources locally & routes", client: "—" },
  { item: "Tier-1 drivetrain, batteries, solar, power electronics", halo: "Sources centrally & warrants", yard: "Receives & installs", client: "—" },
  { item: "Local outfitting items (glazing, doors, fixtures)", halo: "Pre-approves spec", yard: "Sources locally", client: "Nominates within approved range" },
  { item: "Curated options (furnishings, laminates, electronics packs)", halo: "Contracts & free-issues", yard: "Receives & installs", client: "Selects from curated range" },
  { item: "Interior palette selection", halo: "Curates options", yard: "Builds to selection", client: "Selects" },
  { item: "Weekly inspection & milestone sign-off", halo: "Performs", yard: "Hosts & documents", client: "Receives report" },
  { item: "CE Category A certification file", halo: "Owns & submits", yard: "Provides build records", client: "—" },
  { item: "Stage payment release from escrow", halo: "Authorises", yard: "Invoices on certificate", client: "Funds escrow" },
];

const OVERSIGHT = [
  {
    title: "Weekly on-site inspection",
    body: "A dedicated Halo representative or appointed marine surveyor attends the yard weekly, reviews work against the stage checklist and records progress with dated photography and video.",
  },
  {
    title: "Milestone sign-off gates payment",
    body: "No stage payment leaves escrow until the surveyor issues a formal Stage Completion Certificate for that milestone. Non-conforming work is remediated before the gate opens.",
  },
  {
    title: "Documented traceability",
    body: "Welder qualifications, material certificates, weld inspection records and commissioning tests are logged into the build file as work proceeds — not reconstructed at the end.",
  },
  {
    title: "CE Category A (Ocean) certification",
    body: "Halo owns the certification file and notified-body liaison. The yard supplies build records, hosts inspections and holds to the approved structural and systems definition without deviation.",
  },
];

const REGIONAL_OPTIONS = [
  {
    label: "Option A",
    title: "Complete build in Holland / UK",
    body: "The vessel is built, commissioned and sea-trialled at a core northern European yard, then shipped or delivered on her own bottom to the owner's home port.",
  },
  {
    label: "Option B",
    title: "Local kit-cut and regional assembly",
    body: "Precision CNC aluminium kit files are cut at a certified regional metalwork partner near the client's home port and assembled locally under the same supervision regime, cutting freight and import cost.",
  },
];

const CRITERIA = [

  { title: "Aluminium fabrication", body: "Demonstrable marine-grade aluminium welding to 5083-H111 / Sealium, with certified welders and documented procedures." },
  { title: "CNC & assembly capacity", body: "Capability to assemble precision CNC-cut kits under cover, with jigging space for a 13.5 × 6.6 m multihull." },
  { title: "Crane & slipway", body: "In-house or contracted lifting and launching capacity appropriate to a ~5-tonne lightship catamaran." },
  { title: "Quality control", body: "Documented QC infrastructure, inspection records and willingness to host independent marine surveyor sign-offs." },
];

function Field({
  id,
  label,
  value,
  onChange,
  error,
  ...rest
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string | undefined;
} & Omit<React.ComponentProps<typeof Input>, "value" | "onChange">) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        className="mt-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        {...rest}
      />
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
    </div>
  );
}

function AreaField({
  id,
  label,
  placeholder,
  value,
  onChange,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Textarea
        id={id}
        name={id}
        rows={3}
        maxLength={2000}
        className="mt-2"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function BuildWithUs() {
  const [yard, setYard] = useState("");
  const [country, setCountry] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [dialCode, setDialCode] = useState("+44");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [accreditations, setAccreditations] = useState("");
  const [welding, setWelding] = useState("");
  const [capacity, setCapacity] = useState("");
  const [qc, setQc] = useState("");
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});
  const [submitting, setSubmitting] = useState(false);

  const send = useServerFn(submitYardApplication);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextErrors: { email?: string; phone?: string } = {};
    if (!EMAIL_PATTERN.test(email.trim())) nextErrors.email = "Enter a valid email address";
    if (phone.trim() && !PHONE_PATTERN.test(phone.trim()))
      nextErrors.phone = "Enter a valid phone number (digits, spaces or dashes)";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      await send({
        data: {
          yard: yard.trim(),
          country: country.trim(),
          contact: contact.trim(),
          email: email.trim(),
          dialCode: phone.trim() ? dialCode : "",
          phone: phone.trim(),
          website: website.trim(),
          accreditations: accreditations.trim(),
          welding: welding.trim(),
          capacity: capacity.trim(),
          qc: qc.trim(),
        },
      });
      toast.success("Application submitted", {
        description: "Our production team will review your accreditations and respond shortly.",
      });
      setYard("");
      setCountry("");
      setContact("");
      setEmail("");
      setPhone("");
      setWebsite("");
      setAccreditations("");
      setWelding("");
      setCapacity("");
      setQc("");
    } catch {
      toast.error("We could not submit your application", {
        description: "Please try again in a moment.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <SiteShell>
      <PageHero
        eyebrow="Build with us"
        title="Join the Halo licensed build network."
        intro="Halo supplies the naval architecture, CNC kit, drivetrain and specification. Your yard supplies the fabrication. This page sets out how the programme is run, who is responsible for what, and how work is inspected and signed off."
      />

      <Section eyebrow="Framework" title="Precision CNC kit-set, local fabrication">
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {FRAMEWORK.map((f) => (
            <article key={f.title} className="surface-panel rounded-lg p-8">
              <p className="eyebrow">{f.step}</p>
              <h3 className="mt-3 text-lg font-semibold">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Major systems are specified to standards partner yards can source locally — including
          Maxeon all-black rigid glass solar modules in standard ISO/IEC structural dimensions,
          rail-mounted with airflow beneath, avoiding international freight markups on bulky items.
        </p>
      </Section>

      <Section
        eyebrow="Production cadence"
        title="2,410 labour hours across a 24-week window"
        intro="Every build slot is booked against the same programme, from keel laying to handover. Yards quote and schedule against these hours, and the milestone gates below govern inspection and payment."
        className="border-t border-border"
      >
        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CADENCE.map((c) => (
            <div key={c.label} className="surface-panel rounded-lg p-6">
              <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{c.label}</dt>
              <dd className="mt-2 text-xl font-semibold text-accent">{c.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 max-w-4xl divide-y divide-border/60">
          {MILESTONES.map((m) => (
            <div key={m.week} className="grid gap-2 py-6 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-10">
              <p className="eyebrow pt-1">{m.week}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{m.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Supply & sourcing"
        title="Who buys, ships, insures and warrants"
        className="border-t border-border"
      >
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SOURCING.map((s) => (
            <article key={s.title} className="surface-panel rounded-lg p-8">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>

        <h3 className="mt-14 text-xl font-semibold">Responsibility matrix</h3>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[44rem] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <th className="py-3 pr-4 font-medium">Scope</th>
                <th className="py-3 pr-4 font-medium">Halo</th>
                <th className="py-3 pr-4 font-medium">Partner yard</th>
                <th className="py-3 font-medium">Client</th>
              </tr>
            </thead>
            <tbody>
              {RESPONSIBILITY.map((r) => (
                <tr key={r.item} className="border-b border-border/60">
                  <td className="py-4 pr-4 font-medium">{r.item}</td>
                  <td className="py-4 pr-4 text-muted-foreground">{r.halo}</td>
                  <td className="py-4 pr-4 text-muted-foreground">{r.yard}</td>
                  <td className="py-4 text-muted-foreground">{r.client}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        eyebrow="Regional fabrication"
        title="Two routes to a finished yacht"
        className="border-t border-border"
      >
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {REGIONAL_OPTIONS.map((o) => (
            <article key={o.label} className="surface-panel rounded-lg p-8">
              <p className="eyebrow">{o.label}</p>
              <h3 className="mt-3 text-lg font-semibold">{o.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Oversight & approval"
        title="Inspected weekly, signed off by stage"
        className="border-t border-border"
      >
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {OVERSIGHT.map((o) => (
            <article key={o.title} className="surface-panel rounded-lg p-8">
              <h3 className="text-lg font-semibold">{o.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Requirements" title="What we look for in a partner yard" className="border-t border-border">
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
            <Field id="yard" label="Yard name" required maxLength={150} value={yard} onChange={setYard} />
            <Field id="country" label="Country / region" required maxLength={100} value={country} onChange={setCountry} />
            <Field id="contact" label="Contact name" required maxLength={100} autoComplete="name" value={contact} onChange={setContact} />
            <Field
              id="email"
              label="Email"
              type="email"
              required
              maxLength={255}
              autoComplete="email"
              value={email}
              onChange={setEmail}
              error={errors.email}
            />
            <PhoneFields
              dialCode={dialCode}
              onDialCodeChange={setDialCode}
              phone={phone}
              onPhoneChange={setPhone}
              error={errors.phone}
            />
            <Field id="website" label="Website" type="url" maxLength={255} placeholder="https://" value={website} onChange={setWebsite} />
          </div>

          <AreaField
            id="accreditations"
            label="Workshop accreditations & certifications"
            placeholder="ISO 9001, welder qualifications (e.g. EN ISO 9606-2), CE/RCD experience"
            value={accreditations}
            onChange={setAccreditations}
          />
          <AreaField
            id="welding"
            label="CNC & aluminium welding capability"
            placeholder="Machines, sheet capacity, number of certified welders, annual aluminium tonnage"
            value={welding}
            onChange={setWelding}
          />
          <AreaField
            id="capacity"
            label="Crane, slipway & covered build capacity"
            placeholder="Lifting capacity, launch access, covered floor area and available build bays"
            value={capacity}
            onChange={setCapacity}
          />
          <AreaField
            id="qc"
            label="Quality control infrastructure"
            placeholder="Inspection processes, documentation, NDT, surveyor access"
            value={qc}
            onChange={setQc}
          />

          <Button type="submit" size="lg" className="justify-self-start" disabled={submitting}>
            {submitting ? "Submitting…" : "Submit application"}
          </Button>
        </form>
      </Section>
    </SiteShell>
  );
}

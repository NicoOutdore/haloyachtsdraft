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
        intro="We pair world-class naval architecture with premier regional aluminium yards. If your workshop meets the standard, we supply the kit, systems and specification — you build locally."
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

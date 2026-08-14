import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PhoneFields, PHONE_PATTERN, EMAIL_PATTERN } from "@/components/site/PhoneFields";
import { submitConfiguration } from "@/lib/submissions.functions";
import { OPERATING_REGIONS, DELIVERY_WINDOWS } from "@/components/site/data";

export type EnquiryPayload = {
  model: string;
  cabins: string;
  packs: string;
  location: string;
  acquisition: string;
  total: number;
  specSummary: string;
};

export function EnquiryDialog({
  open,
  onOpenChange,
  payload,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  payload: EnquiryPayload;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dialCode, setDialCode] = useState("+44");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState(OPERATING_REGIONS[0]);
  const [window, setWindow] = useState(DELIVERY_WINDOWS[0]);
  const [notes, setNotes] = useState("");
  const [touchedNotes, setTouchedNotes] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});
  const [submitting, setSubmitting] = useState(false);

  const send = useServerFn(submitConfiguration);
  const notesValue = touchedNotes ? notes : payload.specSummary;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors: { email?: string; phone?: string } = {};
    if (!EMAIL_PATTERN.test(email.trim())) nextErrors.email = "Enter a valid email address";
    if (phone.trim() && !PHONE_PATTERN.test(phone.trim()))
      nextErrors.phone = "Enter a valid phone number (digits, spaces or dashes)";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const composedNotes = [
      `Operating region: ${region}`,
      `Target delivery window: ${window}`,
      notesValue.trim(),
    ]
      .filter(Boolean)
      .join("\n")
      .slice(0, 1000);

    setSubmitting(true);
    try {
      await send({
        data: {
          name: name.trim(),
          email: email.trim(),
          dialCode: phone.trim() ? dialCode : "",
          phone: phone.trim(),
          model: payload.model,
          cabins: payload.cabins,
          packs: payload.packs,
          location: payload.location,
          acquisition: payload.acquisition,
          timeline: window,
          total: payload.total,
          notes: composedNotes,
        },
      });
      toast.success("Reservation enquiry received", {
        description: "Our team will contact you within two business days with a build slot proposal.",
      });
      setName("");
      setEmail("");
      setPhone("");
      setNotes("");
      setTouchedNotes(false);
      onOpenChange(false);
    } catch {
      toast.error("We could not submit your enquiry", {
        description: "Please try again in a moment or email us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Reserve a build slot</DialogTitle>
          <DialogDescription>
            Enquiry only — no payment is taken. We reply by email; a phone number is optional and used
            only if you ask us to use it.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="enq-name">Full name</Label>
            <Input
              id="enq-name"
              required
              maxLength={100}
              className="mt-2"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="enq-email">Email</Label>
            <Input
              id="enq-email"
              type="email"
              required
              maxLength={255}
              className="mt-2"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <p className="mt-2 text-sm text-destructive">{errors.email}</p>}
          </div>
          <PhoneFields
            dialCode={dialCode}
            onDialCodeChange={setDialCode}
            phone={phone}
            onPhoneChange={setPhone}
            error={errors.phone}
            idPrefix="enq-"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="enq-region">Operating region</Label>
              <Select value={region} onValueChange={setRegion}>
                <SelectTrigger id="enq-region" className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {OPERATING_REGIONS.map((r) => (
                    <SelectItem key={r} value={r}>
                      {r}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="enq-window">Target delivery window</Label>
              <Select value={window} onValueChange={setWindow}>
                <SelectTrigger id="enq-window" className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {DELIVERY_WINDOWS.map((w) => (
                    <SelectItem key={w} value={w}>
                      {w}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="enq-notes">Notes — your configured specification</Label>
            <Textarea
              id="enq-notes"
              rows={7}
              maxLength={1000}
              className="mt-2"
              value={notesValue}
              onChange={(e) => {
                setTouchedNotes(true);
                setNotes(e.target.value);
              }}
            />
          </div>
          <Button type="submit" size="lg" className="w-full" disabled={submitting}>
            {submitting ? "Submitting…" : "Send enquiry"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

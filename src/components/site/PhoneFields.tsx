import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const DIAL_CODES = [
  { code: "+44", label: "United Kingdom (+44)" },
  { code: "+353", label: "Ireland (+353)" },
  { code: "+33", label: "France (+33)" },
  { code: "+49", label: "Germany (+49)" },
  { code: "+39", label: "Italy (+39)" },
  { code: "+34", label: "Spain (+34)" },
  { code: "+351", label: "Portugal (+351)" },
  { code: "+31", label: "Netherlands (+31)" },
  { code: "+30", label: "Greece (+30)" },
  { code: "+356", label: "Malta (+356)" },
  { code: "+41", label: "Switzerland (+41)" },
  { code: "+47", label: "Norway (+47)" },
  { code: "+46", label: "Sweden (+46)" },
  { code: "+45", label: "Denmark (+45)" },
  { code: "+1", label: "USA / Canada (+1)" },
  { code: "+61", label: "Australia (+61)" },
  { code: "+64", label: "New Zealand (+64)" },
  { code: "+971", label: "UAE (+971)" },
  { code: "+27", label: "South Africa (+27)" },
  { code: "+65", label: "Singapore (+65)" },
];

export const PHONE_PATTERN = /^[0-9\s-]{6,20}$/;
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

export function PhoneFields({
  dialCode,
  onDialCodeChange,
  phone,
  onPhoneChange,
  error,
  idPrefix = "",
}: {
  dialCode: string;
  onDialCodeChange: (v: string) => void;
  phone: string;
  onPhoneChange: (v: string) => void;
  error?: string | undefined;
  idPrefix?: string;
}) {
  const phoneId = `${idPrefix}phone`;
  return (
    <div>
      <Label htmlFor={phoneId}>Phone</Label>
      <div className="mt-2 grid grid-cols-[9.5rem_minmax(0,1fr)] gap-3">
        <Select value={dialCode} onValueChange={onDialCodeChange}>
          <SelectTrigger aria-label="Country code">
            <SelectValue placeholder="Code" />
          </SelectTrigger>
          <SelectContent>
            {DIAL_CODES.map((c) => (
              <SelectItem key={c.code + c.label} value={c.code}>
                {c.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          id={phoneId}
          name={phoneId}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          maxLength={20}
          placeholder="7700 900123"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          aria-invalid={Boolean(error)}
        />
      </div>
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
    </div>
  );
}

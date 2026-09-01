import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const phone = z
  .string()
  .trim()
  .max(20)
  .regex(/^[0-9\s-]{6,20}$/, { message: "Enter a valid phone number" });

const dialCode = z
  .string()
  .trim()
  .regex(/^\+\d{1,4}$/, { message: "Select a valid country code" });

const configuratorSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  dialCode: dialCode.or(z.literal("")),
  phone: phone.or(z.literal("")),
  model: z.string().max(200),
  cabins: z.string().max(50),
  packs: z.string().max(500),
  location: z.string().max(100),
  acquisition: z.string().max(100),
  timeline: z.string().max(100),
  total: z.number(),
  notes: z.string().trim().max(1000),
});

const botFields = {
  hp: z.string().max(200).optional(),
  elapsed: z.number().optional(),
};

// Commodity form spam fills every field it can see and submits instantly.
function looksAutomated(data: { hp?: string | undefined; elapsed?: number | undefined }) {
  if (data.hp && data.hp.trim() !== "") return true;
  if (typeof data.elapsed === "number" && data.elapsed < 2000) return true;
  return false;
}

const yardSchema = z.object({
  yard: z.string().trim().min(1).max(150),
  country: z.string().trim().min(1).max(100),
  contact: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  dialCode: dialCode.or(z.literal("")),
  phone: phone.or(z.literal("")),
  website: z.string().trim().max(255),
  accreditations: z.string().trim().max(2000),
  welding: z.string().trim().max(2000),
  capacity: z.string().trim().max(2000),
  qc: z.string().trim().max(2000),
  ...botFields,
});

export const submitConfiguration = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => configuratorSchema.parse(data))
  .handler(async ({ data }) => {
    const { appendRow } = await import("./sheets.server");
    await appendRow("Configurator", [
      new Date().toISOString(),
      data.name,
      data.email,
      data.dialCode,
      data.phone,
      data.model,
      data.cabins,
      data.packs,
      data.location,
      data.acquisition,
      data.timeline,
      data.total,
      data.notes,
    ]);
    return { ok: true };
  });

const yardInterestSchema = z.object({
  yard: z.string().trim().min(1).max(150),
  country: z.string().trim().min(1).max(100),
  contact: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  ...botFields,
});

export const submitYardInterest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => yardInterestSchema.parse(data))
  .handler(async ({ data }) => {
    if (looksAutomated(data)) return { ok: true };
    const { appendRow } = await import("./sheets.server");
    await appendRow("Yard Interest", [
      new Date().toISOString(),
      data.yard,
      data.country,
      data.contact,
      data.email,
      "New",
    ]);
    return { ok: true };
  });

export const submitYardApplication = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => yardSchema.parse(data))
  .handler(async ({ data }) => {
    if (looksAutomated(data)) return { ok: true };
    const { appendRow } = await import("./sheets.server");
    await appendRow("Yard Applications", [
      new Date().toISOString(),
      data.yard,
      data.country,
      data.contact,
      data.email,
      data.dialCode,
      data.phone,
      data.website,
      data.accreditations,
      data.welding,
      data.capacity,
      data.qc,
    ]);
    return { ok: true };
  });

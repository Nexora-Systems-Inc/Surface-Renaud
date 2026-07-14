import { NextResponse } from "next/server";
import {
  submitCareerApplication,
  validateCareerApplicationInput,
} from "@/lib/careers/careersService";
import {
  EXPERIENCE_OPTIONS,
  TRADE_OPTIONS,
} from "@/lib/careers/constants";
import type {
  CareerApplicationInput,
  ExperienceOption,
  TradeOption,
} from "@/lib/careers/types";

export const runtime = "nodejs";

function asOptionalString(value: FormDataEntryValue | null): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function parseTrade(value: FormDataEntryValue | null): TradeOption | null {
  if (typeof value !== "string") return null;
  return (TRADE_OPTIONS as readonly string[]).includes(value)
    ? (value as TradeOption)
    : null;
}

function parseExperience(
  value: FormDataEntryValue | null,
): ExperienceOption | null {
  if (typeof value !== "string") return null;
  return (EXPERIENCE_OPTIONS as readonly string[]).includes(value)
    ? (value as ExperienceOption)
    : null;
}

/**
 * POST /api/careers/apply
 *
 * Accepts multipart form data for a career application + optional résumé.
 * Delegates persistence to `lib/careers/careersService` so storage and
 * database wiring can be swapped in later without touching the UI.
 */
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const trade = parseTrade(formData.get("trade"));
    const experience = parseExperience(formData.get("experience"));

    if (!trade || !experience) {
      return NextResponse.json(
        { error: "Please select a valid trade and years of experience." },
        { status: 400 },
      );
    }

    const resumeEntry = formData.get("resume");
    const resume =
      resumeEntry instanceof File && resumeEntry.size > 0 ? resumeEntry : null;

    const input: CareerApplicationInput = {
      fullName: asOptionalString(formData.get("fullName")) ?? "",
      email: asOptionalString(formData.get("email")) ?? "",
      phone: asOptionalString(formData.get("phone")),
      city: asOptionalString(formData.get("city")),
      trade,
      experience,
      message: asOptionalString(formData.get("message")),
      resume,
    };

    const validationError = validateCareerApplicationInput(input);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const result = await submitCareerApplication(input);

    return NextResponse.json({
      confirmationRef: result.confirmationRef,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to submit your application. Please try again.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

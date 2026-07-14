import type { ExperienceOption, TradeOption } from "./types";

export const TRADE_OPTIONS: readonly TradeOption[] = [
  "Tile Setter",
  "Apprentice",
  "Labourer",
  "General Renovations",
  "Project Manager",
  "Other",
] as const;

export const EXPERIENCE_OPTIONS: readonly ExperienceOption[] = [
  "Less than 1 year",
  "1–3 years",
  "3–5 years",
  "5–10 years",
  "10+ years",
] as const;

export const ACCEPTED_RESUME_EXTENSIONS = [".pdf", ".doc", ".docx"] as const;
export const ACCEPTED_RESUME_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
] as const;

/** Maximum résumé file size in bytes (10 MB). */
export const MAX_RESUME_SIZE_BYTES = 10 * 1024 * 1024;

export const ACCEPTED_RESUME_ACCEPT_ATTR =
  ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

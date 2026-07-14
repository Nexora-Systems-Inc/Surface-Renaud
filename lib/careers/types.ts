export type TradeOption =
  | "Tile Setter"
  | "Apprentice"
  | "Labourer"
  | "General Renovations"
  | "Project Manager"
  | "Other";

export type ExperienceOption =
  | "Less than 1 year"
  | "1–3 years"
  | "3–5 years"
  | "5–10 years"
  | "10+ years";

/** Normalized application details used for PDF generation and email content. */
export type CareerApplication = {
  fullName: string;
  email: string;
  phone: string | null;
  city: string | null;
  trade: TradeOption;
  experience: ExperienceOption;
  message: string | null;
  resumeFileName: string | null;
  submittedAt: string;
  referenceId: string;
};

export type CareerApplicationInput = {
  fullName: string;
  email: string;
  phone?: string;
  city?: string;
  trade: TradeOption;
  experience: ExperienceOption;
  message?: string;
  resume: File | null;
};

export type CareerApplicationResult = {
  referenceId: string;
};

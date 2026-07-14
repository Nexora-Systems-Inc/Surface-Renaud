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

/** Fields stored on the application record (excluding the résumé binary). */
export type CareerApplicationRecord = {
  fullName: string;
  email: string;
  phone: string | null;
  city: string | null;
  trade: TradeOption;
  experience: ExperienceOption;
  message: string | null;
  /** Reference to the uploaded résumé object in storage. */
  resumeFileId: string | null;
  resumeFileName: string | null;
  submittedAt: string;
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

export type UploadedResume = {
  fileId: string;
  fileName: string;
  mimeType: string;
  sizeBytes: number;
};

export type CareerApplicationResult = {
  confirmationRef: string;
  application: CareerApplicationRecord;
};

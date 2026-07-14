import { validateCareerApplicationInput, validateResumeFile } from "./validation";
import type {
  CareerApplicationInput,
  CareerApplicationRecord,
  CareerApplicationResult,
  UploadedResume,
} from "./types";

export { validateCareerApplicationInput, validateResumeFile } from "./validation";

/**
 * Uploads a résumé file to object storage.
 *
 * TODO: Connect to Supabase Storage (or equivalent). Store the file under a
 * dedicated careers/resumes bucket and return a durable file identifier.
 */
export async function uploadResume(file: File): Promise<UploadedResume> {
  const validationError = validateResumeFile(file);
  if (validationError) {
    throw new Error(validationError);
  }

  // TODO: Replace placeholder with real storage upload.
  // Example flow:
  //   1. Generate a unique storage key (e.g. careers/resumes/{uuid}-{fileName})
  //   2. Upload `file` to Supabase Storage
  //   3. Return { fileId, fileName, mimeType, sizeBytes }
  void file;

  return {
    fileId: `pending-resume-${crypto.randomUUID()}`,
    fileName: file.name,
    mimeType: file.type || "application/octet-stream",
    sizeBytes: file.size,
  };
}

/**
 * Persists a career application record.
 *
 * TODO: Insert into a careers_applications table (Supabase or other). The
 * record should reference the uploaded résumé via `resumeFileId` so the
 * binary is stored separately from the application data.
 */
export async function createApplicationRecord(
  record: Omit<CareerApplicationRecord, "submittedAt"> & {
    submittedAt?: string;
  },
): Promise<CareerApplicationRecord> {
  // TODO: Replace placeholder with database insert.
  // Example columns: id, full_name, email, phone, city, trade, experience,
  // message, resume_file_id, resume_file_name, created_at
  const application: CareerApplicationRecord = {
    ...record,
    submittedAt: record.submittedAt ?? new Date().toISOString(),
  };

  return application;
}

/**
 * Submits a career application end-to-end:
 *   1. Validate input
 *   2. Upload résumé (if provided) → obtain file reference
 *   3. Create application record referencing that résumé
 *
 * The UI should call this (via the API route) and never talk to storage or
 * the database directly.
 */
export async function submitCareerApplication(
  input: CareerApplicationInput,
): Promise<CareerApplicationResult> {
  const validationError = validateCareerApplicationInput(input);
  if (validationError) {
    throw new Error(validationError);
  }

  let resume: UploadedResume | null = null;
  if (input.resume) {
    resume = await uploadResume(input.resume);
  }

  const application = await createApplicationRecord({
    fullName: input.fullName.trim(),
    email: input.email.trim().toLowerCase(),
    phone: input.phone?.trim() || null,
    city: input.city?.trim() || null,
    trade: input.trade,
    experience: input.experience,
    message: input.message?.trim() || null,
    resumeFileId: resume?.fileId ?? null,
    resumeFileName: resume?.fileName ?? null,
  });

  // TODO: Replace placeholder confirmation ref with the durable application ID
  // returned by the database once Supabase (or another backend) is connected.
  const confirmationRef = `SR-CA-${Date.now().toString(36).toUpperCase()}`;

  return {
    confirmationRef,
    application,
  };
}

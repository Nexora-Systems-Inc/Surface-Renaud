import {
  ACCEPTED_RESUME_EXTENSIONS,
  ACCEPTED_RESUME_MIME_TYPES,
  EXPERIENCE_OPTIONS,
  MAX_RESUME_SIZE_BYTES,
  TRADE_OPTIONS,
} from "./constants";
import type {
  CareerApplicationInput,
  ExperienceOption,
  TradeOption,
} from "./types";

export function isTradeOption(value: string): value is TradeOption {
  return (TRADE_OPTIONS as readonly string[]).includes(value);
}

export function isExperienceOption(value: string): value is ExperienceOption {
  return (EXPERIENCE_OPTIONS as readonly string[]).includes(value);
}

function getFileExtension(fileName: string): string {
  const index = fileName.lastIndexOf(".");
  return index >= 0 ? fileName.slice(index).toLowerCase() : "";
}

export function validateResumeFile(file: File): string | null {
  const extension = getFileExtension(file.name);
  const hasValidExtension = (
    ACCEPTED_RESUME_EXTENSIONS as readonly string[]
  ).includes(extension);

  // Extension is the primary check — some browsers report unreliable MIME
  // types (empty or application/octet-stream) for .doc/.docx files.
  if (!hasValidExtension) {
    return "Please upload a PDF, DOC, or DOCX file.";
  }

  if (
    file.type &&
    file.type !== "application/octet-stream" &&
    !(ACCEPTED_RESUME_MIME_TYPES as readonly string[]).includes(file.type)
  ) {
    return "Please upload a PDF, DOC, or DOCX file.";
  }

  if (file.size > MAX_RESUME_SIZE_BYTES) {
    return "Résumé must be 10 MB or smaller.";
  }

  return null;
}

export function validateCareerApplicationInput(
  input: CareerApplicationInput,
): string | null {
  if (!input.fullName.trim()) {
    return "Full name is required.";
  }

  if (!input.email.trim()) {
    return "Email address is required.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(input.email.trim())) {
    return "Please enter a valid email address.";
  }

  if (!isTradeOption(input.trade)) {
    return "Please select a trade or position.";
  }

  if (!isExperienceOption(input.experience)) {
    return "Please select years of experience.";
  }

  if (input.resume) {
    const resumeError = validateResumeFile(input.resume);
    if (resumeError) return resumeError;
  }

  return null;
}

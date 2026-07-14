import { generateApplicationPdf } from "./applicationPdf";
import { getCareersEmailConfig } from "./email";
import type { EmailAttachment } from "./email/types";
import { validateCareerApplicationInput, validateResumeFile } from "./validation";
import type {
  CareerApplication,
  CareerApplicationInput,
  CareerApplicationResult,
} from "./types";

export { validateCareerApplicationInput, validateResumeFile } from "./validation";

function createReferenceId(): string {
  return `SR-CA-${Date.now().toString(36).toUpperCase()}`;
}

function normalizeApplication(
  input: CareerApplicationInput,
  referenceId: string,
): CareerApplication {
  return {
    fullName: input.fullName.trim(),
    email: input.email.trim().toLowerCase(),
    phone: input.phone?.trim() || null,
    city: input.city?.trim() || null,
    trade: input.trade,
    experience: input.experience,
    message: input.message?.trim() || null,
    resumeFileName: input.resume?.name ?? null,
    submittedAt: new Date().toISOString(),
    referenceId,
  };
}

function buildEmailText(application: CareerApplication): string {
  return [
    "New employment application — Surface Renaud Inc.",
    "",
    `Reference: ${application.referenceId}`,
    `Submitted: ${application.submittedAt}`,
    "",
    `Name: ${application.fullName}`,
    `Email: ${application.email}`,
    `Phone: ${application.phone ?? "Not provided"}`,
    `City / Region: ${application.city ?? "Not provided"}`,
    `Trade / Position: ${application.trade}`,
    `Experience: ${application.experience}`,
    `Résumé: ${application.resumeFileName ?? "Not attached"}`,
    "",
    "Message:",
    application.message ?? "(none)",
    "",
    "The formatted application PDF is attached" +
      (application.resumeFileName
        ? ", along with the applicant's résumé."
        : "."),
  ].join("\n");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml(application: CareerApplication): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 0;color:#7A7774;font-size:12px;width:160px;">${escapeHtml(label)}</td><td style="padding:6px 0;color:#2C2B29;font-size:14px;">${escapeHtml(value)}</td></tr>`;

  return `
    <div style="font-family:Georgia,serif;color:#2C2B29;max-width:640px;">
      <div style="background:#2C2B29;padding:20px 24px;">
        <div style="color:#B8975A;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;">Surface Renaud Inc.</div>
        <div style="color:#ffffff;font-size:22px;margin-top:6px;">Employment Application</div>
      </div>
      <div style="padding:24px;background:#FAFAF8;border:1px solid #EDE9E3;">
        <p style="margin:0 0 16px;color:#7A7774;font-size:13px;">
          Reference <strong style="color:#2C2B29;">${escapeHtml(application.referenceId)}</strong>
        </p>
        <table style="width:100%;border-collapse:collapse;">
          ${row("Full Name", application.fullName)}
          ${row("Email", application.email)}
          ${row("Phone", application.phone ?? "Not provided")}
          ${row("City / Region", application.city ?? "Not provided")}
          ${row("Trade / Position", application.trade)}
          ${row("Experience", application.experience)}
          ${row("Résumé", application.resumeFileName ?? "Not attached")}
        </table>
        <div style="margin-top:20px;padding-top:16px;border-top:1px solid #EDE9E3;">
          <div style="color:#B8975A;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:8px;">Message</div>
          <p style="margin:0;color:#2C2B29;font-size:14px;line-height:1.5;white-space:pre-wrap;">${escapeHtml(
            application.message ?? "No additional message provided.",
          )}</p>
        </div>
      </div>
    </div>
  `.trim();
}

async function resumeToAttachment(
  resume: File,
): Promise<EmailAttachment> {
  const validationError = validateResumeFile(resume);
  if (validationError) {
    throw new Error(validationError);
  }

  const bytes = new Uint8Array(await resume.arrayBuffer());
  return {
    filename: resume.name,
    content: bytes,
    contentType: resume.type || "application/octet-stream",
  };
}

/**
 * Submits a Careers application by email:
 *   1. Validate input
 *   2. Generate a formatted application PDF
 *   3. Email the PDF (+ optional résumé) to the hiring inbox
 *
 * Email delivery goes through a swappable EmailTransport (Resend today,
 * SMTP/SendGrid later). This is not an applicant-tracking / database flow.
 */
export async function submitCareerApplication(
  input: CareerApplicationInput,
): Promise<CareerApplicationResult> {
  const validationError = validateCareerApplicationInput(input);
  if (validationError) {
    throw new Error(validationError);
  }

  const referenceId = createReferenceId();
  const application = normalizeApplication(input, referenceId);
  const { hiringEmail, fromEmail, transport } = getCareersEmailConfig();

  const applicationPdf = generateApplicationPdf(application);
  const attachments: EmailAttachment[] = [
    {
      filename: `Surface-Renaud-Application-${referenceId}.pdf`,
      content: applicationPdf,
      contentType: "application/pdf",
    },
  ];

  if (input.resume) {
    attachments.push(await resumeToAttachment(input.resume));
  }

  await transport.send({
    to: hiringEmail,
    from: fromEmail,
    replyTo: application.email,
    subject: `Career Application — ${application.fullName} (${application.trade}) [${referenceId}]`,
    text: buildEmailText(application),
    html: buildEmailHtml(application),
    attachments,
  });

  return { referenceId };
}

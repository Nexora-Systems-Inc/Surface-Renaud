import { ResendEmailTransport } from "./resendTransport";
import { StubEmailTransport } from "./stubTransport";
import type { EmailTransport } from "./types";

export type CareersEmailConfig = {
  hiringEmail: string;
  fromEmail: string;
  transport: EmailTransport;
};

/**
 * Resolves Careers email delivery from environment.
 *
 * Env:
 *   CAREERS_HIRING_EMAIL   — destination inbox (default: Surfacerenaud@hotmail.com)
 *   CAREERS_EMAIL_FROM     — From address used by the provider
 *   CAREERS_EMAIL_PROVIDER — "resend" | "stub" (default: stub until wired)
 *   RESEND_API_KEY         — required when provider is "resend"
 *
 * To add SMTP/SendGrid later, implement EmailTransport and branch here.
 */
export function getCareersEmailConfig(): CareersEmailConfig {
  const hiringEmail =
    process.env.CAREERS_HIRING_EMAIL?.trim() || "Surfacerenaud@hotmail.com";
  const fromEmail =
    process.env.CAREERS_EMAIL_FROM?.trim() ||
    process.env.CAREERS_EMAIL_FROM_ADDRESS?.trim() ||
    "Careers <onboarding@resend.dev>";

  const provider = (
    process.env.CAREERS_EMAIL_PROVIDER?.trim().toLowerCase() || "stub"
  ) as string;

  let transport: EmailTransport;

  switch (provider) {
    case "resend": {
      const apiKey = process.env.RESEND_API_KEY?.trim();
      if (!apiKey) {
        throw new Error(
          "CAREERS_EMAIL_PROVIDER=resend requires RESEND_API_KEY to be set.",
        );
      }
      transport = new ResendEmailTransport(apiKey);
      break;
    }
    case "stub":
      transport = new StubEmailTransport();
      break;
    default:
      throw new Error(
        `Unsupported CAREERS_EMAIL_PROVIDER "${provider}". Use "resend" or "stub".`,
      );
  }

  return { hiringEmail, fromEmail, transport };
}

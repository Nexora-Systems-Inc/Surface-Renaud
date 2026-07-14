import type { EmailAttachment, EmailMessage, EmailSendResult, EmailTransport } from "./types";

/**
 * Resend transport using the REST API (no SDK dependency).
 *
 * Required env:
 *   RESEND_API_KEY
 */
export class ResendEmailTransport implements EmailTransport {
  readonly name = "resend";

  constructor(private readonly apiKey: string) {}

  async send(message: EmailMessage): Promise<EmailSendResult> {
    const payload = {
      from: message.from,
      to: [message.to],
      subject: message.subject,
      text: message.text,
      html: message.html,
      reply_to: message.replyTo,
      attachments: message.attachments.map((file) => ({
        filename: file.filename,
        content: Buffer.from(file.content).toString("base64"),
        content_type: file.contentType,
      })),
    };

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      throw new Error(
        `Resend email failed (${response.status})${detail ? `: ${detail}` : ""}`,
      );
    }

    const data = (await response.json()) as { id?: string };
    return { messageId: data.id };
  }
}

/** Helper kept for transports that prefer a Uint8Array → base64 path. */
export function attachmentToBase64(file: EmailAttachment): string {
  return Buffer.from(file.content).toString("base64");
}

import type { EmailMessage, EmailSendResult, EmailTransport } from "./types";

/**
 * Development / pre-wiring transport.
 *
 * Logs the outbound career application email instead of delivering it.
 * Replace via CAREERS_EMAIL_PROVIDER once Resend (or another provider) is configured.
 */
export class StubEmailTransport implements EmailTransport {
  readonly name = "stub";

  async send(message: EmailMessage): Promise<EmailSendResult> {
    console.info("[careers:email:stub] Application email prepared (not delivered)", {
      to: message.to,
      from: message.from,
      replyTo: message.replyTo,
      subject: message.subject,
      attachmentCount: message.attachments.length,
      attachments: message.attachments.map((file) => ({
        filename: file.filename,
        contentType: file.contentType,
        sizeBytes: file.content.byteLength,
      })),
    });

    return { messageId: `stub-${crypto.randomUUID()}` };
  }
}

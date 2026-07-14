export type EmailAttachment = {
  filename: string;
  content: Uint8Array;
  contentType: string;
};

export type EmailMessage = {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  text: string;
  html?: string;
  attachments: EmailAttachment[];
};

export type EmailSendResult = {
  messageId?: string;
};

/**
 * Pluggable email transport.
 *
 * Swap implementations (Resend, SMTP, SendGrid, etc.) without changing the
 * Careers submission orchestration.
 */
export interface EmailTransport {
  readonly name: string;
  send(message: EmailMessage): Promise<EmailSendResult>;
}

import type { CareerApplication } from "./types";

function escapePdfText(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
    .replace(/\r/g, "")
    .replace(/\n/g, " ");
}

function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length === 0) return [""];

  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length <= maxChars) {
      current = next;
      continue;
    }
    if (current) lines.push(current);
    if (word.length <= maxChars) {
      current = word;
    } else {
      // Hard-break very long tokens
      let remaining = word;
      while (remaining.length > maxChars) {
        lines.push(remaining.slice(0, maxChars));
        remaining = remaining.slice(maxChars);
      }
      current = remaining;
    }
  }

  if (current) lines.push(current);
  return lines;
}

function formatSubmittedAt(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat("en-CA", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "America/Toronto",
  }).format(date);
}

/**
 * Builds a professionally formatted employment-application PDF
 * (PDF 1.4, Helvetica — no external library dependency).
 */
export function generateApplicationPdf(
  application: CareerApplication,
): Uint8Array {
  const contentLines: string[] = [];
  let y = 720;

  const moveTo = (nextY: number) => {
    y = nextY;
  };

  const drawText = (
    text: string,
    x: number,
    size: number,
    options?: { bold?: boolean; color?: [number, number, number] },
  ) => {
    const [r, g, b] = options?.color ?? [0.17, 0.17, 0.16]; // stone #2C2B29
    const font = options?.bold ? "F2" : "F1";
    contentLines.push("BT");
    contentLines.push(`/${font} ${size} Tf`);
    contentLines.push(`${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} rg`);
    contentLines.push(`${x} ${y} Td`);
    contentLines.push(`(${escapePdfText(text)}) Tj`);
    contentLines.push("ET");
  };

  const drawRule = (thickness = 0.6) => {
    // Gold accent #B8975A → approx 0.722, 0.592, 0.353
    contentLines.push("0.722 0.592 0.353 RG");
    contentLines.push(`${thickness} w`);
    contentLines.push(`50 ${y} m 545 ${y} l S`);
  };

  // Header band
  contentLines.push("0.173 0.169 0.161 rg"); // stone
  contentLines.push("0 730 612 62 re f");
  contentLines.push("0.722 0.592 0.353 rg");
  contentLines.push("0 728 612 2 re f");

  moveTo(762);
  drawText("SURFACE RENAUD INC.", 50, 11, {
    bold: true,
    color: [0.722, 0.592, 0.353],
  });
  moveTo(742);
  drawText("Employment Application", 50, 18, {
    bold: true,
    color: [1, 1, 1],
  });

  moveTo(700);
  drawText(`Reference  ${application.referenceId}`, 50, 10, {
    color: [0.48, 0.47, 0.45],
  });
  moveTo(684);
  drawText(`Submitted  ${formatSubmittedAt(application.submittedAt)}`, 50, 10, {
    color: [0.48, 0.47, 0.45],
  });

  moveTo(662);
  drawRule(1.2);

  const section = (title: string) => {
    y -= 28;
    drawText(title.toUpperCase(), 50, 9, {
      bold: true,
      color: [0.722, 0.592, 0.353],
    });
    y -= 10;
    drawRule(0.5);
    y -= 16;
  };

  const field = (label: string, value: string) => {
    drawText(label, 50, 9, { color: [0.48, 0.47, 0.45] });
    y -= 14;
    const lines = wrapText(value || "—", 86);
    for (const line of lines) {
      drawText(line, 50, 11, { bold: true });
      y -= 15;
    }
    y -= 8;
  };

  section("Applicant Details");
  field("Full Name", application.fullName);
  field("Email Address", application.email);
  field("Phone Number", application.phone ?? "Not provided");
  field("City / Region", application.city ?? "Not provided");

  section("Position");
  field("Trade / Position", application.trade);
  field("Years of Experience", application.experience);
  field(
    "Résumé Attached",
    application.resumeFileName
      ? application.resumeFileName
      : "No résumé attached",
  );

  section("About the Applicant");
  if (application.message) {
    const lines = wrapText(application.message, 86);
    for (const line of lines) {
      drawText(line, 50, 11);
      y -= 15;
      if (y < 80) break;
    }
  } else {
    drawText("No additional message provided.", 50, 11, {
      color: [0.48, 0.47, 0.45],
    });
  }

  moveTo(56);
  drawRule(0.5);
  moveTo(42);
  drawText(
    "Surface Renaud Inc.  ·  Brownsburg-Chatham, Quebec  ·  Confidential employment application",
    50,
    8,
    { color: [0.48, 0.47, 0.45] },
  );

  const stream = contentLines.join("\n");
  const streamBytes = Buffer.from(stream, "utf8");

  const objects: string[] = [];
  objects.push("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");
  objects.push(
    "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
  );
  objects.push(
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n",
  );
  objects.push(
    `4 0 obj\n<< /Length ${streamBytes.length} >>\nstream\n${stream}\nendstream\nendobj\n`,
  );
  objects.push(
    "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n",
  );
  objects.push(
    "6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n",
  );

  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [0];

  for (const object of objects) {
    offsets.push(Buffer.byteLength(pdf, "utf8"));
    pdf += object;
  }

  const xrefStart = Buffer.byteLength(pdf, "utf8");
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  for (let i = 1; i < offsets.length; i += 1) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
  pdf += `startxref\n${xrefStart}\n%%EOF`;

  return new Uint8Array(Buffer.from(pdf, "utf8"));
}

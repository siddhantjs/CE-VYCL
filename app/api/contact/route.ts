import axios from "axios";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  audience?: string;
  message?: string;
};

const AUDIENCE_LABELS: Record<string, string> = {
  "dealer-group": "Dealer Group",
  lender: "Lender",
  "saas-platform": "SaaS Platform",
  "oem-fleet": "OEM or Fleet Operator",
  other: "Other",
};

function toEmbedValue(value: string, max = 1024): string {
  const trimmed = value.trim();
  return trimmed.length > max ? `${trimmed.slice(0, max - 1)}…` : trimmed;
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const company = body.company?.trim();
  const audience = body.audience?.trim();
  const message = body.message?.trim();

  if (!name || !email || !company || !audience || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const audienceLabel = AUDIENCE_LABELS[audience] ?? audience;

  /** Discord channel webhook for contact form submissions. */
  const webhookUrl = process.env.DISCORD_BOOKING_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("DISCORD_BOOKING_WEBHOOK_URL is not configured");
    return NextResponse.json(
      { error: "Unable to deliver message. Please try again." },
      { status: 503 },
    );
  }

  try {
    await axios.post(webhookUrl, {
      content: "New contact form submission",
      embeds: [
        {
          title: "Contact Form",
          color: 0x0f6e56,
          fields: [
            { name: "Name", value: toEmbedValue(name), inline: true },
            { name: "Email", value: toEmbedValue(email), inline: true },
            { name: "Company", value: toEmbedValue(company), inline: true },
            { name: "Audience", value: toEmbedValue(audienceLabel), inline: true },
            { name: "Message", value: toEmbedValue(message) },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      if (axios.isAxiosError(error)) {
        console.error(
          "Discord webhook failed:",
          error.response?.status,
          error.response?.data,
        );
      } else {
        console.error("Discord webhook request failed:", error);
      }
    }

    return NextResponse.json(
      { error: "Unable to deliver message. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

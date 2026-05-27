import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  audience?: string;
  message?: string;
};

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

  /**
   * Integration point: forward to your CRM or email provider.
   * Set CONTACT_WEBHOOK_URL to a Zapier/Make/Resend endpoint.
   */
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const upstream = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, audience, message }),
      });

      if (!upstream.ok) {
        return NextResponse.json(
          { error: "Unable to deliver message. Please try again." },
          { status: 502 },
        );
      }
    } catch {
      return NextResponse.json(
        { error: "Unable to deliver message. Please try again." },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}

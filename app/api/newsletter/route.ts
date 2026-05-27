import { NextResponse } from "next/server";

type NewsletterPayload = {
  email?: string;
};

export async function POST(request: Request) {
  let body: NewsletterPayload;

  try {
    body = (await request.json()) as NewsletterPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const email = body.email?.trim();

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  /**
   * Integration point: Mailchimp, ConvertKit, Resend audience, etc.
   * Set NEWSLETTER_PROVIDER_URL to your provider's subscribe endpoint.
   * Optional: NEWSLETTER_API_KEY for Authorization header.
   */
  const providerUrl = process.env.NEWSLETTER_PROVIDER_URL;
  const apiKey = process.env.NEWSLETTER_API_KEY;

  if (providerUrl) {
    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (apiKey) {
        headers.Authorization = `Bearer ${apiKey}`;
      }

      const upstream = await fetch(providerUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({ email }),
      });

      if (!upstream.ok) {
        return NextResponse.json(
          { error: "Subscription failed. Please try again." },
          { status: 502 },
        );
      }
    } catch {
      return NextResponse.json(
        { error: "Subscription failed. Please try again." },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}

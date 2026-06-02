import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "../components/legal/LegalLayout";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Privacy Policy   VYCL LLC",
    description:
      "How VYCL LLC collects, uses, and protects personal information submitted through our website contact form and mailing list.",
    path: "/privacy",
    keywords: [
      "VYCL privacy policy",
      "VYCL data protection",
      "contact form privacy",
      "mailing list privacy",
      "VYCL LLC personal information",
    ],
  }),
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 27, 2026";

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      footer={`Last updated ${LAST_UPDATED} · VYCL LLC · Governed by the laws of the State of Hawaii`}
    >
      <LegalSection title="1. Information We Collect">
        <p>
          When you use our website, we may collect the following information:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-vycl-dark">Contact form:</strong> name,
            email address, company or organisation, audience type, and message
            content when you submit an inquiry.
          </li>
          <li>
            <strong className="text-vycl-dark">Mailing list:</strong> email
            address when you subscribe to industry updates through our footer
            newsletter signup.
          </li>
          <li>
            <strong className="text-vycl-dark">Scheduling:</strong> if you book
            a call through Calendly, Calendly&apos;s own privacy policy governs
            the information you provide on their platform.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Respond to your inquiries and follow up on business conversations.</li>
          <li>
            Send industry updates and VYCL news if you have subscribed to our
            mailing list.
          </li>
          <li>Improve our website and understand how visitors engage with our content.</li>
        </ul>
        <p>
          We do not use your information for purposes unrelated to VYCL&apos;s
          consultancy services without your consent.
        </p>
      </LegalSection>

      <LegalSection title="3. Who We Share It With">
        <p>
          We do not sell your personal information. We may share data with
          service providers that help us operate our business, including:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-vycl-dark">Calendly</strong>   for scheduling
            calls when you book through our Calendly link.
          </li>
          <li>
            <strong className="text-vycl-dark">Email service provider</strong>  
            for sending mailing list communications and responding to contact
            form submissions.
          </li>
        </ul>
        <p>
          These providers process data on our behalf and are contractually
          obligated to protect it. We may also disclose information if required
          by law.
        </p>
      </LegalSection>

      <LegalSection title="4. Data Retention">
        <p>
          We retain personal information for as long as needed to respond to
          your inquiry, maintain our business relationship, or fulfil the
          purpose for which it was collected. You may request deletion at any
          time (see Section 5).
        </p>
      </LegalSection>

      <LegalSection title="5. Your Rights">
        <p>You have the right to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Request access to the personal information we hold about you.</li>
          <li>Request correction or deletion of your personal information.</li>
          <li>
            Opt out of our mailing list at any time using the unsubscribe link
            in any email we send, or by contacting us directly.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Contact">
        <p>
          For privacy-related questions or to exercise your rights, contact us
          at{" "}
          <a
            href="mailto:privacy@vycl.ai"
            className="font-semibold text-[#0F6E56] underline-offset-2 hover:underline"
          >
            privacy@vycl.ai
          </a>{" "}
          or through our{" "}
          <a
            href="/contact"
            className="font-semibold text-[#0F6E56] underline-offset-2 hover:underline"
          >
            contact form
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

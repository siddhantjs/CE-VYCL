import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "../components/legal/LegalLayout";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Terms of Service   VYCL LLC",
    description:
      "Terms governing use of the VYCL website. Site content is informational only and does not constitute a consulting agreement.",
    path: "/terms",
  }),
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 27, 2026";

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      footer={`Last updated ${LAST_UPDATED} · VYCL LLC`}
    >
      <LegalSection title="1. Use of Site">
        <p>
          This website is operated by VYCL LLC and is provided for general
          informational purposes about our vehicle subscription consultancy
          services. Browsing this site or submitting a contact form does not
          create a consulting agreement, engagement letter, or any binding
          contractual relationship between you and VYCL LLC.
        </p>
        <p>
          Any formal engagement with VYCL requires a separate written agreement
          signed by both parties.
        </p>
      </LegalSection>

      <LegalSection title="2. Intellectual Property">
        <p>
          All content on this website   including text, graphics, logos, images,
          and the Six Pillars framework   is owned by VYCL LLC or used with
          permission. The Six Pillars framework is proprietary to VYCL LLC and
          may not be reproduced, distributed, or adapted without prior written
          consent.
        </p>
        <p>
          You may view and print pages from this site for personal,
          non-commercial reference. Any other use requires our express written
          permission.
        </p>
      </LegalSection>

      <LegalSection title="3. Disclaimers">
        <p>
          Content on this site is provided &ldquo;as is&rdquo; without warranty
          of any kind. Nothing on this website constitutes legal, financial,
          tax, or investment advice. Vehicle subscription program design,
          lending structure, and regulatory compliance require professional
          counsel tailored to your specific situation.
        </p>
        <p>
          VYCL LLC makes no representation that information on this site is
          complete, current, or applicable to your jurisdiction or business
          circumstances.
        </p>
      </LegalSection>

      <LegalSection title="4. Limitation of Liability">
        <p>
          To the fullest extent permitted by applicable law, VYCL LLC and its
          officers, employees, and affiliates shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages
          arising from your use of or inability to use this website, even if
          advised of the possibility of such damages.
        </p>
        <p>
          In no event shall VYCL LLC&apos;s total liability for claims related
          to this website exceed one hundred US dollars ($100).
        </p>
      </LegalSection>

      <LegalSection title="5. Governing Law">
        <p>
          These Terms of Service are governed by and construed in accordance
          with the laws of the State of Hawaii, without regard to conflict of
          law principles. Any dispute arising under these terms shall be subject
          to the exclusive jurisdiction of the courts located in the State of
          Hawaii.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

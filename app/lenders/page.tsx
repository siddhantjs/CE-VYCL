import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LenderProofPoints } from "../components/lenders/LenderProofPoints";
import { LendersCta } from "../components/lenders/LendersCta";
import { LendersHero } from "../components/lenders/LendersHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Vehicle Subscription Lending — VYCL Structures Subscription Portfolios",
  description:
    "VYCL helps lenders structure fleet-based subscription lending facilities with proper collateral, cash-flow modelling, and KEYVO subscriber underwriting.",
  path: "/lenders",
  keywords: [
    "vehicle subscription lending facility",
    "subscription fleet financing",
    "subscription underwriting platform",
    "KEYVO",
    "credit union auto subscription",
    "fleet loan facility",
  ],
});

export default function LendersPage() {
  return (
    <>
      <Header />
      <main>
        <LendersHero />
        <LenderProofPoints />
        <LendersCta />
      </main>
      <Footer />
    </>
  );
}

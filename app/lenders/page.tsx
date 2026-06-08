import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LenderProofPoints } from "../components/lenders/LenderProofPoints";
import { LendersCta } from "../components/lenders/LendersCta";
import { LendersHero } from "../components/lenders/LendersHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Auto Subscription Lending Structure   VYCL Lenders",
  description:
    "VYCL helps lenders structure auto subscription lending, fleet subscription loan facilities, and subscription lending facility agreements with collateral, cash-flow modeling, and KEYVO vehicle subscription underwriting.",
  path: "/lenders",
  keywords: [
    "vehicle subscription lending facility",
    "subscription fleet financing",
    "vehicle subscription underwriting platform",
    "subscription underwriting platform",
    "auto subscription lending structure",
    "fleet subscription loan facility",
    "vehicle subscription underwriting",
    "subscription auto portfolio financing",
    "fleet loan facility for subscription",
    "credit union auto subscription lending",
    "auto finance consultant",
    "subscription vehicle collateral structure",
    "automotive fleet financing consultant",
    "Westlake Financial dealer program",
    "CULA vehicle subscription",
    "how to finance a subscription fleet",
    "subscription auto loan risk structure",
    "auto lender subscription program partnership",
    "dealer subscription finance program",
    "indirect auto lending subscription",
    "fleet vehicle financing consultant",
    "subscription loan cash flow modeling",
    "automotive lender subscription strategy",
    "auto subscription data tape lender",
    "pro forma subscription fleet lender",
    "auto subscription monthly cash flow",
    "subscription lending facility agreement",
    "KEYVO subscription underwriting software",
    "automotive fintech subscription",
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

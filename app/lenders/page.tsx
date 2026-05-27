import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LenderProblemSolution } from "../components/lenders/LenderProblemSolution";
import { LenderProofPoints } from "../components/lenders/LenderProofPoints";
import { LendersCta } from "../components/lenders/LendersCta";
import { LendersHero } from "../components/lenders/LendersHero";

export const metadata: Metadata = {
  title: "Lenders — Vehicle Subscription Lending & Fleet Financing | VYCL",
  description:
    "Structure vehicle subscription lending facilities with proper collateral, underwriting, and monitoring. VYCL works with auto lenders and credit unions — proven with Westlake Financial / CULA and KEYVO.",
  keywords: [
    "vehicle subscription lending facility",
    "auto subscription lending structure",
    "subscription fleet financing",
    "subscription auto portfolio financing",
    "vehicle subscription underwriting",
    "fleet loan facility for subscription",
    "Westlake Financial dealer program",
    "CULA vehicle subscription",
    "KEYVO subscription underwriting software",
    "auto finance consultant",
    "automotive fleet financing consultant",
    "fleet subscription loan facility",
    "credit union auto subscription lending",
    "subscription vehicle collateral structure",
  ],
};

export default function LendersPage() {
  return (
    <>
      <Header />
      <main>
        <LendersHero />
        <LenderProblemSolution />
        <LenderProofPoints />
        <LendersCta />
      </main>
      <Footer />
    </>
  );
}

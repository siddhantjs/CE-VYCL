import type { Metadata } from "next";
import { DealerGroupsCta } from "../components/dealer-groups/DealerGroupsCta";
import { DealerGroupsHero } from "../components/dealer-groups/DealerGroupsHero";
import { DealerProblemSolution } from "../components/dealer-groups/DealerProblemSolution";
import { DealerProofPoints } from "../components/dealer-groups/DealerProofPoints";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "Dealer Groups — Vehicle Subscription for Dealers | VYCL",
  description:
    "Launch a car subscription program on your dealer rooftops without rebuilding operations. VYCL handles platform, lending, insurance, and playbook — proven with FlexRide by King.",
  keywords: [
    "car subscription program for dealers",
    "dealership subscription program",
    "dealer group consulting firm",
    "new revenue streams for car dealerships",
    "dealer subscription program launch",
    "subscription model for auto dealers",
    "dealership recurring revenue model",
    "JRNY platform dealer setup",
    "vehicle subscription underwriting platform",
    "Axle insurance verification automotive",
    "hire automotive consultant",
    "car dealership consultant",
  ],
};

export default function DealerGroupsPage() {
  return (
    <>
      <Header />
      <main>
        <DealerGroupsHero />
        <DealerProblemSolution />
        <DealerProofPoints />
        <DealerGroupsCta />
      </main>
      <Footer />
    </>
  );
}

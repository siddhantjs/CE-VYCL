import type { Metadata } from "next";
import { DealerGroupsCta } from "../components/dealer-groups/DealerGroupsCta";
import { DealerGroupsHero } from "../components/dealer-groups/DealerGroupsHero";
import { DealerProofPoints } from "../components/dealer-groups/DealerProofPoints";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Dealership Subscription Program   VYCL Dealer Groups",
  description:
    "Subscription revenue for franchised dealers   car dealer subscription consultant support for franchise dealer subscription programs and a dealer group recurring revenue model.",
  path: "/dealer-groups",
  keywords: [
    "car subscription program for dealers",
    "car dealer subscription consultant",
    "car subscription dealer group strategy",
    "car subscription program ROI for dealers",
    "vehicle subscription insurance compliance",
    "new revenue streams for car dealerships",
    "dealership subscription program",
    "how to add subscription to my dealership",
    "dealer group expansion strategy",
    "franchise dealer subscription program",
    "pre-owned vehicle subscription dealer",
    "dealer loaner fleet subscription",
    "dealership recurring revenue model",
    "dealer group recurring revenue model",
    "used car subscription program",
    "dealer subscription program launch",
    "subscription model for auto dealers",
    "subscription revenue for franchised dealers",
    "vehicle subscription all-in-one program",
    "subscription software for franchise dealers",
    "Axle insurance verification automotive",
    "insurance verification API automotive",
    "automotive revenue consultant",
    "dealer group revenue diversification",
    "dealer subscription finance program",
    "dealer subscription program",
    "franchise dealer subscription",
    "dealership recurring revenue",
    "KEYVO subscription underwriting",
    "multi-rooftop subscription",
  ],
});

export default function DealerGroupsPage() {
  return (
    <>
      <Header />
      <main>
        <DealerGroupsHero />
        <DealerProofPoints />
        <DealerGroupsCta />
      </main>
      <Footer />
    </>
  );
}

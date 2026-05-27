import type { Metadata } from "next";
import { DealerGroupsCta } from "../components/dealer-groups/DealerGroupsCta";
import { DealerGroupsHero } from "../components/dealer-groups/DealerGroupsHero";
import { DealerProofPoints } from "../components/dealer-groups/DealerProofPoints";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Vehicle Subscription for Dealer Groups — VYCL",
  description:
    "Launch and scale a vehicle subscription program on your existing rooftops without adding headcount. VYCL handles the playbook, the partners, and the launch.",
  path: "/dealer-groups",
  keywords: [
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

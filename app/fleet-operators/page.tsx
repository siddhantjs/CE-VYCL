import type { Metadata } from "next";
import { FleetOperatorsCta } from "../components/fleet-operators/FleetOperatorsCta";
import { FleetOperatorsHero } from "../components/fleet-operators/FleetOperatorsHero";
import { FleetProofPoints } from "../components/fleet-operators/FleetProofPoints";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Fleet Rental to Subscription Transition   VYCL Fleet Operators",
  description:
    "Fleet operator subscription consulting for rental fleet monetization, rental car fleet subscription programs, and rental fleet exit strategy subscription   backed by AVIS Budget wholesale channel and PLUG EV fleet programs.",
  path: "/fleet-operators",
  keywords: [
    "pre-owned EV subscription inventory",
    "AVIS Budget wholesale inventory for dealers",
    "EV inventory for dealers",
    "wholesale auto inventory sourcing",
    "automotive fleet financing consultant",
    "fleet vehicle financing consultant",
    "subscription vehicle depreciation model",
    "captive auto finance subscription",
    "fleet rental to subscription transition",
    "rental car fleet subscription program",
    "AVIS Budget wholesale channel subscription",
    "fleet operator subscription consulting",
    "rental fleet monetization subscription",
    "EV fleet subscription program",
    "Rivian fleet subscription program",
    "electric vehicle subscription dealer",
    "fleet leasing consultant",
    "rental fleet exit strategy subscription",
    "fleet vehicle ROI subscription",
    "pre-owned EV fleet subscription",
    "mobility subscription fleet operator",
    "fleet program consulting",
    "OEM subscription program consultant",
    "PLUG EV platform dealer inventory",
    "AVIS Budget wholesale dealer inventory",
    "PLUG EV platform",
  ],
});

export default function FleetOperatorsPage() {
  return (
    <>
      <Header />
      <main>
        <FleetOperatorsHero />
        <FleetProofPoints />
        <FleetOperatorsCta />
      </main>
      <Footer />
    </>
  );
}

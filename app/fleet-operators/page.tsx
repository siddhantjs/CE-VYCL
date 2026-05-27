import type { Metadata } from "next";
import { FleetOperatorsCta } from "../components/fleet-operators/FleetOperatorsCta";
import { FleetOperatorsHero } from "../components/fleet-operators/FleetOperatorsHero";
import { FleetProofPoints } from "../components/fleet-operators/FleetProofPoints";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "Fleet Operators — Fleet Subscription Programs & EV Fleet | VYCL",
  description:
    "Turn your fleet into a subscription business. VYCL integrates AVIS/Budget wholesale inventory, PLUG EV sourcing, Axle compliance, and KEYVO underwriting — built for rental companies, EV fleet operators, and hosts at scale.",
  keywords: [
    "fleet operator subscription consulting",
    "fleet rental to subscription transition",
    "EV fleet subscription program",
    "pre-owned EV subscription inventory",
    "AVIS Budget wholesale channel subscription",
    "Rivian fleet subscription program",
    "fleet program consulting",
    "fleet vehicle ROI subscription",
    "Turo fleet subscription model",
    "captive fleet subscription program",
    "PLUG EV fleet sourcing",
    "fleet insurance compliance subscription",
  ],
};

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

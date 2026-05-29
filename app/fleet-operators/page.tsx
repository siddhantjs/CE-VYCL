import type { Metadata } from "next";
import { FleetOperatorsCta } from "../components/fleet-operators/FleetOperatorsCta";
import { FleetOperatorsHero } from "../components/fleet-operators/FleetOperatorsHero";
import { FleetProofPoints } from "../components/fleet-operators/FleetProofPoints";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Fleet Subscription Consulting   VYCL Fleet Operator Strategy",
  description:
    "VYCL designs branded subscription programs for fleet operators and OEMs   from fleet composition through subscriber experience, backed by PLUG, AVIS/Budget, Axle, and KEYVO.",
  path: "/fleet-operators",
  keywords: [
    "fleet operator subscription consulting",
    "EV fleet subscription program",
    "AVIS Budget wholesale dealer inventory",
    "PLUG EV platform",
    "fleet rental to subscription transition",
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

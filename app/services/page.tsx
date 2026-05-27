import type { Metadata } from "next";
import { EngagementCta } from "../components/engagement/EngagementCta";
import { EngagementTiers } from "../components/engagement/EngagementTiers";
import { ServicesHero } from "../components/engagement/ServicesHero";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "How VYCL Works — Vehicle Subscription Services | VYCL",
  description:
    "Vehicle subscription strategy consultant for OEMs, lenders, and dealer groups. Advisory, Implementation, and Ongoing Partnership engagements — from market assessment to multi-rooftop scaling.",
  keywords: [
    "vehicle subscription consultant",
    "automotive consultant for hire",
    "vehicle subscription strategy consultant",
    "dealer subscription program launch",
    "vehicle subscription program scaling",
    "hire automotive consultant",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <EngagementTiers />
        <EngagementCta />
      </main>
      <Footer />
    </>
  );
}

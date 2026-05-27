import type { Metadata } from "next";
import { EngagementCta } from "../components/engagement/EngagementCta";
import { EngagementTiers } from "../components/engagement/EngagementTiers";
import { ServicesHero } from "../components/engagement/ServicesHero";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "VYCL Services — Vehicle Subscription Advisory, Implementation & Partnership",
  description:
    "VYCL offers three engagement models for dealer groups, lenders, SaaS platforms, and fleet operators: Advisory, Implementation, and Ongoing Partnership.",
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

import type { Metadata } from "next";
import { EngagementCta } from "../components/engagement/EngagementCta";
import { EngagementTiers } from "../components/engagement/EngagementTiers";
import { ServicesHero } from "../components/engagement/ServicesHero";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "VYCL Services   Vehicle Subscription Advisory, Implementation & Partnership",
  description:
    "B2B automotive consulting services   vehicle subscription strategy consultant, dealer group strategic advisor, automotive program launch consultant, and automotive consulting retainer for ongoing partnership.",
  path: "/services",
  keywords: [
    "how to launch a vehicle subscription program",
    "car subscription program for dealers",
    "vehicle subscription platform implementation",
    "JRNY platform dealer setup",
    "car subscription marketing strategy",
    "vehicle subscription operations setup",
    "vehicle subscription program scaling",
    "dealer group expansion strategy",
    "dealership business development consultant",
    "automotive dealer platform consulting",
    "dealer subscription program launch",
    "multi-rooftop subscription program",
    "car dealership diversification strategy",
    "dealership technology integration consultant",
    "vehicle subscription software implementation",
    "dealer onboarding subscription software",
    "subscription lifecycle management automotive",
    "subscription loan cash flow modeling",
    "subscription lending facility agreement",
    "fleet vehicle ROI subscription",
    "vehicle subscription strategy consultant",
    "B2B automotive consulting services",
    "dealer group strategic advisor",
    "automotive program launch consultant",
    "fractional automotive executive",
    "automotive go-to-market consultant",
    "car subscription business model consultant",
    "fleet program consulting",
    "automotive partnership development",
    "dealer group revenue diversification",
    "automotive consulting retainer",
    "vehicle subscription business plan",
    "vehicle subscription advisory",
    "automotive consulting engagement models",
    "subscription program implementation",
    "ongoing automotive partnership",
    "dealer group subscription consulting",
  ],
});

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

import type { Metadata } from "next";
import { AboutCta } from "../components/about/AboutCta";
import { AboutHero } from "../components/about/AboutHero";
import { CompanyOverview } from "../components/about/CompanyOverview";
import { FounderBio } from "../components/about/FounderBio";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "About VYCL — Vehicle Subscription Expert | Ryan Yamauchi",
  description:
    "Ryan Yamauchi built and scaled vehicle subscription programs for over a decade — from Hawaii to national platforms. VYCL is the consultancy purpose-built for the subscription economy.",
  keywords: [
    "vehicle subscription expert",
    "fractional automotive executive",
    "automotive consultant for hire",
    "automotive SaaS licensing partner US",
    "vehicle subscription underwriting platform",
    "vehicle subscription consultancy",
    "automotive industry consulting firm",
    "hire automotive consultant",
  ],
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <FounderBio />
        <CompanyOverview />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { AboutCta } from "../components/about/AboutCta";
import { AboutHero } from "../components/about/AboutHero";
import { CompanyOverview } from "../components/about/CompanyOverview";
import { FounderBio } from "../components/about/FounderBio";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About VYCL   Car Dealership Consultant | Ryan Yamauchi",
  description:
    "Ryan Yamauchi is an automotive business consultant and mobility industry consultant   dealer group strategic advisor, fractional automotive executive, and automotive industry advisor Hawaii.",
  path: "/about",
  keywords: [
    "vehicle subscription consultant",
    "car subscription program proof of concept",
    "automotive retail consulting",
    "car dealership consultant",
    "dealership business development consultant",
    "dealer group consulting firm",
    "automotive retail innovation consultant",
    "automotive business consultant",
    "mobility industry consultant",
    "dealer group strategic advisor",
    "mobility as a service consultant",
    "automotive startup advisor",
    "automotive partnership development",
    "automotive industry advisor Hawaii",
    "automotive disruption consultant",
    "vehicle subscription expert",
    "fractional automotive executive",
    "automotive consultant for hire",
    "automotive SaaS licensing partner US",
    "automotive SaaS dealer sales consultant",
    "automotive technology consultant US",
    "vehicle subscription underwriting platform",
    "vehicle subscription consultancy",
    "automotive industry consulting firm",
    "hire automotive consultant",
  ],
});

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

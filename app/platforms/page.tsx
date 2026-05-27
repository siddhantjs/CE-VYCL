import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PlatformValueProps } from "../components/platforms/PlatformValueProps";
import { PlatformsCta } from "../components/platforms/PlatformsCta";
import { PlatformsHero } from "../components/platforms/PlatformsHero";

export const metadata: Metadata = {
  title: "SaaS Platforms — US Dealer Channel for Automotive SaaS | VYCL",
  description:
    "VYCL is the proven US dealer channel for automotive SaaS. Exclusive Tomorrow's Journey / JRNY licensing partner, active dealer BD pipeline, and FlexRide by King as a live reference program.",
  keywords: [
    "automotive SaaS US market entry",
    "automotive SaaS dealer adoption",
    "UK automotive SaaS US expansion",
    "JRNY subscription platform US",
    "dealer onboarding subscription software",
    "automotive SaaS licensing partner US",
    "automotive go-to-market consultant",
    "automotive SaaS dealer sales consultant",
    "Tomorrow's Journey US dealer",
    "JRNY platform dealer setup",
  ],
};

export default function PlatformsPage() {
  return (
    <>
      <Header />
      <main>
        <PlatformsHero />
        <PlatformValueProps />
        <PlatformsCta />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PlatformValueProps } from "../components/platforms/PlatformValueProps";
import { PlatformsCta } from "../components/platforms/PlatformsCta";
import { PlatformsHero } from "../components/platforms/PlatformsHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Automotive SaaS US Market Entry   VYCL Platform Partnership",
  description:
    "Vehicle subscription software platform and automotive platform go-to-market US partner   JRNY subscription platform US licensing, dealer onboarding subscription software, and subscription software for franchise dealers.",
  path: "/platforms",
  keywords: [
    "vehicle subscription platform implementation",
    "vehicle subscription software for dealers",
    "vehicle subscription software platform",
    "best vehicle subscription platform US",
    "automotive subscription platform consultant",
    "automotive dealer platform consulting",
    "automotive SaaS US market entry",
    "JRNY platform dealer setup",
    "JRNY subscription platform US",
    "Tomorrow's Journey US dealer",
    "car subscription technology dealer integration",
    "automotive SaaS dealer adoption",
    "subscription management software automotive",
    "automotive platform go-to-market US",
    "automotive go-to-market consultant",
    "UK automotive SaaS US expansion",
    "dealer onboarding subscription software",
    "subscription billing automotive software",
    "vehicle subscription CRM integration",
    "automotive SaaS dealer sales consultant",
    "subscription software for franchise dealers",
    "vehicle subscription platform ROI",
    "car subscription app for dealers",
    "automotive SaaS licensing partner US",
  ],
});

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

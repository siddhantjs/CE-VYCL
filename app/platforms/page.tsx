import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PlatformValueProps } from "../components/platforms/PlatformValueProps";
import { PlatformsCta } from "../components/platforms/PlatformsCta";
import { PlatformsHero } from "../components/platforms/PlatformsHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Automotive SaaS US Market Entry — VYCL Platform Partnership",
  description:
    "VYCL is the exclusive US licensing partner for Tomorrow's Journey / JRNY. We bridge automotive SaaS platforms to US dealer networks with proven go-to-market execution.",
  path: "/platforms",
  keywords: [
    "automotive SaaS US market entry",
    "JRNY platform dealer setup",
    "Tomorrow's Journey US dealer",
    "dealer onboarding subscription software",
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

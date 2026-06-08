import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProgramBlocks } from "../components/programs/ProgramBlocks";
import { ProgramsCta } from "../components/programs/ProgramsCta";
import { ProgramsHero } from "../components/programs/ProgramsHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "VYCL Active Programs   Vehicle Subscription Program Hawaii",
  description:
    "VYCL has built and operates Hawaii's most active vehicle subscription program. See FlexRide King Windward Nissan and what's coming next.",
  path: "/programs",
  keywords: [
    "vehicle subscription program Hawaii",
    "FlexRide King Windward Nissan",
    "FlexRide King Hawaii subscription",
    "used car subscription program",
    "Nissan dealer subscription program",
    "EV fleet subscription program",
    "Rivian fleet subscription program",
    "active vehicle subscription programs",
    "Six Pillars framework",
    "automotive subscription case study",
  ],
});

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main>
        <ProgramsHero />
        <ProgramBlocks />
        <ProgramsCta />
      </main>
      <Footer />
    </>
  );
}

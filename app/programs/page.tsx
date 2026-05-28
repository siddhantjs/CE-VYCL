import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProgramBlocks } from "../components/programs/ProgramBlocks";
import { ProgramsCta } from "../components/programs/ProgramsCta";
import { ProgramsHero } from "../components/programs/ProgramsHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "VYCL Active Programs   Vehicle Subscription in Hawaii and Beyond",
  description:
    "VYCL has built and operates Hawaii's most active vehicle subscription program. See FlexRide by King and what's coming next.",
  path: "/programs",
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

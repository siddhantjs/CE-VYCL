import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProgramBlocks } from "../components/programs/ProgramBlocks";
import { ProgramsHero } from "../components/programs/ProgramsHero";

export const metadata: Metadata = {
  title: "Active Programs — Vehicle Subscription Proof | VYCL",
  description:
    "VYCL builds and operates vehicle subscription programs on real dealer rooftops. FlexRide by King in Hawaii — JRNY, Axle, Westlake/CULA — plus national expansion underway.",
  keywords: [
    "vehicle subscription program Hawaii",
    "dealer subscription program launch",
    "car subscription program proof of concept",
    "FlexRide King Windward Nissan",
    "subscription fleet financing",
    "vehicle subscription program scaling",
    "multi-rooftop subscription program",
  ],
};

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main>
        <ProgramsHero />
        <ProgramBlocks />
      </main>
      <Footer />
    </>
  );
}

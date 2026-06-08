import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { FlexRideCaseStudy } from "./components/FlexRideCaseStudy";
import { Footer } from "./components/Footer";
import { GlobalReach } from "./components/GlobalReach";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Partners } from "./components/Partners";
import { ProofStatsBar } from "./components/ProofStatsBar";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { WhoWeServe } from "./components/WhoWeServe";
import { WhyVycl } from "./components/WhyVycl";

export const metadata: Metadata = createPageMetadata({
  title: "VYCL   Vehicle Subscription Consultancy | Ryan Yamauchi",
  description:
    "Hire an automotive consultant and vehicle subscription expert   VYCL is an automotive business consultant for dealer groups, lenders, and fleet operators in the subscription economy automotive.",
  path: "/",
  keywords: [
    "vehicle subscription consultancy",
    "vehicle subscription consultant",
    "car subscription dealer group strategy",
    "car subscription program proof of concept",
    "vehicle subscription inventory management",
    "new revenue streams for car dealerships",
    "dealership subscription program",
    "automotive retail consulting",
    "car dealership consultant",
    "car dealer subscription consultant",
    "dealer group consulting firm",
    "subscription model for auto dealers",
    "dealership recurring revenue model",
    "dealer group recurring revenue model",
    "auto finance consultant",
    "automotive subscription consulting",
    "dealer subscription programs",
    "fleet subscription strategy",
    "vehicle subscription vs car rental",
    "short term vehicle subscription program",
    "vehicle subscription all-in-one program",
    "automotive subscription platform consultant",
    "automotive technology consultant US",
    "automotive business consultant",
    "vehicle subscription strategy consultant",
    "automotive industry consulting firm",
    "hire automotive consultant",
    "car subscription business model consultant",
    "automotive revenue consultant",
    "vehicle subscription expert",
    "subscription economy automotive",
    "automotive consultant for hire",
    "Ryan Yamauchi automotive consultant",
  ],
});

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* S2   Hero Banner */}
        <Hero />
        {/* S3   Proof Stats Bar */}
        <ProofStatsBar />
        {/* S4   Why VYCL */}
        <WhyVycl />
        {/* S5   Who We Serve */}
        <WhoWeServe />
        {/* S6   Who We Work With */}
        <Partners />
        {/* S7   Six Pillars */}
        <Services />
        {/* S8   FlexRide Case Study */}
        <FlexRideCaseStudy />
        {/* S9   Meet the Founder */}
        <About />
        {/* S10   Testimonials */}
        <Testimonials />
        {/* S11   Contact + Calendar */}
        <Contact />
        {/* S12   Global Reach Globe */}
        <GlobalReach />
      </main>
      {/* S13   Footer (includes mailing list) */}
      <Footer />
    </>
  );
}

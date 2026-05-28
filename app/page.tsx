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

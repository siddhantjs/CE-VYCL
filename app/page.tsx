import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { CtaBanner } from "./components/CtaBanner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Newsletter } from "./components/Newsletter";
import { Partners } from "./components/Partners";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Partners />
        <CtaBanner />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

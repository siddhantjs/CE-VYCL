import type { Metadata } from "next";
import { ContactCalendar } from "../components/contact/ContactCalendar";
import { ContactForm } from "../components/contact/ContactForm";
import { ContactIntro } from "../components/contact/ContactIntro";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact VYCL — Hire an Automotive Subscription Consultant",
  description:
    "Ready to build your vehicle subscription program? Contact VYCL for consulting on dealer groups, lenders, SaaS platforms, and fleet operators — or schedule a 30-minute call directly.",
  path: "/contact",
  keywords: [
    "hire automotive consultant",
    "vehicle subscription business plan",
    "automotive consultant for hire",
    "vehicle subscription Hawaii",
    "vehicle subscription consultant",
  ],
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactCalendar />
        <section className="px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
          <div className="mx-auto max-w-6xl">
            <ContactIntro centered />
            <div className="mx-auto mt-12 max-w-2xl">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

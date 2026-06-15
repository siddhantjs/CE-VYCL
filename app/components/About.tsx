"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT_PATH, RYAN_HEADSHOT_URL } from "@/lib/site";
import { FadeIn, Stagger, motion, staggerItem } from "./motion";

const credentials = [
  "Co-founder, KEYVO   the subscription industry's only dealer and lender underwriting platform",
  "Exclusive Head of Sales North America   Tomorrow's Journey / JRNY",
  "Co-founder, NYP LLC   operating entity, FlexRide by King",
  "Structured institutional lending facility   Westlake Financial / CULA",
  "Former VP of Operations   AutoSource Hawaii",
  "Former Director of Strategic Planning   nation's first DTC vehicle subscription company",
];

export function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-vycl-cream-muted lg:aspect-auto lg:min-h-[480px]">
            <motion.div
              className="relative h-full min-h-[320px] w-full lg:min-h-[480px]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Image
                src={RYAN_HEADSHOT_URL}
                alt="Ryan Yamauchi   vehicle subscription consultant, founder of VYCL, co-founder of KEYVO"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-widest text-vycl-text-muted">
              Meet the Founder
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-vycl-dark sm:text-4xl">
              Ryan Yamauchi
            </h2>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-vycl-text-muted">
            <p>
              Ryan Yamauchi is a vehicle subscription expert, automotive SaaS
              dealer sales consultant, and dealer group strategic advisor who has
              spent over a decade building, operating, and scaling vehicle
              subscription programs   starting with Hawaii&apos;s boutique
              dealership market and expanding to national platform development,
              institutional lending, and multi-rooftop dealer strategy.
            </p>
              <p>
                He served as VP of Operations at AutoSource Hawaii and Director of
                Strategic Planning at the nation&apos;s first direct-to-consumer
                vehicle subscription company. Today he is the founder of VYCL, the
                automotive SaaS licensing partner US for Tomorrow&apos;s Journey,
                a fractional automotive executive and mobility as a service
                consultant, automotive startup advisor, and automotive disruption
                consultant   co-founder of KEYVO, co-founder of NYP LLC (FlexRide
                by King), and exclusive Head of Sales North America for JRNY.
              </p>
              <p>
                His Six Pillars framework has guided over 800 vehicle deployments
                and is the operating foundation for active programs in Hawaii with
                national expansion underway.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} className="mt-12 lg:mt-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-vycl-text-muted">
            Credentials
          </p>
          <Stagger className="mt-3 flex flex-wrap gap-2">
            {credentials.map((item) => (
              <motion.span
                key={item}
                variants={staggerItem}
                className="rounded-full border border-vycl-border bg-white px-3 py-1.5 text-xs font-medium text-vycl-dark"
                whileHover={{ scale: 1.05, borderColor: "#d4f54a" }}
              >
                {item}
              </motion.span>
            ))}
          </Stagger>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-10 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href={CONTACT_PATH}
              className="inline-flex rounded-full bg-vycl-lime px-7 py-3.5 text-sm font-semibold text-vycl-dark transition-opacity hover:opacity-90"
            >
              Work With Us
            </Link>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

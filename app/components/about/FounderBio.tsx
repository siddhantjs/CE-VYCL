"use client";

import Image from "next/image";
import { RYAN_HEADSHOT_URL } from "@/lib/site";
import { FadeIn, Stagger, motion, staggerItem } from "../motion";

const credentials = [
  "Co-founder, KEYVO   the subscription industry's only dealer and lender underwriting platform",
  "Exclusive US Licensing Partner   Tomorrow's Journey / JRNY",
  "Structured institutional lending facility   Westlake Financial / CULA",
  "Former VP of Operations   AutoSource Hawaii",
  "Director of Strategic Planning, Carousel, LLC",
];

export function FounderBio() {
  return (
    <section className="px-5 pb-16 sm:px-8 sm:pb-20">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-vycl-cream-muted lg:sticky lg:top-24 lg:aspect-auto lg:min-h-[560px]">
          <motion.div
            className="relative h-full min-h-[360px] w-full lg:min-h-[560px]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Image
              src={RYAN_HEADSHOT_URL}
              alt="Ryan Yamauchi   vehicle subscription consultant, founder of VYCL, co-founder of KEYVO"
              fill
              priority
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

          <div className="mt-6 space-y-5 text-base leading-relaxed text-vycl-text-muted">
            <p>
              Ryan Yamauchi is a vehicle subscription expert, Automotive SaaS
              Developer, and Dealer Group Strategic Advisor who has spent over a
              decade building, operating, and scaling vehicle subscription
              programs. From his roots cultivating the country&apos;s first Direct
              to Consumer Vehicle Subscription business, he developed a
              specialized skill set and nurtured a vast network of industry
              professionals that enable him to support entities of all sizes,
              across multiple channels to enhance their enterprise through
              Vehicle Subscription. Using his 6 Pillars framework, he bridges
              the gap between Dealers, Institutional Lenders, Private Equity,
              Manufacturers, Insurers and Technology, Marketing and Consumers.
              From Operations to Strategic Planning, Software Development to
              designing Lending Facilities, Ryan is validated across the entire
              ecosystem of Vehicle Subscription and has guided over 1,000 vehicle
              deployments via subscription and counting.
            </p>
          </div>

          <div className="mt-8">
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
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

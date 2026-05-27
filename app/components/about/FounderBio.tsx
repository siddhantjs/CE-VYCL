"use client";

import Image from "next/image";
import { RYAN_HEADSHOT_URL } from "@/lib/site";
import { FadeIn, Stagger, motion, staggerItem } from "../motion";

const credentials = [
  "KEYVO co-founder",
  "TJ exclusive",
  "Structured finance",
  "Dealer BD national",
  "Fleet ops",
  "Captive insurance",
  "AVIS/Budget wholesale",
  "PLUG EV",
  "MiaVita digital partner",
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
              alt="Ryan Yamauchi, Founder of VYCL"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm font-semibold uppercase tracking-widest text-vycl-text-muted">
            Ryan Yamauchi
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-vycl-dark sm:text-4xl">
            Operator, not advisor
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-vycl-text-muted">
            <p>
              Ryan Yamauchi has spent more than a decade building, operating,
              and scaling vehicle subscription programs — from Hawaii&apos;s
              boutique market to national platform development, institutional
              lending, and multi-rooftop dealer strategy.
            </p>
            <p>
              He served as VP of Operations at AutoSource Hawaii and Director
              of Strategic Planning at the nation&apos;s first
              direct-to-consumer vehicle subscription company. Today he is
              founder of VYCL, co-founder of KEYVO and NYP LLC, and exclusive
              Head of Sales, North America for Tomorrow&apos;s Journey.
            </p>
            <p>
              His Six Pillars framework has guided 800+ deployments. Programs
              remain active in Hawaii, with national expansion underway.
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

"use client";

import Image from "next/image";
import Link from "next/link";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ArrowUpRight } from "./icons";
import { FadeIn, Stagger, motion, staggerItem } from "./motion";

const stats = [
  {
    icon: "⚡",
    value: 45,
    prefix: "",
    suffix: "",
    label: "Days from concept to live",
  },
  {
    icon: "◎",
    value: 0,
    prefix: "$",
    suffix: "",
    label: "Incremental headcount required",
  },
  {
    icon: "◆",
    text: "Secured",
    label: "Institutional lending facility (Westlake / CULA)",
  },
] as const;

const stack = [
  "Tomorrow's Journey / JRNY",
  "Axle",
  "Westlake Financial",
  "CULA",
];

export function FlexRideCaseStudy() {
  return (
    <section
      id="flexride"
      className="bg-vycl-cream px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <motion.article
            className="overflow-hidden rounded-3xl border border-vycl-border bg-white shadow-sm"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col p-8 sm:p-10 lg:p-12">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F6E56]/10 text-lg text-[#0F6E56]">
                  ▣
                </span>
                <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-[#0F6E56]">
                  Proof of Concept
                </p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-vycl-dark sm:text-4xl">
                  FlexRide by King
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-vycl-text-muted sm:text-base">
                  <p>
                    FlexRide by King is Hawaii&apos;s most active vehicle
                    subscription program, built by VYCL and operating across King
                    Windward Nissan&apos;s rooftops. Launched in under 45 days
                    with zero incremental headcount, the program runs on
                    Tomorrow&apos;s Journey&apos;s JRNY platform, insurance
                    compliance managed through Axle, and is backed by a lending
                    facility secured through Westlake Financial and CULA.
                  </p>
                  <p>
                    It is the clearest proof that the Six Pillars framework
                    works — not in theory, but in the market.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {stack.map((partner) => (
                    <span
                      key={partner}
                      className="rounded-full border border-vycl-border bg-vycl-cream px-3 py-1.5 text-xs font-medium text-vycl-dark"
                    >
                      {partner}
                    </span>
                  ))}
                </div>

                <motion.div
                  className="mt-8"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="https://flexride-by-king.webflow.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-fit max-w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-vycl-lime px-6 py-3 text-sm font-semibold text-vycl-dark shadow-sm transition-[box-shadow,background-color] hover:bg-vycl-lime-muted hover:shadow-md"
                  >
                    <span>Visit FlexRide by King</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
              </div>

              <div className="relative min-h-[260px] border-t border-vycl-border lg:min-h-full lg:border-t-0 lg:border-l">
                <Image
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80"
                  alt="FlexRide by King — vehicle subscription program built by VYCL at King Windward Nissan, Hawaii"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vycl-dark/80 via-vycl-dark/20 to-transparent lg:bg-gradient-to-l lg:from-vycl-dark/60 lg:via-transparent lg:to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <span className="inline-flex w-fit items-center rounded-full bg-[#0F6E56] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Live in Hawaii
                  </span>
                  <p className="mt-2 max-w-xs text-sm font-semibold leading-snug text-white">
                    King Windward Nissan · King Auto Group rooftops
                  </p>
                </div>
              </div>
            </div>

            <Stagger className="grid gap-4 border-t border-vycl-border bg-vycl-cream-muted/60 p-6 sm:grid-cols-3 sm:p-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  className="flex flex-col rounded-2xl border border-vycl-border bg-white p-5 shadow-sm"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0F6E56]/10 text-base text-[#0F6E56]">
                    {stat.icon}
                  </span>
                  <p className="mt-3 text-3xl font-extrabold tracking-tight text-vycl-dark">
                    {"text" in stat ? (
                      stat.text
                    ) : (
                      <>
                        {stat.prefix}
                        <NumberTicker
                          value={stat.value}
                          delay={index * 0.15}
                          className="text-vycl-dark dark:text-vycl-dark"
                        />
                        {stat.suffix}
                      </>
                    )}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-vycl-text-muted">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </Stagger>
          </motion.article>
        </FadeIn>
      </div>
    </section>
  );
}

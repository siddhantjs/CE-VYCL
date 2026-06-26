"use client";

import Image from "next/image";
import { FadeIn, motion } from "../motion";

const flexRideDetails = [
  { label: "Platform", value: "Tomorrow's Journey / JRNY" },
  { label: "Insurance verification", value: "Axle" },
  { label: "Lender", value: "Private Placement" },
  {
    label: "Operating entity",
    value: "Flexride by King",
  },
  {
    label: "Rooftops",
    value: "2",
  },
  {
    label: "Launch",
    value: "45 days from concept to live · Zero incremental headcount",
  },
];

export function ProgramBlocks() {
  return (
    <section className="px-5 pb-12 sm:px-8 sm:pb-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <FadeIn>
          <motion.article
            className="overflow-hidden rounded-3xl border border-vycl-border bg-white shadow-sm"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col p-8 sm:p-10 lg:p-12">
                <div className="relative h-14 w-48 sm:h-16 sm:w-56">
                  <Image
                    src="/flex-ride-logo.avif"
                    alt="FlexRide by King logo   Hawaii vehicle subscription program operated by VYCL and King Auto Group"
                    fill
                    className="object-contain object-left"
                    sizes="(max-width: 640px) 192px, 224px"
                    priority
                  />
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="inline-flex w-fit items-center rounded-full bg-[#0F6E56] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Featured, Live
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-widest text-vycl-text-muted">
                    Hawaii
                  </span>
                </div>

                <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-vycl-dark sm:text-3xl">
                  A Franchise Dealer Success Story
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-vycl-text-muted sm:text-base">
                  Leveraging Subscription to monetize aged inventory and loaner
                  fleet assets, proof that there is an untapped revenue stream
                  in the traditional Dealer model.
                </p>

                <dl className="mt-8 space-y-3 rounded-2xl border border-vycl-border bg-vycl-cream-muted/50 p-5">
                  {flexRideDetails.map((row) => (
                    <div
                      key={row.label}
                      className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4"
                    >
                      <dt className="text-xs font-semibold uppercase tracking-wider text-[#0F6E56]">
                        {row.label}
                      </dt>
                      <dd className="text-sm font-medium text-vycl-dark">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="relative min-h-[280px] border-t border-vycl-border lg:min-h-full lg:border-t-0 lg:border-l">
                <Image
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80"
                  alt="FlexRide by King   vehicle subscription program at King Auto Group, Hawaii"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vycl-dark/70 via-vycl-dark/15 to-transparent lg:bg-gradient-to-l lg:from-vycl-dark/50 lg:via-transparent lg:to-transparent" />
              </div>
            </div>
          </motion.article>
        </FadeIn>

        <FadeIn>
          <motion.article
            className="rounded-3xl border border-dashed border-vycl-border/80 bg-vycl-cream-muted/40 p-8 sm:p-10"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-[#0F6E56] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                Coming Soon
              </span>
            </div>
            <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-vycl-dark sm:text-3xl">
              Central Florida – Northern California – Washington State
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-vycl-text-muted sm:text-base">
              VYCL is actively developing Subscription Programs in Central
              Florida, Northern California and Washington State. With fleet sizes
              as small as 5 units to multi-rooftop Dealer Groups that are
              preparing to deploy 100&apos;s of vehicles on subscription within
              months of launch.
            </p>
          </motion.article>
        </FadeIn>
      </div>
    </section>
  );
}

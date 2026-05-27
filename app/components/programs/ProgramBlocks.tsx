"use client";

import Image from "next/image";
import Link from "next/link";
import { CircleDot, ShieldCheck, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatedStat } from "@/components/ui/animated-stat";
import { ArrowUpRight } from "../icons";
import { FadeIn, Stagger, motion, staggerItem } from "../motion";

const FLEXRIDE_URL = "https://flexride-by-king.webflow.io";

type FlexRideStat =
  | {
      icon: LucideIcon;
      kind: "animated";
      value: number;
      prefix: string;
      suffix: string;
      label: string;
    }
  | { icon: LucideIcon; kind: "static"; display: string; label: string };

const flexRideStats: FlexRideStat[] = [
  {
    icon: Zap,
    kind: "animated",
    value: 45,
    prefix: "",
    suffix: "",
    label: "Days from concept to live",
  },
  {
    icon: CircleDot,
    kind: "static",
    display: "$0",
    label: "Incremental headcount",
  },
  {
    icon: ShieldCheck,
    kind: "static",
    display: "Secured",
    label: "Institutional lending facility",
  },
];

const flexRideStack = [
  { label: "Platform", value: "JRNY (Tomorrow's Journey)" },
  { label: "Insurance", value: "Axle" },
  { label: "Lender", value: "Westlake Financial + CULA" },
  {
    label: "Operating entity",
    value: "NYP LLC (Niethammer Yamauchi Platform)",
  },
];

export function ProgramBlocks() {
  return (
    <section className="px-5 pb-20 sm:px-8 sm:pb-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <FadeIn>
          <motion.article
            className="overflow-hidden rounded-3xl border border-vycl-border bg-white shadow-sm"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col p-8 sm:p-10 lg:p-12">
                <Image
                  src="/flexride-logo.svg"
                  alt="FlexRide by King"
                  width={240}
                  height={54}
                  className="h-auto w-48 sm:w-56"
                  priority
                />
                <span className="mt-6 inline-flex w-fit items-center rounded-full bg-[#0F6E56] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Hawaii
                </span>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-vycl-text-muted sm:text-base">
                  <p>
                    FlexRide by King is Hawaii&apos;s most active vehicle
                    subscription program, built by VYCL in partnership with NYP
                    LLC across King Windward Nissan rooftops. JRNY (Tomorrow&apos;s
                    Journey) powers the platform; Axle handles insurance
                    verification; Westlake Financial and CULA back the lending
                    facility. NYP LLC operates the program day to day.
                  </p>
                  <p>
                    The program went live in 45 days with zero incremental
                    headcount, with institutional lending secured before launch.
                    That proves dealer subscription can launch without new staff
                    or speculative financing.
                  </p>
                  <p className="font-medium text-vycl-dark">
                    It is live proof that VYCL builds and operates subscription
                    programs—and a model for national expansion on additional
                    rooftops.
                  </p>
                </div>

                <dl className="mt-8 space-y-3 rounded-2xl border border-vycl-border bg-vycl-cream-muted/50 p-5">
                  {flexRideStack.map((row) => (
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

                <motion.div
                  className="mt-8"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={FLEXRIDE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-fit max-w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-vycl-lime px-6 py-3 text-sm font-semibold text-vycl-dark shadow-sm transition-[box-shadow,background-color] hover:bg-vycl-lime-muted hover:shadow-md"
                  >
                    <span>Visit FlexRide by King</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
              </div>

              <div className="relative min-h-[280px] border-t border-vycl-border lg:min-h-full lg:border-t-0 lg:border-l">
                <Image
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80"
                  alt="FlexRide by King — vehicle subscription program built by VYCL at King Windward Nissan, Hawaii"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vycl-dark/70 via-vycl-dark/15 to-transparent lg:bg-gradient-to-l lg:from-vycl-dark/50 lg:via-transparent lg:to-transparent" />
              </div>
            </div>

            <Stagger className="grid gap-4 border-t border-vycl-border bg-vycl-cream-muted/60 p-6 sm:grid-cols-3 sm:p-8">
              {flexRideStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  className="flex flex-col rounded-2xl border border-vycl-border bg-white p-5 shadow-sm"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0F6E56]/10 text-[#0F6E56]">
                    <stat.icon className="h-4 w-4" aria-hidden />
                  </span>
                  <p className="mt-3 text-3xl font-extrabold tracking-tight text-vycl-dark">
                    {stat.kind === "static" ? (
                      stat.display
                    ) : (
                      <AnimatedStat
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        duration={1.4 + index * 0.1}
                      />
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
              <span className="text-sm font-semibold uppercase tracking-widest text-vycl-text-muted">
                Central Florida
              </span>
              <span className="rounded-full border border-vycl-border bg-white/80 px-3 py-1 text-xs font-medium text-vycl-text-muted">
                In Development
              </span>
            </div>
            <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-vycl-dark/70 sm:text-3xl">
              Next market engagement
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-vycl-text-muted sm:text-base">
              VYCL is actively developing its next vehicle subscription market
              engagement in Central Florida. Details will follow as the program
              moves from development to launch—signaling national expansion
              beyond Hawaii.
            </p>
          </motion.article>
        </FadeIn>
      </div>
    </section>
  );
}

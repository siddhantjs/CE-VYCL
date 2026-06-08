"use client";

import Image from "next/image";
import Link from "next/link";
import { CircleDot, LayoutGrid,Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatedStat } from "@/components/ui/animated-stat";
import { FLEXRIDE_BY_KING_CASE_STUDY } from "@/lib/case-studies/flexride-by-king";
import { ArrowUpRight } from "./icons";
import { FadeIn, Stagger, motion, staggerItem } from "./motion";

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

const stats: FlexRideStat[] = [
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
    label: "Incremental headcount required",
  },
];


export function   FlexRideCaseStudy() {
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
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F6E56]/10 text-[#0F6E56]">
                  <LayoutGrid className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-[#0F6E56]">
                  Case Study
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
                    works   not in theory, but in the market.
                  </p>
                </div>

                <motion.div
                  className="mt-8"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={FLEXRIDE_BY_KING_CASE_STUDY.path}
                    className="group inline-flex w-fit max-w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-vycl-lime px-6 py-3 text-sm font-semibold text-vycl-dark shadow-sm transition-[box-shadow,background-color] hover:bg-vycl-lime-muted hover:shadow-md"
                  >
                    <span>Visit case study of FlexRide by King</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
              </div>

              <div className="relative min-h-[260px] border-t border-vycl-border lg:min-h-full lg:border-t-0 lg:border-l">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80"
                  alt="FlexRide by King   vehicle subscription program built by VYCL at King Windward Nissan, Hawaii"
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

            <Stagger className="grid gap-4 border-t border-vycl-border bg-vycl-cream-muted/60 p-6 sm:grid-cols-2 sm:p-8 mx-auto">
              {stats.map((stat, index) => (
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
      </div>
    </section>
  );
}

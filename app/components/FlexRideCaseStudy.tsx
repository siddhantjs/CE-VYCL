"use client";

import Image from "next/image";
import Link from "next/link";
import { animate, useReducedMotion } from "framer-motion";
import { CircleDot, LayoutGrid, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedStat } from "@/components/ui/animated-stat";
import {
  FLEXRIDE_BY_KING_CASE_STUDY,
} from "@/lib/case-studies/flexride-by-king";
import { useInViewOnce } from "@/lib/use-in-view-once";
import { ArrowUpRight } from "./icons";
import { FadeIn, Stagger, motion, staggerItem } from "./motion";

const { roi, tierRows, tierTotal } = FLEXRIDE_BY_KING_CASE_STUDY;

const launchChartHeights = [38, 62, 48, 78, 55, 88];

const tierBarHeights = tierRows.map((row) => {
  const revenue = Number.parseInt(row.moRevenue.replace(/[$,]/g, ""), 10);
  const maxRevenue = Number.parseInt(
    tierRows[0].moRevenue.replace(/[$,]/g, ""),
    10,
  );
  return Math.round((revenue / maxRevenue) * 100);
});

function LaunchChartBars({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="mt-auto pt-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-vycl-text-muted">
        Launch velocity
      </p>
      <div className="mt-3 flex h-10 items-end gap-1.5">
        {launchChartHeights.map((h, j) => (
          <motion.span
            key={j}
            className="w-2.5 rounded-sm bg-vycl-lime"
            initial={{ height: 0 }}
            animate={
              reduce
                ? { height: h * 0.32 }
                : { height: [0, h * 0.32, h * 0.42, h * 0.32] }
            }
            transition={
              reduce
                ? {
                    delay: 0.3 + j * 0.06,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }
                : {
                    duration: 2.8 + j * 0.15,
                    times: [0, 0.28, 0.62, 1],
                    repeat: Infinity,
                    repeatDelay: 0.6,
                    delay: 0.35 + j * 0.08,
                    ease: "easeInOut",
                  }
            }
          />
        ))}
      </div>
    </div>
  );
}

function AnimatedRoiValue({
  value,
  suffix,
  reduce,
}: {
  value: number;
  suffix: string;
  reduce: boolean | null;
}) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>({
    rootMargin: "-20px 0px",
    threshold: 0.2,
  });
  const [display, setDisplay] = useState("0.0");

  useEffect(() => {
    if (reduce || !inView) return;

    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(1)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  const shown = reduce ? value.toFixed(1) : display;

  return (
    <span ref={ref} className="tabular-nums">
      {shown}
      <span className="text-vycl-lime">{suffix}</span>
    </span>
  );
}

function TierRevenueBars({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="mt-4 flex h-8 items-end gap-1">
      {tierBarHeights.map((h, j) => (
        <motion.span
          key={tierRows[j].priceRange}
          className="flex-1 rounded-sm bg-vycl-lime/80"
          initial={{ height: 0 }}
          animate={
            reduce
              ? { height: `${h * 0.28}px` }
              : { height: [`0px`, `${h * 0.28}px`, `${h * 0.36}px`, `${h * 0.28}px`] }
          }
          transition={
            reduce
              ? {
                  delay: 0.4 + j * 0.08,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }
              : {
                  duration: 2.6 + j * 0.18,
                  times: [0, 0.28, 0.62, 1],
                  repeat: Infinity,
                  repeatDelay: 0.7,
                  delay: 0.45 + j * 0.1,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </div>
  );
}

export function FlexRideCaseStudy() {
  const reduce = useReducedMotion();

  return (
    <section
      id="flexride"
      className="bg-vycl-cream px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <motion.article
            className="w-full overflow-hidden rounded-3xl border border-vycl-border bg-white shadow-sm"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <div className="grid min-w-0 lg:grid-cols-2">
              <div className="flex min-w-0 flex-col p-6 sm:p-10 lg:p-12">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F6E56]/10 text-[#0F6E56]">
                  <LayoutGrid className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-[#0F6E56]">
                  Case Study
                </p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-vycl-dark sm:text-4xl">
                  FlexRide by King
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-vycl-text-muted sm:text-base">
                  FlexRide by King is Hawaii&apos;s newest vehicle subscription
                  program. Launched in under 45 days with zero incremental
                  headcount, the program runs on Tomorrow&apos;s Journey&apos;s
                  JRNY platform, insurance compliance managed through Axle, and
                  is backed by a lending facility designed specifically for
                  the needs of the Dealership.
                </p>

                <motion.div
                  className="mt-8"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={FLEXRIDE_BY_KING_CASE_STUDY.path}
                    className="group inline-flex w-full max-w-full items-center justify-center gap-2 rounded-full bg-vycl-lime px-6 py-3 text-center text-sm font-semibold text-vycl-dark shadow-sm transition-[box-shadow,background-color] hover:bg-vycl-lime-muted hover:shadow-md sm:w-fit"
                  >
                    <span>Visit case study of FlexRide by King</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
              </div>

              <div className="relative min-h-[260px] min-w-0 border-t border-vycl-border lg:min-h-full lg:border-t-0 lg:border-l">
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

            <Stagger className="mx-auto grid min-w-0 gap-4 border-t border-vycl-border bg-vycl-cream-muted/60 p-6 sm:grid-cols-2 sm:p-8">
              <motion.div
                variants={staggerItem}
                className="flex min-h-[280px] min-w-0 flex-col rounded-2xl border border-vycl-border bg-white p-5 shadow-sm sm:min-h-[320px]"
                whileHover={
                  reduce
                    ? undefined
                    : { y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } }
                }
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0F6E56]/10 text-[#0F6E56]">
                      <Zap className="h-4 w-4" aria-hidden />
                    </span>
                    <p className="mt-3 text-3xl font-extrabold tracking-tight text-vycl-dark">
                      <AnimatedStat value={45} duration={1.4} />
                    </p>
                    <p className="mt-1 text-sm leading-snug text-vycl-text-muted">
                      Days from concept to live
                    </p>
                  </div>
                  <div className="flex-1 border-l border-vycl-border pl-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0F6E56]/10 text-[#0F6E56]">
                      <CircleDot className="h-4 w-4" aria-hidden />
                    </span>
                    <p className="mt-3 text-3xl font-extrabold tracking-tight text-vycl-dark">
                      $0
                    </p>
                    <p className="mt-1 text-sm leading-snug text-vycl-text-muted">
                      Incremental headcount required
                    </p>
                  </div>
                </div>
                <LaunchChartBars reduce={reduce} />
              </motion.div>

              <motion.div
                variants={staggerItem}
                className="relative flex min-h-[280px] min-w-0 flex-col overflow-hidden rounded-2xl bg-vycl-dark-card p-5 text-white shadow-sm sm:min-h-[320px]"
                whileHover={
                  reduce
                    ? undefined
                    : { y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } }
                }
              >
                <motion.div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-vycl-lime/15 blur-2xl"
                  animate={
                    reduce
                      ? undefined
                      : { scale: [1, 1.35, 1], opacity: [0.35, 0.65, 0.35] }
                  }
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <p className="relative text-xs font-semibold uppercase tracking-widest text-vycl-lime">
                  {roi.label}
                </p>
                <p className="relative mt-1 text-xs uppercase tracking-wide text-white/60">
                  {roi.subtitle}
                </p>
                <p className="relative mt-3 text-4xl font-extrabold tracking-tight">
                  <AnimatedRoiValue
                    value={Number.parseFloat(roi.value)}
                    suffix={roi.suffix}
                    reduce={reduce}
                  />
                </p>
                <p className="relative mt-2 text-xs italic leading-relaxed text-white/55">
                  {roi.footnote}
                </p>

                <TierRevenueBars reduce={reduce} />

                <div className="relative mt-4 flex-1 overflow-x-auto">
                  <table className="w-full min-w-[240px] text-left text-xs">
                    <thead>
                      <tr className="border-b border-white/15 text-white/55">
                        <th className="pb-2 pr-2 font-semibold uppercase tracking-wide">
                          Tier
                        </th>
                        <th className="pb-2 pr-2 font-semibold uppercase tracking-wide">
                          Units
                        </th>
                        <th className="pb-2 font-semibold uppercase tracking-wide">
                          Mo. Rev.
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tierRows.map((row, index) => (
                        <motion.tr
                          key={row.priceRange}
                          className="border-b border-white/10 last:border-0"
                          initial={reduce ? false : { opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 + index * 0.08, duration: 0.35 }}
                        >
                          <td className="py-2 pr-2 font-medium text-white/85">
                            {row.priceRange.replace(" / mo.", "")}
                          </td>
                          <td className="py-2 pr-2 tabular-nums text-white/75">
                            {row.units}
                          </td>
                          <td className="py-2 tabular-nums font-semibold text-white">
                            {row.moRevenue}
                          </td>
                        </motion.tr>
                      ))}
                      <motion.tr
                        className="text-vycl-lime"
                        initial={reduce ? false : { opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.35 }}
                      >
                        <td className="pt-2 pr-2 font-bold uppercase tracking-wide">
                          Total
                        </td>
                        <td className="pt-2 pr-2 tabular-nums font-bold">
                          {tierTotal.units}
                        </td>
                        <td className="pt-2 tabular-nums font-bold">
                          {tierTotal.moRevenue}
                        </td>
                      </motion.tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </Stagger>
          </motion.article>
        </FadeIn>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { animate, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInViewOnce } from "@/lib/use-in-view-once";
import { Highlighter } from "@/components/ui/highlighter";
import { ArrowUpRight, Star } from "./icons";
import { FadeIn, Stagger, motion, staggerItem } from "./motion";

const floatingIcons = ["↗", "⚙", "◈", "◎"];

const chartHeights = [40, 65, 45, 80, 55, 90];

const statCardShell =
  "relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl sm:min-h-[240px]";
const statCardBase = `${statCardShell} p-6`;

const statCardLabel = "text-sm leading-snug";
const statCardValue = "text-3xl font-extrabold leading-none";
const statCardEyebrow =
  "text-xs font-semibold uppercase tracking-widest text-vycl-text-muted";

const statCards = [
  {
    type: "image" as const,
    className: statCardShell,
  },
  {
    type: "dark" as const,
    stat: 50,
    label: "Esteemed clients and partners across mobility",
    className: `${statCardBase} bg-vycl-dark text-white`,
  },
  {
    type: "chart" as const,
    stat: 10,
    eyebrow: "Programs Launched",
    label: "Decade of subscription expertise",
    className: `${statCardBase} border border-vycl-border bg-white transition-colors group-hover:border-vycl-lime/50`,
  },
  {
    type: "lime" as const,
    stat: 10,
    label: "Years of dedicated service in vehicle subscription",
    className: `${statCardBase} bg-vycl-lime text-vycl-dark`,
  },
  {
    type: "cta" as const,
    label: "Achieve optimal efficiency and scale recurring mobility revenue",
    href: "#pillars",
    className: `${statCardBase} bg-vycl-dark text-white`,
  },
];

function AnimatedCounter({
  target,
  suffix = "+",
}: {
  target: number;
  suffix?: string;
}) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>({
    rootMargin: "-20px 0px",
    threshold: 0.2,
  });
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduce || !inView) return;

    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => setCount(Math.round(value)),
    });
    return () => controls.stop();
  }, [inView, target, reduce]);

  const displayCount = reduce ? target : count;

  return (
    <span ref={ref}>
      {displayCount}
      {suffix}
    </span>
  );
}

function ImageStatCard({ reduce }: { reduce: boolean | null }) {
  return (
    <>
      <motion.div
        className="absolute inset-0"
        animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80"
          alt="Modern vehicle in showroom"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 50vw, 20vw"
          priority
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-vycl-dark/85 via-vycl-dark/45 to-vycl-dark/25"
        initial={{ opacity: 0.85 }}
        whileHover={{ opacity: 0.95 }}
        transition={{ duration: 0.35 }}
      />
      <motion.p
        className={`relative z-10 mt-auto px-6 pb-6 ${statCardEyebrow} text-white/90`}
        initial={reduce ? false : { opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        Mobility in motion
      </motion.p>
    </>
  );
}

function DarkStatCard({
  stat,
  label,
  reduce,
}: {
  stat: number;
  label: string;
  reduce: boolean | null;
}) {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-vycl-lime/15 blur-2xl"
        animate={
          reduce
            ? undefined
            : { scale: [1, 1.35, 1], opacity: [0.4, 0.7, 0.4] }
        }
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative min-h-[1.25rem]" aria-hidden />
      <div className="relative flex flex-1 flex-col justify-center">
        <p className={statCardValue}>
          <AnimatedCounter target={stat} />
        </p>
      </div>
      <p
        className={`relative ${statCardLabel} text-white/80 transition-colors group-hover:text-white`}
      >
        {label}
      </p>
    </>
  );
}

function ChartStatCard({
  stat,
  eyebrow,
  label,
  reduce,
}: {
  stat: number;
  eyebrow: string;
  label: string;
  reduce: boolean | null;
}) {
  return (
    <>
      <p className={statCardEyebrow}>{eyebrow}</p>
      <div className="flex flex-1 flex-col justify-center">
        <p className={`${statCardValue} text-vycl-dark`}>
          <AnimatedCounter target={stat} />
        </p>
        <div className="mt-3 flex h-8 items-end gap-1">
          {chartHeights.map((h, j) => (
            <motion.span
              key={j}
              className="w-2 rounded-sm bg-vycl-lime"
              initial={{ height: 0 }}
              animate={
                reduce
                  ? { height: h * 0.28 }
                  : { height: [0, h * 0.28, h * 0.38, h * 0.28] }
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
      <p className={`${statCardLabel} text-vycl-text-muted`}>{label}</p>
    </>
  );
}

function LimeStatCard({
  stat,
  label,
  reduce,
}: {
  stat: number;
  label: string;
  reduce: boolean | null;
}) {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/25 blur-2xl"
        animate={
          reduce
            ? undefined
            : { x: [0, 12, 0], y: [0, -8, 0], scale: [1, 1.15, 1] }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative min-h-[1.25rem]" aria-hidden />
      <div className="relative flex flex-1 flex-col justify-center">
        <p className={statCardValue}>
          <AnimatedCounter target={stat} />
        </p>
      </div>
      <p
        className={`relative ${statCardLabel} font-medium transition-transform duration-300 group-hover:translate-x-0.5`}
      >
        {label}
      </p>
    </>
  );
}

function CtaStatCard({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="relative flex h-full min-h-[inherit] flex-col justify-between outline-none focus-visible:ring-2 focus-visible:ring-vycl-lime focus-visible:ring-offset-2 focus-visible:ring-offset-vycl-dark"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-vycl-lime">
        <ArrowUpRight className="h-5 w-5 text-vycl-lime transition-colors duration-300 group-hover:text-vycl-dark" />
      </span>
      <p
        className={`relative ${statCardLabel} font-semibold text-white/90 transition-colors duration-300 group-hover:text-white`}
      >
        {label}
      </p>
    </Link>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-16 pt-12 sm:px-8 sm:pt-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingIcons.map((icon, i) => (
          <motion.span
            key={icon}
            className="absolute flex h-10 w-10 items-center justify-center rounded-full border border-vycl-border bg-white text-sm text-vycl-text-muted shadow-sm"
            style={{
              top: `${18 + i * 12}%`,
              left: i % 2 === 0 ? `${8 + i * 4}%` : undefined,
              right: i % 2 === 1 ? `${6 + i * 3}%` : undefined,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={
              reduce
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, scale: 1, y: [0, -8, 0] }
            }
            transition={
              reduce
                ? { delay: 0.4 + i * 0.1, duration: 0.4 }
                : {
                    opacity: { delay: 0.4 + i * 0.1, duration: 0.4 },
                    scale: { delay: 0.4 + i * 0.1, duration: 0.4 },
                    y: {
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
            }
          >
            {icon}
          </motion.span>
        ))}
      </div>

      <FadeIn className="relative mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-vycl-text-muted">
          Vehicle Subscription Consultancy
        </p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-vycl-dark sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
          The only consultancy built for the subscription economy.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-vycl-text-muted sm:text-lg">
          From first program to 100+ rooftops   VYCL connects the dots across
          inventory, lending, technology, marketing, insurance, and operations so
          your program actually launches and scales.
        </p>

        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="#contact"
              className="inline-flex min-w-[160px] items-center justify-center rounded-full bg-vycl-dark px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Let&apos;s Connect
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="#pillars"
              className="inline-flex min-w-[160px] items-center justify-center rounded-full border border-vycl-border bg-white px-7 py-3.5 text-sm font-semibold text-vycl-dark transition-colors hover:bg-vycl-cream-muted"
            >
              Explore the Six Pillars
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-base text-vycl-text-muted sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Highlighter action="highlight" color="#d4f54a" isView>
            <span className="font-bold text-vycl-dark">5.0</span>
          </Highlighter>
          <span className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.06 }}
              >
                <Star className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.span>
            ))}
          </span>
          <span>
            from{" "}
            <Highlighter action="underline" color="#0F6E56" isView>
              industry leaders
            </Highlighter>
          </span>
        </motion.div>
      </FadeIn>

      <Stagger className="mx-auto mt-14 grid max-w-6xl auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {statCards.map((card, i) => {
          const isCta = card.type === "cta";
          return (
          <motion.div
            key={i}
            variants={staggerItem}
            className={`group flex shadow-[0_8px_30px_rgba(15,36,25,0.06)] transition-[box-shadow,background-color] duration-300 ${
              isCta
                ? "hover:bg-vycl-dark-elevated hover:shadow-[0_12px_32px_rgba(15,36,25,0.14)]"
                : "hover:shadow-[0_16px_40px_rgba(15,36,25,0.12)]"
            } ${card.className}`}
            whileHover={
              reduce || isCta
                ? undefined
                : { y: -6, transition: { type: "spring", stiffness: 420, damping: 22 } }
            }
          >
            {card.type === "image" && <ImageStatCard reduce={reduce} />}
            {card.type === "dark" && (
              <DarkStatCard stat={card.stat} label={card.label} reduce={reduce} />
            )}
            {card.type === "chart" && (
              <ChartStatCard
                stat={card.stat}
                eyebrow={card.eyebrow}
                label={card.label}
                reduce={reduce}
              />
            )}
            {card.type === "lime" && (
              <LimeStatCard stat={card.stat} label={card.label} reduce={reduce} />
            )}
            {card.type === "cta" && (
              <CtaStatCard label={card.label} href={card.href} />
            )}
          </motion.div>
          );
        })}
      </Stagger>
    </section>
  );
}

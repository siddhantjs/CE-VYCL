"use client";

import Image from "next/image";
import Link from "next/link";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Star } from "./icons";
import { FadeIn, Stagger, motion, staggerItem } from "./motion";

const floatingIcons = ["↗", "⚙", "◈", "◎"];

const chartHeights = [40, 65, 45, 80, 55, 90];

const statCards = [
  {
    type: "image" as const,
    className:
      "relative min-h-[220px] overflow-hidden rounded-3xl sm:col-span-1 lg:row-span-2 lg:min-h-[280px]",
  },
  {
    type: "dark" as const,
    stat: 50,
    label: "Esteemed clients and partners across mobility",
    className:
      "relative flex flex-col justify-center overflow-hidden rounded-3xl bg-vycl-dark p-6 text-white sm:col-span-1",
  },
  {
    type: "chart" as const,
    stat: 10,
    label: "Decade of subscription expertise",
    className:
      "rounded-3xl border border-vycl-border bg-white p-6 transition-colors group-hover:border-vycl-lime/50 sm:col-span-1",
  },
  {
    type: "lime" as const,
    stat: 10,
    label: "Years of dedicated service in vehicle subscription",
    className:
      "relative flex flex-col justify-center overflow-hidden rounded-3xl bg-vycl-lime p-6 text-vycl-dark sm:col-span-1",
  },
  {
    type: "cta" as const,
    label: "Achieve optimal efficiency and scale recurring mobility revenue",
    href: "#services",
    className:
      "relative flex flex-col justify-between overflow-hidden rounded-3xl bg-vycl-dark p-6 text-white sm:col-span-2 lg:col-span-1",
  },
];

function AnimatedCounter({
  target,
  suffix = "+",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const reduce = useReducedMotion();
  const [count, setCount] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setCount(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => setCount(Math.round(value)),
    });
    return () => controls.stop();
  }, [inView, target, reduce]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function ImageStatCard({ reduce }: { reduce: boolean | null }) {
  return (
    <>
      <motion.div
        className="relative h-full min-h-[220px] w-full lg:min-h-[280px]"
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
        className="absolute inset-0 bg-gradient-to-t from-vycl-dark/50 via-transparent to-transparent"
        initial={{ opacity: 0.5 }}
        whileHover={{ opacity: 0.85 }}
        transition={{ duration: 0.35 }}
      />
      <motion.p
        className="absolute bottom-4 left-4 right-4 text-xs font-semibold uppercase tracking-widest text-white/90"
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
      <p className="relative text-3xl font-extrabold leading-none">
        <AnimatedCounter target={stat} />
      </p>
      <p className="relative mt-2 text-sm leading-snug text-white/80 transition-colors group-hover:text-white">
        {label}
      </p>
    </>
  );
}

function ChartStatCard({
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
      <p className="text-xs font-medium uppercase tracking-wide text-vycl-text-muted">
        Programs Launched
      </p>
      <p className="mt-2 text-3xl font-extrabold text-vycl-dark">
        <AnimatedCounter target={stat} />
      </p>
      <div className="mt-4 flex h-10 items-end gap-1">
        {chartHeights.map((h, j) => (
          <motion.span
            key={j}
            className="w-2 rounded-sm bg-vycl-lime"
            initial={{ height: 0 }}
            animate={
              reduce
                ? { height: h * 0.35 }
                : { height: [0, h * 0.35, h * 0.48, h * 0.35] }
            }
            transition={
              reduce
                ? { delay: 0.3 + j * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }
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
      <p className="mt-2 text-xs text-vycl-text-muted">{label}</p>
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
      <p className="relative text-3xl font-extrabold leading-none">
        <AnimatedCounter target={stat} />
      </p>
      <p className="relative mt-2 text-sm font-medium leading-snug transition-transform duration-300 group-hover:translate-x-0.5">
        {label}
      </p>
    </>
  );
}

function CtaStatCard({
  label,
  href,
  reduce,
}: {
  label: string;
  href: string;
  reduce: boolean | null;
}) {
  return (
    <Link href={href} className="relative flex h-full flex-col justify-between">
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-vycl-lime/0 to-vycl-lime/0 transition-colors duration-500 group-hover:from-vycl-lime/10 group-hover:to-transparent"
        aria-hidden
      />
      <motion.span
        className="relative inline-flex"
        animate={reduce ? undefined : { y: [0, -3, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ x: 4, y: -4, scale: 1.15 }}
      >
        <ArrowUpRight className="h-5 w-5 text-vycl-lime" />
      </motion.span>
      <p className="relative mt-4 text-sm font-semibold leading-snug transition-colors group-hover:text-vycl-lime-muted">
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
          Vehicle Subscription Consulting
        </p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-vycl-dark sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
          Connecting the Dots to{" "}
          <span className="text-vycl-dark/80">Vehicle Subscription</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-vycl-text-muted sm:text-lg">
          The only consultancy purpose-built for the vehicle subscription
          economy. Expert guidance to launch, optimize, and scale your program.
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
              Get Started
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="#services"
              className="inline-flex min-w-[160px] items-center justify-center rounded-full border border-vycl-border bg-white px-7 py-3.5 text-sm font-semibold text-vycl-dark transition-colors hover:bg-vycl-cream-muted"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-6 flex items-center justify-center gap-2 text-sm text-vycl-text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className="font-bold text-vycl-dark">5.0</span>
          <span className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.06 }}
              >
                <Star className="h-4 w-4" />
              </motion.span>
            ))}
          </span>
          <span>from industry leaders</span>
        </motion.div>
      </FadeIn>

      <Stagger className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {statCards.map((card, i) => (
          <motion.div
            key={i}
            variants={staggerItem}
            className={`group shadow-[0_8px_30px_rgba(15,36,25,0.06)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(15,36,25,0.12)] ${card.className}`}
            whileHover={
              reduce
                ? undefined
                : { y: -6, transition: { type: "spring", stiffness: 420, damping: 22 } }
            }
          >
            {card.type === "image" && <ImageStatCard reduce={reduce} />}
            {card.type === "dark" && (
              <DarkStatCard stat={card.stat} label={card.label} reduce={reduce} />
            )}
            {card.type === "chart" && (
              <ChartStatCard stat={card.stat} label={card.label} reduce={reduce} />
            )}
            {card.type === "lime" && (
              <LimeStatCard stat={card.stat} label={card.label} reduce={reduce} />
            )}
            {card.type === "cta" && (
              <CtaStatCard label={card.label} href={card.href} reduce={reduce} />
            )}
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}

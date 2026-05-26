"use client";

import { Star } from "./icons";
import { FadeIn } from "./motion";

const testimonials = [
  {
    quote:
      "Ryan has a deep understanding of dealership operations and how subscription fits into the retail model.",
    name: "Conor Chinn",
    role: "Reynolds & Reynolds",
    date: "April 2025",
  },
  {
    quote:
      "Exceptional business leadership and professionalism. Ryan brings clarity to complex subscription strategy.",
    name: "Anil Chandy",
    role: "Northern Trust",
    date: "April 2025",
  },
  {
    quote:
      "A true leader with outstanding business acumen in the mobility and subscription space.",
    name: "Dan Grossman",
    role: "Shared Mobility Advisors",
    date: "April 2025",
  },
];

function TestimonialCard({
  quote,
  name,
  role,
  date,
}: (typeof testimonials)[number]) {
  return (
    <blockquote className="flex w-[min(100%,22rem)] shrink-0 flex-col rounded-3xl border border-vycl-border bg-vycl-cream p-6 sm:w-[22rem]">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-vycl-text">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-6 border-t border-vycl-border pt-4">
        <p className="font-semibold text-vycl-dark">{name}</p>
        <p className="text-sm text-vycl-text-muted">{role}</p>
        <p className="mt-1 text-xs text-vycl-text-muted">{date}</p>
      </footer>
    </blockquote>
  );
}

export function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-vycl-dark sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-base text-vycl-text-muted">
            Professionals across automotive, finance, and mobility recognize
            VYCL&apos;s expertise.
          </p>
        </FadeIn>
      </div>

      <div className="relative mt-14">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-24"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-24"
          aria-hidden
        />

        <div className="testimonials-marquee flex w-max gap-4 px-5 sm:px-8">
          {loop.map((item, i) => (
            <TestimonialCard key={`${item.name}-${i}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

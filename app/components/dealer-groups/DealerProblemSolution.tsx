"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "../motion";

const failureModes = [
  {
    title: "Wrong platform",
    description: "Not built for dealer subscription workflows",
  },
  {
    title: "No lender relationship",
    description: "No facility structured for fleet-based portfolios",
  },
  {
    title: "No insurance compliance",
    description: "Subscribers verified manually or not at all",
  },
  {
    title: "No operational playbook",
    description: "No workflows, staffing model, or day-one processes",
  },
];

const partners = [
  "JRNY",
  "Westlake / CULA",
  "Axle",
  "AVIS / Budget",
];

export function DealerProblemSolution() {
  return (
    <section className="bg-vycl-cream-muted px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-vycl-dark sm:text-4xl">
            Why most dealer subscription programs fail
          </h2>
        </FadeIn>

        <FadeIn className="mx-auto mt-12 max-w-3xl">
          <Accordion
            type="single"
            collapsible
            className="overflow-hidden rounded-2xl border border-vycl-border bg-white shadow-sm"
          >
            {failureModes.map((item, index) => (
              <AccordionItem
                key={item.title}
                value={`item-${index}`}
                className="border-vycl-border px-5 last:border-b-0"
              >
                <AccordionTrigger className="gap-3 py-5 text-base hover:no-underline sm:text-lg [&>svg]:text-vycl-text-muted">
                  <span className="flex flex-1 items-center gap-3 text-left">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-700">
                      <span className="text-xs font-bold" aria-hidden>
                        ×
                      </span>
                    </span>
                    <span className="font-semibold text-vycl-dark">
                      {item.title}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-9 text-sm leading-relaxed text-vycl-text-muted sm:text-base">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>

        <FadeIn className="mt-12 overflow-hidden rounded-3xl border border-vycl-border bg-vycl-dark px-8 py-10 text-center text-white sm:px-12">
          <p className="text-xl font-bold tracking-tight sm:text-2xl">
            VYCL solves all four   before you launch.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            We configure the JRNY platform as your exclusive US licensing partner,
            structure institutional lending with Westlake and CULA, verify every
            subscriber through Axle in real time, and run the operational
            playbook that took FlexRide live in 45 days with zero headcount.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {partners.map((name) => (
              <span
                key={name}
                className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold text-white/90"
              >
                {name}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/site";
import { FadeIn } from "../motion";

export function ContactCalendar() {
  return (
    <section className="relative overflow-hidden border-b border-vycl-border bg-vycl-dark px-5 py-10 sm:px-8 sm:py-12">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(15,36,25,0.92)_0%,rgba(15,110,86,0.55)_100%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl">
        <FadeIn className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Or schedule a call directly.
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-white/75">
            30 minutes. No pitch deck required. Just a conversation about where
            subscription fits in your business.
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-6">
          <div className="flex flex-col items-stretch gap-4 rounded-xl border border-white/10 bg-vycl-dark-card/90 p-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="flex items-center gap-3">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-lg bg-vycl-cream p-2 shadow-md shadow-black/15 transition-transform hover:scale-[1.02]"
              >
                <Image
                  src="/calendly-qr.png"
                  alt="QR code to schedule a vehicle subscription consultation with VYCL founder Ryan Yamauchi"
                  width={96}
                  height={96}
                  className="h-16 w-16"
                  priority
                />
              </Link>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-vycl-lime">
                  On your phone?
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  Scan to schedule
                </p>
                <p className="text-xs text-white/65">
                  30-min intro with Ryan Yamauchi
                </p>
              </div>
            </div>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-vycl-lime px-5 py-2.5 text-sm font-semibold text-vycl-dark transition-opacity hover:opacity-90 sm:self-center"
            >
              Open scheduler
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { CALENDLY_EMBED_URL, CALENDLY_URL } from "@/lib/site";
import { FadeIn } from "../motion";

const CALENDLY_CSS =
  "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_SCRIPT =
  "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

function ensureCalendlyStyles() {
  if (document.querySelector(`link[href="${CALENDLY_CSS}"]`)) return;
  const link = document.createElement("link");
  link.href = CALENDLY_CSS;
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

function loadCalendlyScript(): Promise<void> {
  if (window.Calendly) return Promise.resolve();

  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${CALENDLY_SCRIPT}"]`,
  );
  if (existing?.dataset.loaded === "true") return Promise.resolve();

  return new Promise((resolve, reject) => {
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        resolve();
      },
      { once: true },
    );
    script.addEventListener("error", () => reject(), { once: true });
    document.body.appendChild(script);
  });
}

export function ContactCalendar() {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = calendlyRef.current;
    if (!parent) return;

    let cancelled = false;

    ensureCalendlyStyles();
    loadCalendlyScript()
      .then(() => {
        if (cancelled || !calendlyRef.current || !window.Calendly) return;
        calendlyRef.current.replaceChildren();
        window.Calendly.initInlineWidget({
          url: CALENDLY_EMBED_URL,
          parentElement: calendlyRef.current,
        });
      })
      .catch(() => {
        /* Widget failed to load — link fallback remains in the QR card. */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative overflow-hidden border-t border-vycl-border bg-vycl-dark px-5 py-14 sm:px-8 sm:py-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(15,36,25,0.92)_0%,rgba(15,110,86,0.55)_100%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <FadeIn className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Or schedule a call directly.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            30 minutes. No pitch deck required. Just a conversation about where
            subscription fits in your business.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(240px,280px)] lg:items-stretch">
          <FadeIn delay={0.08} className="min-w-0">
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-black/25 ring-1 ring-white/10">
              <div
                ref={calendlyRef}
                className="calendly-inline-widget h-[min(600px,72vh)] w-full min-h-[480px]"
              />
            </div>
            <p className="mt-3 text-center text-xs text-white/50 lg:text-left">
              Prefer a new tab?{" "}
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-vycl-lime underline-offset-2 hover:underline"
              >
                Open scheduler
              </Link>
            </p>
          </FadeIn>

          <FadeIn
            delay={0.14}
            className="flex min-w-0 lg:h-[min(600px,72vh)] lg:min-h-[480px]"
          >
            <div className="flex w-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-vycl-dark-card/90 px-6 py-8 text-center backdrop-blur-sm sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-vycl-lime">
                On mobile?
              </p>
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-2xl bg-vycl-cream p-5 shadow-lg shadow-black/20 transition-transform hover:scale-[1.02]"
              >
                <Image
                  src="/calendly-qr.png"
                  alt="Scan to schedule a call with VYCL — calendly.com/vycl/30min"
                  width={220}
                  height={220}
                  className="mx-auto h-auto w-full max-w-[200px]"
                  priority
                />
              </Link>
              <h3 className="mt-6 text-lg font-bold text-white">
                Scan to schedule
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                30-minute intro call with Ryan Yamauchi
              </p>
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 break-all text-sm font-medium text-vycl-lime underline-offset-2 hover:underline"
              >
                calendly.com/vycl/30min
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

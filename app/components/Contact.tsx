"use client";

import { FormEvent, useState } from "react";
import { FadeIn } from "./motion";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-vycl-cream-muted px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <h2 className="text-3xl font-extrabold tracking-tight text-vycl-dark sm:text-4xl">
              Got Questions? We&apos;ve Got Answers.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-vycl-text-muted">
              Request consulting guidance, ask about vehicle subscription, or
              start a conversation with our team. We&apos;ll respond promptly.
            </p>
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-vycl-border bg-white p-5">
                <p className="text-sm font-semibold text-vycl-dark">
                  Schedule a Call
                </p>
                <p className="mt-1 text-sm text-vycl-text-muted">
                  Book a discovery call to discuss your subscription goals.
                </p>
              </div>
              <div className="rounded-2xl border border-vycl-border bg-white p-5">
                <p className="text-sm font-semibold text-vycl-dark">
                  Consulting Focus
                </p>
                <p className="mt-1 text-sm text-vycl-text-muted">
                  Strategic planning, operations, technology, and revenue
                  optimization.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-vycl-border bg-white p-6 sm:p-8"
          >
            {submitted ? (
              <p className="py-12 text-center text-base font-medium text-vycl-dark">
                Thank you! We&apos;ll be in touch shortly.
              </p>
            ) : (
              <>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-vycl-dark"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-vycl-border bg-vycl-cream px-4 py-3 text-sm outline-none ring-vycl-dark focus:ring-2"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-vycl-dark"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-vycl-border bg-vycl-cream px-4 py-3 text-sm outline-none ring-vycl-dark focus:ring-2"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-vycl-dark"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full resize-none rounded-xl border border-vycl-border bg-vycl-cream px-4 py-3 text-sm outline-none ring-vycl-dark focus:ring-2"
                      placeholder="Tell us about your subscription goals..."
                    />
                  </div>
                </div>
                <p className="mt-4 text-xs text-vycl-text-muted">
                  By submitting, you agree to our Privacy Policy and Terms of
                  Service.
                </p>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-full bg-vycl-dark py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Send Message
                </button>
              </>
            )}
          </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

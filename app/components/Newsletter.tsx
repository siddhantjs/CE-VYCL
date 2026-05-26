"use client";

import { FormEvent, useState } from "react";
import { FadeIn } from "./motion";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="border-t border-vycl-border bg-white px-5 py-16 sm:px-8">
      <FadeIn className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
        <div className="flex-1">
          <h2 className="text-2xl font-extrabold text-vycl-dark">
            Join Our Mailing List
          </h2>
          <p className="mt-2 text-sm text-vycl-text-muted">
            Industry insights and updates on the vehicle subscription economy.
          </p>
        </div>
        {submitted ? (
          <p className="text-sm font-medium text-vycl-dark">
            You&apos;re subscribed. Thank you!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="flex-1 rounded-full border border-vycl-border bg-vycl-cream px-5 py-3 text-sm outline-none ring-vycl-dark focus:ring-2"
            />
            <button
              type="submit"
              className="rounded-full bg-vycl-dark px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        )}
      </FadeIn>
    </section>
  );
}

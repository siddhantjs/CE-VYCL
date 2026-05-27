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
    <section className="border-t border-white/10 bg-vycl-dark px-5 py-16 text-white sm:px-8">
      <FadeIn className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
        <div className="flex-1">
          <h2 className="text-2xl font-extrabold text-white">
            Join Our Mailing List
          </h2>
          <p className="mt-2 text-sm text-white/65">
            Industry insights and updates on the vehicle subscription economy.
          </p>
        </div>
        {submitted ? (
          <p className="text-sm font-medium text-vycl-lime">
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
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/45 outline-none ring-vycl-lime focus:ring-2"
            />
            <button
              type="submit"
              className="rounded-full bg-vycl-lime px-6 py-3 text-sm font-semibold text-vycl-dark transition-opacity hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        )}
      </FadeIn>
    </section>
  );
}

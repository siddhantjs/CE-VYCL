"use client";

import { FormEvent, useState } from "react";
import { FadeIn } from "../motion";

const AUDIENCE_OPTIONS = [
  { value: "dealer-group", label: "Dealer Group" },
  { value: "lender", label: "Lender" },
  { value: "saas-platform", label: "SaaS Platform" },
  { value: "oem-fleet", label: "OEM or Fleet Operator" },
  { value: "other", label: "Other" },
] as const;

const inputClassName =
  "w-full rounded-xl border border-vycl-border bg-vycl-cream px-4 py-3 text-sm outline-none ring-vycl-dark focus:ring-2";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <FadeIn>
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
                  autoComplete="name"
                  className={inputClassName}
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
                  autoComplete="email"
                  className={inputClassName}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="mb-1.5 block text-sm font-medium text-vycl-dark"
                >
                  Company / Organization
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  autoComplete="organization"
                  className={inputClassName}
                  placeholder="Your company"
                />
              </div>
              <div>
                <label
                  htmlFor="audience"
                  className="mb-1.5 block text-sm font-medium text-vycl-dark"
                >
                  What best describes you?
                </label>
                <select
                  id="audience"
                  name="audience"
                  required
                  defaultValue=""
                  className={`${inputClassName} appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235c6b63' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                  }}
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  {AUDIENCE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
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
                  className={`${inputClassName} resize-none`}
                  placeholder="Tell us where you are and where you want to go..."
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
              Let&apos;s Talk
            </button>
          </>
        )}
      </form>
    </FadeIn>
  );
}

"use client";

import { FadeIn } from "../motion";

type ContactIntroProps = {
  centered?: boolean;
};

export function ContactIntro({ centered = false }: ContactIntroProps) {
  return (
    <FadeIn
      className={
        centered
          ? "mx-auto max-w-3xl text-center"
          : "max-w-2xl"
      }
    >
      <h1 className="text-3xl font-extrabold tracking-tight text-vycl-dark sm:text-4xl lg:text-5xl">
        Subscription Curious?
      </h1>
      <p className="mt-5 text-base leading-relaxed text-vycl-text-muted sm:text-lg">
        Whether you are a dealer group, lender, SaaS company or fleet operator,
        VYCL is here to demystify Vehicle Subscription and help you leverage it.
        Tell us who you are and where you want to go.
      </p>
    </FadeIn>
  );
}

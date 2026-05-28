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
        Ready to build your subscription program?
      </h1>
      <p className="mt-5 text-base leading-relaxed text-vycl-text-muted sm:text-lg">
        Whether you are a dealer group, lender, SaaS platform, or fleet
        operator   VYCL has a lane for you. Tell us where you are and where you
        want to go.
      </p>
    </FadeIn>
  );
}

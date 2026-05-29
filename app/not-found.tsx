import Link from "next/link";
import { CALENDLY_URL } from "@/lib/site";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-vycl-dark px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-2xl text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#0F6E56]">
            404
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            This page does not exist   but your subscription program can.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            Looks like that link is broken. Head back to the homepage or go
            straight to scheduling a call.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex rounded-full bg-vycl-lime px-8 py-3.5 text-sm font-semibold text-vycl-dark transition-opacity hover:opacity-90"
            >
              Back to Home
            </Link>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

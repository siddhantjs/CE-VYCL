import Link from "next/link";
import { LogoMark } from "./icons";
import { Newsletter } from "./Newsletter";

export function Footer() {
  return (
    <footer className="border-t border-vycl-border bg-vycl-cream">
      <Newsletter />
      <div className="border-t border-vycl-border px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="#home" className="flex items-center gap-2.5">
            <LogoMark className="h-7 w-7" />
            <span className="font-bold text-vycl-dark">VYCL</span>
          </Link>
          <p className="text-center text-sm text-vycl-text-muted">
            © {new Date().getFullYear()} VYCL LLC · vycl.ai · All rights
            reserved.
            <span className="mt-1 block text-xs">
              Hawaii-based. Operating nationally.
            </span>
          </p>
          <nav className="flex gap-6 text-sm text-vycl-text-muted">
            <Link href="#services" className="hover:text-vycl-dark">
              Six Pillars
            </Link>
            <Link href="#about" className="hover:text-vycl-dark">
              Founder
            </Link>
            <Link href="#contact" className="hover:text-vycl-dark">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

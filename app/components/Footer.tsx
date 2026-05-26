import Link from "next/link";
import { LogoMark } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-vycl-border bg-vycl-cream px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Link href="#home" className="flex items-center gap-2.5">
          <LogoMark className="h-7 w-7" />
          <span className="font-bold text-vycl-dark">VYCL</span>
        </Link>
        <p className="text-sm text-vycl-text-muted">
          © {new Date().getFullYear()} VYCL — All Rights Reserved.
        </p>
        <nav className="flex gap-6 text-sm text-vycl-text-muted">
          <Link href="#services" className="hover:text-vycl-dark">
            Services
          </Link>
          <Link href="#about" className="hover:text-vycl-dark">
            About
          </Link>
          <Link href="#contact" className="hover:text-vycl-dark">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}

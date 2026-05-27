import Link from "next/link";
import { CONTACT_PATH } from "@/lib/site";
import { LogoMark } from "./icons";
import { Newsletter } from "./Newsletter";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-vycl-dark text-white">
      <Newsletter />
      <div className="border-t border-white/10 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-2.5">
            <LogoMark className="h-7 w-7" />
            <span className="font-bold text-white">VYCL</span>
          </Link>
          <p className="text-center text-sm text-white/60">
            © {new Date().getFullYear()} VYCL LLC · vycl.ai · All rights
            reserved.
            <span className="mt-1 block text-xs">
              Hawaii-based. Operating nationally.
            </span>
          </p>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/65">
            <Link href="/services" className="hover:text-vycl-lime">
              Services
            </Link>
            <Link href="/programs" className="hover:text-vycl-lime">
              Programs
            </Link>
            <Link href="/#services" className="hover:text-vycl-lime">
              Six Pillars
            </Link>
            <Link href="/about" className="hover:text-vycl-lime">
              Founder
            </Link>
            <Link href={CONTACT_PATH} className="hover:text-vycl-lime">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
